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

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const { username } = req.headers;
  const id = req.params.courseId;

  const user = await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: id,
      },
    }
  );

  res.json({
    msg: "Course purchased succesfully",
    id: id,
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  try {
    const { username } = req.headers;

    // Fetch user
    const user = await User.findOne({ username: username });

    if (!user) {
      return res.status(404).json({
        msg: "User not found",
      });
    }

    // Check if user has purchased courses
    if (!user.purchasedCourses || user.purchasedCourses.length === 0) {
      return res.status(404).json({
        msg: "No purchased courses found",
      });
    }

    // Fetch courses based on purchased course IDs
    const courses = await Course.find({
      _id: { $in: user.purchasedCourses }, // Use $in to handle multiple IDs
    });

    res.status(200).json({
      courses: courses,
    });
  } catch (e) {
    res.status(500).json({
      msg: "Internal server error",
      error: e.message,
    });
  }
});

module.exports = router;
