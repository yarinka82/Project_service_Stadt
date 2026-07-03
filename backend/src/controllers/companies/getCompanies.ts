import { type Request, type Response } from "express";
import { getCompaniesRepo } from "../../repositories/index.js";

export const getCompanies = async (req: Request, res: Response) => {
  const companies = await getCompaniesRepo();

  res.status(200).json({
    status: "success",
    code: 200,
    data: companies,
  });
};
