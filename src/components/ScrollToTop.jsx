import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      // Diubah menjadi bulat kaca transparan dengan pendaran Cyan
      className="fixed bottom-6 left-6 lg:bottom-10 lg:left-10 z-50 
      bg-white/80 backdrop-blur-xl border border-white/60 text-[#00AEEF] p-4 lg:p-5 rounded-full
      shadow-lg shadow-cyan-900/10
      hover:bg-[#00AEEF] hover:text-white hover:shadow-cyan-500/30 hover:-translate-y-1 active:scale-95
      transition-all duration-300"
      aria-label="Scroll to top"
    >
      <svg
        className="w-6 h-6 lg:w-7 lg:h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default ScrollToTop;