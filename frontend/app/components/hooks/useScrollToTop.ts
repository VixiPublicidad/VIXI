import { useEffect } from "react";
import { useLocation } from "react-router";

import { scrollToTopImmediate } from "~/components/lib/lenis";

export default function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTopImmediate();
  }, [pathname]);
}
