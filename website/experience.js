// Animation is opt-in to this script, so a missing script never hides content
// or leaves an animation running without an available pause control.
const cover = document.querySelector('.cover');
// The phone navigation pill steps aside while reading down and returns on the way up.
let lastY = scrollY;
addEventListener('scroll', () => {
  if (Math.abs(scrollY - lastY) < 8) return;
  document.body.classList.toggle('nav-tucked', scrollY > lastY && scrollY > 120);
  lastY = scrollY;
}, { passive: true });
// Outbound links count as GoatCounter events, without the query string; a blocked script just skips them.
function countOutbound(event) {
  if (event.type === 'auxclick' && event.button !== 1) return;
  const link = event.target.closest('a[href]');
  if (!link || !/^https?:$/.test(link.protocol) || link.host === location.host) return;
  window.goatcounter?.count?.({ path: `out:${link.host}${link.pathname}`, title: location.pathname, event: true });
}
document.addEventListener('click', countOutbound);
document.addEventListener('auxclick', countOutbound);
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
