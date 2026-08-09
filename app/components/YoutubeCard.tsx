'use client';

import React from 'react';

interface YoutubeCardProps {
  urls: string[];
}

const getYoutubeId = (url: string) => {
  const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
  return match ? match[1] : null;
};

export default function YoutubeCard({ urls }: YoutubeCardProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {urls.map((url, index) => {
        const videoId = getYoutubeId(url);
        if (!videoId) return null;

        return (
          <div 
            key={`${videoId}-${index}`} 
            className="relative w-full h-[65vh] md:h-[50vh] overflow-hidden rounded-2xl bg-black/40 border border-white/10 shadow-xl"
          >
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=0&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0`}
              title={`YouTube Shorts Video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-none object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
