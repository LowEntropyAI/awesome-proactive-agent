// An imaginary transit map, not a geographic claim or a product screenshot.
import {writeFileSync} from 'node:fs';
const out=new URL('../assets/',import.meta.url);
const point=(u,v,z=0)=>[+(188+.82*u-.46*v).toFixed(2),+(54+.245*u+.53*v-z).toFixed(2)];
const face=(corners,fill)=>'<polygon points="'+corners.map(p=>point(...p).join(',')).join(' ')+'" fill="'+fill+'"/>';
const label=(x,y,s,size,extra='')=>'<text x="'+x+'" y="'+y+'" font-size="'+size+'" '+extra+'>'+s+'</text>';
const defs=`<defs>
 <linearGradient id="paper" x2=".86" y2="1"><stop stop-color="#fffdf8"/><stop offset=".57" stop-color="#ece9f3"/><stop offset="1" stop-color="#d6e7e4"/></linearGradient>
 <linearGradient id="water" x2="1" y2=".23"><stop stop-color="#73aaaf"/><stop offset=".55" stop-color="#afdad7"/><stop offset="1" stop-color="#83b7be"/></linearGradient>
 <linearGradient id="bank" x2=".3" y2="1"><stop stop-color="#d8e7d6"/><stop offset="1" stop-color="#e2e7dc"/></linearGradient>
 <radialGradient id="glow"><stop stop-color="#c9bde2" stop-opacity=".8"/><stop offset="1" stop-color="#e1d9ed" stop-opacity="0"/></radialGradient>
 <pattern id="dots" width="5" height="5" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".55" fill="#697587" opacity=".21"/></pattern>
 <filter id="shadow" x="-.3" y="-.5" width="1.7" height="2.3"><feGaussianBlur stdDeviation="10"/></filter>
 </defs>`;
function building(u,v,w,d,h,tint) {
 const [roof,front,side]=tint;
 return face([[u,v],[u+w+8,v+5],[u+w+8,v+d+5],[u+5,v+d+3]],'#a7b6b36b')+
 face([[u,v+d],[u+w,v+d],[u+w,v+d,h],[u,v+d,h]],front)+
 face([[u+w,v],[u+w,v+d],[u+w,v+d,h],[u+w,v,h]],side)+
 face([[u,v,h],[u+w,v,h],[u+w,v+d,h],[u,v+d,h]],roof)+
 (h>19?face([[u+4,v+4,h+2],[u+w-4,v+4,h+2],[u+w-4,v+d-4,h+2],[u+4,v+d-4,h+2]],'#dfe0e2'):'')+
 Array.from({length:Math.floor(w/11)},(_,i)=>face([[u+4+i*11,v+d,5],[u+8+i*11,v+d,5],[u+8+i*11,v+d,9],[u+4+i*11,v+d,9]],'#718b9a')).join('');
}
function map(){
 let planes='';
 for(const [z,c] of [[-17,'#586b7c'],[-15,'#a1b5bd'],[-12,'#dde5e4'],[-10,'#839d9b'],[-8,'#c3d6cd'],[-5,'#f6f1e7'],[-2,'#9caeab'],[0,'#e4e8dd']])planes+=face([[0,0,z],[448,0,z],[448,315,z],[0,315,z]],c);
 const matrix='matrix(.82 .245 -.46 .53 188 54)';
 const old='M100 275H270V95H410',detour='M100 275V185Q100 175 110 175H348Q360 175 360 163V106Q360 95 372 95H410';
 let terrain='<g transform="'+matrix+'"><rect width="448" height="315" fill="url(#bank)"/><path d="M0 192 Q117 180 227 204T448 197V226Q340 249 226 231T0 222Z" fill="url(#water)"/><path d="M0 204Q117 191 227 217T448 211" fill="none" stroke="#e6f4ed" stroke-width="1.4" stroke-dasharray="23 17 7 12"/>';
 for(const u of [100,190,270,360])terrain+='<path d="M'+u+' 0V315" stroke="#c1ceca" stroke-width="16"/><path d="M'+u+' 0V315" stroke="#f8f4ec" stroke-width="12"/>';
 for(const v of [95,175,250,275])terrain+='<path d="M0 '+v+'H448" stroke="#faf6ee" stroke-width="12"/>';
 terrain+='<rect width="448" height="315" fill="url(#dots)"/><g fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="'+old+'" stroke="#9e735e" stroke-width="4" stroke-dasharray="7 7"/><path d="'+detour+'" stroke="#fffdf3" stroke-width="12"/><path d="'+detour+'" stroke="#176d70" stroke-width="6"/></g></g>';
 const blocks=[[15,25,44,29,17],[56,38,24,35,33],[117,19,41,47,25],[207,18,40,32,19],[283,26,44,30,38],[375,24,47,39,23],[24,117,42,28,14],[117,115,27,28,24],[150,123,22,26,15],[206,119,35,27,23],[289,119,38,25,14],[378,121,40,28,22],[20,280,40,22,12],[124,281,32,21,16],[210,281,30,23,19],[283,281,37,22,15],[376,280,40,21,20]];
 const colors=[['#f8efe4','#d8c9bc','#acb0ac'],['#e5e1ef','#c6c3d4','#969fb4'],['#faf8ef','#d4d6cb','#a2b3ad']];
 const city=blocks.sort((a,b)=>point(a[0],a[1])[1]-point(b[0],b[1])[1]).map(([u,v,w,d,h],i)=>building(u,v,w,d,h,colors[i%3])).join('');
 const trees=[[30,65],[53,69],[78,23],[169,31],[229,74],[310,75],[335,69],[414,65],[60,155],[81,125],[158,157],[330,148],[398,155],[54,234],[69,234],[166,235],[310,249],[334,247],[420,243]].map(([u,v],i)=>{const [x,y]=point(u,v);return '<g transform="translate('+x+' '+y+')"><ellipse rx="7" ry="2.5" fill="#617c703d"/><path d="M0-3V-14" stroke="#607368" stroke-width="2"/><ellipse cy="-14" rx="7" ry="9" fill="'+(i%2?'#829f87':'#759b8b')+'"/><ellipse cx="-2" cy="-16" rx="4" ry="6" fill="#a5bb9e"/></g>';}).join('');
 const [sx,sy]=point(100,275),[cx,cy]=point(270,250),[ex,ey]=point(410,95);
 return '<ellipse cx="307" cy="263" rx="211" ry="48" transform="rotate(8 307 263)" fill="#46566b" opacity=".17" filter="url(#shadow)"/>'+planes+terrain+city+trees+
 '<g transform="translate('+sx+' '+sy+')"><ellipse rx="10" ry="5" fill="#fff"/><ellipse rx="6" ry="3.5" fill="#176d70"/></g>'+
 '<g transform="translate('+cx+' '+cy+')"><path d="M0-3v-26" stroke="#925840" stroke-width="2"/><circle cy="-31" r="11" fill="#a7563e" stroke="#fff8eb" stroke-width="2"/><path d="m-4-35 8 8m0-8-8 8" stroke="white" stroke-width="2"/></g>'+
 '<g transform="translate('+ex+' '+ey+')"><ellipse rx="7" ry="4" fill="#176d70"/><path d="M0 0v-39" stroke="#224e53" stroke-width="2.5"/><path d="M1-39q9-5 19 0v15q-10-5-19 0Z" fill="#198282"/></g>';
}
function render(kind){
 const mobile=kind==='mobile',w=mobile?600:1120,h=mobile?750:505;
 const bg='<rect width="'+w+'" height="'+h+'" rx="20" fill="url(#paper)"/><ellipse cx="'+w*.79+'" cy="'+h*.4+'" rx="'+w*.46+'" ry="'+h*.65+'" fill="url(#glow)"/><rect width="'+w+'" height="'+h+'" rx="20" fill="url(#dots)" opacity=".35"/>';
 const heading=mobile?label(36,65,'Proactive AI',31)+label(36,149,'Before you ask.',63,'font-family="Georgia,serif" font-style="italic"'):label(50,111,'Proactive AI',39)+label(47,214,'Before you ask.',65,'font-family="Georgia,serif" font-style="italic"');
 const copy=mobile?label(36,207,'Your usual stop is closed.',24)+label(36,245,'Your step-free detour is ready.',24):label(51,288,'Your usual stop is closed.',23)+label(51,324,'Your step-free detour is ready.',23);
 const legend=(x,y)=>'<g transform="translate('+x+' '+y+')" font-size="17"><path d="M0 0h26" stroke="#985d48" stroke-width="3" stroke-dasharray="4 4"/>'+label(35,6,'Usual Route',16)+'<path d="M148 0h25" stroke="#176d70" stroke-width="4"/>'+label(182,6,'Prepared Detour',16)+'</g>';
 return '<svg xmlns="http://www.w3.org/2000/svg" width="'+w+'" height="'+h+'" viewBox="0 0 '+w+' '+h+'" role="img" aria-labelledby="title desc"><title id="title">Proactive AI: Before you ask.</title><desc id="desc">Illustrative example. A usual stop closes. Remembering your preference for step-free travel, an assistant prepares an alternate route before you ask. You decide whether to take it.</desc>'+defs+bg+'<g font-family="system-ui,sans-serif" fill="#243d48">'+heading+copy+'<g transform="'+(mobile?'translate(-4 258) scale(1.02)':'translate(448 32) scale(1.12)')+'">'+map()+'</g>'+legend(mobile?36:52,mobile?693:435)+'</g></svg>\n';
}
for(const [name,kind] of [['proactive-hero','desktop'],['proactive-hero-mobile','mobile']])writeFileSync(new URL(name+'.svg',out),render(kind));
