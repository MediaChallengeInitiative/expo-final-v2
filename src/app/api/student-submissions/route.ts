import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import StudentSubmission from "@/models/StudentSubmission";

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();

    if (body.step === 1) {
      const { fullName, email, university, academicYear } = body;

      if (!fullName || !email || !university || !academicYear) {
        return NextResponse.json(
          { message: "All fields are required." },
          { status: 400 }
        );
      }

      const studentInfo = new StudentSubmission({
        fullName,
        email,
        university,
        academicYear
      });
      await studentInfo.save();

      return NextResponse.json(
        { message: "Student information saved", id: studentInfo._id },
        { status: 201 }
      );
    } else if (body.step === 2) {
      const { id, category } = body;

      if (!id || !category) {
        return NextResponse.json(
          { message: "Submission ID and category are required" },
          { status: 400 }
        );
      }

      const updatedSubmission = await StudentSubmission.findByIdAndUpdate(
        id,
        { category },
        { new: true }
      );

      if (!updatedSubmission) {
        return NextResponse.json(
          { message: "Submission not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(
        { message: "Submission completed", submission: updatedSubmission },
        { status: 200 }
      );
    }

    return NextResponse.json({ message: "Invalid step" }, { status: 400 });
  } catch (error) {
    // Use type narrowing with 'instanceof' to safely access the error message
    if (error instanceof Error) {
      console.error("Error processing submission:", error.message);
      return NextResponse.json(
        { message: "Error processing submission", error: error.message },
        { status: 500 }
      );
    } else {
      console.error("Unknown error occurred:", error);
      return NextResponse.json(
        { message: "Unknown error occurred", error: String(error) },
        { status: 500 }
      );
    }
  }
}
