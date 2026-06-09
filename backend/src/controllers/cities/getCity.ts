import { type Request, type Response } from "express";

export const getCity = (req: Request, res: Response) => {
  res.send(`Got a GET request at /cities/${req.params.cityId}`);
};
