import mongoose, { Document, Model } from "mongoose";

export interface IStudentSubmission extends Document {
  fullName: string;
  email: string;
  university: string;
  academicYear: number;
  category:
    | "Cartoonist"
    | "Essay"
    | "Mini Feature"
    | "One Minute of Fame"
    | "Photography";
  submissionDate: Date;
}

const StudentSubmissionSchema = new mongoose.Schema<IStudentSubmission>(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      validate: {
        validator: function (v: string) {
          return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: (props: { value: string }) =>
          `${props.value} is not a valid email address!`
      }
    },
    university: {
      type: String,
      required: [true, "University is required"],
      trim: true
    },
    academicYear: {
      type: Number,
      required: [true, "Academic year is required"],
      enum: [1, 2, 3, 4]
    },
    category: {
      type: String,
      enum: [
        "Cartoonist",
        "Essay",
        "Mini Feature",
        "One Minute of Fame",
        "Photography"
      ]
    },
    submissionDate: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

// Check if model is already registered to avoid overwriting
const StudentSubmission: Model<IStudentSubmission> =
  mongoose.models.StudentSubmission ||
  mongoose.model<IStudentSubmission>(
    "StudentSubmission",
    StudentSubmissionSchema
  );

export default StudentSubmission;
