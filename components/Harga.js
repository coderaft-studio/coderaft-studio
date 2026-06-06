const paket = [
  {
    nama: "Landing Page", harga: "500.000", per: "/ halaman", highlight: false,
    fitur: ["1 halaman responsif", "Desain modern custom", "SEO dasar", "Integrasi WhatsApp", "Deploy ke Vercel", "Revisi 3x"],
    color: "#a78bfa",
  },
  {
    nama: "Web App", harga: "5.000.000", per: "mulai dari", highlight: true,
    badge: "⭐ PALING DIMINATI",
    fitur: ["Multi halaman / fitur", "CRUD & database", "Login / auth system", "Dashboard admin", "API integration", "3 bulan support"],
    color: "#f0abfc",
  },
  {
    nama: "Company Profile", harga: "1.500.000", per: "mulai dari", highlight: false,
    fitur: ["5–10 halaman", "Desain UI/UX premium", "SEO on-page", "CMS sederhana", "Domain & hosting setup", "Revisi 5x"],
    color: "#67e8f9",
  },
];

export default function Harga() {
  return (
    <section id="harga" className="py-16 md:py-24" style={{ background: "#0a0612" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs font-black tracking-widest mb-3" style={{ color: "#a78bfa", letterSpacing: "0.2em" }}>INVESTASI</p>
          <h2 className="font-black text-white mb-4" style={{ fontSize: "clamp(2rem,6vw,4rem)", letterSpacing: "-0.03em" }}>
            Harga<br />
            <span style={{ color: "#a78bfa" }}>Transparan.</span>
          </h2>
          <p className="text-sm sm:text-base" style={{ color: "rgba(240,244,255,0.4)" }}>Tidak ada biaya tersembunyi. Bisa dinegosiasi untuk project besar.</p>
        </div>

        {/* Cards — stack on mobile, 3 cols on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-start">
          {paket.map((p) => (
            <div key={p.nama} className="rounded-2xl md:rounded-3xl relative overflow-hidden"
              style={p.highlight
                ? { background: "linear-gradient(135deg,#7c3aed,#be185d)", boxShadow: "0 0 60px rgba(124,58,237,0.3)" }
                : { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>

              {!p.highlight && <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg,${p.color},transparent)` }} />}

              {p.badge && (
                <div className="absolute top-3 right-3 text-xs font-black px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.15)", color: "#fff", backdropFilter: "blur(8px)" }}>
                  {p.badge}
                </div>
              )}

              <div className="p-6 sm:p-8">
                <div className="text-xs sm:text-sm font-black mb-3" style={{ color: p.highlight ? "rgba(255,255,255,0.7)" : p.color, letterSpacing: "0.1em" }}>
                  {p.nama.toUpperCase()}
                </div>
                <div className="font-black text-3xl sm:text-4xl mb-1 text-white" style={{ letterSpacing: "-0.03em" }}>
                  Rp {p.harga}
                </div>
                <div className="text-xs mb-5 sm:mb-7" style={{ color: p.highlight ? "rgba(255,255,255,0.5)" : "rgba(240,244,255,0.3)" }}>
                  {p.per}
                </div>

                <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                  {p.fitur.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <span className="font-black flex-shrink-0 mt-0.5" style={{ color: p.highlight ? "#fff" : p.color }}>✓</span>
                      <span style={{ color: p.highlight ? "rgba(255,255,255,0.85)" : "rgba(240,244,255,0.55)" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a href="https://fastwork.id/user/coderaft" target="_blank" rel="noopener noreferrer"
                  className="block text-center py-3 rounded-xl font-black text-sm transition-all hover:scale-[1.02]"
                  style={p.highlight
                    ? { background: "#fff", color: "#7c3aed", textDecoration: "none" }
                    : { background: `${p.color}12`, color: p.color, border: `1px solid ${p.color}25`, textDecoration: "none" }}>
                  {p.nama === "Web App" ? "Konsultasi Dulu" : "Pesan Sekarang"}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-xs sm:text-sm" style={{ color: "rgba(240,244,255,0.3)" }}>
          Punya kebutuhan khusus?{" "}
          <a href="https://fastwork.id/user/coderaft" target="_blank" rel="noopener noreferrer"
            style={{ color: "#a78bfa", textDecoration: "underline" }}>
            Diskusi langsung →
          </a>
        </p>
      </div>
    </section>
  );
}
