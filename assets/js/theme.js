// Shared theme initialization and toggle handler.
// Safe if the toggle button is missing (no-op).
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  if (!root) return;

  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = stored || (prefersDark ? 'dark' : 'light');
  root.dataset.theme = initial;

  if (toggle) {
    // Ensure aria-pressed reflects the current theme
    toggle.setAttribute('aria-pressed', initial === 'dark');

    function updateTheme(next) {
      root.dataset.theme = next;
      localStorage.setItem('theme', next);
      toggle.setAttribute('aria-pressed', next === 'dark');
    }

    toggle.addEventListener('click', () => {
      const next = root.dataset.theme === 'light' ? 'dark' : 'light';
      updateTheme(next);
    });
  }
})();
