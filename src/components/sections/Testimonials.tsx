import { Section, SectionLabel } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { TESTIMONIALS } from "@/data/site";

export function Testimonials() {
  return (
    <Section id="testimonials">
      <Reveal>
        <SectionLabel index="09">Testimonials</SectionLabel>
      </Reveal>

      <ul className="mt-14 grid gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((item, i) => (
          <Reveal as="li" key={item.id} delay={i * 0.08}>
            <figure className="flex h-full flex-col justify-between border border-hairline bg-card p-8 transition-transform duration-700 ease-out hover:-translate-y-1 sm:p-10">
              <blockquote className="font-serif text-xl italic leading-snug text-foreground sm:text-2xl">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-10 border-t border-hairline pt-5">
                <span className="block text-sm text-foreground">{item.name}</span>
                <span className="eyebrow mt-1 block">{item.role}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
