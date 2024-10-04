import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import TechInnovator, { ITechInnovator } from "@/models/TechInnovator";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body: ITechInnovator = await req.json();

    const techInnovator = new TechInnovator(body);
    const validationError = techInnovator.validateSync();
    if (validationError) {
      return NextResponse.json(
        { message: "Validation Error", errors: validationError.errors },
        { status: 400 }
      );
    }

    await techInnovator.save();

    return NextResponse.json(
      {
        message: "Tech Innovator registered successfully",
        data: techInnovator
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error registering Tech Innovator:", error);
    return NextResponse.json(
      {
        message: "Error registering Tech Innovator",
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
    const techInnovators = await TechInnovator.find({});
    return NextResponse.json({ data: techInnovators });
  } catch (error: any) {
    console.error("Error fetching Tech Innovators:", error);
    return NextResponse.json(
      {
        message: "Error fetching Tech Innovators",
        error: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
