"use client";

import React, { useState } from "react";
import {
  UseFormRegister,
  FieldErrors,
  UseFormWatch,
  UseFormSetValue
} from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";

// Define the RegisterInputs type if it's not imported from elsewhere
type RegisterInputs = {
  category: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  organization: string;
  designation?: string;
  nationality: string;
  ageBand: string;
  course?: string;
  yearOfStudy?: string;
  programAttended?: string;
  yearOfProgramAttended?: string;
  currentEmployment?: string;
  location?: string;
};

interface PersonalInfoFormProps {
  register: UseFormRegister<RegisterInputs>;
  errors: FieldErrors<RegisterInputs>;
  watch: UseFormWatch<RegisterInputs>;
  setValue: UseFormSetValue<RegisterInputs>;
}

const categories = [
  "MEDIA MANAGERS",
  "MEDIA EDITORS",
  "POLICYMAKERS",
  "ACADEMIA/SCHOLARS",
  "STUDENTS",
  "TECH INNOVATORS/EXPERTS",
  "MCI MENTORS & TRAINERS",
  "MCI ALUMNI",
  "FILM-MAKERS",
  "CIVIL SOCIETY ORGANIZATIONS (CSOs)",
  "MEDIA ORGANIZATIONS",
  "GOVERNMENT OFFICIALS"
];

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  register,
  errors,
  watch,
  setValue
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 3;
  const category = watch("category");

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const renderProgressBar = () => {
    const items = [
      { id: "category", icon: "🏷️", label: "Category" },
      { id: "personal", icon: "👤", label: "Personal Info" },
      { id: "details", icon: "📋", label: "Details" }
    ];

    return (
      <ul className="flex justify-between w-full mb-8">
        {items.map((item, index) => (
          <li
            key={item.id}
            className={`flex flex-col items-center ${
              index <= currentStep ? "text-orange-600" : "text-gray-300"
            }`}
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full mb-2 ${
                index <= currentStep ? "bg-orange-600" : "bg-gray-300"
              }`}
            >
              {item.icon}
            </div>
            <span className="text-xs">{item.label}</span>
          </li>
        ))}
      </ul>
    );
  };

  const renderCategorySpecificFields = () => {
    switch (category) {
      case "STUDENTS":
        return (
          <>
            <InputField
              label="Name of University or Institution"
              name="organization"
              register={register}
              errors={errors}
              required="Institution name is required"
            />
            <InputField
              label="Name of the Course"
              name="course"
              register={register}
              errors={errors}
              required="Course name is required"
            />
            <InputField
              label="Year of Study"
              name="yearOfStudy"
              register={register}
              errors={errors}
              required="Year of study is required"
            />
          </>
        );
      case "MCI ALUMNI":
        return (
          <>
            <InputField
              label="Name of the Program attended"
              name="programAttended"
              register={register}
              errors={errors}
              required="Program name is required"
            />
            <InputField
              label="Year of the Program attended"
              name="yearOfProgramAttended"
              register={register}
              errors={errors}
              required="Year of program is required"
            />
            <InputField
              label="Current Employment"
              name="currentEmployment"
              register={register}
              errors={errors}
              required="Current employment is required"
            />
          </>
        );
      case "CIVIL SOCIETY ORGANIZATIONS (CSOs)":
      case "MEDIA ORGANIZATIONS":
        return (
          <InputField
            label="Location (Country and City)"
            name="location"
            register={register}
            errors={errors}
            required="Location is required"
          />
        );
      case "GOVERNMENT OFFICIALS":
        return (
          <InputField
            label="Government Institution"
            name="organization"
            register={register}
            errors={errors}
            required="Government institution is required"
          />
        );
      default:
        return (
          <InputField
            label={
              category?.includes("MEDIA")
                ? "Name of Media House"
                : "Organisation Name"
            }
            name="organization"
            register={register}
            errors={errors}
            required="Organization name is required"
          />
        );
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              Select Your Category
            </h2>
            <SelectField
              label="Category"
              name="category"
              register={register}
              errors={errors}
              required="Category is required"
              options={categories}
            />
          </motion.div>
        );
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              Personal Information
            </h2>
            <InputField
              label="First Name"
              name="firstName"
              register={register}
              errors={errors}
              required="First name is required"
            />
            <InputField
              label="Last Name"
              name="lastName"
              register={register}
              errors={errors}
              required="Last name is required"
            />
            <InputField
              label="Email Address"
              name="email"
              register={register}
              errors={errors}
              required="Email is required"
              type="email"
            />
            <InputField
              label="Telephone Number (optional)"
              name="phoneNumber"
              register={register}
              errors={errors}
            />
            <InputField
              label="Nationality"
              name="nationality"
              register={register}
              errors={errors}
              required="Nationality is required"
            />
            <SelectField
              label="Age Band"
              name="ageBand"
              register={register}
              errors={errors}
              required="Age band is required"
              options={[
                "15-20",
                "21-25",
                "26-30",
                "31-35",
                "36-40",
                "41-45",
                "46+"
              ]}
            />
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              Category Information
            </h2>
            {renderCategorySpecificFields()}
            {category !== "STUDENTS" && (
              <InputField
                label="Designation/Position"
                name="designation"
                register={register}
                errors={errors}
                required="Designation is required"
              />
            )}
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold text-center mb-6">Registration</h1>
      {renderProgressBar()}
      <form className="space-y-4">
        <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
        <div className="flex justify-between mt-6">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
            >
              Previous
            </button>
          )}
          {currentStep < totalSteps - 1 && (
            <button
              type="button"
              onClick={nextStep}
              className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors ml-auto"
            >
              Next
            </button>
          )}
          {currentStep === totalSteps - 1 && (
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors ml-auto"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

interface InputFieldProps {
  label: string;
  name: keyof RegisterInputs;
  register: UseFormRegister<RegisterInputs>;
  errors: FieldErrors<RegisterInputs>;
  required?: string;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  register,
  errors,
  required,
  type = "text"
}) => (
  <div className="mb-4">
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <input
      id={name}
      {...register(name, { required })}
      type={type}
      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
    />
    {errors[name] && (
      <span className="text-red-500 text-xs mt-1">{errors[name]?.message}</span>
    )}
  </div>
);

interface SelectFieldProps {
  label: string;
  name: keyof RegisterInputs;
  register: UseFormRegister<RegisterInputs>;
  errors: FieldErrors<RegisterInputs>;
  required?: string;
  options: string[];
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  register,
  errors,
  required,
  options
}) => (
  <div className="mb-4">
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <select
      id={name}
      {...register(name, { required })}
      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
    >
      <option value="">Select {label}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    {errors[name] && (
      <span className="text-red-500 text-xs mt-1">{errors[name]?.message}</span>
    )}
  </div>
);

export default PersonalInfoForm;
