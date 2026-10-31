// Animation is opt-in to this script, so a missing script never hides content
// or leaves an animation running without an available pause control.
const cover = document.querySelector('.cover');
const dock = document.querySelector('.browse-dock');
if (dock) {
  const summary = dock.querySelector('summary');
  const hero = document.querySelector('.atlas-hero');
  if (hero && 'IntersectionObserver' in window) {
    const sync = hidden => { dock.hidden = hidden; if (hidden) dock.open = false; };
    sync(hero.getBoundingClientRect().bottom > 80);
    new IntersectionObserver(([entry]) => sync(entry.intersectionRatio > .15), {
      threshold: [0,.15]
    }).observe(hero);
  }
  document.addEventListener('click', e => {
    if (!dock.contains(e.target) || e.target.closest('a')) dock.open = false;
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && dock.open) { dock.open = false; summary.focus(); }
  });
}
const toggle = document.querySelector('#motion-toggle');
if (cover && toggle) {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let userPaused = false;
  try { userPaused = localStorage.getItem('atlas-motion') === 'paused'; } catch { /* Storage is optional. */ }
  function updateMotion() {
    const paused = reducedMotion.matches || userPaused;
    cover.dataset.motion = paused ? 'paused' : 'running';
    toggle.hidden = reducedMotion.matches;
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.querySelector('.motion-pause').hidden = paused;
    toggle.querySelector('.motion-resume').hidden = !paused;
    toggle.querySelector('.motion-icon').textContent = paused ? '▷' : 'Ⅱ';
  }
  toggle.addEventListener('click', () => {
    userPaused = !userPaused;
    try { localStorage.setItem('atlas-motion', userPaused ? 'paused' : 'running'); } catch { /* Storage is optional. */ }
    updateMotion();
  });
  reducedMotion.addEventListener('change', updateMotion);
  updateMotion();
}
