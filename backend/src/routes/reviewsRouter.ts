import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Got a GET request at /reviews");
});

router.post("/", (req, res) => {
  res.send("Got a POST request at /reviews");
});

router.get("/:reviewId", (req, res) => {
  res.send(`Got a GET request at /reviews/${req.params.reviewId}`);
});

router.put("/:reviewId", (req, res) => {
  res.send(`Got a PUT request at /reviews/${req.params.reviewId}`);
});

router.delete("/:reviewId", (req, res) => {
  res.send(`Got a DELETE request at /reviews/${req.params.reviewId}`);
});

export default router;
