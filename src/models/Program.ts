import mongoose, { Document, Model } from "mongoose";

export interface IProgram extends Document {
  type: "Mentorship" | "Training";
  benefits: string[];
  startDate: Date;
}

const ProgramSchema = new mongoose.Schema<IProgram>({
  type: {
    type: String,
    enum: ["Mentorship", "Training"],
    required: [true, "Please specify the program type"]
  },
  benefits: [
    {
      type: String,
      required: [true, "Please provide at least one benefit"]
    }
  ],
  startDate: {
    type: Date,
    required: [true, "Please provide a start date"]
  }
});

const Program: Model<IProgram> =
  mongoose.models.Program || mongoose.model<IProgram>("Program", ProgramSchema);

export default Program;
