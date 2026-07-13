import { type Request, type Response } from "express";
import createError from "http-errors";
import { getCompaniesRepo } from "../../repositories/index.js";
import { MESSAGES } from "../../utils/constants.js";

export const getCompanies = async (req: Request, res: Response) => {
  const rawPage: number = parseInt(String(req.query.page ?? ""), 10);
  const rawLimit: number = parseInt(String(req.query.limit ?? ""), 10);

  const page = isNaN(rawPage) || rawPage < 1 ? 1 : rawPage;
  let limit = isNaN(rawLimit) || rawLimit < 1 ? 10 : rawLimit;

  limit = Math.min(limit, 100);

  const rawCityId: number | null = req.query.cityId ? parseInt(String(req.query.cityId), 10) : null;

  const rawCategoryId: number | null = req.query.categoryId
    ? parseInt(String(req.query.categoryId), 10)
    : null;

  if (rawCityId !== null) {
    if (isNaN(rawCityId) || rawCityId < 1) {
      throw createError(400, MESSAGES.FILTER_CITY_ID_TAIL);
    }
  }

  if (rawCategoryId !== null) {
    if (isNaN(rawCategoryId) || rawCategoryId < 1) {
      throw createError(400, MESSAGES.FILTER_CATEGORY_ID_TAIL);
    }
  }

  const cityId = rawCityId;
  const categoryId = rawCategoryId;

  const { companies, total } = await getCompaniesRepo({
    page,
    limit,
    filters: { cityId, categoryId },
  });

  res.status(200).json({
    status: "success",
    code: 200,
    data: companies,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
};
