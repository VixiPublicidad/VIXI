import type { ReactNode } from "react";
import { useRef } from "react";
import { useLocation } from "react-router";

import useGlobalSmoothScroll from "~/components/hooks/useGlobalSmoothScroll";
import useScrollToTop from "~/components/hooks/useScrollToTop";
import { gsap, ScrollTrigger, SplitText, useGSAP } from "~/components/lib/gsap";
import { SiteFooter } from "~/components/layout/site-footer";
import { SiteHeader } from "~/components/layout/site-header";

type MarketingLayoutProps = {
  children: ReactNode;
};

type SplitMode = "chars" | "lines" | "words";

function isLiveElement(value: Element | null | undefined): value is HTMLElement {
  return value instanceof HTMLElement && value.isConnected;
}

function createSplitAnimation(element: HTMLElement) {
  const splitMode = (element.dataset.split as SplitMode | undefined) ?? "lines";
  const split = SplitText.create(element, {
    charsClass: "split-char++",
    linesClass: "split-line++",
    mask: splitMode === "lines" ? "lines" : undefined,
    type: splitMode,
    wordsClass: "split-word++",
  });

  const targets = (
    splitMode === "chars"
      ? split.chars
      : splitMode === "words"
        ? split.words
        : split.lines
  ) as HTMLElement[];

  if (splitMode === "chars") {
    return {
      duration: 0.72,
      rotateX: 8,
      stagger: { each: 0.018, from: "start" as const },
      targets,
      yPercent: 128,
    };
  }

  if (splitMode === "words") {
    return {
      duration: 0.78,
      stagger: { each: 0.05, from: "start" as const },
      targets,
      yPercent: 110,
    };
  }

  return {
    duration: 0.9,
    stagger: { each: 0.09, from: "start" as const },
    targets,
    yPercent: 112,
  };
}

function groupByParent<T extends HTMLElement>(elements: T[]) {
  const groups = new Map<HTMLElement, T[]>();

  elements.forEach((element) => {
    const parent = element.parentElement;

    if (!parent) return;

    const group = groups.get(parent);

    if (group) {
      group.push(element);
      return;
    }

    groups.set(parent, [element]);
  });

  return Array.from(groups.values());
}

export function MarketingLayout({ children }: MarketingLayoutProps) {
  const shellRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();

  useGlobalSmoothScroll({ contentRef, pathname, wrapperRef });
  useScrollToTop();

  useGSAP(
    () => {
      const shell = shellRef.current;

      if (!shell) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { reduceMotion } = context.conditions as {
            reduceMotion: boolean;
          };

          const ambientTargets = reduceMotion
            ? []
            : gsap.utils.toArray<HTMLElement>(".page-glow, [data-ambient-orb]", shell);
          const ambientTweens = ambientTargets.map((target) =>
            gsap.to(target, {
              duration: gsap.utils.random(8, 15),
              ease: "sine.inOut",
              repeat: -1,
              rotation: gsap.utils.random(-3, 3),
              xPercent: gsap.utils.random(-10, 10),
              yPercent: gsap.utils.random(-8, 8),
              yoyo: true,
            }),
          );

          return () => {
            ambientTweens.forEach((tween) => tween.kill());
          };
        },
      );

      return () => mm.revert();
    },
    { scope: shellRef },
  );

  useGSAP(
    () => {
      const main = mainRef.current;

      if (!main) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: "(min-width: 1024px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { desktop, reduceMotion } = context.conditions as {
            desktop: boolean;
            reduceMotion: boolean;
          };
          const query = gsap.utils.selector(main);

          if (reduceMotion) {
            gsap.set(
              query("[data-reveal-item], [data-card], [data-text-block], [data-hero-root], [data-card-float], [data-parallax], [data-text-fade]"),
              { clearProps: "all" },
            );
            return;
          }

          const hero = query("[data-hero-root]")[0] as HTMLElement | undefined;

          if (hero) {
            const heroTimeline = gsap.timeline({
              defaults: { ease: "power3.out" },
            });
            const heroMedia = hero.querySelector<HTMLElement>("[data-hero-media]");
            const heroSplits = gsap.utils
              .toArray<HTMLElement>("[data-split]", hero)
              .filter(isLiveElement);
            const heroFadeTargets = gsap.utils.toArray<HTMLElement>(
              "[data-hero-eyebrow], [data-hero-actions], [data-hero-stats], [data-hero-aside], [data-text-fade]",
              hero,
            ).filter(isLiveElement);

            if (heroMedia) {
              heroTimeline.fromTo(
                heroMedia,
                { autoAlpha: 0.64, scale: desktop ? 1.16 : 1.1, yPercent: 4 },
                { autoAlpha: 1, duration: 1.6, scale: 1, yPercent: 0 },
                0,
              );

              gsap.to(heroMedia, {
                ease: "none",
                scale: desktop ? 1.08 : 1.04,
                yPercent: desktop ? 8 : 5,
                scrollTrigger: {
                  end: "bottom top",
                  scrub: 1.2,
                  start: "top top",
                  trigger: hero,
                },
              });
            }

            heroSplits.forEach((element, index) => {
              const splitConfig = createSplitAnimation(element);

              heroTimeline.from(
                splitConfig.targets,
                {
                  autoAlpha: 0,
                  duration: splitConfig.duration,
                  ease: "power3.out",
                  rotateX: splitConfig.rotateX ?? 0,
                  stagger: splitConfig.stagger,
                  transformOrigin: "50% 100% -12",
                  yPercent: splitConfig.yPercent,
                },
                index === 0 ? 0.2 : "<0.08",
              );
            });

            if (heroFadeTargets.length) {
              heroTimeline.from(
                heroFadeTargets,
                {
                  autoAlpha: 0,
                  duration: 0.72,
                  stagger: {
                    each: 0.1,
                    from: "start",
                  },
                  y: 24,
                },
                heroSplits.length ? "-=0.25" : 0.18,
              );
            }
          }

          const textBlocks = gsap
            .utils
            .toArray<HTMLElement>("[data-text-block]", main)
            .filter((block) => !block.closest("[data-hero-root]"));

          textBlocks.forEach((block, index) => {
            const blockTimeline = gsap.timeline({
              defaults: { ease: "power3.out" },
              scrollTrigger: {
                once: true,
                refreshPriority: index + 10,
                start: "top 84%",
                trigger: block,
              },
            });
            const splits = gsap.utils.toArray<HTMLElement>("[data-split]", block).filter(isLiveElement);
            const fades = gsap.utils.toArray<HTMLElement>("[data-text-fade]", block).filter(isLiveElement);

            splits.forEach((element, splitIndex) => {
              const splitConfig = createSplitAnimation(element);

              if (!splitConfig.targets.length) return;

              gsap.set(splitConfig.targets, {
                autoAlpha: 0,
                rotateX: splitConfig.rotateX ?? 0,
                transformOrigin: "50% 100% -10",
                yPercent: splitConfig.yPercent,
              });

              blockTimeline.to(
                splitConfig.targets,
                {
                  autoAlpha: 1,
                  clearProps: "opacity,transform,visibility",
                  duration: splitConfig.duration,
                  ease: "power3.out",
                  overwrite: "auto",
                  rotateX: 0,
                  stagger: splitConfig.stagger,
                  yPercent: 0,
                },
                splitIndex === 0 ? 0.02 : "<0.08",
              );
            });

            if (fades.length) {
              gsap.set(fades, { autoAlpha: 0, y: 24 });

              blockTimeline.to(
                fades,
                {
                  autoAlpha: 1,
                  clearProps: "opacity,transform,visibility",
                  duration: 0.72,
                  overwrite: "auto",
                  stagger: {
                    each: 0.1,
                    from: "start",
                  },
                  y: 0,
                },
                splits.length ? "<0.12" : 0.04,
              );
            }
          });

          const cards = gsap.utils.toArray<HTMLElement>("[data-card]", main).filter(isLiveElement);
          const activatedCards = new WeakSet<HTMLElement>();

          const startCardAmbient = (card: HTMLElement) => {
            if (activatedCards.has(card)) return;

            activatedCards.add(card);

            const floatTargets = gsap.utils.toArray<HTMLElement>("[data-card-float]", card);

            floatTargets.forEach((target) => {
              gsap.to(target, {
                duration: gsap.utils.random(3.8, 6.2),
                ease: "sine.inOut",
                repeat: -1,
                rotation: gsap.utils.random(-1.6, 1.6),
                x: gsap.utils.random(-4, 4),
                y: gsap.utils.random(-10, -4),
                yoyo: true,
              });
            });
          };

          if (cards.length) {
            const cardGroups = groupByParent(cards);

            cardGroups.forEach((group, index) => {
              gsap.set(group, { autoAlpha: 0, y: 44 });

              gsap.timeline({
                defaults: { ease: "power3.out" },
                scrollTrigger: {
                  once: true,
                  refreshPriority: index + 20,
                  start: "top 88%",
                  trigger: group[0].parentElement ?? group[0],
                },
                onStart: () => {
                  group.forEach((card) => startCardAmbient(card));
                },
              }).to(group, {
                autoAlpha: 1,
                clearProps: "opacity,transform,visibility",
                duration: 0.92,
                overwrite: "auto",
                stagger: {
                  each: desktop ? 0.12 : 0.1,
                  from: "start",
                },
                y: 0,
              });
            });
          }

          const parallaxTargets = gsap.utils.toArray<HTMLElement>("[data-parallax]", main).filter(isLiveElement);

          parallaxTargets.forEach((target, index) => {
            const rawAmount = Number(target.dataset.parallax ?? "0.18");
            const ratio = cards.length > 1 ? index / (parallaxTargets.length - 1 || 1) : 0.5;
            const distance = gsap.utils.interpolate(desktop ? 10 : 6, desktop ? 20 : 12, ratio) * rawAmount;

            gsap.fromTo(
              target,
              { yPercent: -distance * 0.45 },
              {
                ease: "none",
                immediateRender: false,
                scrollTrigger: {
                  end: "bottom top",
                  scrub: desktop ? 1.3 : 0.8,
                  start: "top bottom",
                  trigger: target.closest("section") ?? target,
                },
                yPercent: distance,
              },
            );
          });

          const generalRevealItems = gsap
            .utils
            .toArray<HTMLElement>("[data-reveal-item]", main)
            .filter(isLiveElement)
            .filter((element) => !element.hasAttribute("data-card") && !element.hasAttribute("data-text-block"));

          if (generalRevealItems.length) {
            generalRevealItems.forEach((element, index) => {
              if (!isLiveElement(element)) return;

              gsap.set(element, { autoAlpha: 0, y: 32 });

              gsap.to(element, {
                autoAlpha: 1,
                clearProps: "opacity,transform,visibility",
                duration: 0.82,
                ease: "power3.out",
                overwrite: "auto",
                scrollTrigger: {
                  once: true,
                  refreshPriority: index + 80,
                  start: "top 88%",
                  trigger: element,
                },
                y: 0,
              });
            });
          }

          const sectionFallbacks = gsap
            .utils
            .toArray<HTMLElement>("section", main)
            .filter(isLiveElement)
            .filter(
              (section) =>
                !section.hasAttribute("data-hero-root") &&
                !section.querySelector("[data-reveal-item], [data-card], [data-text-block]"),
            );

          sectionFallbacks.forEach((section, index) => {
            if (!isLiveElement(section)) return;

            gsap.set(section, { autoAlpha: 0, y: 32 });

            gsap.to(
              section,
              {
                autoAlpha: 1,
                clearProps: "opacity,transform,visibility",
                duration: 0.84,
                ease: "power3.out",
                overwrite: "auto",
                scrollTrigger: {
                  once: true,
                  refreshPriority: index + 40,
                  start: "top 84%",
                  trigger: section,
                },
                y: 0,
              },
            );
          });

          let cancelled = false;
          const refresh = () => {
            if (cancelled || !main.isConnected) return;
            ScrollTrigger.refresh();
          };

          const rafId = requestAnimationFrame(refresh);

          if (document.fonts) {
            void document.fonts.ready.then(refresh);
          }

          return () => {
            cancelled = true;
            cancelAnimationFrame(rafId);
          };
        },
      );

      return () => mm.revert();
    },
    { scope: mainRef, dependencies: [pathname], revertOnUpdate: true },
  );

  return (
    <>
      <a className="sr-only focus:not-sr-only" href="#main-content">
        Saltar al contenido
      </a>
      <div ref={shellRef} className="relative min-h-screen overflow-x-hidden">
        <div className="page-glow page-glow-left" />
        <div className="page-glow page-glow-right" />
        <SiteHeader />
        <div id="smooth-wrapper" ref={wrapperRef}>
          <div id="smooth-content" ref={contentRef}>
            <main ref={mainRef} className="pb-8" id="main-content">
              {children}
            </main>
            <SiteFooter />
          </div>
        </div>
      </div>
    </>
  );
}
