import { type Request, type Response } from "express";

export const removeReview = async (req: Request, res: Response) => {
  res.send(`Got a DELETE request at /reviews/${req.params.reviewId}`);
};
