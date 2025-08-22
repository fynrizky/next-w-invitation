'use client';
import { useEffect, useState } from "react";
import { weddingData } from "@/data/weddingData";

type Props = { onOpen: () => void };

export default function OpeningScreen({ onOpen }: Props) {
  const [isFading, setIsFading] = useState(false);
  const [isAppeared, setIsAppeared] = useState(false); // fade-in saat mount

  useEffect(() => {
    const t = setTimeout(() => setIsAppeared(true), 30); // trigger transition
    return () => clearTimeout(t);
  }, []);

  const handleClick = () => {
    const audio = new Audio('/music/liesandtruth.mp3');
    audio.loop = true;
    audio.play();
    window.globalAudio = audio;

    // fade-out dulu baru open
    setIsFading(true);
    setTimeout(() => onOpen(), 1000); // harus sama dgn duration transition
  };

  return (
    <div
      className={`
        relative h-screen bg-cover bg-center font-bahasaFont text-zinc-300
        flex items-center justify-center
        transition-opacity duration-1000 ease-linear
        ${isAppeared && !isFading ? "opacity-100" : "opacity-0"}
      `}
      style={{ backgroundImage: "url('/assets/bg.jpg')" }}
    >
      {/* Overlay gradasi */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-black/80 z-0" />

      {/* Konten */}
      <div className="relative z-10 text-center animate-fadeIn">
        <h1 className="text-4xl font-bold mb-2">{weddingData.couple}</h1>
        <p className="mb-1" dangerouslySetInnerHTML={{ __html: weddingData.message }} />
        <p className="mb-6">{weddingData.date}</p>

        <button
          onClick={handleClick}
          className="bg-white text-black px-6 py-2 rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          Open Invitation
        </button>
      </div>
    </div>
  );
}
