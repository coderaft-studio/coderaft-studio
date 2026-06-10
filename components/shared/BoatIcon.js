export default function BoatIcon({ size = 30, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <defs>
        <linearGradient id="boat-g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7c3aed"/>
          <stop offset="100%" stopColor="#a78bfa"/>
        </linearGradient>
        <linearGradient id="boat-g2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a78bfa"/>
          <stop offset="100%" stopColor="#ec4899"/>
        </linearGradient>
      </defs>
      {/* Main sail (left) */}
      <path d="M50 14 L50 60 L20 60 Z" fill="url(#boat-g1)"/>
      {/* Jib sail (right) */}
      <path d="M50 22 L50 60 L70 60 Z" fill="url(#boat-g2)" opacity="0.85"/>
      {/* Hull */}
      <path d="M16 64 Q50 76 84 64 L79 71 Q50 83 21 71 Z" fill="url(#boat-g1)"/>
      {/* Wave 1 */}
      <path d="M10 82 Q20 77 30 82 Q40 87 50 82 Q60 77 70 82 Q80 87 90 82"
        stroke="url(#boat-g1)" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      {/* Wave 2 */}
      <path d="M20 92 Q32 87 44 92 Q56 97 68 92 Q76 88 82 92"
        stroke="url(#boat-g2)" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.55"/>
    </svg>
  );
}
