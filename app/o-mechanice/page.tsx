import type { Metadata } from "next";
import styles from "./page.module.css";
import HexMapFragment from "@/components/illustrations/HexMapFragment";

export const metadata: Metadata = {
  title: "Pełny opis mechaniki gry",
  description:
    "Szczegółowy opis zasad: system tur, populacja i przydział pracy, cztery zasoby, mapa i zwiad, drzewo technologii, poziomy trudności oraz zasady zapisu postępu.",
  alternates: { canonical: "/o-mechanice" },
};

export default function MechanicsPage() {
  return (
    <article className={styles.article}>
      <div className={`wrap ${styles.header}`}>
        <span className="eyebrow">Dokumentacja rozgrywki</span>
        <h1>Jak naprawdę działa ta gra — bez skrótów marketingowych</h1>
        <p>
          Ten tekst jest dłuższy niż zwykła strona produktowa, bo wolę raz
          opisać zasady dokładnie, niż tłumaczyć je później w wiadomościach.
          Jeśli zastanawiasz się, czy ta gra jest dla ciebie — tutaj znajdziesz
          odpowiedź, nie w haśle reklamowym.
        </p>
      </div>

      <div className={`wrap ${styles.layout}`}>
        <nav className={styles.toc} aria-label="Spis treści">
          <a href="#tury">System tur</a>
          <a href="#populacja">Populacja i praca</a>
          <a href="#zasoby">Cztery zasoby</a>
          <a href="#mapa">Mapa i zwiad</a>
          <a href="#technologia">Drzewo technologii</a>
          <a href="#trudnosc">Poziomy trudności</a>
          <a href="#zapis">Zapis postępu</a>
          <a href="#czego-nie-ma">Czego tu nie ma</a>
        </nav>

        <div className={styles.content}>
          <h2 id="tury">System tur</h2>
          <p>
            Rok gry dzieli się na cztery tury odpowiadające porom roku. W
            każdej turze przydzielasz mieszkańców do zadań — pracy na polach,
            przy wydobyciu, w warsztatach, w obserwatorium — a następnie
            kończysz turę. Gra oblicza wtedy produkcję, zużycie zapasów oraz
            ewentualne zdarzenia sezonowe i przechodzi do kolejnej pory roku.
            Nie ma tu odliczania w czasie rzeczywistym — możesz zamknąć kartę
            przeglądarki w trakcie planowania tury i wrócić do niej godzinę
            albo tydzień później, nic się w tym czasie nie zmieni.
          </p>

          <h2 id="populacja">Populacja i przydział pracy</h2>
          <p>
            Każdy mieszkaniec osady to osobna jednostka z dwiema cechami:
            kondycją i specjalizacją (rolnik, budowniczy, uczony lub bez
            specjalizacji — &bdquo;niewyszkolony&rdquo;). Przydzielenie
            specjalisty do zadania zgodnego z jego umiejętnością daje premię
            produkcyjną rzędu 30&nbsp;procent względem osoby niewyszkolonej.
            Populacja rośnie powoli — poprzez przyrost naturalny przy wysokiej
            spójności oraz przez przyjmowanie wędrowców napotkanych na mapie
            lub proszących o przyjęcie na granicy Zasłony.
          </p>
          <p>
            Nadmierne rozciągnięcie populacji na zbyt wiele jednoczesnych
            zadań to najczęstszy błąd początkujących: lepiej mieć pięć dobrze
            obsadzonych stanowisk niż dziesięć obsadzonych połowicznie.
          </p>

          <h2 id="zasoby">Cztery zasoby</h2>
          <p>
            Zasoby nie wymieniają się między sobą jeden do jednego — nie ma
            rynku wewnętrznego ani kursu wymiany. Każdy z nich rozwiązuje
            inny rodzaj problemu.
          </p>
          <table>
            <thead>
              <tr>
                <th>Zasób</th>
                <th>Źródło</th>
                <th>Ryzyko przy braku</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Żywność</td>
                <td>Pola, sady, obozy myśliwskie</td>
                <td>Głód, spadek kondycji, emigracja</td>
              </tr>
              <tr>
                <td>Surowce</td>
                <td>Tartak, kamieniołom, odzysk z ruin</td>
                <td>Brak napraw, wolniejsza rozbudowa</td>
              </tr>
              <tr>
                <td>Wiedza</td>
                <td>Obserwatorium, praca uczonych</td>
                <td>Zastój technologiczny</td>
              </tr>
              <tr>
                <td>Spójność</td>
                <td>Udane sezony, korzystne wybory w napotkaniach</td>
                <td>Ryzyko buntu części osady</td>
              </tr>
            </tbody>
          </table>

          <h2 id="mapa">Mapa i zwiad</h2>
          <p>
            Mapa doliny podzielona jest na pola heksagonalne. Osada zajmuje
            pole centralne, a sąsiednie pola pozostają zasłonięte mgłą, dopóki
            nie wyślesz tam grupy zwiadowczej. Wyprawa zajmuje jedną turę i
            wiąże się z niewielkim kosztem żywności dla uczestników. Po
            powrocie pole zostaje trwale odkryte — jego typ terenu i zasoby są
            stałe, ustalone raz na start konkretnej partii, a nie losowane
            ponownie przy każdym najściu.
          </p>
          <div className={styles.illo}>
            <HexMapFragment />
          </div>
          <p>
            Część pól zawiera napotkania — krótkie sceny fabularne z dwiema
            lub trzema opcjami reakcji. Wynik zależy od parametrów twojej
            osady w danym momencie (na przykład poziomu spójności albo liczby
            osób ze specjalizacją budowniczego), nie od losowego rzutu w tle.
            Dzięki temu ta sama sytuacja, powtórzona przy innym stanie osady,
            może zakończyć się inaczej — ale zawsze w sposób możliwy do
            przewidzenia na podstawie widocznych statystyk.
          </p>

          <h2 id="technologia">Drzewo technologii</h2>
          <p>
            Cztery gałęzie — uprawna, budowlana, badawcza i społeczna — łącznie
            obejmują około trzydziestu węzłów. Koszt każdego kolejnego węzła w
            gałęzi rośnie, więc rozwijanie jednej ścieżki do końca oznacza
            rezygnację z szybkiego rozwoju pozostałych trzech. Gałąź badawcza
            jest tu wyjątkowa — nie daje bezpośrednich bonusów produkcyjnych,
            za to obniża koszt węzłów w innych gałęziach, co czyni ją
            wartościową inwestycją długoterminową kosztem wolniejszego
            startu.
          </p>

          <h2 id="trudnosc">Poziomy trudności</h2>
          <p>
            <strong>Osadnik</strong> łagodzi zdarzenia losowe i startowe
            zapasy — dobry wybór na pierwszą partię.{" "}
            <strong>Zarządca</strong> to domyślny balans, w którym testowałem
            większość wartości liczbowych opisanych powyżej.{" "}
            <strong>Kronikarz</strong> wyłącza możliwość wczytania wcześniejszego
            zapisu po niekorzystnym zdarzeniu — decyzje zostają podjęte na
            stałe. Po zakończeniu partii w tym trybie generowany jest
            tekstowy zapis przebiegu rozgrywki, unikalny dla tej konkretnej
            osady.
          </p>

          <h2 id="zapis">Zapis postępu</h2>
          <p>
            Stan rozgrywki zapisywany jest lokalnie, w pamięci przeglądarki na
            twoim urządzeniu. Nie zakłada się konta ani nie przesyła się
            stanu gry na serwer zewnętrzny. Oznacza to też, że wyczyszczenie
            danych przeglądarki usunie zapis — warto o tym pamiętać przy
            dłuższych partiach.
          </p>

          <h2 id="czego-nie-ma">Czego tu nie ma</h2>
          <p>
            Świadomie zrezygnowałem z kilku mechanik popularnych w innych
            grach przeglądarkowych:
          </p>
          <ul>
            <li>brak trybu wieloosobowego i rankingów graczy,</li>
            <li>brak zakupów w grze, walut premium i skrzynek z losową zawartością,</li>
            <li>brak liczników czasu wymuszających logowanie o stałych porach,</li>
            <li>brak reklam wyświetlanych w trakcie samej rozgrywki.</li>
          </ul>
          <p>
            To nie jest lista &bdquo;na razie&rdquo; — to świadomy kierunek
            projektu.
          </p>
        </div>
      </div>
    </article>
  );
}
