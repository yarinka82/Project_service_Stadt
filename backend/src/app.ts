import express from "express";
import cors from "cors";
import helmet from "helmet";
import { logger } from "./config/logger.js";
import { pageNotFoundHandler, serverErrorHandler } from "./controllers/index.js";
import { ROUTES } from "./utils/constants.js";
import {
  staticRouter,
  cityNamesListRouter,
  companiesRouter,
  categoriesRouter,
  apiRouter,
  reviewsRouter,
  aglomerationsRouter,
} from "./routes/index.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(logger);
app.use(express.json());

app.use(`/${ROUTES.API_DOCS}`, apiRouter);
app.use(`/${ROUTES.ICONS}`, staticRouter);
app.use(`/${ROUTES.CITIES}`, cityNamesListRouter);
app.use(`/${ROUTES.COMPANIES}`, companiesRouter);
app.use(`/${ROUTES.CATEGORIES}`, categoriesRouter);
app.use(`/${ROUTES.REVIEWS}`, reviewsRouter);
app.use(`/${ROUTES.AGLOMERATIONS}`, aglomerationsRouter);
app.use(pageNotFoundHandler);
app.use(serverErrorHandler);

export default app;
