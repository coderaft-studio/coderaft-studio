"use client";
import { useState } from "react";
import Link from "next/link";

const VIO  = "#a78bfa";
const VIO2 = "#7c3aed";
const PINK = "#ec4899";
const TEXT = "#f0f4ff";
const MUT  = "rgba(240,244,255,0.45)";
const BOR  = "rgba(139,92,246,0.15)";
const CARD = "rgba(255,255,255,0.03)";

const FASTWORK_URL = "https://fastwork.id/user/coderaft";
const WA_NUMBER   = "6285770320448";

const STEPS = [
  {
    id:"jenis", title:"Jenis Website", subtitle:"Apa yang ingin Anda buat?",
    options:[
      { val:"landing",  label:"Landing Page",     emoji:"📄", desc:"1 halaman, fokus konversi & penjualan",    base:500000,  tag:"Paling Populer" },
      { val:"company",  label:"Company Profile",  emoji:"🏢", desc:"3–5 halaman, profil bisnis lengkap",        base:2000000, tag:null },
      { val:"toko",     label:"Toko Online",       emoji:"🛒", desc:"Katalog produk + sistem pemesanan",         base:3500000, tag:null },
      { val:"webapp",   label:"Web Application",   emoji:"⚙", desc:"Dashboard, login, manajemen data",          base:7000000, tag:"Kompleks" },
    ],
  },
  {
    id:"halaman", title:"Berapa Halaman?", subtitle:"Estimasi jumlah halaman yang dibutuhkan",
    options:[
      { val:"1",    label:"1 halaman",    emoji:"1️⃣", desc:"Cukup untuk landing page",         mult:1.0 },
      { val:"3-5",  label:"3–5 halaman",  emoji:"📄", desc:"Home, About, Services, Contact",   mult:1.5 },
      { val:"5-10", label:"5–10 halaman", emoji:"📑", desc:"Website lengkap dengan blog",       mult:2.0 },
      { val:"10+",  label:"10+ halaman",  emoji:"📚", desc:"Portal atau website besar",         mult:2.8 },
    ],
  },
  {
    id:"fitur", title:"Fitur Tambahan", subtitle:"Pilih semua yang Anda butuhkan (boleh lebih dari satu)",
    multi:true,
    options:[
      { val:"wa",      label:"Tombol WhatsApp",  emoji:"💬", add:0,       desc:"Gratis" },
      { val:"form",    label:"Form Kontak",      emoji:"📬", add:0,       desc:"Gratis" },
      { val:"blog",    label:"Blog / Artikel",   emoji:"✍",  add:500000,  desc:"+Rp 500k" },
      { val:"seo",     label:"Optimasi SEO",     emoji:"🔍", add:500000,  desc:"+Rp 500k" },
      { val:"maps",    label:"Google Maps",      emoji:"🗺",  add:0,       desc:"Gratis" },
      { val:"login",   label:"Login System",     emoji:"🔐", add:1500000, desc:"+Rp 1.5jt" },
      { val:"payment", label:"Payment Gateway",  emoji:"💳", add:2000000, desc:"+Rp 2jt" },
      { val:"admin",   label:"Admin Dashboard",  emoji:"📊", add:2500000, desc:"+Rp 2.5jt" },
    ],
  },
  {
    id:"deadline", title:"Kapan Dibutuhkan?", subtitle:"Deadline berpengaruh pada prioritas pengerjaan",
    options:[
      { val:"santai",  label:"Santai",  emoji:"😌", desc:"2–4 minggu",  urgMult:1.0, note:"Harga normal" },
      { val:"normal",  label:"Normal",  emoji:"📅", desc:"1–2 minggu",  urgMult:1.2, note:"+20% rush fee" },
      { val:"urgent",  label:"Urgent",  emoji:"⚡", desc:"3–7 hari",    urgMult:1.5, note:"+50% rush fee" },
    ],
  },
  {
    id:"bahasa", title:"Bahasa Website", subtitle:"Pilih bahasa konten website Anda",
    options:[
      { val:"id",        label:"Bahasa Indonesia", emoji:"🇮🇩", desc:"Untuk pasar lokal",           langMult:1.0  },
      { val:"en",        label:"English",          emoji:"🇺🇸", desc:"Untuk pasar internasional",   langMult:1.2  },
      { val:"bilingual", label:"Bilingual",        emoji:"🌐", desc:"Indonesia + Inggris",           langMult:1.35 },
    ],
  },
];

function fmt(n) { return "Rp "+(n/1000000).toFixed(1)+"jt"; }
function fmtFull(n) { return "Rp "+n.toLocaleString("id-ID"); }

function calcPrice(answers) {
  const jenis    = STEPS[0].options.find(o=>o.val===answers.jenis);
  const halaman  = STEPS[1].options.find(o=>o.val===answers.halaman);
  const deadline = STEPS[3].options.find(o=>o.val===answers.deadline);
  const bahasa   = STEPS[4].options.find(o=>o.val===answers.bahasa);
  const fiturAdd = (answers.fitur||[]).reduce((a,v)=>{
    const f=STEPS[2].options.find(o=>o.val===v); return a+(f?.add||0);
  },0);
  if(!jenis||!halaman||!deadline||!bahasa) return null;
  const base  = jenis.base*halaman.mult;
  const total = (base+fiturAdd)*deadline.urgMult*bahasa.langMult;
  return { min:Math.round(total*0.85), max:Math.round(total*1.15), base:Math.round(total) };
}

/* ── Result Page ── */
function ResultPage({ answers, onReset }) {
  const price = calcPrice(answers);
  if (!price) return null;

  const jenis    = STEPS[0].options.find(o=>o.val===answers.jenis);
  const deadline = STEPS[3].options.find(o=>o.val===answers.deadline);
  const selectedFitur = (answers.fitur||[]).map(v=>STEPS[2].options.find(o=>o.val===v)?.label).filter(Boolean);

  const includes = [
    "Desain custom sesuai brand",
    "Mobile-friendly & responsive",
    "Optimasi kecepatan loading",
    "SSL certificate (HTTPS)",
    "Hosting setup & domain connect",
    "Revisi sampai puas",
    "Support 1 bulan setelah launch",
    "Source code milik Anda",
  ];

  const waMsg = encodeURIComponent(`Halo, saya ingin konsultasi website.\n\nJenis: ${jenis?.label}\nEstimasi budget: ${fmt(price.min)} – ${fmt(price.max)}\nFitur: ${selectedFitur.join(", ")||"Standar"}\n\nApakah bisa dibantu?`);

  return (
    <div style={{ maxWidth:"640px", margin:"0 auto", padding:"0 16px 80px" }}>

      {/* Price result */}
      <div style={{ background:`linear-gradient(135deg,rgba(124,58,237,0.2),rgba(236,72,153,0.15))`, border:`1px solid rgba(139,92,246,0.3)`, borderRadius:"20px", padding:"32px", textAlign:"center", marginBottom:"20px" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"8px", marginBottom:"12px" }}>
          <span style={{ fontSize:"32px" }}>🎯</span>
          <div>
            <div style={{ color:MUT, fontSize:"11px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase" }}>Estimasi Biaya Pembuatan</div>
            <div style={{ color:TEXT, fontWeight:700, fontSize:"12px", marginTop:"2px" }}>{jenis?.label} · {deadline?.desc}</div>
          </div>
        </div>
        <div style={{ background:`linear-gradient(135deg,${VIO},${PINK})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", fontWeight:900, fontSize:"clamp(1.8rem,6vw,2.8rem)", letterSpacing:"-0.03em", lineHeight:1 }}>
          {fmt(price.min)} – {fmt(price.max)}
        </div>
        <div style={{ color:MUT, fontSize:"12px", marginTop:"8px" }}>
          Harga bisa berbeda sesuai kebutuhan spesifik Anda
        </div>
        {selectedFitur.length>0 && (
          <div style={{ display:"flex", flexWrap:"wrap", gap:"6px", justifyContent:"center", marginTop:"14px" }}>
            {selectedFitur.map(f=>(
              <span key={f} style={{ background:"rgba(255,255,255,0.08)", color:TEXT, fontSize:"10px", fontWeight:600, padding:"3px 10px", borderRadius:"20px", border:"1px solid rgba(255,255,255,0.1)" }}>{f}</span>
            ))}
          </div>
        )}
      </div>

      {/* What's included */}
      <div style={{ background:CARD, border:`1px solid ${BOR}`, borderRadius:"16px", padding:"20px", marginBottom:"16px" }}>
        <div style={{ color:TEXT, fontWeight:700, fontSize:"14px", marginBottom:"14px", display:"flex", alignItems:"center", gap:"8px" }}>
          <span>✅</span> Yang Sudah Termasuk
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px" }}>
          {includes.map(item=>(
            <div key={item} style={{ display:"flex", alignItems:"flex-start", gap:"7px" }}>
              <span style={{ color:VIO, fontWeight:900, fontSize:"12px", marginTop:"1px" }}>✓</span>
              <span style={{ color:MUT, fontSize:"12px", lineHeight:1.4 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline & process */}
      <div style={{ background:CARD, border:`1px solid ${BOR}`, borderRadius:"16px", padding:"18px 20px", marginBottom:"16px" }}>
        <div style={{ color:TEXT, fontWeight:700, fontSize:"13px", marginBottom:"12px" }}>📅 Alur Kerja Kami</div>
        <div style={{ display:"flex", gap:"0" }}>
          {[
            { step:"01", label:"Konsultasi",   desc:"1–2 hari",  color:VIO },
            { step:"02", label:"Desain",       desc:"3–5 hari",  color:PINK },
            { step:"03", label:"Development",  desc:"5–14 hari", color:"#06b6d4" },
            { step:"04", label:"Launch",       desc:"1 hari",    color:"#10b981" },
          ].map((s,i)=>(
            <div key={s.step} style={{ flex:1, textAlign:"center", position:"relative" }}>
              {i<3 && <div style={{ position:"absolute", top:"14px", left:"50%", right:"-50%", height:"2px", background:`rgba(139,92,246,0.2)`, zIndex:0 }}/>}
              <div style={{ width:"30px", height:"30px", borderRadius:"50%", background:`${s.color}25`, border:`2px solid ${s.color}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"10px", fontWeight:900, color:s.color, margin:"0 auto 6px", position:"relative", zIndex:1 }}>{s.step}</div>
              <div style={{ color:TEXT, fontSize:"10px", fontWeight:700, wordBreak:"break-word" }}>{s.label}</div>
              <div style={{ color:MUT, fontSize:"9px", marginTop:"1px", wordBreak:"break-word" }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTAs */}
      <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
        <a href={FASTWORK_URL} target="_blank" rel="noopener noreferrer"
          style={{ textDecoration:"none", display:"block", textAlign:"center", background:`linear-gradient(135deg,${VIO2},${PINK})`, color:"#fff", fontWeight:700, fontSize:"14px", padding:"15px", borderRadius:"14px", boxShadow:`0 8px 24px rgba(124,58,237,0.35)` }}>
          🚀 Pesan Sekarang di Fastwork
        </a>
        <button onClick={onReset}
          style={{ background:"none", border:"none", color:MUT, fontWeight:600, fontSize:"12px", cursor:"pointer", padding:"8px" }}>
          ↺ Hitung Ulang
        </button>
      </div>

      {/* Trust */}
      <div style={{ display:"flex", justifyContent:"center", gap:"24px", flexWrap:"wrap", marginTop:"24px", paddingTop:"20px", borderTop:`1px solid ${BOR}` }}>
        {["🔒 Privasi Terjaga","⚡ Respons < 1 Jam","✅ Garansi Revisi","🏆 100+ Klien Puas"].map(t=>(
          <span key={t} style={{ color:MUT, fontSize:"11px", fontWeight:600 }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ── Main ── */
export default function HitungPage() {
  const [step,    setStep]    = useState(-1); // -1 = intro
  const [answers, setAnswers] = useState({});
  const [done,    setDone]    = useState(false);

  const curStep = STEPS[step];
  const progress = step>=0 ? ((step)/STEPS.length)*100 : 0;

  const select = (val) => {
    if (curStep.multi) {
      const cur=answers[curStep.id]||[];
      setAnswers(p=>({...p,[curStep.id]:cur.includes(val)?cur.filter(v=>v!==val):[...cur,val]}));
    } else {
      setAnswers(p=>({...p,[curStep.id]:val}));
      if (step<STEPS.length-1) setTimeout(()=>setStep(s=>s+1),250);
      else setTimeout(()=>setDone(true),250);
    }
  };

  const next  = () => { if(step<STEPS.length-1) setStep(s=>s+1); else setDone(true); };
  const reset = () => { setStep(-1); setAnswers({}); setDone(false); };

  if (done) return (
    <div style={{ paddingTop:"32px" }}>
      <ResultPage answers={answers} onReset={reset} />
    </div>
  );

  /* Intro screen */
  if (step===-1) return (
    <div style={{ maxWidth:"520px", margin:"0 auto", padding:"40px 16px 80px", textAlign:"center" }}>
      <div style={{ fontSize:"56px", marginBottom:"16px" }}>🧮</div>
      <h1 style={{ color:TEXT, fontWeight:900, fontSize:"clamp(1.5rem,5vw,2.2rem)", letterSpacing:"-0.03em", lineHeight:1.15, marginBottom:"14px" }}>
        Berapa Biaya<br/><span style={{ background:`linear-gradient(135deg,${VIO},${PINK})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Website Anda?</span>
      </h1>
      <p style={{ color:MUT, fontSize:"14px", lineHeight:1.7, marginBottom:"28px" }}>
        Jawab 5 pertanyaan singkat dan dapatkan<br/>estimasi harga yang transparan — dalam 2 menit.
      </p>

      {/* Features */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"28px", textAlign:"left" }}>
        {[
          { icon:"⚡", text:"Hasil instan, tanpa tunggu" },
          { icon:"💯", text:"Harga transparan & jujur" },
          { icon:"🔒", text:"Tidak perlu daftar/login" },
          { icon:"💬", text:"Gratis konsultasi lanjutan" },
        ].map(f=>(
          <div key={f.text} style={{ display:"flex", alignItems:"center", gap:"9px", padding:"11px 14px", background:CARD, border:`1px solid ${BOR}`, borderRadius:"10px" }}>
            <span style={{ fontSize:"16px" }}>{f.icon}</span>
            <span style={{ color:MUT, fontSize:"12px", fontWeight:500 }}>{f.text}</span>
          </div>
        ))}
      </div>

      <button onClick={()=>setStep(0)}
        style={{ width:"100%", background:`linear-gradient(135deg,${VIO2},${PINK})`, border:"none", borderRadius:"14px", color:"#fff", fontWeight:900, fontSize:"15px", padding:"16px", cursor:"pointer", boxShadow:`0 8px 32px rgba(124,58,237,0.4)`, letterSpacing:"0.02em" }}>
        Mulai Hitung Sekarang →
      </button>

      <div style={{ display:"flex", justifyContent:"center", gap:"20px", marginTop:"20px", flexWrap:"wrap" }}>
        {["100+ klien","Respon < 1 jam","Garansi revisi"].map(t=>(
          <span key={t} style={{ color:MUT, fontSize:"11px" }}>✓ {t}</span>
        ))}
      </div>

      {/* Portfolio info box */}
      <div style={{ marginTop:"28px", background:"linear-gradient(135deg,rgba(124,58,237,0.12),rgba(236,72,153,0.08))", border:`1px solid rgba(139,92,246,0.25)`, borderRadius:"20px", padding:"20px 22px" }}>
        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:"16px" }}>
          <div style={{ color:TEXT, fontWeight:900, fontSize:"14px", marginBottom:"4px" }}>
            Belum yakin dengan kualitas kami?
          </div>
          <div style={{ color:MUT, fontSize:"11px", marginBottom:"14px" }}>Lihat demo website live yang sudah kami buat</div>
          <Link href="/"
            style={{ textDecoration:"none", display:"inline-block", background:`linear-gradient(135deg,${VIO2},${PINK})`, color:"#fff", fontWeight:700, fontSize:"12px", padding:"9px 22px", borderRadius:"20px", boxShadow:`0 4px 14px rgba(124,58,237,0.35)` }}>
            Lihat Semua Portofolio →
          </Link>
        </div>

        {/* Category previews */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"8px" }}>
          {[
            { icon:"📄", label:"Landing Page",  desc:"Berbagai industri",  color:"#a78bfa" },
            { icon:"📊", label:"Dashboard",     desc:"Web App interaktif", color:"#ec4899" },
            { icon:"🌐", label:"Multi Bahasa",  desc:"Indonesia & Inggris",color:"#06b6d4" },
          ].map(c=>(
            <div key={c.label} style={{ background:"rgba(255,255,255,0.05)", border:`1px solid rgba(255,255,255,0.08)`, borderRadius:"12px", padding:"10px 8px", textAlign:"center", minWidth:0 }}>
              <div style={{ fontSize:"20px", marginBottom:"4px" }}>{c.icon}</div>
              <div style={{ color:c.color, fontWeight:700, fontSize:"10px", wordBreak:"break-word", lineHeight:1.3 }}>{c.label}</div>
              <div style={{ color:MUT, fontSize:"9px", marginTop:"2px", wordBreak:"break-word" }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  /* Step screen */
  return (
    <div style={{ maxWidth:"540px", margin:"0 auto", padding:"24px 16px 80px" }}>

      {/* Progress */}
      <div style={{ marginBottom:"24px" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"8px" }}>
          <span style={{ color:MUT, fontSize:"12px" }}>Langkah {step+1} dari {STEPS.length}</span>
          <span style={{ color:VIO, fontSize:"12px", fontWeight:700 }}>{Math.round(progress+20)}%</span>
        </div>
        <div style={{ height:"4px", background:"rgba(255,255,255,0.06)", borderRadius:"2px", overflow:"hidden" }}>
          <div style={{ height:"100%", width:`${progress+20}%`, background:`linear-gradient(to right,${VIO2},${PINK})`, borderRadius:"2px", transition:"width 0.4s ease" }}/>
        </div>
        <div style={{ display:"flex", justifyContent:"center", gap:"5px", marginTop:"10px" }}>
          {STEPS.map((_,i)=>(
            <div key={i} style={{ height:"5px", borderRadius:"3px", background:i<step?"rgba(139,92,246,0.4)":i===step?VIO:"rgba(255,255,255,0.08)", width:i===step?"20px":"7px", transition:"all 0.3s" }}/>
          ))}
        </div>
      </div>

      {/* Step card */}
      <div style={{ background:"rgba(255,255,255,0.03)", border:`1px solid ${BOR}`, borderRadius:"20px", overflow:"hidden", boxShadow:"0 8px 32px rgba(0,0,0,0.3)" }}>
        {/* Header */}
        <div style={{ background:`linear-gradient(135deg,rgba(124,58,237,0.15),rgba(236,72,153,0.08))`, borderBottom:`1px solid ${BOR}`, padding:"20px 22px" }}>
          <div style={{ color:VIO, fontSize:"10px", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:"4px" }}>
            Pertanyaan {step+1}/{STEPS.length}
          </div>
          <h2 style={{ color:TEXT, fontWeight:900, fontSize:"18px", marginBottom:"3px", letterSpacing:"-0.01em" }}>{curStep.title}</h2>
          <p style={{ color:MUT, fontSize:"12px" }}>{curStep.subtitle}</p>
        </div>

        {/* Options */}
        <div style={{ padding:"14px", display:"flex", flexDirection:"column", gap:"8px" }}>
          {curStep.options.map(opt=>{
            const isSel = curStep.multi
              ? (answers[curStep.id]||[]).includes(opt.val)
              : answers[curStep.id]===opt.val;
            return (
              <button key={opt.val} onClick={()=>select(opt.val)}
                style={{ display:"flex", alignItems:"center", gap:"14px", padding:"14px 16px", borderRadius:"12px", border:`2px solid ${isSel?"rgba(139,92,246,0.5)":"rgba(255,255,255,0.07)"}`, background:isSel?"rgba(139,92,246,0.1)":"rgba(255,255,255,0.02)", cursor:"pointer", textAlign:"left", transition:"all 0.15s", position:"relative" }}
                onMouseEnter={e=>{ if(!isSel){ e.currentTarget.style.borderColor="rgba(255,255,255,0.15)"; e.currentTarget.style.background="rgba(255,255,255,0.05)"; }}}
                onMouseLeave={e=>{ if(!isSel){ e.currentTarget.style.borderColor="rgba(255,255,255,0.07)"; e.currentTarget.style.background="rgba(255,255,255,0.02)"; }}}>

                {/* Tag badge */}
                {opt.tag && (
                  <div style={{ position:"absolute", top:"8px", right:"10px" }}>
                    <span style={{ background:"rgba(236,72,153,0.2)", color:PINK, fontSize:"9px", fontWeight:700, padding:"2px 7px", borderRadius:"20px", border:"1px solid rgba(236,72,153,0.3)" }}>{opt.tag}</span>
                  </div>
                )}

                <span style={{ fontSize:"26px", flexShrink:0 }}>{opt.emoji}</span>
                <div style={{ flex:1 }}>
                  <div style={{ color:isSel?TEXT:"rgba(240,244,255,0.8)", fontWeight:700, fontSize:"13px" }}>{opt.label}</div>
                  <div style={{ color:MUT, fontSize:"11px", marginTop:"2px" }}>{opt.desc||opt.note}</div>
                  {opt.add>0 && <div style={{ color:VIO, fontSize:"10px", fontWeight:700, marginTop:"2px" }}>+{fmt(opt.add)}</div>}
                  {opt.add===0 && opt.desc && curStep.multi && <div style={{ color:"#10b981", fontSize:"10px", fontWeight:700, marginTop:"2px" }}>Gratis ✓</div>}
                </div>
                {isSel && (
                  <div style={{ width:"22px", height:"22px", borderRadius:"50%", background:VIO, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <span style={{ color:"#fff", fontSize:"11px", fontWeight:900 }}>✓</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Multi-select next */}
        {curStep.multi && (
          <div style={{ padding:"0 14px 14px" }}>
            <button onClick={next}
              style={{ width:"100%", background:`linear-gradient(135deg,${VIO2},${PINK})`, border:"none", borderRadius:"10px", color:"#fff", fontWeight:700, fontSize:"14px", padding:"13px", cursor:"pointer", boxShadow:`0 4px 16px rgba(124,58,237,0.3)` }}>
              {(answers[curStep.id]||[]).length===0
                ? "Lanjut Tanpa Fitur Tambahan →"
                : `Lanjut · ${(answers[curStep.id]||[]).length} fitur dipilih →`}
            </button>
          </div>
        )}
      </div>

      {/* Back */}
      <div style={{ display:"flex", justifyContent:"center", marginTop:"16px" }}>
        <button onClick={()=>step>0?setStep(s=>s-1):setStep(-1)}
          style={{ background:"none", border:"none", color:MUT, fontSize:"12px", cursor:"pointer", display:"flex", alignItems:"center", gap:"4px" }}>
          ← {step>0?"Kembali":"Mulai Ulang"}
        </button>
      </div>
    </div>
  );
}
