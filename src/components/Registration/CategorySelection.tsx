"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const categories = [
  "Media Managers",
  "Media Editors",
  "Policymakers",
  "Academia/Scholars",
  "Students",
  "Tech Innovators/Experts",
  "MCI Mentors & Trainers",
  "MCI Alumni",
  "Film-makers",
  "Civil Society Organizations (CSOs)",
  "Media Organizations",
  "Government Officials"
];

const ageBands = ["15-20", "21-25", "26-30", "31-35", "36-40", "41-45", "46+"];

const categoryFields = {
  "Media Managers": ["mediaHouse"],
  "Media Editors": ["mediaHouse"],
  Policymakers: ["organisationName", "designation"],
  "Academia/Scholars": ["institution", "designation"],
  Students: ["institution", "course", "yearOfStudy"],
  "Tech Innovators/Experts": ["organisationName", "designation"],
  "MCI Mentors & Trainers": ["mediaOrganization", "designation"],
  "MCI Alumni": [
    "programAttended",
    "yearOfProgram",
    "currentEmployment",
    "designation"
  ],
  "Film-makers": ["productionHouse", "designation"],
  "Civil Society Organizations (CSOs)": [
    "organisationName",
    "designation",
    "city"
  ],
  "Media Organizations": ["organisationName", "designation", "city"],
  "Government Officials": ["governmentInstitution", "designation"]
};

const categoryApiMapping = [
  { category: "Media Managers", apiRoute: "/api/media-managers" },
  { category: "Media Editors", apiRoute: "/api/media-editors" },
  { category: "Policymakers", apiRoute: "/api/policymakers" },
  { category: "Academia/Scholars", apiRoute: "/api/academia-scholars" },
  { category: "Students", apiRoute: "/api/students" },
  { category: "Tech Innovators/Experts", apiRoute: "/api/tech-innovators" },
  { category: "MCI Mentors & Trainers", apiRoute: "/api/mci-mentors-trainers" },
  { category: "MCI Alumni", apiRoute: "/api/mci-alumni" },
  { category: "Film-makers", apiRoute: "/api/filmmakers" },
  {
    category: "Civil Society Organizations (CSOs)",
    apiRoute: "/api/cso-representatives"
  },
  { category: "Media Organizations", apiRoute: "/api/media-organization-reps" },
  { category: "Government Officials", apiRoute: "/api/government-officials" }
];

type FormData = {
  category: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  nationality: string;
  ageBand: string;
  [key: string]: any;
};

const CategorySelection: React.FC = () => {
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    trigger
  } = useForm<FormData>();

  const watchCategory = watch("category");

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const apiEndpoint = getCategoryEndpoint(data.category);
    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const responseData = await response.json();
        setMessage(`Registration successful: ${responseData.message}`);
        reset();
        setStep(1);
      } else {
        const errorData = await response.json();
        setMessage(`Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      setMessage("An error occurred during registration.");
      console.error("Registration error:", error);
    }
  };

  const getCategoryEndpoint = (category: string): string => {
    const mapping = categoryApiMapping.find(
      (item) => item.category === category
    );
    return mapping ? mapping.apiRoute : "/api/default";
  };

  const renderCategorySpecificFields = () => {
    if (!watchCategory) return null;

    const fields = categoryFields[watchCategory as keyof typeof categoryFields];
    return fields.map((field) => (
      <div key={field}>
        <input
          {...register(field, { required: `${field} is required` })}
          type="text"
          placeholder={
            field.charAt(0).toUpperCase() +
            field
              .slice(1)
              .replace(/([A-Z])/g, " $1")
              .trim()
          }
          className="w-full px-3 py-2 border rounded text-black"
        />
        {errors[field] && (
          <span className="text-red-500">
            {errors[field]?.message as string}
          </span>
        )}
      </div>
    ));
  };

  const nextStep = async () => {
    const isStepValid = await trigger();
    if (isStepValid) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2 className="text-xl text-[#005381] w-[80%] mx-auto font-semibold mb-4">
              Step 1: Select Your Category
            </h2>
            <div className="space-y-2 mb-4 w-[80%] mx-auto">
              {categories.map((category) => (
                <label key={category} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value={category}
                    {...register("category", { required: "Category is required" })}
                    className="form-radio text-[#005381]"
                  />
                  <span className="text-white text-2md">{category}</span>
                </label>
              ))}
              {errors.category && (
                <span className="text-red-500">{errors.category.message}</span>
              )}
            </div>
            <button
              type="button"
              onClick={nextStep}
              className="flex justify-center my-4 text-2xl w-[80%] mx-auto bg-[#005381] hover:border-2 hover:border-white hover:transition-all hover:duration-300 text-white py-2 px-4 rounded"
            >
              Next
            </button>
          </>
        );
      case 2:
        return (
          <>
            <h2 className="text-xl text-[#005381] font-semibold mb-4">
              Step 2: Personal Information
            </h2>
            <div className="space-y-2 mb-4">
              <input
                {...register("firstName", { required: "First name is required" })}
                type="text"
                placeholder="First Name"
                className="w-full px-3 py-2 border rounded text-black"
              />
              {errors.firstName && (
                <span className="text-red-500">{errors.firstName.message}</span>
              )}

              <input
                {...register("lastName", { required: "Last name is required" })}
                type="text"
                placeholder="Last Name"
                className="w-full px-3 py-2 border rounded text-black"
              />
              {errors.lastName && (
                <span className="text-red-500">{errors.lastName.message}</span>
              )}

              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format"
                  }
                })}
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border rounded text-black"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}

              <input
                {...register("phoneNumber")}
                type="tel"
                placeholder="Phone Number (optional)"
                className="w-full px-3 py-2 border rounded text-black"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="mt-4 bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="mt-4 bg-[#005381] hover:border-2 hover:border-white hover:transition-all hover:duration-300 text-white py-2 px-4 rounded"
              >
                Next
              </button>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h2 className="text-xl text-[#005381] font-semibold mb-4">
              Step 3: Additional Information
            </h2>
            <div className="space-y-2 mb-4">
              <input
                {...register("nationality", {
                  required: "Nationality is required"
                })}
                type="text"
                placeholder="Nationality"
                className="w-full px-3 py-2 border rounded text-black"
              />
              {errors.nationality && (
                <span className="text-red-500">{errors.nationality.message}</span>
              )}

              <select
                {...register("ageBand", { required: "Age band is required" })}
                className="w-full px-3 py-2 border rounded text-black"
              >
                <option value="">Select Age Band</option>
                {ageBands.map((band) => (
                  <option key={band} value={band}>
                    {band}
                  </option>
                ))}
              </select>
              {errors.ageBand && (
                <span className="text-red-500">{errors.ageBand.message}</span>
              )}

              {renderCategorySpecificFields()}
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="mt-4 bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
              >
                Previous
              </button>
              <button
                type="submit"
                className="mt-4 bg-[#005381] hover:border-2 hover:border-white hover:transition-all hover:duration-300 text-white py-2 px-4 rounded"
              >
                Register
              </button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      {renderStep()}
      {message && <p className="mt-4 text-white">{message}</p>}
    </form>
  );
};

export default CategorySelection;