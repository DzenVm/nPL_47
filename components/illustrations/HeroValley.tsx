export default function HeroValley() {
  return (
    <svg viewBox="0 0 640 460" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dolina spowita mgłą, z osadą u podnóża wzgórz">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1b2028" />
          <stop offset="1" stopColor="#242a33" />
        </linearGradient>
        <linearGradient id="ridgeFar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#30414a" />
          <stop offset="1" stopColor="#26323a" />
        </linearGradient>
        <linearGradient id="ridgeMid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#39473f" />
          <stop offset="1" stopColor="#2b362f" />
        </linearGradient>
        <linearGradient id="ridgeNear" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#20261f" />
          <stop offset="1" stopColor="#171b16" />
        </linearGradient>
        <linearGradient id="glow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#c96f3d" stopOpacity="0.55" />
          <stop offset="1" stopColor="#e2924f" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#e2924f" stopOpacity="0.9" />
          <stop offset="1" stopColor="#e2924f" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="640" height="460" fill="url(#sky)" />
      <circle cx="470" cy="120" r="130" fill="url(#sun)" />
      <circle cx="470" cy="120" r="34" fill="#e2924f" opacity="0.85" />

      {/* zasłona - pasy mgły w tle */}
      <rect x="0" y="60" width="640" height="46" fill="#8fa2ab" opacity="0.06" />
      <rect x="0" y="140" width="640" height="30" fill="#8fa2ab" opacity="0.05" />

      {/* grzbiety gór, trzy plany głębi */}
      <path d="M0 260 L70 205 L140 240 L210 190 L300 250 L380 200 L460 246 L540 210 L640 255 L640 460 L0 460 Z" fill="url(#ridgeFar)" />
      <path d="M0 320 L90 270 L180 305 L260 260 L340 312 L430 268 L520 310 L640 275 L640 460 L0 460 Z" fill="url(#ridgeMid)" />
      <path d="M0 380 L100 335 L190 368 L280 330 L360 372 L470 332 L560 366 L640 338 L640 460 L0 460 Z" fill="url(#ridgeNear)" />

      {/* osada u podnóża */}
      <g opacity="0.92">
        <path d="M255 392 L275 372 L295 392 Z" fill="#171b16" />
        <rect x="260" y="392" width="30" height="20" fill="#20261f" />
        <path d="M300 396 L316 380 L332 396 Z" fill="#171b16" />
        <rect x="304" y="396" width="24" height="16" fill="#20261f" />
        <path d="M336 390 L354 370 L372 390 Z" fill="#171b16" />
        <rect x="340" y="390" width="28" height="22" fill="#20261f" />
        <rect x="349" y="378" width="6" height="10" fill="#2b362f" />
      </g>

      {/* światła osady */}
      <circle cx="270" cy="402" r="2" fill="#e2924f" />
      <circle cx="314" cy="404" r="2" fill="#e2924f" />
      <circle cx="352" cy="400" r="2" fill="#e2924f" />

      {/* poświata rdzy na horyzoncie, akcent marki bez logotypu */}
      <rect x="0" y="252" width="260" height="10" fill="url(#glow)" opacity="0.5" />

      {/* mgła pierwszego planu */}
      <path d="M0 430 C 90 405, 180 445, 280 418 C 380 392, 480 438, 640 412 L640 460 L0 460 Z" fill="#12151a" opacity="0.85" />
    </svg>
  );
}
