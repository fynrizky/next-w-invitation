"use client";
import { useEffect, useState } from "react";

const bootLines = [
  { percent: 10, text: "Starting system..." },
  { percent: 30, text: "Loading assets..." },
  { percent: 50, text: "Initializing invitation..." },
  { percent: 75, text: "Preparing music engine..." },
  { percent: 100, text: "Finalizing setup..." },
];

const assets = [
  "/assets/bgold.jpg",
  "/assets/flower.png",
  "/assets/couple.png",
  "/assets/music.mp3",
];

export default function Preloader({ onFinish }: { onFinish?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState(bootLines[0]);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    let loadedAssets = 0;

    function handleAssetLoad() {
      loadedAssets++;
      const percent = Math.round((loadedAssets / assets.length) * 100);
      setProgress(percent);

      const lines = bootLines.filter((line) => line.percent <= percent);
      if (lines.length) setCurrentLine(lines[lines.length - 1]);

      if (loadedAssets === assets.length) {
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => onFinish?.(), 1000);
        }, 1000);
      }
    }

    assets.forEach((src) => {
      if (src.match(/\.(mp3|wav)$/)) {
        const audio = new Audio();
        audio.src = src;
        audio.onloadeddata = handleAssetLoad;
        audio.onerror = handleAssetLoad;
      } else {
        const img = new Image();
        img.src = src;
        img.onload = handleAssetLoad;
        img.onerror = handleAssetLoad;
      }
    });
  }, [onFinish]);

  return (
    <div
      className={`h-screen w-full flex items-center justify-center bg-black text-white relative overflow-hidden font-bahasaFont transition-opacity duration-1000
        ${isVisible && !isFadingOut ? "opacity-100" : "opacity-0"}`}
    >
      <div className="flex flex-col items-center gap-2 relative">
        {/* ICON & TITLE */}
        <div className="flex flex-col items-center gap-2 relative">
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
            <span className="sparkle sparkle-1">✦</span>
            <span className="sparkle sparkle-2">✧</span>
            <span className="sparkle sparkle-3">✩</span>
            <span className="sparkle sparkle-4">✦</span>
          </div>
          <p className="text-lg text-center">Wedding Invitation</p>
        </div>

        {/* PROGRESS BAR */}
        <div className="text-center w-72">
          <p className="text-xs font-mono font-bold text-slate-400 mb-2">{progress}%</p>
          <div className="w-2/3 mx-auto h-2 bg-slate-800 rounded overflow-hidden">
            <div
              className="h-full bg-slate-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* BOOTLINES */}
        {currentLine && (
          <p className="mt-[-4px] text-slate-400 font-mono animate-fadeIn text-[8px]">
            [ OK ] ({currentLine.percent}%) {currentLine.text}
          </p>
        )}
      </div>
    </div>
  );
}
