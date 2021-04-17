import mongoose from "mongoose";

const courseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: { type: String },
    courseID: { type: String },
    chapters: [
      {
        name: { type: String },
        description: { type: String },
        videoUrl: { type: String },
      },
      {
        timestamps: true,
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
