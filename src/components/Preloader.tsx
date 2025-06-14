'use client';
export default function Preloader() {
  return (
    <div className="h-screen w-full flex items-center justify-center font-parisienne bg-black text-white">
      <div className="text-center animate-pulse">
        <p className="text-2xl font-semibold">Loading Invitation...</p>
      </div>
    </div>
  );
}
