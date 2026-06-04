"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#layanan", label: "Layanan" },
  { href: "#portofolio", label: "Portofolio" },
  { href: "#harga", label: "Harga" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/95 backdrop-blur shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-bold text-xl text-white tracking-tight flex items-center gap-2">
          <span className="w-7 h-7 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center text-xs font-black">C</span>
          Coderaft<span className="text-violet-400">Studio</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">{l.label}</a>
          ))}
          <a href="https://fastwork.id/user/coderaft" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-violet-900/30">
            Order di Fastwork
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-slate-950 border-t border-slate-800 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-slate-300 hover:text-white font-medium">{l.label}</a>
          ))}
          <a href="https://fastwork.id/user/coderaft" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-5 py-2 rounded-full text-center font-bold">
            Order di Fastwork
          </a>
        </nav>
      )}
    </header>
  );
}
