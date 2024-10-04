import React from "react";

export const SuccessMessage: React.FC = () => {
  return (
    <div className="text-center p-6">
      <div className="mb-4">
        <svg
          className="mx-auto h-12 w-12 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        Registration Successful!
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        Thank you for registering for our event. We&apos;re excited to have you join
        us!
      </p>
      <div className="text-sm text-gray-700">
        <p className="font-medium">Next steps:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Check your email for a confirmation message</li>
          <li>Add the event to your calendar</li>
          <li>Follow us on social media for updates</li>
        </ul>
      </div>
    </div>
  );
};