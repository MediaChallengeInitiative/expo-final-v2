import { Metadata } from "next";
import React from "react";
import ProcessSteps from "./activities";
import ServicesSection from "./services";
import Breadcrumb from "@/components/Breadcrumb";
import VideoSection from "@/components/VideoSection";
export const metadata: Metadata = {
  title: "COTE | What we do",
  description:
    "This section contains services that we offer at Center Of Technology Evolution."
};
const Page = () => {
  return (
    <div>
      <Breadcrumb 
        category={null} 
        customTitle="About The Expo"
      />
      <ServicesSection />
      <VideoSection />
      <ProcessSteps />
    </div>
  );
};

export default Page;
