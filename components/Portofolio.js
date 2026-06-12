"use client";
import { useState } from "react";

const demos = [
  { title:"Nusantara Kitchen", subcat:"Landing Page — Restoran & Kuliner",    desc:"Website restoran modern dengan hero full-screen, menu produk, galeri, testimoni, dan reservasi via WhatsApp.",            url:"https://resto.coderaft.web.id",    color:"from-amber-600 to-orange-600",   emoji:"🍽",  cat:"Landing Page", lang:"id", pageType:"satu",  tags:["Restoran","WhatsApp","Galeri"] },
  { title:"Axiom Studio",      subcat:"Landing Page — Digital Agency",         desc:"Website agency digital multi-halaman dengan About, Services, Portfolio 12 project, Blog, dan Contact.",                    url:"https://axiom.coderaft.web.id",    color:"from-violet-700 to-indigo-800",  emoji:"🎯",  cat:"Landing Page", lang:"en", pageType:"multi", tags:["Agency","English","Multi-Page"] },
  { title:"Kreasi Digital",    subcat:"Landing Page — Agency & Konsultan",     desc:"Website digital agency profesional dengan layanan, portofolio, pricing tiers, dan contact form.",                           url:"https://kreasi.coderaft.web.id",   color:"from-cyan-600 to-blue-600",      emoji:"💡",  cat:"Landing Page", lang:"id", pageType:"satu",  tags:["Agency","Pricing","B2B"] },
  { title:"CoderaftBoard",     subcat:"Dashboard — Business Analytics",        desc:"Dashboard UMKM dengan CRUD produk, manajemen pesanan, update status real-time, dan analytics.",                             url:"https://board.coderaft.web.id",    color:"from-violet-600 to-purple-600",  emoji:"📊",  cat:"Dashboard",    lang:"id", pageType:"multi", tags:["Dashboard","CRUD","Analytics"] },
  { title:"CoderaftHR",        subcat:"Dashboard — HR Management System",      desc:"Sistem HR dengan dashboard kehadiran, CRUD karyawan, absensi real-time, dan chart departemen.",                              url:"https://hr.coderaft.web.id",       color:"from-indigo-600 to-blue-700",    emoji:"💼",  cat:"Dashboard",    lang:"id", pageType:"multi", tags:["HR","Karyawan","Absensi"] },
  { title:"Amber & Co.",       subcat:"Landing Page — Coffee & Brunch",        desc:"Website restoran premium bahasa Inggris dengan halaman menu, galeri, reservasi, tentang, dan kontak.",                     url:"https://amber.coderaft.web.id",    color:"from-yellow-700 to-amber-800",   emoji:"🍳",  cat:"Landing Page", lang:"en", pageType:"multi", tags:["Restaurant","English","Multi-Page"] },
  { title:"Voyaje",            subcat:"Landing Page — Travel App",             desc:"Landing page aplikasi travel berbahasa Inggris dengan 7 halaman: Fitur, Galeri, Testimoni, Harga, Kontak.",                url:"https://voyaje.coderaft.web.id",   color:"from-teal-500 to-cyan-600",      emoji:"✈️", cat:"Landing Page", lang:"en", pageType:"multi", tags:["Travel","English","App"] },
  { title:"Batik Nala",        subcat:"Landing Page — Fashion & UMKM",         desc:"Toko batik premium dengan koleksi produk, cara pemesanan, testimoni, dan CTA WhatsApp yang optimal.",                     url:"https://batik.coderaft.web.id",    color:"from-indigo-600 to-violet-600",  emoji:"🪡",  cat:"Landing Page", lang:"id", pageType:"satu",  tags:["Fashion","UMKM","E-commerce"] },
];

const FILTERS = [
  { key:"semua",     label:"Semua" },
  { key:"landing",   label:"Landing Page" },
  { key:"dashboard", label:"Dashboard" },
  { key:"satu",      label:"Satu Halaman" },
  { key:"multi",     label:"Multi Halaman" },
];

const catStyle = {
  "Landing Page": { bg:"rgba(139,92,246,0.2)", text:"#c4b5fd", border:"rgba(139,92,246,0.35)" },
  "Dashboard":    { bg:"rgba(56,189,248,0.2)", text:"#7dd3fc", border:"rgba(56,189,248,0.35)" },
};

function FilterBtn({ f, active, setActive }) {
  const isActive = active === f.key;
  return (
    <button onClick={() => setActive(f.key)}
      style={{
        display:"flex", alignItems:"center", gap:"6px",
        padding:"8px 16px", borderRadius:"11px",
        fontSize:"12px", fontWeight:700, cursor:"pointer",
        fontFamily:"inherit", transition:"all .25s",
        background: isActive
          ? "linear-gradient(135deg,#7c3aed,#a78bfa)"
          : "transparent",
        color: isActive ? "#fff" : "rgba(240,244,255,0.45)",
        border: "none",
        boxShadow: isActive
          ? "0 4px 20px rgba(124,58,237,0.4), inset 0 1px 0 rgba(255,255,255,0.15)"
          : "none",
        transform: isActive ? "scale(1.02)" : "scale(1)",
        whiteSpace:"nowrap",
      }}
      onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = "rgba(240,244,255,0.85)"; e.currentTarget.style.background = isActive ? "linear-gradient(135deg,#7c3aed,#a78bfa)" : "rgba(255,255,255,0.06)"; }}
      onMouseLeave={e => { if (!isActive) { e.currentTarget.style.color = "rgba(240,244,255,0.45)"; e.currentTarget.style.background = "transparent"; } }}>
      <span style={{ fontSize:"13px", opacity: isActive ? 1 : 0.6 }}>{f.icon}</span>
      {f.label}
      {isActive && (
        <span style={{ width:"5px", height:"5px", borderRadius:"50%", background:"rgba(255,255,255,0.7)", flexShrink:0, marginLeft:"2px" }}/>
      )}
    </button>
  );
}

export default function Portofolio() {
  const [active, setActive] = useState("semua");

  const filtered = demos.filter(d => {
    if (active === "semua")     return true;
    if (active === "landing")   return d.cat === "Landing Page";
    if (active === "dashboard") return d.cat === "Dashboard";
    if (active === "satu")      return d.pageType === "satu";
    if (active === "multi")     return d.pageType === "multi";
    return true;
  });

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
        </div>

        {/* Filter bar — premium grouped design */}
        <div style={{ marginBottom:"36px" }}>
          {/* Main container */}
          <div style={{
            display:"inline-flex", flexWrap:"wrap", gap:"4px",
            padding:"5px", borderRadius:"16px",
            background:"rgba(255,255,255,0.03)",
            border:"1px solid rgba(167,139,250,0.12)",
            backdropFilter:"blur(12px)",
            boxShadow:"0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}>
            {/* Group 1: Tipe */}
            {[
              { key:"semua",     label:"Semua",        icon:"✦" },
              { key:"landing",   label:"Landing Page",  icon:"🌐" },
              { key:"dashboard", label:"Dashboard",     icon:"📊" },
            ].map(f => (
              <FilterBtn key={f.key} f={f} active={active} setActive={setActive}/>
            ))}

            {/* Divider */}
            <div style={{ width:"1px", background:"rgba(167,139,250,0.2)", margin:"6px 4px", flexShrink:0 }}/>

            {/* Group 2: Struktur halaman */}
            {[
              { key:"satu",  label:"Satu Halaman",  icon:"□" },
              { key:"multi", label:"Multi Halaman", icon:"⊞" },
            ].map(f => (
              <FilterBtn key={f.key} f={f} active={active} setActive={setActive}/>
            ))}
          </div>

        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {filtered.map((d) => {
            const cs = catStyle[d.cat] || catStyle["Landing Page"];
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

                    {/* Badges: cat + page type */}
                    <div style={{ position:"absolute", top:"12px", right:"12px", zIndex:2, display:"flex", flexDirection:"column", gap:"4px", alignItems:"flex-end" }}>
                      <span style={{ fontSize:"10px", fontWeight:700, padding:"3px 9px", borderRadius:"100px", background:cs.bg, color:cs.text, border:`1px solid ${cs.border}`, backdropFilter:"blur(8px)", whiteSpace:"nowrap" }}>
                        {d.cat}
                      </span>
                      <span style={{ fontSize:"10px", fontWeight:700, padding:"3px 9px", borderRadius:"100px", background: d.pageType==="multi" ? "rgba(99,102,241,0.2)" : "rgba(16,185,129,0.15)", color: d.pageType==="multi" ? "#a5b4fc" : "#6ee7b7", border: d.pageType==="multi" ? "1px solid rgba(99,102,241,0.3)" : "1px solid rgba(16,185,129,0.25)", backdropFilter:"blur(8px)", whiteSpace:"nowrap" }}>
                        {d.pageType === "multi" ? "Multi Halaman" : "Satu Halaman"}
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

        </div>

        {/* CTA bar — selalu muncul, di luar grid */}
        <a href="https://demos.coderaft.web.id" target="_blank" rel="noopener noreferrer"
          style={{ textDecoration: "none", display: "block", marginTop: "16px" }}>
          <div
            style={{
              borderRadius: "16px", overflow: "hidden", position: "relative",
              background: "linear-gradient(135deg,#1e0a3c 0%,#0f0621 60%,#1a0535 100%)",
              border: "1px solid rgba(167,139,250,0.2)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.border = "1px solid rgba(167,139,250,0.5)";
              e.currentTarget.style.boxShadow = "0 16px 48px rgba(124,58,237,0.2)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.border = "1px solid rgba(167,139,250,0.2)";
              e.currentTarget.style.boxShadow = "none";
            }}>

            {/* Decorative glows */}
            <div style={{ position:"absolute", top:"-40px", right:"60px", width:"200px", height:"200px", borderRadius:"50%", background:"radial-gradient(circle,rgba(124,58,237,0.25),transparent 70%)", pointerEvents:"none" }}/>
            <div style={{ position:"absolute", bottom:"-30px", left:"30%", width:"160px", height:"160px", borderRadius:"50%", background:"radial-gradient(circle,rgba(190,24,93,0.15),transparent 70%)", pointerEvents:"none" }}/>

            {/* Top stripe */}
            <div style={{ height:"3px", background:"linear-gradient(90deg,#7c3aed,#ec4899,#f97316,transparent)" }}/>

            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"16px", padding:"24px 28px", position:"relative", zIndex:1 }}>
              {/* Left */}
              <div style={{ display:"flex", alignItems:"center", gap:"20px", flexWrap:"wrap" }}>
                <div>
                  <div style={{ fontSize:"18px", fontWeight:900, color:"#f0f4ff", letterSpacing:"-0.02em" }}>
                    Masih ada lebih banyak karya kami.{" "}
                    <span style={{ color:"#a78bfa" }}>20+ demo siap lihat.</span>
                  </div>
                  <div style={{ fontSize:"13px", color:"rgba(240,244,255,0.35)", marginTop:"4px" }}>
                    Landing Page, Dashboard, Bahasa Indonesia & English — semuanya bisa dicoba langsung.
                  </div>
                </div>
                <div style={{ display:"flex", gap:"6px", flexWrap:"wrap" }}>
                  {["Landing Page","Dashboard","🇮🇩 ID","🇺🇸 EN"].map(t=>(
                    <span key={t} style={{ fontSize:"11px", fontWeight:600, padding:"3px 10px", borderRadius:"100px", background:"rgba(167,139,250,0.1)", color:"rgba(167,139,250,0.65)", border:"1px solid rgba(167,139,250,0.15)", whiteSpace:"nowrap" }}>{t}</span>
                  ))}
                </div>
              </div>
              {/* Right CTA */}
              <div style={{
                display:"flex", alignItems:"center", gap:"10px",
                padding:"12px 24px", borderRadius:"12px", flexShrink:0,
                background:"linear-gradient(135deg,rgba(124,58,237,0.3),rgba(190,24,93,0.2))",
                border:"1px solid rgba(167,139,250,0.25)",
              }}>
                <span style={{ fontSize:"14px", fontWeight:800, color:"#c4b5fd", whiteSpace:"nowrap" }}>Jelajahi Katalog Demo</span>
                <span style={{ fontSize:"20px", color:"#a78bfa" }}>→</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
