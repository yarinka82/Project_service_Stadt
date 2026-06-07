import morgan from "morgan";
import { env } from "./env.js";
import { DEV_TYPES, LOG_TYPES } from "../utils/constants.js";

const isDevMode = env.dev_type === DEV_TYPES.DEV;
const loggerFormat = isDevMode ? LOG_TYPES.DEV : LOG_TYPES.SHORT;

export const logger = morgan(loggerFormat);
