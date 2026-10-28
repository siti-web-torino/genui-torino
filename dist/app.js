const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
const dialogs = [...document.querySelectorAll('dialog')];

function syncScrollLock() {
  document.body.classList.toggle('scroll-locked', !mobileMenu.hidden || dialogs.some(dialog => dialog.open));
}
function closeMenu(restoreFocus = false) {
  const wasOpen = !mobileMenu.hidden;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Apri menu');
  mobileMenu.hidden = true;
  syncScrollLock();
  if (restoreFocus && wasOpen) menuButton.focus();
}
menuButton.addEventListener('click', () => {
  if (!mobileMenu.hidden) return closeMenu(true);
  mobileMenu.hidden = false;
  menuButton.setAttribute('aria-expanded', 'true');
  menuButton.setAttribute('aria-label', 'Chiudi menu');
  syncScrollLock();
  mobileMenu.querySelector('a').focus({preventScroll: true});
});
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  const target = document.querySelector(link.getAttribute('href'));
  closeMenu();
  if (target) {
    target.setAttribute('tabindex', '-1');
    target.focus({preventScroll: true});
    target.addEventListener('blur', () => target.removeAttribute('tabindex'), {once: true});
  }
}));
document.addEventListener('keydown', event => {
  if (mobileMenu.hidden) return;
  if (event.key === 'Escape') closeMenu(true);
  if (event.key === 'Tab') {
    const links = [...mobileMenu.querySelectorAll('a')];
    if (event.shiftKey && document.activeElement === links[0]) {
      event.preventDefault();
      menuButton.focus();
    } else if (event.shiftKey && document.activeElement === menuButton) {
      event.preventDefault();
      links.at(-1).focus();
    } else if (!event.shiftKey && document.activeElement === links.at(-1)) {
      event.preventDefault();
      menuButton.focus();
    }
  }
});
window.addEventListener('resize', () => {if (innerWidth > 760) closeMenu();});

const lightbox = document.querySelector('#lightbox');
const items = [...document.querySelectorAll('.gallery-item')];
let current = 0;
function showImage(index) {
  current = (index + items.length) % items.length;
  const item = items[current];
  const image = lightbox.querySelector('img');
  image.src = item.dataset.image;
  image.alt = item.querySelector('img').alt;
  lightbox.querySelector('figcaption').textContent = item.dataset.caption;
}
items.forEach((item, index) => item.addEventListener('click', () => {
  showImage(index);
  lightbox.showModal();
  syncScrollLock();
}));
lightbox.querySelector('.prev').addEventListener('click', () => showImage(current - 1));
lightbox.querySelector('.next').addEventListener('click', () => showImage(current + 1));
lightbox.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') showImage(current + 1);
  if (event.key === 'ArrowLeft') showImage(current - 1);
});
dialogs.forEach(dialog => {
  dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', syncScrollLock);
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
});

const loadMap = document.querySelector('#load-map');
loadMap.addEventListener('click', () => {
  const frame = document.createElement('iframe');
  frame.title = 'Genui, corso Francia 105 bis/B, Torino';
  frame.src = 'https://maps.google.com/maps?q=Genui%20Corso%20Francia%20105%20bis%20Torino&t=&z=16&ie=UTF8&iwloc=&output=embed';
  frame.referrerPolicy = 'no-referrer';
  frame.loading = 'lazy';
  document.querySelector('.map-panel').replaceChildren(frame);
});

const legal = document.querySelector('#legal');
const notes = {
  privacy: ['Privacy e dati', '<p>Questa è una proposta indipendente. Non contiene moduli, strumenti di analisi, account o sistemi di ordine e non utilizza cookie applicativi.</p><p>La mappa viene caricata solo su richiesta e comporta una connessione a Google. I collegamenti a Instagram e Google Maps aprono servizi esterni, soggetti alle rispettive informative.</p><p>Per la versione ufficiale occorrerà inserire i dati del titolare e l’informativa definitiva, in base alle integrazioni effettivamente attive.</p>'],
  crediti: ['Note della proposta', '<p>Proposta indipendente, non commissionata e non approvata da GENUI. Le fotografie e il video sono stati forniti dall’utente. Le foto sono rielaborate con IA per luce, colore e pulizia dello sfondo.</p><p>Il logo è ricostruito dalla fotografia dell’insegna. Il video originale è ritagliato per escludere le scritte. Testi e diritti d’uso dei materiali restano da confermare.</p>']
};
document.querySelectorAll('.legal-trigger').forEach(button => button.addEventListener('click', () => {
  const note = notes[button.dataset.legal];
  document.querySelector('#legal-title').textContent = note[0];
  document.querySelector('#legal-content').innerHTML = note[1];
  legal.showModal();
  syncScrollLock();
}));

const film = document.querySelector('#hero-video');
const filmButton = document.querySelector('.hero-control');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let userPaused = false;
let filmInView = false;
function updateFilmButton() {
  filmButton.setAttribute('aria-label', film.paused ? 'Riproduci il video di sfondo' : 'Metti in pausa il video di sfondo');
  filmButton.querySelector('.control-icon').textContent = film.paused ? '▷' : 'Ⅱ';
  filmButton.querySelector('.control-label').textContent = film.paused ? 'Riproduci' : 'Pausa';
}
function syncFilm() {
  if (filmInView && !reducedMotion.matches && !userPaused && !document.hidden) film.play().catch(updateFilmButton);
  else film.pause();
}
filmButton.addEventListener('click', () => {
  if (film.paused) {
    userPaused = false;
    film.play().catch(updateFilmButton);
  } else {
    userPaused = true;
    film.pause();
  }
});
film.addEventListener('play', updateFilmButton);
film.addEventListener('pause', updateFilmButton);
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    filmInView = entries[0].isIntersecting;
    syncFilm();
  }, {threshold: .1});
  observer.observe(film);
}
reducedMotion.addEventListener('change', syncFilm);
document.addEventListener('visibilitychange', syncFilm);
updateFilmButton();
