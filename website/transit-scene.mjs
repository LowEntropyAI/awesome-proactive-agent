// Decorative HTML, built from an imaginary street plan (not geographic data).
// The caption supplies the non-visual equivalent; no image or drawing runtime.
const point = (u, v) => [255 + .91*u - .56*v, 38 + .30*u + .50*v];
const unit = n => (n/6).toFixed(3) + 'cqw';
const place = ([x,y]) => `left:${unit(x)};top:${unit(y)}`;
function link(a,b,kind) {
  const [x,y]=point(...a), [endX,endY]=point(...b);
  return `<i class="street-line ${kind}" style="${place([x,y])};width:${unit(Math.hypot(endX-x,endY-y))};transform:rotate(${Math.atan2(endY-y,endX-x)}rad)"></i>`;
}
function route(points,kind) {
  return points.slice(1).map((p,i)=>link(points[i],p,kind)).join('');
}
const blocks=[[5,15,43,21],[76,12,27,37],[158,12,38,32],[233,10,34,49],[320,9,29,32],[12,91,32,34],[72,96,28,21],[153,94,35,29],[234,91,45,22],[321,92,25,35],[12,245,30,17],[80,247,41,24],[160,247,27,26],[245,245,33,19],[320,246,41,26]];
function building([u,v,w,h],i) {
  return `<i class="city-block tone-${i%3}" style="${place(point(u,v))};--w:${unit(w)};--h:${unit(h)}"><b></b><b></b><b></b></i>`;
}
export function transitScene(){
  const streets=[45,125,207,292,375].map(u=>link([u,-140],[u,450],'avenue')).join('')+
    [55,140,221,294].map(v=>link([-220,v],[570,v],'avenue')).join('');
  const trees=[[0,65],[20,69],[92,55],[197,43],[258,65],[340,60],[2,119],[94,129],[185,120],[269,111],[321,123],[66,223],[151,232],[246,220],[348,222]].map(p=>`<i class="city-tree" style="${place(point(...p))}"></i>`).join('');
  const start=[45,221], end=[375,55];
  return `<div class="transit-map" aria-hidden="true"><div class="street-field">${link([-240,176],[590,176],'river')}${streets}</div>
    ${route([start,[207,221],[207,55],end],'usual')}${route([start,[45,140],[292,140],[292,55],end],'detour')}
    ${blocks.map(building).join('')}${trees}
    <i class="city-origin" style="${place(point(...start))}"></i><i class="city-closure" style="${place(point(207,207))}">×</i><i class="city-flag" style="${place(point(...end))}"></i></div>`;
}
