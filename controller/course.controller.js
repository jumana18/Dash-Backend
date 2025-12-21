const ErrorHandler = require('../handlers/ErrorHandler');

const {
  createCourseService,
  getAllCourseService,
  getCourseService,
  updateCourseService,
  deleteCourseService
} = require('../service/course.service');

const CourseCreateController = async (req, res) => {
  try {
    const data = req.body;

    if (!data.title || !data.duration) {
      throw new ErrorHandler('title and duration are required', 400);
    }

    const course = await createCourseService(data);

    return res.status(200).json({
      success: true,
      message: 'Course created successfully',
      data: course
    });
  } catch (error) {
    return res.status(error.statusCode || 400).json({
      success: false,
      message: error.message
    });
  }
};

const CourseGetAllController = async (req, res) => {
  try {
    const courses = await getAllCourseService();

    return res.status(200).json({
      success: true,
      data: courses
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

const CourseGetController = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new ErrorHandler('id is required', 400);
    }

    const course = await getCourseService(id);

    return res.status(200).json({
      success: true,
      data: course
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

const CourseUpdateController = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;

    if (!id) {
      throw new ErrorHandler('id is required', 400);
    }

    const updatedCourse = await updateCourseService(id, update);

    return res.status(200).json({
      success: true,
      message: 'Course updated successfully',
      data: updatedCourse
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

const CourseDeleteController = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new ErrorHandler('id is required', 400);
    }

    const deletedCourse = await deleteCourseService(id);

    return res.status(200).json({
      success: true,
      message: 'Course deleted successfully',
      data: deletedCourse
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  CourseCreateController,
  CourseGetAllController,
  CourseGetController,
  CourseUpdateController,
  CourseDeleteController
};
