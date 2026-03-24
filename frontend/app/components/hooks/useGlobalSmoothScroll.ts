import type { RefObject } from "react";

import { ScrollSmoother, useGSAP } from "~/components/lib/gsap";

type UseGlobalSmoothScrollOptions = {
  contentRef: RefObject<HTMLDivElement | null>;
  pathname: string;
  wrapperRef: RefObject<HTMLDivElement | null>;
};

export default function useGlobalSmoothScroll({
  contentRef,
  pathname,
  wrapperRef,
}: UseGlobalSmoothScrollOptions) {
  useGSAP(
    () => {
      const wrapper = wrapperRef.current;
      const content = contentRef.current;

      if (!wrapper || !content) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const existingSmoother = ScrollSmoother.get();
      existingSmoother?.kill();

      const smoother = ScrollSmoother.create({
        content: "#smooth-content",
        effects: true,
        ignoreMobileResize: true,
        normalizeScroll: true,
        smooth: window.matchMedia("(pointer: coarse)").matches ? 0.7 : 1.2,
        smoothTouch: 0.12,
        wrapper: "#smooth-wrapper",
      });

      return () => {
        smoother.kill();
      };
    },
    { scope: wrapperRef, dependencies: [pathname], revertOnUpdate: true },
  );
}
