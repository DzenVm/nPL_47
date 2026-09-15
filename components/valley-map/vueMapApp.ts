import { defineComponent, h, reactive, ref } from "vue";

type TileType = "osada" | "zywnosc" | "surowce" | "wiedza" | "mgla" | "ruiny";

interface Tile {
  id: string;
  q: number;
  r: number;
  type: TileType;
  caption: string;
}

const TYPE_FILL: Record<TileType, string> = {
  osada: "#ece3cd",
  zywnosc: "#8a9d72",
  surowce: "#6d8798",
  wiedza: "#c96f3d",
  mgla: "#2b323d",
  ruiny: "#a5623a",
};

const CAPTIONS: Record<TileType, string[]> = {
  osada: ["Twoja osada. Stąd wyruszają wszystkie grupy zwiadowcze."],
  zywnosc: [
    "Zdziczały sad na zboczu — kilka koszy jabłek, jeśli ktoś zdąży przed przymrozkiem.",
    "Wilgotna niecka pod skałą, dobra pod uprawę korzeniową w przyszłym sezonie.",
    "Ślady dzikiej zwierzyny prowadzące w stronę wąwozu.",
  ],
  surowce: [
    "Zwalone drewno po dawnej wichurze — suche, gotowe pod topór.",
    "Wychodnia kamienia dość płytka, by wydobywać ją ręcznie.",
    "Resztki metalowej konstrukcji sprzed Ciszy, częściowo pod ziemią.",
  ],
  wiedza: [
    "Zamknięta skrzynia z dokumentacją — zamek wymaga narzędzi, których jeszcze nie macie.",
    "Wystający fragment instalacji obserwacyjnej sprzed katastrofy.",
    "Ktoś zostawił tu dziennik. Zamokł, ale część kart da się odczytać.",
  ],
  mgla: [
    "Nic poza kamieniami i ciszą. Warto to jednak mieć na mapie.",
    "Teren zbyt płaski, by cokolwiek się na nim uchowało.",
  ],
  ruiny: [
    "Grupa napotyka ślady obozowiska. Ktoś tu był niedawno — decyzja należy do ciebie.",
  ],
};

function buildTiles(): Tile[] {
  const tiles: Tile[] = [];
  const plan: { q: number; r: number; type: TileType }[] = [
    { q: 0, r: 0, type: "osada" },
    { q: 1, r: 0, type: "zywnosc" },
    { q: -1, r: 0, type: "surowce" },
    { q: 0, r: 1, type: "wiedza" },
    { q: 0, r: -1, type: "zywnosc" },
    { q: 1, r: -1, type: "mgla" },
    { q: -1, r: 1, type: "surowce" },
    { q: 1, r: 1, type: "ruiny" },
    { q: -1, r: -1, type: "wiedza" },
    { q: 2, r: -1, type: "zywnosc" },
    { q: -2, r: 1, type: "surowce" },
    { q: 2, r: -2, type: "mgla" },
    { q: -2, r: 2, type: "mgla" },
    { q: 2, r: 0, type: "zywnosc" },
    { q: -2, r: 0, type: "surowce" },
    { q: 0, r: 2, type: "wiedza" },
    { q: 0, r: -2, type: "zywnosc" },
    { q: 1, r: -2, type: "surowce" },
  ];

  plan.forEach((p, i) => {
    const list = CAPTIONS[p.type];
    tiles.push({
      id: `${p.q}_${p.r}`,
      q: p.q,
      r: p.r,
      type: p.type,
      caption: list[i % list.length]!,
    });
  });
  return tiles;
}

const hexPoints = (cx: number, cy: number, size: number) => {
  const pts = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 180) * (60 * i);
    return `${cx + size * Math.cos(angle)},${cy + size * Math.sin(angle)}`;
  });
  return pts.join(" ");
};

export const ValleyMapWidget = defineComponent({
  name: "ValleyMapWidget",
  setup() {
    const tiles = buildTiles();
    const size = 34;
    const originX = 210;
    const originY = 175;

    const revealed = reactive<Record<string, boolean>>({ "0_0": true });
    const counts = reactive({ zywnosc: 0, surowce: 0, wiedza: 0, napotkania: 0 });
    const caption = ref(
      "Kliknij zasłonięte pole, by wysłać tam grupę zwiadowczą. To podgląd jednej z mechanik — nie pełna rozgrywka."
    );

    function reveal(tile: Tile) {
      if (tile.type === "osada" || revealed[tile.id]) return;
      revealed[tile.id] = true;
      caption.value = tile.caption;
      if (tile.type === "zywnosc") counts.zywnosc += 1;
      if (tile.type === "surowce") counts.surowce += 1;
      if (tile.type === "wiedza") counts.wiedza += 1;
      if (tile.type === "ruiny") counts.napotkania += 1;
    }

    function reset() {
      Object.keys(revealed).forEach((k) => delete revealed[k]);
      revealed["0_0"] = true;
      counts.zywnosc = 0;
      counts.surowce = 0;
      counts.wiedza = 0;
      counts.napotkania = 0;
      caption.value = "Fragment mapy zresetowany. Mgła wróciła na swoje miejsce.";
    }

    return () =>
      h("div", { class: "vm-root" }, [
        h("div", { class: "vm-hud" }, [
          h("div", { class: "vm-stat" }, [h("span", { class: "vm-stat-label" }, "Żywność"), h("span", { class: "vm-stat-val" }, String(counts.zywnosc))]),
          h("div", { class: "vm-stat" }, [h("span", { class: "vm-stat-label" }, "Surowce"), h("span", { class: "vm-stat-val" }, String(counts.surowce))]),
          h("div", { class: "vm-stat" }, [h("span", { class: "vm-stat-label" }, "Wiedza"), h("span", { class: "vm-stat-val" }, String(counts.wiedza))]),
          h("div", { class: "vm-stat" }, [h("span", { class: "vm-stat-label" }, "Napotkania"), h("span", { class: "vm-stat-val" }, String(counts.napotkania))]),
          h(
            "button",
            { class: "vm-reset", type: "button", onClick: reset },
            "Resetuj fragment"
          ),
        ]),
        h(
          "svg",
          { viewBox: "0 0 420 350", class: "vm-svg", role: "img", "aria-label": "Interaktywny fragment mapy doliny" },
          tiles.map((t) => {
            const x = originX + size * 1.5 * t.q;
            const y = originY + size * Math.sqrt(3) * (t.r + t.q / 2);
            const isRevealed = !!revealed[t.id];
            return h("g", { key: t.id, class: "vm-tile", onClick: () => reveal(t) }, [
              h("polygon", {
                points: hexPoints(x, y, size - 2),
                fill: isRevealed ? TYPE_FILL[t.type] : "#181c22",
                stroke: "rgba(236,227,205,0.16)",
                "stroke-width": 1.3,
                opacity: isRevealed ? 0.95 : 1,
              }),
              !isRevealed
                ? h(
                    "text",
                    { x, y: y + 4, "text-anchor": "middle", class: "vm-mark", fontSize: 13 },
                    "?"
                  )
                : null,
            ]);
          })
        ),
        h("p", { class: "vm-caption" }, caption.value),
      ]);
  },
});
