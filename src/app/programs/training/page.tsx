// app/programs/training/page.tsx
import authOptions from "@/app/api/auth/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/auth/signin");
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Training Program</h1>
      <p>Welcome to the Training Program, {session.user.name}!</p>
      <p>Your user ID is: {session.user.id}</p>
      {/* Add more content for the Training program here */}
    </div>
  );
}