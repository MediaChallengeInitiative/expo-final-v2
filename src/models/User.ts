// @/models/User.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  email: string;
  password: string;
  fullName: string;
  programType: string;
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  programType: { type: String, required: true }
});

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
