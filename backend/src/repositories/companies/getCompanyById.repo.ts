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
        attributes: ["id", "street", "houseNr", "additionalAdrsInfo", "latitude", "longitude"],
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
      { model: Email, attributes: ["id", "email", "description"] },
      { model: Website, attributes: ["id", "url", "description"] },
      {
        model: PhoneNumber,
        attributes: ["id", "number", "description"],
        include: [{ model: PhoneType, attributes: ["type"] }],
      },
    ],
  });

  if (data === null) {
    return null;
  }

  const plainData = data.get({ plain: true });
  const company = {
    id: plainData.id,
    name: plainData.name,
    description: plainData.description,
    logo: plainData.logo,
    categories: plainData.Categories.map((category: any) => ({
      id: category.id,
      name: category.name,
      description: category.description,
    })),
    addresses: plainData.Addresses.map((address: any) => ({
      id: address.id,
      street: address.street,
      houseNr: address.houseNr,
      additionalAdrsInfo: address.additionalAdrsInfo,
      zip: address.Location.Zip.code,
      city: address.Location.City.name,
      state: address.Location.State.name,
      latitude: address.latitude,
      longitude: address.longitude,
      aglomerationId: address.Location.Aglomeration.id,
      aglomerationName: address.Location.Aglomeration.name,
    })),
    emails: plainData.Emails.map((email: any) => ({
      id: email.id,
      email: email.email,
      description: email.description,
    })),
    websites: plainData.Websites.map((website: any) => ({
      id: website.id,
      url: website.url,
      description: website.description,
    })),
    phoneNumbers: plainData.PhoneNumbers.map((phoneNumber: any) => ({
      id: phoneNumber.id,
      number: phoneNumber.number,
      description: phoneNumber.description,
      type: phoneNumber.PhoneType.type,
    })),
  };

  return company;
};
