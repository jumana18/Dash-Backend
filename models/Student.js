const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    image: {
      type: String, // stores file path
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
