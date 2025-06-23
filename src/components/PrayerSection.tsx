'use client';
// pages/PrayerSection.tsx
export default function PrayerSection() {
  return (
    <section id="prayer" className=" pt-[10px] text-center font-bahasaFont text-zinc-300 bg-black">
      <div className="px-4 py-4 md:py-4">
        <h2 className="text-lg font-bold">Doa</h2>
        <p className="mt-4">
          Kami mohon doa restu dari Bapak/Ibu/Saudara/i agar acara pernikahan kami berjalan lancar dan penuh berkah.
        </p>
        <p className="mt-2 font-arabicFont">
          <strong>بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</strong>
        </p>
        <p className="mt-2">
          Semoga Allah memberkahi pernikahan kami dan menjadikan kami pasangan yang sakinah, mawaddah, dan warahmah.

        </p>
        <p className="mt-4">
          Kami sangat menghargai kehadiran dan doa dari Bapak/Ibu/Saudara/i. Semoga Allah membalas kebaikan Anda semua.
        </p> 
      </div>
      <svg
        className="w-full mt-6 -mb-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffffff"
          fillOpacity="1"
          d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,208C672,203,768,149,864,154.7C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      
    </section>
    
  );
}
