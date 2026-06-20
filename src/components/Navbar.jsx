import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBranchDropdownOpen, setIsBranchDropdownOpen] = useState(false);
  const [isMobileBranchOpen, setIsMobileBranchOpen] = useState(false);

  // Fungsi khusus untuk meluncur mulus ke section halaman tanpa macet
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    e.stopPropagation();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  // Fungsi membuka tautan cabang luar via JavaScript Native
  const handleBranchClick = (e, url) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 w-full px-4 lg:px-12 transition-all">
      {/* Teks Tersembunyi khusus untuk Google AI - Menguatkan Keyword Utama */}
      <span className="sr-only">
        LKP PRIVAKOM Karawang - Pusat Kursus Komputer, Kursus Microsoft Office, Kursus Excel, dan Vendor Inhouse Training Perusahaan.
      </span>

      <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-md border border-white/50 shadow-lg shadow-cyan-900/5 rounded-full py-3 px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo - Dioptimalkan Khusus SEO Komputer Karawang */}
        <div className="flex items-center gap-3 text-2xl font-black text-gray-800 tracking-tight">
          <img src="/logo.svg" alt="LKP PRIVAKOM Karawang - Kursus Komputer, Microsoft Office, dan Excel" className="h-8 w-auto" />
          <a href="https://privakom.co.id" title="Kursus Komputer Privakom Karawang" className="hover:text-cyan-600 transition-all">PRIVAKOM</a>
        </div>

        {/* =============== MENU TAMPILAN KOMPUTER (DESKTOP) =============== */}
        <div className="hidden md:flex space-x-1 items-center font-semibold text-sm text-gray-600">
          <button
            onClick={(e) => scrollToSection(e, 'about')}
            title="Tentang LKP Privakom Karawang"
            className="hover:text-cyan-600 hover:bg-white/50 px-4 py-2 rounded-full transition-all text-left focus:outline-none"
          >
            Tentang Kami
          </button>
          
          {/* Kata Kunci: Inhouse Training */}
          <button
            onClick={(e) => handleBranchClick(e, "https://privakom.co.id")}
            title="Inhouse Training Komputer & IT Perusahaan"
            className="text-cyan-600 hover:bg-white/50 px-4 py-2 rounded-full transition-all text-left focus:outline-none font-bold"
          >
            Inhouse Training
          </button>

          {/* Kata Kunci: Kursus Komputer & Microsoft Office */}
          <button
            onClick={(e) => scrollToSection(e, 'courses')}
            title="Kursus Komputer, Kursus Microsoft Office & Kursus Excel"
            className="hover:text-cyan-600 hover:bg-white/50 px-4 py-2 rounded-full transition-all text-left focus:outline-none"
          >
            Kursus & Pelatihan
          </button>

          {/* DROPDOWN LOKASI CABANG (DESKTOP ONLY) */}
          <div className="relative">
            <button
              onClick={() => setIsBranchDropdownOpen(!isBranchDropdownOpen)}
              onBlur={() => setTimeout(() => setIsBranchDropdownOpen(false), 200)}
              className="hover:text-cyan-600 hover:bg-white/50 px-4 py-2 rounded-full transition-all flex items-center gap-1 focus:outline-none"
            >
              Lokasi Cabang <span className="text-[10px]">▼</span>
            </button>
            
            {isBranchDropdownOpen && (
              <div className="absolute top-full right-0 mt-3 w-56 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 py-1 flex flex-col z-50 animate-[fadeIn_0.2s_ease-out]">
                <button onClick={(e) => handleBranchClick(e, "https://privakom.co.id")} className="px-5 py-3 text-left hover:bg-cyan-50 hover:text-cyan-600 transition-all text-xs font-bold text-gray-700 focus:outline-none">Jakarta (Duren Sawit)</button>
                <button onClick={(e) => handleBranchClick(e, "https://privakom.co.id")} className="px-5 py-3 text-left hover:bg-cyan-50 hover:text-cyan-600 transition-all text-xs font-bold text-gray-700 border-t border-gray-100 focus:outline-none">Tangerang (Kelapa Dua)</button>
                <a href="https://privakom.co.id" className="px-5 py-3 hover:bg-cyan-50 hover:text-cyan-600 transition-all text-xs font-bold text-gray-700 border-t border-gray-100">Karawang (Klari)</a>
              </div>
            )}
          </div>

          <button
            onClick={(e) => scrollToSection(e, 'students')}
            className="hover:text-cyan-600 hover:bg-white/50 px-4 py-2 rounded-full transition-all text-left focus:outline-none"
          >
            Testimoni
          </button>
          <button
            onClick={(e) => scrollToSection(e, 'contact')}
            className="hover:text-cyan-600 hover:bg-white/50 px-4 py-2 rounded-full transition-all text-left focus:outline-none"
          >
            Kontak
          </button>
        </div>

        {/* CTA DESKTOP */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={(e) => scrollToSection(e, 'contact')}
            className="bg-[#FCE300] hover:bg-yellow-400 text-gray-900 px-6 py-2.5 rounded-full font-bold text-sm shadow-md shadow-yellow-400/20 hover:shadow-lg transition-all active:scale-95 focus:outline-none"
          >
            Daftar Sekarang
          </button>
        </div>

        {/* TOMBOL MENU MOBILE */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-cyan-500 transition-colors focus:outline-none bg-white/50 rounded-full"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      {/* =============== MENU TAMPILAN HP (MOBILE PANEL) =============== */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-4 bg-white/90 backdrop-blur-xl border border-white/50 rounded-3xl py-6 px-6 flex flex-col space-y-2 shadow-2xl shadow-cyan-900/10 max-h-[80vh] overflow-y-auto z-50">
          <button onClick={(e) => scrollToSection(e, 'about')} className="text-gray-800 text-left font-bold text-lg hover:text-cyan-600 hover:bg-white/50 px-4 py-3 rounded-2xl transition-all focus:outline-none w-full">
            Tentang Kami
          </button>
          
          {/* Mobile Keyword: Inhouse Training */}
          <button onClick={(e) => handleBranchClick(e, "https://privakom.co.id")} className="text-cyan-600 text-left font-bold text-lg hover:bg-white/50 px-4 py-3 rounded-2xl transition-all focus:outline-none w-full">
            Inhouse Training Perusahaan
          </button>

          {/* Mobile Keyword: Kursus Microsoft Office & Excel */}
          <button onClick={(e) => scrollToSection(e, 'courses')} className="text-gray-800 text-left font-bold text-lg hover:text-cyan-600 hover:bg-white/50 px-4 py-3 rounded-2xl transition-all focus:outline-none w-full">
            Kursus Office & Excel
          </button>

          {/* AKORDEON CABANG DI HP */}
          <div className="border-t border-b border-gray-100 py-3 my-1">
            <button 
              onClick={() => setIsMobileBranchOpen(!isMobileBranchOpen)}
              className="w-full flex justify-between items-center px-4 text-gray-800 font-bold text-lg hover:text-cyan-600 focus:outline-none"
            >
              <span>Lokasi Pelatihan Komputer</span>
              <span className="text-xs transition-transform duration-300">{isMobileBranchOpen ? '▲' : '▼'}</span>
            </button>
            
            {isMobileBranchOpen && (
              <div className="mt-3 flex flex-col space-y-1 pl-4 animate-[fadeIn_0.2s_ease-out]">
                <button onClick={(e) => handleBranchClick(e, "https://privakom.co.id")} className="w-full text-left text-gray-600 font-bold text-base hover:text-cyan-600 py-2 block focus:outline-none">
                  📍 Jakarta (Duren Sawit)
                </button>
                <button onClick={(e) => handleBranchClick(e, "https://privakom.co.id")} className="w-full text-left text-gray-600 font-bold text-base hover:text-cyan-600 py-2 block focus:outline-none">
                  📍 Tangerang (Kelapa Dua)
                </button>
                <a href="https://privakom.co.id" className="text-gray-600 font-bold text-base hover:text-cyan-600 py-2 block">
                  📍 Karawang (Klari)
                </a>
              </div>
            )}
          </div>

          <button onClick={(e) => scrollToSection(e, 'students')} className="text-gray-800 text-left font-bold text-lg hover:text-cyan-600 hover:bg-white/50 px-4 py-3 rounded-2xl transition-all focus:outline-none w-full">
            Testimoni
          </button>
          <button onClick={(e) => scrollToSection(e, 'contact')} className="text-gray-800 text-left font-bold text-lg hover:text-cyan-600 hover:bg-white/50 px-4 py-3 rounded-2xl transition-all focus:outline-none w-full">
            Kontak
          </button>

          <div className="pt-4">
            <buttononClick={(e) => scrollToSection(e, 'contact')}className="block w-full bg-[#FCE300] text-gray-900 text-center py-4 rounded-full font-bold shadow-md active:scale-95 transition-all focus:outline-none">Daftar Sekarang)});};export default Navbar;
