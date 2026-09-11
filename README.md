# AYB Architects — Interactive Portfolio

The digital portfolio of **Ayoub Ghaout / AYB Architects**, built as an
interactive architectural exhibition rather than a template. React + Vite,
GSAP/Lenis-driven smooth scroll, a custom architectural crosshair cursor,
and scroll-triggered reveals throughout.

All copy, project data, and images are taken directly from the AYB
Architects portfolio PDF — see `src/data/projects.js` for the single
source of truth for content.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Structure

```
public/images/            portfolio images, organized per project
src/data/projects.js      all real content: profile, education, projects, sections
src/components/           Nav, Footer, Cursor, Hero, Reveal, ParallaxImage, ProjectTeaser
src/pages/                Home, ProjectIndex, ProjectPage (data-driven), About, Contact
src/styles/                design tokens, type scale, layout utilities
```

## Notes

- The custom cursor automatically disables itself on touch/coarse-pointer
  devices, and all scroll-driven motion respects `prefers-reduced-motion`.
- `ProjectPage.jsx` is fully data-driven: adding a new project to
  `src/data/projects.js` (with a `full`, `drawing`, `interiors`, `facade`,
  or `program` section) is enough to generate its full page — no new
  components are required for ordinary edits.
- Fonts (Archivo, IBM Plex Mono) are loaded from Google Fonts in
  `index.html`.
