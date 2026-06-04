const layanan = [
  { icon: "🌐", title: "Landing Page", desc: "Landing page modern yang dioptimalkan untuk konversi. Cocok untuk produk, bisnis, campaign, atau event.", harga: "mulai Rp 400rb", waktu: "2–3 hari" },
  { icon: "🏢", title: "Company Profile", desc: "Website company profile multi-halaman yang membangun kepercayaan dan profesionalisme bisnis Anda.", harga: "mulai Rp 1,5 jt", waktu: "5–7 hari" },
  { icon: "🛒", title: "Toko Online / E-commerce", desc: "Toko online custom tanpa WordPress. Tampilan premium, checkout smooth, dan mudah dikelola.", harga: "mulai Rp 3 jt", waktu: "7–14 hari" },
  { icon: "📊", title: "Web App & Dashboard", desc: "Aplikasi web dengan fitur CRUD, dashboard analytics, manajemen data, dan sistem login.", harga: "mulai Rp 5 jt", waktu: "14–30 hari" },
  { icon: "🔌", title: "REST API & Backend", desc: "Backend service, REST API, dan integrasi sistem untuk mendukung aplikasi mobile atau website Anda.", harga: "mulai Rp 2 jt", waktu: "7–14 hari" },
  { icon: "⚡", title: "Optimasi & Revamp", desc: "Perbaikan performa, redesign UI, atau migrasi website lama ke teknologi modern yang lebih cepat.", harga: "mulai Rp 1 jt", waktu: "3–7 hari" },
];

export default function Layanan() {
  return (
    <section id="layanan" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-violet-400 font-semibold tracking-widest uppercase text-sm mb-3">Yang Kami Kerjakan</p>
          <h2 className="text-4xl font-bold text-white mb-4">Layanan <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Kami</span></h2>
          <p className="text-slate-400 max-w-xl mx-auto">Full-stack web development dari A sampai Z — desain, kode, deploy, dan support</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {layanan.map((l) => (
            <div key={l.title} className="bg-slate-900/50 border border-slate-800/50 hover:border-violet-700/50 rounded-2xl p-7 group transition-all hover:-translate-y-1">
              <div className="text-4xl mb-4">{l.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">{l.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{l.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <span className="text-violet-400 font-bold text-sm">{l.harga}</span>
                <span className="text-slate-500 text-xs bg-slate-800 px-3 py-1 rounded-full">{l.waktu}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
