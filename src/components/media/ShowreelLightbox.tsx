import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { VideoPlaceholder } from "./VideoPlaceholder";
import { cn } from "@/lib/utils";

type ShowreelLightboxProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  src: string;
  poster?: string;
  aspect?: "portrait" | "landscape" | "square";
  category?: string;
  year?: string;
  description?: string;
};

/**
 * Immersive fullscreen player that automatically adapts its container dimensions
 * to portrait (9:16), square (1:1), or landscape (16:9) formats, eliminating black bars.
 */
export function ShowreelLightbox({
  open,
  onOpenChange,
  title,
  src,
  poster,
  aspect = "landscape",
  category,
  year,
  description,
}: ShowreelLightboxProps) {
  const containerMaxWidth =
    aspect === "portrait"
      ? "max-w-[420px]"
      : aspect === "square"
        ? "max-w-[560px]"
        : "max-w-[1240px]";

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[80] bg-background/95 backdrop-blur-md data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
        <Dialog.Content className="fixed inset-0 z-[85] flex flex-col items-center justify-center p-4 sm:p-8 focus:outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0">
          <div className={cn("mx-auto flex w-full flex-col", containerMaxWidth)}>
            {/* Header info */}
            <div className="mb-3 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Dialog.Title className="display text-lg sm:text-xl font-medium tracking-tight">
                  {title}
                </Dialog.Title>
                {category && (
                  <span className="eyebrow rounded-full border border-border/80 px-2.5 py-0.5 text-[10px] text-muted-foreground">
                    {category} {year && `· ${year}`}
                  </span>
                )}
              </div>
            </div>

            <Dialog.Description className="sr-only">
              Fullscreen player for {title}. Press Escape to close.
            </Dialog.Description>

            {/* Video container tailored to format */}
            <div className="relative overflow-hidden rounded-lg border border-border/60 bg-black shadow-2xl">
              <VideoPlaceholder
                src={src}
                poster={poster}
                label={title}
                aspect={aspect}
                autoPlay
                controls
                muted={false}
                className="max-h-[78vh] w-full"
              />
            </div>

            {/* Subtitle / Description */}
            {description && (
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {description}
              </p>
            )}
          </div>

          <Dialog.Close
            aria-label="Close player"
            className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full border border-border bg-card/70 text-foreground backdrop-blur-sm transition-colors hover:border-primary hover:bg-card sm:right-8 sm:top-8"
          >
            <X className="size-5" aria-hidden="true" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
