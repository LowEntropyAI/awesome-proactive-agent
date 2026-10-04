// Navigation artwork describes the collection, not any paper's architecture.
export function routeIcon(kind) {
  const paths = {
    agent: '<circle cx="15" cy="10" r="4"/><path d="M7 26v-4a8 8 0 0 1 16 0v4M25 6h7m-3.5-3.5v7"/>',
    model: '<rect x="8" y="8" width="20" height="20" rx="3"/><rect x="13" y="13" width="10" height="10" rx="1"/><path d="M13 3v5m10-5v5M13 28v5m10-5v5M3 13h5m-5 10h5m20-10h5m-5 10h5"/>',
    benchmark: '<path d="M5 4v27h28M11 24v-7m8 7V10m8 14V5M9 9l3 3 5-6"/>',
    book: '<path d="M18 8c-4-3-9-3-14-2v23c5-1 10-1 14 2 4-3 9-3 14-2V6c-5-1-10-1-14 2Zm0 0v23M9 12h4m-4 6h4m10-6h4m-4 6h4"/>',
    grid: '<rect x="4" y="4" width="11" height="11" rx="2"/><rect x="21" y="4" width="11" height="11" rx="2"/><rect x="4" y="21" width="11" height="11" rx="2"/><rect x="21" y="21" width="11" height="11" rx="2"/>',
    layers: '<path d="m18 4 14 8-14 8-14-8 14-8Zm-14 15 14 8 14-8M4 26l14 8 14-8"/>',
    code: '<path d="m12 9-9 9 9 9m12-18 9 9-9 9M21 5l-6 26"/>',
    interaction: '<rect x="4" y="5" width="25" height="19" rx="4"/><path d="m10 24-3 7 10-7M10 12h13m-13 6h8"/>',
    monitor: '<rect x="3" y="5" width="30" height="21" rx="3"/><path d="M18 26v6m-8 0h16M8 20h20"/>',
    vision: '<path d="M3 18S9 8 18 8s15 10 15 10-6 10-15 10S3 18 3 18Z"/><circle cx="18" cy="18" r="5"/>',
    github: '<path d="M18 3a15 15 0 0 0-5 29v-5c-5 1-6-2-6-2m18 7v-7c0-2-1-3-2-4 6-1 9-5 6-11 0-2 0-4-1-5l-6 3a20 20 0 0 0-8 0L8 5c-1 2-1 4 0 5-3 6 0 10 6 11-1 1-1 2-1 4"/>',
    plus: '<rect x="4" y="4" width="28" height="28" rx="5"/><path d="M18 11v14m-7-7h14"/>'
  };
  return `<svg viewBox="0 0 36 36" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[kind] || paths.agent}</svg>`;
}

export function collectionMap(url, bi) {
  return `<section class="collection-map" aria-label="Explore the collection"><div class="collection-map-heading"><div>${bi('FROM CONTEXT TO INITIATIVE', '从上下文到主动协助', 'span')}${bi('Explore the collection', '探索资源地图', 'h2')}</div><div class="initiative-flow" aria-label="Conceptual proactive decision loop"><span>${bi('Observe', '感知')}</span><i aria-hidden="true">→</i><span class="decision-node">${bi('Decide', '决策')}</span><i aria-hidden="true">→</i><span>${bi('Assist / wait', '协助 / 等待')}</span></div></div><div class="collection-map-routes">${[
    ['agent', 'applications/', 'Agents & applications', '智能体与应用', 'Personal · coding · wearable · embodied', '个人 · 编程 · 穿戴 · 具身'],
    ['model', 'library/?category=multimodal', 'Models & interaction', '模型与交互', 'Perception · memory · response timing', '感知 · 记忆 · 响应时机'],
    ['benchmark', 'benchmarks/', 'Benchmarks', '评测基准', 'Utility · timing · consent · silence', '效用 · 时机 · 同意 · 静默']
  ].map(([kind, path, en, zh, detail, detailZh]) => `<a class="map-route" href="${url(path)}"><span class="map-icon">${routeIcon(kind)}</span><strong>${bi(en, zh)}</strong><span class="map-detail">${bi(detail, detailZh)}</span><span class="map-arrow" aria-hidden="true">↗</span></a>`).join('')}</div></section>`;
}
