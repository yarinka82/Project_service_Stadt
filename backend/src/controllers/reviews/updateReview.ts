import { type Request, type Response } from "express";

export const updateReview = async (req: Request, res: Response) => {
  res.send(`Got a PUT request at /reviews/${req.params.reviewId}`);
};
