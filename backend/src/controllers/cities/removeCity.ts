import { type Request, type Response } from "express";

export const removeCity = (req: Request, res: Response) => {
  res.send(`Got a DELETE request at /cities/${req.params.cityId}`);
};
