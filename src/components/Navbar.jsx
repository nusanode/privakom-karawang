import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

      <nav
        ref={menuRef}
        className="fixed top-6 left-0 right-0 z-50 w-full px-4 lg:px-12 transition-all"
      >
        <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-md border border-white/50 shadow-lg rounded-full py-3 px-6 lg:px-8 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3 text-2xl font-black text-gray-800">
            <img src="/logo.svg" alt="Kursus Komputer Karawang Privakom Excel AutoCAD IT" className="h-8 w-auto" />
            <span>PRIVAKOM KARAWANG</span>
          </div>

          {/* DESKTOP MENU SEO INTERNAL LINK */}
          <div className="hidden md:flex space-x-2 font-semibold text-sm text-gray-600">

            <a href="#about" className="hover:text-cyan-600 px-4 py-2 rounded-full">
              Tentang Kami
            </a>

            <a href="#courses" className="hover:text-cyan-600 px-4 py-2 rounded-full">
              Program Kursus
            </a>

            {/* SEO BOOST: internal landing page */}
            <a
              href="/kursus-excel-karawang"
              className="hover:text-cyan-600 px-4 py-2 rounded-full"
            >
              Kursus Excel Karawang
            </a>

            <a
              href="/kursus-autocad-karawang"
              className="hover:text-cyan-600 px-4 py-2 rounded-full"
            >
              AutoCAD Karawang
            </a>

            <a
              href="/inhouse-training-karawang"
              className="hover:text-cyan-600 px-4 py-2 rounded-full"
            >
              Inhouse Training
            </a>

            <a href="#contact" className="hover:text-cyan-600 px-4 py-2 rounded-full">
              Kontak
            </a>
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <a
              href="/kursus-komputer-karawang"
              className="bg-[#FCE300] text-gray-900 px-6 py-2.5 rounded-full font-bold shadow-md hover:bg-yellow-400 transition-all"
            >
              Daftar Kursus Karawang
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden p-2 bg-white/50 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-4 bg-white/90 backdrop-blur-xl rounded-3xl p-6 flex flex-col space-y-3">

            <a href="#about" className="font-bold">Tentang Kami</a>

            <a href="#courses" className="font-bold">Program Kursus</a>

            <a href="/kursus-excel-karawang" className="font-bold text-cyan-600">
              Kursus Excel Karawang
            </a>

            <a href="/kursus-autocad-karawang" className="font-bold text-cyan-600">
              AutoCAD Karawang
            </a>

            <a href="/inhouse-training-karawang" className="font-bold text-cyan-600">
              Inhouse Training Pabrik
            </a>

            <a href="#contact" className="font-bold">Kontak</a>

            <a
              href="/kursus-komputer-karawang"
              className="bg-yellow-400 text-center py-3 rounded-full font-bold"
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
