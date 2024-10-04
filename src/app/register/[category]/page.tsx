import React from "react";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import RegistrationForm from "@/components/Registration/RegistrationForm";
import { categories, Category } from "@/utils/categories";
import BackToHomeLink from "@/components/Registration/BackToHomeLink";

// Dynamically import the client component with no SSR
const AnimatedBackground = dynamic(
  () => import("@/components/Registration/AnimatedBackground"),
  { ssr: false }
);

const AfricanPatternSVG = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-10"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
  >
    <pattern
      id="africanPattern"
      patternUnits="userSpaceOnUse"
      width="20"
      height="20"
    >
      <path d="M0 0h20v20H0z" fill="none" stroke="#FFA500" strokeWidth="0.5" />
      <circle cx="10" cy="10" r="4" fill="#FFA500" />
      <path d="M0 10h20M10 0v20" stroke="#FFA500" strokeWidth="0.5" />
    </pattern>
    <rect width="100%" height="100%" fill="url(#africanPattern)" />
  </svg>
);

export default function Page({ params }: { params: { category: string } }) {
  const decodedCategory = decodeURIComponent(params.category).replace(
    /-/g,
    " "
  );
  const matchedCategory = categories.find(
    (c) => c.toLowerCase() === decodedCategory.toLowerCase()
  );

  if (!matchedCategory) {
    notFound();
  }

  const formatCategory = (category: string) => {
    if (category.length <= 10) return category;
    const words = category.split(' ');
    const firstWord = words.shift();
    const restOfWords = words.join(' ');
    return (
      <>
        {firstWord} <br /> {restOfWords}
      </>
    );
  };

  return (
    <div>
      <header className="p-4">
        <BackToHomeLink />
      </header>
      <AfricanPatternSVG />
      <AnimatedBackground />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="bg-teal-500 shadow-lg text-white text-4xl font-bold text-center py-10 rounded-lg w-[90%] max-w-xl mx-auto relative z-20">
          Registration for {formatCategory(matchedCategory)}
        </h1>
        <div className="relative z-10 -mt-6">
          <RegistrationForm category={matchedCategory} />
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.toLowerCase().replace(/ /g, "-")
  }));
}
// import { notFound } from "next/navigation";
// import RegistrationForm from "@/components/RegistrationForm";
// import { categories, Category } from "@/utils/categories";

// export default function Page({ params }: { params: { category: string } }) {
//   const decodedCategory = decodeURIComponent(params.category).replace(
//     /-/g,
//     " "
//   );

//   // Find the matching category, ignoring case
//   const matchedCategory = categories.find(
//     (c) => c.toLowerCase() === decodedCategory.toLowerCase()
//   );

//   if (!matchedCategory) {
//     notFound();
//   }

//   return (
//     <main className="container mx-auto px-4 py-8 relative">
//       <h1 className="bg-[#005381] shadow-inner shadow-white  text-white text-3xl font-semibold text-center py-10 rounded-lg w-[90%] max-w-2xl mx-auto relative z-10">
//         Registration for {matchedCategory}
//       </h1>
//       <div className="relative z-0 -mt-10">
//         <RegistrationForm category={matchedCategory} />
//       </div>
//     </main>
//   );
// }

// export function generateStaticParams() {
//   return categories.map((category) => ({
//     category: category.toLowerCase().replace(/ /g, "-")
//   }));
// }
