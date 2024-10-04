import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import MediaManager, { IMediaManager } from "@/models/MediaManager";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body: IMediaManager = await req.json();

    const mediaManager = new MediaManager(body);
    const validationError = mediaManager.validateSync();
    if (validationError) {
      return NextResponse.json(
        { message: "Validation Error", errors: validationError.errors },
        { status: 400 }
      );
    }

    await mediaManager.save();

    return NextResponse.json(
      { message: "Media Manager registered successfully", data: mediaManager },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error registering Media Manager:", error);
    return NextResponse.json(
      {
        message: "Error registering Media Manager",
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
    const mediaManagers = await MediaManager.find({});
    return NextResponse.json({ data: mediaManagers });
  } catch (error: any) {
    console.error("Error fetching Media Managers:", error);
    return NextResponse.json(
      {
        message: "Error fetching Media Managers",
        error: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
