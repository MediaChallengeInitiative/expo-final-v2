"use client";

import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { FormProvider as CustomFormProvider } from "../context/FormContext";
import { Modal } from "./Modal";
import { StepIndicator } from "./StepIndicator";
import { FormStep1 } from "./FormStep1";
import { FormStep2 } from "./FormStep2";
import { FormStep3 } from "./FormStep3";
import { SuccessMessage } from "./SuccessMessage";
import Button from "./Button";
import PaymentOptions from "./PaymentOptions";

interface FormData {
  ticketType: string;
  fullName: string;
  email: string;
  sponsorAmount?: number;
  paymentMethod?: string;
  // ... other fields as needed
}

interface EventPlanRegistrationProps {
  isOpen: boolean;
  onClose: () => void;
}

const EventPlanRegistration: React.FC<EventPlanRegistrationProps> = ({
  isOpen,
  onClose
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const methods = useForm<FormData>();
  const { watch } = methods;

  const ticketType = watch("ticketType");
  const totalSteps = ticketType === "normal" ? 3 : 4;

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);

      if (data.ticketType !== "normal") {
        // Simulate payment processing
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Payment processed:", data.paymentMethod);
      }

      setIsSuccess(true);
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <FormStep1 />;
      case 2:
        return <FormStep2 />;
      case 3:
        return ticketType === "normal" ? <FormStep3 /> : <PaymentOptions />;
      case 4:
        return <FormStep3 />;
      default:
        return null;
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Event Registration">
      <CustomFormProvider>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
            {!isSuccess ? (
              <>
                <StepIndicator
                  currentStep={currentStep}
                  totalSteps={totalSteps}
                />
                {renderStep()}
                <div className="flex justify-between mt-6">
                  {currentStep > 1 && (
                    <Button
                      onClick={handlePrevious}
                      className="bg-gray-500 hover:bg-gray-700"
                    >
                      Previous
                    </Button>
                  )}
                  {currentStep < totalSteps ? (
                    <Button onClick={handleNext}>Next</Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-green-500 hover:bg-green-700"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  )}
                </div>
              </>
            ) : (
              <SuccessMessage />
            )}
          </form>
        </FormProvider>
      </CustomFormProvider>
    </Modal>
  );
};

export default EventPlanRegistration;