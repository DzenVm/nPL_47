export default function SeasonWheel() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Koło czterech pór roku, po których liczone są tury rozgrywki">
      <defs>
        <linearGradient id="sw-spring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8a9d72" />
          <stop offset="1" stopColor="#5f7350" />
        </linearGradient>
        <linearGradient id="sw-summer" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e2924f" />
          <stop offset="1" stopColor="#c96f3d" />
        </linearGradient>
        <linearGradient id="sw-autumn" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a5623a" />
          <stop offset="1" stopColor="#79452a" />
        </linearGradient>
        <linearGradient id="sw-winter" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6d8798" />
          <stop offset="1" stopColor="#485c68" />
        </linearGradient>
      </defs>

      <circle cx="200" cy="200" r="168" fill="none" stroke="rgba(236,227,205,0.12)" strokeWidth="1" />

      <path d="M200 200 L200 40 A160 160 0 0 1 360 200 Z" fill="url(#sw-summer)" opacity="0.85" />
      <path d="M200 200 L360 200 A160 160 0 0 1 200 360 Z" fill="url(#sw-autumn)" opacity="0.85" />
      <path d="M200 200 L200 360 A160 160 0 0 1 40 200 Z" fill="url(#sw-winter)" opacity="0.85" />
      <path d="M200 200 L40 200 A160 160 0 0 1 200 40 Z" fill="url(#sw-spring)" opacity="0.85" />

      <circle cx="200" cy="200" r="72" fill="#171b16" stroke="rgba(236,227,205,0.18)" />
      <text x="200" y="196" textAnchor="middle" fill="#ece3cd" fontSize="15" fontFamily="ui-serif, Georgia, serif">4 tury</text>
      <text x="200" y="216" textAnchor="middle" fill="#b6ad98" fontSize="12" fontFamily="ui-serif, Georgia, serif">= 1 rok</text>

      <g fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="13" fill="#171b16" fontWeight={600}>
        <text x="280" y="115" textAnchor="middle">Lato</text>
        <text x="280" y="288" textAnchor="middle">Jesień</text>
        <text x="120" y="288" textAnchor="middle">Zima</text>
        <text x="120" y="115" textAnchor="middle">Wiosna</text>
      </g>
    </svg>
  );
}
