# Decisioni — importazione in GitHub

- Proprietario: `siti-web-torino`, come richiesto dall’utente.
- Nome: `genui-torino`, in minuscolo con trattino e indicazione della città.
- Visibilità: pubblica, su istruzione esplicita dell’utente.
- Base: template condiviso `siti-web-torino/template-vetrina`, con le sue regole conservate.
- Importazione fedele: conservare il sito attuale in `dist/`, senza trasformare la creazione della repo in una nuova riprogettazione o pubblicazione.
- Demo: conservare il link esistente. Il collegamento GitHub–Vercel è richiesto dall’utente per le pubblicazioni successive. GitHub Pages non viene attivato.
- Documentazione: distinguere verifiche già eseguite da lavoro non svolto, e segnalare autorizzazioni e dati mancanti con **[DA CONFERMARE]**.
- Responsabile del sito e contatto commerciale: **[DA CONFERMARE]**.

- Vercel: predisposto `vercel.json` per servire `dist/` come sito statico, senza build o dipendenze; conservato il blocco di indicizzazione della demo.


## Luxury Editorial Black & Glass — 3 novembre 2026

Il nuovo brief sostituisce la revisione minimale chiara. Scelta una gerarchia editoriale con grandi titoli serif, corsivi, numeri di sezione e fotografie su griglia asimmetrica. Cormorant Garamond da Google Fonts come richiesto, DM Sans locale. Nessuna nuova fotografia o modifica ai media.

Il video è un elemento fisso a z-index -2, con gradiente fisso a -1 e contenuto nello stacking context del body. Il grading scurisce i fotogrammi; i pannelli usano rgba(16,16,16,.68), blur 18px e bordo bianco al 14%. Sezioni aperte alternano il movimento ai pannelli.

Autoplay nativo più tentativo play() al caricamento. Microfade simmetrico tra 0,85 e 1 vicino alla fine e all’inizio del film di cinque secondi. Nessun IntersectionObserver interrompe il video quando si lascia la hero. Comando pausa sempre accessibile, pausa su scheda nascosta, poster con movimento ridotto o JavaScript non attivo.

Tutti i testi e i link sono statici, compresi quattro elementi della gallery, la biografia e tre richieste WhatsApp. La disponibilità dei prodotti resta da concordare con il locale.

Correzioni ancorate alle prove: a 1280×720 la prima hero misurava 922px; adattati titoli e spazi alla finestra per far rientrare azioni e reputazione. A 390px «Giambattista» aumentava lo scrollWidth a 442px: scala del titolo e min-width delle griglie corretti. La hero mobile ora mantiene il titolo su due righe e la barra entro la schermata.

Il campo vanilla mantiene le origini Madagascar/Tahiti/Messico nel racconto degli ingredienti e la dicitura Haiti nel Flan, come nelle due fonti e nel brief. Non vengono dichiarate equivalenti Tahiti e Haiti.
