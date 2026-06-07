import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/", (req, res) => {
  res.send("Got a POST request");
});

router.put("/", (req, res) => {
  res.send("Got a PUT request at /test");
});

router.delete("/", (req, res) => {
  res.send("Got a DELETE request at /test");
});

export default router;
