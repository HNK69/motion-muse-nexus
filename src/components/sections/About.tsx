import { Section, SectionLabel } from "@/components/layout/Section";
import { Lines } from "@/components/motion/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { DISCIPLINES, PERSON } from "@/data/site";

export function About() {
  return (
    <Section id="about">
      <Reveal>
        <SectionLabel index="01">About</SectionLabel>
      </Reveal>

      <div className="mt-12 grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7">
          <Lines
            as="h2"
            lines={["Turning moments into", "cinematic experiences."]}
            className="display text-[clamp(2.25rem,6.5vw,5.5rem)]"
          />
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {PERSON.about}
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-8 font-serif text-2xl italic text-foreground sm:text-3xl">
              {PERSON.tagline}
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal>
            <h3 className="eyebrow">What I do</h3>
          </Reveal>
          <ul className="mt-6 border-t border-hairline">
            {DISCIPLINES.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 0.05}>
                <span className="flex items-baseline justify-between gap-6 border-b border-hairline py-4 text-sm text-muted-foreground transition-colors duration-500 hover:text-foreground sm:text-base">
                  {item}
                  <span className="font-serif text-xs italic text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
