import express from "express";
import { z } from "zod";

const schema = z.object({
  username: z.string(),
  password: z.string(),
});

const app = express();

app.use(express.json());

const userMiddleWare = (req, res, next) => {
  const user = {
    username: req.headers.username,
    password: req.headers.password,
  };

  const response = schema.safeParse(user);

  if (!response.success) {
    // If validation fails, return an error message
    return res.status(400).json({
      message: "Invalid input",
      errors: response.error.errors,
    });
  }

  const { username, password } = response.data;

  if (username !== "Harish" || password !== "pass123") {
    return res.status(401).json({
      message: "Wrong user",
    });
  }

  next();
};

const kidneyMiddleWare = (req, res, next) => {
  const kidneyId = parseInt(req.query.kidneyId, 10);

  if (kidneyId !== 1 && kidneyId !== 2) {
    return res.status(400).json({
      message: "Wrong inputs",
    });
  }

  next();
};

app.get("/healthy-check", userMiddleWare, kidneyMiddleWare, (req, res) => {
  res.send("Your heart is healthy");
});

// Global error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Sorry, something is wrong with the server",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
