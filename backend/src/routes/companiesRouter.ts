import express from "express";
import { controllerWrapper as wrapper } from "../middlewares/index.js";
import {
  getCompanies,
  addCompany,
  getCompany,
  updateCompany,
  removeCompany,
  updateCompanyRating,
} from "../controllers/index.js";

const router = express.Router();

router.get("/", wrapper(getCompanies));
router.post("/", wrapper(addCompany));
router.get("/:companyId", wrapper(getCompany));
router.put("/:companyId", wrapper(updateCompany));
router.delete("/:companyId", wrapper(removeCompany));
router.patch("/:companyId", wrapper(updateCompanyRating));

export default router;
