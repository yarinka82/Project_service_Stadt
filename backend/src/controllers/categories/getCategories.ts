import { type Request, type Response } from "express";

export const getCategories = (req: Request, res: Response) => {
  res.send("Got a GET request at /categories");
};  