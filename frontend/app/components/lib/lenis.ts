import type Lenis from "lenis";

let activeLenis: Lenis | null = null;

export function setGlobalLenis(lenis: Lenis | null) {
  activeLenis = lenis;
}

export function getGlobalLenis() {
  return activeLenis;
}

export function scrollToTopImmediate() {
  if (activeLenis) {
    activeLenis.scrollTo(0, {
      duration: 0,
      immediate: true,
      lock: true,
    });
    return;
  }

  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}
