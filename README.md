# GENUI — Pasticceria in fermento, Torino

Proposta indipendente di sito vetrina. Repository pubblico creato nell’organizzazione `siti-web-torino` dal template `template-vetrina`, su richiesta dell’utente.

## Demo attuale

https://genui-proposta-torino-271026.modestknoll65.chatgpt.site/

Il link è pubblico e non richiede l’accesso a ChatGPT. Questo repository contiene una copia del sito attuale. Gli aggiornamenti non vengono pubblicati automaticamente sulla demo ChatGPT indicata sopra.

## Aprire e modificare il sito

I file pronti da servire sono in `dist/`. Non sono necessari framework, compilazione o installazione di dipendenze.

- `dist/index.html`: testi, contatti, sezioni e riferimenti alle immagini.
- `dist/styles.css`: colori, tipografia, griglie e adattamento mobile.
- `dist/app.js`: menu mobile, galleria, biografia, video e note.
- `dist/assets/`: fotografie, video, logo e font locale con licenza.

Per un’anteprima locale: `python3 -m http.server 8000 --directory dist` e aprire `http://localhost:8000/`.

Il sito mantiene `noindex,nofollow` e il blocco della scansione in `robots.txt`, come nella demo esistente. Non è attivato alcun hosting GitHub Pages.

## Vercel

Il file `vercel.json` prepara il progetto per Vercel: framework Other, cartella di uscita `dist`, nessuna compilazione o installazione, header `X-Robots-Tag: noindex, nofollow`. Importare questo repository con la cartella principale `./` e il ramo di produzione `main`. Una volta collegato il progetto Vercel, i commit sul ramo di produzione attivano il deploy automatico.

Il link Vercel e il primo deploy restano **[DA CONFERMARE]** fino alla verifica della pubblicazione.

## Regole condivise

`CLAUDE.md` è la copia ricevuta dal template. Le modifiche alle regole generali vanno fatte nel template condiviso e poi recepite nei singoli progetti. Il sito è precedente all’importazione nel template: le differenze sono dichiarate nel rapporto, senza attribuire retroattivamente ricerche o verifiche non svolte.

## Da confermare prima della versione ufficiale

- **[DA CONFERMARE]** Approvazione del titolare di GENUI e testi definitivi.
- **[DA CONFERMARE]** Orari, recapiti, offerta attuale e informazioni biografiche.
- **[DA CONFERMARE]** Diritti di uso e pubblicazione delle fotografie e dei video; consenso per il ritratto riconoscibile del fondatore.
- **[DA CONFERMARE]** Logo ufficiale: il file attuale è una ricostruzione precedente dell’insegna.
- **[DA CONFERMARE]** Dati legali e informativa privacy definitiva.
- **[DA CONFERMARE]** Responsabile del progetto, referente commerciale e hosting definitivo.

Non è allegata una licenza che conceda il riutilizzo di foto, video o marchio. La visibilità pubblica del repository non equivale a un’autorizzazione al loro riutilizzo.

## Documentazione

Leggere `RAPPORTO.md`, `STUDIO.md`, `DECISIONI.md`, `MATERIALI.md` e `VERIFICHE.md`. `LEGGIMI.md` conserva le note della versione importata.
