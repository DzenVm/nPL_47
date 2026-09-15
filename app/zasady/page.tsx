import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Regulamin",
  description: "Zasady korzystania z serwisu i rozgrywki.",
  alternates: { canonical: "/zasady" },
};

export default function RulesPage() {
  return (
    <article className={styles.article}>
      <div className={`wrap ${styles.header}`}>
        <span className="eyebrow">Zasady korzystania</span>
        <h1>Regulamin</h1>
        <p className={styles.updated}>Wersja robocza — obowiązująca od dnia uruchomienia serwisu pod docelową domeną.</p>
      </div>
      <div className={`wrap ${styles.content}`}>
        <h2>1. Charakter serwisu</h2>
        <p>
          Serwis prezentuje jednoosobową, turową grę strategiczną działającą
          w przeglądarce internetowej. Rozgrywka nie zawiera trybu
          wieloosobowego, nie porównuje wyników graczy między sobą i nie
          wymaga zakładania konta.
        </p>

        <h2>2. Brak elementów losowych nagród i płatności</h2>
        <p>
          W grze nie występują mechaniki oparte na przypadkowym losowaniu
          nagród, waluty premium wymienialne na realne pieniądze ani
          jakiekolwiek formy zakładów. Serwis nie pośredniczy w żadnych
          transakcjach pieniężnych związanych z przebiegiem rozgrywki.
        </p>

        <h2>3. Zapis postępu</h2>
        <p>
          Postęp w grze przechowywany jest lokalnie, w pamięci przeglądarki
          urządzenia gracza. Operator serwisu nie przechowuje kopii tych
          danych na serwerach zewnętrznych i nie ponosi odpowiedzialności za
          utratę zapisu w wyniku wyczyszczenia danych przeglądarki, zmiany
          urządzenia lub działania oprogramowania trzeciego.
        </p>

        <h2>4. Dostępność</h2>
        <p>
          Serwis udostępniany jest w stanie &bdquo;tak jak jest&rdquo;. Mogą
          występować przerwy techniczne związane z rozwojem lub konserwacją.
          Operator dokłada starań, aby ograniczyć ich czas trwania, ale nie
          gwarantuje nieprzerwanej dostępności.
        </p>

        <h2>5. Własność treści</h2>
        <p>
          Materiały graficzne, opisy mechaniki i teksty zamieszczone w
          serwisie stanowią treść autorską przygotowaną na potrzeby tego
          projektu i nie mogą być kopiowane w całości ani w części bez zgody
          operatora.
        </p>

        <h2>6. Zmiany regulaminu</h2>
        <p>
          Regulamin może zostać zaktualizowany wraz z rozwojem serwisu i
          rozgrywki. Aktualna wersja publikowana jest zawsze pod tym adresem,
          a data ostatniej aktualizacji widnieje w nagłówku strony.
        </p>

        <h2>7. Kontakt</h2>
        <p>
          Pytania dotyczące regulaminu można kierować przez stronę{" "}
          <a href="/kontakt">Kontakt</a>.
        </p>
      </div>
    </article>
  );
}
