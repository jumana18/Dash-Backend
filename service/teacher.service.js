const Teacher = require("../models/Teacher");

// Create Teacher
exports.createTeacherService = async (data) => {
  return await Teacher.create(data);
};

// Get All Teachers
exports.getAllTeacherService = async () => {
  return await Teacher.find().populate("courses");
};

// Delete Teacher
exports.deleteTeacherService = async (id) => {
  return await Teacher.findByIdAndDelete(id);
};
