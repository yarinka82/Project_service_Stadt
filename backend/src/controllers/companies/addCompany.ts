import { type Request, type Response } from "express";

export const addCompany = async (req: Request, res: Response) => {
  res.status(201).json({
    status: "success",
    code: 201,
    data: {},
  });
};
