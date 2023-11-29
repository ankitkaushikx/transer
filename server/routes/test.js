import express from "express";
const router = express.Router();

//import controllers

import getTest from "../controllers/testController.js";
//import middlewares

// api routes
router.get("/test", getTest);
export default router;
