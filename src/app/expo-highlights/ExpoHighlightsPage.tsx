"use client";

import React, { useState } from "react";
import VideoCard from "@/components/VideoCard";
import VideoModal from "@/components/VideoModal";
import { Video } from "@/types";

interface ExpoHighlightsPageProps {
  videos: Video[];
}

const ExpoHighlightsPage: React.FC<ExpoHighlightsPageProps> = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const handlePlayVideo = (video: Video) => {
    setSelectedVideo(video);
  };

  return (
    <>
      <div className="text-center pt-10">
        <div className="inline-flex items-center bg-white rounded-full px-4 py-1 shadow-sm mb-4">
          <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
          <span className="text-gray-700 font-medium text-sm">
            Previous Events
          </span>
          <span className="w-2 h-2 bg-orange-500 rounded-full ml-2"></span>
        </div>
        <h2 className="text-4xl text-black font-bold mb-4">
          <span className="text-orange-500">All Expo</span> Highlights
        </h2>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onPlay={() => handlePlayVideo(video)}
            />
          ))}
        </div>
        {selectedVideo && (
          <VideoModal
            video={selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </div>
    </>
  );
};

export default ExpoHighlightsPage;
