import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { EASE } from "@/lib/motion";
import { PERSON } from "@/data/site";

/**
 * Cinematic title card shown on first paint: fade in, hold, fade out.
 * Skipped entirely for reduced-motion users and after the first visit
 * in a session so repeat navigation never feels slow.
 */
export function Preloader({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("intro-seen") === "1";
    if (seen || reduced) {
      setVisible(false);
      onDone();
      return;
    }
    const timer = window.setTimeout(() => {
      sessionStorage.setItem("intro-seen", "1");
      setVisible(false);
      onDone();
    }, 2200);
    return () => window.clearTimeout(timer);
  }, [reduced, onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background px-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: EASE } }}
          role="status"
          aria-label="Loading"
        >
          <motion.span
            className="display text-center text-[clamp(2.5rem,10vw,7rem)]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 1.1, ease: EASE }}
          >
            {PERSON.name}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
