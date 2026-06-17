import { type Request, type Response } from "express";

export const addReview = async (req: Request, res: Response) => {
  res.status(201).json({
    status: "success",
    code: 201,
    data: {},
  });
};
