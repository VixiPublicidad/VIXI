import { useRef } from "react";
import type { MotionValue } from "motion/react";

import {
  createRevealUpVariants,
  motion,
  revealViewport,
  useReducedMotion,
  useScroll,
  useTransform,
} from "~/components/lib/motion";

type Phase = "valoracion" | "tratamiento";

type Step = {
  body: string;
  phase: Phase;
  title: string;
};

const STEPS: Step[] = [
  {
    body: "La valoración inicia con una revisión clínica completa junto a tu especialista tratante.",
    phase: "valoracion",
    title: "Punto de partida",
  },
  {
    body: "Se integran antecedentes, estudios y hallazgos para entender con precisión el caso.",
    phase: "valoracion",
    title: "Diagnóstico definitivo",
  },
  {
    body: "Identificamos qué elemento está interfiriendo con el embarazo para tomar decisiones con fundamento.",
    phase: "valoracion",
    title: "Definición del factor",
  },
  {
    body: "El plan se individualiza según edad, diagnóstico, antecedentes y objetivos reproductivos.",
    phase: "valoracion",
    title: "Propuesta de tratamiento",
  },
  {
    body: "El tratamiento se realiza dentro de las instalaciones de VIXI en la torre del hospital.",
    phase: "tratamiento",
    title: "Procedimiento en VIXI",
  },
  {
    body: "Costos, tiempos y preparación se explican de forma personalizada según el procedimiento elegido.",
    phase: "tratamiento",
    title: "Preparación y seguimiento",
  },
];

// Serpentine path (viewBox 100 x 600, preserveAspectRatio="none").
// All nodes sit on the central axis (x=50); curves bulge alternately to x=20 / x=80.
const VALORACION_PATH =
  "M 50 50 C 20 80 20 120 50 150 C 80 180 80 220 50 250 C 20 280 20 320 50 350";
const TRATAMIENTO_PATH =
  "M 50 350 C 80 380 80 420 50 450 C 20 480 20 520 50 550";

// Fraction of scroll progress where Valoración ends (4 of 6 nodes).
const PHASE_SPLIT = 0.66;

export function ProcessJourney() {
  const reducedMotion = useReducedMotion();
  const pathRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start 85%", "end 70%"],
    target: pathRef,
  });
  const valoracionLength = useTransform(scrollYProgress, [0, PHASE_SPLIT], [0, 1]);
  const tratamientoLength = useTransform(
    scrollYProgress,
    [PHASE_SPLIT, 0.95],
    [0, 1],
  );
  const phaseSwitch = useTransform(scrollYProgress, [0, PHASE_SPLIT, 1], [0, 0, 1]);

  const cardVariants = createRevealUpVariants(reducedMotion, {
    distance: 40,
    duration: 0.8,
  });
  const nodeVariants = createRevealUpVariants(reducedMotion, {
    distance: 0,
    duration: 0.5,
    scale: 0.4,
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
            Dos fases guían todo el recorrido. La valoración puede resolverse en una o varias consultas; el tratamiento se coordina después, ya con el plan definido.
          </p>
        </div>
      </div>

      <div ref={pathRef} className="relative mt-16">
        {/* Serpentine SVG — desktop */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
          preserveAspectRatio="none"
          viewBox="0 0 100 600"
        >
          {/* Ghost track */}
          <path
            className="stroke-brand-950/10"
            d={`${VALORACION_PATH} ${TRATAMIENTO_PATH.replace(/^M/, "L")}`}
            fill="none"
            strokeLinecap="round"
            strokeWidth="0.6"
          />
          <motion.path
            className="stroke-brand-950"
            d={VALORACION_PATH}
            fill="none"
            strokeLinecap="round"
            strokeWidth="0.9"
            style={{ pathLength: reducedMotion ? 1 : valoracionLength }}
          />
          <motion.path
            className="stroke-accent-400"
            d={TRATAMIENTO_PATH}
            fill="none"
            strokeLinecap="round"
            strokeWidth="1.1"
            style={{ pathLength: reducedMotion ? 1 : tratamientoLength }}
          />
        </svg>

        {/* Mobile vertical rail */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[19px] top-0 h-full w-[2px] md:hidden"
        >
          <div className="absolute inset-x-0 top-0 h-[66%] bg-brand-950/15" />
          <div className="absolute inset-x-0 bottom-0 h-[34%] bg-accent-400/40" />
          <motion.div
            className="absolute inset-x-0 top-0 h-[66%] origin-top bg-brand-950"
            style={{ scaleY: reducedMotion ? 1 : valoracionLength }}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 h-[34%] origin-top bg-accent-400"
            style={{ scaleY: reducedMotion ? 1 : tratamientoLength }}
          />
        </div>

        {/* Floating phase badge (desktop) */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-4 right-0 hidden md:block"
        >
          <PhaseBadge split={phaseSwitch} />
        </div>

        <motion.ol
          className="relative grid gap-14 md:gap-24"
          initial="hidden"
          viewport={revealViewport}
          whileInView="visible"
        >
          {STEPS.map((step, index) => (
            <JourneyStep
              align={index % 2 === 0 ? "left" : "right"}
              cardVariants={cardVariants}
              key={step.title}
              nodeVariants={nodeVariants}
              step={step}
            />
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

function JourneyStep({
  align,
  cardVariants,
  nodeVariants,
  step,
}: {
  align: "left" | "right";
  cardVariants: ReturnType<typeof createRevealUpVariants>;
  nodeVariants: ReturnType<typeof createRevealUpVariants>;
  step: Step;
}) {
  const isTratamiento = step.phase === "tratamiento";

  return (
    <motion.li
      className={`relative pl-12 md:pl-0 ${
        align === "left" ? "md:pr-[54%]" : "md:pl-[54%]"
      }`}
      variants={cardVariants}
    >
      {/* Node dot */}
      <motion.span
        aria-hidden
        className={`absolute top-6 h-5 w-5 -translate-x-1/2 rounded-full ring-4 ring-white ${
          isTratamiento ? "bg-accent-400" : "bg-brand-950"
        } left-[19px] md:left-[50%]`}
        variants={nodeVariants}
      >
        <span className="absolute inset-1.5 rounded-full bg-white/90" />
      </motion.span>

      <article className="rounded-[28px] border border-brand-950/10 bg-white/95 p-6 shadow-[0_18px_50px_rgba(11,31,59,0.08)] backdrop-blur-sm md:p-7">
        <span
          className={`text-[10px] font-semibold uppercase tracking-[0.28em] ${
            isTratamiento ? "text-accent-400" : "text-brand-700"
          }`}
        >
          {isTratamiento ? "Tratamiento" : "Valoración"}
        </span>
        <h3 className="mt-2 text-xl font-semibold text-brand-950 md:text-2xl">
          {step.title}
        </h3>
        <p className="mt-2 max-w-xl text-sm leading-6 text-brand-950/72">
          {step.body}
        </p>
      </article>
    </motion.li>
  );
}

function PhaseBadge({ split }: { split: MotionValue<number> }) {
  const valoracionOpacity = useTransform(split, [0, 1], [1, 0]);
  const tratamientoOpacity = useTransform(split, [0, 1], [0, 1]);

  return (
    <div className="relative h-6 w-56">
      <motion.div
        className="absolute inset-0 flex items-center justify-end gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-950"
        style={{ opacity: valoracionOpacity }}
      >
        <span className="h-2 w-2 rounded-full bg-brand-950" />
        Fase 1 · Valoración
      </motion.div>
      <motion.div
        className="absolute inset-0 flex items-center justify-end gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-400"
        style={{ opacity: tratamientoOpacity }}
      >
        <span className="h-2 w-2 rounded-full bg-accent-400" />
        Fase 2 · Tratamiento
      </motion.div>
    </div>
  );
}
