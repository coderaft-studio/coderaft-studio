export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#06040f] flex items-center overflow-hidden">
      {/* Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(ellipse,#7c3aed,transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle,#ec4899,transparent 70%)" }} />
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: "linear-gradient(rgba(124,58,237,1) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,1) 1px,transparent 1px)", backgroundSize: "72px 72px" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-bold"
              style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.25)", color: "#a78bfa" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse inline-block" />
              Open for Projects · Fast Delivery
            </div>

            <h1 className="font-black mb-5 text-white"
              style={{ fontSize: "clamp(2.8rem,8vw,5.5rem)", letterSpacing: "-0.04em", lineHeight: "1.05" }}>
              Kami Bangun<br />
              <span style={{ background: "linear-gradient(135deg,#a78bfa,#ec4899,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Website
              </span><br />
              yang Bekerja.
            </h1>

            <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: "rgba(240,244,255,0.5)", maxWidth: "480px" }}>
              Banyak website tampak bagus — tapi tidak menghasilkan.
              Kami bangun website yang <span style={{ color: "rgba(240,244,255,0.85)", fontWeight: 600 }}>bekerja keras untuk bisnis Anda</span>:
              cepat, bersih, dan nyata dampaknya.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#portofolio"
                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-black text-base sm:text-lg text-white transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg,#7c3aed,#ec4899)", boxShadow: "0 0 40px rgba(124,58,237,0.35)" }}>
                Lihat Portofolio
              </a>
              <a href="#kontak"
                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(240,244,255,0.7)" }}>
                Diskusi →
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-6 sm:gap-8">
              {[{ num: "50+", label: "Project" }, { num: "<7hr", label: "Delivery" }, { num: "100%", label: "Puas" }].map(s => (
                <div key={s.label}>
                  <div className="text-xl sm:text-2xl font-black"
                    style={{ background: "linear-gradient(135deg,#a78bfa,#f0abfc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {s.num}
                  </div>
                  <div className="text-xs font-medium" style={{ color: "rgba(240,244,255,0.35)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — hidden on mobile */}
          <div className="hidden lg:block relative h-[480px]">
            <div className="absolute top-8 left-0 right-16 rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(124,58,237,0.2)", backdropFilter: "blur(12px)" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-xs ml-2" style={{ color: "rgba(240,244,255,0.3)" }}>coderaft-studio.vercel.app</span>
              </div>
              <div className="h-2.5 rounded-full mb-3 w-3/4" style={{ background: "linear-gradient(90deg,#7c3aed,#ec4899)" }} />
              <div className="h-2.5 rounded-full mb-3 w-full" style={{ background: "rgba(255,255,255,0.06)" }} />
              <div className="h-2.5 rounded-full w-5/6" style={{ background: "rgba(255,255,255,0.06)" }} />
              <div className="mt-5 grid grid-cols-3 gap-3">
                {["#7c3aed","#ec4899","#06b6d4"].map((c,i) => (
                  <div key={i} className="h-16 rounded-xl" style={{ background: `${c}20`, border: `1px solid ${c}30` }} />
                ))}
              </div>
            </div>
            <div className="absolute bottom-32 -left-4 px-4 py-3 rounded-2xl shadow-2xl"
              style={{ background: "rgba(124,58,237,0.9)", backdropFilter: "blur(12px)" }}>
              <div className="text-white text-xs font-bold">✓ Deployed to Vercel</div>
              <div className="text-violet-200 text-xs">2 minutes ago</div>
            </div>
            <div className="absolute bottom-12 right-0 px-4 py-3 rounded-2xl shadow-2xl"
              style={{ background: "rgba(6,4,15,0.9)", border: "1px solid rgba(236,72,153,0.3)", backdropFilter: "blur(12px)" }}>
              <div className="text-white text-xs font-bold">📈 Traffic +340%</div>
              <div className="text-slate-400 text-xs">after launch</div>
            </div>
            <div className="absolute top-1/2 -right-4 px-4 py-3 rounded-2xl shadow-2xl"
              style={{ background: "rgba(6,4,15,0.9)", border: "1px solid rgba(16,185,129,0.3)", backdropFilter: "blur(12px)" }}>
              <div className="text-emerald-400 text-xs font-bold">⚡ 99 Lighthouse</div>
              <div className="text-slate-400 text-xs">Performance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
