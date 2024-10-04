import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { PlayIcon } from '@heroicons/react/24/solid'
import { Video } from '@/types'

interface VideoCardProps {
  video: Video
  onPlay: () => void
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onPlay }) => {
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    setIsHovered(true)
    videoRef.current?.play()
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    videoRef.current?.pause()
    if (videoRef.current) {
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div 
      className="relative overflow-hidden rounded-lg shadow-lg group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <Image 
          src={video.coverImage} 
          alt={video.title} 
          layout="fill"
          objectFit="cover"
          className={`transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}
        />
        <video
          ref={videoRef}
          src={video.videoUrl}
          className={`absolute inset-0 w-full h-full object-cover ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          loop
          muted
          playsInline
        />
        <div className="absolute top-2 left-2 bg-orange-500 bg-opacity-70 text-white text-xs font-bold px-2 py-1 rounded">
          {video.year}
        </div>
      </div>
      <div className="p-4 bg-black">
        <div className="flex items-center justify-between">
          <button
            onClick={onPlay}
            className="text-white p-2 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors duration-300 group-hover:animate-pulse"
          >
            <PlayIcon className="h-6 w-6" />
          </button>
          <h3 className="text-lg text-white font-semibold line-clamp-2 ml-3">{video.title}</h3>
        </div>
      </div>
      <div className="absolute inset-0 border-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none">
        <div className="absolute inset-0 border-4 border-orange-500 rounded-lg animate-pulse"></div>
      </div>
    </div>
  )
}

export default VideoCard