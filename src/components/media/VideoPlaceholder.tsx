import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

type VideoPlaceholderProps = {
  src: string;
  label: string;
  poster?: string;
  className?: string;
  /** Explicit aspect or fallback ("portrait", "landscape", "square", or Tailwind class) */
  aspect?: "portrait" | "landscape" | "square" | string;
  /** Preview plays muted on hover / focus (desktop) and stays paused otherwise. */
  playOnHover?: boolean;
  autoPlay?: boolean;
  /** Native controls + audio — used by the fullscreen player. */
  controls?: boolean;
  /** Muted playback. Required for autoplaying previews, off for the player. */
  muted?: boolean;
};

/**
 * HTML5 video slot supporting 16:9 widescreen, 9:16 vertical portrait reels,
 * and 1:1 square formats seamlessly with zero letterbox black bars.
 */
export function VideoPlaceholder({
  src,
  label,
  poster,
  className,
  aspect = "landscape",
  playOnHover = false,
  autoPlay = false,
  controls = false,
  muted = true,
}: VideoPlaceholderProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [, setFailed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Derive initial orientation from aspect prop if known
  const initialOrientation =
    aspect === "portrait"
      ? "portrait"
      : aspect === "square"
        ? "square"
        : aspect === "landscape"
          ? "landscape"
          : "unknown";

  const [orientation, setOrientation] = useState<"unknown" | "portrait" | "landscape" | "square">(
    initialOrientation,
  );

  const play = () => {
    if (!playOnHover) return;
    void ref.current
      ?.play()
      .then(() => setIsPlaying(true))
      .catch(() => undefined);
  };

  const pause = () => {
    if (!playOnHover) return;
    ref.current?.pause();
    setIsPlaying(false);
  };

  const aspectClass =
    orientation === "portrait"
      ? "aspect-[9/16]"
      : orientation === "square"
        ? "aspect-square"
        : orientation === "landscape"
          ? "aspect-video"
          : typeof aspect === "string" && aspect.startsWith("aspect-")
            ? aspect
            : "aspect-video";

  return (
    <div
      className={cn(
        "group/vid relative mx-auto w-full overflow-hidden bg-card/60 transition-all duration-500",
        aspectClass,
        className,
      )}
      onMouseEnter={play}
      onMouseLeave={pause}
      onFocus={play}
      onBlur={pause}
    >
      {/* Fallback frame shown until the real video loads */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center bg-card/80 text-muted-foreground"
      >
        <span className="eyebrow px-4 text-center">{label}</span>
      </div>

      <video
        ref={ref}
        src={src}
        poster={poster}
        muted={muted}
        loop={!controls}
        playsInline
        preload="metadata"
        controls={controls}
        autoPlay={autoPlay}
        onLoadedMetadata={(e) => {
          const v = e.currentTarget;
          if (v.videoWidth && v.videoHeight) {
            if (v.videoHeight > v.videoWidth * 1.15) {
              setOrientation("portrait");
            } else if (Math.abs(v.videoWidth - v.videoHeight) < 60) {
              setOrientation("square");
            } else {
              setOrientation("landscape");
            }
          }
        }}
        onError={() => setFailed(true)}
        aria-label={`${label} video`}
        className={cn(
          "relative size-full",
          controls ? "object-contain" : "object-cover",
        )}
      />

      {/* Floating subtle play indicator for preview cards */}
      {!controls && (
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-[1px] transition-opacity duration-300",
            isPlaying ? "opacity-0" : "opacity-100 group-hover/vid:opacity-0",
          )}
        >
          <div className="flex size-12 items-center justify-center rounded-full border border-border/80 bg-background/80 text-foreground shadow-lg backdrop-blur-md transition-transform duration-300 group-hover/vid:scale-110">
            <Play className="ml-0.5 size-4 fill-foreground text-foreground" />
          </div>
        </div>
      )}
    </div>
  );
}
