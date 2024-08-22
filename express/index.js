import express from "express";

const app = express();

app.use(express.json());

app.get("/healthy-check", (req, res) => {
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;

  if (kidneyId != 1 && kidneyId != 2) {
    res.json({
      message: "wrong inputs",
    });
    return;
  }

  if (username != "Harish" && password != "pass123") {
    res.json({
      message: "wrong user",
    });
    return;
  }
  res.send("your heart is healthy");
});

app.listen(3000, () => {
  console.log("server is running on 3000");
});
