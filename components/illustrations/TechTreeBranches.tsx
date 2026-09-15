const nodes: { x: number; y: number; r: number; fill: string }[] = [
  { x: 40, y: 150, r: 9, fill: "#ece3cd" },
  { x: 110, y: 80, r: 7, fill: "#8a9d72" },
  { x: 110, y: 150, r: 7, fill: "#c96f3d" },
  { x: 110, y: 220, r: 7, fill: "#6d8798" },
  { x: 190, y: 40, r: 6, fill: "#8a9d72" },
  { x: 190, y: 100, r: 6, fill: "#8a9d72" },
  { x: 190, y: 150, r: 6, fill: "#c96f3d" },
  { x: 190, y: 190, r: 6, fill: "#6d8798" },
  { x: 190, y: 250, r: 6, fill: "#6d8798" },
  { x: 270, y: 60, r: 5, fill: "#8a9d72" },
  { x: 270, y: 130, r: 5, fill: "#c96f3d" },
  { x: 270, y: 170, r: 5, fill: "#c96f3d" },
  { x: 270, y: 230, r: 5, fill: "#6d8798" },
];

const edges: [number, number][] = [
  [0, 1], [0, 2], [0, 3],
  [1, 4], [1, 5],
  [2, 6],
  [3, 7], [3, 8],
  [4, 9], [6, 10], [6, 11], [8, 12],
];

export default function TechTreeBranches() {
  return (
    <svg viewBox="0 0 320 290" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rozgałęzione drzewo technologii z czterema ścieżkami rozwoju">
      <g stroke="rgba(236,227,205,0.28)" strokeWidth="1.4">
        {edges.map(([a, b], i) => {
          const A = nodes[a]!;
          const B = nodes[b]!;
          return <line key={i} x1={A.x} y1={A.y} x2={B.x} y2={B.y} />;
        })}
      </g>
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={n.r} fill={n.fill} stroke="#171b16" strokeWidth="1.5" />
      ))}
    </svg>
  );
}
