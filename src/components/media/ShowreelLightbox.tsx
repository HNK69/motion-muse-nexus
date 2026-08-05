import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { VideoPlaceholder } from "./VideoPlaceholder";

type ShowreelLightboxProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  /** Placeholder path — replace with the real export. */
  src: string;
};

/**
 * Immersive fullscreen player. Radix Dialog provides the focus trap,
 * ESC handling, scroll lock and return focus for free.
 */
export function ShowreelLightbox({ open, onOpenChange, title, src }: ShowreelLightboxProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[80] bg-background/95 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
        <Dialog.Content className="fixed inset-0 z-[85] flex flex-col justify-center p-4 focus:outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 sm:p-10">
          <Dialog.Title className="eyebrow mb-4">{title}</Dialog.Title>
          <Dialog.Description className="sr-only">
            Fullscreen player. Press Escape to close.
          </Dialog.Description>

          <div className="mx-auto w-full max-w-[1400px]">
            {/* Replace with showreel.mp4 */}
            <VideoPlaceholder src={src} label={`${title} — replace ${src}`} autoPlay />
          </div>

          <Dialog.Close
            aria-label="Close player"
            className="absolute right-4 top-4 inline-flex size-11 items-center justify-center border border-border text-foreground transition-colors hover:border-primary sm:right-8 sm:top-8"
          >
            <X className="size-5" aria-hidden="true" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
