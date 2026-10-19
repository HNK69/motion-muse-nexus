import { useState } from "react";
import { Section, SectionLabel } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { VideoPlaceholder } from "@/components/media/VideoPlaceholder";
import { PROJECTS, type Project } from "@/data/site";
import { cn } from "@/lib/utils";

type WorkProps = { onSelect: (project: Project) => void };

type FilterTab = "all" | "films" | "reels" | "commercial";

export function Work({ onSelect }: WorkProps) {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeTab === "films") return p.aspect === "landscape";
    if (activeTab === "reels") return p.aspect === "portrait";
    if (activeTab === "commercial")
      return p.aspect === "square" || p.category.includes("Commercial") || p.category.includes("Event");
    return true;
  });

  return (
    <Section id="work">
      <Reveal>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel index="02">Featured Work</SectionLabel>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Eight curated pieces across cinematic landscape films, vertical reels, and brand edits.
              Hover to preview; click for immersive playback.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Work", count: PROJECTS.length },
              {
                id: "films",
                label: "Landscape Films",
                count: PROJECTS.filter((p) => p.aspect === "landscape").length,
              },
              {
                id: "reels",
                label: "Vertical Reels",
                count: PROJECTS.filter((p) => p.aspect === "portrait").length,
              },
              {
                id: "commercial",
                label: "Commercials & Events",
                count: PROJECTS.filter(
                  (p) =>
                    p.aspect === "square" ||
                    p.category.includes("Commercial") ||
                    p.category.includes("Event"),
                ).length,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as FilterTab)}
                className={cn(
                  "inline-flex items-center gap-2 border px-3.5 py-1.5 text-xs uppercase tracking-wider transition-all duration-300",
                  activeTab === tab.id
                    ? "border-primary bg-primary text-primary-foreground font-medium shadow-sm"
                    : "border-border/70 bg-card/40 text-muted-foreground hover:border-border hover:text-foreground",
                )}
              >
                <span>{tab.label}</span>
                <span className="text-[10px] opacity-70">({tab.count})</span>
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <ul
        className={cn(
          "mt-12 grid gap-8 lg:gap-10",
          activeTab === "reels" ? "sm:grid-cols-2 md:grid-cols-3" : "sm:grid-cols-2",
        )}
      >
        {filteredProjects.map((project, i) => (
          <Reveal as="li" key={project.id} delay={(i % 2) * 0.06}>
            <article className="group flex h-full flex-col">
              <button
                type="button"
                onClick={() => onSelect(project)}
                data-cursor="Play"
                className="block w-full text-left"
                aria-label={`Play ${project.title}`}
              >
                <div
                  className={cn(
                    "relative overflow-hidden border border-hairline bg-card/50 transition-all duration-700 ease-out group-hover:-translate-y-1 group-hover:border-border",
                    project.aspect === "portrait" && activeTab !== "reels" && "mx-auto max-w-[420px]",
                    project.aspect === "square" && "mx-auto max-w-[480px]",
                  )}
                >
                  <VideoPlaceholder
                    src={project.video}
                    poster={project.poster}
                    label={project.title}
                    aspect={project.aspect}
                    playOnHover
                    className="w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                  />

                  {/* Format tag badge */}
                  <div className="pointer-events-none absolute right-3 top-3 z-10">
                    <span className="eyebrow border border-border/80 bg-background/85 px-2.5 py-1 text-[9px] font-medium text-foreground backdrop-blur-md shadow-sm">
                      {project.aspect === "portrait"
                        ? "9:16 Reel"
                        : project.aspect === "square"
                          ? "1:1 Square"
                          : "16:9 Film"}
                    </span>
                  </div>
                </div>

                <div
                  className={cn(
                    "w-full",
                    project.aspect === "portrait" && activeTab !== "reels" && "mx-auto max-w-[420px]",
                    project.aspect === "square" && "mx-auto max-w-[480px]",
                  )}
                >
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <h3 className="display text-xl sm:text-2xl font-medium tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                      {project.title}
                    </h3>
                    <span className="eyebrow shrink-0 whitespace-nowrap text-xs text-muted-foreground">
                      {project.category} · {project.year}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </button>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
