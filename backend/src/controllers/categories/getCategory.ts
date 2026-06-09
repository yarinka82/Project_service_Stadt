import { type Request, type Response } from "express";

export const getCategory = (req: Request, res: Response) => {
  res.send(`Got a GET request at /categories/${req.params.categoryId}`);
};
