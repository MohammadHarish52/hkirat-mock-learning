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

app.get("/handle", (req, res) => {
  let calculatedAns = sum(800);
  let calculate = "The answer is: " + calculatedAns;
  res.send(calculate);
});

// i will start listening on this port for incoming requests
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
