import { type Request, type Response } from "express";

export const removeCompany = (req: Request, res: Response) => {
  res.send(`Got a DELETE request at /companies/${req.params.companyId}`);
};
