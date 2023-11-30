//--------------------------------Import Modules-------------------------------------
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import LocalStrategy from "passport-local";
import User from "./models/userModel.js";
// -----------------------------Routes Import---------------------------------------
import router from "./routes/index.js";
import connectDB from "./db.js";
// ------------------------------AUTH Routes----------------------------------------
import authRoutes from "./routes/auth";

//
//--------------------------------App-----------------------------------------------

const app = express();

//
//--------------------------------Database------------------------------------------

connectDB();

//
//--------------------------------MiddleWare----------------------------------------
app.use(session({ secret: process.env.SECRET_KEY, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan("short"));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use("/auth", authRoutes);
//
// --------------------------------PASSPORT STRATEGY--------------------------------
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//
//--------------------------------Routes---------------------------------------------

app.use("/", router);

//
//--------------------------------Ports----------------------------------------------

const port = process.env.PORT || 5000;

//
//--------------------------------Listner-------------------------------------

const server = app.listen(port, () => {
  console.log("----------------------SERVER STARTED  SUCCESSFULLY AT: ", port);
});
