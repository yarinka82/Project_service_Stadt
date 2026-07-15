import express from "express";
import { controllerWrapper as wrapper } from "../middlewares/index.js";
import { getAglomerations} from "../controllers/index.js";

const router = express.Router();

router.get("/", wrapper(getAglomerations));

export default router;