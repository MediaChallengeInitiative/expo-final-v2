import mongoose, { Document, Model } from "mongoose";

export interface IMediaManager extends Document {
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  email: string;
  mediaHouse: string;
  nationality: string;
  ageBand: string;
}

const MediaManagerSchema = new mongoose.Schema<IMediaManager>(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true
    },
    phoneNumber: {
      type: String,
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
    mediaHouse: {
      type: String,
      required: [true, "Media house name is required"],
      trim: true
    },
    nationality: {
      type: String,
      required: [true, "Nationality is required"],
      trim: true
    },
    ageBand: {
      type: String,
      required: [true, "Age band is required"],
      enum: ["15-20", "21-25", "26-30", "31-35", "36-40", "41-45", "46+"]
    }
  },
  { timestamps: true }
);

const MediaManager: Model<IMediaManager> =
  mongoose.models.MediaManager ||
  mongoose.model<IMediaManager>("MediaManager", MediaManagerSchema);

export default MediaManager;
