import { useRef } from "react";

import { treatmentJourney } from "~/components/data";
import { gsap, ScrollTrigger, useGSAP } from "~/components/lib/gsap";
import { SectionHeading } from "~/components/ui/section-heading";

export function ProcessJourney() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(containerRef);
      const cards = q<HTMLElement>("[data-journey-card]");
      const stepBadges = q<HTMLElement>("[data-step-badge]");
      const cardContents = q<HTMLElement>("[data-card-content]");

      gsap.set(cards, { autoAlpha: 0, y: 52 });
      gsap.set(stepBadges, { autoAlpha: 0, x: -20 });
      gsap.set(cardContents, { autoAlpha: 0, x: 16 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 72%",
          once: true,
        },
      });

      cards.forEach((card, i) => {
        const badge = stepBadges[i];
        const content = cardContents[i];
        const cardTl = gsap.timeline({ defaults: { ease: "power3.out" } });

        cardTl
          .to(card, { autoAlpha: 1, y: 0, duration: 0.55 })
          .to(badge, { autoAlpha: 1, x: 0, duration: 0.4 }, "<0.1")
          .to(content, { autoAlpha: 1, x: 0, duration: 0.4 }, "<");

        tl.add(cardTl, i === 0 ? 0 : "-=0.25");
      });
    },
    { scope: containerRef, dependencies: [] }
  );

  return (
    <section ref={containerRef} className="mx-auto max-w-[80vw] py-16 lg:px-8">
      <SectionHeading
        description="Cada etapa ayuda a entender qué estudios se requieren, cuál es el factor que impide el embarazo y qué sigue después."
        eyebrow="Ruta clínica"
        title="Del diagnóstico al procedimiento, sin zonas grises"
        variant="editorial"
      />
      <div className="mt-8 grid gap-5">
        {treatmentJourney.map((item) => (
          <article
            key={item.step}
            data-journey-card
            className="grid gap-5 rounded-[30px] border border-brand-950/10 bg-white/90 p-6 shadow-[0_18px_50px_rgba(11,31,59,0.08)] md:grid-cols-[140px_1fr]"
          >
            <div
              data-step-badge
              className="rounded-[24px] bg-accent-100 px-5 py-5 text-brand-950"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">Etapa</p>
              <p className="mt-2 font-display text-5xl leading-none">{item.step}</p>
            </div>
            <div data-card-content>
              <h2 className="text-2xl font-semibold text-brand-950">{item.title}</h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-brand-950/72">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
