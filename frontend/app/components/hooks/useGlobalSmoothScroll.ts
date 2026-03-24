import type { RefObject } from "react";

import { ScrollSmoother, ScrollTrigger, useGSAP } from "~/components/lib/gsap";

type UseGlobalSmoothScrollOptions = {
  contentRef: RefObject<HTMLDivElement | null>;
  wrapperRef: RefObject<HTMLDivElement | null>;
};

export default function useGlobalSmoothScroll({
  contentRef,
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

      ScrollTrigger.refresh();

      return () => {
        smoother.kill();
      };
    },
    { scope: wrapperRef },
  );
}
