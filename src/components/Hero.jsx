const Hero = () => {
  return (
    <main className="relative w-full min-h-screen pt-32 pb-20 bg-slate-50 overflow-hidden flex items-center">


      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#00AEEF]/30 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"></div>

      <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-[#FCE300]/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"></div>

      <div className="px-4 lg:px-12 max-w-7xl mx-auto w-full relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
       
          <div className="md:col-span-8 bg-white/60 backdrop-blur-xl border border-white/60 p-10 lg:p-14 rounded-[2.5rem] shadow-xl shadow-cyan-900/5 flex flex-col justify-center relative overflow-hidden">
     
            <div className="absolute top-8 right-8 flex gap-2 opacity-30">
              <span className="w-2 h-2 rounded-full bg-[#00AEEF]"></span>
              <span className="w-2 h-2 rounded-full bg-[#FCE300]"></span>
            </div>

            <h1 className="text-5xl lg:text-[4.5rem] font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-cyan-400">
    Kursus Komputer Terbaik di Karawang
  </span>
</h1>

            <p className="text-lg lg:text-xl text-gray-600 font-medium mb-10 max-w-lg leading-relaxed">
             Privakom menyediakan kursus komputer profesional untuk Microsoft Office (Excel, Word dan PowerPoint), AutoCAD, accounting, desain grafis, web design, cybersecurity, administrasi perkantoran dan skill digital dengan metode pembelajaran modern.

            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#courses"
                className="inline-flex items-center gap-3 bg-[#00AEEF] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-1 transition-all active:scale-95"
              >
                Lihat Program Kursus
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

 
          <div className="md:col-span-4 bg-gradient-to-br from-[#FCE300]/20 to-[#FCE300]/5 backdrop-blur-xl border border-white/60 p-4 rounded-[2.5rem] shadow-xl shadow-yellow-500/5 flex items-center justify-center min-h-[300px] relative overflow-hidden group">
        
            <div className="bg-white/50 backdrop-blur-sm w-full h-full rounded-[2rem] flex items-center justify-center border border-white/50">
              <img
                src="logo.svg"
                alt="Privakom Visual"
                className="w-3/4 h-auto object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
              />
            </div>
          </div>


          <div className="md:col-span-4 bg-[#FCE300] p-8 lg:p-10 rounded-[2.5rem] shadow-lg shadow-yellow-400/20 flex flex-col justify-end min-h-[220px] transform hover:-translate-y-1 transition-transform">
            <div className="bg-white/30 w-12 h-12 rounded-full flex items-center justify-center mb-auto">
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-5xl font-black text-gray-900 tracking-tight">
              500+
            </h3>
            <p className="text-gray-800 font-bold mt-1 text-lg">
              Alumni Pelatihan
            </p>
          </div>

     
          <div className="md:col-span-8 bg-white/60 backdrop-blur-xl border border-white/60 p-8 lg:p-10 rounded-[2.5rem] shadow-xl shadow-cyan-900/5 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5 w-full sm:w-auto">
              <div className="bg-cyan-100/50 text-[#00AEEF] p-4 rounded-2xl shrink-0">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  Pembelajaran Interaktif
                </h4>
                <p className="text-gray-500 font-medium text-sm mt-1">
                  Metode pembelajaran yang interaktif, mudah dipahami, dan aplikatif.
                </p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-16 bg-gray-200"></div>

            <div className="flex items-center gap-5 w-full sm:w-auto">
              <div className="bg-yellow-100/50 text-yellow-600 p-4 rounded-2xl shrink-0">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  Kurikulum Profesional
                </h4>
                <p className="text-gray-500 font-medium text-sm mt-1">
                  Materi disusun berdasarkan kebutuhan dunia kerja dan industri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
