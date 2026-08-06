import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

type VideoPlaceholderProps = {
  /** Replace this file in /public with the real export of the same name. */
  src: string;
  label: string;
  className?: string;
  /** Fallback aspect used until the real metadata reports the orientation. */
  aspect?: string;
  /** Preview plays muted on hover / focus (desktop) and stays paused otherwise. */
  playOnHover?: boolean;
  autoPlay?: boolean;
  /** Native controls + audio — used by the fullscreen player. */
  controls?: boolean;
  /** Muted playback. Required for autoplaying previews, off for the player. */
  muted?: boolean;
};

/**
 * HTML5 video slot that measures the real file's dimensions and switches
 * between a 16:9 and a 9:16 frame automatically — no per-video config needed.
 */
export function VideoPlaceholder({
  src,
  label,
  className,
  aspect = "aspect-video",
  playOnHover = false,
  autoPlay = false,
  controls = false,
  muted = true,
}: VideoPlaceholderProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [, setFailed] = useState(false);
  const [orientation, setOrientation] = useState<"unknown" | "portrait" | "landscape">("unknown");

  const play = () => {
    if (!playOnHover) return;
    void ref.current?.play().catch(() => undefined);
  };
  const pause = () => {
    if (!playOnHover) return;
    ref.current?.pause();
  };

  const aspectClass =
    orientation === "portrait"
      ? "aspect-[9/16]"
      : orientation === "landscape"
        ? "aspect-video"
        : aspect;

  return (
    <div
      className={cn(
        "relative mx-auto w-full overflow-hidden bg-card",
        aspectClass,
        orientation === "portrait" && "max-w-[min(100%,42vh)]",
        className,
      )}
      onMouseEnter={play}
      onMouseLeave={pause}
      onFocus={play}
      onBlur={pause}
    >
      {/* Fallback frame shown until the real file is added */}
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center bg-card">
        <span className="eyebrow px-4 text-center">{label}</span>
      </div>

      {/* Replace with the real file of the same name in /public */}
      <video
        ref={ref}
        src={src}
        muted={muted}
        loop={!controls}
        playsInline
        preload="metadata"
        controls={controls}
        autoPlay={autoPlay}
        onLoadedMetadata={(e) => {
          const v = e.currentTarget;
          if (v.videoWidth && v.videoHeight) {
            setOrientation(v.videoHeight > v.videoWidth ? "portrait" : "landscape");
          }
        }}
        onError={() => setFailed(true)}
        aria-label={`${label} video`}
        className={cn("relative size-full", controls ? "object-contain" : "object-cover")}
      />
    </div>
  );
}
