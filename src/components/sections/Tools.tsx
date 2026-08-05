import { Section, SectionLabel } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { BrandMark } from "@/components/media/BrandMark";
import { TOOLS } from "@/data/site";

/** Official monochrome marks where available, wordmarks otherwise. */
const LOGO_SLUGS: Record<string, string> = {
  davinci: "davinciresolve",
  premiere: "adobepremierepro",
};

export function Tools() {
  return (
    <Section id="tools">
      <Reveal>
        <SectionLabel index="06">Tools</SectionLabel>
      </Reveal>

      <ul
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-px overflow-x-auto border border-hairline bg-hairline"
        aria-label="Tools I work with, scrollable"
      >
        {TOOLS.map((tool) => {
          const slug = LOGO_SLUGS[tool.id];
          return (
            <li
              key={tool.id}
              className="flex min-w-[220px] flex-1 snap-start flex-col items-center justify-center gap-4 bg-background px-8 py-12 transition-colors duration-700 hover:bg-card"
            >
              <BrandMark name={tool.name} {...(slug ? { slug } : {})} className="h-8" />
              <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {tool.name}
              </span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
