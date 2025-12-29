const Student = require("../models/Student");

/* Create Student */
exports.createStudentService = async (data) => {
  return await Student.create(data);
};

/* Get All Students */
exports.getAllStudentService = async () => {
  return await Student.find().populate("course");
};

/* Get Single Student */
exports.getStudentService = async (id) => {
  return await Student.findById(id).populate("course");
};

/* Update Student */
exports.updateStudentService = async (id, data) => {
  return await Student.findByIdAndUpdate(id, data, { new: true });
};

/* Delete Student */
exports.deleteStudentService = async (id) => {
  return await Student.findByIdAndDelete(id);
};
