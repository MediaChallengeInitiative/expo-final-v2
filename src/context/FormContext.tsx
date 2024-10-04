'use client';

import React, { createContext, useContext, useState } from 'react';

interface FormData {
  ticketType: string;
  fullName: string;
  email: string;
  company: string;
  address: string;
  gender: string;
  profession: string;
  sponsorAmount?: number;  // Add this line
  paymentMethod?: string;  // Add this line if not already present
}

interface FormContextType {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    ticketType: '',
    fullName: '',
    email: '',
    company: '',
    address: '',
    gender: '',
    profession: '',
    // Initialize sponsorAmount and paymentMethod if needed
  });

  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prevData => ({ ...prevData, ...data }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};




// 'use client';

// import React, { createContext, useContext, useState } from 'react';

// interface FormData {
//   ticketType: string;
//   fullName: string;
//   email: string;
//   company: string;
//   address: string;
//   gender: string;
//   profession: string;
// }

// interface FormContextType {
//   formData: FormData;
//   updateFormData: (data: Partial<FormData>) => void;
// }

// const FormContext = createContext<FormContextType | undefined>(undefined);

// export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [formData, setFormData] = useState<FormData>({
//     ticketType: '',
//     fullName: '',
//     email: '',
//     company: '',
//     address: '',
//     gender: '',
//     profession: '',
//   });

//   const updateFormData = (data: Partial<FormData>) => {
//     setFormData(prevData => ({ ...prevData, ...data }));
//   };

//   return (
//     <FormContext.Provider value={{ formData, updateFormData }}>
//       {children}
//     </FormContext.Provider>
//   );
// };

// export const useFormContext = () => {
//   const context = useContext(FormContext);
//   if (context === undefined) {
//     throw new Error('useFormContext must be used within a FormProvider');
//   }
//   return context;
// };