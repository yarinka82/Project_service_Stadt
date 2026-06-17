import { type Request, type Response } from "express";
import { MESSAGES } from "../../utils/constants.js";

export const pageNotFoundHandler = (req: Request, res: Response) => {
  res.status(404).json({ message: MESSAGES.NOT_FOUND });
};
