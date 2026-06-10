"use client";
import { useState } from "react";

const FASTWORK_URL = "https://fastwork.id/user/coderaft";

export default function Kontak() {
  const [form, setForm] = useState({ nama: "", email: "", layanan: "", budget: "", detail: "" });
  const [sent, setSent] = useState(false);
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    window.open(FASTWORK_URL, "_blank");
    setSent(true);
  };

  return (
    <section id="kontak" className="py-16 md:py-24 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-16 items-start">
        {/* Info */}
        <div>
          <p className="text-violet-400 font-semibold tracking-widest uppercase text-sm mb-3">Mulai Project</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 sm:mb-6">
            Siap <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Kerja Sama?</span>
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Ceritakan kebutuhan Anda — kami akan balas dalam <strong className="text-white">1×24 jam</strong> dengan
            estimasi harga dan timeline yang jelas.
          </p>

          <div className="space-y-4 mb-8">
            {[
              { icon: "🛍", label: "Fastwork", val: "fastwork.id/user/coderaft" },
              { icon: "📧", label: "Email", val: "coderaft.id@gmail.com" },
              { icon: "🕙", label: "Jam Aktif", val: "Senin–Sabtu, 09.00–21.00 WIB" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-lg flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="text-slate-500 text-xs">{item.label}</div>
                  <div className="text-white font-medium text-sm">{item.val}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-violet-950/60 to-fuchsia-950/60 border border-violet-800/30 rounded-2xl p-6">
            <div className="text-violet-400 font-bold mb-2">🎯 Proses Kerja Kami</div>
            <div className="space-y-2 text-slate-400 text-sm">
              {["Brief & diskusi kebutuhan", "Proposal & estimasi harga", "Pengerjaan & update berkala", "Testing & revisi (sesuai paket)", "Serah terima & support"].map((s, i) => (
                <div key={s} className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-violet-700/50 rounded-full text-xs flex items-center justify-center text-violet-300 flex-shrink-0">{i + 1}</span>
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-slate-900/60 border border-slate-800/50 rounded-2xl sm:rounded-3xl p-5 sm:p-8">
          {sent ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Mengarahkan ke Fastwork...</h3>
              <p className="text-slate-400 text-sm">Silakan lanjutkan chat dengan kami di Fastwork.</p>
              <a href={FASTWORK_URL} target="_blank" rel="noopener noreferrer"
                className="mt-6 inline-block text-violet-400 underline text-sm">
                Buka Fastwork jika tidak otomatis terbuka
              </a>
              <br />
              <button onClick={() => setSent(false)} className="mt-3 text-slate-500 text-xs underline">Kembali</button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-2">Ceritakan Project Anda</h3>
              <p className="text-slate-400 text-xs mb-4">Isi form ini sebagai persiapan, lalu kami akan arahkan ke Fastwork untuk diskusi lebih lanjut.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { name: "nama", label: "Nama *", placeholder: "Budi Santoso" },
                  { name: "email", label: "Email *", placeholder: "budi@email.com" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-xs font-medium text-slate-400 mb-1">{f.label}</label>
                    <input required name={f.name} value={form[f.name]} onChange={handle} placeholder={f.placeholder}
                      className="w-full bg-slate-800/60 border border-slate-700/50 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all" />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Layanan yang Dibutuhkan</label>
                <select name="layanan" value={form.layanan} onChange={handle}
                  className="w-full bg-slate-800/60 border border-slate-700/50 focus:border-violet-500 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all">
                  <option value="">Pilih layanan...</option>
                  {["Landing Page", "Company Profile", "Toko Online / E-commerce", "Web App & Dashboard", "REST API & Backend", "Optimasi & Revamp"].map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Estimasi Budget</label>
                <select name="budget" value={form.budget} onChange={handle}
                  className="w-full bg-slate-800/60 border border-slate-700/50 focus:border-violet-500 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all">
                  <option value="">Pilih range budget...</option>
                  {["< Rp 500rb", "Rp 500rb – 2 jt", "Rp 2 jt – 5 jt", "Rp 5 jt – 15 jt", "> Rp 15 jt"].map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Detail Kebutuhan *</label>
                <textarea required name="detail" value={form.detail} onChange={handle} rows={3}
                  placeholder="Ceritakan kebutuhan project Anda, fitur yang diinginkan, referensi, dll."
                  className="w-full bg-slate-800/60 border border-slate-700/50 focus:border-violet-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all resize-none" />
              </div>

              <p className="text-center text-xs" style={{ color:"rgba(167,139,250,0.5)" }}>
                Belum yakin budget-nya?{" "}
                <a href="/hitung" style={{ color:"#a78bfa", fontWeight:700, textDecoration:"none" }}>
                  Hitung estimasi dulu →
                </a>
              </p>

              <button type="submit"
                className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-violet-900/30 flex items-center justify-center gap-2 cursor-pointer">
                <span>Hubungi via Fastwork</span>
                <span>🛍</span>
              </button>
              <p className="text-center text-slate-500 text-xs">Anda akan diarahkan ke profil Fastwork kami</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
