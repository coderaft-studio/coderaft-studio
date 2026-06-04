export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 text-slate-400">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="font-bold text-2xl text-white mb-3 flex items-center gap-2">
              <span className="w-7 h-7 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center text-xs font-black">C</span>
              Coderaft<span className="text-violet-400">Studio</span>
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-xs">
              Full-stack web developer yang membantu bisnis dan individu hadir di dunia digital dengan solusi yang tepat dan efisien.
            </p>
            <div className="flex gap-3">
              {["in", "ig", "gh", "tw"].map((s) => (
                <a key={s} href="#" className="w-9 h-9 bg-slate-800 hover:bg-violet-600 rounded-lg flex items-center justify-center text-xs font-bold transition-all uppercase">{s}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Layanan</h4>
            <ul className="space-y-2 text-sm">
              {["Landing Page", "Company Profile", "Toko Online", "Web App", "REST API"].map((l) => (
                <li key={l}><a href="#layanan" className="hover:text-violet-400 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Kontak</h4>
            <ul className="space-y-2 text-sm">
              <li>🛍 fastwork.id/user/coderaft</li>
              <li>📧 coderaft.id@gmail.com</li>
              <li>🕙 09.00–21.00 WIB</li>
              <li className="pt-2">
                <a href="https://fastwork.id/user/coderaft" target="_blank" rel="noopener noreferrer"
                  className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white px-4 py-2 rounded-lg text-xs font-bold inline-block transition-all">
                  Order di Fastwork
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 Coderaft Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-violet-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-violet-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
