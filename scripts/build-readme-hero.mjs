// Pure SVG outreach graphic. Complementary capabilities, not a fixed pipeline.
import { writeFileSync } from 'node:fs';
const dir = new URL('../assets/', import.meta.url);
const txt=(x,y,s,size=20,color='#48566c',weight=400)=>'<text x="'+x+'" y="'+y+'" font-size="'+size+'" fill="'+color+'" font-weight="'+weight+'">'+s.replaceAll('&','&amp;')+'</text>';
const caps=[
 ['Understand Context','Goals, People & Environments','Context is more than a prompt.'],
 ['Anticipate Needs','Opportunities & Emerging Risks','Look beyond the next request.'],
 ['Prepare & Plan','Next Steps & Useful Preparation','Help can begin before action.'],
 ['Communicate & Collaborate','Ask, Suggest & Coordinate','Resolve uncertainty together.'],
 ['Act With Permission','Initiative Within Agreed Bounds','Keep people in control.'],
 ['Adapt & Exercise Restraint','Memory + Feedback','Learn what matters; know when to wait.']
];
const mobileTitles=[['Understand','Context'],['Anticipate','Needs'],['Prepare','& Plan'],['Communicate','& Collaborate'],['Act With','Permission'],['Adapt & Exercise','Restraint']];
function render(mobile){
 const w=mobile?600:1120,h=mobile?960:620;
 let body=mobile
 ?txt(30,53,'Proactive AI',16,'#596f87',600)+txt(30,106,'Anticipate Needs.',38,'#26344b',600)+txt(30,153,'Take Initiative.',38,'#26344b',600)+txt(30,192,'Useful help, with judgment and boundaries.',19)
 :txt(48,52,'Proactive AI',16,'#596f87',600)+txt(48,108,'Anticipate Needs. Take Initiative.',42,'#26344b',600)+txt(48,148,'Useful help is also about what to prepare, propose and do—not only when to speak.',21);
 body+=caps.map(([title,sub,desc],i)=>{
  const x=mobile?26+i%2*280:48+i%3*348,y=mobile?226+Math.floor(i/2)*176:185+Math.floor(i/3)*158;
  const titleText=mobile?mobileTitles[i].map((t,k)=>txt(22,66+k*28,t,23,'#243248',600)).join(''):txt(22,63,title,23,'#243248',600);
  return '<g id="capability-'+i+'" transform="translate('+x+' '+y+')"><rect width="'+(mobile?268:328)+'" height="'+(mobile?160:142)+'" rx="18" fill="#fff" fill-opacity=".72" stroke="#fff" stroke-opacity=".95"/><circle cx="24" cy="26" r="4" fill="#798fa9"/>'+txt(39,31,'0'+(i+1),13,'#596f87',600)+titleText+(mobile?txt(22,129,i===5?'Memory + Feedback':sub.split(' & ')[0],17):txt(22,94,sub,17)+txt(22,119,desc,14))+'</g>';
 }).join('');
 body+=mobile
 ?txt(30,800,'Many Capabilities, Not One Fixed Workflow',22,'#26344b',600)+txt(30,840,'Work · Mobile · Wearables · Home · Robots',19)+txt(30,889,'Research · Models · Agent Systems',20)+txt(30,921,'Applications · Evaluation',20)
 :txt(48,532,'Many Capabilities, Not One Fixed Workflow',20,'#26344b',600)+txt(48,570,'Work · Mobile · Wearables · Home · Robots',18)+txt(555,570,'Research · Models · Agent Systems · Applications · Evaluation',17);
 return '<svg xmlns="http://www.w3.org/2000/svg" width="'+w+'" height="'+h+'" viewBox="0 0 '+w+' '+h+'" role="img" aria-labelledby="title desc"><title id="title">Proactive AI: Anticipate Needs. Take Initiative.</title><desc id="desc">An outreach overview, not a fixed architecture: understand context, anticipate needs, prepare and plan, communicate and collaborate, act with permission, adapt and exercise restraint. Personal understanding, memory and feedback are among many capabilities. Across work, mobile, wearables, home and robots.</desc><defs><radialGradient id="lilac"><stop stop-color="#c6b9ed" stop-opacity=".7"/><stop offset="1" stop-color="#c6b9ed" stop-opacity="0"/></radialGradient><radialGradient id="mint"><stop stop-color="#b2e1d4" stop-opacity=".65"/><stop offset="1" stop-color="#b2e1d4" stop-opacity="0"/></radialGradient><radialGradient id="blue"><stop stop-color="#afcfee" stop-opacity=".65"/><stop offset="1" stop-color="#afcfee" stop-opacity="0"/></radialGradient><clipPath id="frame"><rect width="'+w+'" height="'+h+'" rx="26"/></clipPath></defs><g clip-path="url(#frame)"><rect width="'+w+'" height="'+h+'" fill="#f3f5fa"/><ellipse cx="'+w*.8+'" cy="'+h*.18+'" rx="'+w*.52+'" ry="'+h*.65+'" fill="url(#lilac)"/><ellipse cx="'+w*.2+'" cy="'+h*.75+'" rx="'+w*.6+'" ry="'+h*.65+'" fill="url(#mint)"/><ellipse cx="'+w*.85+'" cy="'+h*.95+'" rx="'+w*.5+'" ry="'+h*.6+'" fill="url(#blue)"/></g><g font-family="Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif">'+body+'</g></svg>\n';
}
writeFileSync(new URL('proactive-hero.svg',dir),render(false));
writeFileSync(new URL('proactive-hero-mobile.svg',dir),render(true));
