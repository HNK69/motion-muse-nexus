import { Section, SectionLabel } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { EXPERIENCE } from "@/data/site";

export function Experience() {
  return (
    <Section id="experience">
      <Reveal>
        <SectionLabel index="04">Experience & Worked With</SectionLabel>
      </Reveal>

      {/* Unified Experience & Collaborations List */}
      <div className="mt-12 space-y-5">
        {EXPERIENCE.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.05}>
            <div className="group relative rounded-2xl border border-hairline bg-card/40 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card/75 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-7">
                {/* Official Brand Logo Badge */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-hairline bg-secondary/60 p-2.5 shadow-inner transition-transform duration-300 group-hover:scale-105 group-hover:border-primary/40 sm:h-20 sm:w-20">
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={`${item.company} logo`}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <span className="font-display text-lg font-bold tracking-wider text-primary">
                      {item.company.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>

                {/* Role, Company, Period & Deliverables */}
                <div className="flex-1">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <div>
                      <h3 className="display text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl">
                        {item.company}
                      </h3>
                      <p className="mt-1 font-serif text-base italic text-muted-foreground sm:text-lg">
                        {item.role}
                      </p>
                    </div>
                    <span className="eyebrow self-start sm:self-auto text-xs sm:text-sm">
                      {item.period}
                    </span>
                  </div>

                  <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.description}
                  </p>

                  {item.tags && item.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-hairline bg-secondary/40 px-3 py-1 text-xs font-medium text-foreground/80 transition-colors group-hover:border-primary/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
