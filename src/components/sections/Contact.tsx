import { Section, SectionLabel } from "@/components/layout/Section";
import { Lines } from "@/components/motion/Lines";
import { Magnetic } from "@/components/motion/Magnetic";
import { Reveal } from "@/components/motion/Reveal";
import { BrandMark } from "@/components/media/BrandMark";
import { PERSON } from "@/data/site";

const CHANNELS = [
  { id: "email", label: "Email", href: `mailto:${PERSON.email}`, slug: "gmail" },
  { id: "instagram", label: "Instagram", href: PERSON.socials.instagram, slug: "instagram" },
  { id: "linkedin", label: "LinkedIn", href: PERSON.socials.linkedin, slug: "linkedin" },
  { id: "github", label: "GitHub", href: PERSON.socials.github, slug: "github" },
] as const;

export function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <SectionLabel index="10">Contact</SectionLabel>
      </Reveal>

      <Lines
        as="h2"
        lines={["Let's create", "something", "cinematic."]}
        className="display mt-12 text-[clamp(2.75rem,12vw,11rem)]"
      />

      <ul className="mt-16 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
        {CHANNELS.map((channel, i) => (
          <Reveal as="li" key={channel.id} delay={i * 0.06}>
            <Magnetic className="block h-full w-full" strength={8}>
              <a
                href={channel.href}
                data-cursor="Open"
                {...(channel.id === "email"
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className="flex h-full min-h-[112px] items-center justify-between gap-4 bg-background px-8 py-8 transition-colors duration-500 hover:bg-card"
              >
                <span className="text-sm uppercase tracking-[0.18em]">{channel.label}</span>
                <BrandMark name={channel.label} slug={channel.slug} className="h-5" />
              </a>
            </Magnetic>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.1}>
        <p className="mt-10 text-sm text-muted-foreground">
          Prefer email?{" "}
          <a
            href={`mailto:${PERSON.email}`}
            className="text-foreground underline decoration-primary underline-offset-4"
          >
            {PERSON.email}
          </a>
        </p>
      </Reveal>
    </Section>
  );
}
