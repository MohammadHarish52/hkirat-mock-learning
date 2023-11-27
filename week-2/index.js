//Express is a node libtrary that lets you create http servers
// on the internet

const express = require("express");
const app = express();
const port = 3000;

function sum(counter) {
  let result = 0;
  for (var i = 0; i <= counter; i++) {
    result += i;
  }
  return result;
}

// / declares the route we are referring too
// req is used to pass data to an express server

app.get("/handle", (req, res) => {
  var counter = req.query.counter;
  let calculatedAns = sum(counter);
  let calculate = "The answer is: " + calculatedAns;
  res.send(calculate);
});

function createUser(req, res) {
  res.send("helllo world");
}

app.post("/createuser", createUser);

// i will start listening on this port for incoming requests
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
