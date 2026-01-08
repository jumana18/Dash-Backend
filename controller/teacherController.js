const Teacher = require("../models/Teacher");

exports.createTeacher = async (req, res) => {
  try {
    const { name, email, phone, department, courses } = req.body;

    if (!name || !email || !phone || !department) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const teacher = await Teacher.create({
      name,
      email,
      phone,
      department,
      courses,
      image: req.file ? req.file.filename : null,
    });

    res.status(201).json(teacher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTeachers = async (req, res) => {
  const teachers = await Teacher.find().populate("courses");
  res.json(teachers);
};

exports.deleteTeacher = async (req, res) => {
  await Teacher.findByIdAndDelete(req.params.id);
  res.json({ message: "Teacher deleted" });
};
