const Student = require("../models/Student");
const fs = require("fs");
const path = require("path");

// CREATE
const StudentCreateController = async (req, res) => {
  try {
    const { name, email, phone, course } = req.body;

    if (!name || !email || !phone || !course) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const image = req.file ? `/uploads/students/${req.file.filename}` : null;

    const student = await Student.create({
      name,
      email,
      phone,
      course,
      image,
    });

    res.status(201).json({ success: true, student });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// GET
const StudentGetController = async (req, res) => {
  try {
    const students = await Student.find().populate("course");
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
const StudentDeleteController = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Student.findByIdAndDelete(id);

    if (!deleted) return res.status(404).json({ error: "Student not found" });

    res.status(200).json({ message: "Student deleted", data: deleted });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
const StudentUpdateController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, course } = req.body;

    const student = await Student.findById(id);
    if (!student) return res.status(404).json({ error: "Student not found" });

    // Delete old image if new uploaded
if (req.file) {
  if (student.image) {
    // Get only the filename
    const oldFileName = path.basename(student.image);
    const oldPath = path.join(
      __dirname,
      "..",
      "uploads",
      "students",
      oldFileName
    );

    try {
      if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
    } catch (err) {
      console.error("Error deleting old image:", err.message);
    }
  }

  student.image = `/uploads/students/${req.file.filename}`;
}


    student.name = name;
    student.email = email;
    student.phone = phone;
    student.course = course;

    await student.save();

    res.status(200).json({
      success: true,
      message: "Student updated",
      student,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  StudentCreateController,
  StudentGetController,
  StudentDeleteController,
  StudentUpdateController,
};
