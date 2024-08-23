import express from "express";

const app = express();

app.use(express.json());

const userMiddleWare = (req, res, next) => {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "Harish" && password != "pass123") {
    res.json({
      message: "wrong user",
    });
    return;
  }
  next();
};

const kidneyMiddleWare = (req, res, next) => {
  const kidneyId = req.query.kidneyId;

  if (kidneyId != 1 && kidneyId != 2) {
    res.json({
      message: "wrong inputs",
    });
    return;
  }
  next();
};

app.get("/healthy-check", userMiddleWare, kidneyMiddleWare, (req, res) => {
  res.send("your heart is healthy");
});

// global cathces
app.use(function (err, req, res, next) {
  res.send({
    msg: "Sorry something is wrong with the server",
  });
});

app.listen(3000, () => {
  console.log("server is running on 3000");
});
