# Portfolio — plain HTML / CSS / JS

A dependency-free rewrite of the Next.js portfolio. Same design, same content,
same behaviour — just `index.html`, stylesheets and a few small scripts.

## Run it

Open `index.html` directly in a browser, or serve the folder (recommended):

```
npx serve .
# or
python -m http.server 8080
```

No build step. Deploy by pointing GitHub Pages (or any static host) at this folder.

## Structure

```
plain-html/
├── index.html              # the whole page (navbar → hero → … → footer)
├── assets/
│   └── profile.png         # hero photo
├── css/
│   ├── base.css            # design tokens, reset, global element styles
│   ├── layout.css          # container, sections, buttons, chips, icon sizes
│   ├── animations.css      # keyframes + scroll-reveal states
│   └── components/         # one small file per page section
│       ├── navbar.css
│       ├── hero.css
│       ├── about.css
│       ├── education.css
│       ├── skills.css
│       ├── projects.css
│       ├── contact.css
│       └── footer.css
└── js/
    ├── main.js             # entry point, wires everything up
    └── modules/
        ├── navbar.js       # scroll state + mobile menu toggle
        └── reveal.js       # IntersectionObserver fade-in on scroll
```

## Notes

- Colors, fonts and breakpoints match the old Tailwind config
  (`css/base.css` holds the same tokens as CSS variables).
- Icons are a single inline SVG sprite in `index.html`, referenced with
  `<use href="#i-...">` — no icon library needed.
- The page is fully visible with JavaScript disabled; the scroll-reveal
  only hides elements when JS is running.
- Update email/GitHub links directly in `index.html`
  (the old `lib/profile.ts` constants are now plain `href`s).
