"use client";

import React, { useState } from "react";
import Link from "next/link";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";
import { Video } from "@/types";

interface ExpoHighlightsProps {
  videos: Video[];
}

const ExpoHighlights: React.FC<ExpoHighlightsProps> = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const handlePlayVideo = (video: Video) => {
    setSelectedVideo(video);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <div className="text-center">
        <div className="inline-flex items-center bg-white rounded-full px-4 py-1 shadow-sm mb-4">
          <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
          <span className="text-gray-700 font-medium text-sm">
            LATEST EXPOS
          </span>
          <span className="w-2 h-2 bg-orange-500 rounded-full ml-2"></span>
        </div>
        <h2 className="text-4xl text-black font-bold mb-4">
          <span className="text-orange-500">Expo</span> HIGHLIGHTS
        </h2>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.slice(0, 4).map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onPlay={() => handlePlayVideo(video)}
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/expo-highlights"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-900"
          >
            Load More
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
        {selectedVideo && (
          <VideoModal video={selectedVideo} onClose={handleCloseModal} />
        )}
      </div>
    </>
  );
};

export default ExpoHighlights;
