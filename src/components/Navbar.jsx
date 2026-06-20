import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* SEO Hidden Text */}
      <span className="sr-only">
        PRIVAKOM Karawang menyediakan kursus komputer Karawang,
        kursus Microsoft Office, kursus Excel, kursus PowerPoint,
        kursus Accounting Accurate dan Zahir,
        kursus AutoCAD 2D dan 3D, kursus Web Design,
        kursus Teknik Komputer dan Jaringan,
        kursus Cyber Security serta pelatihan komputer profesional di Karawang.
      </span>

      <nav className="fixed top-6 left-0 right-0 z-50 w-full px-4 lg:px-12 transition-all">
        <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-md border border-white/50 shadow-lg shadow-cyan-900/5 rounded-full py-3 px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3 text-2xl font-black text-gray-800 tracking-tight">
            <img
              src="/logo.svg"
              alt="Privakom Karawang Kursus Komputer"
              className="h-8 w-auto"
            />
            <span>PRIVAKOM KARAWANG</span>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex space-x-2 font-semibold text-sm text-gray-600">
            <a href="#about" className="hover:text-cyan-600 hover:bg-white/50 px-4 py-2 rounded-full transition-all">
              Tentang Kami
            </a>

            <a href="#courses" className="hover:text-cyan-600 hover:bg-white/50 px-4 py-2 rounded-full transition-all">
              Program Kursus
            </a>

            <a href="#students" className="hover:text-cyan-600 hover:bg-white/50 px-4 py-2 rounded-full transition-all">
              Testimoni
            </a>

            <a href="#contact" className="hover:text-cyan-600 hover:bg-white/50 px-4 py-2 rounded-full transition-all">
              Kontak
            </a>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#contact"
              className="bg-[#FCE300] hover:bg-yellow-400 text-gray-900 px-6 py-2.5 rounded-full font-bold text-sm shadow-md shadow-yellow-400/20 hover:shadow-lg transition-all active:scale-95"
            >
              Daftar Sekarang
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-cyan-500 transition-colors focus:outline-none bg-white/50 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-4 bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl py-6 px-6 flex flex-col space-y-2 shadow-2xl shadow-cyan-900/10">

            <a href="#about" className="text-gray-800 font-bold text-lg hover:text-cyan-600 px-4 py-3 rounded-2xl">
              Tentang Kami
            </a>

            <a href="#courses" className="text-gray-800 font-bold text-lg hover:text-cyan-600 px-4 py-3 rounded-2xl">
              Program Kursus
            </a>

            <a href="#students" className="text-gray-800 font-bold text-lg hover:text-cyan-600 px-4 py-3 rounded-2xl">
              Testimoni
            </a>

            <a href="#contact" className="text-gray-800 font-bold text-lg hover:text-cyan-600 px-4 py-3 rounded-2xl">
              Kontak
            </a>

            <div className="pt-4">
              <a
                href="#contact"
                className="block bg-[#FCE300] text-gray-900 text-center px-8 py-4 rounded-full font-bold shadow-md active:scale-95"
              >
                Daftar Sekarang
              </a>
            </div>

          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
