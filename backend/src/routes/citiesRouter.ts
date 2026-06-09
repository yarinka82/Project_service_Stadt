import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Got a GET request at /cities");
});

router.post("/", (req, res) => {
  res.send("Got a POST request at /cities");
});

router.get("/:cityId", (req, res) => {
  res.send(`Got a GET request at /cities/${req.params.cityId}`);
});

router.put("/:cityId", (req, res) => {
  res.send(`Got a PUT request at /cities/${req.params.cityId}`);
});

router.delete("/:cityId", (req, res) => {
  res.send(`Got a DELETE request at /cities/${req.params.cityId}`);
});

export default router;
