import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  phone: String,
  password: String,
  googleId: String,
});

// Add passportLocalMongoose as a plugin
UserSchema.plugin(passportLocalMongoose);

// Create a model based on the schema
const User = mongoose.model("User", UserSchema);

export default User;
