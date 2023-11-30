// routes/index.mjs
import express from "express";

const router = express.Router();

// Define base paths for each route
router.use("/home", (req, res) => {
  res.status(200).send("This is homepage");
});
router.use("/header", (req, res) => {
  res.status(200).json({ Home: "http://localhost:5000/home", About: "http://localhost:5000/home/about" });
});
router.use("/home/about", (req, res) => {
  res.status(200).send("This is About Page");
});
router.use("/", (req, res) => {
  res.status(200).send("You Called Base Routes '/'");
});

export default router;
