// ==UserScript==
// @name         Zhihu Auto Theme by System
// @namespace    https://github.com/Cypressca/zhihu-auto-theme
// @version      1.0.0
// @description  Follow system dark/light mode on Zhihu by syncing ?theme=dark|light.
// @author       Cypressca
// @homepageURL  https://github.com/Cypressca/zhihu-auto-theme
// @supportURL   https://github.com/Cypressca/zhihu-auto-theme/issues
// @updateURL    https://raw.githubusercontent.com/Cypressca/zhihu-auto-theme/main/zhihu-auto-theme.user.js
// @downloadURL  https://raw.githubusercontent.com/Cypressca/zhihu-auto-theme/main/zhihu-auto-theme.user.js
// @match        *://zhihu.com/*
// @match        *://*.zhihu.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  function getTargetTheme() {
    return mediaQuery.matches ? 'dark' : 'light';
  }

  function syncThemeToUrl() {
    const targetTheme = getTargetTheme();
    const url = new URL(window.location.href);
    const currentTheme = url.searchParams.get('theme');

    if (currentTheme === targetTheme) {
      return;
    }

    url.searchParams.set('theme', targetTheme);

    // Use replace to avoid adding an extra history entry.
    window.location.replace(url.toString());
  }

  syncThemeToUrl();

  // React to system theme changes while page is open.
  if (typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', syncThemeToUrl);
  } else if (typeof mediaQuery.addListener === 'function') {
    // Fallback for older browsers.
    mediaQuery.addListener(syncThemeToUrl);
  }
})();
