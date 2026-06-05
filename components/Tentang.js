const skills = [
  { label: "Frontend", color: "#a78bfa", items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
  { label: "Backend",  color: "#67e8f9", items: ["Node.js", "Express", "Laravel", "REST API"] },
  { label: "Database", color: "#86efac", items: ["MySQL", "PostgreSQL", "MongoDB", "Prisma"] },
  { label: "Tools",    color: "#fda4af", items: ["Git", "Vercel", "Docker", "Figma"] },
];

const values = [
  { icon: "⚡", label: "Fast Delivery" },
  { icon: "🧹", label: "Clean Code" },
  { icon: "🔄", label: "Revisi Friendly" },
  { icon: "💬", label: "Support Aktif" },
  { icon: "💰", label: "Harga Transparan" },
];

export default function Tentang() {
  return (
    <section id="tentang" className="py-24" style={{ background: "#0a0612" }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-black tracking-widest mb-3" style={{ color: "#a78bfa", letterSpacing: "0.2em" }}>TENTANG</p>
          <h2 className="font-black text-white mb-4" style={{ fontSize: "clamp(2.5rem,5vw,4rem)", letterSpacing: "-0.03em" }}>
            Full-Stack Developer<br />
            <span style={{ background: "linear-gradient(135deg,#a78bfa,#ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Siap Eksekusi.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left — Text + Values */}
          <div>
            <p className="text-lg leading-relaxed mb-5" style={{ color: "rgba(240,244,255,0.6)" }}>
              Coderaft Studio adalah freelance developer berpengalaman yang fokus membantu
              bisnis dan individu hadir di dunia digital dengan solusi yang tepat sasaran,
              clean code, dan delivery yang cepat.
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: "rgba(240,244,255,0.4)" }}>
              Bukan sekadar template — setiap project kami kerjakan custom sesuai kebutuhan
              klien, dengan komunikasi transparan dari awal hingga selesai.
            </p>

            {/* Values */}
            <div className="flex flex-wrap gap-3">
              {values.map(v => (
                <div key={v.label} className="flex items-center gap-2 px-4 py-2.5 rounded-full"
                  style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.18)" }}>
                  <span className="text-base">{v.icon}</span>
                  <span className="text-sm font-semibold" style={{ color: "#c4b5fd" }}>{v.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Big stat */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "50+", label: "Project Selesai", sub: "web & app", color: "#a78bfa" },
              { num: "98%", label: "Klien Puas", sub: "repeat order", color: "#67e8f9" },
              { num: "< 7", label: "Hari Delivery", sub: "rata-rata", color: "#f0abfc" },
              { num: "3+", label: "Tahun", sub: "pengalaman", color: "#86efac" },
            ].map(s => (
              <div key={s.label} className="rounded-2xl p-6 flex flex-col justify-between"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", minHeight: "120px" }}>
                <div className="text-4xl font-black" style={{ color: s.color, lineHeight: 1 }}>{s.num}</div>
                <div>
                  <div className="font-bold text-white text-sm">{s.label}</div>
                  <div className="text-xs" style={{ color: "rgba(240,244,255,0.3)" }}>{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map(s => (
            <div key={s.label} className="rounded-2xl p-5"
              style={{ background: "rgba(255,255,255,0.025)", border: `1px solid ${s.color}15` }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ background: s.color }} />
                <h4 className="font-black text-sm uppercase tracking-widest" style={{ color: s.color }}>{s.label}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map(item => (
                  <span key={item} className="text-xs px-3 py-1.5 rounded-lg font-medium"
                    style={{ background: `${s.color}10`, color: s.color, border: `1px solid ${s.color}20` }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
