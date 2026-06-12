import { type Request, type Response } from "express";

export const updateCompanyRating = (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    code: 200,
    data: {},
  });
};
