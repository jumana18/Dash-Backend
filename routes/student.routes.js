const express = require("express");
const router = express.Router();
const {
  StudentCreateController,
  StudentGetController,
} = require("../controller/student.controller");

// Routes
router.post("/createstudent", StudentCreateController);
router.get("/getstudents", StudentGetController);

module.exports = router;
