const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer");

const {
  StudentCreateController,
  StudentGetController,
  StudentDeleteController,
  StudentUpdateController, // <-- import it
} = require("../controller/student.controller");

// Create student (with image)
router.post("/createstudent", upload.single("image"), StudentCreateController);

// Get all students
router.get("/getstudents", StudentGetController);

// Delete student
router.delete("/deletestudent/:id", StudentDeleteController);

// Update student
router.put(
  "/updatestudent/:id",
  upload.single("image"),
  StudentUpdateController
);

module.exports = router;
