const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer");
const {
  createTeacher,
  getTeachers,
  deleteTeacher,
} = require("../controller/teacherController");

router.post("/create", upload.single("image"), createTeacher);
router.get("/", getTeachers);
router.delete("/:id", deleteTeacher);

module.exports = router;
