import {
  Company,
  City,
  Zip,
  State,
  Category,
  Address,
  Email,
  Phone,
  Website,
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
          { model: Zip, attributes: ["code"] },
          { model: City, attributes: ["name"] },
          { model: State, attributes: ["name"] },
        ],
      },
      { model: Email, attributes: ["email", "description"] },
      { model: Phone, attributes: ["phone", "description"] },
      { model: Website, attributes: ["website", "description"] },
    ],
  });

  const plainData = data ? data.get({ plain: true }) : null;
  const company = Object.entries(plainData).map(([key, value]) => {
    return { key, value };
  });

  return company;
};
