// SVG portrait illustrations for each CEO warrior
// Geometric / stylised — Phase 1 visual identity

export function ArjunPortrait({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="40" fill="#fef3c7"/>
      {/* Body */}
      <ellipse cx="40" cy="58" rx="18" ry="14" fill="#d97706"/>
      {/* Armour plates */}
      <rect x="26" y="50" width="10" height="16" rx="2" fill="#b45309"/>
      <rect x="44" y="50" width="10" height="16" rx="2" fill="#b45309"/>
      {/* Head */}
      <circle cx="40" cy="30" r="13" fill="#fbbf24"/>
      {/* Helmet */}
      <path d="M27 30 Q40 10 53 30" fill="#92400e"/>
      <rect x="37" y="12" width="6" height="10" rx="1" fill="#d97706"/>
      {/* Eyes */}
      <circle cx="35" cy="30" r="2.5" fill="#1c1917"/>
      <circle cx="45" cy="30" r="2.5" fill="#1c1917"/>
      <circle cx="36" cy="29" r="1" fill="white"/>
      <circle cx="46" cy="29" r="1" fill="white"/>
      {/* Bow */}
      <path d="M58 20 Q70 40 58 60" stroke="#92400e" strokeWidth="3" fill="none"/>
      <line x1="58" y1="20" x2="58" y2="60" stroke="#d97706" strokeWidth="1.5" strokeDasharray="3 2"/>
      {/* Arrow */}
      <line x1="40" y1="38" x2="66" y2="35" stroke="#b45309" strokeWidth="2"/>
      <polygon points="66,35 60,32 60,38" fill="#b45309"/>
    </svg>
  )
}

export function SakuraPortrait({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="40" fill="#fce7f3"/>
      {/* Saree flow */}
      <ellipse cx="40" cy="60" rx="20" ry="16" fill="#ec4899"/>
      <path d="M20 55 Q30 45 40 55 Q50 65 60 55 L60 72 Q40 78 20 72Z" fill="#be185d"/>
      {/* Body */}
      <ellipse cx="40" cy="48" rx="14" ry="12" fill="#f9a8d4"/>
      {/* Head */}
      <circle cx="40" cy="28" r="13" fill="#fbbf24"/>
      {/* Hair */}
      <path d="M27 22 Q40 8 53 22 Q55 35 50 38 Q40 42 30 38 Q25 35 27 22Z" fill="#1c1917"/>
      {/* Bun */}
      <circle cx="40" cy="12" r="6" fill="#1c1917"/>
      <circle cx="40" cy="12" r="3" fill="#ec4899"/>
      {/* Eyes */}
      <ellipse cx="35" cy="28" rx="3" ry="2.5" fill="#1c1917"/>
      <ellipse cx="45" cy="28" rx="3" ry="2.5" fill="#1c1917"/>
      <circle cx="36" cy="27" r="1" fill="white"/>
      <circle cx="46" cy="27" r="1" fill="white"/>
      {/* Cherry blossoms */}
      <circle cx="18" cy="35" r="4" fill="#fda4af" opacity="0.7"/>
      <circle cx="62" cy="28" r="3" fill="#fda4af" opacity="0.7"/>
      <circle cx="65" cy="50" r="3.5" fill="#fda4af" opacity="0.5"/>
      {/* Veena hint */}
      <ellipse cx="22" cy="52" rx="4" ry="8" fill="#be185d"/>
      <line x1="22" y1="44" x2="22" y2="60" stroke="#9d174d" strokeWidth="1.5"/>
    </svg>
  )
}

export function CipherPortrait({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="40" fill="#ede9fe"/>
      {/* Dark robe */}
      <ellipse cx="40" cy="60" rx="22" ry="18" fill="#1e1b4b"/>
      <path d="M18 55 L40 42 L62 55 L65 75 L15 75Z" fill="#312e81"/>
      {/* Fox tails */}
      <path d="M55 52 Q70 45 72 55 Q70 65 60 60" fill="#f5f3ff" opacity="0.9"/>
      <path d="M57 58 Q75 55 74 65 Q70 72 62 66" fill="#f5f3ff" opacity="0.7"/>
      <path d="M53 63 Q68 65 66 74 Q62 78 56 72" fill="#f5f3ff" opacity="0.5"/>
      {/* Body */}
      <ellipse cx="40" cy="48" rx="14" ry="11" fill="#4c1d95"/>
      {/* Head */}
      <circle cx="40" cy="28" r="13" fill="#fbbf24"/>
      {/* Fox ears */}
      <polygon points="28,18 24,8 34,16" fill="#f5f3ff"/>
      <polygon points="52,18 56,8 46,16" fill="#f5f3ff"/>
      <polygon points="29,17 26,10 34,16" fill="#fda4af"/>
      <polygon points="51,17 54,10 46,16" fill="#fda4af"/>
      {/* Special eye — probability matrix */}
      <circle cx="35" cy="28" r="3" fill="#1e1b4b"/>
      <circle cx="35" cy="28" r="1.5" fill="#8b5cf6"/>
      <circle cx="45" cy="28" r="3" fill="#1e1b4b"/>
      {/* Probability eye glow */}
      <circle cx="45" cy="28" r="4" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.8"/>
      <circle cx="45" cy="28" r="1.5" fill="#a78bfa"/>
      {/* Floating numbers */}
      <text x="62" y="22" fontSize="6" fill="#8b5cf6" opacity="0.8" fontFamily="monospace">2.1</text>
      <text x="8" y="45" fontSize="5" fill="#8b5cf6" opacity="0.6" fontFamily="monospace">∑</text>
      <text x="12" y="30" fontSize="6" fill="#8b5cf6" opacity="0.5" fontFamily="monospace">π</text>
    </svg>
  )
}

export function PixelPortrait({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="40" fill="#fefce8"/>
      {/* Treasure bag */}
      <ellipse cx="62" cy="55" rx="10" ry="12" fill="#ca8a04"/>
      <circle cx="62" cy="43" r="5" fill="#eab308"/>
      <text x="58" y="57" fontSize="9" fill="#fef9c3">¥</text>
      {/* Flowing robes */}
      <ellipse cx="40" cy="60" rx="20" ry="16" fill="#eab308"/>
      <path d="M20 55 Q30 50 40 56 Q50 62 60 55 L62 74 L18 74Z" fill="#ca8a04"/>
      {/* Body */}
      <ellipse cx="40" cy="48" rx="14" ry="11" fill="#fde68a"/>
      {/* Head */}
      <circle cx="40" cy="28" r="13" fill="#fbbf24"/>
      {/* Crown */}
      <path d="M27 22 L30 14 L35 20 L40 12 L45 20 L50 14 L53 22Z" fill="#ca8a04"/>
      <circle cx="40" cy="13" r="3" fill="#ef4444"/>
      <circle cx="30" cy="15" r="2" fill="#3b82f6"/>
      <circle cx="50" cy="15" r="2" fill="#10b981"/>
      {/* Eyes — happy */}
      <path d="M33 27 Q35 25 37 27" stroke="#1c1917" strokeWidth="1.5" fill="none"/>
      <path d="M43 27 Q45 25 47 27" stroke="#1c1917" strokeWidth="1.5" fill="none"/>
      {/* Smile */}
      <path d="M35 33 Q40 37 45 33" stroke="#92400e" strokeWidth="2" fill="none"/>
      {/* Floating coins */}
      <circle cx="14" cy="38" r="5" fill="#eab308" stroke="#ca8a04" strokeWidth="1"/>
      <text x="11" y="41" fontSize="6" fill="#92400e">¥</text>
      <circle cx="68" cy="32" r="4" fill="#eab308" stroke="#ca8a04" strokeWidth="1"/>
    </svg>
  )
}

export function EchoPortrait({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="40" fill="#d1fae5"/>
      {/* Translucent body — slightly ghostly */}
      <ellipse cx="40" cy="58" rx="18" ry="15" fill="#6ee7b7" opacity="0.6"/>
      <path d="M22 53 Q40 45 58 53 L60 72 L20 72Z" fill="#34d399" opacity="0.5"/>
      {/* Musical notes floating */}
      <text x="12" y="25" fontSize="14" fill="#059669" opacity="0.7">♪</text>
      <text x="58" y="20" fontSize="12" fill="#059669" opacity="0.6">♫</text>
      <text x="65" y="48" fontSize="10" fill="#059669" opacity="0.4">♩</text>
      <text x="8" y="55" fontSize="8" fill="#059669" opacity="0.5">♬</text>
      {/* Notes transforming to coins */}
      <circle cx="20" cy="15" r="5" fill="#eab308" opacity="0.5"/>
      <text x="17" y="18" fontSize="6" fill="#92400e" opacity="0.7">¥</text>
      {/* Head — ethereal glow */}
      <circle cx="40" cy="40" r="14" fill="#a7f3d0" opacity="0.4"/>
      <circle cx="40" cy="28" r="13" fill="#6ee7b7" opacity="0.9"/>
      {/* Hair — flowing */}
      <path d="M27 20 Q40 6 53 20 Q56 28 54 34 Q48 40 40 38 Q32 40 26 34 Q24 28 27 20Z" fill="#059669" opacity="0.8"/>
      {/* Eyes — soft, dreamy */}
      <ellipse cx="35" cy="29" rx="3" ry="2" fill="#064e3b" opacity="0.8"/>
      <ellipse cx="45" cy="29" rx="3" ry="2" fill="#064e3b" opacity="0.8"/>
      <circle cx="36" cy="28" r="1" fill="white" opacity="0.9"/>
      <circle cx="46" cy="28" r="1" fill="white" opacity="0.9"/>
      {/* Out-of-phase glow ring */}
      <circle cx="40" cy="28" r="17" fill="none" stroke="#6ee7b7" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6"/>
    </svg>
  )
}

export function AtlasPortrait({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="40" fill="#dbeafe"/>
      {/* Blueprint grid */}
      <line x1="20" y1="40" x2="60" y2="40" stroke="#93c5fd" strokeWidth="0.5" opacity="0.5"/>
      <line x1="40" y1="20" x2="40" y2="60" stroke="#93c5fd" strokeWidth="0.5" opacity="0.5"/>
      {/* Geometric structures floating */}
      <rect x="60" y="18" width="12" height="12" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.7"/>
      <polygon points="8,50 15,38 22,50" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5"/>
      <circle cx="68" cy="55" r="6" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5"/>
      {/* Body with blueprint lines */}
      <ellipse cx="40" cy="58" rx="18" ry="14" fill="#2563eb"/>
      <line x1="22" y1="50" x2="58" y2="50" stroke="#93c5fd" strokeWidth="0.8"/>
      <line x1="22" y1="56" x2="58" y2="56" stroke="#93c5fd" strokeWidth="0.8"/>
      <line x1="22" y1="62" x2="58" y2="62" stroke="#93c5fd" strokeWidth="0.8"/>
      {/* Head */}
      <circle cx="40" cy="28" r="13" fill="#bfdbfe"/>
      {/* Blueprint lines on face */}
      <line x1="27" y1="28" x2="53" y2="28" stroke="#93c5fd" strokeWidth="0.5" opacity="0.6"/>
      <line x1="40" y1="15" x2="40" y2="41" stroke="#93c5fd" strokeWidth="0.5" opacity="0.6"/>
      {/* Eyes — precise, architectural */}
      <rect x="32" y="25" width="6" height="5" rx="1" fill="#1e3a8a"/>
      <rect x="42" y="25" width="6" height="5" rx="1" fill="#1e3a8a"/>
      <rect x="33.5" y="26.5" width="3" height="2" rx="0.5" fill="#60a5fa"/>
      <rect x="43.5" y="26.5" width="3" height="2" rx="0.5" fill="#60a5fa"/>
      {/* Hands building */}
      <rect x="10" y="42" width="8" height="6" rx="1" fill="#93c5fd" opacity="0.8"/>
      <line x1="10" y1="42" x2="18" y2="42" stroke="#2563eb" strokeWidth="1"/>
      <line x1="10" y1="45" x2="18" y2="45" stroke="#2563eb" strokeWidth="0.5"/>
    </svg>
  )
}
