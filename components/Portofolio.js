"use client";

const demos = [
  {
    title: "Nusantara Kitchen",
    subcat: "Landing Page — Restoran & Kuliner",
    desc: "Website restoran modern dengan hero full-screen, menu produk, galeri, testimoni, dan reservasi via WhatsApp.",
    url: "https://demo-resto-nusantara.vercel.app",
    color: "from-amber-600 to-orange-600",
    emoji: "🍽",
    cat: "Landing Page",
    lang: "id",
    tags: ["Restoran", "WhatsApp", "Galeri"],
  },
  {
    title: "Batik Nala",
    subcat: "Landing Page — Fashion & UMKM",
    desc: "Toko batik premium dengan koleksi produk, cara pemesanan, testimoni, dan CTA WhatsApp yang optimal.",
    url: "https://demo-batik-nala.vercel.app",
    color: "from-indigo-600 to-violet-600",
    emoji: "🪡",
    cat: "Landing Page",
    lang: "id",
    tags: ["Fashion", "UMKM", "E-commerce"],
  },
  {
    title: "Kreasi Digital",
    subcat: "Landing Page — Agency & Konsultan",
    desc: "Website digital agency profesional dengan layanan, portofolio, pricing tiers, dan contact form.",
    url: "https://demo-kreasi-digital.vercel.app",
    color: "from-cyan-600 to-blue-600",
    emoji: "🚀",
    cat: "Landing Page",
    lang: "id",
    tags: ["Agency", "Pricing", "B2B"],
  },
  {
    title: "CoderaftBoard",
    subcat: "Web App — Business Dashboard",
    desc: "Dashboard UMKM dengan CRUD produk, manajemen pesanan, update status real-time, dan analytics.",
    url: "https://demo-nexaboard.vercel.app",
    color: "from-violet-600 to-purple-600",
    emoji: "📊",
    cat: "Web App",
    lang: "id",
    tags: ["Dashboard", "CRUD", "Analytics"],
  },
  {
    title: "CoderaftHR",
    subcat: "Web App — HR Management System",
    desc: "Sistem HR dengan dashboard kehadiran, CRUD karyawan, absensi real-time, dan chart departemen.",
    url: "https://demo-coderafthr.vercel.app",
    color: "from-emerald-600 to-teal-600",
    emoji: "👥",
    cat: "Web App",
    lang: "id",
    tags: ["HR", "Karyawan", "Absensi"],
  },
];

const catStyle = {
  "Landing Page": { bg: "rgba(139,92,246,0.2)",  text: "#c4b5fd", border: "rgba(139,92,246,0.35)" },
  "Web App":      { bg: "rgba(56,189,248,0.2)",  text: "#7dd3fc", border: "rgba(56,189,248,0.35)" },
};

export default function Portofolio() {
  return (
    <section id="portofolio" className="py-16 md:py-24" style={{ background: "#06040f" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-black tracking-widest mb-3" style={{ color: "#a78bfa", letterSpacing: "0.2em" }}>PORTOFOLIO</p>
            <h2 className="font-black text-white" style={{ fontSize: "clamp(2.5rem,5vw,4rem)", letterSpacing: "-0.03em", lineHeight: "1" }}>
              Hasil Kerja<br />
              <span style={{ background: "linear-gradient(135deg,#a78bfa,#f0abfc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Nyata.
              </span>
            </h2>
          </div>
          <a href="https://coderaft-demos.vercel.app" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 font-bold text-sm transition-all hover:gap-3"
            style={{ color: "#a78bfa", textDecoration: "none" }}>
            Lihat semua demo →
          </a>
        </div>

        {/* Cards Grid — same style as coderaft-demos catalog */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {demos.map((d) => {
            const cs = catStyle[d.cat];
            return (
              <a key={d.title} href={d.url} target="_blank" rel="noopener noreferrer"
                style={{ textDecoration: "none", display: "block" }}>
                <div
                  className="group rounded-2xl overflow-hidden transition-all"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.border = "1px solid rgba(139,92,246,0.3)";
                    e.currentTarget.style.boxShadow = "0 20px 60px rgba(139,92,246,0.15)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.border = "1px solid rgba(255,255,255,0.07)";
                    e.currentTarget.style.boxShadow = "none";
                  }}>

                  {/* Visual header */}
                  <div className={`bg-gradient-to-br ${d.color} relative flex items-center justify-center`}
                    style={{ height: "160px" }}>
                    <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.22)" }} />

                    {/* Emoji */}
                    <span className="group-hover:scale-110 transition-transform duration-300"
                      style={{ fontSize: "56px", position: "relative", zIndex: 1, filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.4))" }}>
                      {d.emoji}
                    </span>

                    {/* Language badge */}
                    <div style={{ position: "absolute", top: "12px", left: "12px", zIndex: 2, fontSize: "18px" }}
                      title={d.lang === "en" ? "English" : "Bahasa Indonesia"}>
                      {d.lang === "en" ? "🇺🇸" : "🇮🇩"}
                    </div>

                    {/* Cat + Live badge */}
                    <div style={{ position: "absolute", top: "12px", right: "12px", zIndex: 2, display: "flex", gap: "6px" }}>
                      <span style={{ fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "100px", background: cs.bg, color: cs.text, border: `1px solid ${cs.border}`, backdropFilter: "blur(8px)" }}>
                        {d.cat}
                      </span>
                      <span style={{ fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "100px", background: "rgba(16,185,129,0.2)", color: "#6ee7b7", border: "1px solid rgba(16,185,129,0.35)", backdropFilter: "blur(8px)" }}>
                        LIVE ●
                      </span>
                    </div>

                    {/* Bottom fade */}
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40px", background: "linear-gradient(to top,rgba(6,4,15,0.7),transparent)" }} />
                  </div>

                  {/* Card body */}
                  <div style={{ padding: "18px 20px 20px" }}>
                    <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", color: "#8b5cf6", marginBottom: "5px", textTransform: "uppercase" }}>
                      {d.subcat}
                    </p>
                    <h3 style={{ fontSize: "17px", fontWeight: 800, color: "#f0f4ff", margin: "0 0 8px", letterSpacing: "-0.02em" }}>
                      {d.title}
                    </h3>
                    <p style={{ fontSize: "13px", color: "rgba(240,244,255,0.4)", lineHeight: "1.6", margin: "0 0 14px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      {d.desc}
                    </p>

                    {/* Tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "14px" }}>
                      {d.tags.map(t => (
                        <span key={t} style={{ fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "100px", background: "rgba(255,255,255,0.04)", color: "rgba(240,244,255,0.38)", border: "1px solid rgba(255,255,255,0.06)" }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* CTA row */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                      <span style={{ fontSize: "13px", fontWeight: 700, color: "#8b5cf6" }}>Buka Demo Live</span>
                      <div style={{ width: "32px", height: "32px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.2)", color: "#a78bfa", fontSize: "14px", transition: "all 0.2s" }}
                        className="group-hover:bg-violet-600 group-hover:border-violet-600 group-hover:text-white">
                        ↗
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}

          {/* Lihat Semua Demo — style unik, bukan card biasa */}
          <a href="https://coderaft-demos.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{ textDecoration: "none", display: "block", height: "100%" }}>
            <div
              style={{
                borderRadius: "16px", overflow: "hidden", cursor: "pointer",
                height: "100%", display: "flex", flexDirection: "column",
                position: "relative",
                background: "linear-gradient(155deg,#1e0a3c 0%,#0f0621 40%,#1a0535 100%)",
                border: "1px solid rgba(167,139,250,0.2)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.border = "1px solid rgba(167,139,250,0.5)";
                e.currentTarget.style.boxShadow = "0 24px 64px rgba(124,58,237,0.25)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.border = "1px solid rgba(167,139,250,0.2)";
                e.currentTarget.style.boxShadow = "none";
              }}>

              {/* Decorative glows */}
              <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "160px", height: "160px", borderRadius: "50%", background: "radial-gradient(circle,rgba(124,58,237,0.35),transparent 70%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: "-20px", left: "-20px", width: "120px", height: "120px", borderRadius: "50%", background: "radial-gradient(circle,rgba(190,24,93,0.2),transparent 70%)", pointerEvents: "none" }} />

              {/* Top stripe accent */}
              <div style={{ height: "3px", background: "linear-gradient(90deg,#7c3aed,#ec4899,#f97316,transparent)", flexShrink: 0 }} />

              {/* Main content */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "28px 24px 24px", position: "relative", zIndex: 1 }}>

                {/* Big text headline — no gradient clip to avoid rendering bug */}
                <div style={{ fontSize: "clamp(1.8rem,3.5vw,2.4rem)", fontWeight: 900, lineHeight: "1.15", letterSpacing: "-0.03em", marginBottom: "16px", color: "#f0f4ff" }}>
                  Masih ada<br />
                  <span style={{ color: "#a78bfa" }}>lebih banyak</span><br />
                  karya kami.
                </div>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                  {["Landing Page", "Dashboard", "🇮🇩 Indonesia", "🇺🇸 English"].map(t => (
                    <span key={t} style={{ fontSize: "11px", fontWeight: 600, padding: "4px 10px", borderRadius: "100px", background: "rgba(167,139,250,0.1)", color: "rgba(167,139,250,0.7)", border: "1px solid rgba(167,139,250,0.15)" }}>
                      {t}
                    </span>
                  ))}
                </div>

                <p style={{ fontSize: "13px", lineHeight: "1.6", color: "rgba(240,244,255,0.35)", marginBottom: "0" }}>
                  Berbagai style, industri, dan stack berbeda — semuanya bisa dibuka & dicoba langsung.
                </p>

                {/* CTA — push to bottom */}
                <div style={{ marginTop: "auto", paddingTop: "20px" }}>
                  <div style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "12px 16px", borderRadius: "12px",
                    background: "linear-gradient(135deg,rgba(124,58,237,0.25),rgba(190,24,93,0.15))",
                    border: "1px solid rgba(167,139,250,0.2)",
                  }}>
                    <span style={{ fontSize: "13px", fontWeight: 800, color: "#c4b5fd" }}>Jelajahi Katalog</span>
                    <span style={{ fontSize: "18px", color: "#a78bfa" }}>→</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
