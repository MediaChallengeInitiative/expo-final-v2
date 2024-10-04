import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Filmmaker, { IFilmmaker } from "@/models/Filmmaker";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body: IFilmmaker = await req.json();

    const filmmaker = new Filmmaker(body);
    const validationError = filmmaker.validateSync();
    if (validationError) {
      return NextResponse.json(
        { message: "Validation Error", errors: validationError.errors },
        { status: 400 }
      );
    }

    await filmmaker.save();

    return NextResponse.json(
      { message: "Filmmaker registered successfully", data: filmmaker },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error registering Filmmaker:", error);
    return NextResponse.json(
      {
        message: "Error registering Filmmaker",
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
    const filmmakers = await Filmmaker.find({});
    return NextResponse.json({ data: filmmakers });
  } catch (error: any) {
    console.error("Error fetching Filmmakers:", error);
    return NextResponse.json(
      {
        message: "Error fetching Filmmakers",
        error: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
