'use client';

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import OpeningScreen from "@/components/OpeningScreen";
import HomeSection from "@/components/HomeSection";
import CoupleSection from "@/components/CoupleSection";
import EventSection from "@/components/EventSection";
import LocationSection from "@/components/LocationSection";
import PrayerSection from "@/components/PrayerSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Preloader />;
  if (!isOpened) return <OpeningScreen onOpen={() => setIsOpened(true)} />;

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
     {/* Background kiri: tetap (fixed) */}
      <div
        className="hidden lg:flex fixed top-0 left-0 w-2/3 h-screen bg-cover bg-center z-0 items-center justify-center"
        style={{ backgroundImage: "url('/assets/bgold.jpg')" }}
      >
        {/* Overlay gelap */}
        <div className="w-full h-full bg-black/70 absolute top-0 left-0 z-0" />

        {/* Konten di atas background */}
        <div className="relative z-10 text-center font-parisienne text-zinc-300 px-6">
          <h2 className=" text-4xl font-bold mb-2">Fulan & Pasangan</h2>
          <p className="text-lg mb-4">Rabu, 20 Desember 2025</p>

          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Fulan+%26+Pasangan+Wedding&dates=20251220T020000Z/20251220T040000Z&details=Undangan+pernikahan+Fulan+%26+Pasangan&location=Gedung+Pernikahan+XYZ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-800 text-gray-500 border-gray-500 hover:text-gray-300 hover:bg-gray-800 rounded-lg text-sm transition"
          >
            {/* Icon kalender */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z" />
            </svg>
            Save Google Calendar
          </a>
        </div>
      </div>

      {/* Konten kanan */}
      <div className="flex flex-col min-h-screen bg-white text-gray-800 lg:ml-auto lg:w-1/3 z-10">
        <Navbar />
        <div className="flex flex-col justify-center flex-grow">
          <HomeSection />
          <CoupleSection />
          <EventSection />
          <LocationSection />
          <PrayerSection />
        </div>
      </div>
    </main>
  );
}
