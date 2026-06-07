import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Got a GET request at /companies");
});

router.get("/:companyId", (req, res) => {
  res.send("Got a GET request at /companies/:companyId");
});

router.post("/", (req, res) => {
  res.send("Got a POST request at /companies");
});

router.put("/", (req, res) => {
  res.send("Got a PUT request at /companies");
});

router.delete("/", (req, res) => {
  res.send("Got a DELETE request at /companies");
});

export default router;
