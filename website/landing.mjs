// Editorial artwork and copy describe the collection, not a paper's architecture.
export function cover(catalog, url, bi) {
  const stats = [
    [catalog.papers.length, 'Research papers', '研究论文'],
    [catalog.projects.length, 'Projects & tools', '项目与工具'],
    [catalog.benchmarks.length, 'Benchmarks', '评测基准']
  ];
  return `<section class="cover" aria-labelledby="cover-title">
    <div class="cover-copy">
      <div class="cover-eyebrow"><span class="pixel-mark" aria-hidden="true"></span>${bi('RESEARCH DIRECTORY · CURATED BY LOWENTROPYAI', '研究资源导航 · LOWENTROPYAI 整理')}</div>
      <p class="cover-prelude">${bi('A reading map for the field.', '一份面向研究的阅读地图。')}</p>
      <h1 id="cover-title"><span class="cover-proactive">${bi('Proactive', '主动式')}</span><br>${bi('AI research.', 'AI 研究索引')}</h1>
      <p class="cover-description">${bi('A research-oriented collection of papers, agents, models, projects, and benchmarks from the proactive AI community.', '面向研究的主动式 AI 资源整理，收录研究社区的论文、智能体、模型、项目与评测基准。')}</p>
      <p class="cover-attribution">${bi('Collected and linked to original sources. All research credit belongs to the respective authors.', '所有条目均链接原始来源，研究成果归各自原作者所有。')}</p>
      <div class="cover-actions"><a class="cover-cta" href="#collection">${bi('Browse the research', '浏览研究资源')} <span aria-hidden="true">↓</span></a></div>
    </div>
    <div class="cover-art" aria-hidden="true">
      <div class="cover-orbit"></div><i class="cover-pixel pixel-one"></i><i class="cover-pixel pixel-two"></i><i class="cover-pixel pixel-three"></i>
      <img class="cover-illustration" src="${url('assets/cover/proactive-companion.png')}" width="1254" height="1254" alt="" fetchpriority="high">
      <div class="cover-art-caption"><span></span>RESEARCH · PROJECTS · EVALUATION</div>
    </div>
    <div class="cover-bottom"><dl class="cover-stats">${stats.map(([count, en, zh]) => `<div><dt>${bi(en, zh)}</dt><dd>${count}</dd></div>`).join('')}</dl><button class="motion-toggle" id="motion-toggle" aria-pressed="false" hidden><span aria-hidden="true" class="motion-icon">Ⅱ</span><span class="motion-pause">${bi('Pause motion', '暂停动效')}</span><span class="motion-resume" hidden>${bi('Play motion', '开启动效')}</span></button></div>
  </section>`;
}

export function airjellyFeature(bi) {
  return `<section class="airjelly-feature" aria-labelledby="airjelly-title">
    <div class="airjelly-copy"><div class="airjelly-eyebrow"><span class="pixel-mark" aria-hidden="true"></span>${bi('FROM THE MAINTAINERS', '来自资源库维护者')}</div>
      <p class="airjelly-prelude">${bi('Beyond the reading list.', '在研究资源之外。')}</p>
      <h2 id="airjelly-title">${bi('Explore our product, AirJelly.', '欢迎探索我们的产品 AirJelly。')}</h2>
      <p>${bi('We also build AirJelly, a context-aware proactive assistant for everyday work. Visit its own website to learn more.', '我们也在打造 AirJelly，一款面向日常工作的上下文感知主动式助手。欢迎前往产品官网了解更多。')}</p>
      <a class="airjelly-cta" href="https://www.airjelly.ai" target="_blank" rel="noopener noreferrer">${bi('Discover AirJelly', '了解 AirJelly')} <span aria-hidden="true">↗</span></a>
    </div>
    <div class="airjelly-visual" aria-hidden="true"><span class="airjelly-window-label">A LITTLE AHEAD.</span><div class="context-stack"><div class="context-card"><span class="context-glyph">⌁</span>${bi('Your context', '你的上下文')}<i></i><i></i></div><div class="context-card"><span class="context-glyph">✧</span>${bi('A helpful next step', '恰好的下一步')}<i></i><i></i><span class="context-check">↗</span></div></div><span class="airjelly-visual-caption">${bi('Context. Memory. Timely help.', '上下文 · 记忆 · 适时协助')}</span></div>
  </section>`;
}
