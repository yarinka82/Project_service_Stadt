import { type Request, type Response } from "express";

export const addCategory = (req: Request, res: Response) => {
  res.send("Got a POST request at /categories");
};
