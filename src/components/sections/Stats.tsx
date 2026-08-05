import { Section, SectionLabel } from "@/components/layout/Section";
import { Counter } from "@/components/motion/Counter";
import { Reveal } from "@/components/motion/Reveal";
import { STATS } from "@/data/site";

/** Annual-report styled figures rather than statistic cards. */
export function Stats() {
  return (
    <Section id="selected-work">
      <Reveal>
        <SectionLabel index="03">Selected Work</SectionLabel>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-10 max-w-2xl font-serif text-2xl italic leading-snug text-muted-foreground sm:text-3xl">
          A record of the work so far — brands, agencies, official productions and
          independent commissions.
        </p>
      </Reveal>

      <dl className="mt-16 border-t border-hairline">
        {STATS.map((stat, i) => (
          <Reveal key={stat.id} delay={i * 0.06}>
            <div className="flex items-baseline justify-between gap-6 border-b border-hairline py-7 md:py-9">
              <dt className="max-w-[55%] text-sm uppercase tracking-[0.16em] text-muted-foreground sm:text-base">
                {stat.label}
              </dt>
              <dd className="display text-[clamp(2.5rem,8vw,6rem)] leading-none">
                <Counter value={stat.value} {...(stat.suffix ? { suffix: stat.suffix } : {})} />
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
