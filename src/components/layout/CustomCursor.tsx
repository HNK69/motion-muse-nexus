import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { usePointerFine } from "@/hooks/use-pointer-fine";
import { EASE } from "@/lib/motion";

/**
 * Contextual cursor. Any element can label it with `data-cursor="Play"` —
 * no prop drilling, no context, works for elements added later.
 * Rendered only for fine pointers; the native cursor is never hidden on touch.
 */
export function CustomCursor() {
  const fine = usePointerFine();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.3 });
  const [label, setLabel] = useState<string | null>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!fine) return;
    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      const target = event.target as HTMLElement | null;
      const labelled = target?.closest<HTMLElement>("[data-cursor]");
      const interactive = target?.closest("a,button,[role='button'],input,textarea");
      setLabel(labelled?.dataset["cursor"] ?? null);
      setHovering(Boolean(labelled || interactive));
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [fine, x, y]);

  if (!fine) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[10px] font-medium uppercase tracking-[0.18em] md:flex"
      style={{ x: sx, y: sy }}
    >
      <motion.span
        className="flex items-center justify-center rounded-full"
        animate={{
          width: label ? 84 : hovering ? 44 : 12,
          height: label ? 84 : hovering ? 44 : 12,
          backgroundColor: label ? "var(--color-primary)" : "rgba(255,255,255,0.9)",
        }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        {label ? <span className="text-primary-foreground">{label}</span> : null}
      </motion.span>
    </motion.div>
  );
}
