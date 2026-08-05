import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

type VideoPlaceholderProps = {
  /** Replace this file in /public with the real export of the same name. */
  src: string;
  label: string;
  className?: string;
  /** Tailwind aspect utility — videos adapt without layout shift. */
  aspect?: string;
  /** Preview plays muted on hover / focus (desktop) and stays paused otherwise. */
  playOnHover?: boolean;
  autoPlay?: boolean;
};

/**
 * HTML5 video slot with a graceful editorial fallback while the real footage
 * is missing. Never embeds third-party players.
 */
export function VideoPlaceholder({
  src,
  label,
  className,
  aspect = "aspect-video",
  playOnHover = false,
  autoPlay = false,
}: VideoPlaceholderProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  const play = () => {
    if (!playOnHover) return;
    void ref.current?.play().catch(() => undefined);
  };
  const pause = () => {
    if (!playOnHover) return;
    ref.current?.pause();
  };

  return (
    <div
      className={cn("relative overflow-hidden bg-card", aspect, className)}
      onMouseEnter={play}
      onMouseLeave={pause}
      onFocus={play}
      onBlur={pause}
    >
      {/* Fallback frame shown until the real file is added */}
      <div
        aria-hidden={!failed}
        className="absolute inset-0 flex items-center justify-center bg-card"
      >
        <span className="eyebrow px-4 text-center">{label}</span>
      </div>

      {/* Replace with the real file of the same name in /public */}
      <video
        ref={ref}
        src={src}
        muted
        loop
        playsInline
        preload="none"
        autoPlay={autoPlay}
        onError={() => setFailed(true)}
        aria-label={`${label} video`}
        className="relative size-full object-cover"
      />
    </div>
  );
}
