import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import CSORepresentative, {
  ICSORepresentative
} from "@/models/CSORepresentative";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body: ICSORepresentative = await req.json();

    const csoRepresentative = new CSORepresentative(body);
    const validationError = csoRepresentative.validateSync();
    if (validationError) {
      return NextResponse.json(
        { message: "Validation Error", errors: validationError.errors },
        { status: 400 }
      );
    }

    await csoRepresentative.save();

    return NextResponse.json(
      {
        message: "CSO Representative registered successfully",
        data: csoRepresentative
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error registering CSO Representative:", error);
    return NextResponse.json(
      {
        message: "Error registering CSO Representative",
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
    const csoRepresentatives = await CSORepresentative.find({});
    return NextResponse.json({ data: csoRepresentatives });
  } catch (error: any) {
    console.error("Error fetching CSO Representatives:", error);
    return NextResponse.json(
      {
        message: "Error fetching CSO Representatives",
        error: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
