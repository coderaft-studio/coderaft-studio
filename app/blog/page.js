"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { articles, categories } from "./data";

const VIO  = "#a78bfa";
const VIO2 = "#8b5cf6";
const PINK = "#ec4899";
const TEXT = "#f0f4ff";
const MUT  = "rgba(240,244,255,0.45)";
const BOR  = "rgba(139,92,246,0.15)";
const CARD = "rgba(255,255,255,0.03)";
const BG   = "#070711";

const catColors = {
  "Bisnis Digital": VIO,
  "Tips & Panduan": PINK,
  "E-Commerce":     "#06b6d4",
  "Performa":       "#f43f5e",
  "SEO":            VIO,
  "Case Study":     "#f59e0b",
};

export default function BlogPage() {
  const [cat,      setCat]    = useState("Semua");
  const [search,   setSearch] = useState("");
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const filtered = articles.filter(a=>
    (cat==="Semua"||a.category===cat) &&
    (search===""||a.title.toLowerCase().includes(search.toLowerCase())||a.excerpt.toLowerCase().includes(search.toLowerCase()))
  );

  const [featured, ...rest] = filtered;
  const popular = articles.filter((_,i)=>i%2===0).slice(0,4);
  const tags = ["UMKM","SEO","Landing Page","Website","Digital Marketing","E-Commerce","Harga Website","Google","WhatsApp","Konversi"];

  return (
    <div style={{ background:BG, overflowX:"hidden" }}>

      {/* ── Dark header ── */}
      <div style={{ background:"rgba(255,255,255,0.02)", borderBottom:`1px solid ${BOR}` }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div style={{ color:VIO, fontSize:"11px", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:"4px" }}>
              ✦ Coderaft Studio
            </div>
            <h1 style={{ color:TEXT, fontWeight:900, fontSize:"clamp(1.4rem,4vw,1.9rem)", letterSpacing:"-0.02em", margin:0 }}>
              Blog <span style={{ color:VIO }}>UMKM Digital</span>
            </h1>
            <p style={{ color:MUT, fontSize:"12px", marginTop:"4px" }}>
              {articles.length} artikel · Tips go digital untuk pemilik bisnis Indonesia
            </p>
          </div>
          {/* Search */}
          <div style={{ position:"relative", width: isMobile ? "100%" : "auto" }}>
            <span style={{ position:"absolute", left:"12px", top:"50%", transform:"translateY(-50%)", color:MUT, fontSize:"13px" }}>⌕</span>
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Cari artikel..."
              style={{ paddingLeft:"34px", paddingRight:"14px", paddingTop:"10px", paddingBottom:"10px", background:"rgba(255,255,255,0.05)", border:`1px solid ${BOR}`, borderRadius:"8px", color:TEXT, fontSize:"13px", outline:"none", width: isMobile ? "100%" : "220px", boxSizing:"border-box" }}
              onFocus={e=>e.target.style.borderColor="rgba(139,92,246,0.4)"}
              onBlur={e=>e.target.style.borderColor=BOR} />
          </div>
        </div>
      </div>

      {/* ── Main layout ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_272px]" style={{ gap:"24px", alignItems:"start" }}>

          {/* ── LEFT ── */}
          <div>

            {/* Mobile: category chips */}
            <div className="flex md:hidden" style={{ gap:"6px", overflowX:"auto", paddingBottom:"6px", marginBottom:"16px", scrollbarWidth:"none" }}>
              {["Semua",...categories].map(c=>(
                <button key={c} onClick={()=>setCat(c)}
                  style={{ flexShrink:0, padding:"6px 14px", borderRadius:"20px", fontSize:"11px", fontWeight:700, cursor:"pointer", border:"none",
                    background: cat===c ? "rgba(139,92,246,0.2)" : "rgba(255,255,255,0.06)",
                    color: cat===c ? VIO : MUT,
                    outline: cat===c ? `1px solid rgba(139,92,246,0.4)` : "none",
                  }}>
                  {c}
                </button>
              ))}
            </div>

            {/* Featured — Horizontal Editorial Split */}
            {featured && (
              <Link href={`/blog/${featured.slug}`} style={{ textDecoration:"none", display:"block", marginBottom:"22px" }}>
                <div className="flex flex-col md:flex-row" style={{ borderRadius:"20px", overflow:"hidden", border:"1px solid rgba(255,255,255,0.07)", cursor:"pointer", transition:"all 0.2s" }}
                  onMouseEnter={e=>{ e.currentTarget.style.borderColor="rgba(139,92,246,0.35)"; e.currentTarget.style.boxShadow="0 16px 48px rgba(139,92,246,0.18)"; }}
                  onMouseLeave={e=>{ e.currentTarget.style.borderColor="rgba(255,255,255,0.07)"; e.currentTarget.style.boxShadow="none"; }}>

                  {/* Left — Gradient panel */}
                  <div className={`bg-gradient-to-br ${featured.cover} flex-shrink-0 flex items-center justify-center w-full h-[180px] md:w-[38%] md:h-auto`}
                    style={{ position:"relative", overflow:"hidden" }}>
                    <div style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.15)" }}/>
                    <div style={{ position:"absolute", bottom:"-20px", right:"-20px", width:"140px", height:"140px", borderRadius:"50%", background:"rgba(255,255,255,0.08)" }}/>
                    <span style={{ fontSize:"72px", position:"relative", zIndex:1, filter:"drop-shadow(0 8px 24px rgba(0,0,0,0.4))" }}>
                      {featured.emoji}
                    </span>
                    {/* Category vertical tag */}
                    <div style={{ position:"absolute", bottom:"16px", left:"16px" }}>
                      <span style={{ background:"rgba(0,0,0,0.4)", backdropFilter:"blur(8px)", color:"#fff", fontSize:"9px", fontWeight:700, padding:"3px 10px", borderRadius:"20px", border:"1px solid rgba(255,255,255,0.2)" }}>
                        {featured.category}
                      </span>
                    </div>
                  </div>

                  {/* Right — Content panel */}
                  <div className="p-4 md:p-6"
                    style={{ flex:1, minWidth:0, overflow:"hidden", background:"rgba(255,255,255,0.03)", display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
                    <div>
                      {/* Badge */}
                      <div style={{ display:"inline-flex", alignItems:"center", gap:"5px", background:"rgba(139,92,246,0.15)", border:"1px solid rgba(139,92,246,0.3)", borderRadius:"20px", padding:"3px 10px", marginBottom:"12px" }}>
                        <span style={{ color:VIO, fontSize:"9px", fontWeight:700, letterSpacing:"0.1em" }}>★ ARTIKEL PILIHAN</span>
                      </div>
                      {/* Title */}
                      <h2 className="text-[1.05rem] md:text-[1.35rem]"
                        style={{ color:TEXT, fontWeight:900, letterSpacing:"-0.02em", lineHeight:1.3, marginBottom:"8px", wordBreak:"break-word" }}>
                        {featured.title}
                      </h2>
                      {/* Excerpt */}
                      <p style={{ color:MUT, fontSize:"12px", lineHeight:1.65, display:"-webkit-box", WebkitLineClamp:3, WebkitBoxOrient:"vertical", overflow:"hidden", wordBreak:"break-word" }}>
                        {featured.excerpt}
                      </p>
                    </div>
                    {/* Meta + CTA */}
                    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"8px", paddingTop:"12px", borderTop:"1px solid rgba(255,255,255,0.06)", marginTop:"12px" }}>
                      <span style={{ color:"rgba(240,244,255,0.3)", fontSize:"11px" }}>{featured.date} · {featured.readTime}</span>
                      <span style={{ background:`linear-gradient(135deg,#7c3aed,#ec4899)`, color:"#fff", fontSize:"11px", fontWeight:700, padding:"6px 14px", borderRadius:"20px", flexShrink:0 }}>
                        <span className="md:hidden">Baca →</span>
                        <span className="hidden md:inline">Baca Selengkapnya →</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Section label */}
            {rest.length>0 && (
              <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"14px" }}>
                <div style={{ height:"2px", width:"16px", background:VIO, borderRadius:"2px" }}/>
                <span style={{ color:MUT, fontWeight:700, fontSize:"11px", textTransform:"uppercase", letterSpacing:"0.1em" }}>
                  {cat==="Semua"?"Artikel Lainnya":cat}
                </span>
                <div style={{ flex:1, height:"1px", background:BOR }}/>
              </div>
            )}

            {/* Grid — Horizontal Split Cards (Option B) */}
            <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
              {rest.map(a=>(
                <Link key={a.slug} href={`/blog/${a.slug}`} style={{ textDecoration:"none", display:"block" }}>
                  <div style={{ display:"flex", borderRadius:"14px", overflow:"hidden", border:"1px solid rgba(255,255,255,0.07)", background:"rgba(255,255,255,0.025)", transition:"all 0.2s", minHeight:"130px" }}
                    onMouseEnter={e=>{ e.currentTarget.style.background="rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor=`${a.catColor}45`; e.currentTarget.style.transform="translateX(4px)"; }}
                    onMouseLeave={e=>{ e.currentTarget.style.background="rgba(255,255,255,0.025)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.07)"; e.currentTarget.style.transform="translateX(0)"; }}>

                    {/* Left — colored emoji box */}
                    <div className={`bg-gradient-to-br ${a.cover} flex-shrink-0 flex items-center justify-center`}
                      style={{ width:"120px", position:"relative", overflow:"hidden" }}>
                      <div style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.2)" }}/>
                      <span style={{ fontSize:"36px", position:"relative", zIndex:1, filter:"drop-shadow(0 2px 8px rgba(0,0,0,0.4))" }}>{a.emoji}</span>
                    </div>

                    {/* Right — content */}
                    <div style={{ flex:1, minWidth:0, padding:"12px 16px", display:"flex", flexDirection:"column", justifyContent:"space-between", overflow:"hidden" }}>
                      <div>
                        {/* Category */}
                        <span style={{ color:a.catColor, fontSize:"9px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.1em" }}>
                          {a.category}
                        </span>
                        {/* Title */}
                        <h3 style={{ color:TEXT, fontWeight:700, fontSize:"13px", lineHeight:1.35, margin:"4px 0 5px", display:"-webkit-box", WebkitLineClamp:2, WebkitBoxOrient:"vertical", overflow:"hidden", wordBreak:"break-word" }}>
                          {a.title}
                        </h3>
                        {/* Excerpt */}
                        <p style={{ color:MUT, fontSize:"11px", lineHeight:1.5, margin:0, display:"-webkit-box", WebkitLineClamp:1, WebkitBoxOrient:"vertical", overflow:"hidden", wordBreak:"break-word" }}>
                          {a.excerpt}
                        </p>
                      </div>
                      {/* Footer */}
                      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                        <span style={{ color:"rgba(240,244,255,0.25)", fontSize:"10px" }}>{a.date} · {a.readTime}</span>
                        <span style={{ color:a.catColor, fontWeight:700, fontSize:"11px" }}>Baca →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filtered.length===0 && (
              <div style={{ textAlign:"center", padding:"48px 0", color:MUT }}>
                <div style={{ fontSize:"40px", marginBottom:"10px" }}>🔍</div>
                <div style={{ fontWeight:600, fontSize:"14px" }}>Tidak ada artikel ditemukan</div>
                <button onClick={()=>{ setCat("Semua"); setSearch(""); }}
                  style={{ marginTop:"10px", color:VIO, background:"none", border:`1px solid ${BOR}`, borderRadius:"20px", padding:"6px 16px", fontSize:"12px", cursor:"pointer" }}>
                  Reset filter
                </button>
              </div>
            )}
          </div>

          {/* ── RIGHT: Sidebar ── */}
          <div className="hidden md:flex" style={{ position:"sticky", top:"80px", flexDirection:"column", gap:"14px" }}>

            {/* Categories */}
            <div style={{ background:CARD, border:`1px solid ${BOR}`, borderRadius:"14px", overflow:"hidden" }}>
              <div style={{ padding:"13px 15px", borderBottom:`1px solid ${BOR}`, display:"flex", alignItems:"center", gap:"7px" }}>
                <div style={{ width:"3px", height:"14px", background:VIO, borderRadius:"2px" }}/>
                <span style={{ color:TEXT, fontWeight:700, fontSize:"11px", textTransform:"uppercase", letterSpacing:"0.1em" }}>Kategori</span>
              </div>
              <div style={{ padding:"6px" }}>
                {["Semua",...categories].map(c=>{
                  const count = c==="Semua" ? articles.length : articles.filter(a=>a.category===c).length;
                  const color = catColors[c]||VIO;
                  return (
                    <button key={c} onClick={()=>setCat(c)}
                      style={{ width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"8px 9px", borderRadius:"8px", border:"none", background:cat===c?"rgba(139,92,246,0.12)":"transparent", cursor:"pointer", transition:"background 0.15s" }}
                      onMouseEnter={e=>{ if(cat!==c) e.currentTarget.style.background="rgba(255,255,255,0.04)"; }}
                      onMouseLeave={e=>{ if(cat!==c) e.currentTarget.style.background="transparent"; }}>
                      <div style={{ display:"flex", alignItems:"center", gap:"7px" }}>
                        {c!=="Semua" && <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:color }}/>}
                        <span style={{ color:cat===c?VIO:MUT, fontWeight:cat===c?700:500, fontSize:"12px" }}>{c}</span>
                      </div>
                      <span style={{ background:cat===c?"rgba(139,92,246,0.25)":"rgba(255,255,255,0.06)", color:cat===c?VIO:MUT, fontSize:"10px", fontWeight:700, padding:"1px 7px", borderRadius:"20px" }}>{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Popular */}
            <div style={{ background:CARD, border:`1px solid ${BOR}`, borderRadius:"14px", overflow:"hidden" }}>
              <div style={{ padding:"13px 15px", borderBottom:`1px solid ${BOR}`, display:"flex", alignItems:"center", gap:"7px" }}>
                <div style={{ width:"3px", height:"14px", background:PINK, borderRadius:"2px" }}/>
                <span style={{ color:TEXT, fontWeight:700, fontSize:"11px", textTransform:"uppercase", letterSpacing:"0.1em" }}>Artikel Populer</span>
              </div>
              <div style={{ padding:"6px" }}>
                {popular.map((a,i)=>(
                  <Link key={a.slug} href={`/blog/${a.slug}`} style={{ textDecoration:"none", display:"flex", gap:"9px", padding:"8px 7px", borderRadius:"8px", transition:"background 0.15s" }}
                    onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,0.04)"}
                    onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                    <div style={{ width:"22px", height:"22px", borderRadius:"6px", background:"rgba(236,72,153,0.15)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"10px", fontWeight:900, color:PINK, flexShrink:0 }}>{i+1}</div>
                    <div>
                      <div style={{ color:TEXT, fontWeight:600, fontSize:"11px", lineHeight:1.4, display:"-webkit-box", WebkitLineClamp:2, WebkitBoxOrient:"vertical", overflow:"hidden" }}>{a.title}</div>
                      <div style={{ color:MUT, fontSize:"9px", marginTop:"2px" }}>{a.readTime}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div style={{ background:CARD, border:`1px solid ${BOR}`, borderRadius:"14px", padding:"14px" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"7px", marginBottom:"10px" }}>
                <div style={{ width:"3px", height:"14px", background:VIO2, borderRadius:"2px" }}/>
                <span style={{ color:TEXT, fontWeight:700, fontSize:"11px", textTransform:"uppercase", letterSpacing:"0.1em" }}>Topik</span>
              </div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"5px" }}>
                {["UMKM","SEO","Landing Page","Website","Digital Marketing","E-Commerce","Harga Website","Google","WhatsApp","Konversi"].map(t=>(
                  <span key={t} style={{ background:"rgba(255,255,255,0.06)", color:MUT, fontSize:"10px", fontWeight:600, padding:"4px 10px", borderRadius:"20px", cursor:"pointer", border:`1px solid ${BOR}`, transition:"all 0.15s" }}
                    onMouseEnter={e=>{ e.currentTarget.style.background="rgba(139,92,246,0.15)"; e.currentTarget.style.color=VIO; e.currentTarget.style.borderColor="rgba(139,92,246,0.3)"; }}
                    onMouseLeave={e=>{ e.currentTarget.style.background="rgba(255,255,255,0.06)"; e.currentTarget.style.color=MUT; e.currentTarget.style.borderColor=BOR; }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{ background:"linear-gradient(135deg,rgba(124,58,237,0.2),rgba(236,72,153,0.1))", border:`1px solid rgba(139,92,246,0.25)`, borderRadius:"14px", padding:"18px", textAlign:"center" }}>
              <div style={{ fontSize:"26px", marginBottom:"8px" }}>🚀</div>
              <div style={{ color:TEXT, fontWeight:700, fontSize:"13px", marginBottom:"5px" }}>Butuh Website Profesional?</div>
              <div style={{ color:MUT, fontSize:"11px", lineHeight:1.5, marginBottom:"12px" }}>Harga transparan, selesai dalam 7 hari.</div>
              <Link href="/hitung" style={{ textDecoration:"none", display:"block", background:"linear-gradient(135deg,#7c3aed,#ec4899)", color:"#fff", fontWeight:700, fontSize:"12px", padding:"9px", borderRadius:"20px", boxShadow:"0 4px 16px rgba(124,58,237,0.3)" }}>
                Hitung Harga →
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
