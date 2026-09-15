import type { Metadata, Viewport } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://przyklad-domeny-zostanie-podmieniona.pl"),
  title: {
    default: "Strategia przeglądarkowa o dolinie odciętej Zasłoną",
    template: "%s",
  },
  description:
    "Jednoosobowa, turowa strategia przeglądarkowa bez pobierania: zarządzaj ostatnią osadą w dolinie odciętej od świata, prowadź zwiad i rozwijaj wiedzę pokolenie po pokoleniu.",
  keywords: [
    "gra strategiczna przeglądarkowa",
    "strategia turowa online",
    "gra jednoosobowa w przeglądarce",
    "gra bez pobierania",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    title: "Strategia przeglądarkowa o dolinie odciętej Zasłoną",
    description:
      "Turowa, jednoosobowa strategia w przeglądarce. Bez pobierania, bez elementów losowych nagród, bez rywalizacji z innymi graczami.",
  },
};

export const viewport: Viewport = {
  themeColor: "#12151a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <a href="#glowna-tresc" className="skip-link">
          Przejdź do treści głównej
        </a>
        <SiteHeader />
        <main id="glowna-tresc">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
