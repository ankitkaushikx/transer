// In your routes file (e.g., routes/auth.js)
import express from "express";
import passport from "passport";
import User from "../models/userModel"; // Adjust the path based on your file structure

const router = express.Router();

// Register route
router.post("/register", (req, res) => {
  // Implement user registration logic and create a new user
});

// Login route
router.post("/login", passport.authenticate("local"), (req, res) => {
  // Successful login
  res.json({ success: true, user: req.user });
});

// Logout route
router.get("/logout", (req, res) => {
  req.logout();
  res.json({ success: true, message: "Logged out successfully" });
});

export default router;
