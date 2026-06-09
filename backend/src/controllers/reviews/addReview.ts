import { type Request, type Response } from "express";

export const addReview = async (req: Request, res: Response) => {
  res.send("Got a POST request at /reviews");
};
