import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex items-center justify-center mb-8">
      {[...Array(totalSteps)].map((_, index) => (
        <React.Fragment key={index}>
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              index < currentStep
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-600'
            } ${index === currentStep - 1 ? 'ring-2 ring-blue-300' : ''}`}
          >
            {index + 1}
          </div>
          {index < totalSteps - 1 && (
            <div
              className={`h-1 w-12 ${
                index < currentStep - 1 ? 'bg-blue-500' : 'bg-gray-200'
              }`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};