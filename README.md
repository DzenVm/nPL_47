# Serwis gry — dokumentacja techniczna

Strona informacyjno-prezentacyjna jednoosobowej, turowej strategii
przeglądarkowej. Next.js 16 (App Router, SSR), TypeScript, własny CSS bez
frameworków UI. Jeden interaktywny blok na stronie głównej ("Fragment mapy")
zbudowany jest na Vue 3 i zamontowany jako wyspa kliencka wewnątrz
komponentu React — to świadomy wybór stosu, nie pomyłka w zależnościach.

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

## Build produkcyjny

```bash
npm run build
npm run start
```

## Deploy na Vercel

Projekt jest gotowy do wdrożenia jako standardowa aplikacja Next.js —
Vercel wykrywa framework automatycznie, `vercel.json` ustawia region `fra1`
(Frankfurt, najbliższy dostępny geograficznie region wobec Polski) oraz
podstawowe nagłówki bezpieczeństwa.

```bash
vercel deploy --prod
```

## Do uzupełnienia po przydzieleniu docelowej domeny

Poniższe miejsca zawierają świadomą zaślepkę domeny i wymagają podmiany
przed uruchomieniem produkcyjnym:

- `app/layout.tsx` — `metadataBase`
- `app/robots.ts` — adres w polu `sitemap`
- `app/sitemap.ts` — stała `BASE_URL`
- `components/SiteFooter.tsx` — widoczny placeholder adresu w stopce
- `app/kontakt/page.tsx` — docelowy adres e-mail kontaktowy

Poza tymi miejscami w serwisie nie ma innych zaślepek ani treści
tymczasowych.
