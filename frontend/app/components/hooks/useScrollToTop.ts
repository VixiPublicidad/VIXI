import { useEffect } from "react";
import { useLocation } from "react-router";

import { ScrollSmoother } from "~/components/lib/gsap";

export default function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const smoother = ScrollSmoother.get();

    if (smoother) {
      smoother.scrollTo(0, false);
      ScrollSmoother.refresh();
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);
}
