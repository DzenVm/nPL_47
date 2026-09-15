export default function ScoutEncounter() {
  return (
    <svg viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sylwetka zwiadowcy na granicy Zasłony">
      <defs>
        <linearGradient id="se-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#21262f" />
          <stop offset="1" stopColor="#171b16" />
        </linearGradient>
        <radialGradient id="se-veil" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#6d8798" stopOpacity="0.5" />
          <stop offset="1" stopColor="#6d8798" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="420" height="320" fill="url(#se-bg)" />
      <ellipse cx="330" cy="150" rx="180" ry="220" fill="url(#se-veil)" />

      {/* linia horyzontu i pole */}
      <path d="M0 230 Q 120 210 210 226 T 420 220 V320 H0 Z" fill="#20261f" />
      <path d="M0 250 Q 140 236 230 248 T 420 242 V320 H0 Z" fill="#171b16" />

      {/* postać zwiadowcy */}
      <g transform="translate(120,150)">
        <ellipse cx="0" cy="98" rx="26" ry="6" fill="#000" opacity="0.35" />
        <path d="M-4 10 L4 10 L10 70 L-2 70 L-6 40 L-10 70 L-20 70 Z" fill="#2b362f" />
        <rect x="-14" y="-18" width="28" height="34" rx="6" fill="#39473f" />
        <circle cx="0" cy="-30" r="11" fill="#b6ad98" />
        <path d="M-16 -10 L-34 24 L-24 30 L-8 2 Z" fill="#2b362f" />
        <line x1="-34" y1="24" x2="-30" y2="70" stroke="#79452a" strokeWidth="3" />
      </g>

      {/* punkt zainteresowania — sygnał odkrycia */}
      <g transform="translate(280,120)">
        <circle r="5" fill="#e2924f" />
        <circle r="12" fill="none" stroke="#e2924f" strokeOpacity="0.5" />
        <circle r="20" fill="none" stroke="#e2924f" strokeOpacity="0.25" />
      </g>

      <path d="M150 140 Q 210 110 270 122" stroke="rgba(236,227,205,0.25)" strokeDasharray="3 6" fill="none" />
    </svg>
  );
}
