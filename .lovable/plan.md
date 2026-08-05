# H N Krupaal — Cinematic Portfolio

A dark, editorial, single-experience portfolio built to feel like a film title sequence: deep blacks, oversized magazine typography, subtle grain, restrained red accent, and premium motion.

## One stack note
This project runs on React + TanStack Start (not Next.js) with Tailwind CSS. Everything you asked for — SSR, SEO metadata, fast loads, Framer Motion animation — works identically here. No other change to the brief.

## Design system
- Background `#050505`, cards `#111111`, accent `#D00000`, white / light-gray text — all as semantic tokens.
- Type: bold grotesque display (Archivo/Anton-class) for headline slabs, elegant italic serif for accents and pull quotes, clean sans for body.
- Global fixed grain overlay, custom cursor with magnetic hover on interactive elements, Lenis-style smooth scroll, section-level reveal/stagger on scroll.
- No gradients, no glass, no neon. High contrast, heavy whitespace, sharp corners.

## Page structure (one continuous cinematic scroll, `/`)
1. **Hero** — fullscreen muted autoplay looping video placeholder (commented `<!-- Replace with hero-video.mp4 -->`), stacked title H N KRUPAAL / CINEMATIC / VIDEO / EDITOR with line-by-line mask reveal, subtitle, magnetic "Watch Showreel →" button, scroll indicator.
2. **About** — editorial two-column: oversized headline "Turning moments into cinematic experiences." + short paragraph, plus the What I Do list as a quiet marquee/index.
3. **Featured Work** — six large premium cards (Showreel, Travel Film, College Event Reel, Commercial Edit, AI Visual Project, Creative Edit). Each is an HTML5 `<video>` placeholder that plays muted on hover with a clearly commented replace line. No YouTube.
4. **Experience** — elegant vertical timeline: EmptyCup, Sharp Cuttzz, College Events, Freelance Projects, with official brand logos where publicly available and minimal wordmarks otherwise.
5. **Services** — six cards: Cinematic Editing, Travel Films, Commercial Editing, Motion Graphics, AI Visual Creation, Color Grading.
6. **Creative Process** — Plan / Edit / Enhance / Refine / Deliver as numbered editorial steps with staggered reveal.
7. **Frame Gallery** — horizontal scroll strip of large cinematic frame placeholders with parallax.
8. **Testimonials** — restrained quote cards, placeholder copy.
9. **Contact** — full-bleed type "LET'S CREATE / SOMETHING / MEMORABLE." plus Email, Instagram, LinkedIn, GitHub buttons with official icons.
10. **Footer** — single line, © H N Krupaal.

Showreel button opens a fullscreen video lightbox (placeholder source).

## Media policy
Every video and frame is a placeholder with an inline comment naming the file to swap in (e.g. `{/* Replace with travel-film.mp4 */}`). No stock media. Poster frames for the placeholders are generated as dark cinematic stills so the site looks finished before you drop in real footage.

## Technical
- Framer Motion (`motion`) for reveals, stagger, parallax, page/section transitions; `prefers-reduced-motion` respected.
- Components split per section under `src/components/`, tokens in `src/styles.css`.
- SEO: unique title/description/OG/Twitter metadata on the route head, semantic landmarks, single H1, alt text, lazy-loaded gallery media.
- Fully responsive; type scales down cleanly on mobile with the same editorial rhythm.

## Needed from you (optional, can ship with placeholders)
Real email address and Instagram / LinkedIn / GitHub URLs — otherwise these link to `#` until provided.
