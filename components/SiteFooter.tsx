import Link from "next/link";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.col}>
          <p className={styles.note}>
            Strona ma charakter informacyjny — przedstawia mechanikę gry
            przeglądarkowej, jednoosobowej, bez elementów losowych nagród i
            bez trybu wieloosobowego.
          </p>
          <p className={styles.domainPlaceholder}>
            Adres strony: <a href="https://zervuqanil.click" className={styles.domainLink}>zervuqanil.click</a>
          </p>
        </div>
        <nav className={styles.col} aria-label="Informacje prawne">
          <Link href="/zasady" className={styles.link}>Regulamin</Link>
          <Link href="/polityka-prywatnosci" className={styles.link}>Polityka prywatności</Link>
          <Link href="/kontakt" className={styles.link}>Kontakt</Link>
        </nav>
        <div className={styles.col}>
          <p className={styles.copy}>© {year}. Wszelkie prawa zastrzeżone.</p>
          <p className={styles.copy}>Bez rejestracji i bez podawania danych płatniczych.</p>
        </div>
      </div>
    </footer>
  );
}
