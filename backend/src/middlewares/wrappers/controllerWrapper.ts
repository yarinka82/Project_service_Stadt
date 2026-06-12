import { type NextFunction, type Request, type Response } from "express";

type Controller = (req: Request, res: Response, next: NextFunction) => void | Promise<void>;

export const controllerWrapper = (controller: Controller) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};
