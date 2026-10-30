// Pure SVG generation. Run from any directory; outputs retain editable text and groups.
import { writeFileSync } from 'node:fs';
const dir = new URL('../assets/', import.meta.url);
const icons = {
  person: '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
  phone: '<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/>',
  watch: '<path d="M12 10v2.2l1.6 1M16.13 7.66l-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05M7.88 16.36l.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"/><circle cx="12" cy="12" r="6"/>',
  home: '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  robot: '<path d="M12 8V4H8M2 14h2M20 14h2M15 13v2M9 13v2"/><rect width="16" height="12" x="4" y="8" rx="2"/>',
  work: '<rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8M12 17v4"/>',
  speak: '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/>',
  quiet: '<path d="M10.268 21a2 2 0 0 0 3.464 0M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742M2 2l20 20M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05"/>'
};
const text = (x,y,label,size=20,fill='#e8efe9',anchor='start',weight=400) => `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" text-anchor="${anchor}" font-weight="${weight}">${label}</text>`;
const icon = (name,x,y,size=32,color='#bad7cb') => `<g transform="translate(${x} ${y}) scale(${size/24})" fill="none" stroke="${color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${icons[name]}</g>`;
const arrow = d => `<path d="${d}" fill="none" stroke="#77958b" stroke-width="2" marker-end="url(#arrow)"/>`;
const person = (x,y) => `<g id="personal-context" transform="translate(${x} ${y})"><circle r="119" fill="none" stroke="#45665a" stroke-dasharray="3 8"/><circle r="104" fill="#c5e8d4"/>${icon('person',-24,-77,48,'#214436')}${text(0,0,'Understand you',25,'#173b2d','middle',600)}${text(0,33,'Goals · preferences',18,'#315546','middle')}${text(0,59,'Routines · boundaries',17,'#315546','middle')}</g>`;
const outcome = (x,y,quiet=false,w=236) => `<g id="${quiet?'silence':'intervention'}" transform="translate(${x} ${y})"><rect width="${w}" height="88" rx="16" fill="${quiet?'#1a3431':'#f0c29a'}" stroke="${quiet?'#a5bfb4':'#f0c29a'}"/>${icon(quiet?'quiet':'speak',18,19,30,quiet?'#e8efe9':'#3c3026')}${text(61,35,quiet?'Stay quiet':'Intervene',25,quiet?'#e8efe9':'#3c3026','start',600)}${text(18,67,quiet?'Protect attention':'Ask · suggest · remind · act',17,quiet?'#b8cec4':'#554130')}</g>`;
function svg(w,h,body) { return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="title desc">
<title id="title">Proactivity, built around people</title>
<desc id="desc">Observe across work, phones, wearables, homes and robots. Understand a person's goals, preferences, routines and boundaries. Anticipate needs and decide whether to ask, suggest, remind, act or stay quiet based on benefit, timing and consent. A research collection spanning models, agent systems, applications and evaluation.</desc>
<!-- Icons adapted from Lucide. See assets/hero-design.md and assets/LUCIDE-LICENSE.txt. -->
<defs><marker id="arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1l5 3-5 3" fill="none" stroke="#77958b" stroke-width="1.5"/></marker></defs>
<rect width="${w}" height="${h}" rx="24" fill="#142b28"/>
<g font-family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">${body}</g>
</svg>\n`; }
const contexts = [['work','Work'],['phone','Mobile'],['watch','Wearables'],['home','Home'],['robot','Robots']];
const desktop = text(48,67,'Proactivity, built around people.',38,'#f4f3e9','start',600)
  +text(48,105,'Understand intent. Anticipate needs. Know when to help — or stay quiet.',20,'#b8cec4')
  +'<path d="M48 137H1072" stroke="#365048"/>'
  +'<g id="observation">'+text(48,193,'Observe',28,'#f4f3e9','start',600)+text(48,223,'Across everyday life',18,'#b8cec4')
  +contexts.map(([i,t],k)=>{const x=48+(k%3)*92,y=252+Math.floor(k/3)*90;return icon(i,x+15,y,34)+text(x+32,y+60,t,16,'#b8cec4','middle');}).join('')+'</g>'
  +arrow('M323 306H408')+person(550,305)+text(550,166,'Personal context',18,'#b8cec4','middle')
  +text(550,451,'Memory + feedback',19,'#b8cec4','middle')
  +'<g id="decision">'+text(810,193,'Decide',28,'#f4f3e9','start',600)+text(810,223,'Benefit · timing · consent',18,'#b8cec4')
  +arrow('M682 306H766')+'<circle cx="779" cy="306" r="7" fill="#c5e8d4"/>'
  +arrow('M786 306H801V282H831')+arrow('M786 306H801V392H831')+outcome(838,243)+outcome(838,348,true)+'</g>'
  +'<path d="M48 481H1072" stroke="#365048"/>'
  +text(48,523,'One field, many perspectives',18,'#f4f3e9','start',600)+text(335,523,'Research  ·  Models  ·  Agent systems  ·  Applications  ·  Evaluation',18,'#b8cec4');
const mobile = text(32,54,'Built around people.',33,'#f4f3e9','start',600)
  +text(32,87,'Anticipate needs. Respect attention.',20,'#b8cec4')
  +'<path d="M32 112H568" stroke="#365048"/>'
  +text(32,153,'Observe',26,'#f4f3e9','start',600)
  +contexts.map(([i,t],k)=>icon(i,42+k*108,182,34)+text(59+k*108,244,t,18,'#b8cec4','middle')).join('')
  +arrow('M300 267V294')+person(300,432)
  +text(300,582,'Memory + feedback',20,'#b8cec4','middle')
  +arrow('M300 603V635')+text(300,673,'Decide: benefit, timing, consent',23,'#f4f3e9','middle',600)
  +arrow('M300 690V710H153V733')+arrow('M300 710H447V733')
  +outcome(26,745,false,260)+outcome(314,745,true,260)
  +text(300,878,'Research · Models · Agent systems',20,'#b8cec4','middle')+text(300,909,'Applications · Evaluation',20,'#b8cec4','middle');
writeFileSync(new URL('proactive-hero.svg',dir),svg(1120,560,desktop));
writeFileSync(new URL('proactive-hero-mobile.svg',dir),svg(600,940,mobile));
