import { useEffect } from "react";

import Lenis from "lenis";

import { setGlobalLenis } from "~/components/lib/lenis";
import { useReducedMotion } from "~/components/lib/motion";

export default function useGlobalLenis() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      document.documentElement.classList.remove("lenis");
      setGlobalLenis(null);
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      lerp: 0.1,
      wheelMultiplier: 0.95,
    });
    let frame = 0;

    setGlobalLenis(lenis);

    const onFrame = (time: number) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(onFrame);
    };

    frame = window.requestAnimationFrame(onFrame);

    return () => {
      window.cancelAnimationFrame(frame);
      lenis.destroy();
      setGlobalLenis(null);
      document.documentElement.classList.remove("lenis", "lenis-smooth", "lenis-stopped", "lenis-scrolling");
    };
  }, [reducedMotion]);
}
