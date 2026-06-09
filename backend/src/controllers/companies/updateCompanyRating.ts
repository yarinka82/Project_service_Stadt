import { type Request, type Response } from "express";

export const updateCompanyRating = (req: Request, res: Response) => {
  res.send(`Got a PATCH request at /companies/${req.params.companyId}`);
};
