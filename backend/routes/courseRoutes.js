import express from "express";
const router = express.Router();
import {
  createCourse,
  getCourses,
  getCourse,
} from "../controllers/courseController.js";
// import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(createCourse).get(getCourses);

router.route("/:courseID").get(getCourse);
export default router;
