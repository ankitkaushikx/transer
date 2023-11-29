// server/routes/test.js
import express from "express";
import { getTest, submitTest } from "../controllers/testController.js";

const router = express.Router();

// Define routes
router.get("/test", getTest); // GET request to /test
router.post("/test/submit", submitTest); // POST request to /test/submit

export default router;
