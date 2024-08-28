const express = require("express");
const zod = require("zod");
const { createTodo, updateTodo } = require("./types");

const app = express();
app.use(express.json());

const todoSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
});

app.post("/todo", async (req, res) => {
  const { title, description } = req.body;
  const todo = {
    title: title,
    description: description,
  };

  const todoCheck = createTodo.safeParse(todo);
  if (!todoCheck.success) {
    res.json({
      msg: "something wrong with inputs",
    });
    return;
  }
  // put it in mongodb
});
app.get("/todos", async (req, res) => {});

app.put("/completed", async (req, res) => {
  const { id } = req.body;
  const todo = {
    id: id,
  };
  const todoCheck = updateTodo.safeParse(todo);
  if (!todoCheck.success) {
    res.json({
      msg: "something wrong with inputs",
    });
    return;
  }
});

app.listen(3000, () => {
  console.log("port running on 3000");
});
