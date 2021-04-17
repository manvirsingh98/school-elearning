import express from "express";
const router = express.Router();
import {
  authUsers,
  registerUsers,
  getUsers,
} from "../controllers/userController.js";
import { protect, restrictTo } from "../middleware/authMiddleware.js";

router
  .route("/")
  .post(registerUsers)
  .get(protect, restrictTo("admin", "teacher"), getUsers);

router.post("/login", authUsers);

export default router;
