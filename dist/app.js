/* Contenuti e collegamenti sono nell’HTML. Qui soltanto i miglioramenti interattivi. */
(() => {
  'use strict';
  document.body.classList.add('has-js');
  const nav = document.querySelector('#main-nav');
  const menu = document.querySelector('.menu-toggle');
  const lightbox = document.querySelector('#lightbox');
  menu.hidden = false;
  const syncLock = () => document.body.classList.toggle('scroll-locked', nav.classList.contains('is-open') || lightbox.open);
  function setMenu(open, restoreFocus = false) {
    nav.classList.toggle('is-open', open);
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Chiudi menu' : 'Apri menu');
    syncLock();
    if (open) nav.querySelector('a').focus({preventScroll:true});
    else if (restoreFocus) menu.focus();
  }
  menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (!nav.classList.contains('is-open')) return;
    if (event.key === 'Escape') setMenu(false, true);
    if (event.key === 'Tab') {
      const last = [...nav.querySelectorAll('a')].at(-1);
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); menu.focus(); }
      else if (event.shiftKey && document.activeElement === menu) { event.preventDefault(); last.focus(); }
    }
  });
  matchMedia('(max-width:900px)').addEventListener('change', () => setMenu(false));
  let scrollFrame = 0;
  const updateHeader = () => {
    scrollFrame = 0;
    document.body.classList.toggle('has-scrolled', window.scrollY > 32);
  };
  addEventListener('scroll', () => { if (!scrollFrame) scrollFrame = requestAnimationFrame(updateHeader); }, {passive:true});
  updateHeader();
  if ('IntersectionObserver' in window) {
    const lines = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); lines.unobserve(entry.target); }
    }), {threshold:0, rootMargin:'0px 0px -8% 0px'});
    document.querySelectorAll('.section').forEach(section => lines.observe(section));
  } else document.querySelectorAll('.section').forEach(section => section.classList.add('is-visible'));

  const images = [...document.querySelectorAll('.gallery-item')];
  let currentImage = 0;
  let originLink;
  function showImage(index) {
    currentImage = (index + images.length) % images.length;
    const selected = images[currentImage];
    const image = lightbox.querySelector('figure img');
    image.src = selected.getAttribute('href');
    image.alt = selected.querySelector('img').alt;
    lightbox.querySelector('figcaption').textContent = selected.dataset.caption;
    lightbox.querySelector('.lightbox-count').textContent = `${String(currentImage + 1).padStart(2,'0')} / ${String(images.length).padStart(2,'0')}`;
  }
  if (typeof lightbox.showModal === 'function') {
    images.forEach((link, index) => link.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      originLink = link;
      showImage(index);
      lightbox.showModal();
      syncLock();
    }));
  }
  lightbox.querySelector('.previous-image').addEventListener('click', () => showImage(currentImage - 1));
  lightbox.querySelector('.next-image').addEventListener('click', () => showImage(currentImage + 1));
  lightbox.querySelector('.close-lightbox').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') { event.preventDefault(); showImage(currentImage + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); showImage(currentImage - 1); }
  });
  lightbox.addEventListener('close', () => { syncLock(); originLink?.focus({preventScroll:true}); });
  lightbox.addEventListener('click', event => {
    if (event.target !== lightbox) return;
    const box = lightbox.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) lightbox.close();
  });

  const film = document.querySelector('#site-film');
  const control = document.querySelector('.video-control');
  const reduced = matchMedia('(prefers-reduced-motion:reduce)');
  let userPaused = false;
  control.hidden = false;
  film.muted = true;
  film.defaultMuted = true;
  film.playsInline = true;
  function updateControl() {
    const active = !film.paused && !film.error;
    control.setAttribute('aria-pressed', String(active));
    control.setAttribute('aria-label', active ? 'Metti in pausa il video di sfondo' : 'Riproduci il video di sfondo');
    control.querySelector('.video-control-mark').textContent = active ? 'Ⅱ' : '▷';
    control.querySelector('.video-control-label').textContent = active ? 'Pausa video' : 'Riproduci video';
  }
  const attemptPlay = () => { const playback = film.play(); if (playback?.catch) playback.catch(updateControl); };
  function syncFilm() {
    if (!reduced.matches && !userPaused && !document.hidden) attemptPlay();
    else film.pause();
    updateControl();
  }
  control.addEventListener('click', () => {
    if (film.paused) { userPaused = false; document.body.classList.add('motion-consented'); attemptPlay(); }
    else { userPaused = true; film.pause(); document.body.classList.remove('motion-consented'); }
  });
  film.addEventListener('loadeddata', syncFilm);
  film.addEventListener('play', updateControl);
  film.addEventListener('pause', updateControl);
  film.addEventListener('error', updateControl);
  // La stessa opacità ai due estremi attenua il passaggio sul loop nativo.
  film.addEventListener('timeupdate', () => {
    if (reduced.matches || !Number.isFinite(film.duration) || film.duration <= 0) { film.style.opacity = '1'; return; }
    const fade = Math.min(.65, film.duration / 5);
    const edge = Math.min(film.currentTime, Math.max(0, film.duration - film.currentTime));
    film.style.opacity = String(.85 + .15 * Math.min(1, edge / fade));
  });
  reduced.addEventListener('change', () => { document.body.classList.remove('motion-consented'); syncFilm(); });
  document.addEventListener('visibilitychange', syncFilm);
  syncFilm();
})();
