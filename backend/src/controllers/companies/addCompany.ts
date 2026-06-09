import { type Request, type Response } from "express";

export const addCompany = async (req: Request, res: Response) => {
  res.send("Got a POST request at /companies");
};
