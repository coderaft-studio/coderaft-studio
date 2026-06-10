"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const VIO  = "#a78bfa";
const VIO2 = "#7c3aed";
const PINK = "#ec4899";
const TEXT = "#f0f4ff";
const MUT  = "rgba(240,244,255,0.45)";
const BOR  = "rgba(139,92,246,0.15)";
const DIM  = "rgba(240,244,255,0.7)";

export default function ArticleContent({ article, related }) {
  const [progress,  setProgress]  = useState(0);
  const [showTop,   setShowTop]   = useState(false);
  const [activeToc, setActiveToc] = useState(0);

  const toc = article.content.filter(b=>b.type==="h2").map(b=>b.text);

  useEffect(()=>{
    const onScroll = () => {
      const el    = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      const pct   = total > 0 ? Math.round((el.scrollTop/total)*100) : 0;
      setProgress(pct);
      setShowTop(el.scrollTop > 400);

      // Update active TOC
      const headings = document.querySelectorAll("h2[data-toc]");
      let active = 0;
      headings.forEach((h,i)=>{
        if (h.getBoundingClientRect().top < 120) active = i;
      });
      setActiveToc(active);
    };
    window.addEventListener("scroll", onScroll, { passive:true });
    return ()=>window.removeEventListener("scroll", onScroll);
  },[]);

  const scrollToTop = () => window.scrollTo({ top:0, behavior:"smooth" });
  const scrollToToc = (idx) => {
    const els = document.querySelectorAll("h2[data-toc]");
    if (els[idx]) els[idx].scrollIntoView({ behavior:"smooth", block:"start" });
  };

  let h2Counter = 0;

  return (
    <>
      {/* ── Reading progress bar ── */}
      <div style={{ position:"fixed", top:0, left:0, right:0, height:"3px", background:"rgba(139,92,246,0.1)", zIndex:100 }}>
        <div style={{ height:"100%", width:`${progress}%`, background:`linear-gradient(to right,${VIO2},${PINK})`, transition:"width 0.1s linear", boxShadow:`0 0 8px rgba(139,92,246,0.6)` }}/>
      </div>

      {/* ── Hero header ── */}
      <div className={`bg-gradient-to-br ${article.cover}`} style={{ position:"relative", overflow:"hidden", marginBottom:0 }}>
        <div style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.45)" }}/>
        {/* Decorative circles */}
        <div style={{ position:"absolute", top:"-40px", right:"-40px", width:"200px", height:"200px", borderRadius:"50%", background:"rgba(255,255,255,0.06)" }}/>
        <div style={{ position:"absolute", bottom:"-30px", left:"-30px", width:"150px", height:"150px", borderRadius:"50%", background:"rgba(255,255,255,0.04)" }}/>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 relative" style={{ zIndex:1 }}>
          {/* Breadcrumb */}
          <div style={{ display:"flex", alignItems:"center", gap:"6px", fontSize:"12px", marginBottom:"20px" }}>
            <Link href="/blog" style={{ color:"rgba(255,255,255,0.65)", textDecoration:"none", fontWeight:600 }}>Blog</Link>
            <span style={{ color:"rgba(255,255,255,0.35)" }}>›</span>
            <span style={{ color:"rgba(255,255,255,0.5)", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", maxWidth:"200px" }}>{article.category}</span>
          </div>
          {/* Category + read time */}
          <div style={{ display:"flex", gap:"8px", marginBottom:"16px", flexWrap:"wrap" }}>
            <span style={{ background:article.catColor, color:"#fff", fontSize:"10px", fontWeight:700, padding:"4px 12px", borderRadius:"20px" }}>{article.category}</span>
            <span style={{ background:"rgba(255,255,255,0.15)", backdropFilter:"blur(8px)", color:"#fff", fontSize:"10px", fontWeight:600, padding:"4px 12px", borderRadius:"20px" }}>⏱ {article.readTime} baca</span>
          </div>
          {/* Title */}
          <h1 style={{ color:"#fff", fontWeight:900, fontSize:"clamp(1.5rem,4vw,2.4rem)", lineHeight:1.2, letterSpacing:"-0.03em", marginBottom:"16px", maxWidth:"700px" }}>
            {article.title}
          </h1>
          {/* Excerpt */}
          <p style={{ color:"rgba(255,255,255,0.75)", fontSize:"15px", lineHeight:1.65, maxWidth:"600px", marginBottom:"20px" }}>
            {article.excerpt}
          </p>
          {/* Meta row */}
          <div style={{ display:"flex", alignItems:"center", gap:"16px", flexWrap:"wrap" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
              <div style={{ width:"32px", height:"32px", borderRadius:"50%", background:`linear-gradient(135deg,${VIO2},${PINK})`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"12px", fontWeight:700, color:"#fff" }}>C</div>
              <div>
                <div style={{ color:"#fff", fontWeight:600, fontSize:"12px" }}>Tim Coderaft Studio</div>
                <div style={{ color:"rgba(255,255,255,0.55)", fontSize:"10px" }}>Web Developer & Konsultan Digital</div>
              </div>
            </div>
            <span style={{ color:"rgba(255,255,255,0.4)", fontSize:"12px" }}>{article.date}</span>
          </div>
        </div>
      </div>

      {/* ── Main content layout ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div style={{ display:"grid", gridTemplateColumns:"1fr 260px", gap:"32px", alignItems:"start" }}>

          {/* ── LEFT: Article body ── */}
          <div>
            {/* Article text */}
            <div style={{ fontSize:"15px", lineHeight:1.85, color:DIM }}>
              {article.content.map((block,i)=>{
                if (block.type==="h2") {
                  const idx = h2Counter++;
                  return (
                    <h2 key={i} data-toc="true"
                      style={{ color:TEXT, fontWeight:800, fontSize:"1.25rem", marginTop:"40px", marginBottom:"14px", letterSpacing:"-0.02em", display:"flex", alignItems:"center", gap:"10px", scrollMarginTop:"80px" }}>
                      <span style={{ color:VIO, fontWeight:900, fontSize:"13px", background:"rgba(139,92,246,0.12)", border:`1px solid rgba(139,92,246,0.25)`, padding:"3px 9px", borderRadius:"6px", flexShrink:0 }}>{String(idx+1).padStart(2,"0")}</span>
                      {block.text}
                    </h2>
                  );
                }
                if (block.type==="p") {
                  // Detect if paragraph has stats (numbers with % or jt)
                  const hasStat = /\d+[%x]|\d+jt|\d+rb|Rp [\d.]+/.test(block.text);
                  if (hasStat && i <= 3) {
                    // First stat paragraph gets highlighted treatment
                    return (
                      <div key={i} style={{ background:"rgba(139,92,246,0.07)", border:"1px solid rgba(139,92,246,0.15)", borderLeft:`3px solid ${VIO}`, borderRadius:"0 10px 10px 0", padding:"14px 18px", marginBottom:"16px" }}>
                        <p style={{ color:DIM, fontSize:"14px", lineHeight:1.8, margin:0 }}>{block.text}</p>
                      </div>
                    );
                  }
                  return (
                    <p key={i} style={{ color:DIM, fontSize:"15px", lineHeight:1.85, marginBottom:"18px" }}>
                      {block.text}
                    </p>
                  );
                }
                if (block.type==="cta") return (
                  <div key={i} style={{ background:`linear-gradient(135deg,rgba(124,58,237,0.2),rgba(236,72,153,0.15))`, border:`1px solid rgba(139,92,246,0.3)`, borderRadius:"16px", padding:"24px 28px", marginTop:"40px", textAlign:"center" }}>
                    <div style={{ fontSize:"28px", marginBottom:"10px" }}>🚀</div>
                    <p style={{ color:TEXT, fontWeight:700, fontSize:"15px", marginBottom:"14px", lineHeight:1.5 }}>{block.text}</p>
                    <Link href="/hitung" style={{ textDecoration:"none", display:"inline-block", background:`linear-gradient(135deg,${VIO2},${PINK})`, color:"#fff", fontWeight:700, fontSize:"13px", padding:"12px 28px", borderRadius:"25px", boxShadow:`0 8px 24px rgba(124,58,237,0.35)` }}>
                      Hitung Harga Sekarang →
                    </Link>
                  </div>
                );
                return null;
              })}
            </div>

            {/* Divider */}
            <div style={{ height:"1px", background:BOR, margin:"40px 0" }}/>

            {/* Author card */}
            <div style={{ display:"flex", alignItems:"center", gap:"16px", padding:"20px 22px", background:"rgba(255,255,255,0.03)", border:`1px solid ${BOR}`, borderRadius:"14px" }}>
              <div style={{ width:"52px", height:"52px", borderRadius:"50%", background:`linear-gradient(135deg,${VIO2},${PINK})`, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontWeight:700, fontSize:"18px", flexShrink:0, boxShadow:`0 0 16px rgba(124,58,237,0.3)` }}>C</div>
              <div style={{ flex:1 }}>
                <div style={{ color:TEXT, fontWeight:700, fontSize:"14px" }}>Tim Coderaft Studio</div>
                <div style={{ color:MUT, fontSize:"12px", marginTop:"3px", lineHeight:1.5 }}>Web developer & konsultan digital yang membantu UMKM Indonesia go digital dengan website profesional dan strategi yang tepat.</div>
              </div>
            </div>

            {/* Share */}
            <div style={{ display:"flex", alignItems:"center", gap:"10px", marginTop:"24px", flexWrap:"wrap" }}>
              <span style={{ color:MUT, fontSize:"12px", fontWeight:600 }}>Bagikan artikel:</span>
              {[
                { label:"Twitter/X", icon:"𝕏", url:`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=https://coderaft.web.id/blog/${article.slug}` },
                { label:"WhatsApp",  icon:"💬", url:`https://wa.me/?text=${encodeURIComponent(article.title+" https://coderaft.web.id/blog/"+article.slug)}` },
                { label:"LinkedIn",  icon:"in", url:`https://www.linkedin.com/sharing/share-offsite/?url=https://coderaft.web.id/blog/${article.slug}` },
              ].map(s=>(
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                  style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:"5px", background:"rgba(255,255,255,0.05)", border:`1px solid ${BOR}`, color:TEXT, fontSize:"11px", fontWeight:600, padding:"6px 12px", borderRadius:"20px", transition:"all 0.15s" }}
                  onMouseEnter={e=>{ e.currentTarget.style.background="rgba(139,92,246,0.12)"; e.currentTarget.style.borderColor="rgba(139,92,246,0.3)"; }}
                  onMouseLeave={e=>{ e.currentTarget.style.background="rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor=BOR; }}>
                  <span>{s.icon}</span> {s.label}
                </a>
              ))}
            </div>

            {/* Related */}
            {related.length>0 && (
              <div style={{ marginTop:"40px" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"16px" }}>
                  <div style={{ width:"3px", height:"16px", background:VIO, borderRadius:"2px" }}/>
                  <h3 style={{ color:TEXT, fontWeight:700, fontSize:"14px", margin:0 }}>Artikel Terkait</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {related.map(r=>(
                    <Link key={r.slug} href={`/blog/${r.slug}`} style={{ textDecoration:"none" }}>
                      <div style={{ background:"rgba(255,255,255,0.03)", border:`1px solid ${BOR}`, borderRadius:"14px", overflow:"hidden", transition:"all 0.2s" }}
                        onMouseEnter={e=>{ e.currentTarget.style.background="rgba(139,92,246,0.07)"; e.currentTarget.style.borderColor="rgba(139,92,246,0.3)"; e.currentTarget.style.transform="translateY(-2px)"; }}
                        onMouseLeave={e=>{ e.currentTarget.style.background="rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor=BOR; e.currentTarget.style.transform="translateY(0)"; }}>
                        <div className={`bg-gradient-to-br ${r.cover} flex items-center justify-center`} style={{ height:"80px", position:"relative" }}>
                          <div style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.25)" }}/>
                          <span style={{ fontSize:"30px", position:"relative" }}>{r.emoji}</span>
                        </div>
                        <div style={{ padding:"12px 14px" }}>
                          <div style={{ color:r.catColor, fontSize:"9px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:"4px" }}>{r.category}</div>
                          <div style={{ color:TEXT, fontWeight:600, fontSize:"12px", lineHeight:1.4 }}>{r.title}</div>
                          <div style={{ color:VIO, fontSize:"11px", fontWeight:700, marginTop:"6px" }}>Baca →</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div style={{ marginTop:"32px", textAlign:"center" }}>
              <Link href="/blog" style={{ color:VIO, textDecoration:"none", fontWeight:600, fontSize:"13px" }}>← Kembali ke Blog</Link>
            </div>
          </div>

          {/* ── RIGHT: Sidebar ── */}
          <div style={{ position:"sticky", top:"72px", display:"flex", flexDirection:"column", gap:"14px" }}>

            {/* Table of Contents */}
            {toc.length > 0 && (
              <div style={{ background:"rgba(255,255,255,0.03)", border:`1px solid ${BOR}`, borderRadius:"14px", overflow:"hidden" }}>
                <div style={{ padding:"12px 16px", borderBottom:`1px solid ${BOR}`, display:"flex", alignItems:"center", gap:"7px" }}>
                  <div style={{ width:"3px", height:"14px", background:VIO, borderRadius:"2px" }}/>
                  <span style={{ color:TEXT, fontWeight:700, fontSize:"11px", textTransform:"uppercase", letterSpacing:"0.08em" }}>Daftar Isi</span>
                </div>
                <div style={{ padding:"8px" }}>
                  {toc.map((t,i)=>(
                    <button key={i} onClick={()=>scrollToToc(i)}
                      style={{ width:"100%", display:"flex", alignItems:"flex-start", gap:"8px", padding:"8px 10px", borderRadius:"8px", border:"none", background:activeToc===i?"rgba(139,92,246,0.1)":"transparent", cursor:"pointer", textAlign:"left", transition:"all 0.15s" }}
                      onMouseEnter={e=>{ if(activeToc!==i) e.currentTarget.style.background="rgba(255,255,255,0.04)"; }}
                      onMouseLeave={e=>{ if(activeToc!==i) e.currentTarget.style.background="transparent"; }}>
                      <span style={{ color:activeToc===i?VIO:MUT, fontWeight:700, fontSize:"10px", flexShrink:0, marginTop:"2px" }}>{String(i+1).padStart(2,"0")}</span>
                      <span style={{ color:activeToc===i?VIO:MUT, fontSize:"11px", lineHeight:1.4, fontWeight:activeToc===i?600:400 }}>{t}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Progress card */}
            <div style={{ background:"rgba(255,255,255,0.03)", border:`1px solid ${BOR}`, borderRadius:"14px", padding:"14px 16px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"8px" }}>
                <span style={{ color:MUT, fontSize:"11px" }}>Progress membaca</span>
                <span style={{ color:VIO, fontWeight:700, fontSize:"12px" }}>{progress}%</span>
              </div>
              <div style={{ height:"4px", background:"rgba(255,255,255,0.06)", borderRadius:"2px" }}>
                <div style={{ height:"100%", width:`${progress}%`, background:`linear-gradient(to right,${VIO2},${PINK})`, borderRadius:"2px", transition:"width 0.3s" }}/>
              </div>
              <div style={{ color:MUT, fontSize:"10px", marginTop:"6px" }}>⏱ {article.readTime}</div>
            </div>

            {/* Jelajahi lebih */}
            <div style={{ background:"rgba(255,255,255,0.03)", border:`1px solid ${BOR}`, borderRadius:"14px", padding:"14px 16px" }}>
              <div style={{ color:MUT, fontSize:"10px", fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"10px" }}>Jelajahi Lebih</div>
              <Link href="/blog" style={{ textDecoration:"none", display:"block", textAlign:"center", background:"rgba(255,255,255,0.05)", border:`1px solid ${BOR}`, color:VIO, fontWeight:700, fontSize:"12px", padding:"9px", borderRadius:"20px" }}>
                ← Semua Artikel
              </Link>
            </div>

            {/* CTA Hitung Harga */}
            <div style={{ background:`linear-gradient(135deg,rgba(124,58,237,0.18),rgba(236,72,153,0.12))`, border:`1px solid rgba(139,92,246,0.25)`, borderRadius:"14px", padding:"18px 16px", textAlign:"center" }}>
              <div style={{ fontSize:"26px", marginBottom:"8px" }}>💡</div>
              <div style={{ color:TEXT, fontWeight:700, fontSize:"13px", marginBottom:"6px" }}>Butuh Website Profesional?</div>
              <div style={{ color:MUT, fontSize:"11px", lineHeight:1.5, marginBottom:"12px" }}>Gratis konsultasi. Harga transparan.</div>
              <Link href="/hitung" style={{ textDecoration:"none", display:"block", background:`linear-gradient(135deg,${VIO2},${PINK})`, color:"#fff", fontWeight:700, fontSize:"12px", padding:"9px", borderRadius:"20px", boxShadow:`0 4px 16px rgba(124,58,237,0.3)` }}>
                Hitung Harga →
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* ── Back to top button ── */}
      {showTop && (
        <button onClick={scrollToTop}
          style={{ position:"fixed", bottom:"24px", right:"24px", width:"44px", height:"44px", borderRadius:"50%", background:`linear-gradient(135deg,${VIO2},${PINK})`, border:"none", color:"#fff", fontSize:"18px", cursor:"pointer", boxShadow:`0 8px 24px rgba(124,58,237,0.4)`, zIndex:50, display:"flex", alignItems:"center", justifyContent:"center" }}>
          ↑
        </button>
      )}
    </>
  );
}
