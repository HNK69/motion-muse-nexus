import type { Transition, Variants } from "motion/react";

/** Shared cinematic easing — slow out, long settle. */
export const EASE = [0.16, 1, 0.3, 1] as const;

export const transition: Transition = { duration: 0.9, ease: EASE };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition },
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

/** Consistent viewport config so every section reveals at the same point. */
export const viewport = { once: true, margin: "-12% 0px -12% 0px" } as const;
