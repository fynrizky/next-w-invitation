type Props = {
  onOpen: () => void;
};

export default function OpeningScreen({ onOpen }: Props) {
  const handleClick = () => {
    const audio = new Audio('/music.mp3'); // Letakkan file ini di public/
    audio.play();
    onOpen();
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center text-zinc-300 flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/bg.jpg')" }}>
      {/* Gradasi overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-black/80 z-0" />

      {/* Konten utama */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Pria & Pasangan</h1>
        <p className="mb-6">You are invited to our wedding celebration</p>
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
