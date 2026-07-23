import { type Request, type Response } from "express";
import { getCitiesRepo } from "../../repositories/index.js";

export const getCityNamesList = async (req: Request, res: Response) => {
  const citiesList = await getCitiesRepo();

  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      cities: citiesList,
    },
  });
};
