import React from "react";
import Link from "next/link";

type Category =
  | "MEDIA MANAGERS"
  | "MEDIA EDITORS"
  | "POLICYMAKERS"
  | "ACADEMIA/SCHOLARS"
  | "STUDENTS"
  | "TECH INNOVATORS/EXPERTS"
  | "MCI MENTORS & TRAINERS"
  | "MCI ALUMNI"
  | "FILM-MAKERS"
  | "CIVIL SOCIETY ORGANIZATIONS (CSOs)"
  | "MEDIA ORGANIZATIONS"
  | "GOVERNMENT OFFICIALS";

interface BreadcrumbProps {
  category: Category | null;
  customTitle?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ category, customTitle }) => {
  const getPathAndTitle = (
    category: Category | null
  ): { path: string; title: string } => {
    if (!category) {
      return { path: "Register", title: "Registration" };
    }

    const path =
      "Register / " +
      category.charAt(0).toUpperCase() +
      category.slice(1).toLowerCase();
    const title = `Register as ${category}`;

    return { path, title };
  };

  const { path, title } = getPathAndTitle(category);
  const displayTitle = customTitle || title;

  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/about1.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Breadcrumb Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[300px] py-16 px-4 sm:px-6 lg:px-8">
        <nav
          className="w-full max-w-4xl mx-auto text-center mb-8"
          aria-label="Breadcrumb"
        >
          <ol className="flex flex-wrap justify-center items-center space-x-2 sm:space-x-4">
            <li className="flex items-center">
              <Link
                href="/"
                className="text-sm sm:text-base font-medium text-gray-300 hover:text-white transition duration-150 ease-in-out flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Home
              </Link>
            </li>
            {path.split(" / ").map((item, index, array) => (
              <li key={index} className="flex items-center">
                <svg
                  className="w-5 h-5 text-gray-400 mx-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span
                  className={`text-sm sm:text-base font-medium ${
                    index === array.length - 1
                      ? "text-gray-200"
                      : "text-gray-300 hover:text-white"
                  }`}
                  aria-current={index === array.length - 1 ? "page" : undefined}
                >
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center leading-tight">
          {displayTitle}
        </h1>
      </div>
    </div>
  );
};

export default Breadcrumb;
