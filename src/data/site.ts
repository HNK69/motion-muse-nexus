/**
 * Single source of truth for all portfolio content.
 * Add new projects, services, testimonials or tools here — no component
 * changes required.
 */

export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  /** Placeholder path — drop the real file in /public and keep the name. */
  video: string;
  description: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
};

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  /** Optional official logo URL (SVG preferred). Falls back to a wordmark. */
  logo?: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

export type Tool = {
  id: string;
  name: string;
  logo?: string;
};

export type Stat = {
  id: string;
  value: number;
  suffix?: string;
  label: string;
};

export const PERSON = {
  name: "H N Krupaal",
  shortName: "HN",
  title: "Cinematic Video Editor • AI Creative",
  tagline: "Crafting visuals that people remember.",
  subtitle: "Creating cinematic edits enhanced with modern AI visuals.",
  about:
    "I'm an engineering student and freelance video editor passionate about cinematic visuals, travel films, and creative storytelling through editing. I combine traditional editing techniques with modern AI tools to create graphics, visual elements, and unique creative sequences that elevate every project.",
  email: "hello@hnkrupaal.com",
  socials: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    github: "https://github.com/",
  },
} as const;

export const DISCIPLINES = [
  "Cinematic Video Editing",
  "Travel Videos",
  "Short-form Content",
  "Event Films",
  "Commercial Videos",
  "AI-Assisted Visual Creation",
  "Motion Graphics",
  "Color Grading",
] as const;

export const NAV_LINKS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
] as const;

/** Replace each `video` file with the real export of the same name. */
export const PROJECTS: Project[] = [
  {
    id: "showreel",
    title: "Showreel",
    category: "Reel",
    year: "2026",
    video: "/showreel.mp4",
    description: "A condensed cut of the work that defines the last two years.",
  },
  {
    id: "travel-film",
    title: "Travel Film",
    category: "Documentary",
    year: "2025",
    video: "/travel-film.mp4",
    description: "Long-form travel storytelling built around light and silence.",
  },
  {
    id: "college-event-reel",
    title: "College Event Reel",
    category: "Event",
    year: "2025",
    video: "/college-event-reel.mp4",
    description: "High-energy festival coverage cut to the rhythm of the crowd.",
  },
  {
    id: "commercial-edit",
    title: "Commercial Edit",
    category: "Brand",
    year: "2025",
    video: "/commercial-edit.mp4",
    description: "Product-led commercial edit with precision pacing and grade.",
  },
  {
    id: "ai-visual-project",
    title: "AI Visual Project",
    category: "Experimental",
    year: "2026",
    video: "/ai-visual-project.mp4",
    description: "Generated sequences composited into a live-action narrative.",
  },
  {
    id: "creative-edit",
    title: "Creative Edit",
    category: "Concept",
    year: "2024",
    video: "/creative-edit.mp4",
    description: "A typographic, rhythm-first experiment in motion and cut.",
  },
];

export const STATS: Stat[] = [
  { id: "projects", value: 20, suffix: "+", label: "Projects delivered" },
  { id: "brands", value: 2, label: "Brands" },
  { id: "agency", value: 1, label: "Creative agency" },
  { id: "college", value: 6, suffix: "+", label: "Official college productions" },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "emptycup",
    company: "EmptyCup",
    role: "Video Editor",
    period: "2025 — Present",
    description:
      "Short-form and brand films for an interior design platform, built around calm pacing and material texture.",
  },
  {
    id: "sharp-cuttzz",
    company: "Sharp Cuttzz",
    role: "Creative Editor",
    period: "2024 — 2025",
    description:
      "Agency work across commercial edits, motion graphics and grading for client campaigns.",
  },
  {
    id: "college-events",
    company: "College Events & Fests",
    role: "Official Production",
    period: "2023 — Present",
    description:
      "Aftermovies, promos and live coverage for official college events and festivals.",
  },
  {
    id: "freelance",
    company: "Freelance Projects",
    role: "Independent Editor",
    period: "2023 — Present",
    description:
      "Travel films, reels and commissioned edits for independent creators and small brands.",
  },
];

export const SERVICES: Service[] = [
  {
    id: "cinematic-editing",
    title: "Cinematic Editing",
    description: "Narrative-led cuts with deliberate rhythm, sound design and restraint.",
  },
  {
    id: "travel-films",
    title: "Travel Films",
    description: "Place-driven storytelling that holds a frame long enough to feel it.",
  },
  {
    id: "commercial-editing",
    title: "Commercial Editing",
    description: "Product and brand edits engineered for attention and recall.",
  },
  {
    id: "motion-graphics",
    title: "Motion Graphics",
    description: "Typography, transitions and graphic systems designed per project.",
  },
  {
    id: "ai-visual-creation",
    title: "AI Visual Creation",
    description: "Generated plates and elements composited into real footage seamlessly.",
  },
  {
    id: "color-grading",
    title: "Color Grading",
    description: "Considered palettes, film emulation and consistent looks across a cut.",
  },
];

export const PROCESS = [
  { id: "plan", title: "Plan", description: "Reference, structure, and the emotional arc before a single cut." },
  { id: "edit", title: "Edit", description: "Assembly, rhythm and story — the frame count that matters." },
  { id: "enhance", title: "Enhance", description: "Graphics, AI elements and sound layered with intent." },
  { id: "refine", title: "Refine", description: "Grade, polish, and the final ten percent that reads as craft." },
  { id: "deliver", title: "Deliver", description: "Formats, aspect ratios and masters for every platform." },
] as const;

export const TOOLS: Tool[] = [
  { id: "davinci", name: "DaVinci Resolve" },
  { id: "photoshop", name: "Adobe Photoshop" },
  { id: "illustrator", name: "Adobe Illustrator" },
  { id: "kling", name: "Kling" },
  { id: "veo", name: "Google Veo" },
  { id: "luma", name: "Luma AI" },
  { id: "runway", name: "Runway" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Placeholder testimonial — replace with a real client quote. The edit carried the whole campaign; pacing, grade and sound were exactly right.",
    name: "Client Name",
    role: "Brand / Company",
  },
  {
    id: "t2",
    quote:
      "Placeholder testimonial — replace with a real client quote. Delivered ahead of schedule without losing an ounce of craft.",
    name: "Client Name",
    role: "Creative Agency",
  },
  {
    id: "t3",
    quote:
      "Placeholder testimonial — replace with a real client quote. Understood the story before we could explain it.",
    name: "Client Name",
    role: "Event Production",
  },
];

/** Frame gallery placeholders — replace each with a real still. */
export const FRAMES = [
  { id: "frame-01", label: "Frame 01", caption: "Travel film — dawn" },
  { id: "frame-02", label: "Frame 02", caption: "Commercial — product macro" },
  { id: "frame-03", label: "Frame 03", caption: "Event — crowd" },
  { id: "frame-04", label: "Frame 04", caption: "AI plate — composite" },
  { id: "frame-05", label: "Frame 05", caption: "Travel film — highway" },
  { id: "frame-06", label: "Frame 06", caption: "Portrait — grade test" },
] as const;
