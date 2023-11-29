import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@transercluster.wx8lrro.mongodb.net/transer?retryWrites=true&w=majority`;
    await mongoose.connect(uri);
    console.log("DATABASE CONNECTED");
  } catch (err) {
    console.error("DB CONNECTION ERROR", err);
  }
};

export default connectDB;
