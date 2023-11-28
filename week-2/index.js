//Express is a node libtrary that lets you create http servers
// on the internet

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

//app.use adds a middleware
app.use(bodyParser.json());

function sum(counter) {
  let result = 0;
  for (var i = 0; i <= counter; i++) {
    result += i;
  }
  return result;
}
function Multiply(counter) {
  let resultMultiply = 1;
  for (var i = 1; i <= counter; i++) {
    resultMultiply *= i;
  }
  return resultMultiply;
}

// / declares the route we are referring too
// req is used to pass data to an express server

function handleRequest(req, res) {
  // console.log(req.body);
  var counter = req.query.counter;
  // if (counter < 100000) {
  // var count = req.headers.count;
  let calculatedAns = sum(counter);
  let calculatedMul = Multiply(counter);
  //Json objrct
  let answerObj = {
    sum: calculatedAns,
    mul: calculatedMul,
  };

  res.status(200).send(answerObj);
}
//sending HTML
function givePage(req, res) {
  res.sendFile(__dirname + "/index.html");
}

app.get("/handle", handleRequest);
app.get("/", givePage);

function createUser(req, res) {
  res.send("helllo world");
}

app.post("/createuser", createUser);

// i will start listening on this port for incoming requests
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
