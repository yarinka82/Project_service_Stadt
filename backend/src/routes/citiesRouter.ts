import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Got a GET request at /cities");
});

router.post("/", (req, res) => {
  res.send("Got a POST request at /cities");
});

router.put("/", (req, res) => {
  res.send("Got a PUT request at /cities");
});

router.delete("/", (req, res) => {
  res.send("Got a DELETE request at /cities");
});

export default router;
