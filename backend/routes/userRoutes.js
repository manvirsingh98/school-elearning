import express from "express";
const router = express.Router();
import {
  authUsers,
  registerUsers,
  getAllUsers,
} from "../controllers/userController.js";

import { protect, restrictTo } from "../middleware/authMiddleware.js";

router
  .route("/")
  .post(registerUsers)
  .get(protect, restrictTo("admin", "teacher"), getAllUsers);

router.post("/login", authUsers);

export default router;
