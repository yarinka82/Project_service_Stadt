import { type Request, type Response } from "express";
import { getCompanyByIdRepo } from "../../repositories/index.js";

export const getCompany = async (req: Request, res: Response) => {
  const rawId = Array.isArray(req.params.companyId)
    ? req.params.companyId[0]
    : req.params.companyId;

  if (!rawId) {
    throw new Error("Company ID is required");
  }

  const id = parseInt(rawId, 10);

  const company = await getCompanyByIdRepo(id);

  res.status(200).json({
    status: "success",
    code: 200,
    data: company,
  });
};
