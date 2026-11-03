# GENUI — verifica della revisione editoriale del 3 novembre 2026

Storia: il visitatore entra sopra un video immersivo, legge l’offerta, scopre il fondatore, apre la gallery e prepara una richiesta WhatsApp per il ritiro.

- Sintassi JavaScript verificata con node --check dist/app.js.
- Nessuna modifica in dist/assets/: video, poster, logo e fotografie esistenti preservati.
- Video: attributi autoplay/loop/muted/playsinline/preload auto, durata rilevata 5 s, readyState 4, riproduzione attiva; bounding box fisso 1280×720 e top 0 anche scorrendo oltre la hero. Pulsante pausa/ripresa funzionante.
- Serif Cormorant Garamond caricato e applicato ai titoli; DM Sans locale.
- Hero su desktop 1280×720 corretta a 720px di altezza, barra reputazione entro la finestra. Mobile 390×844 senza overflow e con barra entro la schermata.
- Lightbox: prima immagine aperta correttamente, successiva con contatore 02/04, chiusura via Escape e sblocco dello scorrimento.
- Menu mobile apribile e richiudibile via Escape.
- Quattro gallery item già nell’HTML con immagini, alt, href e didascalie. Biografia completa visibile senza apertura di dettagli.
- Nessun asset locale mancante, ID duplicato, ancora rotta o about:invalid. Canonical Vercel, schema Bakery con telefono e sei giorni 08–19.
- WhatsApp: tre messaggi distinti, numero 393388314564 e testi URL codificati; nessun messaggio inviato.
- Senza JavaScript: contenuti statici, gallery, telefono e WhatsApp disponibili; poster al posto del movimento. Movimento ridotto gestito nel CSS e nel controllo del player.
- Screenshot a 390, 768 e 1280px in docs/anteprime/editoriale-video/.

Non sono state verificate disponibilità reale o richieste commerciali. Il microfade ammorbidisce il loop nativo, non modifica il montaggio. Il caricamento del font Google richiede rete; i fallback serif restano disponibili.
