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
    { href:"/blog",   label:"Blog" },
    { href:"/tools",  label:"Tools Gratis" },
    { href:"/hitung", label:"Hitung Harga" },
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
        <div className="hidden sm:flex items-center gap-1">
          {links.map(l=>(
            <Link key={l.href} href={l.href}
              style={{ textDecoration:"none", padding:"6px 14px", borderRadius:"20px", fontSize:"13px", fontWeight:600,
                background:isActive(l.href)?`rgba(139,92,246,0.15)`:"transparent",
                color:isActive(l.href)?VIO:MUT,
                border:isActive(l.href)?`1px solid rgba(139,92,246,0.3)`:"1px solid transparent",
              }}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link href="/"
            style={{ textDecoration:"none", fontSize:"12px", fontWeight:600, color:MUT }}>
            ← Portfolio
          </Link>
        </div>
      </div>
    </nav>
  );
}
