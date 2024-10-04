'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useFormContext as useCustomFormContext } from '../context/FormContext';

const ticketOptions = [
  { value: 'normal', label: 'Normal Attendance', price: 'Free', description: 'UGX 0' },
  { value: 'exhibitor', label: 'Exhibitor', price: 'UGX 550,000', description: 'Branded exhibition space, a Table and Meals for 2 people till the end of the expo' },
  { value: 'sponsor', label: 'Sponsor', price: 'UGX 1,000,000', description: 'Sponsor a panel discussion, Brand on the panel and highlighting their brand' },
];

export const FormStep1: React.FC = () => {
  const { register, formState: { errors }, watch } = useFormContext();
  const { formData, updateFormData } = useCustomFormContext();

  const selectedTicket = watch('ticketType');

  const handleSponsorAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = parseInt(e.target.value);
    if (amount >= 1000000) {
      updateFormData({ sponsorAmount: amount });
    }
  };

  return (
    <div className="p-4 md:p-5">
      <p className="text-gray-500 dark:text-gray-400 mb-4">Select your desired ticket type:</p>
      <ul className="space-y-4 mb-4">
        {ticketOptions.map((option) => (
          <li key={option.value}>
            <input
              type="radio"
              id={option.value}
              value={option.value}
              {...register('ticketType', { required: 'Please select a ticket type' })}
              className="hidden peer"
            />
            <label
              htmlFor={option.value}
              className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
            >
              <div className="block">
                <div className="w-full text-lg font-semibold">{option.label}</div>
                <div className="w-full text-gray-500 dark:text-gray-400">{option.price}</div>
                <div className="w-full text-sm text-gray-500 dark:text-gray-400">{option.description}</div>
              </div>
              <svg className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </label>
          </li>
        ))}
      </ul>
      {errors.ticketType && (
        <p className="text-xs italic text-red-500 mb-4">{errors.ticketType.message as string}</p>
      )}
      {selectedTicket === 'exhibitor' && (
        <div className="mb-4">
          <label htmlFor="exhibitorAmount" className="block text-sm font-medium text-gray-700">Exhibitor Fee</label>
          <input
            type="text"
            id="exhibitorAmount"
            value="550,000"
            disabled
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      )}
      {selectedTicket === 'sponsor' && (
        <div className="mb-4">
          <label htmlFor="sponsorAmount" className="block text-sm font-medium text-gray-700">Sponsor Amount (Minimum UGX 1,000,000)</label>
          <input
            type="number"
            id="sponsorAmount"
            min="1000000"
            step="100000"
            {...register('sponsorAmount', { 
              required: 'Sponsor amount is required',
              min: { value: 1000000, message: 'Minimum sponsor amount is UGX 1,000,000' }
            })}
            onChange={handleSponsorAmountChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.sponsorAmount && (
            <p className="text-xs italic text-red-500 mt-1">{errors.sponsorAmount.message as string}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FormStep1;


// "use client";

// import React from "react";
// import { useFormContext } from "react-hook-form";
// import { useFormContext as useCustomFormContext } from "../context/FormContext";

// const ticketOptions = [
//   {
//     value: "normal",
//     label: "Normal Attendance",
//     price: "Free",
//     description: "UGX 0"
//   },
//   {
//     value: "exhibitor",
//     label: "Exhibitor",
//     price: "UGX 550,000",
//     description:
//       "Branded exhibition space, a Table and Meals for 2 people till the end of the expo"
//   },
//   {
//     value: "sponsor",
//     label: "Sponsor",
//     price: "UGX 1,000,000",
//     description:
//       "Sponsor a panel discussion, Brand on the panel and highlighting their brand"
//   }
// ];

// export const FormStep1: React.FC = () => {
//   const {
//     register,
//     formState: { errors }
//   } = useFormContext();
//   const { formData, updateFormData } = useCustomFormContext();

//   return (
//     <div className="p-4 md:p-5">
//       <p className="text-gray-500 dark:text-gray-400 mb-4">
//         Select your desired ticket type:
//       </p>
//       <ul className="space-y-4 mb-4">
//         {ticketOptions.map((option) => (
//           <li key={option.value}>
//             <input
//               type="radio"
//               id={option.value}
//               value={option.value}
//               {...register("ticketType", {
//                 required: "Please select a ticket type"
//               })}
//               checked={formData.ticketType === option.value}
//               onChange={(e) => updateFormData({ ticketType: e.target.value })}
//               className="hidden peer"
//             />
//             <label
//               htmlFor={option.value}
//               className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
//             >
//               <div className="block">
//                 <div className="w-full text-lg font-semibold">
//                   {option.label}
//                 </div>
//                 <div className="w-full text-gray-500 dark:text-gray-400">
//                   {option.price}
//                 </div>
//               </div>
//               <svg
//                 className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 14 10"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M1 5h12m0 0L9 1m4 4L9 9"
//                 />
//               </svg>
//             </label>
//           </li>
//         ))}
//       </ul>
//       {errors.ticketType && (
//         <p className="text-xs italic text-red-500 mb-4">
//           {errors.ticketType.message as string}
//         </p>
//       )}
//     </div>
//   );
// };
