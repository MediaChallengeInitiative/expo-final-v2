import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import MCIAlumni, { IMCIAlumni } from "@/models/MCIAlumni";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body: IMCIAlumni = await req.json();

    const mciAlumni = new MCIAlumni(body);
    const validationError = mciAlumni.validateSync();
    if (validationError) {
      return NextResponse.json(
        { message: "Validation Error", errors: validationError.errors },
        { status: 400 }
      );
    }

    await mciAlumni.save();

    return NextResponse.json(
      { message: "MCI Alumni registered successfully", data: mciAlumni },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error registering MCI Alumni:", error);
    return NextResponse.json(
      {
        message: "Error registering MCI Alumni",
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
    const mciAlumni = await MCIAlumni.find({});
    return NextResponse.json({ data: mciAlumni });
  } catch (error: any) {
    console.error("Error fetching MCI Alumni:", error);
    return NextResponse.json(
      {
        message: "Error fetching MCI Alumni",
        error: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
