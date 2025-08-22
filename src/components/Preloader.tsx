'use client';
import { useEffect, useState } from "react";

const bootLines = [
  { percent: 10, text: "Starting system..." },
  { percent: 30, text: "Loading assets..." },
  { percent: 50, text: "Initializing invitation..." },
  { percent: 75, text: "Preparing music engine..." },
  { percent: 100, text: "Finalizing setup..." },
];

export default function Preloader({ onFinish }: { onFinish?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState(bootLines[0]);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // === Fade-in ketika pertama kali muncul ===
  useEffect(() => {
    const showTimer = setTimeout(() => setIsVisible(true), 50); // delay dikit biar animasi jalan
    return () => clearTimeout(showTimer);
  }, []);

  // === Naikkan progress ===
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = p + 1;
        const foundLine = bootLines.find((line) => line.percent === next);
        if (foundLine) setCurrentLine(foundLine);
        return next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  // === Delay + Fade-out setelah selesai ===
  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => {
          onFinish?.();
        }, 1000); // durasi fade-out
      }, 1500); // tahan sebentar di 100%
      return () => clearTimeout(timer);
    }
  }, [progress, onFinish]);

  return (
      <div
        className={`h-screen w-full flex items-center justify-center bg-black text-white relative overflow-hidden font-bahasaFont transition-opacity duration-1000 ease-linear
          ${isVisible && !isFadingOut ? "opacity-100" : "opacity-0"}`}
      >
      <div className="flex flex-col items-center gap-2 relative">
        {/* ===== ATAS: ICON + TITLE ===== */}
        <div className="flex flex-col items-center gap-2 relative">
          {/* LOVE ICON + sparkles */}
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-16 h-16 text-pink-500 animate-bounce"
              fill="currentColor"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                     2 5.42 4.42 3 7.5 3c1.74 0 
                     3.41 0.81 4.5 2.09C13.09 3.81 
                     14.76 3 16.5 3 19.58 3 22 
                     5.42 22 8.5c0 3.78-3.4 
                     6.86-8.55 11.54L12 21.35z" />
            </svg>

            {/* Sparkles khusus di icon */}
            <span className="sparkle sparkle-1">✦</span>
            <span className="sparkle sparkle-2">✧</span>
            <span className="sparkle sparkle-3">✩</span>
            <span className="sparkle sparkle-4">✦</span>
          </div>

          {/* TITLE */}
          <div className="text-center">
            <p className="text-lg">Wedding Invitation</p>
          </div>
        </div>

        {/* ===== TENGAH: PROGRESS BAR ===== */}
        <div className="text-center w-72">
          <p className="text-xs font-mono font-bold text-slate-400 mb-2">
            {progress}%
          </p>

          <div className="w-2/3 mx-auto h-2 bg-slate-800 rounded overflow-hidden">
            <div
              className="h-full bg-slate-500 transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* ===== BAWAH: BOOTLINE LOG ===== */}
        {currentLine && (
          <p className="mt-[-4px] text-slate-400 font-mono animate-fadeIn text-[8px]">
            [ OK ] ({currentLine.percent}%) {currentLine.text}
          </p>
        )}
      </div>

      {/* ===== FOOTER KREDIT ===== */}
      <footer className="absolute bottom-4 text-xs text-gray-400 flex items-center gap-2">
        <span>From</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56 
                  0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 
                  1.17.08 1.78 1.21 1.78 1.21 1.04 1.78 2.74 1.26 3.41.96.11-.76.41-1.26.75-1.55-2.55-.29-5.23-1.28-5.23-5.72 
                  0-1.26.45-2.3 1.2-3.12-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.19a11.1 11.1 0 0 1 2.9-.39c.99 0 
                  1.99.13 2.9.39 2.21-1.5 3.18-1.19 3.18-1.19.63 1.59.23 2.76.11 3.05.75.82 1.2 1.86 1.2 3.12 
                  0 4.45-2.69 5.42-5.25 5.71.42.36.8 1.08.8 2.18 0 1.57-.01 2.84-.01 3.22 
                  0 .31.21.68.8.56a10.52 10.52 0 0 0 7.86-10.94C23.5 5.74 18.27.5 12 .5z" />
        </svg>
        <span className="font-semibold text-white">fynrizky</span>
      </footer>

      <style jsx>{`
        .sparkle {
          position: absolute;
          color: #ffb6c1;
          font-size: 12px;
          opacity: 0;
        }
        .sparkle-1 { top: -10px; left: -15px; animation: sparkle 2s infinite ease-in-out; }
        .sparkle-2 { top: -15px; right: -10px; animation: sparkle 2.5s infinite ease-in-out; }
        .sparkle-3 { bottom: 5px; left: -15px; animation: sparkle 3s infinite ease-in-out; }
        .sparkle-4 { bottom: 5px; right: -10px; animation: sparkle 2.2s infinite ease-in-out; }

        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.3) rotate(20deg); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
