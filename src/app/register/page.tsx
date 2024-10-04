import React from "react";
import CategorySelection from "@/components/Registration/CategorySelection";
import Navbar from "@/components/Navbar";

export default function RegisterPage() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <h1 className="text-3xl font-semibold text-[#005381] text-center mb-4 pt-36">
          THE AFRICA MEDIA & CREATIVES CAREER EXPO 2024
        </h1>
        <p className="text-white italic text-2xl text-center mb-8">
          September 9th - October 31st, 2024
        </p>
        <CategorySelection />
      </main>
    </React.Fragment>
  );
}
