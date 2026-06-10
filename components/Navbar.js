"use client";
import { useState, useEffect } from "react";
import BoatIcon from "@/components/shared/BoatIcon";

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
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? "rgba(6,4,15,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: `1px solid rgba(124,58,237,${scrolled ? 0.12 : 0})`,
        transition: "background 0.4s ease, border-color 0.4s ease",
      }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="font-black text-xl text-white flex items-center gap-2" style={{ textDecoration: "none" }}>
          <BoatIcon size={28} />
          Coderaft<span style={{ color: "#a78bfa" }}>Studio</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm font-medium transition-colors"
              style={{ color: "rgba(240,244,255,0.5)", textDecoration: "none" }}
              onMouseEnter={e => e.target.style.color = "#a78bfa"}
              onMouseLeave={e => e.target.style.color = "rgba(240,244,255,0.5)"}>
              {l.label}
            </a>
          ))}
          <a href="https://fastwork.id/user/coderaft" target="_blank" rel="noopener noreferrer"
            className="px-5 py-2 rounded-full text-sm font-bold text-white transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg,#7c3aed,#ec4899)", textDecoration: "none" }}>
            Order di Fastwork
          </a>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-white">
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden px-6 py-5 flex flex-col gap-4"
          style={{ background: "rgba(6,4,15,0.98)", borderTop: "1px solid rgba(124,58,237,0.12)" }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="font-medium" style={{ color: "rgba(240,244,255,0.6)", textDecoration: "none" }}>
              {l.label}
            </a>
          ))}
          <a href="https://fastwork.id/user/coderaft" target="_blank" rel="noopener noreferrer"
            className="text-center py-3 rounded-full font-bold text-white"
            style={{ background: "linear-gradient(135deg,#7c3aed,#ec4899)", textDecoration: "none" }}>
            Order di Fastwork
          </a>
        </nav>
      )}
    </header>
  );
}
