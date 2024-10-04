'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useFormContext as useCustomFormContext } from '@/context/FormContext';

export const FormStep3: React.FC = () => {
  const { register, formState: { errors } } = useFormContext();
  const { formData, updateFormData } = useCustomFormContext();

  return (
    <>
      <div className="mb-4">
        <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-700">
          Company
        </label>
        <input
          id="company"
          type="text"
          {...register('company', { required: 'Company is required' })}
          value={formData.company}
          onChange={(e) => updateFormData({ company: e.target.value })}
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        {errors.company && (
          <p className="text-xs italic text-red-500">{errors.company.message as string}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-700">
          Address
        </label>
        <input
          id="address"
          type="text"
          {...register('address', { required: 'Address is required' })}
          value={formData.address}
          onChange={(e) => updateFormData({ address: e.target.value })}
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        {errors.address && (
          <p className="text-xs italic text-red-500">{errors.address.message as string}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-700">
          Gender
        </label>
        <select
          id="gender"
          {...register('gender', { required: 'Gender is required' })}
          value={formData.gender}
          onChange={(e) => updateFormData({ gender: e.target.value })}
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && (
          <p className="text-xs italic text-red-500">{errors.gender.message as string}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="profession" className="block mb-2 text-sm font-medium text-gray-700">
          Profession
        </label>
        <input
          id="profession"
          type="text"
          {...register('profession', { required: 'Profession is required' })}
          value={formData.profession}
          onChange={(e) => updateFormData({ profession: e.target.value })}
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        {errors.profession && (
          <p className="text-xs italic text-red-500">{errors.profession.message as string}</p>
        )}
      </div>
    </>
  );
};