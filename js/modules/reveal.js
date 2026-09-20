/* ---------------------------------------------------------------
   Scroll reveal (Reveal.tsx equivalent):
   fades + slides elements in the first time they enter the
   viewport. Elements with [data-delay="150"] get a transition
   delay in milliseconds.
---------------------------------------------------------------- */

window.Portfolio = window.Portfolio || {};

Portfolio.reveal = {
  init() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    // No observer support (or JS-based hiding never applied): show everything.
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((el) => {
      const delay = el.getAttribute("data-delay");
      if (delay) el.style.transitionDelay = `${delay}ms`;
      observer.observe(el);
    });
  },
};
