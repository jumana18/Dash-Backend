const express = require("express");
const router = express.Router();
const {
  StudentCreateController,
  StudentGetController,
} = require("../controller/student.controller");

// Create student
router.post("/createstudent", StudentCreateController);

// Get all students
router.get("/getstudents", StudentGetController);

module.exports = router;
