const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDb = () => {
  mongoose
    .connect(`${process.env.MONGO_URI}`, {})
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.error("Database connection error:", err);
    });
};

const todoSchema = new mongoose.Schema({
  title: String,
  description: String, // Fixed typo: "desciption" -> "description"
  completed: Boolean,
});

const todoModel = mongoose.model("todo", todoSchema);

module.exports = {
  todoModel,
  connectDb, // Fixed typo here as well
};
