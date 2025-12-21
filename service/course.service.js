const Course = require('../models/Course');
const ErrorHandler = require('../handlers/ErrorHandler');

const createCourseService = async (courseData) => {
    const course = new Course(courseData);
    return course.save();
}

const getAllCourseService = async () => {
    return await Course.find();
}
const getCourseService = async (id) => {
    const course = await Course.findById(id);
    if (!course) {
        throw new ErrorHandler('Course not found', 404);
    }
    return course;
}
const updateCourseService = async (id, updateData) => {
  const existingCourse = await Course.findById(id);
  if (!existingCourse) {
      throw new ErrorHandler('Course not found', 404);
  }
  const updatedCourse = await Course.findByIdAndUpdate(id, updateData, { new: true });
  return updatedCourse;
}

const deleteCourseService = async (id) => {
  const existingCourse = await Course.findById(id);
    if (!existingCourse) {
        throw new ErrorHandler('Course not found', 404);
    }
    const course = await Course.findByIdAndDelete(id);
    return course;
}
module.exports = { createCourseService, getAllCourseService,getCourseService, updateCourseService, deleteCourseService };