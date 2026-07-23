import { type Request, type Response } from "express";
import { getAglomerationsRepo } from "../../repositories/index.js";

export const getAglomerations = async (req: Request, res: Response) => {
  const data = await getAglomerationsRepo();

  res.status(201).json({
    status: "success",
    code: 200,
    data: data,
  });
};
