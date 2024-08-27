const { User } = require("../db");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers
  // and validate the user from the user DB.
  // Check readme for the exact headers
  // to be expected
  try {
    const { username, password } = req.headers;

    const existinguser = await User.findOne({
      username: username,
      password: password,
    });

    if (existinguser) {
      next();
    } else {
      res.status(403).json({
        msg: "user doesnt exist",
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "invalid data",
    });
  }
}

module.exports = userMiddleware;
