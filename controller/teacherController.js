const Teacher = require("../models/Teacher");

// CREATE teacher
exports.createTeacher = async (req, res) => {
  try {
    const { name, email, phone, department, courses } = req.body;

    // 1️⃣ Check for missing fields
    if (!name || !email || !phone || !department) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // 2️⃣ Check if email already exists
    const existingTeacher = await Teacher.findOne({ email });
    if (existingTeacher) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // 3️⃣ Create new teacher
    const teacher = new Teacher({
      name,
      email,
      phone,
      department,
      courses,
    });

    await teacher.save();

    // 4️⃣ Success response
    res.status(201).json({ message: "Teacher created successfully", teacher });
  } catch (error) {
    console.error("Teacher create error:", error);

    // 5️⃣ Handle duplicate key error (extra safety)
    if (error.code === 11000) {
      return res.status(400).json({ error: "Email already exists" });
    }

    res.status(500).json({ error: "Server error" });
  }
};

// GET all teachers
exports.getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json(teachers);
  } catch (error) {
    console.error("Get teachers error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// GET single teacher by ID
exports.getTeacherById = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) return res.status(404).json({ error: "Teacher not found" });
    res.status(200).json(teacher);
  } catch (error) {
    console.error("Get teacher error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// UPDATE teacher
exports.updateTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!teacher) return res.status(404).json({ error: "Teacher not found" });
    res.status(200).json({ message: "Teacher updated", teacher });
  } catch (error) {
    console.error("Update teacher error:", error);
    if (error.code === 11000) {
      return res.status(400).json({ error: "Email already exists" });
    }
    res.status(500).json({ error: "Server error" });
  }
};

// DELETE teacher
exports.deleteTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(req.params.id);
    if (!teacher) return res.status(404).json({ error: "Teacher not found" });
    res.status(200).json({ message: "Teacher deleted successfully" });
  } catch (error) {
    console.error("Delete teacher error:", error);
    res.status(500).json({ error: "Server error" });
  }
};
