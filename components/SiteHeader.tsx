import Link from "next/link";
import styles from "./SiteHeader.module.css";

const LINKS = [
  { href: "/#mechanika", label: "Mechanika" },
  { href: "/o-mechanice", label: "Opis rozgrywki" },
  { href: "/#dla-kogo", label: "Dla kogo jest ta gra" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.inner}`}>
        {/* miejsce na markę domeny — uzupełnione po podłączeniu adresu */}
        <div className={styles.logoSlot} aria-hidden="true" />
        <nav className={styles.nav} aria-label="Główna nawigacja">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={styles.navLink}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/#poznaj" className={styles.cta}>
          Zobacz rozgrywkę
        </Link>
      </div>
    </header>
  );
}
