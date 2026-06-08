import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Got a GET request at /categories");
});

router.post("/", (req, res) => {
  res.send("Got a POST request at /categories");
});

router.put("/", (req, res) => {
  res.send("Got a PUT request at /categories");
});

router.delete("/", (req, res) => {
  res.send("Got a DELETE request at /categories");
});

export default router;
