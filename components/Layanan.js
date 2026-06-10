const layanan = [
  { no: "01", icon: "🌐", title: "Landing Page",          desc: "Landing page modern yang dioptimalkan untuk konversi. Cocok untuk produk, bisnis, campaign, atau event.", harga: "mulai Rp 400rb", waktu: "2–3 hari", color: "#a78bfa" },
  { no: "02", icon: "🏢", title: "Company Profile",       desc: "Website company profile multi-halaman yang membangun kepercayaan dan profesionalisme bisnis Anda.",       harga: "mulai Rp 1,5 jt", waktu: "5–7 hari", color: "#67e8f9" },
  { no: "03", icon: "📊", title: "Web App & Dashboard",   desc: "Aplikasi web dengan CRUD, dashboard analytics, manajemen data, dan sistem login.",                       harga: "mulai Rp 5 jt", waktu: "14–30 hari", color: "#f0abfc" },
  { no: "04", icon: "🛒", title: "Toko Online",           desc: "E-commerce custom tanpa WordPress. Tampilan premium, checkout smooth, mudah dikelola.",                   harga: "mulai Rp 3 jt", waktu: "7–14 hari", color: "#86efac" },
  { no: "05", icon: "🔌", title: "REST API & Backend",    desc: "Backend service dan REST API untuk mendukung aplikasi mobile atau website Anda.",                         harga: "mulai Rp 2 jt", waktu: "7–14 hari", color: "#fda4af" },
  { no: "06", icon: "⚡", title: "Optimasi & Revamp",    desc: "Perbaikan performa, redesign UI, atau migrasi ke teknologi modern yang lebih cepat.",                      harga: "mulai Rp 1 jt", waktu: "3–7 hari", color: "#fcd34d" },
];

export default function Layanan() {
  return (
    <section id="layanan" className="py-16 md:py-24" style={{ background: "#0a0612" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-16">
          <div>
            <p className="text-xs font-black tracking-widest mb-3" style={{ color: "#a78bfa", letterSpacing: "0.2em" }}>LAYANAN</p>
            <h2 className="font-black leading-tight text-white" style={{ fontSize: "clamp(2rem,6vw,4rem)", letterSpacing: "-0.03em" }}>
              Apa yang<br />Kami Kerjakan
            </h2>
          </div>
          <p className="text-sm md:text-base max-w-sm" style={{ color: "rgba(240,244,255,0.4)" }}>
            Full-stack web development dari A sampai Z.
          </p>
        </div>

        <div className="space-y-0 overflow-hidden rounded-2xl md:rounded-3xl"
          style={{ border: "1px solid rgba(124,58,237,0.12)" }}>
          {layanan.map((l, i) => (
            <div key={l.no}
              className="group transition-all"
              style={{ cursor:"default", borderBottom: i < layanan.length - 1 ? "1px solid rgba(124,58,237,0.08)" : "none", background: "rgba(255,255,255,0.015)" }}>

              {/* Mobile layout: stacked */}
              <div className="flex items-start gap-4 px-4 sm:px-8 py-5 md:py-6 hover:bg-violet-950/20">
                {/* Number — hidden on tiny screens */}
                <span className="hidden sm:block text-xl md:text-2xl font-black flex-shrink-0 w-10 mt-1"
                  style={{ color: "rgba(240,244,255,0.12)", fontFamily: "serif" }}>
                  {l.no}
                </span>
                {/* Icon */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-xl md:text-2xl flex-shrink-0 transition-all group-hover:scale-110"
                  style={{ background: `${l.color}12`, border: `1px solid ${l.color}20` }}>
                  {l.icon}
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-black text-base md:text-xl mb-1 transition-colors group-hover:text-violet-300 text-white">{l.title}</h3>
                  <p className="text-xs md:text-sm" style={{ color: "rgba(240,244,255,0.4)" }}>{l.desc}</p>
                  {/* Mobile: show price below desc */}
                  <div className="flex items-center gap-2 mt-2 md:hidden">
                    <span className="text-xs font-bold" style={{ color: l.color }}>{l.harga}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(240,244,255,0.3)" }}>{l.waktu}</span>
                  </div>
                </div>
                {/* Desktop meta */}
                <div className="hidden md:flex flex-col items-end gap-1.5 flex-shrink-0">
                  <span className="text-sm font-bold" style={{ color: l.color }}>{l.harga}</span>
                  <span className="text-xs px-3 py-1 rounded-full"
                    style={{ background: "rgba(255,255,255,0.05)", color: "rgba(240,244,255,0.35)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    {l.waktu}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
