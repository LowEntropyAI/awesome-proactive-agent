// Share one in-flight request between the feed and on-demand paper previews.
let pending;
export function fetchCatalog() {
  if (!pending) pending = fetch(document.body.dataset.base + 'catalog.json').then(response => {
    if (!response.ok) throw new Error('Catalog unavailable');
    return response.json();
  }).catch(error => { pending = undefined; throw error; });
  return pending;
}
