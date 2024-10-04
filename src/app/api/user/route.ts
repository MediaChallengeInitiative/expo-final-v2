import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import authOptions from "../auth/authOptions";

// Explicitly mark this route as dynamic
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    // Ensure getServerSession is called within the main execution context
    const session = await getServerSession(authOptions);

    // Check if the session is valid
    if (!session || !session.user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    // Connect to the database
    await connectToDatabase();

    // Extract user ID from the session
    const userId = session.user.id;

    // Fetch the user from the database
    const user = await User.findById(userId).select("-password");

    // Check if user exists
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Return the user data
    return NextResponse.json(user);
  } catch (error) {
    // Log the error and return a server error response
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}





// import { NextRequest, NextResponse } from "next/server";
// import { getServerSession } from "next-auth/next";
// import { connectToDatabase } from "@/lib/mongodb";
// import User from "@/models/User";
// import authOptions from "../auth/authOptions";

// // Explicitly mark this route as dynamic
// export const dynamic = 'force-dynamic';

// export async function GET(req: NextRequest) {
//   // Ensure getServerSession is called within the main execution context
//   const session = await getServerSession(authOptions);

//   // Check if the session is valid
//   if (!session || !session.user) {
//     return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
//   }

//   try {
//     // Connect to the database
//     await connectToDatabase();

//     // Extract user ID from the session
//     const userId = session.user.id;

//     // Fetch the user from the database
//     const user = await User.findById(userId).select("-password");

//     // Check if user exists
//     if (!user) {
//       return NextResponse.json({ error: "User not found" }, { status: 404 });
//     }

//     // Return the user data
//     return NextResponse.json(user);
//   } catch (error) {
//     // Log the error and return a server error response
//     console.error("Error fetching user:", error);
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }