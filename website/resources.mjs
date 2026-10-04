// Keep static HTML and live search results consistent without discarding distinct sources.
export function navigationResources(record) {
  const links = record.resources?.length ? record.resources : record.primary ? [{ label: 'Paper', url: record.primary }] : [];
  const seen = new Set();
  let paperSeen = false;
  return links.filter(r => r.url && !/notes?/i.test(r.label) && !seen.has(r.url) && seen.add(r.url)).map(r => {
    let label = r.label;
    if (/^(code|github|repo|repository|star)$/i.test(label)) label = 'Repo';
    else if (/^(project|website|project page)$/i.test(label)) label = 'Project';
    else if (/^(arxiv|acl|cvf|doi|openreview|paper|acm|springer|pdf|hf paper)$/i.test(label)) { if (!paperSeen) { label = 'Paper'; paperSeen = true; } }
    return { ...r, label };
  });
}
