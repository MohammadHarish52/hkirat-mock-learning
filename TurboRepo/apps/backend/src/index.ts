import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello Duniya",
  });
});

app.listen(3003, () => {
  console.log("listenting on port 3000");
});
