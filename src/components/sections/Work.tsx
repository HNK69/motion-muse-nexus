import { Section, SectionLabel } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { VideoPlaceholder } from "@/components/media/VideoPlaceholder";
import { PROJECTS, type Project } from "@/data/site";

type WorkProps = { onSelect: (project: Project) => void };

export function Work({ onSelect }: WorkProps) {
  return (
    <Section id="work">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionLabel index="02">Featured Work</SectionLabel>
          <p className="max-w-sm text-sm text-muted-foreground">
            Six selected pieces. Each opens in a fullscreen player.
          </p>
        </div>
      </Reveal>

      <ul className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
        {PROJECTS.map((project, i) => (
          <Reveal as="li" key={project.id} delay={(i % 2) * 0.08}>
            <article className="group h-full">
              <button
                type="button"
                onClick={() => onSelect(project)}
                data-cursor="Play"
                className="block w-full text-left"
                aria-label={`Play ${project.title}`}
              >
                <div className="relative overflow-hidden border border-hairline transition-transform duration-700 ease-out group-hover:-translate-y-1">
                  {/* Replace with {project.video} — e.g. /showreel.mp4, /travel-film.mp4 */}
                  <VideoPlaceholder
                    src={project.video}
                    label={`Replace ${project.video}`}
                    playOnHover
                    className="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-5 flex items-baseline justify-between gap-6">
                  <h3 className="display text-2xl sm:text-3xl">{project.title}</h3>
                  <span className="eyebrow whitespace-nowrap">
                    {project.category} · {project.year}
                  </span>
                </div>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </button>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
