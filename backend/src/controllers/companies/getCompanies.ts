import { type Request, type Response } from "express";
import { getCompaniesRepo } from "../../repositories/index.js";
import createError from "http-errors";

export const getCompanies = async (req: Request, res: Response) => {
  const rawPage: number = parseInt(String(req.query.page ?? ""), 10);
  const rawLimit: number = parseInt(String(req.query.limit ?? ""), 10);
  const rawCityId = parseInt(String(req.query.cityId), 10);
  const rawCategoryId = parseInt(String(req.query.categoryId), 10);

  if (isNaN(rawCityId) || rawCityId < 1) {
    throw createError(400, "Invalid cityId. City ID must be a positive integer.");
    //throw new Error("Invalid cityId. City ID must be a positive integer.");
  }

  if (isNaN(rawCategoryId) || rawCategoryId < 1) {
    throw createError(400, "Invalid categoryId. Category ID must be a positive integer.");
    //throw new Error("Invalid categoryId. Category ID must be a positive integer.");
  }

  const page = isNaN(rawPage) || rawPage < 1 ? 1 : rawPage;
  const cityId = rawCityId;
  const categoryId = rawCategoryId;

  let limit = isNaN(rawLimit) || rawLimit < 1 ? 10 : rawLimit;

  limit = Math.min(limit, 100);

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
