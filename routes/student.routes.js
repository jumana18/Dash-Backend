const express = require("express");
const router = express.Router();
const {
  StudentCreateController,
  StudentGetController,
  StudentDeleteController,
} = require("../controller/student.controller");

// Create student
router.post("/createstudent", StudentCreateController);

// Get all students
router.get("/getstudents", StudentGetController);

// Delete student
router.delete("/deletestudent/:id", StudentDeleteController);

module.exports = router;
