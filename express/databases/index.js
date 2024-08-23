import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import dotenv from "dotenv";
const jwtPassword = "123456";

dotenv.config();

mongoose.connect(
  "mongodb+srv://harish52:pd6686224@cluster0.vaolm.mongodb.net/"
);

const User = mongoose.model("User", {
  name: String,
  username: String,
  pasword: String,
});

const app = express();
app.use(express.json());

function userExists(username, password) {
  // should check in the database
}

app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({ username: username });
  if (existingUser) {
    res.status(400).json({
      msg: "userAlredy exists",
    });
  }

  const user = new User({
    name: name,
    username: username,
    password: password,
  });

  await user.save();
  res.send({ msg: "user created succesfully" });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000, () => {
  console.log("server running");
});
