import { Section, SectionLabel } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { BrandMark } from "@/components/media/BrandMark";
import { EXPERIENCE } from "@/data/site";

export function Experience() {
  return (
    <Section id="experience">
      <Reveal>
        <SectionLabel index="04">Experience</SectionLabel>
      </Reveal>

      <ol className="mt-14 border-t border-hairline">
        {EXPERIENCE.map((item, i) => (
          <Reveal as="li" key={item.id} delay={i * 0.06}>
            <div className="group grid gap-4 border-b border-hairline py-9 md:grid-cols-12 md:items-baseline md:gap-8">
              <p className="eyebrow md:col-span-2">{item.period}</p>
              <div className="md:col-span-4">
                <h3 className="display text-2xl transition-colors duration-500 group-hover:text-primary sm:text-3xl">
                  {item.company}
                </h3>
                <p className="mt-2 font-serif text-lg italic text-muted-foreground">{item.role}</p>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:col-span-5">
                {item.description}
              </p>
              <div className="flex md:col-span-1 md:justify-end">
                <BrandMark name={item.company} {...(item.logo ? { slug: item.logo } : {})} />
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
