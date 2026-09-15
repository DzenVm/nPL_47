const hex = (cx: number, cy: number, r: number) => {
  const pts = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i - 30);
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  });
  return pts.join(" ");
};

const tiles: { q: number; r: number; fill: string; opacity?: number }[] = [
  { q: 0, r: 0, fill: "#c96f3d" },
  { q: 1, r: 0, fill: "#39473f" },
  { q: -1, r: 0, fill: "#39473f" },
  { q: 0, r: 1, fill: "#2b362f" },
  { q: 0, r: -1, fill: "#2b362f" },
  { q: 1, r: -1, fill: "#6d8798", opacity: 0.5 },
  { q: -1, r: 1, fill: "#6d8798", opacity: 0.5 },
  { q: 1, r: 1, fill: "#22262b", opacity: 0.7 },
  { q: -1, r: -1, fill: "#22262b", opacity: 0.7 },
  { q: 2, r: -1, fill: "#22262b", opacity: 0.4 },
  { q: -2, r: 1, fill: "#22262b", opacity: 0.4 },
];

export default function HexMapFragment() {
  const size = 42;
  const originX = 200;
  const originY = 170;

  return (
    <svg viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fragment mapy heksagonalnej doliny z odkrytymi i zasłoniętymi polami">
      {tiles.map((t, i) => {
        const x = originX + size * 1.5 * t.q;
        const y = originY + size * Math.sqrt(3) * (t.r + t.q / 2);
        return (
          <polygon
            key={i}
            points={hex(x, y, size - 3)}
            fill={t.fill}
            opacity={t.opacity ?? 1}
            stroke="rgba(236,227,205,0.14)"
            strokeWidth={1.5}
          />
        );
      })}
      <polygon points={hex(originX, originY, 14)} fill="#ece3cd" opacity={0.9} />
    </svg>
  );
}
