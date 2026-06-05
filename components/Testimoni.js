const reviews = [
  { name: "Andi Setiawan",  role: "Owner, Kafe Nusantara",        avatar: "AS", color: "#f59e0b",
    text: "Website kafe saya jadi jauh lebih profesional. Orderan via WhatsApp dari website naik 3x lipat dalam sebulan pertama. Delivery tepat waktu, komunikasi lancar!" },
  { name: "Susi Hartono",   role: "Founder, Brand Batik Nala",     avatar: "SH", color: "#6366f1",
    text: "Sangat puas! Desainnya elegan dan sesuai karakter brand kami. Proses revisi mudah dan hasilnya melebihi ekspektasi. Highly recommended!" },
  { name: "Rizky Putra",    role: "CEO, Kreasi Digital Agency",    avatar: "RP", color: "#06b6d4",
    text: "Web app dashboard yang dibuatkan sangat membantu operasional tim kami. Fitur CRUD-nya smooth, UI-nya clean, dan codenya rapi. 10/10!" },
];

export default function Testimoni() {
  return (
    <section className="py-24" style={{ background: "#06040f" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-black tracking-widest mb-3" style={{ color: "#a78bfa", letterSpacing: "0.2em" }}>TESTIMONI</p>
            <h2 className="font-black text-white" style={{ fontSize: "clamp(2.5rem,5vw,4rem)", letterSpacing: "-0.03em" }}>
              Kata<br /><span style={{ background: "linear-gradient(135deg,#a78bfa,#f0abfc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Klien Kami</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 pb-2">
            <span className="text-3xl" style={{ color: "#fbbf24" }}>★★★★★</span>
            <div>
              <div className="font-black text-white text-xl">5.0</div>
              <div className="text-xs" style={{ color: "rgba(240,244,255,0.35)" }}>Semua bintang 5</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div key={r.name} className="rounded-2xl p-7 flex flex-col justify-between transition-all hover:-translate-y-1"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", position: "relative", overflow: "hidden" }}>
              {/* Big quote mark */}
              <div className="absolute top-4 right-6 font-black text-8xl leading-none pointer-events-none select-none"
                style={{ color: `${r.color}12`, fontFamily: "serif" }}>&ldquo;</div>

              <div>
                <div className="flex gap-1 mb-5" style={{ color: "#fbbf24" }}>★★★★★</div>
                <p className="text-base leading-relaxed relative z-10" style={{ color: "rgba(240,244,255,0.65)", fontStyle: "italic" }}>
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 mt-6 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                  style={{ background: `linear-gradient(135deg,${r.color},${r.color}80)` }}>
                  {r.avatar}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{r.name}</div>
                  <div className="text-xs" style={{ color: "rgba(240,244,255,0.35)" }}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
