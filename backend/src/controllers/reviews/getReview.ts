import { type Request, type Response } from "express";

export const getReview = async (req: Request, res: Response) => {
  res.send(`Got a GET request at /reviews/${req.params.reviewId}`);
};
