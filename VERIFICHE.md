# Verifiche — revisione del 28 ottobre 2026

## Controlli completati

- Sintassi JavaScript verificata con `node --check dist/app.js`.
- HTML: un solo H1, ID univoci, collegamenti interni validi, riferimenti a immagini/font/video/stili/script esistenti e testi alternativi presenti sulle immagini.
- Palette CSS centralizzata: fondo, testo, testo secondario, divisori e superficie della mappa sono tutti neutri.
- Controllo visivo nel browser desktop (finestra 1363 px; area documento 1348 px) e in un iframe mobile largo 390 px, con area utile 375 px per la barra di scorrimento.
- Nessuno sbordo orizzontale nel documento desktop o mobile. Controllati anche i limiti dei titoli, dei paragrafi e delle immagini mobile.
- Menu mobile aperto e chiuso selezionando Creazioni; stato ARIA aggiornato e blocco dello scorrimento rimosso alla chiusura.
- Video: riproduzione automatica silenziosa e pausa manuale osservate; il comando passa da Pausa a Riproduci. Movimento ridotto e sospensione fuori vista gestiti nel codice.
- Galleria aperta, fotografia successiva caricata e finestra chiusa.
- Biografia completa aperta dal controllo Il percorso.

La verifica mobile usa il browser in un iframe a larghezza controllata, non un dispositivo fisico. La mappa esterna e i collegamenti telefonici non sono stati attivati. Nessun audit completo di accessibilità, prestazioni o compatibilità tra browser è dichiarato.

Le pagine temporanee usate per la verifica responsive vengono rimosse prima della preparazione del pacchetto pubblicato.
