"use client";

const demos = [
  { title:"Kopiday Café",      subcat:"Landing Page — Coffee Shop & Kafe",     desc:"Website kafe specialty coffee dengan menu, ambiance gallery, lokasi, dan pre-order online yang hangat dan cozy.",          url:"https://demos.coderaft.web.id/demo/coffee",  color:"from-amber-700 to-yellow-900",   emoji:"☕",  cat:"Landing Page", lang:"id", pageType:"satu",  tags:["Coffee","Kafe","Kuliner"] },
  { title:"Amber & Co.",       subcat:"Landing Page — Restaurant & Brunch",     desc:"Website restoran premium bahasa Inggris dengan halaman menu, galeri, reservasi, tentang, dan kontak.",                     url:"https://amber.coderaft.web.id",              color:"from-yellow-700 to-amber-800",   emoji:"🍳",  cat:"Landing Page", lang:"en", pageType:"multi", tags:["Restaurant","English","Multi-Page"] },
  { title:"Batik Nala",        subcat:"Landing Page — Fashion & UMKM",          desc:"Toko batik premium dengan koleksi 6 produk, carousel foto proses membatik, cara pemesanan, dan CTA WhatsApp.",             url:"https://batik.coderaft.web.id",              color:"from-indigo-600 to-violet-600",  emoji:"🪡",  cat:"Landing Page", lang:"id", pageType:"satu",  tags:["Fashion","UMKM","Batik"] },
  { title:"Nusantara Kitchen", subcat:"Landing Page — Restoran & Kuliner",      desc:"Website restoran Indonesia dengan scroll animations, menu 6 hidangan, galeri masonry, testimoni, dan reservasi WhatsApp.", url:"https://resto.coderaft.web.id",              color:"from-amber-600 to-orange-600",   emoji:"🍽",  cat:"Landing Page", lang:"id", pageType:"satu",  tags:["Restoran","WhatsApp","Animasi"] },
  { title:"CoderaftEdu",       subcat:"Dashboard — School & LMS",               desc:"Dashboard manajemen sekolah: data siswa CRUD, manajemen kelas, input nilai, dan absensi real-time.",                        url:"https://demos.coderaft.web.id/demo/eduadmin", color:"from-violet-500 to-purple-700",  emoji:"🎓",  cat:"Dashboard",    lang:"id", pageType:"multi", tags:["Sekolah","Siswa","Akademik"] },
  { title:"CoderaftHR",        subcat:"Dashboard — HR Management System",       desc:"Sistem HR dengan dashboard kehadiran, CRUD karyawan, absensi real-time, dan chart departemen.",                              url:"https://hr.coderaft.web.id",                 color:"from-indigo-600 to-blue-700",    emoji:"💼",  cat:"Dashboard",    lang:"id", pageType:"multi", tags:["HR","Karyawan","Absensi"] },
];

const catStyle = {
  "Landing Page": { bg:"rgba(139,92,246,0.2)", text:"#c4b5fd", border:"rgba(139,92,246,0.35)" },
  "Dashboard":    { bg:"rgba(56,189,248,0.2)", text:"#7dd3fc", border:"rgba(56,189,248,0.35)" },
};

export default function Portofolio() {
  const filtered = demos;

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

        {/* CTA — Neon Glow */}
        <a href="https://demos.coderaft.web.id" target="_blank" rel="noopener noreferrer" style={{ textDecoration:"none", display:"block", marginTop:"16px" }}>
          <div style={{ borderRadius:"16px", overflow:"hidden", position:"relative", background:"rgba(12,4,28,0.95)", border:"1.5px solid #7c3aed", boxShadow:"0 0 40px rgba(124,58,237,0.25), inset 0 0 40px rgba(124,58,237,0.05)", transition:"all .3s" }}
            onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 0 64px rgba(124,58,237,0.5), inset 0 0 40px rgba(124,58,237,0.1)";}}
            onMouseLeave={e=>{e.currentTarget.style.boxShadow="0 0 40px rgba(124,58,237,0.25), inset 0 0 40px rgba(124,58,237,0.05)";}}>
            {/* Glow orbs */}
            <div style={{ position:"absolute", top:"-30px", left:"15%", width:"220px", height:"220px", borderRadius:"50%", background:"radial-gradient(circle,rgba(124,58,237,0.3),transparent 70%)", pointerEvents:"none" }}/>
            <div style={{ position:"absolute", bottom:"-20px", right:"10%", width:"180px", height:"180px", borderRadius:"50%", background:"radial-gradient(circle,rgba(236,72,153,0.2),transparent 70%)", pointerEvents:"none" }}/>
            <div style={{ position:"relative", zIndex:1, padding:"36px 32px", textAlign:"center" }}>

              {/* Headline */}
              <div style={{ fontSize:'clamp(24px,4vw,40px)', fontWeight:900, lineHeight:1.15, marginBottom:'10px', letterSpacing:'-0.03em', color:'#f0f4ff' }}>
                Butuh inspirasi lebih?
              </div>
              <div style={{ fontSize:'14px', fontWeight:400, color:'rgba(167,139,250,0.6)', marginBottom:'24px', lineHeight:1.6 }}>
                Katalog kami punya <span style={{ color:'#c4b5fd', fontWeight:700 }}>28+ demo</span>{" "}siap lihat — landing page, dashboard, ID &amp; EN, berbagai industri.
              </div>
              {/* CTA */}
              <div style={{ display:'inline-flex', alignItems:'center', gap:'10px', padding:'13px 32px', borderRadius:'50px', border:'1.5px solid #a78bfa', color:'#a78bfa', fontSize:'13px', fontWeight:800, letterSpacing:'0.06em', background:'rgba(124,58,237,0.1)', transition:'all .25s' }}
                onMouseEnter={e=>{e.currentTarget.style.background='#7c3aed';e.currentTarget.style.color='#fff';e.currentTarget.style.borderColor='#7c3aed';e.currentTarget.style.boxShadow='0 4px 20px rgba(124,58,237,0.5)';}}
                onMouseLeave={e=>{e.currentTarget.style.background='rgba(124,58,237,0.1)';e.currentTarget.style.color='#a78bfa';e.currentTarget.style.borderColor='#a78bfa';e.currentTarget.style.boxShadow='none';}}>
                🗂️ &nbsp;Lihat Semua Demo
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
