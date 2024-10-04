"use client";

import React, { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import EventPlanRegistration from "@/components/EventPlanRegistration";
import TeamGrid from "@/components/TeamGrid";
import PartnerSection from "@/components/PartnerSection";
import ProcessSteps from "./about/activities";
import { About } from "@/components/About";
import ExpoHighlights from "@/components/ExpoHighlights";
import { getVideos } from "@/lib/api";
import { Video } from "@/types";
import PricingCard from "@/components/PricingCard";
import SubscribeSection from "@/components/SubscribeComponent";
import Jumbotron from "@/components/Jumbotron";
import VideoSection from "@/components/VideoSection";
import EventStatsSection from "@/components/EventStatsSection";
import ExpoScheduleSection from "@/components/ExpoScheduleSection";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const fetchedVideos = await getVideos();
        setVideos(fetchedVideos);
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      }
    }

    fetchVideos();
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <React.Fragment>
      <main>
        <Hero />
        <Jumbotron />
        <EventPlanRegistration
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
        <About />
        <VideoSection />
        <ProcessSteps />
        <TeamGrid />
        <ExpoHighlights videos={videos} />
        <EventStatsSection />
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Event Registration
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Normal Attendance"
              price={0}
              features={[
                "Free entry",
                "Learn and Network",
                "Meals and Refreshments"
              ]}
              ctaText="Register Now"
              href="/register"
            />
            <PricingCard
              title="Exhibitors"
              price={550000}
              features={[
                "1 Table",
                "Branded Exhibiton Space",
                "Meals for 2 people"
              ]}
              ctaText="Register as Exhibitor"
              href="/register"
            />
            <PricingCard
              title="Sponsors"
              price={500000}
              features={[
                "Meals & Drinks",
                "Customized Branding",
                "Spotlight on Discussion"
              ]}
              ctaText="Register as Sponsor"
              href="/register"
            />
          </div>
        </div>
        <ExpoScheduleSection />
        <PartnerSection />
        <SubscribeSection />
      </main>
    </React.Fragment>
  );
}
