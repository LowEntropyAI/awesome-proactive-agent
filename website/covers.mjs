// Editorial artwork is orientation, never a reconstruction of a paper's method.
const base = '/awesome-proactive-agent/assets/editorial/';
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function editorialThumbnail(id, title, source, category = 'Research') {
  return {src:base+id+'.svg',original:base+id+'.svg',source,alt:`Editorial cover for ${title}`,caption:'Editorial cover · not an author figure',description:'Collection artwork for navigation; not a diagram of the method or a research result.',editorial:true,coverTitle:title,coverCategory:category};
}
export function renderCover(t) {
  let hash=0; for(const c of t.coverTitle) hash=(hash*31+c.charCodeAt(0))>>>0;
  const palettes=[['#e9e6f7','#b4a9d6','#d3e9e2'],['#e2eef4','#98baca','#e7dfef'],['#e8eee4','#afc6a4','#e2e3f3'],['#f3e8df','#d7b69e','#dfe8ef']];
  const [bg,accent,other]=palettes[hash%4];
  const words=t.coverTitle.split(/\s+/),lines=[''];
  for(const word of words){if((lines.at(-1)+' '+word).length>38&&lines.length<3)lines.push(word);else lines[lines.length-1]+=(lines.at(-1)?' ':'')+word;}
  if(lines.at(-1).length>41)lines[lines.length-1]=lines.at(-1).slice(0,38)+'…';
  const motif=[
   '<circle cx="445" cy="120" r="75"/><ellipse cx="445" cy="120" rx="105" ry="35" transform="rotate(-30 445 120)"/><circle cx="445" cy="120" r="18" fill="white"/><circle cx="524" cy="75" r="8" fill="currentColor"/>',
   '<path d="M348 155 Q390 155 414 100 T540 65M348 155Q440 155 465 195T550 220"/><circle cx="350" cy="155" r="18"/><circle cx="450" cy="75" r="28"/><circle cx="515" cy="210" r="16"/>',
   '<rect x="340" y="75" width="120" height="85" rx="20"/><path d="m370 160-15 25 45-25M390 60h130a20 20 0 0 1 20 20v80M375 110h50m-50 20h30"/><circle cx="500" cy="195" r="24"/>',
   '<path d="m440 40 90 50-90 50-90-50Zm-90 80 90 50 90-50m-180 30 90 50 90-50"/><circle cx="440" cy="90" r="12" fill="white"/>'
  ][hash%4];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="360" viewBox="0 0 600 360" role="img"><title>${esc(t.alt)}</title><defs><radialGradient id="wash"><stop stop-color="${other}"/><stop offset="1" stop-color="${bg}"/></radialGradient></defs><rect width="600" height="360" fill="url(#wash)"/><g fill="none" stroke="${accent}" color="${accent}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${motif}</g><g fill="#344456" font-family="system-ui,sans-serif"><text x="32" y="42" font-size="13" letter-spacing="2">PROACTIVE / ${esc(t.coverCategory.toUpperCase())}</text>${lines.map((l,i)=>`<text x="32" y="${235+i*30}" font-size="25" font-weight="550">${esc(l)}</text>`).join('')}<text x="32" y="341" font-size="11">EDITORIAL COVER · NOT AN AUTHOR FIGURE</text></g></svg>`;
}
