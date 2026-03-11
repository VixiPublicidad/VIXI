import { useEffect } from "react";
import { useLocation } from "react-router";

import { getLenisInstance } from "~/components/lib/lenis";

export default function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = getLenisInstance();

    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(0, { immediate: true });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);
}
