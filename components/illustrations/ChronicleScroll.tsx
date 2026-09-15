export default function ChronicleScroll() {
  return (
    <svg viewBox="0 0 380 300" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rozwinięta kronika zapisująca przebieg rozgrywki">
      <defs>
        <linearGradient id="cs-paper" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ece3cd" />
          <stop offset="1" stopColor="#d9cfb4" />
        </linearGradient>
      </defs>

      <rect x="40" y="30" width="300" height="240" rx="6" fill="url(#cs-paper)" />
      <rect x="40" y="30" width="300" height="240" rx="6" fill="none" stroke="#79452a" strokeOpacity="0.25" />

      {/* zwinięte krawędzie */}
      <path d="M40 30 Q 24 30 24 46 L24 254 Q 24 270 40 270" fill="none" stroke="#79452a" strokeWidth="10" strokeLinecap="round" opacity="0.55" />
      <path d="M340 30 Q 356 30 356 46 L356 254 Q 356 270 340 270" fill="none" stroke="#79452a" strokeWidth="10" strokeLinecap="round" opacity="0.55" />

      <g stroke="#79452a" strokeOpacity="0.35">
        <line x1="66" y1="70" x2="314" y2="70" />
        <line x1="66" y1="96" x2="290" y2="96" />
        <line x1="66" y1="122" x2="300" y2="122" />
        <line x1="66" y1="148" x2="230" y2="148" />
        <line x1="66" y1="184" x2="314" y2="184" />
        <line x1="66" y1="210" x2="270" y2="210" />
        <line x1="66" y1="236" x2="250" y2="236" />
      </g>

      <text x="66" y="56" fontFamily="ui-serif, Georgia, serif" fontSize="16" fill="#3a2c1c">Kronika osady — rok 9</text>
      <circle cx="300" cy="150" r="3" fill="#c96f3d" />
      <circle cx="140" cy="200" r="3" fill="#c96f3d" />
    </svg>
  );
}
