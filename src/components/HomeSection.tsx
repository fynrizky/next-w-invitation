// pages/HomeSection.tsx
'use client';

export default function HomeSection() {

  return (
    <section id="home"
      className="text-center font-bahasaFont text-zinc-300">
        <div className="lg:block md:block 
          lg:bg-contain md:bg-cover bg-cover bg-center md:bg-[center] lg:bg-[150%] lg:bg-fixed bg-scroll z-0" 
          style={{backgroundImage: "url('assets/bgold.jpg')"}}>
          <div className="backdrop-blur-[2px]" style={{
            background: "linear-gradient(to bottom, rgba(255,255,255,0), rgba(0,0,0,0.9))"
            }}>

            <div className="px-4 py-8">
              <h1 className="text-3xl font-bold">Undangan Pernikahan</h1>
              <div className="relative w-[170px] h-[170px] border-2 border-gray-300 mx-auto my-6 rounded-full overflow-hidden">
                <img
                  src="assets/bgold.jpg"
                  alt="Undangan Pernikahan"
                  className="w-full h-full object-cover"
                  />
                <div className="absolute inset-0 rounded-full bg-black/20" />
              </div>
              <h1 className=" text-3xl font-bold">Fulan <br />& <br />Pasangan</h1>
              <div className="my-4">
                <a
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Fulan+%26+Pasangan+Wedding&dates=20251220T020000Z/20251220T040000Z&details=Undangan+pernikahan+Fulan+%26+Pasangan&location=Gedung+Pernikahan+XYZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:text-gray-300 border border-gray-800 rounded-md hover:bg-gray-800 transition"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z" />
                  </svg>
                  Save Google Calendar
                </a>
              </div>
            </div>

            <div className="flex justify-center mt-12 md:mt-4 lg:-mt-4 items-center">
              {/* Scroll icon di atas */}
              <div className="flex flex-col  items-center">
                  <svg
                    width="24"
                    height="30"
                    viewBox="0 0 24 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1"
                      y="1"
                      width="22"
                      height="38"
                      rx="11"
                      stroke="grey"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="12"
                      cy="15"
                      r="2"
                      fill="grey"
                      className="animate-bounce"
                    />
                  </svg>
                <p className="mt-2 text-grey-400 text-sm">Scroll Down</p>
              </div>
            </div>

          <svg
            className="w-full mt-6 -mb-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            >
            <path
              fill="#000000"
              fillOpacity="1"
              d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,208C672,203,768,149,864,154.7C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
          </svg>
          <div className="w-full h-full bg-black/40 absolute top-0 left-0 -z-10" />
        </div>
      </div>

    </section>
    // diakhir section menuju sction berikutnya ada gelombang svg 
  );
}
