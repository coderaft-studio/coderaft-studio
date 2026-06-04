export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0a0a0f] flex items-center relative overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
      {/* Glows */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-violet-600/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-fuchsia-600/15 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-violet-950/60 border border-violet-700/40 text-violet-300 text-xs font-semibold px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
          Open for Projects · Fast Delivery
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Kami Bangun{" "}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Website & App
          </span>
          <br />yang Bekerja
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Coderaft Studio hadir untuk UMKM, startup, dan profesional yang ingin tampil digital
          dengan website modern, landing page yang konversi, dan web app yang fungsional.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#portofolio" className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-2xl shadow-violet-900/40">
            Lihat Portofolio
          </a>
          <a href="#kontak" className="border border-slate-700 hover:border-violet-500 text-slate-300 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all">
            Diskusi Project →
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { num: "50+", label: "Project Selesai" },
            { num: "5", label: "Demo Live" },
            { num: "< 7 Hari", label: "Delivery" },
            { num: "100%", label: "Klien Puas" },
          ].map((s) => (
            <div key={s.label} className="bg-slate-900/50 border border-slate-800/50 rounded-2xl py-5 px-4">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-1">{s.num}</div>
              <div className="text-slate-400 text-xs">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
