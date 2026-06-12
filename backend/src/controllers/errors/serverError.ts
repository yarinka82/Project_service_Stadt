import { type NextFunction, type Request, type Response } from "express";
import { MESSAGES } from "../../utils/constants.js";
import type { IErrorHandler } from "../../utils/interfaces.js";

export const serverErrorHandler = (
  err: IErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { status = 500, message = MESSAGES.SERVER_ERROR } = err;

  res.status(status).json({
    status: "error",
    code: status,
    message,
  });
};
