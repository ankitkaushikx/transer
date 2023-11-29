import mongoose, { mongo } from "mongoose";

const TestSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
});

const Test = mongoose.model("Test", TestSchema);
export default Test;
