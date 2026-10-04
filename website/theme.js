try {
  document.documentElement.dataset.theme = localStorage.getItem('atlas-theme') || 'light';
  document.documentElement.lang = localStorage.getItem('atlas-language') || 'en';
} catch { /* Browser storage is optional. */ }
