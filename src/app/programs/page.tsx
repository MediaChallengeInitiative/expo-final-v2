import ProgramsClient from "./ProgramsClient";
import Breadcrumb from "@/components/Breadcrumb";

export default function ProgramsPage() {
  return (
    <>
      <Breadcrumb customTitle="Available Programs" category={null} />
      <ProgramsClient />
    </>
  );
}

// "use client";

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import Countdown from "react-countdown";
// import { signUpForProgram } from "@/lib/api";
// import Breadcrumb from "@/components/Breadcrumb";

// interface ProgramData {
//   type: "Mentorship" | "Training";
//   benefits: string[];
//   startDate: string;
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

// export default function ProgramsPage() {
//   const [signedUp, setSignedUp] = useState<string | null>(null);
//   const { register, handleSubmit, reset } = useForm();

//   const onSubmit = async (data: any) => {
//     try {
//       await signUpForProgram(data);
//       setSignedUp(data.programType);
//       reset();
//     } catch (error) {
//       console.error("Error signing up:", error);
//     }
//   };

//   return (
//     <>
//     <Breadcrumb
//         category={null}
//         customTitle="Available Programs"
//       />
//       {/* <Breadcrumb title={"Available Programs"} path={"programs"} /> */}
//       <section className="bg-white dark:bg-gray-900">
//         <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
//           <div className="grid md:grid-cols-2 gap-8">
//             {programs.map((program) => (
//               <div
//                 key={program.type}
//                 className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12"
//               >
//                 <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-4">
//                   {program.type}
//                 </h2>
//                 <ul className="mb-4 space-y-2">
//                   {program.benefits.map((benefit, index) => (
//                     <li
//                       key={index}
//                       className="flex items-center text-gray-600 dark:text-gray-400"
//                     >
//                       <svg
//                         className="w-4 h-4 mr-2 text-green-500"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                       {benefit}
//                     </li>
//                   ))}
//                 </ul>
//                 <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//                   <input
//                     {...register("name")}
//                     type="text"
//                     placeholder="Your Name"
//                     className="w-full p-2 border rounded"
//                     required
//                   />
//                   <input
//                     {...register("email")}
//                     type="email"
//                     placeholder="Your Email"
//                     className="w-full p-2 border rounded"
//                     required
//                   />
//                   <input
//                     type="hidden"
//                     {...register("programType")}
//                     value={program.type}
//                   />
//                   <button
//                     type="submit"
//                     className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition duration-300"
//                   >
//                     Sign Up for {program.type}
//                   </button>
//                 </form>
//                 {signedUp === program.type && (
//                   <div className="mt-4 text-green-600 dark:text-green-400">
//                     Thank you for signing up! Check your email for details.
//                   </div>
//                 )}
//                 <div className="mt-4 text-gray-600 dark:text-gray-400">
//                   Program starts in:{" "}
//                   <Countdown date={new Date(program.startDate)} />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
