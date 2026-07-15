import { type Request, type Response } from "express";
import { getCategoriesRepo } from "../../repositories/categories/categories.repo.js";

export const getCategories = async (req: Request, res: Response) => {
  const categoriesList = await getCategoriesRepo();

  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      categories: categoriesList,
      total: categoriesList.length,
    },
  });
};
