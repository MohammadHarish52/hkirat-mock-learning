const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic

  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({
      username: username,
      password: password,
    });

    if (existingUser) {
      return res.status(403).json({
        msg: "user already exists",
      });
    }
    const user = await User.create({
      username: username,
      password: password,
    });

    await user.save();

    res.status(200).json({
      msg: "user created succesfully",
    });
  } catch (error) {
    res.status(500).json({
      msg: "internal server error",
      error: error.message,
    });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic

  const courses = await Course.findOne({});

  res.json(courses);
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
  const { username, password } = req.headers;
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;
