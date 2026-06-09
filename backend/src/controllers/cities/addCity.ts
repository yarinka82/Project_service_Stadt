import { type Request, type Response } from "express";

export const addCity = (req: Request, res: Response) => {
  res.send("Got a POST request at /cities");
};
