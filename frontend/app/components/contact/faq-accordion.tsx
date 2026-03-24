import { useState } from "react";

import { faqItems } from "~/components/data";
import {
  AnimatePresence,
  createRevealUpVariants,
  createStaggerVariants,
  motion,
  useReducedMotion,
} from "~/components/lib/motion";
import { SectionHeading } from "~/components/ui/section-heading";

export function FAQAccordion() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(faqItems[0]?.question ?? null);
  const reducedMotion = useReducedMotion();
  const listVariants = createStaggerVariants(reducedMotion, {
    delayChildren: 0.06,
    staggerChildren: 0.08,
  });
  const itemVariants = createRevealUpVariants(reducedMotion, {
    distance: 34,
    duration: 0.8,
  });

  return (
    <section className="mx-auto max-w-[80vw] py-16 lg:px-8">
      <SectionHeading
        align="center"
        description="Aqui resolvemos dudas frecuentes con informacion util, cercana y medicamente responsable para una mejor decision."
        eyebrow="FAQ"
        title="Informacion util sin ruido ni sobrepromesas"
        variant="minimal"
      />
      <motion.div
        className="mt-8 grid gap-4"
        initial="hidden"
        variants={listVariants}
        viewport={{ margin: "-25% 0px", once: true }}
        whileInView="visible"
      >
        {faqItems.map((item, index) => (
          <FAQAccordionItem
            key={item.question}
            index={index}
            isOpen={openQuestion === item.question}
            item={item}
            onToggle={() => {
              setOpenQuestion((current) => (current === item.question ? null : item.question));
            }}
            reducedMotion={reducedMotion}
            variants={itemVariants}
          />
        ))}
      </motion.div>
    </section>
  );
}

function FAQAccordionItem({
  index,
  isOpen,
  item,
  onToggle,
  reducedMotion,
  variants,
}: {
  index: number;
  isOpen: boolean;
  item: { question: string; answer: string };
  onToggle: () => void;
  reducedMotion: boolean;
  variants: ReturnType<typeof createRevealUpVariants>;
}) {
  const answerId = `faq-answer-${index}`;

  return (
    <motion.article
      className={[
        "group relative overflow-hidden rounded-[30px] border p-6 shadow-[0_18px_44px_rgba(11,31,59,0.08)] transition",
        isOpen
          ? "border-brand-700/18 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(247,240,235,0.98))]"
          : "border-brand-950/10 bg-white/92 hover:border-brand-950/18",
      ].join(" ")}
      variants={variants}
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
        <motion.span
          animate={{
            backgroundColor: isOpen ? "rgb(11 31 59)" : "rgba(255, 255, 255, 0.82)",
            color: isOpen ? "#ffffff" : "rgb(30 58 95)",
            rotate: isOpen ? 45 : 0,
          }}
          className="mt-1 inline-flex h-11 w-11 flex-none items-center justify-center rounded-full border border-brand-950/10 text-brand-700 shadow-[0_10px_24px_rgba(11,31,59,0.08)]"
          transition={{ duration: reducedMotion ? 0 : 0.22, ease: "easeOut" }}
        >
          <span className="text-2xl leading-none">+</span>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            animate="open"
            aria-hidden={!isOpen}
            className="overflow-hidden"
            exit="closed"
            id={answerId}
            initial="closed"
            variants={{
              closed: {
                height: 0,
                opacity: 0,
              },
              open: {
                height: "auto",
                opacity: 1,
              },
            }}
            transition={{ duration: reducedMotion ? 0 : 0.28, ease: "easeOut" }}
          >
            <motion.p
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="mt-5 max-w-3xl border-t border-brand-950/8 pt-5 text-sm leading-7 text-brand-950/72"
              initial={{
                opacity: 0,
                y: -8,
              }}
              transition={{ delay: reducedMotion ? 0 : 0.06, duration: reducedMotion ? 0 : 0.2, ease: "easeOut" }}
            >
              {item.answer}
            </motion.p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}
