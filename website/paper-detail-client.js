import { paperDetail } from './paper-detail.mjs';
import { fetchCatalog } from './catalog-client.js';
// Progressive enhancement: without JS, the same links open static brief pages.
const dialog = document.createElement('dialog');
dialog.className='paper-dialog';
dialog.setAttribute('aria-labelledby','paper-detail-title');
dialog.innerHTML='<div class="dialog-toolbar"><span data-en="Quick Read" data-zh="快速阅读">Quick Read</span><button type="button" aria-label="Close paper preview">× <span data-en="Close" data-zh="关闭">Close</span></button></div><div class="dialog-body"></div>';
document.body.append(dialog);
let papers, trigger;
const translate=()=>dialog.querySelectorAll('[data-en]').forEach(el=>el.textContent=el.dataset[document.documentElement.lang==='zh'?'zh':'en']);
dialog.querySelector('button').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('preview-open');if(trigger?.isConnected)trigger.focus({preventScroll:true});});
document.addEventListener('atlas:language',translate);
document.addEventListener('click',async e=>{
  const link=e.target.closest('a[data-preview-paper]');
  if(!link||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||!dialog.showModal)return;
  e.preventDefault(); trigger=link;
  try {
    if(!papers)papers=(await fetchCatalog()).papers;
    // A stale response must not steal focus after the visitor selects a different link.
    if(trigger!==link)return;
    const p=papers.find(p=>p.id===link.dataset.previewPaper);if(!p)throw Error('paper');
    dialog.querySelector('.dialog-body').innerHTML=paperDetail(p);translate();dialog.showModal();dialog.scrollTop=0;document.body.classList.add('preview-open');dialog.querySelector('button').focus();
  }catch{location.assign(link.href);}
});
