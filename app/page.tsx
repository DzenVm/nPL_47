import type { Metadata } from "next";
import styles from "./page.module.css";
import HeroValley from "@/components/illustrations/HeroValley";
import SeasonWheel from "@/components/illustrations/SeasonWheel";
import ScoutEncounter from "@/components/illustrations/ScoutEncounter";
import TechTreeBranches from "@/components/illustrations/TechTreeBranches";
import ChronicleScroll from "@/components/illustrations/ChronicleScroll";
import ValleyMapIsland from "@/components/valley-map/ValleyMapIsland";

export const metadata: Metadata = {
  title: "Strategia przeglądarkowa o dolinie odciętej Zasłoną",
  description:
    "Jednoosobowa, turowa strategia przeglądarkowa: zarządzaj osadą, wysyłaj zwiadowców i rozwijaj wiedzę pokolenie po pokoleniu. Bez pobierania, bez elementów losowych nagród, bez rywalizacji online.",
  alternates: { canonical: "/" },
};

const PILLARS = [
  {
    n: "01",
    title: "Żywność",
    body:
      "Każdy dorosły mieszkaniec zużywa około 0,4 jednostki na turę. Pola i sady dają różne plony w zależności od pory roku i tego, czy w ogóle zdążyłeś obsadzić je ludźmi przed przymrozkiem.",
    stat: "Deficyt dłuższy niż 2 tury = emigracja",
  },
  {
    n: "02",
    title: "Surowce",
    body:
      "Drewno, kamień i złom z ruin sprzed Ciszy. Potrzebne do budowy i napraw — dach, który przecieka trzeci sezon z rzędu, zaczyna obniżać spójność, nawet jeśli magazyny są pełne.",
    stat: "8 typów budynków na start, 21 do odblokowania",
  },
  {
    n: "03",
    title: "Wiedza",
    body:
      "Powstaje w obserwatorium i przy pracy uczonych. To ona otwiera gałęzie drzewa technologii — ale każdy poziom kosztuje więcej niż poprzedni, więc trzeba wybierać kierunek rozwoju, a nie odblokowywać wszystko po kolei.",
    stat: "4 gałęzie rozwoju, ok. 30 węzłów łącznie",
  },
  {
    n: "04",
    title: "Spójność",
    body:
      "Najbardziej kapryśny z zasobów. Rośnie po udanych żniwach i odnalezieniu czegoś wartościowego w ruinach, spada przy głodzie, przeludnieniu i decyzjach, które ludzie uznają za pochopne.",
    stat: "Poniżej 20% — ryzyko buntu części osady",
  },
];

const DIFFICULTIES = [
  {
    title: "Osadnik",
    body: "Łagodniejsze zimy, więcej startowych zapasów. Dobry tryb do poznania interfejsu i tempa gry bez presji błędu.",
  },
  {
    title: "Zarządca",
    body: "Domyślny balans mechaniki — taki, w jakim testowałem większość decyzji projektowych. Zdarzenia losowe trafiają się częściej i bywają dotkliwsze.",
  },
  {
    title: "Kronikarz",
    body: "Permadeath. Żadnych wczytań po złej decyzji. Po zakończeniu rozgrywki — upadku osady albo dotarciu do końca scenariusza — generowana jest osobista Kronika tej konkretnej partii.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`wrap ${styles.heroGrid}`}>
          <div>
            <span className="eyebrow">Strategia przeglądarkowa · jeden gracz</span>
            <h1 className={styles.heroTitle}>
              Ostatnia dolina, którą trzeba utrzymać przy życiu — turę po turze, sezon po sezonie.
            </h1>
            <p className={styles.heroLead}>
              To gra o zarządzaniu osadą odciętą od reszty świata pasem gęstej
              mgły zwanym Zasłoną. Bez zegara odliczającego czas, bez presji
              &bdquo;zaloguj się codziennie&rdquo; — grasz turami, a każda tura
              to jedna pora roku. Decyzje, które podejmiesz w trzecim roku,
              odzywają się echem w dziesiątym.
            </p>
            <div className={styles.heroActions}>
              <a href="#mechanika" className="btn btn-primary">Zobacz fragment mapy</a>
              <a href="/o-mechanice" className="btn btn-ghost">Pełny opis rozgrywki</a>
            </div>
            <div className={styles.heroMeta}>
              <span className={styles.heroMetaItem}>Bez pobierania — działa w przeglądarce</span>
              <span className={styles.heroMetaItem}>Jeden gracz, bez rankingów</span>
              <span className={styles.heroMetaItem}>Zapis postępu lokalnie, na urządzeniu</span>
            </div>
          </div>
          <div className={styles.heroArt}>
            <HeroValley />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className={styles.lead}>
            Projekt zacząłem od pytania, które mnie samego irytowało w wielu
            grach przeglądarkowych: dlaczego niemal każda z nich zmusza do
            odwiedzania jej co kilka godzin, żeby nie &bdquo;stracić tempa&rdquo;?
            Tutaj tego nie ma. Tura trwa tyle, ile potrzebujesz — skończy się
            dopiero, gdy sam zdecydujesz, że przydział pracy na ten sezon jest
            gotowy. Można rozegrać dziesięć minut albo spędzić wieczór,
            planując trasy zwiadu na trzy lata do przodu.
          </p>
        </div>
      </section>

      <section className="section" id="filary">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Cztery filary</span>
            <h2>Gospodarka, którą trzeba faktycznie rozumieć, nie tylko klikać</h2>
            <p>
              Zamiast jednej waluty, którą wszystko się kupuje, są cztery
              osobne zasoby. Nadmiar jednego nie ratuje braku innego —
              magazyn pełen kamienia nie nakarmi nikogo w marcu.
            </p>
          </div>
          <div className="grid-4">
            {PILLARS.map((p) => (
              <div key={p.title} className={`panel ${styles.pillarCard}`}>
                <span className={styles.pillarIndex}>{p.n}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <span className={styles.pillarStat}>{p.stat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="mechanika">
        <div className="wrap">
          <div className={styles.mapBlock}>
            <div className={styles.mapNotes}>
              <span className="eyebrow">Rozpoznanie terenu</span>
              <h2>Mapa nie jest znana od pierwszej tury</h2>
              <div className={styles.noteRow}>
                <span className={styles.noteMark}>1</span>
                <p>Osada zawsze stoi na polu startowym — resztę doliny zasłania mgła, dopóki nie wyślesz tam grupy.</p>
              </div>
              <div className={styles.noteRow}>
                <span className={styles.noteMark}>2</span>
                <p>Każde pole ma z góry ustalony charakter — sad, złoże kamienia, pozostałości po dawnej infrastrukturze. Nic tam nie &bdquo;losuje się&rdquo; w momencie kliknięcia.</p>
              </div>
              <div className={styles.noteRow}>
                <span className={styles.noteMark}>3</span>
                <p>Część pól kryje napotkania — krótkie sytuacje z wyborem, które wpływają na spójność albo skład osady.</p>
              </div>
              <p style={{ fontSize: "0.82rem", color: "var(--parchment-faint)" }}>
                Poniżej: uproszczony, w pełni klikalny fragment takiej mapy. To realna mechanika gry — pokazana bez reszty interfejsu wokół.
              </p>
            </div>
            <ValleyMapIsland />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className={`${styles.mapBlock} ${styles.reverse}`}>
            <div className={styles.artFrame}>
              <SeasonWheel />
            </div>
            <div className={styles.mapNotes}>
              <span className="eyebrow">Rytm rozgrywki</span>
              <h2>Rok dzieli się na cztery tury, nie na godziny zegara</h2>
              <div className={styles.noteRow}>
                <span className={styles.noteMark}>W</span>
                <p><strong>Wiosna</strong> — siew, naprawy po zimie, pierwsze wyprawy zwiadowcze.</p>
              </div>
              <div className={styles.noteRow}>
                <span className={styles.noteMark}>L</span>
                <p><strong>Lato</strong> — szczyt produkcji, ale i najwyższe ryzyko posuchy przy złym rozplanowaniu pól.</p>
              </div>
              <div className={styles.noteRow}>
                <span className={styles.noteMark}>J</span>
                <p><strong>Jesień</strong> — żniwa i decyzje zapasowe: ile zostawić na zimę, ile zaryzykować na handel z wędrowcami.</p>
              </div>
              <div className={styles.noteRow}>
                <span className={styles.noteMark}>Z</span>
                <p><strong>Zima</strong> — zużycie zapasów, prace w budynkach krytych, czas na badania.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className={styles.mapBlock}>
            <div className={styles.artFrame}>
              <ScoutEncounter />
            </div>
            <div className={styles.mapNotes}>
              <span className="eyebrow">Napotkania</span>
              <h2>Wybory bez rzutu kością w tle</h2>
              <div className={styles.noteRow}>
                <span className={styles.noteMark}>→</span>
                <p>
                  Kiedy zwiadowcy trafiają na coś nietypowego — obcy obóz,
                  zamkniętą skrzynię, ranne zwierzę — dostajesz od dwóch do
                  trzech opcji reakcji. Wynik zależy od stanu twojej osady
                  (np. poziomu spójności czy liczby uzbrojonych osób), a nie
                  od losowego rzutu.
                </p>
              </div>
              <div className={styles.noteRow}>
                <span className={styles.noteMark}>→</span>
                <p>
                  Każde napotkanie ma konsekwencję zapisywaną na stałe w
                  historii tej konkretnej partii — łącznie z decyzjami, które
                  później wydają się błędem.
                </p>
              </div>
              <div className={styles.noteRow}>
                <span className={styles.noteMark}>→</span>
                <p>
                  Nie ma tu &bdquo;nagród&rdquo; w sensie loterii — jest
                  konsekwencja wyboru, czasem korzystna, czasem kosztowna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className={`${styles.mapBlock} ${styles.reverse}`}>
            <div className={styles.artFrame}>
              <TechTreeBranches />
            </div>
            <div className={styles.mapNotes}>
              <span className="eyebrow">Rozwój</span>
              <h2>Drzewo technologii, w którym nie da się mieć wszystkiego</h2>
              <div className={styles.noteRow}>
                <span className={styles.noteMark}>A</span>
                <p><strong>Gałąź uprawna</strong> — wydajniejsze pola, przechowalnie ograniczające straty zimowe.</p>
              </div>
              <div className={styles.noteRow}>
                <span className={styles.noteMark}>B</span>
                <p><strong>Gałąź budowlana</strong> — trwalsze konstrukcje, mniejsze zużycie surowców na naprawy.</p>
              </div>
              <div className={styles.noteRow}>
                <span className={styles.noteMark}>C</span>
                <p><strong>Gałąź badawcza</strong> — szybszy przyrost wiedzy, dostęp do rzadszych węzłów w pozostałych gałęziach.</p>
              </div>
              <div className={styles.noteRow}>
                <span className={styles.noteMark}>D</span>
                <p><strong>Gałąź społeczna</strong> — polityki wpływające na spójność i tempo przyjmowania nowych mieszkańców.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Tryby rozgrywki</span>
            <h2>Trzy poziomy trudności — trzy różne relacje z porażką</h2>
          </div>
          <div className={styles.diffGrid}>
            {DIFFICULTIES.map((d) => (
              <div key={d.title} className={`panel ${styles.diffCard}`}>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className={styles.mapBlock}>
            <div className={styles.mapNotes}>
              <span className="eyebrow">Po zakończeniu partii</span>
              <h2>Kronika, która opisuje wyłącznie twoją rozgrywkę</h2>
              <p style={{ fontSize: "0.92rem" }}>
                W trybie Kronikarz każda ukończona partia — niezależnie od
                tego, czy osada przetrwała, czy upadła — zamienia się w
                zapisany przebieg wydarzeń: które sezony były krytyczne,
                jakie decyzje podjąłeś przy pierwszym poważnym napotkaniu,
                ile lat przetrwała osada. To nie jest ranking ani porównanie
                z innymi graczami — to po prostu zapis tej jednej,
                niepowtarzalnej partii, do przeczytania później albo
                zachowania na pamiątkę.
              </p>
            </div>
            <div className={styles.artFrame}>
              <ChronicleScroll />
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="dla-kogo">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Zanim zaczniesz</span>
            <h2>Komu ta gra raczej się spodoba, a komu niekoniecznie</h2>
          </div>
          <div className={styles.audienceGrid}>
            <div className={`panel ${styles.audienceCard}`}>
              <h3>Prawdopodobnie polubisz tę grę, jeśli:</h3>
              <ul>
                <li>lubisz planować kilka ruchów naprzód, a nie klikać w reakcji na powiadomienia,</li>
                <li>wolisz jedną, spokojną sesję niż odwiedzanie gry co parę godzin,</li>
                <li>cenisz konsekwencje decyzji bardziej niż rywalizację z innymi,</li>
                <li>lubisz gry, w których porażka też jest częścią historii.</li>
              </ul>
            </div>
            <div className={`panel ${styles.audienceCard}`}>
              <h3>Prawdopodobnie nie jest to gra dla ciebie, jeśli:</h3>
              <ul>
                <li>szukasz rywalizacji i rankingów z innymi graczami,</li>
                <li>zależy ci na szybkiej, kilkusekundowej rozgrywce bez planowania,</li>
                <li>oczekujesz elementów losowych nagród albo mechanik opartych na szansie,</li>
                <li>wolisz grafikę 3D i pełną animację niż stonowaną, kameralną oprawę.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Pytania, które padają najczęściej</span>
            <h2>Zanim napiszesz do mnie z tym samym pytaniem</h2>
          </div>
          <div className={styles.faqList}>
            <details className={`panel ${styles.faqItem}`}>
              <summary>Czy trzeba coś instalować?</summary>
              <p>Nie. Gra działa bezpośrednio w przeglądarce, na komputerze — nie wymaga pobierania ani konta w sklepie z aplikacjami.</p>
            </details>
            <details className={`panel ${styles.faqItem}`}>
              <summary>Czy jest tryb wieloosobowy?</summary>
              <p>Nie i nie planuję go dodawać. To świadoma decyzja projektowa — cała mechanika budowana jest wokół tempa jednego gracza, bez porównywania wyników.</p>
            </details>
            <details className={`panel ${styles.faqItem}`}>
              <summary>Czy są zakupy w grze albo elementy losowe?</summary>
              <p>Nie. Żadnych skrzynek, losowań ani mechanik opartych na szansie wymiany realnych pieniędzy na wynik w grze. Postęp wynika wyłącznie z decyzji podejmowanych podczas rozgrywki.</p>
            </details>
            <details className={`panel ${styles.faqItem}`}>
              <summary>Gdzie zapisywany jest postęp?</summary>
              <p>Lokalnie, w przeglądarce na twoim urządzeniu. Więcej szczegółów opisuję w polityce prywatności.</p>
            </details>
            <details className={`panel ${styles.faqItem}`}>
              <summary>Ile trwa jedna partia?</summary>
              <p>To zależy od trybu. Scenariusze fabularne zamykają się zwykle w kilku godzinach rozłożonych na wiele sesji, tryb Bez Końca można prowadzić tak długo, jak starczy cierpliwości do zarządzania kolejnymi latami.</p>
            </details>
          </div>
        </div>
      </section>

      <section className={styles.closing}>
        <div className="wrap">
          <span className="eyebrow">Gotowy na pierwszy sezon?</span>
          <h2>Fragment mapy powyżej to niewielki wycinek tego, co dzieje się w pełnej rozgrywce.</h2>
          <div className={styles.closingActions}>
            <a href="/o-mechanice" className="btn btn-primary">Przeczytaj pełny opis mechaniki</a>
            <a href="/kontakt" className="btn btn-ghost">Napisz w sprawie gry</a>
          </div>
        </div>
      </section>
    </>
  );
}
