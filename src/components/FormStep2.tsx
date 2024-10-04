'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useFormContext as useCustomFormContext } from '@/context/FormContext';

export const FormStep2: React.FC = () => {
  const { register, formState: { errors } } = useFormContext();
  const { formData, updateFormData } = useCustomFormContext();

  return (
    <>
      <div className="mb-4">
        <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          {...register('fullName', { required: 'Full name is required' })}
          value={formData.fullName}
          onChange={(e) => updateFormData({ fullName: e.target.value })}
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        {errors.fullName && (
          <p className="text-xs italic text-red-500">{errors.fullName.message as string}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        {errors.email && (
          <p className="text-xs italic text-red-500">{errors.email.message as string}</p>
        )}
      </div>
    </>
  );
};
