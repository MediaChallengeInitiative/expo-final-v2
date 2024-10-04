import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import GovernmentOfficial, {
  IGovernmentOfficial
} from "@/models/GovernmentOfficial";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body: IGovernmentOfficial = await req.json();

    const governmentOfficial = new GovernmentOfficial(body);
    const validationError = governmentOfficial.validateSync();
    if (validationError) {
      return NextResponse.json(
        { message: "Validation Error", errors: validationError.errors },
        { status: 400 }
      );
    }

    await governmentOfficial.save();

    return NextResponse.json(
      {
        message: "Government Official registered successfully",
        data: governmentOfficial
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error registering Government Official:", error);
    return NextResponse.json(
      {
        message: "Error registering Government Official",
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
    const governmentOfficials = await GovernmentOfficial.find({});
    return NextResponse.json({ data: governmentOfficials });
  } catch (error: any) {
    console.error("Error fetching Government Officials:", error);
    return NextResponse.json(
      {
        message: "Error fetching Government Officials",
        error: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
