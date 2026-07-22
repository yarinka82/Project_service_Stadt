import { type Request, type Response } from "express";
import { getCompanyByIdRepo } from "../../repositories/index.js";

interface CompanyResponse {
  status: string;
  code: number;
  data?: any;
  message?: string;
}

export const getCompany = async (req: Request, res: Response) => {
  const rawId = Array.isArray(req.params.companyId)
    ? req.params.companyId[0]
    : req.params.companyId;

  if (!rawId) {
    throw new Error("Company ID is required");
  }

  const id = parseInt(rawId, 10);

  if (isNaN(id)) {
    throw new Error("Invalid company ID");
  }

  const company = await getCompanyByIdRepo(id);

  const code = company ? 200 : 404;
  const status = company ? "success" : "Not Found";
  const response: CompanyResponse = {
    status: status,
    code: code,
  };

  if (company) {
    response.data = company;
  } else {
    response.message = `Company with ID ${id} not found`;
  }

  res.status(code).json(response);
};
