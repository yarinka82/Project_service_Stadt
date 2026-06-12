import express from "express";
import { controllerWrapper as wrapper } from "../middlewares/index.js";
import { getCities, getCity, addCity, updateCity, removeCity } from "../controllers/index.js";

const router = express.Router();

router.get("/", wrapper(getCities));
router.post("/", wrapper(addCity));
router.get("/:cityId", wrapper(getCity));
router.put("/:cityId", wrapper(updateCity));
router.delete("/:cityId", wrapper(removeCity));

export default router;
