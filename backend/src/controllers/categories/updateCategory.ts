import { type Request, type Response } from "express";

export const updateCategory = (req: Request, res: Response) => {
  res.send(`Got a PUT request at /categories/${req.params.categoryId}`);
};
