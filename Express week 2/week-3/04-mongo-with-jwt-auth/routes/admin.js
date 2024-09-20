const { Router } = require("express");
const { jwt } = require("jsonwebtoken");
const secret = require("../index");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const User = require("../db/index");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  try {
    const { username, password } = req.body;

    // Check if the user with this username already exists
    const existingUser = await Admin.findOne({ username, password });

    if (existingUser) {
      return res.status(403).json({
        msg: "Admin already exists",
      });
    }

    // Create a new user
    const user = await Admin.create({
      username: username,
      password: password,
    });

    // Save the user to the database
    await user.save();

    // Send a success response
    res.status(201).json({
      msg: "Admin created successfully",
      Admin: { username: user.username }, // Returning only safe information
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal server error",
      error: error.message,
    });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;

  const user = await User.findOne({
    username,
    password,
  });
  if (user) {
    const token = jwt.sign(
      {
        username,
      },
      secret
    );

    res.json({
      token,
    });
  } else {
    res.status(411).json({
      message: "incorrect credentials",
    });
  }
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
});

module.exports = router;
