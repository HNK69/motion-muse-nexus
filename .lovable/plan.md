# H N Krupaal — Cinematic Digital Experience

A dark, editorial, cinematic single-scroll site: deep blacks, oversized magazine typography, subtle grain, restrained red accent, and premium restrained motion. Built for real usability first, then visual impact.

## One stack note
This project runs on React + TanStack Start (not Next.js) with Tailwind CSS. SSR, SEO metadata, fast loads, and Framer Motion animation all work identically here. No other change to the brief.

## Design system
- Background `#050505`, cards `#111111`, accent `#D00000`, white / light-gray text — all as semantic tokens.
- Type: bold grotesque display for headline slabs, elegant italic serif for accents and pull quotes, clean sans for body. Fluid `clamp()` scale so headlines stay editorial on mobile.
- Global fixed grain overlay, smooth (Lenis-style) scroll, film-frame section transitions — slow mask/fade wipes, no flashy effects.
- No gradients, no glass, no neon. High contrast, heavy whitespace, sharp corners.

## Experience shell
- **Loading screen** — black, large centered "H N KRUPAAL", fade in, brief hold, fade out into hero on smooth easing. Shown once per session, skippable, instant for reduced-motion.
- **Floating nav** — `HN` left; Work / About / Experience / Services / Contact right. Hides on scroll down, reappears on scroll up. Mobile: compact bar with full-screen menu overlay, always reachable.
- **Custom cursor** — expands on hover with contextual text (Play / View / Open). Desktop pointer devices only; touch devices get native behavior and hover states mapped to tap feedback.
- **Showreel lightbox** — fullscreen dark overlay with elegant controls, ESC to close, focus trapped, focus returned on close.

## Sections (single scroll, `/`)
1. **Hero** — fullscreen muted autoplay looping video placeholder (`{/* Replace with hero-video.mp4 */}`), stacked H N KRUPAAL / CINEMATIC / VIDEO / EDITOR with line-by-line mask reveal, subtitle, magnetic "Watch Showreel →" button, scroll indicator.
2. **About** — editorial two-column: "Turning moments into cinematic experiences." + short paragraph; What I Do as a quiet index list.
3. **Featured Work** — six large premium cards (Showreel, Travel Film, College Event Reel, Commercial Edit, AI Visual Project, Creative Edit). HTML5 `<video>` placeholders, muted preview on hover, each with a clear replace comment. No YouTube. Aspect-ratio boxes so any footage fits without layout shift.
4. **Selected Work (statistics)** — luxury annual-report layout, not stat cards: oversized numerals with animated counters — 20+ Projects, 2 Brands, 1 Creative Agency, Official College Productions.
5. **Experience** — elegant timeline: EmptyCup, Sharp Cuttzz, College Events, Freelance Projects, with official logos where publicly available, minimal wordmarks otherwise.
6. **Services** — six cards: Cinematic Editing, Travel Films, Commercial Editing, Motion Graphics, AI Visual Creation, Color Grading.
7. **Tools** — horizontal monochrome strip: DaVinci Resolve, Photoshop, Illustrator, Kling, Google Veo, Luma AI, Runway. Official SVG logos where available, elegant wordmarks otherwise.
8. **Creative Process** — Plan / Edit / Enhance / Refine / Deliver as numbered editorial steps with staggered reveal.
9. **Frame Gallery** — horizontal cinematic frame placeholders with parallax; swipeable on touch, keyboard-scrollable.
10. **Testimonials** — restrained quote cards, placeholder copy.
11. **Contact** — LET'S CREATE / SOMETHING / CINEMATIC. with Email, Instagram, LinkedIn, GitHub buttons using official icons.
12. **Footer** — © H N Krupaal.

## Micro-interactions
Tactile button press states, cards lifting a few pixels, images with subtle depth on hover, line-by-line type reveal, elegant underline/mask hovers. Motion is short, eased, and never blocks reading.

## Accessibility, performance, responsiveness
- `prefers-reduced-motion` disables reveals, parallax, counters animation, and the loading sequence.
- Semantic landmarks, single `<h1>`, one `<main>`, visible focus rings, full keyboard path through nav, work cards, lightbox, and gallery.
- Tap targets ≥44px, contrast checked against `#050505`, no content only reachable by hover.
- Videos lazy-loaded with poster frames, `preload="none"` off-screen, `playsInline`; images lazy with explicit aspect ratios.
- Mobile keeps the full cinematic identity — same type treatment and grain — with heavier animations traded for lighter fades.
- SEO: unique title/description/OG/Twitter on the route head, alt text everywhere, JSON-LD Person schema.

## Needed from you (optional, ships with placeholders otherwise)
Real email address and Instagram / LinkedIn / GitHub URLs.
