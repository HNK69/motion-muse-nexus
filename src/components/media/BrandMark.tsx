import { useState } from "react";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  name: string;
  /** Official monochrome SVG (Simple Icons CDN). Falls back to a wordmark. */
  slug?: string;
  className?: string;
};

/**
 * Renders the official logo when one is publicly available, otherwise an
 * elegant monochrome wordmark. Never ships a broken image.
 */
export function BrandMark({ name, slug, className }: BrandMarkProps) {
  const [failed, setFailed] = useState(!slug);

  if (failed || !slug) {
    return (
      <span
        className={cn(
          "font-display text-lg uppercase tracking-[0.14em] text-muted-foreground",
          className,
        )}
      >
        {name}
      </span>
    );
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/ffffff`}
      alt={`${name} logo`}
      loading="lazy"
      decoding="async"
      width={28}
      height={28}
      onError={() => setFailed(true)}
      className={cn("h-7 w-auto opacity-70 transition-opacity duration-500", className)}
    />
  );
}
