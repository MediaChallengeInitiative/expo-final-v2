import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Student, { IStudent } from "@/models/Student";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body: IStudent = await req.json();

    const student = new Student(body);
    const validationError = student.validateSync();
    if (validationError) {
      return NextResponse.json(
        { message: "Validation Error", errors: validationError.errors },
        { status: 400 }
      );
    }

    await student.save();

    return NextResponse.json(
      { message: "Student registered successfully", data: student },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error registering Student:", error);
    return NextResponse.json(
      {
        message: "Error registering Student",
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
    const students = await Student.find({});
    return NextResponse.json({ data: students });
  } catch (error: any) {
    console.error("Error fetching Students:", error);
    return NextResponse.json(
      {
        message: "Error fetching Students",
        error: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
