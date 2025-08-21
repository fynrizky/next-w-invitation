'use client';
import { useEffect, useState } from "react";
import { Home, Heart, Calendar, MapPin, BookOpen } from "lucide-react";

const menuItems = [
  { label: "Home", icon: <Home size={20} />, href: "#home", id: "home" },
  { label: "Mempelai", icon: <Heart size={20} />, href: "#couple", id: "couple" },
  { label: "Acara", icon: <Calendar size={20} />, href: "#event", id: "event" },
  { label: "Lokasi", icon: <MapPin size={20} />, href: "#location", id: "location" },
  { label: "Doa", icon: <BookOpen size={20} />, href: "#prayer", id: "prayer" },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -40% 0px", threshold: 0.3 }
    );

    menuItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed bottom-0 mb-[-0.07rem] lg:mb-[0rem] w-full md:w-1/2 lg:w-1/4 font-bahasaFont z-10">
      <nav
        className="rounded-t-xl w-full bg-black/90 flex justify-around py-1 text-gray-700"
        role="navigation"
      >
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            onClick={() => setActiveId(item.id)}
            className={`flex flex-col items-center mt-1.5 text-[12px] transition ${
              activeId === item.id
                ? "text-white border-b-2 border-white-400"
                : "text-gray-400"
            }`}
          >
            {item.icon}
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
