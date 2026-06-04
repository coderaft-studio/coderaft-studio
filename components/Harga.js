const paket = [
  {
    nama: "Landing Page",
    harga: "500.000",
    per: "/ halaman",
    highlight: false,
    fitur: ["1 halaman responsif", "Desain modern custom", "SEO dasar", "Integrasi WhatsApp", "Deploy ke Vercel", "Revisi 3x"],
    cta: "Pesan Sekarang",
  },
  {
    nama: "Web App",
    harga: "5.000.000",
    per: "mulai dari",
    highlight: true,
    fitur: ["Multi halaman / fitur", "CRUD & database", "Login / auth system", "Dashboard admin", "API integration", "3 bulan support"],
    cta: "Konsultasi Dulu",
  },
  {
    nama: "Company Profile",
    harga: "1.500.000",
    per: "mulai dari",
    highlight: false,
    fitur: ["5–10 halaman", "Desain UI/UX premium", "SEO on-page", "CMS sederhana", "Domain & hosting setup", "Revisi 5x"],
    cta: "Pesan Sekarang",
  },
];

export default function Harga() {
  return (
    <section id="harga" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-violet-400 font-semibold tracking-widest uppercase text-sm mb-3">Investasi</p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Harga <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Transparan</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">Tidak ada biaya tersembunyi. Harga sesuai scope, bisa dinegosiasi untuk project besar.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {paket.map((p) => (
            <div key={p.nama} className={`rounded-2xl p-8 border relative ${
              p.highlight
                ? "bg-gradient-to-b from-violet-600 to-fuchsia-700 border-violet-500 shadow-2xl shadow-violet-900/50 scale-105"
                : "bg-slate-900/50 border-slate-800"
            }`}>
              {p.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-violet-700 text-xs font-black px-4 py-1.5 rounded-full">
                  ⭐ PALING DIMINATI
                </div>
              )}
              <div className={`text-sm font-bold mb-1 ${p.highlight ? "text-violet-100" : "text-violet-400"}`}>{p.nama}</div>
              <div className={`text-4xl font-black mb-1 ${p.highlight ? "text-white" : "text-white"}`}>Rp {p.harga}</div>
              <div className={`text-xs mb-6 ${p.highlight ? "text-violet-200" : "text-slate-500"}`}>{p.per}</div>
              <ul className="space-y-3 mb-8">
                {p.fitur.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className={`mt-0.5 flex-shrink-0 font-bold ${p.highlight ? "text-white" : "text-violet-400"}`}>✓</span>
                    <span className={`text-sm ${p.highlight ? "text-violet-50" : "text-slate-300"}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="https://fastwork.id/user/coderaft" target="_blank" rel="noopener noreferrer" className={`block text-center py-3 px-6 rounded-xl font-bold transition-all ${
                p.highlight
                  ? "bg-white text-violet-700 hover:bg-violet-50"
                  : "bg-violet-600/20 text-violet-400 border border-violet-600/30 hover:bg-violet-600 hover:text-white"
              }`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-10">
          💬 Punya kebutuhan khusus?{" "}
          <a href="https://fastwork.id/user/coderaft" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline">Diskusi langsung dengan kami</a>
        </p>
      </div>
    </section>
  );
}
