import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import MediaOrganizationRep, {
  IMediaOrganizationRep
} from "@/models/MediaOrganizationRep";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body: IMediaOrganizationRep = await req.json();

    const mediaOrganizationRep = new MediaOrganizationRep(body);
    const validationError = mediaOrganizationRep.validateSync();
    if (validationError) {
      return NextResponse.json(
        { message: "Validation Error", errors: validationError.errors },
        { status: 400 }
      );
    }

    await mediaOrganizationRep.save();

    return NextResponse.json(
      {
        message: "Media Organization Representative registered successfully",
        data: mediaOrganizationRep
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error(
      "Error registering Media Organization Representative:",
      error
    );
    return NextResponse.json(
      {
        message: "Error registering Media Organization Representative",
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
    const mediaOrganizationReps = await MediaOrganizationRep.find({});
    return NextResponse.json({ data: mediaOrganizationReps });
  } catch (error: any) {
    console.error("Error fetching Media Organization Representatives:", error);
    return NextResponse.json(
      {
        message: "Error fetching Media Organization Representatives",
        error: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
