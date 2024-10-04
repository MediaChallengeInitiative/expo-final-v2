import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const BackToHomeLink = () => {
  return (
    <Link
      href="/register"
      className="inline-flex items-center space-x-2 text-white hover:text-yellow-200 transition duration-300 ease-in-out p-4 relative z-50"
    >
      <ArrowLeft className="w-6 h-6" />
      <span className="text-lg font-semibold">Back to Register</span>
    </Link>
  );
};

export default BackToHomeLink;
