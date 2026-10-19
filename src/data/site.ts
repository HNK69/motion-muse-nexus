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
  video: string;
  poster?: string;
  description: string;
  aspect?: "portrait" | "landscape" | "square";
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
  tags?: string[];
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
  email: "hnkrupaal@gmail.com",
  socials: {
    instagram: "https://www.instagram.com/hnkrupaal/",
    linkedin: "https://www.linkedin.com/in/h-n-krupaal/",
    github: "https://github.com/HNK69",
  },
} as const;

export const DISCIPLINES = [
  "Cinematic Video Editing",
  "Color Grading",
  "Travel Videos",
  "Short-form Content",
  "Event Films",
  "Commercial Videos",
  "Motion Graphics",
  "AI-Assisted Visual Creation",
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
    id: "travel-film-i",
    title: "Travel Film I — Dawn Reflections",
    category: "Travel Film",
    year: "2026",
    video: "/videos/travel-film-i.mp4",
    poster: "/thumbnails/travel-film-i.jpg",
    aspect: "landscape",
    description: "Cinematic sunrise boat journey capturing morning golden light, gentle water reflections, and contemplative atmosphere.",
  },
  {
    id: "travel-film-ii",
    title: "Travel Film II — Sacred River",
    category: "Documentary",
    year: "2026",
    video: "/videos/travel-film-ii.mp4",
    poster: "/thumbnails/travel-film-ii.jpg",
    aspect: "landscape",
    description: "Atmospheric evening narrative capturing ancient riverbank rituals, flickering pyres, and intense nocturnal rhythm.",
  },
  {
    id: "brx-college-fest",
    title: "Live Concert Coverage",
    category: "Event & Fest",
    year: "2026",
    video: "/videos/brx-college-fest.mp4",
    poster: "/thumbnails/brx-college-fest.jpg",
    aspect: "landscape",
    description: "High-octane college festival performance coverage edited on beat to live drums and roaring crowd energy.",
  },
  {
    id: "paritrana-teaser",
    title: "Paritrana — MBA Fest Teaser",
    category: "3D Motion",
    year: "2026",
    video: "/videos/paritrana-teaser.mp4",
    poster: "/thumbnails/paritrana-teaser.jpg",
    aspect: "landscape",
    description: "Emblem title reveal and cinematic motion sequence crafted for RNSIT Department of MBA flagship event.",
  },
  {
    id: "brand-reel",
    title: "POV: The Dress",
    category: "Fashion Reel",
    year: "2026",
    video: "/videos/brand-reel.mp4",
    poster: "/thumbnails/brand-reel.jpg",
    aspect: "portrait",
    description: "Vibrant vertical fashion reel featuring dynamic title integration, color-graded aesthetic, and modern lifestyle pacing.",
  },
  {
    id: "wayanad-safar",
    title: "Wayanad Safar",
    category: "Travel Reel",
    year: "2026",
    video: "/videos/wayanad-safar.mp4",
    poster: "/thumbnails/wayanad-safar.jpg",
    aspect: "portrait",
    description: "High-energy motorcycle expedition across misty forest hills, graded with punchy tones in full 9:16 portrait format.",
  },
  {
    id: "fdp-academic",
    title: "AI Academic Excellence",
    category: "Academic Promo",
    year: "2026",
    video: "/videos/fdp-academic.mp4",
    poster: "/thumbnails/fdp-academic.jpg",
    aspect: "portrait",
    description: "Official portrait promotional video for RNSIT Faculty Development Programme on AI-driven academic research.",
  },
  {
    id: "brocode-commercial",
    title: "Bro Code — Product Edit",
    category: "Commercial",
    year: "2025",
    video: "/videos/brocode-commercial.mp4",
    poster: "/thumbnails/brocode-commercial.jpg",
    aspect: "square",
    description: "Snappy commercial product edit pairing split review formats, sharp graphic callouts, and clean sound sync.",
  },
];

export const STATS: Stat[] = [
  { id: "projects", value: 50, suffix: "+", label: "Projects delivered" },
  { id: "brands", value: 4, suffix: "+", label: "Brands & Platforms" },
  { id: "agency", value: 1, label: "Creative agency" },
  { id: "college", value: 6, suffix: "+", label: "Official college productions" },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "growthschool",
    company: "GrowthSchool",
    role: "Video Editor",
    period: "2024 — 2025",
    description:
      "Created high-converting performance video creatives, masterclass promos, and engaging short-form content for top industry programs with fast turnaround times.",
    logo: "/logos/growthschool-white.svg",
    tags: ["Performance Ads", "Masterclass Promos", "Short-Form Edits"],
  },
  {
    id: "emptycup",
    company: "EmptyCup",
    role: "Video Editor & Creative Specialist",
    period: "2025 — 2026",
    description:
      "Produced architectural walkthroughs, short-form reels, and brand films for an interior design tech platform, built around calm pacing, sound design, and material texture.",
    logo: "/logos/emptycup-official.png",
    tags: ["3D Interior Walkthroughs", "Spatial Storytelling", "Reels & Brand Films"],
  },
  {
    id: "sharp-cuttzz",
    company: "Sharp Cuttzz",
    role: "Creative Editor",
    period: "2024 — 2025",
    description:
      "Agency editing across commercial cuts, dynamic motion graphics, and cinematic color grading for diverse brand campaigns.",
    tags: ["Commercial Edits", "Dynamic Motion Graphics", "Color Grading"],
  },
  {
    id: "rns-mba",
    company: "RNSIT (MBA Department)",
    role: "Lead Video Production & Editor",
    period: "2023 — Present",
    description:
      "Directed aftermovies, official teasers, and high-energy live event coverage for flagship collegiate festivals and departmental programs.",
    logo: "/logos/rnsit-crest.png",
    tags: ["Event Aftermovies", "Official Teasers", "Festival Coverage"],
  },
  {
    id: "freelance",
    company: "Independent Freelance",
    role: "Cinematic Editor & AI Creative",
    period: "2023 — Present",
    description:
      "Travel films, commissioned product reels, and AI-assisted visual narratives for independent creators and emerging brands.",
    tags: ["Travel Films", "AI Visual Effects", "Narrative Storytelling"],
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
    id: "color-grading",
    title: "Color Grading",
    description: "Considered palettes, film emulation and consistent looks across a cut.",
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
];

export const PROCESS = [
  {
    id: "plan",
    title: "Plan",
    description: "Reference, structure, and the emotional arc before a single cut.",
  },
  {
    id: "edit",
    title: "Edit",
    description: "Assembly, rhythm and story — the frame count that matters.",
  },
  {
    id: "enhance",
    title: "Enhance",
    description: "Graphics, AI elements and sound layered with intent.",
  },
  {
    id: "refine",
    title: "Refine",
    description: "Grade, polish, and the final ten percent that reads as craft.",
  },
  {
    id: "deliver",
    title: "Deliver",
    description: "Formats, aspect ratios and masters for every platform.",
  },
] as const;

export const TOOLS: Tool[] = [
  { id: "davinci", name: "DaVinci Resolve" },
  { id: "premiere", name: "Adobe Premiere Pro" },
  { id: "kling", name: "Kling" },
  { id: "veo", name: "Google Veo" },
  { id: "luma", name: "Luma AI" },
  { id: "runway", name: "Runway" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "emptycup",
    quote:
      "Professional, on time, and a remarkably fast learner. Krupaal understood our visual aesthetic quickly, delivering polished interior walkthrough edits and brand videos with consistent precision.",
    name: "EmptyCup Team",
    role: "EmptyCup — 3D Interior Platform",
  },
  {
    id: "rns-mba",
    quote:
      "Creative, fast, and remarkably detail-oriented. Krupaal elevated our department's event promotions and teasers with cinematic pacing and high-impact motion visuals that engaged our entire audience.",
    name: "Media & Event Cell",
    role: "Department of Management Studies (MBA), RNSIT",
  },
];
