const demos = [
  {
    title: "Nusantara Kitchen",
    cat: "Landing Page — Restoran & Kuliner",
    desc: "Website restoran modern dengan hero full-screen, menu produk, galeri, testimoni, dan reservasi via WhatsApp.",
    url: "https://demo-resto-nusantara.vercel.app",
    stack: ["Next.js", "Tailwind CSS"],
    color: "from-amber-600 to-orange-600",
    emoji: "🍽",
  },
  {
    title: "Batik Nala",
    cat: "Landing Page — Fashion & UMKM",
    desc: "Toko batik premium dengan koleksi produk, cara pemesanan, testimoni, dan CTA WhatsApp yang optimal.",
    url: "https://demo-batik-nala.vercel.app",
    stack: ["Next.js", "Tailwind CSS"],
    color: "from-indigo-600 to-violet-600",
    emoji: "🪡",
  },
  {
    title: "Kreasi Digital",
    cat: "Landing Page — Agency & Konsultan",
    desc: "Website digital agency profesional lengkap dengan layanan, portofolio, pricing tiers, dan contact form.",
    url: "https://demo-kreasi-digital.vercel.app",
    stack: ["Next.js", "Tailwind CSS"],
    color: "from-cyan-600 to-blue-600",
    emoji: "🚀",
  },
  {
    title: "CoderaftBoard",
    cat: "Web App — Business Dashboard",
    desc: "Dashboard manajemen bisnis UMKM dengan CRUD produk, manajemen pesanan, update status real-time, dan analytics.",
    url: "https://demo-nexaboard.vercel.app",
    stack: ["Next.js", "Tailwind CSS", "React State"],
    color: "from-violet-600 to-purple-600",
    emoji: "📊",
  },
  {
    title: "CoderaftHR",
    cat: "Web App — HR Management System",
    desc: "Sistem manajemen SDM dengan dashboard kehadiran, CRUD karyawan, absensi real-time, dan chart departemen.",
    url: "https://demo-coderafthr.vercel.app",
    stack: ["Next.js", "Tailwind CSS", "React State"],
    color: "from-emerald-600 to-teal-600",
    emoji: "👥",
  },
];

export default function Portofolio() {
  return (
    <section id="portofolio" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-violet-400 font-semibold tracking-widest uppercase text-sm mb-3">Hasil Kerja Nyata</p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Portofolio <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Live</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Semua demo di bawah adalah project nyata yang bisa Anda buka dan coba langsung
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demos.map((d) => (
            <div key={d.title} className="group bg-slate-900/50 border border-slate-800/50 hover:border-slate-600 rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-900/20">
              {/* Color header */}
              <div className={`h-36 bg-gradient-to-br ${d.color} flex items-center justify-center text-6xl relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <span className="relative z-10">{d.emoji}</span>
                <div className="absolute top-3 right-3">
                  <span className="bg-black/30 backdrop-blur text-white text-xs px-3 py-1 rounded-full font-semibold">LIVE ●</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-violet-400 text-xs font-semibold mb-1">{d.cat}</p>
                <h3 className="text-white font-bold text-lg mb-2">{d.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{d.desc}</p>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {d.stack.map((s) => (
                    <span key={s} className="bg-slate-800 text-slate-300 text-xs px-2.5 py-1 rounded-full border border-slate-700">{s}</span>
                  ))}
                </div>

                <a href={d.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-slate-800 hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-600 text-slate-300 hover:text-white py-3 rounded-xl text-sm font-semibold transition-all border border-slate-700 hover:border-transparent">
                  Buka Demo Live
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="bg-gradient-to-br from-violet-900/40 to-fuchsia-900/40 border border-violet-700/30 rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-64">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-white font-bold text-lg mb-2">Project Anda Berikutnya?</h3>
            <p className="text-slate-400 text-sm mb-5">Kami siap bangun sesuai kebutuhan dan budget Anda</p>
            <a href="#kontak" className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all hover:shadow-lg hover:shadow-violet-900/40">
              Diskusi Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
