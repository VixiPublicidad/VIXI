import type { RefObject } from "react";

import { gsap, useGSAP } from "~/components/lib/gsap";

const PROCESS_JOURNEY_SELECTORS = {
  badge: "[data-process-journey-badge]",
  card: "[data-process-journey-card]",
  content: "[data-process-journey-content]",
} as const;

export function useProcessJourneyAnimation(containerRef: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const container = containerRef.current;

      if (!container) return;

      const query = gsap.utils.selector(container);
      const cards = query<HTMLElement>(PROCESS_JOURNEY_SELECTORS.card);
      const stepBadges = query<HTMLElement>(PROCESS_JOURNEY_SELECTORS.badge);
      const cardContents = query<HTMLElement>(PROCESS_JOURNEY_SELECTORS.content);

      if (!cards.length) return;

      gsap.set(cards, { autoAlpha: 0, y: 52 });
      gsap.set(stepBadges, { autoAlpha: 0, x: -20 });
      gsap.set(cardContents, { autoAlpha: 0, x: 16 });

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: container,
          start: "top 72%",
          once: true,
        },
      });

      cards.forEach((card, index) => {
        const badge = stepBadges[index];
        const content = cardContents[index];
        const cardTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

        cardTimeline
          .to(card, { autoAlpha: 1, y: 0, duration: 0.55 })
          .to(badge, { autoAlpha: 1, x: 0, duration: 0.4 }, "<0.1")
          .to(content, { autoAlpha: 1, x: 0, duration: 0.4 }, "<");

        timeline.add(cardTimeline, index === 0 ? 0 : "-=0.25");
      });
    },
    { scope: containerRef, dependencies: [] },
  );
}
