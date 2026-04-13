const About = () => {
  return (
    <section
      id="about"
      className="py-5 lg:py-5 relative w-full overflow-hidden bg-slate-50"
    >
      <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-[#00AEEF]/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-[#FCE300]/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 pointer-events-none"></div>

      <div className="px-6 lg:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20 items-center relative z-10">
        <div className="lg:w-1/2 relative w-full group mt-10 lg:mt-0">
          <div className="relative bg-white/40 backdrop-blur-xl border border-white/60 p-4 rounded-[2.5rem] shadow-2xl shadow-cyan-900/10 z-10 overflow-hidden">
            <img
              src="foto-1.jpeg"
              alt="Siswa belajar di Privakom"
              loading="lazy"
              className="w-full h-auto object-cover rounded-[2rem] transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="absolute -bottom-6 -right-4 lg:-bottom-10 lg:-right-8 bg-white/80 backdrop-blur-xl p-5 lg:p-6 rounded-[2rem] border border-white/60 shadow-xl shadow-cyan-900/10 z-20 transition-transform duration-500 hover:-translate-y-2">
            <div className="flex items-center gap-5">
              <div className="bg-gradient-to-br from-[#FCE300] to-yellow-400 text-yellow-900 p-4 rounded-2xl shadow-inner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-lg font-black text-dark tracking-tight leading-tight mb-1">
                  LKP PRIVAKOM
                </p>

                <div className="inline-block mt-1 bg-primary/20 text-dark px-2 py-1 rounded-md text-xs font-extrabold">
                  NPSN: K9999519
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full py-8 mt-12 lg:mt-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100/50 border border-cyan-200/50 text-[#00AEEF] font-bold text-sm mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse"></span>
            About Privakom
          </div>

          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-[1.1] tracking-tight">
            Empowering The Next Generation.
          </h2>

          <p className="text-lg lg:text-xl text-gray-600 font-medium mb-10 leading-relaxed max-w-lg">
            Di Privakom, kami percaya bahwa proses belajar harus terasa menarik
            dan menginspirasi. Kurikulum inovatif kami dirancang untuk
            membangkitkan rasa ingin tahu, membangun keterampilan praktis
            menggunakan metode interaktif modern.
          </p>

          <ul className="space-y-4 mb-12">
            <li className="flex items-center gap-5 p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/50 shadow-sm hover:shadow-md hover:bg-white/80 transition-all cursor-default group/list">
              <div className="bg-[#00AEEF]/10 text-[#00AEEF] p-3 rounded-xl group-hover/list:scale-110 transition-transform">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <span className="text-gray-800 font-bold text-lg">
                Interactive Learning
              </span>
            </li>
            <li className="flex items-center gap-5 p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/50 shadow-sm hover:shadow-md hover:bg-white/80 transition-all cursor-default group/list">
              <div className="bg-[#00AEEF]/10 text-[#00AEEF] p-3 rounded-xl group-hover/list:scale-110 transition-transform">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <span className="text-gray-800 font-bold text-lg">
                Progress Tracking
              </span>
            </li>
            <li className="flex items-center gap-5 p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/50 shadow-sm hover:shadow-md hover:bg-white/80 transition-all cursor-default group/list">
              <div className="bg-[#00AEEF]/10 text-[#00AEEF] p-3 rounded-xl group-hover/list:scale-110 transition-transform">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <span className="text-gray-800 font-bold text-lg">
                Expert Curriculum
              </span>
            </li>
          </ul>

          <a
            href="#courses"
            className="inline-flex items-center gap-3 bg-[#FCE300] hover:bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-full shadow-lg shadow-yellow-500/20 hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all"
          >
            Learn More
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
    </section>
  );
};

export default About;