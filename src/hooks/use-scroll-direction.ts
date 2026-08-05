import { useEffect, useState } from "react";

type ScrollState = { direction: "up" | "down"; atTop: boolean };

/**
 * Tracks scroll direction with a small threshold so the floating nav does not
 * flicker on sub-pixel or momentum scrolling.
 */
export function useScrollDirection(threshold = 12): ScrollState {
  const [state, setState] = useState<ScrollState>({ direction: "up", atTop: true });

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const atTop = y < 40;
      if (Math.abs(y - last) >= threshold) {
        setState({ direction: y > last ? "down" : "up", atTop });
        last = y;
      } else {
        setState((prev) => (prev.atTop === atTop ? prev : { ...prev, atTop }));
      }
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return state;
}
