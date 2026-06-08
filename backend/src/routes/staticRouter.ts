import express from "express";
import path from "path";

const router = express.Router();
const iconsDir = path.join(process.cwd(), "public", "icons");

router.use(express.static(iconsDir));

export default router;
