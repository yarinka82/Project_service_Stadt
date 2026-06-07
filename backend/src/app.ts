import express, { type NextFunction, type Request, type Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { logger } from "./config/logger.js";
import type { IErrorHandler } from "./utils/interfaces.js";
import {
  staticRouter,
  citiesRouter,
  companiesRouter,
  categoriesRouter,
  apiRouter,
} from "./routes/index.js";
import { MESSAGES, ROUTES } from "./utils/constants.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(logger);
app.use(express.json());

app.use(`/${ROUTES.API_DOCS}`, apiRouter);
app.use(`/${ROUTES.ICONS}`, staticRouter);
app.use(`/${ROUTES.CITIES}`, citiesRouter);
app.use(`/${ROUTES.COMPANIES}`, companiesRouter);
app.use(`/${ROUTES.CATEGORIES}`, categoriesRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: MESSAGES.NOT_FOUND });
});

app.use((err: IErrorHandler, req: Request, res: Response, next: NextFunction) => {
  const { status = 500, message = MESSAGES.SERVER_ERROR } = err;

  res.status(status).json({
    status: "error",
    code: status,
    message,
  });
});

export default app;
