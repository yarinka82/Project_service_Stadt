import { type Request, type Response } from "express";

export const getCities = (req: Request, res: Response) => {
  res.send("Got a GET request at /cities");
};
