import { Section, SectionLabel } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { FRAMES } from "@/data/site";

/**
 * Horizontal frame gallery. Native scrolling keeps it touch-friendly,
 * keyboard-reachable and free of scroll-jacking.
 */
export function Gallery() {
  return (
    <Section id="frames">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionLabel index="08">Frame Gallery</SectionLabel>
          <p className="text-sm text-muted-foreground">Scroll horizontally →</p>
        </div>
      </Reveal>

      <ul
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
        tabIndex={0}
        aria-label="Selected frames, scrollable gallery"
      >
        {FRAMES.map((frame) => (
          <li
            key={frame.id}
            className="group w-[82vw] shrink-0 snap-center sm:w-[52vw] lg:w-[38vw]"
          >
            <figure>
              {/* Replace with the real still, e.g. /frames/frame-01.jpg */}
              <div className="relative aspect-[16/10] overflow-hidden border border-hairline bg-card">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="eyebrow">{frame.label}</span>
                </div>
              </div>
              <figcaption className="mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {frame.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
}
