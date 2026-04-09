import { contactData } from "../data/database";

const Contact = () => {

  const karawangBranch = contactData.locations.find((loc) => loc.id === "krw");

  return (
    <section
      id="contact"
      className="px-6 lg:px-12 max-w-8xl mx-auto py-24 w-full bg-slate-50 relative overflow-hidden"
    >

      <div className="absolute top-[10%] left-[-5%] w-[30rem] h-[30rem] bg-[#00AEEF]/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[25rem] h-[25rem] bg-[#FCE300]/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 pointer-events-none z-0"></div>


      <div className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-2xl shadow-cyan-900/5 rounded-[2.5rem] flex flex-col md:flex-row relative z-10 p-2 lg:p-4 gap-4">

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10 lg:p-14 md:w-5/12 flex flex-col justify-center rounded-[2rem] shadow-inner relative overflow-hidden">
          <div className="z-10 relative">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 font-bold text-sm mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse"></span>
              Our Location
            </div>

            <h2 className="text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight drop-shadow-md">
              Visit Our
              <br />
              Center.
            </h2>
            <p className="text-gray-400 font-medium text-lg mb-10 leading-relaxed max-w-md">
              Kunjungi pusat pembelajaran kami di Karawang atau hubungi kami
              langsung melalui WhatsApp untuk konsultasi program kursus.
            </p>

            <div className="space-y-3 mt-4">

              <div className="flex items-start gap-4 p-5 lg:p-6 bg-white/10 border border-white/20 shadow-lg backdrop-blur-md rounded-2xl">

                <div className="p-3.5 rounded-xl shrink-0 bg-[#00AEEF] text-white shadow-md shadow-cyan-500/40">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-black text-2xl tracking-tight mb-1.5 text-white">
                    Privakom {karawangBranch.city}
                  </h4>
                  <p className="text-sm leading-relaxed mb-4 font-medium text-gray-300">
                    {karawangBranch.address}
                  </p>

                  <div className="flex items-center gap-2 font-bold">
                    <svg
                      className="w-5 h-5 text-[#FCE300]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <a
                      href={`https://wa.me/${karawangBranch.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-base tracking-wide text-[#FCE300] hover:text-yellow-300 hover:underline transition-colors"
                    >
                      {karawangBranch.whatsapp}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

   
          <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-[#00AEEF] opacity-20 rounded-full pointer-events-none blur-[60px]"></div>
        </div>

      
        <div className="md:w-7/12 bg-transparent relative min-h-[400px] lg:min-h-full flex items-center justify-center z-10 rounded-[2rem]">
  
          <div className="relative w-full h-[400px] lg:h-full rounded-[2rem] shadow-lg border border-white/50 overflow-hidden bg-cyan-50/30">

            <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-md border border-white/50 px-5 py-2.5 rounded-full shadow-lg flex items-center gap-3 pointer-events-none">
              <span className="w-2.5 h-2.5 bg-[#00AEEF] rounded-full animate-pulse shadow-sm shadow-cyan-500/50"></span>
              <span className="font-extrabold text-gray-900 text-xs uppercase tracking-wider">
                Privakom {karawangBranch.city}
              </span>
            </div>


            <iframe
              title={`Peta Lokasi Privakom ${karawangBranch.city}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(karawangBranch.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full border-0 transition-transform duration-1000 hover:scale-105"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
