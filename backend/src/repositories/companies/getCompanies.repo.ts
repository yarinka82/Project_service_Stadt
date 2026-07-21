import { Company, Address, Zip, City, State, Category, Location } from "../../db/models/index.js";

interface Filters {
  aglomerationId?: number | null;
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
  const hasLocationFilter = filters.aglomerationId !== null;
  const hasCategoryFilter = filters.categoryId !== null;
  const whereConditions: WhereConditions = {};
  const locationWhereConditions: WhereConditions = {};

  if (hasCategoryFilter) {
    whereConditions["$Categories.id$"] = filters.categoryId;
  }

  if (hasLocationFilter) {
    locationWhereConditions.aglomerationId = filters.aglomerationId;
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
        required: hasLocationFilter,
        include: [
          {
            model: Location,
            attributes: {
              include: ["id", "aglomerationId"],
              exclude: ["zipId", "cityId", "stateId", "createdAt", "updatedAt"],
            },
            where: locationWhereConditions,
            required: hasLocationFilter,
            include: [
              { model: Zip, attributes: ["code"] },
              { model: City, attributes: ["name"] },
              { model: State, attributes: ["name"] },
            ],
          },
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
        aglomerationId: address.Location.aglomerationId,
        zip: address.Location.Zip.code,
        city: address.Location.City.name,
        state: address.Location.State.name,
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
