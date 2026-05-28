import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import ScrollToTop from '../components/ScrollToTop';

function InhouseTraining() {
  return (
    <>
      <Navbar />

      <section className="bg-white text-gray-900 min-h-screen">

        {/* HERO */}
        <div className="max-w-7xl mx-auto px-6 py-20">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Inhouse Training Komputer Perusahaan
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-10">
            Privakom menyediakan layanan inhouse training komputer
            profesional untuk perusahaan, sekolah, instansi dan UMKM
            di Karawang, Jakarta dan Tangerang.
          </p>

          <a
            href="https://wa.me/6285186857506"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition"
          >
            Konsultasi Training
          </a>

        </div>

        {/* LAYANAN */}
        <div className="max-w-7xl mx-auto px-6 py-16">

          <h2 className="text-3xl font-bold mb-10">
            Program Training
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-gray-100 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold mb-3">
                Microsoft Office
              </h3>

              <p className="text-gray-600">
                Training Word, Excel dan PowerPoint untuk kebutuhan administrasi perusahaan.
              </p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold mb-3">
                AutoCAD
              </h3>

              <p className="text-gray-600">
                Pelatihan gambar teknik dan desain profesional untuk industri.
              </p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold mb-3">
                Desain Grafis
              </h3>

              <p className="text-gray-600">
                Adobe Photoshop, Illustrator dan Canva untuk kebutuhan promosi perusahaan.
              </p>
            </div>

          </div>

        </div>

        {/* KEUNGGULAN */}
        <div className="bg-gray-50 py-16">

          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-3xl font-bold mb-10">
              Kenapa Memilih Privakom?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-white rounded-2xl p-6 shadow">
                <h3 className="text-xl font-semibold mb-2">
                  Trainer Profesional
                </h3>

                <p className="text-gray-600">
                  Materi disampaikan langsung oleh instruktur berpengalaman.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow">
                <h3 className="text-xl font-semibold mb-2">
                  Fleksibel
                </h3>

                <p className="text-gray-600">
                  Jadwal training dapat disesuaikan dengan kebutuhan perusahaan.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow">
                <h3 className="text-xl font-semibold mb-2">
                  Sertifikat
                </h3>

                <p className="text-gray-600">
                  Peserta mendapatkan sertifikat pelatihan resmi.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow">
                <h3 className="text-xl font-semibold mb-2">
                  On Site Training
                </h3>

                <p className="text-gray-600">
                  Training dapat dilakukan langsung di lokasi perusahaan.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />
      <ScrollToTop />
      <FloatingWhatsApp />
    </>
  );
}

export default InhouseTraining;
