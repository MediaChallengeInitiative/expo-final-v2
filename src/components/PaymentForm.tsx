import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

type PaymentMethod = 'mtn' | 'airtel' | 'visa';

interface PaymentFormProps {
  register: UseFormRegister<any>;  // Change this to 'any'
  errors: FieldErrors<any>;  // Change this to 'any'
}

const PaymentForm: React.FC<PaymentFormProps> = ({ register, errors }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2">Payment Method</label>
      <select
        {...register('paymentMethod', { required: 'Payment method is required' })}
        className="w-full p-2 border rounded"
      >
        <option value="">Select payment method</option>
        <option value="mtn">MTN Mobile Money</option>
        <option value="airtel">Airtel Money</option>
        <option value="visa">VISA</option>
      </select>
      {errors.paymentMethod && <span className="text-red-500">{errors.paymentMethod.message as string}</span>}
    </div>
  );
};

export default PaymentForm;