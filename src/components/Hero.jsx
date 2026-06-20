const Hero = () => {
  return (
    <main className="relative w-full min-h-screen pt-32 pb-20 bg-slate-50 overflow-hidden flex items-center">

      {/* SEO hidden keyword (penting untuk lokal SEO) */}
      <span className="sr-only">
        Kursus komputer Karawang, kursus Excel Karawang, kursus AutoCAD Karawang,
        kursus Accounting Karawang, kursus Web Design Karawang,
        kursus Teknik Komputer Karawang, kursus Cyber Security Karawang,
        pelatihan komputer Karawang, inhouse training perusahaan Karawang.
      </span>

      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#00AEEF]/30 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-[#FCE300]/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"></div>

      <div className="px-4 lg:px-12 max-w-7xl mx-auto w-full relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* HERO TEXT */}
          <div className="md:col-span-8 bg-white/60 backdrop-blur-xl border border-white/60 p-10 lg:p-14 rounded-[2.5rem] shadow-xl shadow-cyan-900/5 flex flex-col justify-center relative overflow-hidden">

            <h1 className="text-5xl lg:text-[4.5rem] font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
              Kursus Komputer Karawang
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-cyan-400">
                Excel, AutoCAD, Accounting & IT Profesional
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 font-medium mb-10 max-w-xl leading-relaxed">
              PRIVAKOM Karawang menyediakan kursus komputer profesional mulai dari Microsoft Office (Excel, Word, PowerPoint),
              AutoCAD 2D/3D, Accounting (Accurate & Zahir), Web Design, Teknik Komputer, Networking hingga Cyber Security.
              Tersedia kelas privat, reguler, online, dan inhouse training perusahaan di Karawang.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#courses"
                className="inline-flex items-center gap-3 bg-[#00AEEF] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-1 transition-all active:scale-95"
              >
                Lihat Program Kursus Karawang
              </a>
            </div>
          </div>

          {/* LOGO CARD */}
          <div className="md:col-span-4 bg-gradient-to-br from-[#FCE300]/20 to-[#FCE300]/5 backdrop-blur-xl border border-white/60 p-4 rounded-[2.5rem] shadow-xl shadow-yellow-500/5 flex items-center justify-center min-h-[300px] relative overflow-hidden group">
            <div className="bg-white/50 backdrop-blur-sm w-full h-full rounded-[2rem] flex items-center justify-center border border-white/50">
              <img
                src="logo.svg"
                alt="Privakom Karawang Kursus Komputer Excel AutoCAD Accounting"
                className="w-3/4 h-auto object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
              />
            </div>
          </div>

          {/* STAT */}
          <div className="md:col-span-4 bg-[#FCE300] p-8 lg:p-10 rounded-[2.5rem] shadow-lg shadow-yellow-400/20 flex flex-col justify-end min-h-[220px] transform hover:-translate-y-1 transition-transform">
            <h3 className="text-5xl font-black text-gray-900 tracking-tight">
              500+
            </h3>
            <p className="text-gray-800 font-bold mt-1 text-lg">
              Alumni Kursus Karawang
            </p>
          </div>

          {/* FEATURES */}
          <div className="md:col-span-8 bg-white/60 backdrop-blur-xl border border-white/60 p-8 lg:p-10 rounded-[2.5rem] shadow-xl shadow-cyan-900/5 flex flex-col sm:flex-row items-center justify-between gap-6">

            <div>
              <h4 className="text-xl font-bold text-gray-900">
                Pembelajaran Praktis & Interaktif
              </h4>
              <p className="text-gray-500 text-sm mt-1">
                Metode belajar langsung praktek sesuai kebutuhan kerja di industri Karawang.
              </p>
            </div>

            <div className="hidden sm:block w-px h-16 bg-gray-200"></div>

            <div>
              <h4 className="text-xl font-bold text-gray-900">
                Siap Kerja & Inhouse Training
              </h4>
              <p className="text-gray-500 text-sm mt-1">
                Materi disusun untuk kebutuhan perusahaan, pabrik, dan dunia industri.
              </p>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
};

export default Hero;
