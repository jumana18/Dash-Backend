const express = require("express");
const router = express.Router();

const upload = require("../middlewares/multer"); // 👈 ADD THIS

const {
  StudentCreateController,
  StudentGetController,
  StudentDeleteController,
} = require("../controller/student.controller");

// Create student (with image)
router.post(
  "/createstudent",
  upload.single("image"), // 👈 Multer middleware
  StudentCreateController
);

// Get all students
router.get("/getstudents", StudentGetController);

// Delete student
router.delete("/deletestudent/:id", StudentDeleteController);

module.exports = router;
