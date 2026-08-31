import React from 'react';

const Features = () => {
  return (
    // Mengurangi padding top 'pt-6' di HP agar jarak antar section pas dan tidak melar jauh ke bawah
    <section className="px-4 md:px-6 lg:px-12 max-w-8xl mx-auto relative z-20 pt-6 md:pt-12 lg:pt-16 pb-12 md:pb-20 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">

        {/* KARTU 1: IDENTITAS UTAMA (KUNING) */}
        {/* Mengubah tinggi h-auto di HP dan md:h-64 di PC agar teks pas di layar ponsel pintar */}
        <div
          tabIndex="0"
          className="lg:col-span-1 md:order-1 bg-gradient-to-br from-[#FCE300]/90 to-[#FCE300]/70 backdrop-blur-xl border border-white/60 text-gray-900 p-6 sm:p-8 lg:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-yellow-500/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-48 sm:h-64 lg:h-72 focus:outline-none group cursor-default"
        >
          {/* Teks diubah ke bahasa Indonesia: Relevan dengan keahlian digital industri */}
          <h3 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black text-gray-900 z-10 leading-snug drop-shadow-sm">
            Mulai
            <br />
            Langkah
            <br />
            Digitalmu.
          </h3>
   
          <svg
            className="absolute bottom-[-20px] right-[-20px] w-36 sm:w-48 h-36 sm:h-48 text-yellow-600 opacity-20 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z" />
          </svg>
        </div>

        {/* KARTU 2: STATISTIK & FOTO DOKUMENTASI (TENGAH) */}
        {/* Mengubah properti h-auto di HP agar wadah putih melar secara alami mengikuti gambar dokumentasi Anda */}
        <div
          tabIndex="0"
          className="md:col-span-2 lg:order-2 md:order-3 bg-white/70 backdrop-blur-xl flex flex-row border border-white/60 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-cyan-900/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-auto sm:h-64 lg:h-72 items-center group focus:outline-none cursor-default overflow-hidden"
        >
          {/* SISI KIRI: Teks Program Kursus */}
          <div className="w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col justify-center h-full border-r border-white/50 z-10 bg-transparent">
            
            <h3 className="text-3xl sm:text-5xl font-black text-gray-900 mb-1">20+</h3>
            <p className="text-gray-500 font-bold text-xs sm:text-sm mb-4 md:mb-6 leading-relaxed">
              Program Kursus
              <br />
              Siap Kerja
            </p>
        
            <a
              href="#courses"
              className="text-white font-bold text-[10px] sm:text-xs bg-[#00AEEF] hover:bg-cyan-500 rounded-full inline-flex items-center gap-1.5 w-max px-3 sm:px-4 py-1.5 sm:py-2 transition-all outline-none shadow-md shadow-cyan-500/20 active:scale-95"
            >
              Daftar Kelas
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>

          {/* SISI KANAN: Tempat foto dokumentasi kelas Anda */}
          <div className="w-1/2 h-full relative overflow-hidden bg-cyan-50/50 min-h-[160px] sm:min-h-full">
            <img
              loading="lazy"
              src="foto-1.jpeg"
              alt="Siswa belajar komputer di Privakom Karawang"
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
            />
          </div>
        </div>

        {/* KARTU 3: INSTRUKTUR AHLI (BIRU) */}
        <div
          tabIndex="0"
          className="lg:col-span-1 lg:order-3 md:order-2 bg-gradient-to-br from-[#00AEEF]/90 to-cyan-500/80 backdrop-blur-xl text-white p-6 sm:p-8 lg:p-10 border border-white/40 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-cyan-500/20 hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-48 sm:h-64 lg:h-72 focus:outline-none group cursor-default"
        >
          <div>
            <div className="flex justify-between items-start mb-2 sm:mb-4">
              
              <h3 className="text-3xl sm:text-6xl font-black tracking-tight text-white drop-shadow-sm">
                50+
              </h3>

              <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-md group-hover:bg-white group-hover:text-[#00AEEF] text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                <svg className="w-5 h-5 sm:w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3L22 4" />
                </svg>
              </div>
            </div>
            <h4 className="text-sm sm:text-base font-bold text-white mt-2 sm:mt-6 drop-shadow-sm">
              Instruktur Ahli
            </h4>
          </div>

          <p className="text-xs sm:text-sm text-cyan-50 font-medium mt-1 sm:mt-2 leading-relaxed border-t border-white/30 pt-2 sm:pt-4">
            Praktisi profesional industri yang siap membimbing materi kerja Anda.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Features;
