import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Got a GET request at /categories");
});

router.post("/", (req, res) => {
  res.send("Got a POST request at /categories");
});

router.get("/:categoryId", (req, res) => {
  res.send(`Got a GET request at /categories/${req.params.categoryId}`);
});

router.put("/:categoryId", (req, res) => {
  res.send(`Got a PUT request at /categories/${req.params.categoryId}`);
});

router.delete("/:categoryId", (req, res) => {
  res.send(`Got a DELETE request at /categories/${req.params.categoryId}`);
});

export default router;
