import { type Request, type Response } from "express";

export const updateCompany = (req: Request, res: Response) => {
  res.send(`Got a PUT request at /companies/${req.params.companyId}`);
};
