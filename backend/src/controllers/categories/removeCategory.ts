import { type Request, type Response } from "express";

export const removeCategory = (req: Request, res: Response) => {
  res.send(`Got a DELETE request at /categories/${req.params.categoryId}`);
};
