import {
  Company,
  City,
  Zip,
  State,
  Category,
  Address,
  Location,
  Email,
  PhoneNumber,
  PhoneType,
  Website,
  Aglomeration,
} from "../../db/models/index.js";

export const getCompanyByIdRepo = async (id: number) => {
  const data = await Company.findByPk(id, {
    attributes: {
      include: ["id", "name", "description", "logo"],
      exclude: ["createdAt", "updatedAt"],
    },
    include: [
      {
        model: Category,
        attributes: ["id", "name", "description"],
        through: { attributes: [] },
      },
      {
        model: Address,
        attributes: ["street", "houseNr", "additionalAdrsInfo", "latitude", "longitude"],
        include: [
          {
            model: Location,
            attributes: {
              include: ["id"],
              exclude: ["aglomerationId", "zipId", "cityId", "stateId", "createdAt", "updatedAt"],
            },
            include: [
              { model: Aglomeration, attributes: ["id", "name"] },
              { model: Zip, attributes: ["code"] },
              { model: City, attributes: ["name"] },
              { model: State, attributes: ["name"] },
            ],
          },
        ],
      },
      { model: Email, attributes: ["email", "description"] },
      { model: Website, attributes: ["url", "description"] },
      {
        model: PhoneNumber,
        attributes: ["number", "description"],
        include: [{ model: PhoneType, attributes: ["type"] }],
      },
    ],
  });

  if (data === null) {
    return null;
  }

  const plainData = data.get({ plain: true });
  const company = plainData;

  return company;
};
