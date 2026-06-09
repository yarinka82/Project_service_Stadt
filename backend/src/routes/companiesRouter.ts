import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Got a GET request at /companies");
});

router.post("/", (req, res) => {
  res.send("Got a POST request at /companies");
});

router.get("/:companyId", (req, res) => {
  res.send(`Got a GET request at /companies/${req.params.companyId}`);
});

router.put("/:companyId", (req, res) => {
  res.send(`Got a PUT request at /companies/${req.params.companyId}`);
});

router.delete("/:companyId", (req, res) => {
  res.send(`Got a DELETE request at /companies/${req.params.companyId}`);
});

router.patch("/:companyId/rating", (req, res) => {
  res.send(`Got a PATCH request at /companies/${req.params.companyId}/rating`);
});

export default router;
