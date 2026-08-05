import { Section, SectionLabel } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { SERVICES } from "@/data/site";

export function Services() {
  return (
    <Section id="services">
      <Reveal>
        <SectionLabel index="05">Services</SectionLabel>
      </Reveal>

      <ul className="mt-14 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <Reveal as="li" key={service.id} delay={(i % 3) * 0.06}>
            <div className="group h-full bg-background p-8 transition-colors duration-700 hover:bg-card sm:p-10">
              <span className="font-serif text-sm italic text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display mt-6 text-2xl sm:text-3xl">{service.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
