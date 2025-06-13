// pages/CoupleSection.tsx
export default function CoupleSection() {
  return (
    <section id="couple" className="font-parisienne text-zinc-300 bg-black text-center">
      <h1 className="text-4xl mt-12">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h1>
      <h2 className="text-[18px] my-6">Assalamualaikum <br/>Warahmatullahi Wabarakatuh</h2>
      <p className="text-xs">Tanpa mengurangi rasa hormat, kami mengundang Anda untuk berkenan menghadiri acara pernikahan kami:</p>
      <div className="mt-4">
        <img
          src="assets/bgsleep.jpg"
          alt="Undangan Pernikahan"
          className="w-50 h-50 mx-auto my-6 rounded-full object-cover"
        />
        <h3 className="mt-6 text-[18px] font-bold">Fulan</h3>
        <p className="text-xs">Putra dari Bapak Nama Ayah Pria dan Ibu Nama Ibu Pria</p>
        <img
          src="assets/bgnew.jpg"
          alt="Undangan Pernikahan"
          className="w-50 h-50 mx-auto my-6 rounded-full object-cover"
        />
        <h3 className="text-[18px] font-bold mt-4">Nama Mempelai Wanita</h3>
        <p className="text-xs">Putri dari Bapak Nama Ayah Wanita dan Ibu Nama Ibu Wanita</p>
      </div>

      <svg
        className="w-full mt-6 -mb-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        >
        <path
          fill="#212529"
          fillOpacity="1"
          d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,208C672,203,768,149,864,154.7C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
