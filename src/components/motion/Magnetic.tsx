import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { usePointerFine } from "@/hooks/use-pointer-fine";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  /** Max pixel offset toward the pointer. */
  strength?: number;
};

/**
 * Wraps any interactive element and pulls it gently toward the cursor.
 * Disabled for touch devices and reduced-motion users — the child keeps all
 * of its native semantics and keyboard behaviour either way.
 */
export function Magnetic({ children, className, strength = 14 }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const fine = usePointerFine();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const active = fine && !reduced;

  return (
    <motion.span
      {...(active ? { style: { x: springX, y: springY } } : {})}
      ref={ref}
      className={cn("inline-block", className)}
      
      onPointerMove={(event) => {
        if (!active || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set(((event.clientX - (rect.left + rect.width / 2)) / rect.width) * strength * 2);
        y.set(((event.clientY - (rect.top + rect.height / 2)) / rect.height) * strength * 2);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}
