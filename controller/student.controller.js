const Student = require("../models/Student");

// Create Student
const StudentCreateController = async (req, res) => {
  const { name, email, phone, course } = req.body;

  if (!name || !email || !phone || !course) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const student = await Student.create({ name, email, phone, course });
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all students
const StudentGetController = async (req, res) => {
  try {
    const students = await Student.find().populate("course");
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Delete student
const StudentDeleteController = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedStudent = await Student.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json({
      message: "Student deleted successfully",
      data: deletedStudent,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  StudentCreateController,
  StudentGetController,
  StudentDeleteController,
};
