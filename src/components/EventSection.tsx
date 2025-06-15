'use client';
import { useEffect, useState } from "react";

function getTimeRemaining(targetDate: Date) {
  const total = targetDate.getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}
// pages/EventSection.tsx
export default function EventSection() {
const targetDate = new Date("2025-12-20T08:00:00");
const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {  
      const remaining = getTimeRemaining(targetDate);
      setTimeLeft(remaining);
      if (remaining.total <= 0) clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section id="event" className="text-center font-parisienne bg-[#212529] text-zinc-300">
      <div className="px-4 py-4 lg:py-2 md:py-2">
        <div className="mt-4 text-center">
          <h2 className="text-lg font-bold">Menuju Hari Bahagia:</h2>
          <div className="flex justify-center gap-4 mt-2 text-sm">
            <div className="text-center">
              <p className="font-bold text-lg">{timeLeft.days}</p>
              <p>Hari</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">{timeLeft.hours}</p>
              <p>Jam</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">{timeLeft.minutes}</p>
              <p>Menit</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">{timeLeft.seconds}</p>
              <p>Detik</p>
            </div>
          </div>
        </div>
        <h2 className="text-lg font-bold mt-6">Acara Pernikahan</h2>
        <p className="text-sm mt-2"> 
          Kami mengundang Anda untuk hadir di acara pernikahan kami yang akan dilaksanakan pada:
        </p>
        <div className="mt-4">
          <h3 className="text-lg font-bold">Sabtu, 20 Desember 2025</h3>
          <p className="text-sm">Pukul 08.00 WIB</p>  
          <p className="text-sm">Gedung Serbaguna ABC</p>
          <p className="text-sm">Jl. Contoh No. 123, Jakarta</p>
        </div>
      </div>
  
      <svg
        className="w-full mt-6 -mb-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,208C672,203,768,149,864,154.7C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

    </section>
  );
}