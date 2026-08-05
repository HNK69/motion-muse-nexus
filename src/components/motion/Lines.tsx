import { motion } from "motion/react";
import { EASE, viewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

type LinesProps = {
  /** Each string becomes one masked line that reveals in sequence. */
  lines: readonly string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  /** Renders as the given heading level for correct document outline. */
  as?: "h1" | "h2" | "h3" | "p";
};

/**
 * Editorial line-by-line mask reveal. The full text stays in the accessibility
 * tree as a single string — only the visual lines are split.
 */
export function Lines({ lines, className, lineClassName, delay = 0, as: Tag = "h2" }: LinesProps) {
  return (
    <Tag className={cn("[text-wrap:balance]", className)}>
      <span className="sr-only">{lines.join(" ")}</span>
      <motion.span
        aria-hidden="true"
        className="block"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: delay } } }}
      >
        {lines.map((line, i) => (
          <span key={`${line}-${i}`} className="block overflow-hidden pb-[0.06em]">
            <motion.span
              className={cn("block", lineClassName)}
              variants={{
                hidden: { y: "110%", opacity: 0 },
                visible: { y: "0%", opacity: 1, transition: { duration: 1, ease: EASE } },
              }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
