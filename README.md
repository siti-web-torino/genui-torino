# GENUI — Pasticceria in fermento

Sito: https://genui-torino.vercel.app/
Repository esistente: https://github.com/siti-web-torino/genui-torino

## Revisione editoriale — 3 novembre 2026

Nuova direzione richiesta: fondo video immersivo su tutto il sito, nero e vetro, titoli Cormorant Garamond e testo DM Sans. Il video non è più un riquadro nella hero: è un livello fisso a tutto schermo, sotto il color grading e il contenuto.

Tutti i file già presenti in dist/assets/ sono conservati senza modifiche: fotografie, ritratto, logo, video e poster. Non sono state generate nuove immagini. La loro provenienza precedente resta descritta in MATERIALI.md.

## Sorgenti

- dist/index.html: sette sezioni, testi, immagini, didascalie, href, biografia completa, orari e richieste WhatsApp scritti direttamente nell’HTML. Gallery statica con layers.webp, fruit.webp, raspberry.webp e display.webp.
- dist/styles.css: impianto editoriale, pannelli in vetro scuro, video fisso, contrasto, microinterazioni, layout responsive e movimento ridotto.
- dist/app.js: navigazione mobile, lightbox, controllo del video, microfade tra 0,85 e 1 ai due estremi del loop, linee animate allo scroll.

Nessuna installazione o compilazione. Servire dist/ con un server HTTP che supporti video/mp4 e richieste Range. Sintassi: node --check dist/app.js.

DM Sans è ospitato localmente. Cormorant Garamond 400/600, normale e corsivo, viene caricato da Google Fonts come richiesto nel brief; in assenza di rete restano i fallback serif. Questa scelta esplicita sostituisce per questo font la regola generale del template sui CDN.

## Video

assets/genui-hero.mp4 mantiene i pixel e il montaggio del file esistente. Attributi autoplay, loop, muted, playsinline, preload auto e poster locale. Il player forza il tentativo di riproduzione al caricamento, gestendo un eventuale rifiuto del browser. Un controllo fisso permette pausa/ripresa. Il video resta attivo durante lo scorrimento, viene sospeso a scheda nascosta e rispetta il movimento ridotto. Senza app.js o senza JavaScript il poster resta come sfondo statico; testi e immagini restano leggibili.

Il microfade attenua il passaggio al riavvolgimento; non cambia né ricrea il montaggio originale e non promette un raccordo fisico tra fotogrammi diversi.

## Contenuti e contatti

Il nuovo brief fornisce la descrizione delle creazioni, ingredienti, servizi, Bauletto e grandi lievitati. La scheda Maps è stata riscontrata il 3 novembre 2026: 4,5 stelle con 311 recensioni, telefono 338 831 4564, apertura martedì–domenica 08–19 e lunedì chiuso. Fonte: https://maps.app.goo.gl/hcZBAPaypNwLetwn7 . Il badge riporta «oltre 310 recensioni». Nessuna valutazione autoattribuita nei dati strutturati.

Indirizzo completo del brief e delle fonti precedenti: Corso Francia 105 bis/B, 10138 Torino. La scheda Maps abbrevia il civico a 105. Biografia e prodotti riprendono il brief e le fonti conservate in LEGGIMI.md; non sono stati aggiunti premi, prezzi o recensioni inventate.

Tre richieste WhatsApp statiche, con messaggi distinti: Monoporzioni, Viennoiserie, Grandi Lievitati. L’invio avviene dall’utente dentro WhatsApp e la disponibilità va concordata con il negozio. Nessun ordine o messaggio è stato inviato durante le prove.

## SEO e pubblicazione

Canonical, Open Graph e dati strutturati Bakery puntano al dominio Vercel attuale. Title, description, indirizzo, telefono e orari sono statici. La richiesta SEO/GEO sostituisce il blocco noindex della vecchia demo: robots.txt e sitemap consentono la scansione. L’indicizzazione effettiva dipende dai motori di ricerca.

Si aggiorna la stessa repository, ramo main, attraverso l’integrazione Vercel già esistente: cartella dist, nessun build o install. Non viene creato un nuovo progetto e la precedente copia ChatGPT Sites non viene aggiornata automaticamente.

## Verifiche e materiali

Consultare VERIFICHE.md e docs/anteprime/editoriale-video/. Layout provato a 390, 768 e 1280px. Gallery e lightbox, controlli del video e collegamenti statici verificati. La biografia non è nascosta in un details.

Restano da completare per una versione ufficiale i dati legali, l’informativa definitiva e la conferma del titolare sui materiali e sull’offerta attuale. Il logo e le fotografie mantengono le lavorazioni già presenti: nessun nuovo intervento IA sui media.
