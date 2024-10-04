"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const VideoSection: React.FC = () => {
  const [width, setWidth] = useState(60);
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && videoRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (isMobile) {
          const scrollProgress = 1 - rect.bottom / window.innerHeight;
          const newScale = 1 + scrollProgress * 0.5;
          setScale(Math.max(1, Math.min(newScale, 1.5)));
        } else {
          const videoRect = videoRef.current.getBoundingClientRect();
          const videoCenterY = videoRect.top + videoRect.height / 2;
          const viewportCenterY = window.innerHeight / 2;
          const distanceFromCenter = Math.abs(videoCenterY - viewportCenterY);
          const maxDistance = window.innerHeight / 2;
          const newWidth = 100 - (distanceFromCenter / maxDistance) * 40;
          setWidth(Math.min(Math.max(newWidth, 60), 100));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  const toggleMute = () => {
    if (iframeRef.current) {
      const newMuteStatus = !isMuted;
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({
          event: "command",
          func: newMuteStatus ? "mute" : "unMute"
        }),
        "*"
      );
      setIsMuted(newMuteStatus);
    }
  };

  const videoStyle = isMobile
    ? { transform: `scale(${scale})`, transition: "transform 0.1s ease-out" }
    : { width: `${width}%`, transition: "width 0.1s ease-out" };

  return (
    <div
      ref={sectionRef}
      className={`video-section ${
        isMobile ? "h-screen" : "min-h-screen"
      } w-full overflow-hidden relative flex items-center justify-center`}
    >
      <div
        ref={videoRef}
        className={`video-container ${
          isMobile ? "absolute inset-0" : "relative"
        }`}
        style={videoStyle}
      >
        <div
          className={`${
            isMobile ? "absolute inset-0" : "aspect-w-16 aspect-h-9"
          } rounded-xl overflow-hidden shadow-2xl relative`}
          style={{
            border: "20px solid #f97316",
            borderImage:
              "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0c25 0 25 25 50 25s25-25 50-25v100c-25 0-25-25-50-25s-25 25-50 25z' fill='none' stroke='%23f97316' stroke-width='4'/%3E%3C/svg%3E\") 30 / 20px round",
            borderImageSlice: "30 fill"
          }}
        >
          <iframe
            ref={iframeRef}
            src="https://www.youtube.com/embed/j4PfKMv_uME?si=QvWQLRKp5Nt-S08M&amp;autoplay=1&amp;loop=1&amp;playlist=j4PfKMv_uME&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;iv_load_policy=3&amp;disablekb=1&amp;mute=1&amp;enablejsapi=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 z-10 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all duration-300"
          >
            {isMuted ? (
              <FaVolumeMute className="text-white w-6 h-6" />
            ) : (
              <FaVolumeUp className="text-white w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
