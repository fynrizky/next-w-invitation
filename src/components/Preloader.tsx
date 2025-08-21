'use client';
import { weddingData } from "@/data/weddingData";

export default function Preloader() {
  return (
    <div className="h-screen w-full flex items-center font-bahasaFont justify-center bg-black text-white relative overflow-hidden">
      <div className="flex flex-col items-center gap-4 relative">
        {/* LOVE SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-16 h-16 text-pink-500 relative z-10"
          fill="currentColor"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                   2 5.42 4.42 3 7.5 3c1.74 0 
                   3.41 0.81 4.5 2.09C13.09 3.81 
                   14.76 3 16.5 3 19.58 3 22 
                   5.42 22 8.5c0 3.78-3.4 
                   6.86-8.55 11.54L12 21.35z" />
        </svg>

        {/* Text Loading */}
        <div className="text-center animate-fadeIn">
          <p className="text-lg tracking-wide mb-2">Loading Invitation...</p>
          <h1 className="text-2xl font-bold text-white-500">
            {weddingData.couple}
          </h1>
        </div>

        {/* SPARKLE DECORATIONS */}
        <span className="sparkle sparkle-1">✦</span>
        <span className="sparkle sparkle-2">✧</span>
        <span className="sparkle sparkle-3">✩</span>
        <span className="sparkle sparkle-4">✦</span>
      </div>

      {/* Animasi CSS */}
      <style jsx>{`
        .sparkle {
          position: absolute;
          color: #ffb6c1;
          font-size: 14px;
          opacity: 0;
        }
        .sparkle-1 {
          top: -20px;
          left: -30px;
          animation: sparkle 2s infinite ease-in-out;
        }
        .sparkle-2 {
          top: -25px;
          right: -25px;
          animation: sparkle 2.5s infinite ease-in-out;
        }
        .sparkle-3 {
          bottom: -20px;
          left: -25px;
          animation: sparkle 3s infinite ease-in-out;
        }
        .sparkle-4 {
          bottom: -25px;
          right: -30px;
          animation: sparkle 2.2s infinite ease-in-out;
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.3) rotate(20deg); }
        }
      `}</style>
    </div>
  );
}
