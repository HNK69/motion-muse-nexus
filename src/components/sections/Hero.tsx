import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Lines } from "@/components/motion/Lines";
import { Magnetic } from "@/components/motion/Magnetic";
import { EASE } from "@/lib/motion";
import { PERSON } from "@/data/site";

export function Hero({ onWatchShowreel }: { onWatchShowreel: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "14%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, reduced ? 1 : 0.2]);

  return (
    <div id="top" ref={ref} className="relative min-h-dvh overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }} aria-hidden="true">
        {/* Replace with hero-video.mp4 */}
        <video
          src="/hero-video.mp4"
          autoPlay={!reduced}
          className="size-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-background/55" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative flex min-h-dvh flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20"
      >
        <div className="mx-auto w-full max-w-[1600px]">
          <motion.p
            className="eyebrow mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: EASE }}
          >
            {PERSON.title}
          </motion.p>

          <Lines
            as="h1"
            lines={["H N Krupaal", "Cinematic", "Video", "Editor"]}
            className="display text-[clamp(3rem,13vw,13rem)]"
            delay={0.25}
          />

          <div className="mt-10 flex flex-col gap-8 border-t border-hairline pt-8 md:flex-row md:items-end md:justify-between">
            <motion.p
              className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1, ease: EASE }}
            >
              {PERSON.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 1, ease: EASE }}
            >
              <Magnetic>
                <button
                  type="button"
                  onClick={onWatchShowreel}
                  data-cursor="Play"
                  className="group inline-flex min-h-12 items-center gap-4 border border-border px-7 py-4 text-xs uppercase tracking-[0.2em] transition-colors duration-500 hover:border-primary hover:bg-primary active:scale-[0.98]"
                >
                  Watch Showreel
                  <ArrowRight
                    className="size-4 transition-transform duration-500 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
              </Magnetic>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className="eyebrow text-[9px]">Scroll</span>
        <motion.span
          className="block h-10 w-px bg-border"
          animate={reduced ? {} : { scaleY: [0.3, 1, 0.3], originY: 0 }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
