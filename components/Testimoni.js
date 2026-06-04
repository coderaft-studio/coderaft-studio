const reviews = [
  { name: "Andi Setiawan", role: "Owner, Kafe Nusantara", avatar: "AS", color: "bg-amber-600",
    text: "Website kafe saya jadi jauh lebih profesional. Orderan via WhatsApp dari website naik 3x lipat dalam sebulan pertama. Delivery tepat waktu, komunikasi lancar!" },
  { name: "Susi Hartono", role: "Founder, Brand Batik Nala", avatar: "SH", color: "bg-indigo-600",
    text: "Sangat puas! Desainnya elegan dan sesuai karakter brand kami. Proses revisi mudah dan hasilnya melebihi ekspektasi. Highly recommended!" },
  { name: "Rizky Putra", role: "CEO, Kreasi Digital Agency", avatar: "RP", color: "bg-cyan-600",
    text: "Web app dashboard yang dibuatkan sangat membantu operasional tim kami. Fitur CRUD-nya smooth, UI-nya clean, dan codenya rapi. 10/10!" },
];

export default function Testimoni() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-violet-400 font-semibold tracking-widest uppercase text-sm mb-3">Testimoni</p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Kata <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Klien Kami</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="text-yellow-400 text-2xl">★★★★★</span>
            <span className="text-white font-bold text-xl">5.0</span>
            <span className="text-slate-400 text-sm">(Semua review bintang 5)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-slate-900/50 border border-slate-800/50 hover:border-violet-700/40 rounded-2xl p-7 transition-all">
              <div className="text-yellow-400 text-lg mb-4">★★★★★</div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className={`${r.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>{r.avatar}</div>
                <div>
                  <div className="font-semibold text-white text-sm">{r.name}</div>
                  <div className="text-slate-400 text-xs">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
