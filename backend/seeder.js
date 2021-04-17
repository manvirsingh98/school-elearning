import dotenv from "dotenv";
import colors from "colors";

import users from "./data/users.js";
import courses from "./data/courses.js";

import User from "./models/userModel.js";
import Course from "./models/courseModel.js";
import connectDB from "./config/db.js";
import { admin } from "./middleware/authMiddleware.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Course.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleCourses = courses.map((course) => {
      return { ...course, user: adminUser };
    });

    console.log(sampleCourses);

    await Course.insertMany(sampleCourses);

    console.log("Data imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();

    console.log("Data destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] == "-d") {
  destroyData();
} else {
  importData();
}
