import { type Request, type Response } from "express";

export const getCompany = async (req: Request, res: Response) => {
  res.send(`Got a GET request at /companies/${req.params.companyId}`);
};
