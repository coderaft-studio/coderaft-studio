"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const VIO  = "#a78bfa";
const VIO2 = "#7c3aed";
const PINK = "#ec4899";
const TEXT = "#f0f4ff";
const MUT  = "rgba(240,244,255,0.45)";
const BOR  = "rgba(139,92,246,0.15)";
const CARD = "rgba(255,255,255,0.03)";

/* ─── Tool components (dark theme) ─── */

function QRTool({ isMobile }) {
  const [url, setUrl]   = useState("https://coderaft.web.id");
  const [gen, setGen]   = useState("https://coderaft.web.id");
  const [copied,setCopied]=useState(false);
  return (
    <div style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap:"20px", alignItems:"start" }}>
      <div className="space-y-3">
        <div style={{ color:MUT, fontSize:"11px", fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"6px" }}>URL atau Teks</div>
        <textarea value={url} onChange={e=>setUrl(e.target.value)} rows={3} placeholder="https://website-anda.com"
          style={{ width:"100%", background:"rgba(255,255,255,0.05)", border:`1px solid ${BOR}`, borderRadius:"10px", padding:"10px 12px", fontSize:"13px", color:TEXT, outline:"none", resize:"none", fontFamily:"inherit", boxSizing:"border-box" }}
          onFocus={e=>e.target.style.borderColor="rgba(139,92,246,0.4)"}
          onBlur={e =>e.target.style.borderColor=BOR} />
        <button onClick={()=>setGen(url)} disabled={!url}
          style={{ width:"100%", background:`linear-gradient(135deg,${VIO2},${PINK})`, border:"none", borderRadius:"10px", color:"#fff", fontWeight:700, fontSize:"13px", padding:"11px", cursor:url?"pointer":"not-allowed", opacity:url?1:0.5 }}>
          Generate QR Code
        </button>
        <div style={{ color:MUT, fontSize:"11px", lineHeight:1.5 }}>
          💡 Cocok untuk menu restoran, link WhatsApp, kartu nama digital, atau promo bisnis.
        </div>
      </div>
      {gen && (
        <div style={{ textAlign:"center" }}>
          <div style={{ background:"#fff", borderRadius:"16px", padding:"20px", display:"inline-block" }}>
            <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(gen)}&margin=8`}
              alt="QR Code" style={{ borderRadius:"8px", display:"block", width:"200px", height:"200px" }} />
          </div>
          <div style={{ marginTop:"12px", display:"flex", gap:"8px", justifyContent:"center" }}>
            <a href={`https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(gen)}`}
              download="qrcode.png" target="_blank" rel="noopener noreferrer"
              style={{ textDecoration:"none", background:`rgba(139,92,246,0.15)`, border:`1px solid ${BOR}`, color:VIO, fontSize:"12px", fontWeight:700, padding:"7px 16px", borderRadius:"20px" }}>
              ⬇ Download PNG
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function WordTool() {
  const [text, setText] = useState("Masukkan atau tempel teks Anda di sini untuk menghitung jumlah kata, karakter, kalimat, dan estimasi waktu baca. Tools ini gratis dan tidak memerlukan login.");
  const words    = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars    = text.length;
  const noSpace  = text.replace(/\s/g,"").length;
  const sents    = text.split(/[.!?]+/).filter(s=>s.trim()).length;
  const paras    = text.split(/\n\s*\n/).filter(p=>p.trim()).length||0;
  const readTime = Math.max(1,Math.round(words/200));
  const stats = [
    { l:"Kata",       v:words,    c:VIO  },
    { l:"Karakter",   v:chars,    c:PINK },
    { l:"Tanpa Spasi",v:noSpace,  c:"#06b6d4" },
    { l:"Kalimat",    v:sents,    c:"#f59e0b" },
    { l:"Paragraf",   v:paras,    c:"#10b981" },
    { l:"Menit Baca", v:readTime, c:"#f43f5e" },
  ];
  return (
    <div className="space-y-4">
      <textarea value={text} onChange={e=>setText(e.target.value)} rows={5} placeholder="Tempel teks Anda di sini..."
        style={{ width:"100%", background:"rgba(255,255,255,0.05)", border:`1px solid ${BOR}`, borderRadius:"10px", padding:"12px", fontSize:"13px", color:TEXT, outline:"none", resize:"vertical", fontFamily:"inherit", boxSizing:"border-box", lineHeight:1.6 }}
        onFocus={e=>e.target.style.borderColor="rgba(139,92,246,0.4)"}
        onBlur={e =>e.target.style.borderColor=BOR} />
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"10px" }}>
        {stats.map(s=>(
          <div key={s.l} style={{ background:`rgba(255,255,255,0.04)`, border:`1px solid ${BOR}`, borderRadius:"12px", padding:"14px 12px", textAlign:"center" }}>
            <div style={{ color:s.c, fontWeight:900, fontSize:"22px", lineHeight:1 }}>{s.v}</div>
            <div style={{ color:MUT, fontSize:"10px", marginTop:"4px" }}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PassTool({ isMobile }) {
  const [len,   setLen]   = useState(16);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [num,   setNum]   = useState(true);
  const [sym,   setSym]   = useState(false);
  const [pass,  setPass]  = useState("");
  const [copied,setCopied]= useState(false);

  const generate = () => {
    let chars = "";
    if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (num)   chars += "0123456789";
    if (sym)   chars += "!@#$%^&*()_+-=[]{}";
    if (!chars) return;
    setPass(Array.from({length:len},()=>chars[Math.floor(Math.random()*chars.length)]).join(""));
    setCopied(false);
  };
  const copy = () => { navigator.clipboard.writeText(pass); setCopied(true); setTimeout(()=>setCopied(false),2000); };
  const str  = ()=>{ let s=0; if(upper)s++;if(lower)s++;if(num)s++;if(sym)s++;if(len>=16)s++; return s<=2?"Lemah":s<=3?"Sedang":s<=4?"Kuat":"Sangat Kuat"; };
  const strC = ()=>{ const s=str(); return s==="Lemah"?"#f43f5e":s==="Sedang"?"#f59e0b":s==="Kuat"?VIO:"#10b981"; };

  return (
    <div className="space-y-4">
      <div style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap:"16px" }}>
        <div>
          <div style={{ color:MUT, fontSize:"11px", fontWeight:700, letterSpacing:"0.08em", marginBottom:"8px" }}>PANJANG: {len} KARAKTER</div>
          <input type="range" min={6} max={32} value={len} onChange={e=>setLen(+e.target.value)}
            style={{ width:"100%", accentColor:VIO }} />
        </div>
        <div>
          <div style={{ color:MUT, fontSize:"11px", fontWeight:700, letterSpacing:"0.08em", marginBottom:"8px" }}>JENIS KARAKTER</div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"8px" }}>
            {[{l:"A–Z",v:upper,s:setUpper},{l:"a–z",v:lower,s:setLower},{l:"0–9",v:num,s:setNum},{l:"!@#",v:sym,s:setSym}].map(o=>(
              <label key={o.l} style={{ display:"flex", alignItems:"center", gap:"5px", cursor:"pointer" }}>
                <input type="checkbox" checked={o.v} onChange={e=>o.s(e.target.checked)} style={{ accentColor:VIO, width:"14px", height:"14px" }}/>
                <span style={{ color:TEXT, fontSize:"12px", fontFamily:"monospace", fontWeight:600 }}>{o.l}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      <button onClick={generate}
        style={{ width:"100%", background:`linear-gradient(135deg,${VIO2},${PINK})`, border:"none", borderRadius:"10px", color:"#fff", fontWeight:700, fontSize:"13px", padding:"12px", cursor:"pointer" }}>
        🔑 Generate Password
      </button>
      {pass && (
        <div style={{ background:"rgba(255,255,255,0.05)", border:`1px solid ${BOR}`, borderRadius:"12px", padding:"14px 16px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", gap:"12px" }}>
            <span style={{ fontFamily:"monospace", fontSize:"14px", color:TEXT, wordBreak:"break-all", flex:1, letterSpacing:"0.05em" }}>{pass}</span>
            <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:"4px", flexShrink:0 }}>
              <button onClick={copy} style={{ background:copied?"rgba(16,185,129,0.15)":"rgba(139,92,246,0.15)", border:`1px solid ${copied?"#10b981":VIO}`, color:copied?"#10b981":VIO, borderRadius:"8px", padding:"6px 12px", fontSize:"11px", fontWeight:700, cursor:"pointer" }}>
                {copied?"✓ Copied":"Copy"}
              </button>
              <span style={{ fontSize:"10px", fontWeight:700, color:strC() }}>{str()}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function UTMTool({ isMobile }) {
  const [f, setF] = useState({ url:"https://coderaft.web.id", source:"google", medium:"cpc", campaign:"promo-website-2026", term:"", content:"" });
  const [copied,setCopied]=useState(false);
  const ff = k=>e=>setF(p=>({...p,[k]:e.target.value}));
  const result = (()=>{
    if(!f.url||!f.source||!f.campaign) return "";
    const p=new URLSearchParams();
    if(f.source)   p.set("utm_source",f.source);
    if(f.medium)   p.set("utm_medium",f.medium);
    if(f.campaign) p.set("utm_campaign",f.campaign);
    if(f.term)     p.set("utm_term",f.term);
    if(f.content)  p.set("utm_content",f.content);
    return `${f.url}${f.url.includes("?")?"&":"?"}${p.toString()}`;
  })();
  const copy=()=>{ navigator.clipboard.writeText(result); setCopied(true); setTimeout(()=>setCopied(false),2000); };
  return (
    <div style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap:"16px" }}>
      <div className="space-y-3">
        {[{k:"url",l:"URL Website *",ph:"https://website.com"},{k:"source",l:"Source *",ph:"google / facebook"},{k:"medium",l:"Medium *",ph:"cpc / social / email"},{k:"campaign",l:"Nama Campaign *",ph:"promo-lebaran-2026"},{k:"term",l:"Term (opsional)",ph:"jasa web umkm"},{k:"content",l:"Content (opsional)",ph:"banner-atas"}].map(fi=>(
          <div key={fi.k}>
            <label style={{ display:"block", color:MUT, fontSize:"10px", fontWeight:700, marginBottom:"4px", textTransform:"uppercase", letterSpacing:"0.08em" }}>{fi.l}</label>
            <input value={f[fi.k]} onChange={ff(fi.k)} placeholder={fi.ph}
              style={{ width:"100%", background:"rgba(255,255,255,0.05)", border:`1px solid ${BOR}`, borderRadius:"8px", padding:"8px 10px", fontSize:"12px", color:TEXT, outline:"none", boxSizing:"border-box" }}
              onFocus={e=>e.target.style.borderColor="rgba(139,92,246,0.4)"}
              onBlur={e =>e.target.style.borderColor=BOR} />
          </div>
        ))}
      </div>
      <div>
        <div style={{ color:MUT, fontSize:"10px", fontWeight:700, letterSpacing:"0.08em", marginBottom:"8px", textTransform:"uppercase" }}>Hasil URL</div>
        <div style={{ background:"rgba(255,255,255,0.04)", border:`1px solid ${BOR}`, borderRadius:"12px", padding:"14px", minHeight:"120px", marginBottom:"10px" }}>
          {result ? (
            <span style={{ color:TEXT, fontSize:"11px", wordBreak:"break-all", fontFamily:"monospace", lineHeight:1.7 }}>{result}</span>
          ) : (
            <span style={{ color:MUT, fontSize:"12px" }}>Isi form di sebelah kiri untuk generate URL...</span>
          )}
        </div>
        {result && (
          <button onClick={copy} style={{ width:"100%", background:copied?"rgba(16,185,129,0.15)":`rgba(139,92,246,0.15)`, border:`1px solid ${copied?"#10b981":VIO}`, color:copied?"#10b981":VIO, borderRadius:"10px", padding:"10px", fontSize:"12px", fontWeight:700, cursor:"pointer" }}>
            {copied?"✓ URL Disalin!":"Copy URL"}
          </button>
        )}
        <div style={{ marginTop:"12px", padding:"12px", background:"rgba(255,255,255,0.03)", borderRadius:"10px", border:`1px solid ${BOR}` }}>
          <div style={{ color:VIO, fontSize:"10px", fontWeight:700, marginBottom:"4px" }}>Apa itu UTM?</div>
          <div style={{ color:MUT, fontSize:"11px", lineHeight:1.5 }}>Parameter UTM membantu melacak dari mana pengunjung website Anda berasal — Google Ads, Instagram, email, dll. Wajib untuk kampanye iklan.</div>
        </div>
      </div>
    </div>
  );
}

function ImageResizerTool() {
  const [src,          setSrc]        = useState(null);
  const [orig,         setOrig]       = useState(null);
  const [w,            setW]          = useState(1080);
  const [h,            setH]          = useState(1080);
  const [lock,         setLock]       = useState(true);
  const [quality,      setQuality]    = useState(90);
  const [output,       setOutput]     = useState(null);
  const [activePreset, setActivePreset] = useState(null);

  const PRESETS = [
    {l:"IG Post",   w:1080,h:1080},{l:"IG Story",  w:1080,h:1920},
    {l:"Tokopedia", w:700, h:700 },{l:"Shopee",    w:500, h:500 },
    {l:"FB Cover",  w:820, h:312 },{l:"YT Thumb",  w:1280,h:720 },
  ];

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const url = ev.target.result;
      setSrc(url); setOutput(null);
      const img = new Image();
      img.onload = () => { setOrig({w:img.naturalWidth,h:img.naturalHeight,size:file.size}); setW(img.naturalWidth); setH(img.naturalHeight); };
      img.src = url;
    };
    reader.readAsDataURL(file);
  };

  const applyPreset = (p) => { setW(p.w); setH(p.h); setLock(false); setOutput(null); setActivePreset(p.l); };

  const changeW = (val) => {
    const n = parseInt(val)||0; setW(n); setOutput(null); setActivePreset(null);
    if (lock && orig) setH(Math.round(n*orig.h/orig.w));
  };
  const changeH = (val) => {
    const n = parseInt(val)||0; setH(n); setOutput(null); setActivePreset(null);
    if (lock && orig) setW(Math.round(n*orig.w/orig.h));
  };

  const resize = () => {
    if (!src||!w||!h) return;
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width=w; canvas.height=h;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle="#fff"; ctx.fillRect(0,0,w,h);
      ctx.drawImage(img,0,0,w,h);
      setOutput(canvas.toDataURL("image/jpeg", quality/100));
    };
    img.src = src;
  };

  const fmtSz = (b) => b>1048576 ? `${(b/1048576).toFixed(1)}MB` : `${Math.round(b/1024)}KB`;
  const IS = { background:"rgba(255,255,255,0.05)", border:`1px solid ${BOR}`, borderRadius:"8px", padding:"8px 10px", fontSize:"13px", color:TEXT, outline:"none", boxSizing:"border-box" };

  return (
    <div className="space-y-4">
      <label style={{ cursor:"pointer" }}>
        <div style={{ border:`2px dashed ${src?"rgba(139,92,246,0.4)":BOR}`, borderRadius:"14px", padding:src?"12px":"24px 16px", textAlign:"center", background:"rgba(255,255,255,0.02)" }}>
          {src ? (
            <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
              <img src={src} alt="" style={{ width:"56px", height:"56px", objectFit:"cover", borderRadius:"8px", flexShrink:0 }} />
              <div style={{ textAlign:"left", minWidth:0 }}>
                <div style={{ color:TEXT, fontSize:"12px", fontWeight:700 }}>Gambar dipilih</div>
                {orig && <div style={{ color:MUT, fontSize:"11px", marginTop:"2px" }}>{orig.w}×{orig.h}px · {fmtSz(orig.size)}</div>}
                <div style={{ color:VIO, fontSize:"11px", marginTop:"2px" }}>Klik untuk ganti →</div>
              </div>
            </div>
          ) : (
            <>
              <div style={{ fontSize:"32px", marginBottom:"8px" }}>🖼️</div>
              <div style={{ color:TEXT, fontWeight:700, fontSize:"13px", marginBottom:"4px" }}>Upload Gambar</div>
              <div style={{ color:MUT, fontSize:"11px" }}>JPG, PNG, WebP</div>
            </>
          )}
        </div>
        <input type="file" accept="image/*" onChange={handleFile} style={{ display:"none" }} />
      </label>

      {src && (<>
        <div>
          <div style={{ color:MUT, fontSize:"10px", fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"8px" }}>Preset Ukuran</div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"6px" }}>
            {PRESETS.map(p=>{
              const sel = activePreset===p.l;
              return (
                <button key={p.l} onClick={()=>applyPreset(p)}
                  style={{ background:sel?"rgba(16,185,129,0.18)":"rgba(255,255,255,0.04)", border:`2px solid ${sel?"#10b981":BOR}`, borderRadius:"8px", padding:"7px 4px", cursor:"pointer", textAlign:"center", boxShadow:sel?"0 0 10px rgba(16,185,129,0.35)":"none" }}>
                  <div style={{ color:sel?"#10b981":TEXT, fontSize:"10px", fontWeight:sel?800:700 }}>{p.l}</div>
                  <div style={{ color:sel?"rgba(16,185,129,0.8)":MUT, fontSize:"9px", marginTop:"1px" }}>{p.w}×{p.h}</div>
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr auto 1fr", gap:"8px", alignItems:"end" }}>
          <div>
            <div style={{ color:MUT, fontSize:"10px", fontWeight:700, marginBottom:"4px" }}>LEBAR (px)</div>
            <input type="number" value={w} onChange={e=>changeW(e.target.value)} style={{ ...IS, width:"100%" }}
              onFocus={e=>e.target.style.borderColor="rgba(139,92,246,0.4)"} onBlur={e=>e.target.style.borderColor=BOR} />
          </div>
          <button onClick={()=>{setLock(!lock);setOutput(null);}}
            style={{ padding:"8px 10px", borderRadius:"8px", border:`1px solid ${lock?VIO:BOR}`, background:lock?`rgba(139,92,246,0.15)`:"rgba(255,255,255,0.04)", color:lock?VIO:MUT, cursor:"pointer", fontSize:"16px" }}>
            {lock?"🔒":"🔓"}
          </button>
          <div>
            <div style={{ color:MUT, fontSize:"10px", fontWeight:700, marginBottom:"4px" }}>TINGGI (px)</div>
            <input type="number" value={h} onChange={e=>changeH(e.target.value)} style={{ ...IS, width:"100%" }}
              onFocus={e=>e.target.style.borderColor="rgba(139,92,246,0.4)"} onBlur={e=>e.target.style.borderColor=BOR} />
          </div>
        </div>

        <div>
          <div style={{ color:MUT, fontSize:"10px", fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"6px" }}>KUALITAS: {quality}%</div>
          <input type="range" min={50} max={100} value={quality} onChange={e=>{setQuality(+e.target.value);setOutput(null);}} style={{ width:"100%", accentColor:VIO }} />
        </div>

        <button onClick={resize}
          style={{ width:"100%", background:`linear-gradient(135deg,${VIO2},${PINK})`, border:"none", borderRadius:"10px", color:"#fff", fontWeight:700, fontSize:"13px", padding:"12px", cursor:"pointer" }}>
          ✂️ Resize Sekarang
        </button>

        {output && (
          <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(16,185,129,0.3)", borderRadius:"12px", padding:"14px", textAlign:"center" }}>
            <img src={output} alt="preview" style={{ maxWidth:"100%", maxHeight:"180px", borderRadius:"8px", objectFit:"contain", marginBottom:"10px" }} />
            <div style={{ color:"#10b981", fontSize:"11px", fontWeight:700, marginBottom:"10px" }}>✓ {w}×{h}px siap download</div>
            <a href={output} download={`resized-${w}x${h}.jpg`}
              style={{ textDecoration:"none", display:"inline-block", background:"rgba(16,185,129,0.15)", border:"1px solid rgba(16,185,129,0.4)", color:"#10b981", fontWeight:700, fontSize:"12px", padding:"8px 20px", borderRadius:"20px" }}>
              ⬇ Download JPG
            </a>
          </div>
        )}
      </>)}
    </div>
  );
}

function MarginTool() {
  const [mode, setMode]     = useState("jual");
  const [hpp,  setHpp]      = useState("100000");
  const [mg,   setMg]       = useState("30");
  const [hj,   setHj]       = useState("150000");
  const [bt,   setBt]       = useState("");

  const fmtRp = (n) => n>=1e6 ? `Rp ${(n/1e6).toFixed(2).replace(/\.?0+$/,"")}jt` : `Rp ${n.toLocaleString("id-ID")}`;

  const hppVal    = parseFloat(hpp)||0;
  const mgVal     = parseFloat(mg)||0;
  const hjCalc    = mgVal<100&&hppVal>0 ? hppVal/(1-mgVal/100) : 0;
  const untungC   = hjCalc - hppVal;
  const markupC   = hppVal>0 ? (untungC/hppVal)*100 : 0;

  const hjVal     = parseFloat(hj)||0;
  const mgActual  = hjVal>0&&hppVal>0 ? ((hjVal-hppVal)/hjVal)*100 : 0;
  const untungA   = hjVal - hppVal;
  const markupA   = hppVal>0 ? (untungA/hppVal)*100 : 0;

  const btVal = parseFloat(bt)||0;
  const untung= mode==="jual" ? untungC : untungA;
  const bep   = btVal>0&&untung>0 ? Math.ceil(btVal/untung) : null;

  const IS = { width:"100%", background:"rgba(255,255,255,0.05)", border:`1px solid ${BOR}`, borderRadius:"8px", padding:"10px 12px", fontSize:"14px", color:TEXT, outline:"none", boxSizing:"border-box", fontFamily:"inherit" };

  return (
    <div className="space-y-4">
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px" }}>
        {[["jual","🧮 Hitung Harga Jual"],["cek","🔍 Cek Margin Saya"]].map(([m,l])=>(
          <button key={m} onClick={()=>setMode(m)}
            style={{ padding:"10px 8px", borderRadius:"10px", border:`1.5px solid ${mode===m?VIO:BOR}`, background:mode===m?`rgba(139,92,246,0.15)`:"rgba(255,255,255,0.03)", color:mode===m?TEXT:MUT, fontWeight:700, fontSize:"11px", cursor:"pointer" }}>
            {l}
          </button>
        ))}
      </div>

      <div>
        <div style={{ color:MUT, fontSize:"11px", fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"6px" }}>Modal / HPP (Rp)</div>
        <input value={hpp} onChange={e=>setHpp(e.target.value)} placeholder="100000" type="number" style={IS}
          onFocus={e=>e.target.style.borderColor="rgba(139,92,246,0.4)"} onBlur={e=>e.target.style.borderColor=BOR} />
      </div>

      {mode==="jual" ? (
        <div>
          <div style={{ color:MUT, fontSize:"11px", fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"6px" }}>Target Margin (%)</div>
          <input value={mg} onChange={e=>setMg(e.target.value)} placeholder="30" type="number" min="1" max="99" style={IS}
            onFocus={e=>e.target.style.borderColor="rgba(139,92,246,0.4)"} onBlur={e=>e.target.style.borderColor=BOR} />
          <div style={{ display:"flex", gap:"6px", marginTop:"8px", flexWrap:"wrap" }}>
            {["10","20","30","40","50"].map(p=>(
              <button key={p} onClick={()=>setMg(p)}
                style={{ background:mg===p?`rgba(139,92,246,0.2)`:"rgba(255,255,255,0.05)", border:`1px solid ${mg===p?VIO:BOR}`, color:mg===p?VIO:MUT, fontSize:"11px", fontWeight:700, padding:"4px 12px", borderRadius:"20px", cursor:"pointer" }}>
                {p}%
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div style={{ color:MUT, fontSize:"11px", fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"6px" }}>Harga Jual Saat Ini (Rp)</div>
          <input value={hj} onChange={e=>setHj(e.target.value)} placeholder="150000" type="number" style={IS}
            onFocus={e=>e.target.style.borderColor="rgba(139,92,246,0.4)"} onBlur={e=>e.target.style.borderColor=BOR} />
        </div>
      )}

      {hppVal>0 && (
        <div style={{ background:`linear-gradient(135deg,rgba(124,58,237,0.1),rgba(236,72,153,0.07))`, border:`1px solid rgba(139,92,246,0.25)`, borderRadius:"14px", padding:"16px" }}>
          {mode==="jual" && hjCalc>0 && (<>
            <div style={{ textAlign:"center", marginBottom:"12px" }}>
              <div style={{ color:MUT, fontSize:"10px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"4px" }}>Harga Jual Ideal</div>
              <div style={{ background:`linear-gradient(135deg,${VIO},${PINK})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", fontWeight:900, fontSize:"clamp(1.4rem,5vw,1.9rem)", letterSpacing:"-0.02em" }}>
                {fmtRp(Math.round(hjCalc))}
              </div>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"8px" }}>
              {[{l:"Keuntungan",v:fmtRp(Math.round(untungC)),c:"#10b981"},{l:"Margin",v:`${mgVal.toFixed(1)}%`,c:VIO},{l:"Markup",v:`${markupC.toFixed(1)}%`,c:PINK}].map(s=>(
                <div key={s.l} style={{ background:"rgba(255,255,255,0.04)", borderRadius:"10px", padding:"10px 6px", textAlign:"center" }}>
                  <div style={{ color:s.c, fontWeight:900, fontSize:"12px", wordBreak:"break-word" }}>{s.v}</div>
                  <div style={{ color:MUT, fontSize:"9px", marginTop:"3px" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </>)}
          {mode==="cek" && hjVal>0 && (<>
            <div style={{ textAlign:"center", marginBottom:"12px" }}>
              <div style={{ color:MUT, fontSize:"10px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"4px" }}>Margin Aktual</div>
              <div style={{ background:`linear-gradient(135deg,${VIO},${PINK})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", fontWeight:900, fontSize:"clamp(1.6rem,6vw,2.2rem)", letterSpacing:"-0.02em" }}>
                {mgActual.toFixed(1)}%
              </div>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px" }}>
              {[{l:"Keuntungan/unit",v:fmtRp(Math.round(untungA)),c:"#10b981"},{l:"Markup",v:`${markupA.toFixed(1)}%`,c:PINK}].map(s=>(
                <div key={s.l} style={{ background:"rgba(255,255,255,0.04)", borderRadius:"10px", padding:"10px 8px", textAlign:"center" }}>
                  <div style={{ color:s.c, fontWeight:900, fontSize:"13px" }}>{s.v}</div>
                  <div style={{ color:MUT, fontSize:"9px", marginTop:"3px" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </>)}
        </div>
      )}

      <div>
        <div style={{ color:MUT, fontSize:"11px", fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"6px" }}>
          Biaya Tetap/Bulan <span style={{ fontWeight:400, textTransform:"none", letterSpacing:0 }}>(opsional)</span>
        </div>
        <input value={bt} onChange={e=>setBt(e.target.value)} placeholder="Sewa, gaji, listrik, dll..." type="number" style={IS}
          onFocus={e=>e.target.style.borderColor="rgba(139,92,246,0.4)"} onBlur={e=>e.target.style.borderColor=BOR} />
        {bep && (
          <div style={{ marginTop:"10px", padding:"12px 14px", background:"rgba(245,158,11,0.08)", border:"1px solid rgba(245,158,11,0.3)", borderRadius:"10px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <span style={{ color:MUT, fontSize:"12px" }}>🎯 Break Even Point</span>
            <span style={{ color:"#f59e0b", fontWeight:900, fontSize:"14px" }}>{bep.toLocaleString("id-ID")} unit/bln</span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Tool config ─── */
const TOOLS = [
  { id:"utm",    icon:"📊", label:"UTM Builder",    tagline:"Tracking campaign iklan",    color:"#f59e0b", Component: UTMTool          },
  { id:"resize", icon:"🖼️", label:"Image Resizer",  tagline:"Resize gambar instan",       color:"#10b981", Component: ImageResizerTool,
    desc:"Ubah ukuran foto produk ke format Tokopedia, Shopee, Instagram & sosmed — dalam hitungan detik, langsung di browser, tanpa upload ke server manapun." },
  { id:"margin", icon:"💰", label:"Kalk. HPP",      tagline:"Hitung margin & harga jual", color:"#f97316", Component: MarginTool       },
  { id:"qr",     icon:"🔗", label:"QR Code",        tagline:"Link ke QR instan",          color:"#06b6d4", Component: QRTool           },
  { id:"word",   icon:"📝", label:"Word Counter",   tagline:"Analisis teks lengkap",      color:VIO,       Component: WordTool         },
  { id:"pass",   icon:"🔑", label:"Password",       tagline:"Password kuat & aman",       color:PINK,      Component: PassTool         },
];

export default function ToolsPage() {
  const [active,   setActive] = useState(null);
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const tool = TOOLS.find(t=>t.id===active);

  return (
    <div style={{ background:"#070711", minHeight:"100vh" }}>

      {/* ── Hero ── */}
      <div style={{ borderBottom:`1px solid ${BOR}`, padding:"40px 16px 32px" }}>
        <div className="max-w-5xl mx-auto">
          <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"12px" }}>
            <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:VIO, boxShadow:`0 0 8px ${VIO}` }}/>
            <span style={{ color:VIO, fontSize:"11px", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase" }}>Tools Gratis · Tidak Perlu Login</span>
          </div>
          <h1 style={{ color:TEXT, fontWeight:900, fontSize:"clamp(1.6rem,5vw,2.4rem)", letterSpacing:"-0.03em", lineHeight:1.1, marginBottom:"12px" }}>
            6 Tools Digital Gratis<br/><span style={{ background:`linear-gradient(135deg,${VIO},${PINK})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>untuk UMKM Indonesia</span>
          </h1>
          <p style={{ color:MUT, fontSize:"14px", lineHeight:1.6, maxWidth:"500px", marginBottom:"20px" }}>
            Langsung pakai, tanpa daftar, tanpa bayar. Tools praktis yang membantu operasional bisnis Anda sehari-hari.
          </p>
          {/* Stats */}
          <div style={{ display:"flex", gap:"20px", flexWrap:"wrap" }}>
            {[["6","Tools Tersedia"],["100%","Gratis"],["0","Login Diperlukan"],["∞","Unlimited Use"]].map(([v,l])=>(
              <div key={l} style={{ display:"flex", alignItems:"baseline", gap:"5px" }}>
                <span style={{ color:VIO, fontWeight:900, fontSize:"18px" }}>{v}</span>
                <span style={{ color:MUT, fontSize:"11px" }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tab selector + Tool area ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr" : "200px 1fr", gap:"20px", alignItems:"start" }}>

          {/* Left: Tool selector */}
          {isMobile ? (
            /* Mobile: 3-col card grid */
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"8px" }}>
              {TOOLS.map(t=>(
                <button key={t.id} onClick={()=>setActive(t.id)}
                  style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"6px", padding:"14px 8px", borderRadius:"14px",
                    border:`2px solid ${active===t.id ? t.color : "rgba(255,255,255,0.07)"}`,
                    background: active===t.id ? `${t.color}28` : "rgba(255,255,255,0.03)",
                    boxShadow: active===t.id ? `0 0 14px ${t.color}50` : "none",
                    cursor:"pointer" }}>
                  <span style={{ fontSize:"26px" }}>{t.icon}</span>
                  <span style={{ color: active===t.id ? "#fff" : MUT, fontWeight: active===t.id ? 800 : 600, fontSize:"10px", textAlign:"center", lineHeight:1.3 }}>{t.label}</span>
                  <div style={{ width:"18px", height:"3px", borderRadius:"2px", background: active===t.id ? t.color : "transparent" }} />
                </button>
              ))}
            </div>
          ) : (
            /* Desktop: vertical list */
            <div style={{ display:"flex", flexDirection:"column", gap:"4px", position:"sticky", top:"80px" }}>
              {TOOLS.map(t=>(
                <button key={t.id} onClick={()=>setActive(t.id)}
                  style={{ display:"flex", alignItems:"center", gap:"10px", padding:"11px 14px", borderRadius:"12px", border:"none", background:active===t.id?`rgba(139,92,246,0.12)`:"transparent", cursor:"pointer", textAlign:"left", transition:"all 0.15s", borderLeft:active===t.id?`3px solid ${t.color}`:"3px solid transparent" }}
                  onMouseEnter={e=>{ if(active!==t.id) e.currentTarget.style.background="rgba(255,255,255,0.04)"; }}
                  onMouseLeave={e=>{ if(active!==t.id) e.currentTarget.style.background="transparent"; }}>
                  <span style={{ fontSize:"20px", flexShrink:0 }}>{t.icon}</span>
                  <div>
                    <div style={{ color:active===t.id?TEXT:MUT, fontWeight:active===t.id?700:500, fontSize:"13px" }}>{t.label}</div>
                    <div style={{ color:active===t.id?t.color:MUT, fontSize:"10px", marginTop:"1px", opacity:active===t.id?1:0.6 }}>{t.tagline}</div>
                  </div>
                  {active===t.id && <div style={{ marginLeft:"auto", width:"6px", height:"6px", borderRadius:"50%", background:t.color, flexShrink:0, boxShadow:`0 0 8px ${t.color}` }}/>}
                </button>
              ))}

              <div style={{ marginTop:"12px", padding:"14px", background:"rgba(255,255,255,0.03)", border:`1px solid ${BOR}`, borderRadius:"12px" }}>
                <div style={{ color:VIO, fontSize:"10px", fontWeight:700, letterSpacing:"0.08em", marginBottom:"6px" }}>BUTUH LEBIH?</div>
                <div style={{ color:MUT, fontSize:"11px", lineHeight:1.5, marginBottom:"10px" }}>Tools di atas gratis selamanya. Untuk kebutuhan bisnis lebih lanjut, kami siap membantu.</div>
                <Link href="/hitung" style={{ textDecoration:"none", display:"block", textAlign:"center", background:`linear-gradient(135deg,${VIO2},${PINK})`, color:"#fff", fontSize:"11px", fontWeight:700, padding:"8px", borderRadius:"20px" }}>
                  Konsultasi Gratis →
                </Link>
              </div>
            </div>
          )}

          {/* Right: Active tool or welcome */}
          {!tool ? (
            !isMobile && <div style={{ background:CARD, border:`1px solid ${BOR}`, borderRadius:"18px", overflow:"hidden", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"48px 32px", textAlign:"center", minHeight:"360px" }}>
              <div style={{ fontSize:"52px", marginBottom:"16px" }}>🛠️</div>
              <div style={{ color:TEXT, fontWeight:900, fontSize:"18px", letterSpacing:"-0.01em", marginBottom:"8px" }}>Pilih Tool untuk Mulai</div>
              <div style={{ color:MUT, fontSize:"13px", lineHeight:1.7, maxWidth:"320px", marginBottom:"28px" }}>
                Semua tools di sini gratis, tanpa login, dan langsung bisa dipakai. Pilih salah satu dari daftar di sebelah kiri.
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"8px", width:"100%" }}>
                {TOOLS.map(t=>(
                  <button key={t.id} onClick={()=>setActive(t.id)}
                    style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"6px", padding:"14px 8px", borderRadius:"12px", border:`1px solid ${BOR}`, background:"rgba(255,255,255,0.03)", cursor:"pointer", transition:"all 0.15s" }}
                    onMouseEnter={e=>{ e.currentTarget.style.borderColor=t.color; e.currentTarget.style.background=`${t.color}15`; }}
                    onMouseLeave={e=>{ e.currentTarget.style.borderColor=BOR; e.currentTarget.style.background="rgba(255,255,255,0.03)"; }}>
                    <span style={{ fontSize:"22px" }}>{t.icon}</span>
                    <span style={{ color:MUT, fontWeight:600, fontSize:"10px", textAlign:"center", lineHeight:1.3 }}>{t.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div style={{ background:CARD, border:`1px solid ${BOR}`, borderRadius:"18px", overflow:"hidden" }}>
              {/* Tool header */}
              <div style={{ padding:"18px 22px", borderBottom:`1px solid ${BOR}`, background:"rgba(255,255,255,0.02)" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
                  <div style={{ width:"42px", height:"42px", borderRadius:"12px", background:`${tool.color}20`, border:`1px solid ${tool.color}40`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"20px", flexShrink:0 }}>
                    {tool.icon}
                  </div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ color:TEXT, fontWeight:700, fontSize:"15px" }}>{tool.label}</div>
                    <div style={{ color:tool.color, fontSize:"11px", marginTop:"1px" }}>{tool.tagline}</div>
                  </div>
                  <div style={{ flexShrink:0 }}>
                    <span style={{ background:`${tool.color}20`, color:tool.color, fontSize:"10px", fontWeight:700, padding:"4px 10px", borderRadius:"20px", border:`1px solid ${tool.color}40` }}>
                      ● Gratis
                    </span>
                  </div>
                </div>
                {tool.desc && (
                  <div style={{ marginTop:"12px", padding:"10px 14px", background:`${tool.color}0d`, border:`1px solid ${tool.color}25`, borderRadius:"10px" }}>
                    <span style={{ color:"rgba(240,244,255,0.6)", fontSize:"12px", lineHeight:1.6 }}>{tool.desc}</span>
                  </div>
                )}
              </div>
              {/* Tool content */}
              <div style={{ padding:"22px" }}>
                <tool.Component isMobile={isMobile} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Benefits ── */}
      <div style={{ borderTop:`1px solid ${BOR}`, padding:"48px 16px" }}>
        <div className="max-w-5xl mx-auto">
          <div style={{ textAlign:"center", marginBottom:"32px" }}>
            <h2 style={{ color:TEXT, fontWeight:900, fontSize:"1.5rem", letterSpacing:"-0.02em", marginBottom:"8px" }}>Kenapa Tools Ini Gratis?</h2>
            <p style={{ color:MUT, fontSize:"13px" }}>Kami percaya UMKM Indonesia berhak punya akses ke tools berkualitas tanpa biaya.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon:"⚡", title:"Instan & Mudah", desc:"Tidak perlu install, tidak perlu daftar. Buka browser, langsung pakai.", color:VIO },
              { icon:"🔒", title:"Privasi Terjaga", desc:"Data Anda tidak kami simpan. Semua proses terjadi di browser Anda sendiri.", color:PINK },
              { icon:"♾", title:"Unlimited", desc:"Tidak ada batas penggunaan. Pakai sebanyak yang Anda butuhkan.", color:"#10b981" },
            ].map(b=>(
              <div key={b.title} style={{ background:CARD, border:`1px solid ${BOR}`, borderRadius:"14px", padding:"20px" }}>
                <div style={{ fontSize:"28px", marginBottom:"10px" }}>{b.icon}</div>
                <div style={{ color:b.color, fontWeight:700, fontSize:"14px", marginBottom:"6px" }}>{b.title}</div>
                <div style={{ color:MUT, fontSize:"12px", lineHeight:1.6 }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ borderTop:`1px solid ${BOR}`, padding:"48px 16px", textAlign:"center" }}>
        <div style={{ maxWidth:"480px", margin:"0 auto" }}>
          <h2 style={{ color:TEXT, fontWeight:900, fontSize:"1.5rem", letterSpacing:"-0.02em", marginBottom:"10px" }}>
            Siap Punya Website Profesional?
          </h2>
          <p style={{ color:MUT, fontSize:"13px", lineHeight:1.7, marginBottom:"22px" }}>
            Tools gratis di atas adalah bukti kualitas kerja kami. Website bisnis Anda layak mendapat perhatian yang sama.
          </p>
          <div style={{ display:"flex", gap:"10px", justifyContent:"center", flexWrap:"wrap" }}>
            <Link href="/hitung" style={{ textDecoration:"none", background:`linear-gradient(135deg,${VIO2},${PINK})`, color:"#fff", fontWeight:700, fontSize:"13px", padding:"12px 26px", borderRadius:"25px", boxShadow:`0 8px 24px rgba(124,58,237,0.3)` }}>
              Hitung Estimasi Harga →
            </Link>
            <Link href="/blog" style={{ textDecoration:"none", background:CARD, color:VIO, fontWeight:700, fontSize:"13px", padding:"12px 26px", borderRadius:"25px", border:`1px solid ${BOR}` }}>
              Baca Artikel Tips
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
