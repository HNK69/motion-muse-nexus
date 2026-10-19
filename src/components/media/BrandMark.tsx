import { useState } from "react";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  name: string;
  /** Official monochrome SVG, local image URL (/logos/...) or Simple Icons CDN slug. Falls back to a wordmark. */
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

  const src =
    slug.startsWith("/") || slug.startsWith("http")
      ? slug
      : `https://cdn.simpleicons.org/${slug}/ffffff`;

  return (
    <img
      src={src}
      alt={`${name} logo`}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={cn("h-7 w-auto max-w-[120px] object-contain opacity-75 transition-opacity duration-500 hover:opacity-100", className)}
    />
  );
}
