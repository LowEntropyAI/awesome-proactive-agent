// Editorial constellation, not a scientific architecture or fixed pipeline.
import {writeFileSync} from 'node:fs';
const dir=new URL('../assets/',import.meta.url);
const esc=s=>s.replaceAll('&','&amp;');
const text=(x,y,s,size=20)=>'<text x="'+x+'" y="'+y+'" fill="#34445a" font-size="'+size+'" font-family="system-ui,sans-serif">'+esc(s)+'</text>';
const symbols=[
 '<circle r="34"/><circle r="18"/><path d="M-54 0h20M34 0h20M0-54v20M0 34v20"/><circle cx="24" cy="-24" r="7" fill="#a7c7c6"/>',
 '<path d="M-48 28Q-20 28 0 0T48-28m-17-1 19-3-4 19"/><circle cx="-42" cy="27" r="8"/><circle cx="0" cy="0" r="6" fill="#b5acd2"/>',
 '<path d="M-45 0h28Q0 0 0-20v-18m0 38v38m0-38h40"/><rect x="-57" y="-12" width="24" height="24" rx="8"/><circle cx="0" cy="-44" r="12"/><circle cx="0" cy="44" r="12"/><path d="m30-4 8 8 14-17"/>',
 '<path d="M-42-32h55a12 12 0 0 1 12 12v25a12 12 0 0 1-12 12H-15l-24 18 7-18h-10a12 12 0 0 1-12-12v-25a12 12 0 0 1 12-12Z"/><path d="M-22-10h25m-25 13h14M40-5h6a12 12 0 0 1 12 12v25l5 18-23-10H15"/>',
 '<path d="M0-48 40-32v34Q40 30 0 49-40 30-40 2v-34Z"/><path d="m-18 0 13 13 26-29"/>',
 '<path d="M-39-25a47 47 0 1 1-5 52m-3-67 8 15 17-4"/><path d="m0-23 23 13L0 3-23-10Zm-23 26L0 29l23-13M-23 3 0 16 23 3"/>'
];
function constellation(mobile,labelsOn){
 const coords=mobile?[[116,280],[480,280],[116,495],[480,495],[116,710],[480,710]]:[[170,250],[560,185],[950,250],[170,460],[950,460],[560,535]];
 const cx=mobile?300:560,cy=mobile?495:370;
 let body='<g fill="none" stroke="#8194aa" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">';
 body+='<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+(mobile?190:390)+'" ry="'+(mobile?230:165)+'" stroke-opacity=".3" stroke-dasharray="3 10"/>';
 body+=coords.map(([x,y],i)=>'<g transform="translate('+x+' '+y+')"><circle r="63" fill="white" fill-opacity=".25" stroke="none"/>'+symbols[i]+'</g>').join('');
 body+='<g transform="translate('+cx+' '+cy+')"><circle r="'+(mobile?89:90)+'" fill="#ffffff" fill-opacity=".65" stroke="#ffffff"/><circle cy="-25" r="20" fill="#c8d3e6" stroke="none"/><path d="M-35 28v-8a35 35 0 0 1 70 0v8" stroke-width="2"/></g></g>';
 if(labelsOn){
 const labels=['Your Context','Anticipate','Prepare','Help','With Permission','Memory + Feedback'];
 body+='<g text-anchor="middle">'+text(cx,cy+64,'Understand You',mobile?23:25)+coords.map(([x,y],i)=>text(x,y+83,labels[i],mobile?17:18)).join('')+'</g>';
 }
 return body;
}
function render(mobile=false,artOnly=false){
 const w=mobile?600:1120,h=mobile?880:660;
 const background='<defs><radialGradient id="lilac"><stop stop-color="#c6b9ed" stop-opacity=".65"/><stop offset="1" stop-color="#c6b9ed" stop-opacity="0"/></radialGradient><radialGradient id="mint"><stop stop-color="#b2e1d4" stop-opacity=".65"/><stop offset="1" stop-color="#b2e1d4" stop-opacity="0"/></radialGradient><radialGradient id="blue"><stop stop-color="#afcfee" stop-opacity=".55"/><stop offset="1" stop-color="#afcfee" stop-opacity="0"/></radialGradient></defs><rect width="'+w+'" height="'+h+'" fill="#f3f5fa"/><ellipse cx="'+w*.8+'" cy="'+h*.2+'" rx="'+w*.6+'" ry="'+h*.7+'" fill="url(#lilac)"/><ellipse cx="'+w*.2+'" cy="'+h*.7+'" rx="'+w*.65+'" ry="'+h*.7+'" fill="url(#mint)"/><ellipse cx="'+w*.85+'" cy="'+h*.95+'" rx="'+w*.5+'" ry="'+h*.6+'" fill="url(#blue)"/>';
 let body=constellation(mobile,!artOnly);
 if(!artOnly)body=text(mobile?30:48,53,'Proactive AI',17)+(mobile?text(30,112,'Understand You.',39)+text(30,162,'Help Thoughtfully.',39):text(48,112,'Understand You. Help Thoughtfully.',44))+body;
 return '<svg xmlns="http://www.w3.org/2000/svg" width="'+w+'" height="'+h+'" viewBox="0 0 '+w+' '+h+'" role="img" aria-labelledby="title desc"><title id="title">Proactive AI: Understand You. Help Thoughtfully.</title><desc id="desc">A person-centered editorial constellation: context, anticipation, preparation, useful help, permission, memory and feedback. Complementary capabilities, not an exhaustive definition or fixed workflow. Across mobile, wearables, home, robots and work.</desc>'+background+body+'</svg>\n';
}
for(const [file,mobile,art] of [['proactive-hero.svg',false,false],['proactive-hero-mobile.svg',true,false],['proactive-field.svg',false,true]])writeFileSync(new URL(file,dir),render(mobile,art));
