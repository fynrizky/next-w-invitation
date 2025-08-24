'use client';
import { useEffect, useState } from 'react';
import { Music, VolumeX } from 'lucide-react';


export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    const audio = window.globalAudio;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const audio = window.globalAudio;
    if (audio && !audio.paused) {
      setIsPlaying(true);
    }
  }, []);

  return (
    <div className="fixed bottom-20 right-4 z-50">
      <button
        onClick={togglePlay}
        className={`
          relative p-1 rounded-full 
          bg-white/20 backdrop-blur-md border border-white/30 shadow-lg 
          hover:scale-105 transition-all 
          flex items-center justify-center
        `}
      >
        {isPlaying ? (
          <>
            <Music className="text-pink-500" size={15} />
            <span className="absolute -top-3 -right-2 flex gap-[2px]">
              <span className="w-[2px] h-3 bg-pink-300 animate-eq1 rounded-xs" />
              <span className="w-[2px] h-3 bg-pink-500 animate-eq2 rounded-xs" />
              <span className="w-[2px] h-3 bg-pink-300 animate-eq3 rounded-xs" />
              <span className="w-[2px] h-3 bg-pink-500 animate-eq4 rounded-xs" />
            </span>
          </>
        ) : (
          <VolumeX className="text-gray-400" size={15} />
        )}
      </button>

      <style jsx>{`
        @keyframes eq1 { 0%,100%{height:4px;} 50%{height:8px;} }
        @keyframes eq2 { 0%,100%{height:8px;} 50%{height:4px;} }
        @keyframes eq3 { 0%,100%{height:4px;} 50%{height:8px;} }
        @keyframes eq4 { 0%,100%{height:8px;} 50%{height:4px;} }
        .animate-eq1 { animation: eq1 0.8s infinite; }
        .animate-eq2 { animation: eq2 0.8s infinite; }
        .animate-eq3 { animation: eq3 0.8s infinite; }
        .animate-eq4 { animation: eq4 0.8s infinite; }
      `}</style>
    </div>
  );
}
