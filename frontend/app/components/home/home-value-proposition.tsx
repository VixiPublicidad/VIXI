import { type ReactNode, useRef } from "react";

import {
  createRevealUpVariants,
  createStaggerVariants,
  motion,
  revealViewport,
  useParallax,
  useReducedMotion,
} from "~/components/lib/motion";

export function HomeValueProposition() {
  const reducedMotion = useReducedMotion();
  const gridVariants = createStaggerVariants(reducedMotion, {
    delayChildren: 0.08,
    staggerChildren: 0.1,
  });
  const cardVariants = createRevealUpVariants(reducedMotion, {
    distance: 46,
    duration: 0.9,
  });

  return (
    <section className="mx-auto max-w-[80vw] py-16 sm:px-6 lg:px-8">
      <motion.div
        className="relative max-w-4xl"
        initial="hidden"
        variants={cardVariants}
        viewport={revealViewport}
        whileInView="visible"
      >
        <motion.div
          className="mb-5 inline-flex items-center gap-3 rounded-full border border-brand-950/10 bg-white/60 px-4 py-1.5 text-brand-950 shadow-[0_4px_24px_-4px_rgba(11,31,59,0.08)] backdrop-blur-md"
          variants={cardVariants}
        >
          <svg className="h-3.5 w-3.5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="eyebrow-label pt-[1px] text-[10px]">Propuesta de valor</span>
        </motion.div>
        <motion.h2
          className="display-balance bg-gradient-to-br from-brand-950 via-[#183457] to-[#3a5d8c] bg-clip-text font-display text-3xl leading-[0.98] tracking-[-0.045em] text-transparent sm:text-4xl lg:text-5xl"
          variants={cardVariants}
        >
          Tres razones por las que VIXI se siente distinta desde la primera consulta
        </motion.h2>
      </motion.div>
      <motion.div
        className="mt-8 grid gap-5 lg:grid-cols-3"
        initial="hidden"
        variants={gridVariants}
        viewport={revealViewport}
        whileInView="visible"
      >
        <ValueCard
          imageAlt="Manos agarradas de familiares en señal de apoyo."
          imageSrc="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1000&q=80"
          reducedMotion={reducedMotion}
          variants={cardVariants}
        >
          <h3 className="mt-3 font-display text-[1.65rem] font-medium leading-tight text-white sm:text-[1.8rem]">
            Fertilidad asistida con criterio médico
          </h3>
          <p className="mt-4 max-w-md text-[0.98rem] leading-7 text-white/80">
            Valoramos cada historia con un plan clínico claro, humano y diseñado para la etapa reproductiva de cada paciente.
          </p>
        </ValueCard>
        <ValueCard
          imageAlt="Equipo médico moderno y profesional."
          imageSrc="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80"
          reducedMotion={reducedMotion}
          variants={cardVariants}
        >
          <h3 className="mt-3 font-display text-[1.65rem] font-medium leading-tight text-white sm:text-[1.8rem]">
            Tecnología avanzada con acompañamiento cercano
          </h3>
          <p className="mt-4 max-w-md text-[0.98rem] leading-7 text-white/80">
            La experiencia de VIXI combina diagnóstico, procedimientos y seguimiento en un ambiente sereno y altamente profesional.
          </p>
        </ValueCard>
        <ValueCard
          imageAlt="Doctor operando."
          imageSrc="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=80"
          reducedMotion={reducedMotion}
          variants={cardVariants}
        >
          <h3 className="mt-3 font-display text-[1.65rem] font-medium leading-tight text-white sm:text-[1.8rem]">
            Atención para distintos modelos de familia
          </h3>
          <p className="mt-4 max-w-md text-[0.98rem] leading-7 text-white/80">
            Atendemos parejas, maternidad o paternidad independiente y tratamientos que requieren decisiones personalizadas.
          </p>
        </ValueCard>
      </motion.div>
    </section>
  );
}

function ValueCard({
  children,
  imageAlt,
  imageSrc,
  reducedMotion,
  variants,
}: {
  children: ReactNode;
  imageAlt: string;
  imageSrc: string;
  reducedMotion: boolean;
  variants: ReturnType<typeof createRevealUpVariants>;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const imageY = useParallax(cardRef, reducedMotion ? 0 : 20);

  return (
    <motion.article
      className="group relative flex min-h-[500px] flex-col justify-end overflow-hidden rounded-[2rem] shadow-[0_18px_50px_rgba(11,31,59,0.12)] transition-all duration-700 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(11,31,59,0.18)]"
      ref={cardRef}
      variants={variants}
    >
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <motion.img alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" src={imageSrc} />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/40 to-brand-950/10" />
      </motion.div>
      <motion.div className="relative z-10 p-7 sm:p-8">
        <p className="eyebrow-label text-accent-200">VIXI</p>
        {children}
      </motion.div>
    </motion.article>
  );
}
