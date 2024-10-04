import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Video } from "@/types";

interface VideoModalProps {
  video: Video;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-orange-500 rounded-lg w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col">
        <div className="p-4 flex items-center justify-between bg-orange-500">
          <h2 className="text-xl font-bold truncate mr-4 text-white">
            {video.title}
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-white transition-colors duration-300"
            aria-label="Close"
          >
            <XMarkIcon className="h-6 w-6 text-white font-bold" />
          </button>
        </div>
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src="https://www.youtube.com/embed/j4PfKMv_uME?si=QvWQLRKp5Nt-S08M&autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
