// import modules
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import router from "./routes/test.js";
import connectDB from "./db.js";

// app
const app = express();

// db
connectDB();
// middleware

app.use(morgan("short"));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
//routes
app.use("/", router);

// port
const port = process.env.PORT || 5000;

// listener
const server = app.listen(port, () => {
  console.log("----------------------SERVER STARTED  SUCCESSFULLY AT: ", port);
});
