export default function Footer() {
  return (
    <footer style={{ background: "#04030a", borderTop: "1px solid rgba(124,58,237,0.1)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 mb-8 sm:mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-black text-2xl text-white mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black text-white"
                style={{ background: "linear-gradient(135deg,#7c3aed,#ec4899)" }}>C</span>
              Coderaft<span style={{ color: "#a78bfa" }}>Studio</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-5" style={{ color: "rgba(240,244,255,0.35)" }}>
              Full-stack web developer yang membantu bisnis hadir di dunia digital dengan solusi modern yang berdampak nyata.
            </p>
            <div className="flex gap-2">
              {["in", "ig", "gh", "tw"].map(s => (
                <a key={s} href="#"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold transition-all hover:scale-110"
                  style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.15)", color: "#a78bfa" }}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-black text-sm mb-4 uppercase tracking-widest" style={{ color: "rgba(240,244,255,0.5)" }}>Layanan</h4>
            <ul className="space-y-2 text-sm">
              {["Landing Page", "Company Profile", "Toko Online", "Web App", "REST API"].map(l => (
                <li key={l}>
                  <a href="#layanan" className="transition-colors hover:text-white" style={{ color: "rgba(240,244,255,0.35)", textDecoration: "none" }}>{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resource */}
          <div>
            <h4 className="font-black text-sm mb-4 uppercase tracking-widest" style={{ color: "rgba(240,244,255,0.5)" }}>Resource</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label:"Blog UMKM Digital", href:"/blog" },
                { label:"Tools Gratis",      href:"/tools" },
                { label:"Hitung Harga",      href:"/hitung" },
              ].map(l=>(
                <li key={l.label}>
                  <a href={l.href} className="transition-colors hover:text-white" style={{ color:"rgba(240,244,255,0.35)", textDecoration:"none" }}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-black text-sm mb-4 uppercase tracking-widest" style={{ color: "rgba(240,244,255,0.5)" }}>Kontak</h4>
            <ul className="space-y-2 text-sm" style={{ color: "rgba(240,244,255,0.35)" }}>
              <li>🛍 fastwork.id/user/coderaft</li>
              <li>📧 coderaft.id@gmail.com</li>
              <li>🕙 09.00–21.00 WIB</li>
              <li className="pt-2">
                <a href="https://fastwork.id/user/coderaft" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg,#7c3aed,#ec4899)", textDecoration: "none" }}>
                  Order di Fastwork ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)", color: "rgba(240,244,255,0.2)" }}>
          <p>© 2024 Coderaft Studio. All rights reserved.</p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map(t => (
              <a key={t} href="#" className="transition-colors hover:text-white" style={{ color: "rgba(240,244,255,0.2)", textDecoration: "none" }}>{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
