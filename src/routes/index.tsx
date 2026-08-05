import { createFileRoute } from "@tanstack/react-router";
import { MotionConfig } from "motion/react";
import { useCallback, useState } from "react";

import { CustomCursor } from "@/components/layout/CustomCursor";
import { FloatingNav } from "@/components/layout/FloatingNav";
import { Footer } from "@/components/layout/Footer";
import { Grain } from "@/components/layout/Grain";
import { Preloader } from "@/components/layout/Preloader";
import { ShowreelLightbox } from "@/components/media/ShowreelLightbox";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Tools } from "@/components/sections/Tools";
import { Work } from "@/components/sections/Work";
import { PERSON, PROJECTS, type Project } from "@/data/site";

const TITLE = "H N Krupaal — Cinematic Video Editor & AI Creative";
const DESCRIPTION =
  "Cinematic video editor and AI creative. Travel films, commercials, event films, motion graphics and color grading — crafting visuals that people remember.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [showreel, setShowreel] = useState<Project | null>(null);
  const [, setIntroDone] = useState(false);
  const onIntroDone = useCallback(() => setIntroDone(true), []);

  const openShowreel = useCallback(() => {
    setShowreel(PROJECTS[0] ?? null);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <Preloader onDone={onIntroDone} />
      <Grain />
      <CustomCursor />
      <FloatingNav />

      <main>

        <Hero onWatchShowreel={openShowreel} />
        <About />
        <Work onSelect={setShowreel} />
        <Stats />
        <Experience />
        <Services />
        <Tools />
        <Process />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {showreel && (
        <ShowreelLightbox
          open={Boolean(showreel)}
          onOpenChange={(open) => !open && setShowreel(null)}
          title={showreel.title}
          src={showreel.video}
        />
      )}
    </MotionConfig>
  );
}
