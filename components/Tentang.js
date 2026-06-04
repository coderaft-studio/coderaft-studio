const skills = [
  { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
  { label: "Backend", items: ["Node.js", "Express", "Laravel", "REST API"] },
  { label: "Database", items: ["MySQL", "PostgreSQL", "MongoDB", "Prisma"] },
  { label: "Tools", items: ["Git", "Vercel", "Docker", "Figma"] },
];

export default function Tentang() {
  return (
    <section id="tentang" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-violet-400 font-semibold tracking-widest uppercase text-sm mb-3">Tentang Kami</p>
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
            Full-Stack Developer<br />
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Siap Eksekusi</span>
          </h2>
          <p className="text-slate-400 leading-relaxed mb-5">
            Coderaft Studio adalah freelance developer berpengalaman yang fokus membantu
            bisnis dan individu hadir di dunia digital dengan solusi yang tepat sasaran,
            clean code, dan delivery yang cepat.
          </p>
          <p className="text-slate-400 leading-relaxed mb-8">
            Bukan sekadar template — setiap project kami kerjakan custom sesuai kebutuhan
            klien, dengan komunikasi yang transparan dari awal hingga selesai.
          </p>

          <div className="flex flex-wrap gap-3">
            {["Fast Delivery", "Clean Code", "Revisi Friendly", "Support Aktif", "Harga Transparan"].map((t) => (
              <span key={t} className="bg-violet-950/60 border border-violet-800/40 text-violet-300 text-xs px-4 py-2 rounded-full font-medium">
                ✓ {t}
              </span>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-4">
          {skills.map((s) => (
            <div key={s.label} className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-5">
              <h4 className="text-violet-400 font-bold text-sm mb-3 uppercase tracking-wide">{s.label}</h4>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span key={item} className="bg-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-lg border border-slate-700">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
