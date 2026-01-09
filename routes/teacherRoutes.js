const express = require("express");
const router = express.Router();
const {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
} = require("../controller/teacherController");

// Routes
router.post("/", createTeacher); // Create
router.get("/", getAllTeachers); // Get all
router.get("/:id", getTeacherById); // Get one
router.put("/:id", updateTeacher); // Update
router.delete("/:id", deleteTeacher); // Delete

module.exports = router;
