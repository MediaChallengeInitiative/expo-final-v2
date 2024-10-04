import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import MediaEditor, { IMediaEditor } from "@/models/MediaEditor";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body: IMediaEditor = await req.json();

    const mediaEditor = new MediaEditor(body);
    const validationError = mediaEditor.validateSync();
    if (validationError) {
      return NextResponse.json(
        { message: "Validation Error", errors: validationError.errors },
        { status: 400 }
      );
    }

    await mediaEditor.save();

    return NextResponse.json(
      { message: "Media Editor registered successfully", data: mediaEditor },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error registering Media Editor:", error);
    return NextResponse.json(
      {
        message: "Error registering Media Editor",
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
    const mediaEditors = await MediaEditor.find({});
    return NextResponse.json({ data: mediaEditors });
  } catch (error: any) {
    console.error("Error fetching Media Editors:", error);
    return NextResponse.json(
      {
        message: "Error fetching Media Editors",
        error: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
