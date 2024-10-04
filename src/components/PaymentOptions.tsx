'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';

const paymentMethods = [
  { value: 'visa', label: 'VISA' },
  { value: 'card', label: 'CARD' },
  { value: 'mtn', label: 'MTN Mobile Money' },
  { value: 'airtel', label: 'Airtel Mobile Money' },
];

export const PaymentOptions: React.FC = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="mb-4">
      <p className="text-gray-700 font-medium mb-2">Select Payment Method:</p>
      <div className="space-y-2">
        {paymentMethods.map((method) => (
          <div key={method.value} className="flex items-center">
            <input
              type="radio"
              id={method.value}
              value={method.value}
              {...register('paymentMethod', { required: 'Please select a payment method' })}
              className="mr-2"
            />
            <label htmlFor={method.value} className="text-sm text-gray-700">
              {method.label}
            </label>
          </div>
        ))}
      </div>
      {errors.paymentMethod && (
        <p className="text-xs italic text-red-500 mt-1">{errors.paymentMethod.message as string}</p>
      )}
    </div>
  );
};

export default PaymentOptions;