import { Company, Address, Zip, City, State, Category } from "../../db/models/index.js";

interface Filters {
  cityId?: number | null;
  categoryId?: number | null;
}
interface Props {
  page: number;
  limit: number;
  filters: Filters;
}

interface WhereConditions {
  [key: string]: any;
}

export const getCompaniesRepo = async ({ page, limit, filters }: Props) => {
  const offset = (page - 1) * limit;
  const whereConditions: WhereConditions = {};

  if (filters.cityId !== null) {
    whereConditions["$Addresses.aglomerationId$"] = filters.cityId;
  }

  if (filters.categoryId !== null) {
    whereConditions["$Categories.id$"] = filters.categoryId;
  }

  const data = await Company.findAndCountAll({
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
    ],
    where: whereConditions,
    subQuery: false,
    limit,
    offset,
    order: [["id", "ASC"]],
    distinct: true,
    nest: true,
  });

  const companies = data.rows.map((company) => {
    const companyData = company.get({ plain: true });

    const addresses = companyData.Addresses.map((address: any) => {
      return {
        street: address.street,
        houseNr: address.houseNr,
        additionalAdrsInfo: address.additionalAdrsInfo,
        zip: address.Zip.code,
        city: address.City.name,
        state: address.State.name,
        coordinates: { latitude: address.latitude, longitude: address.longitude },
      };
    });

    const categories = companyData.Categories.map((category: any) => {
      return {
        id: category.id,
        name: category.name,
        description: category.description,
      };
    });

    return {
      id: companyData.id,
      name: companyData.name,
      description: companyData.description,
      logo: companyData.logo,
      categories,
      addresses,
    };
  });

  return { companies: companies, total: data.count };
};
