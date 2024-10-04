"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const ConfirmationPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem("isRefreshing", "true");
    };

    const checkAndRedirect = () => {
      const isRefreshing = sessionStorage.getItem("isRefreshing");
      if (isRefreshing) {
        sessionStorage.removeItem("isRefreshing");
        router.push("/");
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    checkAndRedirect();

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [router]);

  return (
    <div className="container mx-auto p-4 h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Registration Confirmed
          </h1>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-center">Expo 2024</h2>
          <p className="text-center mb-4">
            Thank you for registering! We&apos;re thrilled to have you join us for
            this exciting event.
          </p>
          <p className="text-center text-sm text-gray-600">
            Get ready for an unforgettable experience! We&apos;ll send you more
            details via email soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;