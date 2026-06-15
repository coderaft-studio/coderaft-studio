"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BoatIcon from "@/components/shared/BoatIcon";

const VIO  = "#a78bfa";
const PINK = "#ec4899";
const TEXT = "#f0f4ff";
const MUT  = "rgba(240,244,255,0.4)";
const BOR  = "rgba(139,92,246,0.15)";

export default function SharedNav() {
  const path     = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href:"/blog",   label:"Blog",         icon:"📚", badge:null    },
    { href:"/tools",  label:"Tools Gratis", icon:"🛠",  badge:"Gratis" },
    { href:"/hitung", label:"Hitung Harga", icon:"🧮",  badge:"Baru"  },
  ];

  const isActive = (href) => path.startsWith(href);

  return (
    <nav style={{ background:"rgba(7,7,17,0.95)", backdropFilter:"blur(20px)", borderBottom:`1px solid ${BOR}`, position:"sticky", top:0, zIndex:50 }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ── Header row ── */}
        <div style={{ height:"64px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:"8px" }}>
            <BoatIcon size={28} />
            <span style={{ color:TEXT, fontWeight:800, fontSize:"15px" }}>
              Coderaft<span style={{ color:VIO }}> Studio</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-2">
            {links.map(l=>(
              <Link key={l.href} href={l.href}
                style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:"6px", padding:"7px 14px", borderRadius:"20px", fontSize:"12px", fontWeight:700, transition:"all 0.2s",
                  background:isActive(l.href)?`linear-gradient(135deg,rgba(124,58,237,0.3),rgba(236,72,153,0.2))`:"rgba(255,255,255,0.06)",
                  color:isActive(l.href)?"#fff":"rgba(240,244,255,0.75)",
                  border:isActive(l.href)?`1px solid rgba(139,92,246,0.5)`:`1px solid rgba(255,255,255,0.1)`,
                  boxShadow:isActive(l.href)?"0 0 12px rgba(124,58,237,0.2)":"none",
                }}
                onMouseEnter={e=>{ if(!isActive(l.href)){ e.currentTarget.style.background="rgba(139,92,246,0.15)"; e.currentTarget.style.color="#fff"; e.currentTarget.style.borderColor="rgba(139,92,246,0.35)"; }}}
                onMouseLeave={e=>{ if(!isActive(l.href)){ e.currentTarget.style.background="rgba(255,255,255,0.06)"; e.currentTarget.style.color="rgba(240,244,255,0.75)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.1)"; }}}>
                <span style={{ fontSize:"14px" }}>{l.icon}</span>
                <span>{l.label}</span>
                {l.badge && (
                  <span style={{ background:"rgba(236,72,153,0.2)", color:"#f9a8d4", fontSize:"9px", fontWeight:800, padding:"1px 6px", borderRadius:"10px" }}>
                    {l.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
            <Link href="/"
              style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:"6px", fontSize:"12px", fontWeight:700, color:"#fff", background:"linear-gradient(135deg,#7c3aed,#ec4899)", padding:"7px 14px", borderRadius:"20px", boxShadow:"0 0 16px rgba(124,58,237,0.3)" }}>
              <span className="hidden sm:inline">← Portfolio</span>
              <span className="sm:hidden">←</span>
            </Link>

            {/* Hamburger — mobile only */}
            <button className="sm:hidden" onClick={()=>setOpen(!open)}
              style={{ background:"rgba(255,255,255,0.06)", border:`1px solid ${BOR}`, borderRadius:"10px", padding:"8px 10px", color:TEXT, fontSize:"16px", cursor:"pointer", lineHeight:1 }}>
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* ── Mobile dropdown ── */}
        {open && (
          <div className="sm:hidden" style={{ borderTop:`1px solid ${BOR}`, paddingTop:"8px", paddingBottom:"12px" }}>
            {links.map(l=>(
              <Link key={l.href} href={l.href} onClick={()=>setOpen(false)}
                style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:"12px", padding:"11px 12px", borderRadius:"10px", marginBottom:"4px",
                  background:isActive(l.href)?`linear-gradient(135deg,rgba(124,58,237,0.2),rgba(236,72,153,0.12))`:"transparent",
                  color:isActive(l.href)?"#fff":"rgba(240,244,255,0.75)",
                  border:isActive(l.href)?`1px solid rgba(139,92,246,0.4)`:"1px solid transparent",
                }}>
                <span style={{ fontSize:"20px" }}>{l.icon}</span>
                <div style={{ flex:1 }}>
                  <div style={{ fontWeight:700, fontSize:"14px" }}>{l.label}</div>
                </div>
                {l.badge && (
                  <span style={{ background:"rgba(236,72,153,0.2)", color:"#f9a8d4", fontSize:"9px", fontWeight:800, padding:"2px 8px", borderRadius:"10px" }}>
                    {l.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
}
