/* ---------------------------------------------------------------
   Entry point: initialises all Portfolio modules.
   Loaded last; modules register themselves on window.Portfolio.
---------------------------------------------------------------- */

(function () {
  // Keep the copyright year current (Footer.tsx used new Date()).
  const yearEl = document.getElementById("copyright-year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  document.addEventListener("DOMContentLoaded", () => {
    if (window.Portfolio && Portfolio.nav) Portfolio.nav.init();
    if (window.Portfolio && Portfolio.reveal) Portfolio.reveal.init();
  });
})();
