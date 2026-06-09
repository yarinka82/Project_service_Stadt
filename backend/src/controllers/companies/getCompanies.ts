import { type Request, type Response } from "express";

export const getCompanies = async (req: Request, res: Response) => {
  res.send("Got a GET request at /companies");
};
