import { type Request, type Response } from "express";

export const updateCity = (req: Request, res: Response) => {
  res.send(`Got a PUT request at /cities/${req.params.cityId}`);
};
