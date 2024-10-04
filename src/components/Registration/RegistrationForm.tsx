"use client"

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { getFieldsForCategory } from "@/utils/formFields";
import { Category } from "@/utils/categories";

interface RegistrationFormProps {
  category: Category;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ category }) => {
  const fields = getFieldsForCategory(category);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [step, setStep] = useState(1);
  const stepsPerPage = 3;
  const totalSteps = Math.ceil(fields.length / stepsPerPage);

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
    alert("Registration submitted successfully!");
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="max-w-2xl mx-auto z-10 -mt-10 px-6 pb-6 pt-24 bg-[#005381] bg-blend-multiply rounded-xl shadow-lg">
      <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse mb-8">
        {Array.from({ length: totalSteps }, (_, i) => (
          <li
            key={i}
            className={`flex items-center ${
              i + 1 <= step ? "text-teal-600 dark:text-teal-500" : ""
            }`}
          >
            <span
              className={`flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0 ${
                i + 1 <= step
                  ? "border-teal-600 dark:border-teal-500"
                  : "border-gray-500 dark:border-gray-400"
              }`}
            >
              {i + 1}
            </span>
            {i === 0 && (
              <>
                Personal{" "}
                <span className="hidden sm:inline-flex sm:ms-2">Info</span>
              </>
            )}
            {i === 1 && (
              <>
                Account{" "}
                <span className="hidden sm:inline-flex sm:ms-2">Info</span>
              </>
            )}
            {i === 2 && <>Review</>}
            {i < totalSteps - 1 && (
              <svg
                className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 12 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m7 9 4-4-4-4M1 9l4-4-4-4"
                />
              </svg>
            )}
          </li>
        ))}
      </ol>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 border border-gray-200"
      >
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-[#005381] mb-4">
            Registration for {category}
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Step {step} of {totalSteps}
          </p>
        </div>

        {fields
          .slice((step - 1) * stepsPerPage, step * stepsPerPage)
          .map((field) => (
            <div key={field.name} className="mb-4">
              <label
                className="block text-[#005381] text-sm font-bold mb-2"
                htmlFor={field.name}
              >
                {field.label}
              </label>
              {field.type === "select" ? (
                <select
                  {...register(field.name, { required: field.required })}
                  id={field.name}
                  className="shadow border rounded w-full py-2 px-3 text-[#005381] leading-tight focus:outline-none focus:shadow-outline bg-gray-50"
                >
                  <option value="">Select {field.label}</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  {...register(field.name, { required: field.required })}
                  type={field.type}
                  id={field.name}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-[#005381] leading-tight focus:outline-none focus:shadow-outline bg-gray-50"
                />
              )}
              {errors[field.name] && (
                <p className="text-red-500 text-xs italic mt-1">
                  This field is required
                </p>
              )}
            </div>
          ))}

        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
            >
              Previous
            </button>
          )}
          {step < totalSteps ? (
            <button
              type="button"
              onClick={nextStep}
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out ml-auto"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out ml-auto"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;