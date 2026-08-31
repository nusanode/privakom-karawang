import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Bank Data Alamat Fisik Resmi & Tautan Peta Orisinal Privakom Indonesia (Local SEO Boost)
  const branchAddresses = [
    {
      title: "🏢 PRIVAKOM JAKARTA (Pusat)",
      address: "Jl. Madrasah II No.1A, RT.8/RW.10, Duren Sawit, Kec. Duren Sawit, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13440",
      mapUrl: "https://goo.gl"
    },
    {
      title: "🍊 PRIVAKOM TANGERANG",
      address: "Jl. Kav. Perkebunan Raya No.139 A, RT.005/RW.01, Bencongan, Kecamatan Kelapa Dua, Kota Tangerang, Banten 15810",
      mapUrl: "https://maps.app.goo.gl/qhEMHP4XAu178Ner7?g_st=aw-"
    },
    {
      title: "🌾 PRIVAKOM KARAWANG",
      address: "J9MH+2FR, Jl. Raya Kosambi - Telagasari, Duren, Kec. Klari, Karawang, Jawa Barat 41371",
      mapUrl: "https://goo.gl"
    }
  ];

  return (
    <footer className="bg-slate-900 text-white pt-12 md:pt-20 pb-10 w-full relative rounded-t-[2rem] md:rounded-t-[2.5rem] lg:rounded-t-[3rem] overflow-hidden mt-12 border-t border-white/5">

      {/* Dekorasi lingkaran gradien diperkecil ukurannya di HP agar tidak mengacaukan susunan teks */}
      <div className="absolute top-[-10%] left-[20%] w-64 md:w-[30rem] h-64 md:h-[30rem] bg-[#00AEEF]/10 rounded-full filter blur-[80px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-48 md:w-[20rem] h-48 md:h-[20rem] bg-[#FCE300]/5 rounded-full filter blur-[80px] pointer-events-none z-0"></div>

      <div className="px-4 md:px-6 lg:px-12 max-w-8xl mx-auto relative z-10">

        {/* SECTION 1: BRAND PROFILE, DESKRIPSI & SOCIAL MEDIA LINKS */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12 mb-10 border-b border-white/10 pb-10">
   
          <div className="lg:col-span-2 pr-0 lg:pr-12">
            <div className="flex items-center gap-3 text-2xl md:text-4xl font-black text-white mb-4 tracking-tight drop-shadow-sm">
              <img src="/logo.svg" alt="Privakom Logo" className="h-7 w-auto md:h-8" />
              Privakom.
            </div>

            <p className="text-gray-400 font-medium text-sm md:text-lg leading-relaxed mb-6 max-w-xl">
              Privakom adalah lembaga kursus komputer profesional yang menyediakan pelatihan Microsoft Office, Excel, Power BI, AutoCAD, Desain Grafis, Web Design, Teknisi Komputer, Networking, Cyber Security, serta Inhouse Training Perusahaan dengan instruktur berpengalaman dan sertifikat resmi.
            </p>

            {/* SOCIAL MEDIA BUTTONS (Telah diselaraskan dimensinya agar seragam & rapi) */}
            <div className="flex flex-wrap gap-3">
              {/* X / TWITTER */}
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-10 h-10 md:w-12 md:h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center hover:bg-[#00AEEF] hover:border-[#00AEEF] hover:shadow-lg hover:shadow-cyan-500/20 transition-all active:scale-95 text-white hover:-translate-y-1"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* TIKTOK */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 md:w-12 md:h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center hover:bg-[#00AEEF] hover:border-[#00AEEF] hover:shadow-lg hover:shadow-cyan-500/20 transition-all active:scale-95 text-white hover:-translate-y-1"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.237V2h-3.193v13.766c0 1.648-1.322 2.982-2.955 2.982-1.633 0-2.956-1.334-2.956-2.982s1.323-2.982 2.956-2.982c.305 0 .599.047.876.133V9.661a6.137 6.137 0 00-.876-.063C6.539 9.598 4 12.157 4 15.312 4 18.467 6.539 21 9.67 21s5.67-2.533 5.67-5.688V8.34a8.003 8.003 0 004.66 1.49V6.686h-.411z"/>
                </svg>
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 md:w-12 md:h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center hover:bg-[#00AEEF] hover:border-[#00AEEF] hover:shadow-lg hover:shadow-cyan-500/20 transition-all active:scale-95 text-white hover:-translate-y-1"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>

              {/* LINKEDIN */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 md:w-12 md:h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center hover:bg-[#00AEEF] hover:border-[#00AEEF] hover:shadow-lg hover:shadow-cyan-500/20 transition-all active:scale-95 text-white hover:-translate-y-1"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
                   {/* QUICK LINKS AREA */}
          <div className="lg:col-span-1">
            <h4 className="font-extrabold text-lg md:text-2xl text-white mb-4 md:mb-8">Quick Links</h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="group">
                <a href="#about" className="inline-flex items-center text-gray-400 font-bold text-xs md:text-sm hover:text-[#00AEEF] transition-colors">
                  <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2 text-[#00AEEF]">➔</span>
                  About Us
                </a>
              </li>
              <li className="group">
                <a href="#courses" className="inline-flex items-center text-gray-400 font-bold text-xs md:text-sm hover:text-[#00AEEF] transition-colors">
                  <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2 text-[#00AEEF]">➔</span>
                  Popular Courses
                </a>
              </li>
              <li className="group">
                <a href="#students" className="inline-flex items-center text-gray-400 font-bold text-xs md:text-sm hover:text-[#00AEEF] transition-colors">
                  <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2 text-[#00AEEF]">➔</span>
                  Success Stories
                </a>
              </li>
              <li className="group">
                <a href="#contact" className="inline-flex items-center text-gray-400 font-bold text-xs md:text-sm hover:text-[#00AEEF] transition-colors">
                  <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2 text-[#00AEEF]">➔</span>
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* OPERATING HOURS AREA */}
          <div className="lg:col-span-1">
            <h4 className="font-extrabold text-lg md:text-2xl text-white mb-4 md:mb-8">Operating Hours</h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex justify-between items-center border-b border-white/10 pb-3 md:pb-4">
                <span className="font-bold text-xs md:text-sm text-gray-300">Senin - Sabtu</span>
                <span className="bg-[#00AEEF]/20 text-[#00AEEF] font-bold px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs border border-cyan-500/30">09:00 - 17:00</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/10 pb-3 md:pb-4">
                <span className="font-bold text-xs md:text-sm text-gray-300">Minggu</span>
                <span className="bg-white/5 text-gray-400 font-bold px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs border border-white/10">Libur</span>
              </li>
            </ul>

            <div className="bg-cyan-900/20 border border-cyan-800/50 rounded-xl p-3 md:p-4 mt-4 md:mt-6">
              <p className="text-xs md:text-sm font-medium text-gray-400 leading-relaxed">
                Pendaftaran & konsultasi online tetap dilayani 24/7 melalui WhatsApp.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2: GRID KARTU ALAMAT FISIK (LOCAL SEO GEOTARGETING BOOST) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {branchAddresses.map((branch, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-[1.5rem] md:rounded-[2rem] shadow-xl flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300"
            >
              <div>
                <h4 className="text-white text-sm md:text-base font-black tracking-tight mb-2">
                  {branch.title}
                </h4>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-medium">
                  {branch.address}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10">
                <a 
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-[#00AEEF] hover:text-cyan-400 transition-colors gap-1.5 focus:outline-none"
                >
                  Petunjuk Arah Google Maps 
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION 3: BOTTOM FOOTER (HAK CIPTA & TERMS) */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-gray-500 font-medium text-xs md:text-sm gap-4 text-center md:text-left">
          <p>&copy; {currentYear} Privakom. All rights reserved.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <a href="#" className="hover:text-[#00AEEF] transition-colors hover:underline underline-offset-4">Privacy Policy</a>
            <a href="#" className="hover:text-[#00AEEF] transition-colors hover:underline underline-offset-4">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

