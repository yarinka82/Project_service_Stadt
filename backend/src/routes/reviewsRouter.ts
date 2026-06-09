import express from "express";
import { controllerWrapper as wrapper } from "../middlewares/index.js";
import {
  getReviews,
  addReview,
  getReview,
  updateReview,
  removeReview,
} from "../controllers/index.js";

const router = express.Router();

router.get("/", wrapper(getReviews));
router.post("/", wrapper(addReview));
router.get("/:reviewId", wrapper(getReview));
router.put("/:reviewId", wrapper(updateReview));
router.delete("/:reviewId", wrapper(removeReview));

export default router;
