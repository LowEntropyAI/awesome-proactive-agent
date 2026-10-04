// Navigation artwork describes the collection, not any paper's architecture.
export function routeIcon(kind) {
  const paths = {
    agent: '<circle cx="15" cy="10" r="4"/><path d="M7 26v-4a8 8 0 0 1 16 0v4M25 6h7m-3.5-3.5v7"/>',
    streaming: '<path d="M3 18h5l3-10 5 21 5-26 5 20 3-5h5"/><circle cx="31" cy="7" r="2"/>',
    benchmark: '<path d="M5 4v27h28M11 24v-7m8 7V10m8 14V5M9 9l3 3 5-6"/>'
  };
  return `<svg viewBox="0 0 36 36" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[kind] || paths.agent}</svg>`;
}

export function collectionMap(url, bi) {
  return `<section class="collection-map" aria-label="Explore the collection"><div class="collection-map-heading"><div>${bi('FROM CONTEXT TO INITIATIVE', '从上下文到主动协助', 'span')}${bi('Explore the collection', '探索资源地图', 'h2')}</div><div class="initiative-flow" aria-label="Conceptual proactive decision loop"><span>${bi('Observe', '感知')}</span><i aria-hidden="true">→</i><span class="decision-node">${bi('Decide', '决策')}</span><i aria-hidden="true">→</i><span>${bi('Assist / wait', '协助 / 等待')}</span></div></div><div class="collection-map-routes">${[
    ['agent', 'applications/', 'Agents & applications', '智能体与应用', 'Personal · coding · wearable · embodied', '个人 · 编程 · 穿戴 · 具身'],
    ['streaming', 'streaming/', 'Streaming models', '流式模型', 'Perception · memory · response timing', '感知 · 记忆 · 响应时机'],
    ['benchmark', 'benchmarks/', 'Benchmarks', '评测基准', 'Utility · timing · consent · silence', '效用 · 时机 · 同意 · 静默']
  ].map(([kind, path, en, zh, detail, detailZh]) => `<a class="map-route map-${kind}" href="${url(path)}"><span class="map-icon">${routeIcon(kind)}</span><strong>${bi(en, zh)}</strong><span class="map-detail">${bi(detail, detailZh)}</span><span class="map-arrow" aria-hidden="true">↗</span></a>`).join('')}</div></section>`;
}
