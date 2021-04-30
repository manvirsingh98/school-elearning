import asyncHandler from "express-async-handler";
import Course from "../models/courseModel.js";
import User from "../models/userModel.js";

// @desc    Create a new course
// @route   POST /api/courses
// @access  Private
const createCourse = asyncHandler(async (req, res) => {
  const { courseID, name, description, chapters } = req.body;

  const courseExists = await Course.findOne({ courseID });

  if (courseExists) {
    res.status(400);
    throw new Error("Course already exists");
  }

  const course = await Course.create({
    courseID,
    name,
    description,
    chapters,
  });

  if (course) {
    res.status(201).json({
      _id: course._id,
      courseID: course.courseID,
      name: course.course,
      description: course.description,
      chapters: course.chapters,
    });
  } else {
    res.status(400);
    throw new Error("Invalid course data");
  }
});

// @desc    Create a new course
// @route   POST /api/courses
// @access  Private
const getCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({});

  if (courses) {
    res.json(courses);
  } else {
    res.status(404);
    throw new Error("courses not found");
  }
});

// @desc    get a course
// @route   POST /api/courses/:courseID
// @access  Private
const getCourse = asyncHandler(async (req, res) => {
  const courseID = req.params.courseID;
  const course = await Course.findOne({ courseID });

  if (course) {
    res.json(course);
  } else {
    res.status(404);
    throw new Error("course not found");
  }
});

export { createCourse, getCourses, getCourse };
