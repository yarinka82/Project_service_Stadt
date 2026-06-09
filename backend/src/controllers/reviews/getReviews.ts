import { type Request, type Response } from "express";

export const getReviews = async (req: Request, res: Response) => {
  res.send("Got a GET request at /reviews");
};
