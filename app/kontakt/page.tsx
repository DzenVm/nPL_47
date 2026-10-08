import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Dane kontaktowe w sprawach dotyczących serwisu i gry.",
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return (
    <article className={styles.article}>
      <div className={`wrap ${styles.header}`}>
        <span className="eyebrow">Napisz</span>
        <h1>Kontakt</h1>
      </div>
      <div className={`wrap ${styles.content}`}>
        <p>
          Adres e-mail do kontaktu zostanie aktywowany wraz z uruchomieniem
          serwisu pod docelową domeną — do tego czasu ta sekcja pozostaje
          zaślepką techniczną. Docelowo pod tym adresem można będzie zgłaszać:
        </p>
        <ul>
          <li>uwagi do opisu mechaniki lub zauważone nieścisłości,</li>
          <li>problemy techniczne z działaniem strony,</li>
          <li>pytania dotyczące regulaminu i polityki prywatności,</li>
          <li>wnioski związane z danymi przekazanymi w wiadomości.</li>
        </ul>
        <p>
          Adres docelowy: <em>kontakt@zervuqanil.click</em>
        </p>
      </div>
    </article>
  );
}
