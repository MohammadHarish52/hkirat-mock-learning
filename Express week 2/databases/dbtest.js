import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://harish52:pd6686224@cluster0.vaolm.mongodb.net/"
);

const User = mongoose.model("user", {
  name: String,
  username: String,
  password: String,
});

const user = new User({
  name: "Harish",
  username: "tachyon",
  password: "pass456",
});

user.save();
