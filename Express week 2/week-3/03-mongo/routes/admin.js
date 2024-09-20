const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
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

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageLink } = req.body;

  const course = await Course.create({
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
  });

  await course.save();

  res.json({
    msg: "Course created Succesfully",
    courseId: course._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});
  res.json({
    courses: courses,
  });
});

module.exports = router;
