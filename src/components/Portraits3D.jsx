// BridgeFire CEO Portraits v2 — 3D-ish SVG
// Technique: radial gradients for spherical light, specular highlights,
// rim lighting, ambient occlusion, drop shadows

export function ArjunPortrait({ size = 96 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="a-bg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#2a1a08"/>
          <stop offset="100%" stopColor="#0d0805"/>
        </radialGradient>
        <radialGradient id="a-skin" cx="38%" cy="32%" r="65%">
          <stop offset="0%" stopColor="#f5c87a"/>
          <stop offset="45%" stopColor="#d4924a"/>
          <stop offset="85%" stopColor="#9c5e20"/>
          <stop offset="100%" stopColor="#7a3e08"/>
        </radialGradient>
        <radialGradient id="a-helmet" cx="35%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#fcd34d"/>
          <stop offset="40%" stopColor="#d97706"/>
          <stop offset="80%" stopColor="#92400e"/>
          <stop offset="100%" stopColor="#5a1e00"/>
        </radialGradient>
        <radialGradient id="a-armour" cx="30%" cy="20%" r="80%">
          <stop offset="0%" stopColor="#fbbf24"/>
          <stop offset="50%" stopColor="#b45309"/>
          <stop offset="100%" stopColor="#451a03"/>
        </radialGradient>
        <radialGradient id="a-spec" cx="35%" cy="28%" r="40%">
          <stop offset="0%" stopColor="white" stopOpacity="0.55"/>
          <stop offset="100%" stopColor="white" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="a-rim" cx="95%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
        </radialGradient>
        <filter id="a-shadow">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#f59e0b" floodOpacity="0.2"/>
        </filter>
        <filter id="a-glow">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <clipPath id="a-clip"><circle cx="60" cy="60" r="56"/></clipPath>
      </defs>

      {/* Base circle */}
      <circle cx="60" cy="60" r="56" fill="url(#a-bg)" filter="url(#a-shadow)"/>
      {/* Rim light from right */}
      <circle cx="60" cy="60" r="56" fill="url(#a-rim)"/>

      {/* Body / armour */}
      <ellipse cx="60" cy="96" rx="36" ry="22" fill="url(#a-armour)" clipPath="url(#a-clip)"/>
      {/* Armour chest plate highlights */}
      <ellipse cx="52" cy="86" rx="8" ry="5" fill="#fcd34d" opacity="0.3" clipPath="url(#a-clip)"/>

      {/* Neck */}
      <rect x="52" y="70" width="16" height="14" rx="4" fill="url(#a-skin)" clipPath="url(#a-clip)"/>
      {/* AO under neck */}
      <ellipse cx="60" cy="84" rx="9" ry="3" fill="black" opacity="0.3" clipPath="url(#a-clip)"/>

      {/* Head */}
      <ellipse cx="60" cy="52" rx="26" ry="28" fill="url(#a-skin)"/>
      {/* Specular on cheek */}
      <ellipse cx="60" cy="52" rx="26" ry="28" fill="url(#a-spec)"/>

      {/* Helmet — angular warrior style */}
      <path d="M34 46 Q36 20 60 18 Q84 20 86 46 L80 42 Q76 28 60 26 Q44 28 40 42Z" fill="url(#a-helmet)"/>
      {/* Helmet crest */}
      <rect x="57" y="14" width="6" height="16" rx="2" fill="#fcd34d"/>
      <polygon points="60,8 55,16 65,16" fill="#fcd34d"/>
      {/* Helmet side guards */}
      <path d="M34 46 L32 60 Q34 64 38 62 L40 46" fill="#b45309" opacity="0.8"/>
      <path d="M86 46 L88 60 Q86 64 82 62 L80 46" fill="#b45309" opacity="0.8"/>
      {/* Helmet highlight */}
      <ellipse cx="50" cy="28" rx="10" ry="5" fill="white" opacity="0.2" transform="rotate(-20 50 28)"/>

      {/* Brow ridge AO */}
      <ellipse cx="60" cy="46" rx="18" ry="4" fill="black" opacity="0.15"/>

      {/* Eyes */}
      <ellipse cx="50" cy="52" rx="5" ry="4" fill="#1a0a00"/>
      <ellipse cx="70" cy="52" rx="5" ry="4" fill="#1a0a00"/>
      {/* Iris */}
      <circle cx="50" cy="52" r="3" fill="#3d1a00"/>
      <circle cx="70" cy="52" r="3" fill="#3d1a00"/>
      {/* Eye whites catch light */}
      <circle cx="52" cy="50" r="1.2" fill="white" opacity="0.8"/>
      <circle cx="72" cy="50" r="1.2" fill="white" opacity="0.8"/>
      {/* Determined brows */}
      <path d="M43 46 Q50 43 57 46" stroke="#5c2800" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M63 46 Q70 43 77 46" stroke="#5c2800" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

      {/* Nose */}
      <path d="M58 55 Q60 63 62 55" stroke="#9c5e20" strokeWidth="1.5" fill="none"/>
      {/* Nose AO */}
      <ellipse cx="60" cy="65" rx="6" ry="2" fill="black" opacity="0.12"/>

      {/* Stern mouth */}
      <path d="M50 68 Q60 70 70 68" stroke="#7a3e08" strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* Bow at right edge */}
      <path d="M94 30 Q106 55 94 80" stroke="#d97706" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <line x1="94" y1="30" x2="94" y2="80" stroke="#fcd34d" strokeWidth="1" strokeDasharray="4 3" opacity="0.6"/>
      {/* Arrow */}
      <line x1="62" y1="56" x2="102" y2="50" stroke="#92400e" strokeWidth="2"/>
      <polygon points="102,50 96,46 96,54" fill="#d97706"/>

      {/* Final specular layer on face */}
      <ellipse cx="52" cy="47" rx="7" ry="9" fill="white" opacity="0.06"/>

      {/* Border glow */}
      <circle cx="60" cy="60" r="56" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.3"/>
    </svg>
  )
}

export function SakuraPortrait({ size = 96 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <defs>
        <radialGradient id="s-bg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#1a0810"/>
          <stop offset="100%" stopColor="#08040a"/>
        </radialGradient>
        <radialGradient id="s-skin" cx="40%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#fde8d0"/>
          <stop offset="45%" stopColor="#f0b080"/>
          <stop offset="85%" stopColor="#d47840"/>
          <stop offset="100%" stopColor="#a84e20"/>
        </radialGradient>
        <radialGradient id="s-hair" cx="35%" cy="20%" r="75%">
          <stop offset="0%" stopColor="#2a1a28"/>
          <stop offset="60%" stopColor="#0f080f"/>
          <stop offset="100%" stopColor="#050305"/>
        </radialGradient>
        <radialGradient id="s-saree" cx="25%" cy="20%" r="80%">
          <stop offset="0%" stopColor="#f9a8d4"/>
          <stop offset="50%" stopColor="#ec4899"/>
          <stop offset="100%" stopColor="#9d174d"/>
        </radialGradient>
        <radialGradient id="s-spec" cx="38%" cy="25%" r="45%">
          <stop offset="0%" stopColor="white" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="white" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="s-rim" cx="90%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#ec4899" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0"/>
        </radialGradient>
        <filter id="s-shadow">
          <feDropShadow dx="0" dy="5" stdDeviation="10" floodColor="#ec4899" floodOpacity="0.2"/>
        </filter>
        <clipPath id="s-clip"><circle cx="60" cy="60" r="56"/></clipPath>
      </defs>

      <circle cx="60" cy="60" r="56" fill="url(#s-bg)" filter="url(#s-shadow)"/>
      <circle cx="60" cy="60" r="56" fill="url(#s-rim)"/>

      {/* Saree / body */}
      <ellipse cx="60" cy="97" rx="34" ry="20" fill="url(#s-saree)" clipPath="url(#s-clip)"/>
      <path d="M26 88 Q40 78 60 82 Q80 78 94 88 L94 112 L26 112Z" fill="#be185d" opacity="0.7" clipPath="url(#s-clip)"/>
      {/* Saree highlight fold */}
      <path d="M38 84 Q48 80 55 84" stroke="#f9a8d4" strokeWidth="1.5" fill="none" opacity="0.5"/>

      {/* Neck */}
      <rect x="53" y="70" width="14" height="14" rx="4" fill="url(#s-skin)" clipPath="url(#s-clip)"/>
      <ellipse cx="60" cy="84" rx="8" ry="2.5" fill="black" opacity="0.25" clipPath="url(#s-clip)"/>

      {/* Hair — full flowing back */}
      <path d="M30 38 Q28 70 32 95" stroke="#1a0d18" strokeWidth="8" fill="none" strokeLinecap="round" clipPath="url(#s-clip)"/>
      <path d="M90 38 Q92 70 88 95" stroke="#1a0d18" strokeWidth="8" fill="none" strokeLinecap="round" clipPath="url(#s-clip)"/>
      {/* Hair top mass */}
      <path d="M34 40 Q34 14 60 12 Q86 14 86 40 Q80 36 60 34 Q40 36 34 40Z" fill="url(#s-hair)"/>
      {/* Hair volume shine */}
      <path d="M42 22 Q55 18 68 22" stroke="white" strokeWidth="2" fill="none" opacity="0.15" strokeLinecap="round"/>

      {/* Hair bun */}
      <circle cx="60" cy="12" r="9" fill="url(#s-hair)"/>
      <circle cx="60" cy="12" r="5" fill="#ec4899" opacity="0.8"/>
      {/* Bun highlight */}
      <circle cx="57" cy="10" r="2.5" fill="white" opacity="0.2"/>
      {/* Hair pins */}
      <line x1="54" y1="8" x2="50" y2="2" stroke="#fcd34d" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="50" cy="2" r="1.5" fill="#fcd34d"/>

      {/* Face */}
      <ellipse cx="60" cy="50" rx="24" ry="28" fill="url(#s-skin)"/>
      <ellipse cx="60" cy="50" rx="24" ry="28" fill="url(#s-spec)"/>

      {/* Brow AO */}
      <ellipse cx="60" cy="42" rx="16" ry="3.5" fill="black" opacity="0.1"/>

      {/* Elegant brows */}
      <path d="M44 42 Q51 39 57 42" stroke="#5c2800" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <path d="M63 42 Q69 39 76 42" stroke="#5c2800" strokeWidth="1.8" fill="none" strokeLinecap="round"/>

      {/* Eyes — large, expressive */}
      <ellipse cx="50" cy="50" rx="6" ry="5" fill="#1a0a00"/>
      <ellipse cx="70" cy="50" rx="6" ry="5" fill="#1a0a00"/>
      <circle cx="50" cy="50" r="3.5" fill="#3d1500"/>
      <circle cx="70" cy="50" r="3.5" fill="#3d1500"/>
      {/* Eyelid definition */}
      <path d="M44 48 Q50 45 56 48" stroke="#1a0a00" strokeWidth="1.5" fill="none"/>
      <path d="M64 48 Q70 45 76 48" stroke="#1a0a00" strokeWidth="1.5" fill="none"/>
      {/* Catch lights */}
      <circle cx="52" cy="48" r="1.5" fill="white" opacity="0.9"/>
      <circle cx="72" cy="48" r="1.5" fill="white" opacity="0.9"/>
      <circle cx="48" cy="52" r="0.8" fill="white" opacity="0.5"/>

      {/* Nose — delicate */}
      <path d="M58 55 L57 62 Q60 64 63 62 L62 55" stroke="#c07840" strokeWidth="1.2" fill="none"/>

      {/* Warm smile */}
      <path d="M50 67 Q60 73 70 67" stroke="#c07840" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <path d="M52 67 Q60 70 68 67" fill="#e8908a" opacity="0.3"/>

      {/* Cherry blossoms floating */}
      {[[16,42,8],[18,62,6],[98,35,7],[102,58,5]].map(([x,y,r],i) => (
        <g key={i} opacity="0.7">
          <circle cx={x} cy={y} r={r} fill="#fda4af"/>
          <circle cx={x} cy={y} r={r*0.4} fill="#fce7f3"/>
        </g>
      ))}

      {/* Specular final */}
      <ellipse cx="52" cy="43" rx="6" ry="8" fill="white" opacity="0.05"/>
      <circle cx="60" cy="60" r="56" fill="none" stroke="#ec4899" strokeWidth="1" opacity="0.25"/>
    </svg>
  )
}

export function CipherPortrait({ size = 96 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <defs>
        <radialGradient id="c-bg" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#1a0f2e"/>
          <stop offset="100%" stopColor="#06040f"/>
        </radialGradient>
        <radialGradient id="c-skin" cx="42%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#fde8c8"/>
          <stop offset="40%" stopColor="#e8b880"/>
          <stop offset="80%" stopColor="#b87840"/>
          <stop offset="100%" stopColor="#7a4818"/>
        </radialGradient>
        <radialGradient id="c-robe" cx="25%" cy="15%" r="85%">
          <stop offset="0%" stopColor="#4c1d95"/>
          <stop offset="60%" stopColor="#1e0a3c"/>
          <stop offset="100%" stopColor="#080414"/>
        </radialGradient>
        <radialGradient id="c-eye-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a78bfa"/>
          <stop offset="60%" stopColor="#7c3aed"/>
          <stop offset="100%" stopColor="#3730a3" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="c-spec" cx="40%" cy="25%" r="45%">
          <stop offset="0%" stopColor="white" stopOpacity="0.45"/>
          <stop offset="100%" stopColor="white" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="c-rim" cx="5%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.45"/>
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
        </radialGradient>
        <filter id="c-shadow">
          <feDropShadow dx="0" dy="5" stdDeviation="10" floodColor="#8b5cf6" floodOpacity="0.3"/>
        </filter>
        <filter id="c-eyeglow">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <clipPath id="c-clip"><circle cx="60" cy="60" r="56"/></clipPath>
      </defs>

      <circle cx="60" cy="60" r="56" fill="url(#c-bg)" filter="url(#c-shadow)"/>
      <circle cx="60" cy="60" r="56" fill="url(#c-rim)"/>

      {/* Dark robe */}
      <path d="M20 90 L38 68 L60 72 L82 68 L100 90 L100 116 L20 116Z" fill="url(#c-robe)" clipPath="url(#c-clip)"/>
      {/* Robe fold highlights */}
      <path d="M40 70 Q50 66 56 70" stroke="#6d28d9" strokeWidth="1.5" fill="none" opacity="0.5"/>
      <path d="M64 70 Q70 66 80 70" stroke="#6d28d9" strokeWidth="1.5" fill="none" opacity="0.5"/>

      {/* Fox tails — multiple overlapping */}
      {[
        "M80 62 Q96 50 102 60 Q106 70 96 72 Q90 74 84 68",
        "M82 70 Q100 62 104 72 Q106 82 96 82 Q90 82 86 76",
        "M78 78 Q94 74 96 84 Q96 92 86 90 Q82 88 80 82",
      ].map((d, i) => (
        <path key={i} d={d} fill="white" opacity={0.85 - i * 0.2}/>
      ))}
      {/* Tail tips pink */}
      <circle cx="100" cy="62" r="4" fill="#fda4af" opacity="0.7"/>
      <circle cx="102" cy="74" r="3.5" fill="#fda4af" opacity="0.5"/>
      <circle cx="94" cy="86" r="3" fill="#fda4af" opacity="0.4"/>

      {/* Neck */}
      <rect x="53" y="68" width="14" height="14" rx="4" fill="url(#c-skin)" clipPath="url(#c-clip)"/>
      <ellipse cx="60" cy="82" rx="8" ry="2.5" fill="black" opacity="0.3" clipPath="url(#c-clip)"/>

      {/* Face — lit only from one side (drama) */}
      <ellipse cx="60" cy="50" rx="24" ry="28" fill="url(#c-skin)"/>
      {/* Shadow on left side of face */}
      <path d="M36 36 Q34 50 36 64 Q40 58 42 50 Q40 42 36 36Z" fill="black" opacity="0.3"/>
      <ellipse cx="60" cy="50" rx="24" ry="28" fill="url(#c-spec)"/>

      {/* Fox ears */}
      <polygon points="38,36 30,14 46,24" fill="white" opacity="0.95"/>
      <polygon points="82,36 90,14 74,24" fill="white" opacity="0.95"/>
      {/* Ear inner pink */}
      <polygon points="38,34 33,18 44,25" fill="#fda4af" opacity="0.8"/>
      <polygon points="82,34 87,18 76,25" fill="#fda4af" opacity="0.8"/>
      {/* Ear highlights */}
      <line x1="36" y1="22" x2="38" y2="30" stroke="white" strokeWidth="0.8" opacity="0.4"/>

      {/* Brows — one raised (mischievous) */}
      <path d="M43 42 Q50 38 57 42" stroke="#3d1a00" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M63 40 Q70 37 76 41" stroke="#3d1a00" strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* Eyes — one normal, one glowing with probability matrix */}
      <ellipse cx="50" cy="50" rx="5.5" ry="4.5" fill="#1a0a00"/>
      <circle cx="50" cy="50" r="3" fill="#1a0800"/>
      <circle cx="51.5" cy="48.5" r="1.2" fill="white" opacity="0.8"/>

      {/* Glowing eye */}
      <ellipse cx="70" cy="50" rx="6" ry="5" fill="#0a0520" filter="url(#c-eyeglow)"/>
      <circle cx="70" cy="50" r="5" fill="url(#c-eye-glow)" filter="url(#c-eyeglow)"/>
      <circle cx="70" cy="50" r="2" fill="#c4b5fd"/>
      <circle cx="68.5" cy="48.5" r="1" fill="white" opacity="0.9"/>
      {/* Glow rings */}
      <circle cx="70" cy="50" r="7" fill="none" stroke="#8b5cf6" strokeWidth="0.8" opacity="0.5"/>
      <circle cx="70" cy="50" r="9" fill="none" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.3"/>

      {/* Nose */}
      <path d="M58 56 Q60 62 62 56" stroke="#b87840" strokeWidth="1.3" fill="none"/>

      {/* Sardonic half smile */}
      <path d="M52 67 Q61 71 69 65" stroke="#8a5010" strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* Floating probability numbers */}
      {[['16','18','14','#8b5cf6','0.7'],['∑','10','44','#a78bfa','0.5'],['π','12','30','#8b5cf6','0.4'],['%','108','42','#7c3aed','0.6']].map(([t,x,y,c,o],i)=>(
        <text key={i} x={x} y={y} fontSize="8" fill={c} opacity={o} fontFamily="monospace" fontWeight="500">{t}</text>
      ))}

      <ellipse cx="52" cy="43" rx="6" ry="8" fill="white" opacity="0.04"/>
      <circle cx="60" cy="60" r="56" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.25"/>
    </svg>
  )
}

export function PixelPortrait({ size = 96 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <defs>
        <radialGradient id="px-bg" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#2a1c00"/>
          <stop offset="100%" stopColor="#0a0700"/>
        </radialGradient>
        <radialGradient id="px-skin" cx="40%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#fef3c7"/>
          <stop offset="35%" stopColor="#fbbf24"/>
          <stop offset="75%" stopColor="#d97706"/>
          <stop offset="100%" stopColor="#92400e"/>
        </radialGradient>
        <radialGradient id="px-robe" cx="30%" cy="15%" r="80%">
          <stop offset="0%" stopColor="#fde68a"/>
          <stop offset="45%" stopColor="#f59e0b"/>
          <stop offset="80%" stopColor="#b45309"/>
          <stop offset="100%" stopColor="#5a1d00"/>
        </radialGradient>
        <radialGradient id="px-crown" cx="35%" cy="20%" r="75%">
          <stop offset="0%" stopColor="#fef08a"/>
          <stop offset="50%" stopColor="#eab308"/>
          <stop offset="100%" stopColor="#78350f"/>
        </radialGradient>
        <radialGradient id="px-spec" cx="38%" cy="22%" r="48%">
          <stop offset="0%" stopColor="white" stopOpacity="0.55"/>
          <stop offset="100%" stopColor="white" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="px-rim" cx="92%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="px-coin" cx="30%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#fef08a"/>
          <stop offset="70%" stopColor="#ca8a04"/>
          <stop offset="100%" stopColor="#78350f"/>
        </radialGradient>
        <filter id="px-shadow">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#f59e0b" floodOpacity="0.3"/>
        </filter>
        <clipPath id="px-clip"><circle cx="60" cy="60" r="56"/></clipPath>
      </defs>

      <circle cx="60" cy="60" r="56" fill="url(#px-bg)" filter="url(#px-shadow)"/>
      <circle cx="60" cy="60" r="56" fill="url(#px-rim)"/>

      {/* Golden robe */}
      <path d="M22 95 L40 70 L60 74 L80 70 L98 95 L98 116 L22 116Z" fill="url(#px-robe)" clipPath="url(#px-clip)"/>
      {/* Robe folds */}
      <path d="M38 72 Q48 68 55 72" stroke="#fde68a" strokeWidth="1.5" fill="none" opacity="0.4"/>
      <path d="M65 72 Q72 68 82 72" stroke="#fde68a" strokeWidth="1.5" fill="none" opacity="0.4"/>

      {/* Treasure bag */}
      <ellipse cx="92" cy="75" rx="12" ry="14" fill="#b45309"/>
      <ellipse cx="92" cy="61" rx="7" ry="6" fill="#d97706"/>
      <ellipse cx="89" cy="59" rx="3" ry="3" fill="#fde68a" opacity="0.5"/>
      <text x="88" y="77" fontSize="9" fill="#fef9c3" fontWeight="700" fontFamily="monospace">¥</text>

      {/* Neck */}
      <rect x="53" y="68" width="14" height="14" rx="4" fill="url(#px-skin)" clipPath="url(#px-clip)"/>
      <ellipse cx="60" cy="82" rx="8" ry="2.5" fill="black" opacity="0.2" clipPath="url(#px-clip)"/>

      {/* Face */}
      <ellipse cx="60" cy="50" rx="25" ry="28" fill="url(#px-skin)"/>
      <ellipse cx="60" cy="50" rx="25" ry="28" fill="url(#px-spec)"/>

      {/* Crown — detailed */}
      <path d="M35 40 L40 22 L48 34 L60 18 L72 34 L80 22 L85 40Z" fill="url(#px-crown)"/>
      {/* Crown inner shadow */}
      <path d="M38 40 L42 26 L48 36 L60 22 L72 36 L78 26 L82 40" fill="#92400e" opacity="0.3"/>
      {/* Crown gems */}
      <circle cx="60" cy="19" r="4.5" fill="#ef4444"/>
      <circle cx="60" cy="19" r="2.5" fill="#fca5a5"/>
      <circle cx="44" cy="29" r="3" fill="#3b82f6"/>
      <circle cx="44" cy="29" r="1.5" fill="#93c5fd"/>
      <circle cx="76" cy="29" r="3" fill="#10b981"/>
      <circle cx="76" cy="29" r="1.5" fill="#6ee7b7"/>
      {/* Crown highlight */}
      <path d="M42 36 Q50 30 58 34" stroke="#fef08a" strokeWidth="1.5" fill="none" opacity="0.5"/>

      {/* Brows — raised, happy */}
      <path d="M44 43 Q51 40 57 43" stroke="#5c2800" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <path d="M63 43 Q69 40 76 43" stroke="#5c2800" strokeWidth="1.8" fill="none" strokeLinecap="round"/>

      {/* Happy eyes — curved upward */}
      <path d="M44 51 Q50 46 56 51" stroke="#1a0a00" strokeWidth="2.5" fill="none"/>
      <path d="M64 51 Q70 46 76 51" stroke="#1a0a00" strokeWidth="2.5" fill="none"/>
      {/* Eye shine */}
      <circle cx="48" cy="51" r="1.5" fill="white" opacity="0.8"/>
      <circle cx="68" cy="51" r="1.5" fill="white" opacity="0.8"/>

      {/* Rosy cheeks */}
      <circle cx="46" cy="58" r="6" fill="#fca5a5" opacity="0.2"/>
      <circle cx="74" cy="58" r="6" fill="#fca5a5" opacity="0.2"/>

      {/* Nose */}
      <circle cx="60" cy="60" r="2.5" fill="#d97706" opacity="0.4"/>

      {/* Big warm smile */}
      <path d="M47 67 Q60 76 73 67" stroke="#92400e" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
      <path d="M50 67 Q60 73 70 67 Q62 76 58 76Z" fill="#f87171" opacity="0.3"/>

      {/* Floating coins */}
      {[[16,38],[18,58],[24,78],[104,42]].map(([x,y],i)=>(
        <g key={i}>
          <ellipse cx={x} cy={y} rx="7" ry="6.5" fill="url(#px-coin)" opacity="0.85"/>
          <text x={x-4} y={y+3} fontSize="7" fill="#92400e" fontWeight="700" fontFamily="monospace">¥</text>
        </g>
      ))}

      <circle cx="60" cy="60" r="56" fill="none" stroke="#eab308" strokeWidth="1" opacity="0.25"/>
    </svg>
  )
}

export function EchoPortrait({ size = 96 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <defs>
        <radialGradient id="e-bg" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#041a10"/>
          <stop offset="100%" stopColor="#010806"/>
        </radialGradient>
        <radialGradient id="e-skin" cx="38%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#d1fae5"/>
          <stop offset="35%" stopColor="#6ee7b7"/>
          <stop offset="75%" stopColor="#059669"/>
          <stop offset="100%" stopColor="#064e3b"/>
        </radialGradient>
        <radialGradient id="e-body" cx="30%" cy="20%" r="80%">
          <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.7"/>
          <stop offset="60%" stopColor="#10b981" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#064e3b" stopOpacity="0.3"/>
        </radialGradient>
        <radialGradient id="e-hair" cx="35%" cy="15%" r="75%">
          <stop offset="0%" stopColor="#34d399"/>
          <stop offset="60%" stopColor="#059669"/>
          <stop offset="100%" stopColor="#022c22"/>
        </radialGradient>
        <radialGradient id="e-spec" cx="36%" cy="22%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.45"/>
          <stop offset="100%" stopColor="white" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="e-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0"/>
        </radialGradient>
        <filter id="e-shadow">
          <feDropShadow dx="0" dy="5" stdDeviation="10" floodColor="#10b981" floodOpacity="0.3"/>
        </filter>
        <filter id="e-ethereal">
          <feGaussianBlur stdDeviation="2" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <clipPath id="e-clip"><circle cx="60" cy="60" r="56"/></clipPath>
      </defs>

      <circle cx="60" cy="60" r="56" fill="url(#e-bg)" filter="url(#e-shadow)"/>

      {/* Ethereal glow halo */}
      <circle cx="60" cy="50" r="42" fill="url(#e-glow)" filter="url(#e-ethereal)"/>

      {/* Translucent body */}
      <path d="M24 95 L40 68 L60 72 L80 68 L96 95 L96 116 L24 116Z" fill="url(#e-body)" clipPath="url(#e-clip)"/>

      {/* Musical notes transforming to coins */}
      {[
        {x:14, y:28, note:'♪', coin:true},
        {x:100, y:22, note:'♫', coin:false},
        {x:108, y:52, note:'♩', coin:false},
        {x:10, y:55, note:'♬', coin:true},
      ].map(({x,y,note,coin},i)=>(
        <g key={i} opacity={0.7 - i*0.1}>
          <text x={x} y={y} fontSize={14-i*2} fill="#10b981" fontFamily="serif">{note}</text>
          {coin && <ellipse cx={x+6} cy={y+8} rx="6" ry="5.5" fill="#eab308" opacity="0.5"/>}
        </g>
      ))}

      {/* Neck — slightly translucent */}
      <rect x="53" y="68" width="14" height="14" rx="4" fill="url(#e-skin)" opacity="0.85" clipPath="url(#e-clip)"/>
      <ellipse cx="60" cy="82" rx="8" ry="2" fill="black" opacity="0.15" clipPath="url(#e-clip)"/>

      {/* Hair — flowing, asymmetric */}
      <path d="M34 36 Q28 55 30 80" stroke="#059669" strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.7" clipPath="url(#e-clip)"/>
      <path d="M86 36 Q92 55 90 80" stroke="#059669" strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.7" clipPath="url(#e-clip)"/>
      <path d="M34 38 Q34 12 60 10 Q86 12 86 38 Q80 32 60 30 Q40 32 34 38Z" fill="url(#e-hair)" opacity="0.9"/>
      {/* Hair wave highlight */}
      <path d="M40 20 Q55 15 70 20 Q62 18 55 20" stroke="#a7f3d0" strokeWidth="1.5" fill="none" opacity="0.4"/>

      {/* Phase ring */}
      <circle cx="60" cy="48" r="30" fill="none" stroke="#6ee7b7" strokeWidth="1" strokeDasharray="5 4" opacity="0.4"/>
      <circle cx="60" cy="48" r="38" fill="none" stroke="#6ee7b7" strokeWidth="0.6" strokeDasharray="3 5" opacity="0.2"/>

      {/* Face — softer, slightly translucent */}
      <ellipse cx="60" cy="48" rx="24" ry="28" fill="url(#e-skin)" opacity="0.9"/>
      <ellipse cx="60" cy="48" rx="24" ry="28" fill="url(#e-spec)"/>

      {/* Soft brows */}
      <path d="M44 40 Q51 37 57 40" stroke="#022c22" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M63 40 Q69 37 76 40" stroke="#022c22" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

      {/* Dreamy eyes — half closed */}
      <ellipse cx="50" cy="49" rx="5.5" ry="3.5" fill="#022c22"/>
      <ellipse cx="70" cy="49" rx="5.5" ry="3.5" fill="#022c22"/>
      <circle cx="50" cy="49" r="2.5" fill="#065f46"/>
      <circle cx="70" cy="49" r="2.5" fill="#065f46"/>
      {/* Dreamy heavy lids */}
      <path d="M44.5 47 Q50 44 55.5 47" stroke="#022c22" strokeWidth="2" fill="none"/>
      <path d="M64.5 47 Q70 44 75.5 47" stroke="#022c22" strokeWidth="2" fill="none"/>
      {/* Catch lights */}
      <circle cx="51.5" cy="47.5" r="1.2" fill="white" opacity="0.85"/>
      <circle cx="71.5" cy="47.5" r="1.2" fill="white" opacity="0.85"/>

      {/* Gentle nose */}
      <path d="M58 54 Q60 60 62 54" stroke="#059669" strokeWidth="1.2" fill="none" opacity="0.7"/>

      {/* Peaceful soft mouth */}
      <path d="M52 65 Q60 68 68 65" stroke="#059669" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8"/>

      <circle cx="60" cy="60" r="56" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.25"/>
    </svg>
  )
}

export function AtlasPortrait({ size = 96 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <defs>
        <radialGradient id="at-bg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#0a1220"/>
          <stop offset="100%" stopColor="#030608"/>
        </radialGradient>
        <radialGradient id="at-skin" cx="38%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#dbeafe"/>
          <stop offset="35%" stopColor="#93c5fd"/>
          <stop offset="75%" stopColor="#2563eb"/>
          <stop offset="100%" stopColor="#1e3a8a"/>
        </radialGradient>
        <radialGradient id="at-suit" cx="25%" cy="15%" r="85%">
          <stop offset="0%" stopColor="#1e40af"/>
          <stop offset="55%" stopColor="#1e3a8a"/>
          <stop offset="100%" stopColor="#0c1e4a"/>
        </radialGradient>
        <radialGradient id="at-spec" cx="36%" cy="22%" r="48%">
          <stop offset="0%" stopColor="white" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="white" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="at-rim" cx="95%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
        </radialGradient>
        <filter id="at-shadow">
          <feDropShadow dx="0" dy="5" stdDeviation="10" floodColor="#3b82f6" floodOpacity="0.25"/>
        </filter>
        <clipPath id="at-clip"><circle cx="60" cy="60" r="56"/></clipPath>
      </defs>

      <circle cx="60" cy="60" r="56" fill="url(#at-bg)" filter="url(#at-shadow)"/>
      <circle cx="60" cy="60" r="56" fill="url(#at-rim)"/>

      {/* Blueprint grid overlay */}
      {[20,36,52,68,84,100].map(x=>(
        <line key={x} x1={x} y1="4" x2={x} y2="116" stroke="#1e40af" strokeWidth="0.4" opacity="0.3"/>
      ))}
      {[20,36,52,68,84,100].map(y=>(
        <line key={y} x1="4" y1={y} x2="116" y2={y} stroke="#1e40af" strokeWidth="0.4" opacity="0.3"/>
      ))}

      {/* Technical suit */}
      <path d="M20 95 L38 68 L60 72 L82 68 L100 95 L100 116 L20 116Z" fill="url(#at-suit)" clipPath="url(#at-clip)"/>
      {/* Blueprint lines on suit */}
      {[74,80,86].map(y=>(
        <line key={y} x1="28" y1={y} x2="92" y2={y} stroke="#60a5fa" strokeWidth="0.8" opacity="0.4" clipPath="url(#at-clip)"/>
      ))}

      {/* Floating geometric structures */}
      <rect x="94" y="22" width="18" height="18" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.8"/>
      <rect x="97" y="25" width="12" height="12" fill="none" stroke="#60a5fa" strokeWidth="0.8" opacity="0.5"/>
      <polygon points="8,48 18,32 28,48" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.6"/>
      <circle cx="14" cy="74" r="8" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5"/>

      {/* Building hands */}
      <ellipse cx="94" cy="58" rx="10" ry="6" fill="#1e40af" opacity="0.8" clipPath="url(#at-clip)"/>
      <line x1="84" y1="56" x2="104" y2="56" stroke="#60a5fa" strokeWidth="1" opacity="0.5"/>
      <line x1="84" y1="60" x2="104" y2="60" stroke="#60a5fa" strokeWidth="1" opacity="0.5"/>

      {/* Neck */}
      <rect x="53" y="68" width="14" height="14" rx="4" fill="url(#at-skin)" clipPath="url(#at-clip)"/>
      <ellipse cx="60" cy="82" rx="8" ry="2" fill="black" opacity="0.3" clipPath="url(#at-clip)"/>

      {/* Face — technical, precise, cold lighting */}
      <ellipse cx="60" cy="50" rx="24" ry="28" fill="url(#at-skin)"/>
      {/* Blueprint lines on face */}
      <line x1="36" y1="50" x2="84" y2="50" stroke="#93c5fd" strokeWidth="0.5" opacity="0.3"/>
      <line x1="60" y1="22" x2="60" y2="78" stroke="#93c5fd" strokeWidth="0.5" opacity="0.3"/>
      <ellipse cx="60" cy="50" rx="24" ry="28" fill="url(#at-spec)"/>

      {/* Focused intense brows */}
      <path d="M44 40 L57 40" stroke="#0c1e4a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M63 40 L76 40" stroke="#0c1e4a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

      {/* Architectural eyes — square, precise */}
      <rect x="43" y="46" width="12" height="8" rx="2" fill="#0c1e4a"/>
      <rect x="65" y="46" width="12" height="8" rx="2" fill="#0c1e4a"/>
      {/* Eye inner */}
      <rect x="45.5" y="48" width="7" height="4" rx="1" fill="#1e3a8a"/>
      <rect x="67.5" y="48" width="7" height="4" rx="1" fill="#1e3a8a"/>
      {/* Eye highlight bars */}
      <rect x="46" y="48.5" width="3" height="2" rx="0.5" fill="#60a5fa" opacity="0.9"/>
      <rect x="68" y="48.5" width="3" height="2" rx="0.5" fill="#60a5fa" opacity="0.9"/>

      {/* Nose — precise */}
      <path d="M58 56 L57 63 L60 65 L63 63 L62 56" stroke="#1e40af" strokeWidth="1.3" fill="none"/>

      {/* Neutral determined expression */}
      <line x1="50" y1="70" x2="70" y2="70" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round"/>

      <circle cx="60" cy="60" r="56" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.25"/>
    </svg>
  )
}
