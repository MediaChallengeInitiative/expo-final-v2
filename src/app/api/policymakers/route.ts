import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import AcademiaScholar, { IAcademiaScholar } from "@/models/AcademiaScholar";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body: IAcademiaScholar = await req.json();

    const academiaScholar = new AcademiaScholar(body);
    const validationError = academiaScholar.validateSync();
    if (validationError) {
      return NextResponse.json(
        { message: "Validation Error", errors: validationError.errors },
        { status: 400 }
      );
    }

    await academiaScholar.save();

    return NextResponse.json(
      {
        message: "Academia/Scholar registered successfully",
        data: academiaScholar
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error registering Academia/Scholar:", error);
    return NextResponse.json(
      {
        message: "Error registering Academia/Scholar",
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
    const academiaScholars = await AcademiaScholar.find({});
    return NextResponse.json({ data: academiaScholars });
  } catch (error: any) {
    console.error("Error fetching Academia/Scholars:", error);
    return NextResponse.json(
      {
        message: "Error fetching Academia/Scholars",
        error: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
