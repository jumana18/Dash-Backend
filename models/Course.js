const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    duration: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", CourseSchema);
