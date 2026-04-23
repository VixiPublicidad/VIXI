import { useState, type ReactNode } from "react";

import {
  AnimatePresence,
  createRevealUpVariants,
  createStaggerVariants,
  motion,
  useReducedMotion,
} from "~/components/lib/motion";

export function FAQAccordion() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);
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
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 flex items-center justify-center gap-4">
          <div className="h-[1px] w-8 bg-brand-950/20" />
          <p className="eyebrow-label text-[9px] text-brand-950/40">FAQ</p>
          <div className="h-[1px] w-8 bg-brand-950/20" />
        </div>
        <h2 className="display-balance font-display text-2xl font-medium leading-[1.02] tracking-[-0.035em] text-brand-950 sm:text-3xl lg:text-4xl">
          Informacion util sin ruido ni sobrepromesas
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-brand-950/56">
          Aqui resolvemos dudas frecuentes con informacion util, cercana y medicamente responsable para una mejor decision.
        </p>
      </div>
      <motion.div
        className="mt-8 grid gap-4"
        initial="hidden"
        variants={listVariants}
        viewport={{ margin: "-25% 0px", once: true }}
        whileInView="visible"
      >
        <FAQAccordionItem
          index={0}
          isOpen={openQuestion === 0}
          onToggle={() => setOpenQuestion((current) => (current === 0 ? null : 0))}
          reducedMotion={reducedMotion}
          variants={itemVariants}
        >
          <span slot="question">Cuanto cuesta un tratamiento de fertilidad?</span>
          <p>
            No existe un costo unico. El presupuesto depende del diagnostico, estudios necesarios, medicamentos y procedimiento indicado. En consulta se explica con claridad que incluye cada etapa.
          </p>
        </FAQAccordionItem>

        <FAQAccordionItem
          index={1}
          isOpen={openQuestion === 1}
          onToggle={() => setOpenQuestion((current) => (current === 1 ? null : 1))}
          reducedMotion={reducedMotion}
          variants={itemVariants}
        >
          <span slot="question">Cuanto dura cada proceso?</span>
          <p>
            El tiempo cambia segun el tipo de tratamiento. Algunas valoraciones se resuelven en pocas semanas y otros protocolos requieren varias fases. El plan se agenda con tiempos realistas desde el inicio.
          </p>
        </FAQAccordionItem>

        <FAQAccordionItem
          index={2}
          isOpen={openQuestion === 2}
          onToggle={() => setOpenQuestion((current) => (current === 2 ? null : 2))}
          reducedMotion={reducedMotion}
          variants={itemVariants}
        >
          <span slot="question">Que probabilidad de exito tiene mi caso?</span>
          <p>
            La probabilidad depende de factores como edad, reserva ovarica, diagnostico y antecedentes. En VIXI se revisa cada caso de manera individual para hablar con expectativas medicas responsables.
          </p>
        </FAQAccordionItem>

        <FAQAccordionItem
          index={3}
          isOpen={openQuestion === 3}
          onToggle={() => setOpenQuestion((current) => (current === 3 ? null : 3))}
          reducedMotion={reducedMotion}
          variants={itemVariants}
        >
          <span slot="question">Atienden pacientes de otros estados o paises?</span>
          <p>
            Si. VIXI contempla atencion para pacientes foraneos con orientacion previa, coordinacion de visitas y seguimiento remoto cuando es pertinente.
          </p>
        </FAQAccordionItem>

        <FAQAccordionItem
          index={4}
          isOpen={openQuestion === 4}
          onToggle={() => setOpenQuestion((current) => (current === 4 ? null : 4))}
          reducedMotion={reducedMotion}
          variants={itemVariants}
        >
          <span slot="question">Puedo iniciar con consulta en linea?</span>
          <p>
            Si. La consulta en linea puede servir para una valoracion inicial, revision de estudios previos y planeacion del siguiente paso clinico.
          </p>
        </FAQAccordionItem>

        <FAQAccordionItem
          index={5}
          isOpen={openQuestion === 5}
          onToggle={() => setOpenQuestion((current) => (current === 5 ? null : 5))}
          reducedMotion={reducedMotion}
          variants={itemVariants}
        >
          <span slot="question">Atienden distintos modelos de familia?</span>
          <p>
            Si. VIXI acompana de forma inclusiva a parejas y pacientes que buscan maternidad o paternidad desde contextos y necesidades diferentes.
          </p>
        </FAQAccordionItem>
      </motion.div>
    </section>
  );
}

function FAQAccordionItem({
  children,
  index,
  isOpen,
  onToggle,
  reducedMotion,
  variants,
}: {
  children: ReactNode;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  reducedMotion: boolean;
  variants: ReturnType<typeof createRevealUpVariants>;
}) {
  const answerId = `faq-answer-${index}`;
  const childArray = Array.isArray(children) ? children : [children];
  const question = childArray[0];
  const answer = childArray.slice(1);

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
            {question}
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
            <motion.div
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
              {answer}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}
