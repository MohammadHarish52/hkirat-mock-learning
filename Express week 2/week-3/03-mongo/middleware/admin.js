const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const { username, password } = req.headers;
  try {
    const existingUser = await Admin.findOne({
      username: username,
      password: password,
    });

    if (existingUser) {
      next();
    } else {
      res.status(403).json({
        msg: "user doesn't exist",
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ msg: "internal server error", erorr: error.message });
  }
}

module.exports = adminMiddleware;
