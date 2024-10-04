"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";

const categories = [
  {
    name: "Cartoonist",
    link: "https://drive.google.com/drive/folders/1UrEUV_s4gqMfb17QEgSnrzKKtwMzj4yC?usp=drive_link"
  },
  {
    name: "Essay",
    link: "https://drive.google.com/drive/folders/1BJ4cp3v6VMOgZETGu185uEEJ9kZ5B2A7?usp=drive_link"
  },
  {
    name: "Mini Feature",
    link: "https://drive.google.com/drive/folders/16G8om2SylO-WBcaKZuiAA0feqXEiIeHc?usp=drive_link"
  },
  {
    name: "One Minute of Fame",
    link: "https://drive.google.com/drive/folders/1g-oU2UjUCht-o0XEOo7ux2SKdY-mmPgb?usp=drive_link"
  },
  {
    name: "Photography",
    link: "https://drive.google.com/drive/folders/1s6837zqr7Ts420cw1h-DawvtkPTTULJO?usp=drive_link"
  }
];

export default function StudentSubmissionPage() {
  const [step, setStep] = useState(1);
  const [studentInfo, setStudentInfo] = useState({
    fullName: "",
    email: "",
    university: "",
    academicYear: ""
  });
  const [category, setCategory] = useState("");
  const [submissionId, setSubmissionId] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleStudentInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setStudentInfo({ ...studentInfo, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleStudentInfoSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/student-submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...studentInfo, step: 1 })
      });

      if (response.ok) {
        const data = await response.json();
        setSubmissionId(data.id);
        setStep(2);
      } else {
        const data = await response.json();
        setError(data.message || "Something went wrong");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  const handleCategorySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/student-submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: submissionId, category, step: 2 })
      });

      if (response.ok) {
        const selectedCategory = categories.find((c) => c.name === category);
        if (selectedCategory) {
          window.location.href = selectedCategory.link;
        }
      } else {
        const data = await response.json();
        setError(data.message || "Something went wrong");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Breadcrumb category={null} customTitle="Student Submissions" />

      <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl sm:mt-12 sm:p-8 md:mt-16">
        {error && (
          <p className="text-red-500 mb-6 p-4 bg-red-100 rounded-lg text-center animate-pulse">
            {error}
          </p>
        )}

        {step === 1 && (
          <form onSubmit={handleStudentInfoSubmit} className="space-y-6">
            <div className="space-y-4 sm:space-y-6">
              <div className="transition-all duration-300 hover:transform hover:scale-105">
                <label
                  htmlFor="fullName"
                  className="block mb-2 text-sm font-medium text-gray-700 sm:text-base"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={studentInfo.fullName}
                  onChange={handleStudentInfoChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="transition-all duration-300 hover:transform hover:scale-105">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-700 sm:text-base"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={studentInfo.email}
                  onChange={handleStudentInfoChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="transition-all duration-300 hover:transform hover:scale-105">
                <label
                  htmlFor="university"
                  className="block mb-2 text-sm font-medium text-gray-700 sm:text-base"
                >
                  University
                </label>
                <input
                  type="text"
                  id="university"
                  name="university"
                  value={studentInfo.university}
                  onChange={handleStudentInfoChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  placeholder="Enter your university name"
                />
              </div>
              <div className="transition-all duration-300 hover:transform hover:scale-105">
                <label
                  htmlFor="academicYear"
                  className="block mb-2 text-sm font-medium text-gray-700 sm:text-base"
                >
                  Academic Year
                </label>
                <select
                  id="academicYear"
                  name="academicYear"
                  value={studentInfo.academicYear}
                  onChange={handleStudentInfoChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 appearance-none bg-white"
                >
                  <option value="">Select academic year</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#005381] text-white py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105 sm:text-lg"
            >
              Next Step
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleCategorySubmit} className="space-y-6">
            <div className="transition-all duration-300 hover:transform hover:scale-105">
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-700 sm:text-base"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={category}
                onChange={handleCategoryChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 appearance-none bg-white"
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat.name} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105 sm:text-lg"
            >
              Submit and Go to Google Drive
            </button>
          </form>
        )}
      </div>

      {/* <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Student Work Submission</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {step === 1 && (
          <form onSubmit={handleStudentInfoSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={studentInfo.fullName}
                onChange={handleStudentInfoChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={studentInfo.email}
                onChange={handleStudentInfoChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="university" className="block mb-1">
                University
              </label>
              <input
                type="text"
                id="university"
                name="university"
                value={studentInfo.university}
                onChange={handleStudentInfoChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="academicYear" className="block mb-1">
                Academic Year
              </label>
              <select
                id="academicYear"
                name="academicYear"
                value={studentInfo.academicYear}
                onChange={handleStudentInfoChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select academic year</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Next Step
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleCategorySubmit} className="space-y-4">
            <div>
              <label htmlFor="category" className="block mb-1">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={category}
                onChange={handleCategoryChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat.name} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
            >
              Submit and Go to Google Drive
            </button>
          </form>
        )}
      </div> */}
    </>
  );
}
