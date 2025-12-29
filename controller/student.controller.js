const Student = require("../models/Student");

/* ---------------- CREATE STUDENT ---------------- */
exports.StudentCreateController = async (req, res) => {
  try {
    const { name, email, phone, course, status } = req.body;

    const student = await Student.create({
      name,
      email,
      phone,
      course,
      status,
    });

    res.status(201).json({
      success: true,
      message: "Student created successfully",
      student,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ---------------- GET ALL STUDENTS ---------------- */
exports.StudentGetController = async (req, res) => {
  try {
    const students = await Student.find().populate("course");
    res.status(200).json({
      success: true,
      students,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
