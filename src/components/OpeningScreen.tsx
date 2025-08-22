'use client';
import { useState } from "react";
import { weddingData } from "@/data/weddingData";

type Props = {
  onOpen: () => void;
};

export default function OpeningScreen({ onOpen }: Props) {
  const [isFading, setIsFading] = useState(false);

  const handleClick = () => {
    const audio = new Audio('/music/liesandtruth.mp3'); // file di public/
    audio.loop = true;                     
    audio.play();                          
    // simpan ke global biar bisa diakses MusicPlayer
    // @ts-ignore
    window.globalAudio = audio;

    // aktifkan animasi redup
    setIsFading(true);

    // tunggu 1 detik sesuai durasi transition, baru open
    setTimeout(() => {
      onOpen();
    }, 1000);
  };

  return (
    <div
      className={`
        relative h-screen bg-cover bg-center font-bahasaFont text-zinc-300
        flex items-center justify-center
        transition-opacity duration-1000
        ${isFading ? "opacity-0" : "opacity-100"}
      `}
      style={{ backgroundImage: "url('/assets/bg.jpg')" }}
    >
      {/* Gradasi overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-black/80 z-0" />

      {/* Konten utama */}
      <div className="relative z-10 text-center animate-fadeIn">
        <h1 className="text-4xl font-bold mb-2">{weddingData.couple}</h1>
        <p
          className="mb-1"
          dangerouslySetInnerHTML={{ __html: weddingData.message }}
        />
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
