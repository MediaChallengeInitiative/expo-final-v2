"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Countdown from "react-countdown";
import { signIn } from "next-auth/react";
import { Dialog } from "@headlessui/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ProgramData {
  type: "Mentorship" | "Training";
  benefits: string[];
  startDate: string;
}

interface FormData {
  fullName: string;
  email: string;
  programType: "Mentorship" | "Training";
  password: string;
  confirmPassword: string;
}

const programs: ProgramData[] = [
  {
    type: "Mentorship",
    benefits: [
      "One-on-one guidance from industry experts",
      "Personalized career advice",
      "Networking opportunities",
      "Access to exclusive resources"
    ],
    startDate: "2024-06-01T00:00:00"
  },
  {
    type: "Training",
    benefits: [
      "Structured learning path",
      "Hands-on projects and assignments",
      "Industry-recognized certification",
      "Job placement assistance"
    ],
    startDate: "2024-07-01T00:00:00"
  }
];

export default function ProgramsClient() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<
    "Mentorship" | "Training" | null
  >(null);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset } = useForm<FormData>();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
        fullName: data.fullName,
        programType: data.programType
      });

      if (result?.error) {
        setError(result.error);
      } else {
        setShowSignUpModal(false);
        reset();
        router.push(`/programs/${data.programType.toLowerCase()}`);
      }
    } catch (err) {
      setError("Error creating account. Please try again.");
    }
  };

  const openSignUpModal = (programType: "Mentorship" | "Training") => {
    setSelectedProgram(programType);
    setShowSignUpModal(true);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <div
              key={program.type}
              className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12"
            >
              <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-4">
                {program.type}
              </h2>
              <ul className="mb-4 space-y-2">
                {program.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600 dark:text-gray-400"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openSignUpModal(program.type)}
                className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition duration-300"
              >
                Sign Up for {program.type}
              </button>
              <div className="mt-4 text-gray-600 dark:text-gray-400">
                Program starts in:{" "}
                <Countdown date={new Date(program.startDate)} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sign Up Modal */}
      <Dialog open={showSignUpModal} onClose={() => setShowSignUpModal(false)}>
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <Dialog.Panel className="bg-white p-6 rounded-lg max-w-md w-full">
            <Dialog.Title className="text-xl font-bold mb-4">
              Sign Up for {selectedProgram}
            </Dialog.Title>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                {...register("fullName")}
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border rounded"
                required
              />
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
                required
              />
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded"
                required
              />
              <input
                {...register("confirmPassword")}
                type="password"
                placeholder="Confirm Password"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="hidden"
                {...register("programType")}
                value={selectedProgram || ""}
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                Sign Up
              </button>
              <p>
                Already Have an Account? <Link href="/auth/signin" className="text-blue-800">Signin</Link>
              </p>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}

// "use client";

// import { useState } from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import Countdown from "react-countdown";
// import { signIn } from "next-auth/react";
// import { Dialog } from "@headlessui/react";
// import { useRouter } from "next/navigation";

// interface ProgramData {
//   type: "Mentorship" | "Training";
//   benefits: string[];
//   startDate: string;
// }

// interface FormData {
//   fullName: string;
//   email: string;
//   programType: "Mentorship" | "Training";
//   password: string;
//   confirmPassword: string;
// }

// const programs: ProgramData[] = [
//   {
//     type: "Mentorship",
//     benefits: [
//       "One-on-one guidance from industry experts",
//       "Personalized career advice",
//       "Networking opportunities",
//       "Access to exclusive resources"
//     ],
//     startDate: "2024-06-01T00:00:00"
//   },
//   {
//     type: "Training",
//     benefits: [
//       "Structured learning path",
//       "Hands-on projects and assignments",
//       "Industry-recognized certification",
//       "Job placement assistance"
//     ],
//     startDate: "2024-07-01T00:00:00"
//   }
// ];

// export default function ProgramsClient() {
//   const [showSignUpModal, setShowSignUpModal] = useState(false);
//   const [selectedProgram, setSelectedProgram] = useState<"Mentorship" | "Training" | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   const { register, handleSubmit, reset, watch } = useForm<FormData>();
//   const router = useRouter();

//   const onSubmit: SubmitHandler<FormData> = async (data) => {
//     if (data.password !== data.confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     try {
//       const result = await signIn("credentials", {
//         redirect: false,
//         email: data.email,
//         password: data.password,
//         fullName: data.fullName,
//         programType: data.programType,
//       });

//       if (result?.error) {
//         setError(result.error);
//       } else {
//         setShowSignUpModal(false);
//         reset();
//         router.push(`/programs/${data.programType.toLowerCase()}`);
//       }
//     } catch (err) {
//       setError("Error creating account. Please try again.");
//     }
//   };

//   const openSignUpModal = (programType: "Mentorship" | "Training") => {
//     setSelectedProgram(programType);
//     setShowSignUpModal(true);
//   };

//   return (
//     <section className="bg-white dark:bg-gray-900">
//       <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
//         <div className="grid md:grid-cols-2 gap-8">
//           {programs.map((program) => (
//             <div
//               key={program.type}
//               className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12"
//             >
//               <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-4">
//                 {program.type}
//               </h2>
//               <ul className="mb-4 space-y-2">
//                 {program.benefits.map((benefit, index) => (
//                   <li
//                     key={index}
//                     className="flex items-center text-gray-600 dark:text-gray-400"
//                   >
//                     <svg
//                       className="w-4 h-4 mr-2 text-green-500"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     {benefit}
//                   </li>
//                 ))}
//               </ul>
//               <button
//                 onClick={() => openSignUpModal(program.type)}
//                 className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition duration-300"
//               >
//                 Sign Up for {program.type}
//               </button>
//               <div className="mt-4 text-gray-600 dark:text-gray-400">
//                 Program starts in: <Countdown date={new Date(program.startDate)} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Sign Up Modal */}
//       <Dialog open={showSignUpModal} onClose={() => setShowSignUpModal(false)}>
//         <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
//           <Dialog.Panel className="bg-white p-6 rounded-lg max-w-md w-full">
//             <Dialog.Title className="text-xl font-bold mb-4">Sign Up for {selectedProgram}</Dialog.Title>
//             {error && <p className="text-red-500 mb-4">{error}</p>}
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//               <input
//                 {...register("fullName")}
//                 type="text"
//                 placeholder="Full Name"
//                 className="w-full p-2 border rounded"
//                 required
//               />
//               <input
//                 {...register("email")}
//                 type="email"
//                 placeholder="Email"
//                 className="w-full p-2 border rounded"
//                 required
//               />
//               <input
//                 {...register("password")}
//                 type="password"
//                 placeholder="Password"
//                 className="w-full p-2 border rounded"
//                 required
//               />
//               <input
//                 {...register("confirmPassword")}
//                 type="password"
//                 placeholder="Confirm Password"
//                 className="w-full p-2 border rounded"
//                 required
//               />
//               <input
//                 type="hidden"
//                 {...register("programType")}
//                 value={selectedProgram || undefined}
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
//               >
//                 Sign Up
//               </button>
//             </form>
//           </Dialog.Panel>
//         </div>
//       </Dialog>
//     </section>
//   );
// }
