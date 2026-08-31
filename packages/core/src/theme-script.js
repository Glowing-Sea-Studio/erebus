!(function () {
  try {
    var mode = localStorage.getItem('erb-color-mode');
    var isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var finalMode = mode === 'dark' || (mode === 'system' && isSystemDark) || (!mode && isSystemDark) ? 'dark' : 'light';
    var doc = document.documentElement;
    if (!doc.hasAttribute('data-erb-theme')) {
      doc.setAttribute('data-erb-theme', 'default');
    }
    doc.setAttribute('data-erb-mode', finalMode);
  } catch (e) {}
})();
