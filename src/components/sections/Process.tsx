import { Section, SectionLabel } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { PROCESS } from "@/data/site";

export function Process() {
  return (
    <Section id="process">
      <Reveal>
        <SectionLabel index="07">Creative Process</SectionLabel>
      </Reveal>

      <ol className="mt-14 border-t border-hairline">
        {PROCESS.map((step, i) => (
          <Reveal as="li" key={step.id} delay={i * 0.05}>
            <div className="group grid gap-3 border-b border-hairline py-8 md:grid-cols-12 md:items-baseline md:gap-8">
              <span className="font-serif text-sm italic text-primary md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display text-[clamp(2rem,6vw,4.5rem)] transition-transform duration-700 ease-out md:col-span-5 md:group-hover:translate-x-2">
                {step.title}
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:col-span-6">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
