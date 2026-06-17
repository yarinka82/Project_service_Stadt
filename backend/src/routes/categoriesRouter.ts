import express from "express";
import { controllerWrapper as wrapper } from "../middlewares/index.js";
import {
  getCategories,
  addCategory,
  getCategory,
  updateCategory,
  removeCategory,
} from "../controllers/index.js";

const router = express.Router();

router.get("/", wrapper(getCategories));
router.post("/", wrapper(addCategory));
router.get("/:categoryId", wrapper(getCategory));
router.put("/:categoryId", wrapper(updateCategory));
router.delete("/:categoryId", wrapper(removeCategory));

export default router;
