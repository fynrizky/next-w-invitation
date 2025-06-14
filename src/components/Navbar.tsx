'use client';
// components/Navbar.tsx
import { Home, Heart, Calendar, MapPin, BookOpen } from "lucide-react";

const menuItems = [
  { label: "Home", icon: <Home size={20} />, href: "#home" },
  { label: "Mempelai", icon: <Heart size={20} />, href: "#couple" },
  { label: "Acara", icon: <Calendar size={20} />, href: "#event" },
  { label: "Lokasi", icon: <MapPin size={20} />, href: "#location" },
  { label: "Doa", icon: <BookOpen size={20} />, href: "#prayer" },
];

export default function Navbar() {
  return (
    <div className="fixed bottom-0 w-full lg:w-1/3 md:right-0 md:rounded-tl-2xl z-50">
      <nav className="rounded-t-lg w-full bg-black/90 border-t-1 shadow flex justify-around py-2 text-gray-700">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex flex-col items-center text-xs hover:text-gray-500"
          >
            {item.icon}
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
