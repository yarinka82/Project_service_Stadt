import express from "express";
import { controllerWrapper as wrapper } from "../middlewares/index.js";
import {
  getCityNamesList,
  getCityName,
  addCityName,
  updateCityName,
  removeCityName,
} from "../controllers/index.js";

const router = express.Router();

router.get("/", wrapper(getCityNamesList));
router.post("/", wrapper(addCityName));
router.get("/:cityNameId", wrapper(getCityName));
router.put("/:cityNameId", wrapper(updateCityName));
router.delete("/:cityNameId", wrapper(removeCityName));

export default router;
