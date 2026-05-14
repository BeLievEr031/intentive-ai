import React, { useRef, useState } from "react";
import { Play } from "lucide-react";

export default function VideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="bg-[#f5f5f5] -mt-32 md:-mt-40 lg:-mt-48 pb-20 flex justify-center">
      <div className="relative max-w-7xl w-full px-6 md:px-10">

        {/* Video Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">

          {/* Video */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster="/images/video-thumbnail.avif"
            controls={isPlaying}
          >
            <source
              src="/videos/Inventive+AI+with+Vo+V7.mp4"
              type="video/mp4"
            />
          </video>

          {/* Play Button */}
          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-purple-500/90 hover:bg-purple-600 text-white p-6 md:p-7 rounded-full shadow-xl transition transform hover:scale-110">
                <Play size={40} fill="white" />
              </div>
            </button>
          )}

        </div>

      </div>
    </section>
  );
}