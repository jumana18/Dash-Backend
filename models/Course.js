const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    title: {
    type: String,
    required: true
  },
  duration: {
    type: String, 
    required: true
  }
}, { timestamps: true})
const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;