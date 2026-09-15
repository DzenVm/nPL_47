import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Zasady przetwarzania danych w serwisie.",
  alternates: { canonical: "/polityka-prywatnosci" },
};

export default function PrivacyPage() {
  return (
    <article className={styles.article}>
      <div className={`wrap ${styles.header}`}>
        <span className="eyebrow">Ochrona danych</span>
        <h1>Polityka prywatności</h1>
        <p className={styles.updated}>Wersja robocza — obowiązująca od dnia uruchomienia serwisu pod docelową domeną.</p>
      </div>
      <div className={`wrap ${styles.content}`}>
        <h2>1. Zakres przetwarzanych danych</h2>
        <p>
          Serwis w obecnej formie nie wymaga zakładania konta ani podawania
          danych osobowych, aby korzystać z prezentowanej mechaniki gry.
          Postęp rozgrywki zapisywany jest wyłącznie lokalnie, w pamięci
          przeglądarki (local storage) na urządzeniu użytkownika — te dane
          nie są przesyłane na żaden serwer i nie są operatorowi znane.
        </p>

        <h2>2. Dane przekazywane dobrowolnie</h2>
        <p>
          Jeśli skontaktujesz się z nami poprzez adres e-mail podany na
          stronie Kontakt, przetwarzamy przekazane w ten sposób dane (adres
          e-mail, treść wiadomości) wyłącznie w celu udzielenia odpowiedzi.
          Nie wykorzystujemy tych danych do celów marketingowych bez odrębnej
          zgody.
        </p>

        <h2>3. Pliki cookie i technologie lokalne</h2>
        <p>
          Serwis może wykorzystywać technicznie niezbędne mechanizmy
          przechowywania danych w przeglądarce (np. local storage) do
          zapamiętania stanu rozgrywki. Jeśli w przyszłości zostaną
          wdrożone narzędzia analityczne lub reklamowe korzystające z
          plików cookie, informacja o tym oraz sposób zarządzania zgodami
          zostaną opisane w tej sekcji przed ich uruchomieniem.
        </p>

        <h2>4. Dzieci</h2>
        <p>
          Serwis nie jest kierowany do dzieci i nie zbiera świadomie danych
          osobowych osób poniżej 16 roku życia. Jeśli opiekun prawny uzna, że
          takie dane zostały przekazane, prosimy o kontakt w celu ich
          usunięcia.
        </p>

        <h2>5. Prawa użytkownika</h2>
        <p>
          W zakresie danych przekazanych dobrowolnie w wiadomości kontaktowej
          przysługuje prawo do wglądu, sprostowania oraz żądania usunięcia
          tych danych. Wniosek można zgłosić przez stronę{" "}
          <a href="/kontakt">Kontakt</a>.
        </p>

        <h2>6. Zmiany polityki</h2>
        <p>
          W miarę rozwoju serwisu treść polityki prywatności może zostać
          zaktualizowana, w szczególności przy wdrażaniu nowych funkcji
          technicznych. Aktualna wersja zawsze publikowana jest pod tym
          adresem.
        </p>
      </div>
    </article>
  );
}
