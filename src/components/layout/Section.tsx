import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Adds the hairline film-frame divider above the section. */
  divider?: boolean;
};

/** Consistent vertical rhythm and max width for every section. */
export function Section({ id, children, className, divider = true }: SectionProps) {
  return (
    <section
      {...(id ? { id } : {})}
      className={cn(
        "relative scroll-mt-24 px-5 py-24 sm:px-8 md:py-32 lg:py-40",
        divider && "border-t border-hairline",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[1600px]">{children}</div>
    </section>
  );
}

export function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3">
      <span className="text-primary">{index}</span>
      <span>{children}</span>
    </p>
  );
}
