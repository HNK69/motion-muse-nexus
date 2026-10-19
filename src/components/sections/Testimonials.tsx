import { Section, SectionLabel } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { TESTIMONIALS } from "@/data/site";

export function Testimonials() {
  return (
    <Section id="testimonials">
      <Reveal>
        <SectionLabel index="09">Testimonials</SectionLabel>
      </Reveal>

      <ul className="mt-14 grid gap-8 md:grid-cols-2 lg:gap-10">
        {TESTIMONIALS.map((item, i) => (
          <Reveal as="li" key={item.id} delay={i * 0.08}>
            <figure className="flex h-full flex-col justify-between border border-hairline bg-card/60 p-8 transition-transform duration-700 ease-out hover:-translate-y-1 sm:p-10">
              <blockquote className="font-serif text-xl italic leading-relaxed text-foreground sm:text-2xl">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-8 border-t border-hairline pt-5">
                <span className="block font-medium text-foreground">{item.name}</span>
                <span className="eyebrow mt-1 block text-xs text-muted-foreground">{item.role}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
