const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

// Enable CORS to allow requests from frontend
app.use(cors());

// Hardcoded todos array
const todos = [
  { id: 1, title: "Buy groceries", description: "Milk, Bread, Cheese" },
  { id: 2, title: "Walk the dog", description: "Take Charlie for a walk" },
  {
    id: 3,
    title: "Finish project",
    description: "Complete the coding project",
  },
  { id: 4, title: "Read a book", description: "Start reading a new novel" },
];

// Route to get a todo by id
app.get("/todo", (req, res) => {
  const id = parseInt(req.query.id);
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    res.json({ todo });
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
