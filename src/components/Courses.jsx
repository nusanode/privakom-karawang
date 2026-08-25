import { useEffect, useMemo, useState } from 'react';
import { coursesData, contactData } from '../data/database';

const Courses = () => {
  const courseImage = "/foto-1.jpeg";
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua Program');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [visibleCount, setVisibleCount] = useState(3);

  // =========================
  // KATEGORI
  // =========================
  const categories = useMemo(
    () => [
      'Semua Program',
      ...new Set(coursesData.map((course) => course.category)),
    ],
    []
  );

  // =========================
  // FILTER PROGRAM
  // =========================
  const filteredCourses = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase();

    return coursesData.filter((course) => {
      const matchesCategory =
        activeCategory === 'Semua Program' ||
        course.category === activeCategory;

      const matchesSearch =
        !keyword ||
        course.title.toLowerCase().includes(keyword) ||
        course.description.toLowerCase().includes(keyword) ||
        course.category.toLowerCase().includes(keyword);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  const displayedCourses = filteredCourses.slice(0, visibleCount);

  const isShowingAll =
    visibleCount >= filteredCourses.length;

  // =========================
  // RESET JUMLAH PROGRAM
  // =========================
  useEffect(() => {
    setVisibleCount(searchTerm ? filteredCourses.length : 3);
  }, [searchTerm, filteredCourses.length]);

  // =========================
  // ESC UNTUK TUTUP MODAL
  // =========================
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedCourse(null);
      }
    };

    if (selectedCourse) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedCourse]);

  // =========================
  // KATEGORI
  // =========================
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setVisibleCount(3);
  };

  // =========================
  // MUAT LEBIH BANYAK
  // =========================
  const handleToggleView = () => {
    if (isShowingAll) {
      setVisibleCount(3);

      document
        .getElementById('courses')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
    } else {
      setVisibleCount((prev) => prev + 3);
    }
  };

  // =========================
  // WHATSAPP KARAWANG
  // =========================
  const handleDaftarClick = () => {
    if (!selectedCourse) return;

    const karawangBranch = contactData.locations.find(
      (location) => location.id === 'krw'
    );

    if (!karawangBranch?.whatsapp) return;

    const phoneNumber =
      karawangBranch.whatsapp.replace(/\D/g, '');

    const message =
      `Halo Admin Privakom Karawang,%0A%0A` +
      `Saya tertarik dengan program:%0A` +
      `*${selectedCourse.title}*%0A%0A` +
      `Mohon informasi mengenai harga, jadwal, ` +
      `dan pendaftaran. Terima kasih.`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="courses"
      className="px-6 lg:px-12 py-20 lg:py-28 max-w-8xl mx-auto w-full relative bg-slate-50 overflow-hidden"
    >

      {/* =========================
          HEADER
      ========================== */}
      <div className="flex flex-col xl:flex-row items-start xl:items-end justify-between gap-8 mb-12 relative z-10">

        <div className="max-w-3xl">

          <div className="flex items-center gap-3 mb-4">

            <div className="h-1.5 w-8 bg-[#00AEEF] rounded-full" />

            <span className="text-[#00AEEF] font-bold tracking-wider text-sm uppercase">
              Program Pelatihan
            </span>

          </div>

          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
            Kursus Komputer Karawang
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Pilihan kursus komputer dan pelatihan profesional
            di Karawang untuk meningkatkan keterampilan kerja,
            bisnis, dan teknologi.
          </p>

        </div>

        {/* =========================
            SEARCH + VIEW
        ========================== */}
        <div className="w-full xl:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">

          {/* Pencarian */}
          <div className="relative w-full sm:min-w-[300px]">

            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">

              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>

            </div>

            <input
              type="search"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              placeholder="Cari program kursus..."
              aria-label="Cari program kursus"
              className="w-full pl-12 pr-11 py-4 bg-white border border-gray-200 rounded-full text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/30 focus:border-[#00AEEF] shadow-sm"
            />

            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                aria-label="Hapus pencarian"
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-red-500"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}

          </div>

          {/* Tampilan */}
          <div className="flex bg-white border border-gray-200 p-1 rounded-full shadow-sm">

            <button
              type="button"
              onClick={() => setViewMode('grid')}
              aria-label="Tampilan kartu"
              aria-pressed={viewMode === 'grid'}
              className={`p-3 rounded-full transition-colors ${
                viewMode === 'grid'
                  ? 'bg-[#00AEEF] text-white'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('list')}
              aria-label="Tampilan daftar"
              aria-pressed={viewMode === 'list'}
              className={`p-3 rounded-full transition-colors ${
                viewMode === 'list'
                  ? 'bg-[#00AEEF] text-white'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </button>

          </div>

        </div>
      </div>

      {/* =========================
          FILTER KATEGORI
      ========================== */}
      <div className="flex flex-wrap gap-2.5 mb-12 relative z-10">

        {categories.map((category) => (

          <button
            key={category}
            type="button"
            onClick={() => handleCategoryClick(category)}
            className={`px-5 py-2.5 font-bold rounded-full text-sm transition-all ${
              activeCategory === category
                ? 'bg-[#00AEEF] text-white shadow-md'
                : 'bg-white border border-gray-200 text-gray-600 hover:border-[#00AEEF] hover:text-[#00AEEF]'
            }`}
          >
            {category}
          </button>

        ))}

      </div>

      {/* =========================
          HASIL PROGRAM
      ========================== */}
      <div className="relative z-10">

        {displayedCourses.length > 0 ? (

          viewMode === 'grid' ? (

            /* =========================
               GRID
            ========================== */
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

              {displayedCourses.map((course) => (

                <article
                  key={course.id}
                  onClick={() => setSelectedCourse(course)}
                  className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
                >

                  {/* Header kartu */}
                  <div className="h-3 bg-[#00AEEF]" />

                  <div className="p-6 flex flex-col flex-grow">

                    <div className="flex items-start justify-between gap-3 mb-5">

                      <span className="inline-flex bg-[#00AEEF]/10 text-[#00AEEF] px-3 py-1.5 rounded-full text-xs font-bold">
                        {course.category}
                      </span>

                    </div>

                    <h3 className="text-xl lg:text-2xl font-black text-gray-900 mb-3 leading-tight">
                      {course.title}
                    </h3>

                    <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6">
                      {course.description}
                    </p>

                    <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between gap-3">

                      <span className="text-sm font-bold text-gray-500 flex items-center gap-2">

                        <svg
                          className="w-5 h-5 text-[#00AEEF]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 01-18 0"
                          />
                        </svg>

                        {course.duration}

                      </span>

                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          setSelectedCourse(course);
                        }}
                        className="text-sm font-bold text-[#00AEEF] bg-[#00AEEF]/10 hover:bg-[#00AEEF] hover:text-white px-5 py-2.5 rounded-full transition-colors"
                      >
                        Detail
                      </button>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            /* =========================
               DAFTAR
            ========================== */
            <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">

              <div className="overflow-x-auto">

                <table className="w-full text-left border-collapse min-w-[700px]">

                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">

                      <th className="py-4 px-5 text-xs font-bold uppercase">
                        No
                      </th>

                      <th className="py-4 px-5 text-xs font-bold uppercase">
                        Program Kursus
                      </th>

                      <th className="py-4 px-5 text-xs font-bold uppercase">
                        Kategori
                      </th>

                      <th className="py-4 px-5 text-xs font-bold uppercase">
                        Durasi
                      </th>

                      <th className="py-4 px-5 text-xs font-bold uppercase text-center">
                        Aksi
                      </th>

                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100">

                    {displayedCourses.map((course, index) => (

                      <tr
                        key={course.id}
                        onClick={() => setSelectedCourse(course)}
                        className="hover:bg-gray-50 cursor-pointer"
                      >

                        <td className="py-4 px-5 text-gray-500 font-bold">
                          {index + 1}
                        </td>

                        <td className="py-4 px-5">

                          <div className="font-bold text-gray-900">
                            {course.title}
                          </div>

                        </td>

                        <td className="py-4 px-5">

                          <span className="bg-[#00AEEF]/10 text-[#00AEEF] px-3 py-1 rounded-full text-xs font-bold">
                            {course.category}
                          </span>

                        </td>

                        <td className="py-4 px-5 text-gray-600 font-medium">
                          {course.duration}
                        </td>

                        <td className="py-4 px-5 text-center">

                          <button
                            type="button"
                            onClick={(event) => {
                              event.stopPropagation();
                              setSelectedCourse(course);
                            }}
                            className="text-xs font-bold text-white bg-[#00AEEF] hover:bg-cyan-500 px-5 py-2.5 rounded-full"
                          >
                            Detail
                          </button>

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>

          )

        ) : (

          /* =========================
             TIDAK DITEMUKAN
          ========================== */
          <div className="py-20 px-6 text-center bg-white border border-gray-100 rounded-3xl">

            <div className="text-[#00AEEF] mb-5">

              <svg
                className="w-14 h-14 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

            </div>

            <h3 className="text-2xl font-black text-gray-900 mb-3">
              Program Tidak Ditemukan
            </h3>

            <p className="text-gray-600">
              Tidak ada program yang sesuai dengan pencarian
              "{searchTerm}".
            </p>

            <button
              type="button"
              onClick={() => setSearchTerm('')}
              className="mt-6 bg-gray-900 text-white font-bold rounded-full px-7 py-3"
            >
              Hapus Pencarian
            </button>

          </div>

        )}

      </div>

      {/* =========================
          MUAT LEBIH BANYAK
      ========================== */}
      {!searchTerm && filteredCourses.length > 3 && (

        <div className="text-center mt-12 relative z-10">

          <button
            type="button"
            onClick={handleToggleView}
            className="inline-flex items-center gap-3 bg-white border border-gray-200 text-gray-900 font-bold px-8 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all"
          >
            {isShowingAll
              ? 'Tutup Katalog'
              : 'Muat Lebih Banyak'}

            <svg
              className={`w-5 h-5 transition-transform ${
                isShowingAll ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M19 9l-7 7-7-7"
              />
            </svg>

          </button>

        </div>

      )}

            {/* =========================
          MODAL DETAIL
      ========================== */}
      {selectedCourse && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="course-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedCourse(null);
            }
          }}
        >

          <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl">

            {/* HEADER MODAL */}
            <div className="bg-[#00AEEF] p-7 sm:p-9 relative">

              {/* Tombol Tutup */}
              <button
                type="button"
                onClick={() => setSelectedCourse(null)}
                aria-label="Tutup"
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white hover:text-gray-900 flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Kategori */}
              <span className="inline-flex bg-white/20 text-white px-3 py-1.5 rounded-full text-xs font-bold mb-4">
                {selectedCourse.category}
              </span>

              {/* Judul */}
              <h3
                id="course-title"
                className="text-3xl sm:text-4xl font-black text-white leading-tight pr-8"
              >
                {selectedCourse.title}
              </h3>

            </div>

            {/* ISI MODAL */}
            <div className="p-7 sm:p-9">

              {/* Informasi Durasi */}
              <div className="flex flex-wrap gap-3 mb-7">

                <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-bold">

                  <svg
                    className="w-5 h-5 text-[#00AEEF]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  Durasi: {selectedCourse.duration}

                </span>

              </div>

              {/* Deskripsi */}
              <h4 className="text-xl font-black text-gray-900 mb-3">
                Deskripsi Program
              </h4>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                {selectedCourse.description}
              </p>

              {/* INFORMASI PENDAFTARAN */}
              <div className="bg-[#00AEEF]/5 border border-[#00AEEF]/20 rounded-2xl p-5 sm:p-6 mb-8">

                <div className="flex gap-4 items-start">

                  <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center shrink-0">

                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M12 22a10 10 0 100-20 10 10 0 000 20z"
                      />
                    </svg>

                  </div>

                  <div>

                    <p className="font-black text-gray-900 mb-1">
                      Informasi Pendaftaran
                    </p>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Untuk informasi harga, jadwal kelas reguler,
                      weekend, private, maupun kebutuhan pelatihan
                      perusahaan, silakan hubungi Admin Privakom Karawang
                      melalui WhatsApp.
                    </p>

                  </div>

                </div>

              </div>

              {/* TOMBOL */}
              <div className="flex flex-col sm:flex-row gap-3">

                <button
                  type="button"
                  onClick={() => setSelectedCourse(null)}
                  className="w-full sm:w-1/3 px-6 py-4 font-bold rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  Tutup
                </button>

                <button
                  type="button"
                  onClick={handleDaftarClick}
                  className="w-full sm:w-2/3 px-6 py-4 font-black rounded-full bg-[#FCE300] hover:bg-yellow-400 text-gray-900 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3"
                >

                  <span>
                    Daftar via WhatsApp
                  </span>

                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.52 3.48A11.82 11.82 0 0012.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.15 1.59 5.96L.06 24l6.3-1.65a11.9 11.9 0 005.7 1.45h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.23-6.17-3.44-8.43zM12.07 21.8h-.01a9.9 9.9 0 01-5.05-1.38l-.36-.21-3.74.98 1-3.65-.23-.37a9.88 9.88 0 01-1.52-5.28C2.16 6.42 6.6 1.98 12.06 1.98c2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 012.89 7c0 5.46-4.43 9.9-9.87 9.92zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                  </svg>

                </button>

              </div>

            </div>

          </div>

        </div>
      )}

    </section>
  );
};

export default Courses;
