import type { ReactNode } from "react";

import {
  createRevealUpVariants,
  createStaggerVariants,
  motion,
  revealViewport,
  useReducedMotion,
} from "~/components/lib/motion";

export function ProcessJourney() {
  const reducedMotion = useReducedMotion();
  const listVariants = createStaggerVariants(reducedMotion, {
    delayChildren: 0.1,
    staggerChildren: 0.14,
  });
  const cardVariants = createRevealUpVariants(reducedMotion, {
    distance: 52,
    duration: 0.88,
  });
  const badgeVariants = createRevealUpVariants(reducedMotion, {
    distance: 20,
    duration: 0.62,
    scale: 1,
  });

  return (
    <section className="mx-auto max-w-[80vw] py-16 lg:px-8">
      <div className="grid max-w-5xl gap-6 sm:grid-cols-[auto_1fr] md:gap-10">
        <div className="relative hidden h-full w-1 sm:block">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-brand-950 via-brand-700/60 to-transparent" />
          <div className="absolute -left-[5px] top-0 h-3 w-3 rounded-full bg-brand-950 shadow-[0_0_15px_rgba(0,0,0,0.2)]" />
        </div>
        <div>
          <p className="eyebrow-label mb-4 text-[10px] text-brand-700">Ruta clínica</p>
          <h2 className="display-balance font-display text-4xl leading-[0.96] tracking-[-0.05em] text-brand-950 sm:text-5xl lg:text-6xl">
            Del diagnóstico al procedimiento, sin zonas grises
          </h2>
          <p className="mt-6 max-w-3xl pr-4 text-base leading-8 text-brand-950/74 sm:ml-4 sm:text-lg">
            Cada etapa ayuda a entender qué estudios se requieren, cuál es el factor que impide el embarazo y qué sigue después.
          </p>
        </div>
      </div>
      <motion.div
        className="mt-8 grid gap-5"
        initial="hidden"
        variants={listVariants}
        viewport={revealViewport}
        whileInView="visible"
      >
        <JourneyStep badgeVariants={badgeVariants} cardVariants={cardVariants} step="01">
          <h2 className="text-2xl font-semibold text-brand-950">Primera consulta</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-brand-950/72">
            La valoración inicia como una consulta clínica completa con tu especialista tratante.
          </p>
        </JourneyStep>
        <JourneyStep badgeVariants={badgeVariants} cardVariants={cardVariants} step="02">
          <h2 className="text-2xl font-semibold text-brand-950">Diagnóstico definitivo</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-brand-950/72">
            Se integran antecedentes, estudios y hallazgos para entender con precisión el caso.
          </p>
        </JourneyStep>
        <JourneyStep badgeVariants={badgeVariants} cardVariants={cardVariants} step="03">
          <h2 className="text-2xl font-semibold text-brand-950">Definición del factor</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-brand-950/72">
            Identificamos qué elemento está interfiriendo con el embarazo para tomar decisiones con fundamento.
          </p>
        </JourneyStep>
        <JourneyStep badgeVariants={badgeVariants} cardVariants={cardVariants} step="04">
          <h2 className="text-2xl font-semibold text-brand-950">Propuesta de tratamiento</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-brand-950/72">
            El plan se individualiza según edad, diagnóstico, antecedentes y objetivos reproductivos.
          </p>
        </JourneyStep>
        <JourneyStep badgeVariants={badgeVariants} cardVariants={cardVariants} step="05">
          <h2 className="text-2xl font-semibold text-brand-950">Procedimiento en VIXI</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-brand-950/72">
            El tratamiento se realiza dentro de las instalaciones de VIXI en la torre del hospital.
          </p>
        </JourneyStep>
        <JourneyStep badgeVariants={badgeVariants} cardVariants={cardVariants} step="06">
          <h2 className="text-2xl font-semibold text-brand-950">Preparación y seguimiento</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-brand-950/72">
            Costos, tiempos y preparación se explican de forma personalizada según el procedimiento elegido.
          </p>
        </JourneyStep>
      </motion.div>
    </section>
  );
}

function JourneyStep({
  badgeVariants,
  cardVariants,
  children,
  step,
}: {
  badgeVariants: ReturnType<typeof createRevealUpVariants>;
  cardVariants: ReturnType<typeof createRevealUpVariants>;
  children: ReactNode;
  step: string;
}) {
  return (
    <motion.article
      className="grid gap-5 rounded-[30px] border border-brand-950/10 bg-white/90 p-6 shadow-[0_18px_50px_rgba(11,31,59,0.08)] md:grid-cols-[140px_1fr]"
      variants={cardVariants}
    >
      <motion.div className="rounded-[24px] bg-accent-100 px-5 py-5 text-brand-950" variants={badgeVariants}>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">Etapa</p>
        <p className="mt-2 font-display text-5xl leading-none">{step}</p>
      </motion.div>
      <motion.div>{children}</motion.div>
    </motion.article>
  );
}
