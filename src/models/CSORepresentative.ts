import mongoose, { Document, Model } from "mongoose";

export interface ICSORepresentative extends Document {
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  email: string;
  organizationName: string;
  designation: string;
  country: string;
  city: string;
  nationality: string;
  ageBand: string;
}

const CSORepresentativeSchema = new mongoose.Schema<ICSORepresentative>(
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
    organizationName: {
      type: String,
      required: [true, "Organization name is required"],
      trim: true
    },
    designation: {
      type: String,
      required: [true, "Designation is required"],
      trim: true
    },
    country: {
      type: String,
      required: [true, "Country is required"],
      trim: true
    },
    city: {
      type: String,
      required: [true, "City is required"],
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

const CSORepresentative: Model<ICSORepresentative> =
  mongoose.models.CSORepresentative ||
  mongoose.model<ICSORepresentative>(
    "CSORepresentative",
    CSORepresentativeSchema
  );

export default CSORepresentative;
