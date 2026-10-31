try {
  const scheme = matchMedia('(prefers-color-scheme: dark)');
  const applyTheme = () => { document.documentElement.dataset.theme = localStorage.getItem('atlas-theme') || (scheme.matches ? 'dark' : 'light'); };
  applyTheme();
  scheme.addEventListener('change', applyTheme);
  document.documentElement.lang = localStorage.getItem('atlas-language') || 'en';
} catch { /* Browser storage is optional. */ }
