//--------------------------------Import Modules-------------------------------------
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
// -----------------------------Routes Import---------------------------------------
import router from "./routes/index.js";
import connectDB from "./db.js";

//
//--------------------------------App-----------------------------------------------

const app = express();

//
//--------------------------------Database------------------------------------------

connectDB();

//
//--------------------------------MiddleWare----------------------------------------

app.use(morgan("short"));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

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
