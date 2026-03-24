import { useRef, useState } from "react";

import { faqItems } from "~/components/data";
import { gsap, useGSAP } from "~/components/lib/gsap";
import { SectionHeading } from "~/components/ui/section-heading";

export function FAQAccordion() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(faqItems[0]?.question ?? null);

  return (
    <section className="mx-auto max-w-[80vw] py-16 lg:px-8">
      <SectionHeading
        align="center"
        description="Aqui resolvemos dudas frecuentes con informacion util, cercana y medicamente responsable para una mejor decision."
        eyebrow="FAQ"
        title="Informacion util sin ruido ni sobrepromesas"
        variant="minimal"
      />
      <div className="mt-8 grid gap-4">
        {faqItems.map((item, index) => (
          <FAQAccordionItem
            key={item.question}
            index={index}
            isOpen={openQuestion === item.question}
            item={item}
            onToggle={() => {
              setOpenQuestion((current) => (current === item.question ? null : item.question));
            }}
          />
        ))}
      </div>
    </section>
  );
}

function FAQAccordionItem({
  index,
  isOpen,
  item,
  onToggle,
}: {
  index: number;
  isOpen: boolean;
  item: { question: string; answer: string };
  onToggle: () => void;
}) {
  const itemRef = useRef<HTMLElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);
  const answerCopyRef = useRef<HTMLParagraphElement>(null);
  const toggleIconRef = useRef<HTMLSpanElement>(null);
  const hasMountedRef = useRef(false);
  const answerId = `faq-answer-${index}`;

  useGSAP(
    () => {
      const answer = answerRef.current;
      const answerCopy = answerCopyRef.current;
      const toggleIcon = toggleIconRef.current;

      if (!answer || !answerCopy || !toggleIcon) return;

      const setStaticState = () => {
        gsap.set(answer, {
          autoAlpha: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        });
        gsap.set(answerCopy, {
          autoAlpha: isOpen ? 1 : 0,
          y: isOpen ? 0 : -8,
        });
        gsap.set(toggleIcon, {
          backgroundColor: isOpen ? "rgb(11 31 59)" : "rgba(255, 255, 255, 0.82)",
          color: isOpen ? "#ffffff" : "rgb(30 58 95)",
          rotate: isOpen ? 45 : 0,
        });
      };

      if (!hasMountedRef.current) {
        setStaticState();
        hasMountedRef.current = true;
        return;
      }

      gsap.killTweensOf([answer, answerCopy, toggleIcon]);

      if (isOpen) {
        gsap.set(answer, { display: "block" });

        gsap
          .timeline({ defaults: { ease: "power2.out" } })
          .to(
            toggleIcon,
            {
              backgroundColor: "rgb(11 31 59)",
              color: "#ffffff",
              duration: 0.22,
              rotate: 45,
            },
            0,
          )
          .to(
            answer,
            {
              autoAlpha: 1,
              duration: 0.28,
              height: "auto",
            },
            0,
          )
          .to(
            answerCopy,
            {
              autoAlpha: 1,
              duration: 0.2,
              y: 0,
            },
            0.08,
          );

        return;
      }

      gsap.set(answer, { height: answer.offsetHeight });

      gsap
        .timeline({ defaults: { ease: "power2.out" } })
        .to(
          answerCopy,
          {
            autoAlpha: 0,
            duration: 0.16,
            y: -8,
          },
          0,
        )
        .to(
          answer,
          {
            autoAlpha: 0,
            duration: 0.24,
            height: 0,
          },
          0,
        )
        .to(
          toggleIcon,
          {
            backgroundColor: "rgba(255, 255, 255, 0.82)",
            color: "rgb(30 58 95)",
            duration: 0.22,
            rotate: 0,
          },
          0,
        );
    },
    { scope: itemRef, dependencies: [isOpen], revertOnUpdate: false },
  );

  return (
    <article
      ref={itemRef}
      className={[
        "group relative overflow-hidden rounded-[30px] border p-6 shadow-[0_18px_44px_rgba(11,31,59,0.08)] transition",
        isOpen
          ? "border-brand-700/18 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(247,240,235,0.98))]"
          : "border-brand-950/10 bg-white/92 hover:border-brand-950/18",
      ].join(" ")}
      data-reveal-item
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-700/30 to-transparent" />
      <button
        aria-controls={answerId}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between gap-4 text-left"
        onClick={onToggle}
        type="button"
      >
        <span className="space-y-3">
          <span className="inline-flex items-center gap-3">
            <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-brand-950/10 bg-white/80 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 shadow-[0_10px_22px_rgba(11,31,59,0.06)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-700/70">
              Pregunta frecuente
            </span>
          </span>
          <span className="block pr-4 text-lg font-semibold leading-7 text-brand-950 sm:text-[1.35rem]">
            {item.question}
          </span>
        </span>
        <span
          ref={toggleIconRef}
          className="mt-1 inline-flex h-11 w-11 flex-none items-center justify-center rounded-full border border-brand-950/10 text-brand-700 shadow-[0_10px_24px_rgba(11,31,59,0.08)]"
        >
          <span className="text-2xl leading-none">+</span>
        </span>
      </button>

      <div
        ref={answerRef}
        aria-hidden={!isOpen}
        className="overflow-hidden"
        id={answerId}
      >
        <p
          ref={answerCopyRef}
          className="mt-5 max-w-3xl border-t border-brand-950/8 pt-5 text-sm leading-7 text-brand-950/72"
        >
          {item.answer}
        </p>
      </div>
    </article>
  );
}
