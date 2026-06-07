import type { ErrorRequestHandler } from "express";

export interface IErrorHandler extends ErrorRequestHandler {
  message?: string;
  status?: number;
}
