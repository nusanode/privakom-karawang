import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBranchOpen, setIsBranchOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
        setIsBranchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Bank Data Tautan Cabang Regional Privakom (Cross-Linking SEO Boost)
  const branches = [
    { name: '📍 Jakarta Timur (Pusat)', url: 'https://maps.app.goo.gl/8Q4Qb8KXCADnKQT16?g_st=aw-' },
    { name: '📍 Tangerang (Banten)', url: 'https://tangerang.privakom.co.id/' },
    { name: '📍 Karawang (Jawa Barat)', url: 'https://privakom.co.id' }
  ];

  return (
    <>
      {/* SEO Hidden (Level 2 Keyword Expansion) */}
      <span className="sr-only">
        Kursus komputer Karawang, kursus Excel Karawang, kursus AutoCAD Karawang,
        kursus Accounting Accurate Zahir Karawang, kursus Web Design Karawang,
        kursus Teknik Komputer Jaringan Karawang, kursus Cyber Security Karawang,
        serta Inhouse Training perusahaan dan pabrik di Karawang, KIIC, Suryacipta.
        Privakom Karawang lembaga pelatihan komputer bersertifikat.
      </span>

      {/* Mengubah top-6 menjadi top-3 di HP agar posisi navbar naik sedikit ke atas dan menghemat ruang vertikal */}
      <nav
        ref={menuRef}
        className="fixed top-3 md:top-6 left-0 right-0 z-50 w-full px-4 lg:px-12 transition-all"
      >
        {/* Mengurangi padding vertikal 'py-2 md:py-3' dan 'px-4 md:px-8' agar kartu menjadi tipis */}
        <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-md border border-white/50 shadow-lg rounded-full py-2 md:py-3 px-4 md:px-8 flex items-center justify-between">

          {/* LOGO & BRAND AREA OPTIMIZATION */}
          <a href="/" className="flex items-center gap-2 md:gap-3">
            <img src="/logo.svg" alt="Kursus Komputer Karawang" className="h-7 w-auto md:h-8" />
            {/* Memecah teks menjadi 2 baris khusus di HP (text-xs hingga text-base) agar pas & proporsional */}
            <div className="flex flex-col leading-none">
              <span className="text-sm md:text-xl font-black text-gray-900 tracking-tight">PRIVAKOM</span>
              <span className="text-[10px] md:text-xs font-bold text-[#00AEEF] tracking-wider uppercase mt-0.5">KARAWANG</span>
            </div>
          </a>

          {/* DESKTOP MENU SEO INTERNAL LINK */}
          <div className="hidden md:flex items-center space-x-1 font-semibold text-xs lg:text-sm text-gray-600">
            <a href="#about" className="hover:text-cyan-600 px-3 py-2 rounded-full">Tentang Kami</a>
            <a href="#courses" className="hover:text-cyan-600 px-3 py-2 rounded-full">Program Kursus</a>
            
            {/* SEO BOOST: internal landing page */}
            <a href="/kursus-excel-karawang" className="hover:text-cyan-600 px-3 py-2 rounded-full">Kursus Excel Karawang</a>
            <a href="/kursus-autocad-karawang" className="hover:text-cyan-600 px-3 py-2 rounded-full">AutoCAD Karawang</a>
            <a href="/inhouse-training-karawang" className="hover:text-cyan-600 px-3 py-2 rounded-full">Inhouse Training</a>
            <a href="#contact" className="hover:text-cyan-600 px-3 py-2 rounded-full">Kontak</a>

            {/* DROPDOWN WILAYAH (DESKTOP) */}
            <div className="relative">
              <button 
                onClick={() => setIsBranchOpen(!isBranchOpen)}
                className="hover:text-cyan-600 px-3 py-2 rounded-full flex items-center gap-1 focus:outline-none"
              >
                Pilih Wilayah
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {isBranchOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white/95 backdrop-blur-md border rounded-2xl shadow-xl p-2 flex flex-col space-y-1">
                  {branches.map((b, i) => (
                    <a key={i} href={b.url} className="px-3 py-2 text-xs rounded-xl hover:bg-cyan-50 hover:text-cyan-600 transition-colors">{b.name}</a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA DESKTOP */}
          <div className="hidden md:flex">
            <a
              href="https://wa.me/6282277779504?text=Halo%20Privakom%20Karawang,%20saya%20ingin%20mendaftar%20kursus%20komputer%20dan%20minta%20info%20jadwal%20serta%20biaya."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FCE300] text-gray-900 px-5 py-2 rounded-full font-bold shadow-md hover:bg-yellow-400 transition-all text-xs lg:text-sm"
            >
              Daftar Sekarang
            </a>
          </div>

          {/* MOBILE BUTTON - Ukuran diperkecil agar pas dengan tinggi Navbar yang baru */}
          <button
            className="md:hidden p-2 bg-white/50 rounded-full text-sm font-bold text-gray-700 hover:bg-white/80 transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            MENU
          </button>
        </div>

        {/* MOBILE MENU - Dioptimalkan dengan sudut rounded-2xl yang elegan */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl border rounded-2xl p-5 flex flex-col space-y-3.5 shadow-xl max-h-[75vh] overflow-y-auto">
            <a href="#about" className="font-bold text-gray-800 text-sm" onClick={() => setIsMobileMenuOpen(false)}>Tentang Kami</a>
            <a href="#courses" className="font-bold text-gray-800 text-sm" onClick={() => setIsMobileMenuOpen(false)}>Program Kursus</a>
            <a href="/kursus-excel-karawang" className="font-bold text-cyan-600 text-sm">Kursus Excel Karawang</a>
            <a href="/kursus-autocad-karawang" className="font-bold text-cyan-600 text-sm">AutoCAD Karawang</a>
            <a href="/inhouse-training-karawang" className="font-bold text-cyan-600 text-sm">
  Inhouse Training Komputer
</a>
            <a href="#contact" className="font-bold text-gray-800 text-sm" onClick={() => setIsMobileMenuOpen(false)}>Kontak</a>

            {/* AREA PERPINDAHAN CABANG DI HP */}
            <div className="border-t border-gray-100 pt-3">
              <span className="text-[11px] font-bold text-gray-400 block mb-1.5 uppercase tracking-wider">Lokasi Cabang Lain:</span>
              <div className="grid grid-cols-1 gap-2">
                {branches.map((b, i) => (
                  <a key={i} href={b.url} className="text-xs text-gray-600 bg-slate-50 hover:bg-cyan-50 hover:text-cyan-600 p-2.5 rounded-xl transition-colors font-medium">{b.name}</a>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/6282277779504?text=Halo%20Privakom%20Karawang,%20saya%20ingin%20mendaftar%20kursus%20komputer."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-center py-3 rounded-full font-bold text-sm shadow-md shadow-yellow-400/20 active:scale-98 transition-transform"
            >
              Daftar Sekarang
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
