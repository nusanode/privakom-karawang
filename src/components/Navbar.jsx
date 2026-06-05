import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (

    <nav className="fixed top-6 left-0 right-0 z-50 w-full px-4 lg:px-12 transition-all">

      <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-md border border-white/50 shadow-lg shadow-cyan-900/5 rounded-full py-3 px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 text-2xl font-black text-gray-800 tracking-tight">
          <img src="/logo.svg" alt="Privakom Logo" className="h-8 w-auto" />
          PRIVAKOM
        </div>

  
        <div className="hidden md:flex space-x-2 font-semibold text-sm text-gray-600">
          <a
            href="#about"
            className="hover:text-cyan-600 hover:bg-white/50 px-4 py-2 rounded-full transition-all"
          >
            About
          </a>
          <a
            href="#courses"
            className="hover:text-cyan-600 hover:bg-white/50 px-4 py-2 rounded-full transition-all"
          >
            Courses
          </a>
          <a
            href="#students"
            className="hover:text-cyan-600 hover:bg-white/50 px-4 py-2 rounded-full transition-all"
          >
            Students
          </a>
          <a
            href="#contact"
            className="hover:text-cyan-600 hover:bg-white/50 px-4 py-2 rounded-full transition-all"
          >
            Contact
          </a>
        </div>

  
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#contact"
            className="bg-[#FCE300] hover:bg-yellow-400 text-gray-900 px-6 py-2.5 rounded-full font-bold text-sm shadow-md shadow-yellow-400/20 hover:shadow-lg transition-all active:scale-95"
          >
            Join Now
          </a>
        </div>


        <button
          className="md:hidden p-2 text-gray-700 hover:text-cyan-500 transition-colors focus:outline-none bg-white/50 rounded-full"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>


      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-4 bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl py-6 px-6 flex flex-col space-y-2 shadow-2xl shadow-cyan-900/10">
          <a
            href="#about"
            className="text-gray-800 font-bold text-lg hover:text-cyan-600 hover:bg-white/50 px-4 py-3 rounded-2xl transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="#courses"
            className="text-gray-800 font-bold text-lg hover:text-cyan-600 hover:bg-white/50 px-4 py-3 rounded-2xl transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Courses
          </a>
          <a
            href="#students"
            className="text-gray-800 font-bold text-lg hover:text-cyan-600 hover:bg-white/50 px-4 py-3 rounded-2xl transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Students
          </a>
          <a
            href="#contact"
            className="text-gray-800 font-bold text-lg hover:text-cyan-600 hover:bg-white/50 px-4 py-3 rounded-2xl transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>

          <div className="pt-4">
            <a
              href="#contact"
              className="block bg-[#FCE300] text-gray-900 text-center px-8 py-4 rounded-full font-bold shadow-md active:scale-95 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
