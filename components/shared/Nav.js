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
  const path = usePathname();

  const links = [
    { href:"/blog",   label:"Blog",         icon:"📚", badge:null },
    { href:"/tools",  label:"Tools Gratis", icon:"🛠",  badge:"Gratis" },
    { href:"/hitung", label:"Hitung Harga", icon:"🧮",  badge:"Baru" },
  ];

  const isActive = (href) => path.startsWith(href);

  return (
    <nav style={{ background:"rgba(7,7,17,0.92)", backdropFilter:"blur(20px)", borderBottom:`1px solid ${BOR}`, position:"sticky", top:0, zIndex:50 }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:"8px" }}>
          <BoatIcon size={30} />
          <span style={{ color:TEXT, fontWeight:800, fontSize:"15px" }}>
            Coderaft<span style={{ color:VIO }}> Studio</span>
          </span>
        </Link>

        {/* Links */}
        <div className="hidden sm:flex items-center gap-2">
          {links.map(l=>(
            <Link key={l.href} href={l.href}
              style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:"6px", padding:"7px 14px", borderRadius:"20px", fontSize:"12px", fontWeight:700, transition:"all 0.2s", position:"relative",
                background:isActive(l.href)?`linear-gradient(135deg,rgba(124,58,237,0.3),rgba(236,72,153,0.2))`:"rgba(255,255,255,0.06)",
                color:isActive(l.href)?"#fff":"rgba(240,244,255,0.75)",
                border:isActive(l.href)?`1px solid rgba(139,92,246,0.5)`:`1px solid rgba(255,255,255,0.1)`,
                boxShadow:isActive(l.href)?"0 0 12px rgba(124,58,237,0.2)":"none",
              }}
              onMouseEnter={e=>{ if(!isActive(l.href)){ e.currentTarget.style.background="rgba(139,92,246,0.15)"; e.currentTarget.style.color="#fff"; e.currentTarget.style.borderColor="rgba(139,92,246,0.35)"; }}}
              onMouseLeave={e=>{ if(!isActive(l.href)){ e.currentTarget.style.background="rgba(255,255,255,0.06)"; e.currentTarget.style.color="rgba(240,244,255,0.75)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.1)"; }}}>
              <span style={{ fontSize:"14px" }}>{l.icon}</span>
              <span style={{ fontSize:"13px", fontWeight:700 }}>{l.label}</span>
              {l.badge && (
                <span style={{ background:isActive(l.href)?"rgba(236,72,153,0.3)":"rgba(236,72,153,0.2)", color:"#f9a8d4", fontSize:"9px", fontWeight:800, padding:"1px 6px", borderRadius:"10px", letterSpacing:"0.04em" }}>
                  {l.badge}
                </span>
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link href="/"
            style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:"6px", fontSize:"12px", fontWeight:700, color:"#fff", background:"linear-gradient(135deg,#7c3aed,#ec4899)", padding:"8px 18px", borderRadius:"20px", boxShadow:"0 0 16px rgba(124,58,237,0.35)", transition:"all 0.2s" }}
            onMouseEnter={e=>{ e.currentTarget.style.transform="scale(1.05)"; e.currentTarget.style.boxShadow="0 0 24px rgba(124,58,237,0.55)"; }}
            onMouseLeave={e=>{ e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.boxShadow="0 0 16px rgba(124,58,237,0.35)"; }}>
            ← Portfolio
          </Link>
        </div>
      </div>
    </nav>
  );
}
