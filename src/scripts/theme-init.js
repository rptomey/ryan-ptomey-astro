// src/scripts/theme-init.js
(function() {
  const theme = (() => {
    // 1. Check localStorage first
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    // 2. If no localStorage theme, check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    // 3. Default to 'light' if no preference found
    return 'light';
  })();

  // Apply the theme class to the <html> element
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // --- THIS IS THE CRUCIAL LINE TO RE-ADD ---
  // Store the *determined* theme in localStorage for future visits.
  // This happens even if it was just detected from system preferences.
  window.localStorage.setItem('theme', theme);
  // ------------------------------------------

})();