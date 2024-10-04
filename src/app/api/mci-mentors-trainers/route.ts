import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import MCIMentorTrainer, { IMCIMentorTrainer } from "@/models/MCIMentorTrainer";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body: IMCIMentorTrainer = await req.json();

    const mciMentorTrainer = new MCIMentorTrainer(body);
    const validationError = mciMentorTrainer.validateSync();
    if (validationError) {
      return NextResponse.json(
        { message: "Validation Error", errors: validationError.errors },
        { status: 400 }
      );
    }

    await mciMentorTrainer.save();

    return NextResponse.json(
      {
        message: "MCI Mentor/Trainer registered successfully",
        data: mciMentorTrainer
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error registering MCI Mentor/Trainer:", error);
    return NextResponse.json(
      {
        message: "Error registering MCI Mentor/Trainer",
        error: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const mciMentorsTrainers = await MCIMentorTrainer.find({});
    return NextResponse.json({ data: mciMentorsTrainers });
  } catch (error: any) {
    console.error("Error fetching MCI Mentors/Trainers:", error);
    return NextResponse.json(
      {
        message: "Error fetching MCI Mentors/Trainers",
        error: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
