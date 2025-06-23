'use client';
// pages/LocationSection.tsx
export default function LocationSection() {
  return (
    <section id="location" className="text-center font-bahasaFont bg-[white] text-zinc-800">
      <div className="bg-black/10">

      <div className="px-4 py-4 lg:py-12 md:py-2">

          <h2 className="text-lg text-[22px] font-bold">Lokasi</h2>
          <p className="my-4">Berikut adalah lokasi acara:</p>

          {/* Google Maps Embed */}
          <div className="w-full max-w-2xl mx-auto aspect-video overflow-hidden shadow-lg">
            <iframe
              title="Lokasi Acara"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63471.58710726772!2d106.79091200000002!3d-6.134169599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec2a940017ed%3A0xdfce12d4a0938133!2sWisata%20Kota%20Tua%20Jakarta!5e0!3m2!1sen!2sid!4v1749783079405!5m2!1sen!2sid"
              height="100%"
              width={"100%"}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            

          </div>
          {/* Petunjuk atau tombol buka di Gmaps */}

          <a
            href="https://maps.app.goo.gl/LWKwh9mPLdmuniSHA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 my-4 text-white rounded hover:bg-blue-700 text-md"
            >
            Buka di Google Maps
          </a>
        </div>
      
        <svg
          className="w-full mt-6 -mb-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320">
          <path
            fill="#000000"
            fillOpacity="1"
            d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,208C672,203,768,149,864,154.7C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
        </svg>
        </div>
         
    </section>
  );
}
