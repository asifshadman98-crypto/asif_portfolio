/* ---------------------------------------------------------------
   Navbar behaviour (Navbar.tsx equivalent):
   - adds .is-scrolled once the page is scrolled past 24px
   - toggles .menu-open + aria state for the mobile dropdown
---------------------------------------------------------------- */

window.Portfolio = window.Portfolio || {};

Portfolio.nav = {
  init() {
    const header = document.querySelector(".site-header");
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".mobile-menu");
    if (!header || !toggle || !menu) return;

    const setScrolled = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    setScrolled();
    window.addEventListener("scroll", setScrolled, { passive: true });

    const isOpen = () => header.classList.contains("menu-open");

    const setOpen = (open) => {
      header.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };

    toggle.addEventListener("click", () => setOpen(!isOpen()));

    // Close the dropdown after choosing a link (same as the React version)
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });
  },
};
