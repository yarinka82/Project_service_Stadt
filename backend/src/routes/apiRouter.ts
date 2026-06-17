import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json" with { type: "json" };

const router = express.Router();

const options = {
  explorer: false,
  swaggerOptions: { docExpansion: "none", filter: true },
};

router.use("/", swaggerUi.serve);
router.use("/", swaggerUi.setup(swaggerDocument, options));

export default router;
