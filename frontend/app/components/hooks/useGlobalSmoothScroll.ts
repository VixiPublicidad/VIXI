import type { RefObject } from "react";

import { gsap, ScrollSmoother, useGSAP } from "~/components/lib/gsap";

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

      const existingSmoother = ScrollSmoother.get();
      existingSmoother?.kill();

      gsap.set([wrapper, content], { clearProps: "all" });

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
      const isSmallViewport = window.matchMedia("(max-width: 1023px)").matches;

      // Mobile browsers are the least reliable environment for ScrollSmoother.
      // Fall back to native scrolling there so ScrollTrigger reveals can still fire.
      if (isTouchDevice || isSmallViewport) return;

      const smoother = ScrollSmoother.create({
        content: "#smooth-content",
        effects: true,
        ignoreMobileResize: true,
        normalizeScroll: true,
        smooth: 1.2,
        smoothTouch: false,
        wrapper: "#smooth-wrapper",
      });

      return () => {
        smoother.kill();
      };
    },
    { scope: wrapperRef, dependencies: [pathname], revertOnUpdate: true },
  );
}
