import { Review, Company_Category } from "../../db/models/index.js";

interface Filters {
  companyId: number;
}

interface Props {
  page: number;
  limit: number;
  filters: Filters;
}

interface WhereConditions {
  [key: string]: any;
}

export const getReviewsRepo = async ({ page, limit, filters }: Props) => {
  const offset = (page - 1) * limit;
  const hasCompanyFilter = filters.companyId !== null;
  const whereConditions: WhereConditions = {};

  if (hasCompanyFilter) {
    whereConditions["companyId"] = filters.companyId;
  }

  const data = await Review.findAll({
    attributes: {
      include: ["id", "rating", "comment", "createdAt"],
      exclude: ["updatedAt"],
    },
    where: whereConditions,
  });

  const plainData = data.map((el: any) => el.get({ plain: true }));

  return plainData;
};
