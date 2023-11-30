// routes/index.mjs
import express from "express";

const router = express.Router();

// Define base paths for each route
router.use("/", (req, res) => {
  res.status(200).send("You Called Base Routes '/'");
});

router.use("/", (req, res) => {});
export default router;
