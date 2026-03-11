import type { ReactNode } from "react";
import Lenis from "lenis";
import { useEffect } from "react";

import { setLenisInstance } from "~/components/lib/lenis";

type LenisProviderProps = {
  children: ReactNode;
};

export function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (motionQuery.matches) {
      return;
    }

    const lenis = new Lenis({
      anchors: true,
      duration: 1.15,
      wheelMultiplier: 0.95,
    });

    setLenisInstance(lenis);

    let frameId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(raf);
    };

    frameId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(frameId);
      lenis.destroy();
      setLenisInstance(null);
    };
  }, []);

  return <>{children}</>;
}
