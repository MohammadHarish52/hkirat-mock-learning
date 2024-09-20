const { jwt } = require("jsonwebtoken");
const secret = require("../index");
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  // get the token
  const actualToken = token.split(" ");
  const jwtToken = actualToken[1];
  const decoded = jwt.verify(jwtToken, secret);
  if (decoded.username) {
    next();
  } else {
    res.json({
      msg: "user not authenticated",
    });
  }
}

module.exports = adminMiddleware;
