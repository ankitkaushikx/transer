// import modules
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";

// app
const app = express();

// db
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@transercluster.wx8lrro.mongodb.net/transer?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => {
    console.log("DATABASE CONNECTED");
  })
  .catch((err) => {
    console.log("DB CONNECTION ERROR", err);
  });

// middleware
app.use(morgan("short"));
app.use(cors({ origin: true, credentials: true }));

// routes

// port
const port = process.env.PORT || 5000;

// listener
const server = app.listen(port, () => {
  console.log("----------------------SERVER STARTED  SUCCESSFULLY AT: ", port);
});
