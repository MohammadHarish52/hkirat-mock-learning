const express = require("express");
const zod = require("zod");
const { createTodo, updateTodo } = require("./types");
const { connectDb, todoModel } = require("./db");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

connectDb();

const todoSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
});

app.post("/todo", async (req, res) => {
  const { title, description } = req.body;
  const todoData = {
    title: title,
    description: description,
  };

  const todoCheck = createTodo.safeParse(todoData);
  if (!todoCheck.success) {
    return res.status(400).json({
      msg: "Invalid input data",
    });
  }

  try {
    const todo = await todoModel.create({
      title: title,
      description: description,
      completed: false,
    });

    res.status(201).json({
      msg: "Todo created",
      todo,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error creating todo",
      error: error.message,
    });
  }
});

app.get("/todos", async (req, res) => {
  try {
    const todos = await todoModel.find({});
    res.status(200).json({
      todos: todos,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error fetching todos",
      error: error.message,
    });
  }
});

app.put("/completed", async (req, res) => {
  const { id } = req.body;
  const todoData = { id: id };
  const todoCheck = updateTodo.safeParse(todoData);

  if (!todoCheck.success) {
    return res.status(400).json({
      msg: "Invalid input data",
    });
  }

  try {
    const result = await todoModel.updateOne({ _id: id }, { completed: true });

    if (result.nModified === 0) {
      return res.status(404).json({
        msg: "Todo not found or already completed",
      });
    }

    res.status(200).json({
      msg: "Todo updated",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error updating todo",
      error: error.message,
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
