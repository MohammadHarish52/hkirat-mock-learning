function callbackFn(result) {
  result.json().then(logResponseBody);
}
function logResponseBody(jsonBody) {
  console.log(jsonBody);
}

var sendObj = {
  method: "GET",
};

fetch("http://localhost:3000/handle?counter=10", sendObj).then(callbackFn);
