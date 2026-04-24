import { useRef } from "react";

import {
  createRevealUpVariants,
  createStaggerVariants,
  motion,
  revealViewport,
  useParallax,
  useReducedMotion,
} from "~/components/lib/motion";
import { ButtonLink } from "~/components/ui/button-link";

const heroImage = {
  src: "/heroes/home-hero-bg.avif",
  alt: "Especialista en consulta de fertilidad atendiendo a una paciente en un entorno clínico elegante.",
  width: 1536,
  height: 1024,
};

export function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const imageY = useParallax(sectionRef, reducedMotion ? 0 : 26);

  const rootVariants = createRevealUpVariants(reducedMotion, { distance: 46, duration: 0.92, scale: 1 });
  const contentVariants = createStaggerVariants(reducedMotion, { delayChildren: 0.08, staggerChildren: 0.08 });
  const actionVariants = createStaggerVariants(reducedMotion, { delayChildren: 0.1, staggerChildren: 0.08 });
  const itemVariants = createRevealUpVariants(reducedMotion, { distance: 26, duration: 0.76, scale: 1 });

  return (
    <motion.section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      initial="hidden"
      variants={rootVariants}
      viewport={revealViewport}
      whileInView="visible"
    >
      <div className="absolute inset-0 z-0">
        <motion.div className="h-full w-full overflow-hidden [transform:translateZ(0)]" style={{ y: imageY }}>
          <img
            alt={heroImage.alt}
            className="h-full w-full object-cover [backface-visibility:hidden] [transform:translateZ(0)]"
            decoding="async"
            fetchPriority="high"
            height={heroImage.height}
            loading="eager"
            src={heroImage.src}
            width={heroImage.width}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/75 via-brand-950/40 to-brand-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-brand-950/20" />
      </div>

      <motion.div
        animate={reducedMotion ? undefined : { rotate: [0, -4, 3, 0], scale: [1, 1.08, 1], x: [0, -18, 8, 0], y: [0, 16, -6, 0] }}
        className="pointer-events-none absolute -left-40 top-1/2 -z-0 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-accent-400/10 blur-[120px]"
        transition={{ duration: 18, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        animate={reducedMotion ? undefined : { rotate: [0, 3, -2, 0], scale: [1, 1.05, 1], x: [0, 14, -10, 0], y: [0, -12, 10, 0] }}
        className="pointer-events-none absolute bottom-0 right-0 -z-0 h-[400px] w-[400px] rounded-full bg-brand-200/10 blur-[100px]"
        transition={{ duration: 16, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />

      <motion.div
        className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col justify-center px-6 pb-16 pt-28 sm:px-10 lg:px-16 lg:pb-20"
        variants={contentVariants}
      >
        <div className="max-w-4xl pb-10">
          <motion.p
            className="eyebrow-label mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-white backdrop-blur-md"
            variants={itemVariants}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-400" />
            Clínica de fertilidad
          </motion.p>

          <motion.h1
            className="display-balance max-w-4xl font-display text-[2.7rem] leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl lg:text-[4.2rem]"
            variants={itemVariants}
          >
            Las técnicas de reproducción son más que un tratamiento
          </motion.h1>

          <motion.p
            className="display-balance mt-3 font-display text-[1.4rem] leading-[1.12] tracking-[-0.035em] text-white/85 sm:text-2xl lg:text-[2rem]"
            variants={itemVariants}
          >
            Es una decisión emocional, médica y profundamente humana.
          </motion.p>

          <motion.p
            className="mt-6 max-w-2xl text-[1.05rem] leading-8 text-white/78 sm:text-[1.15rem]"
            variants={itemVariants}
          >
            VIXI es una clínica especializada en fertilización asistida que combina tecnología avanzada,
            trato cercano y decisiones clínicas individualizadas dentro de un entorno hospitalario de
            prestigio. Con 12 años de experiencia en la especialidad.
          </motion.p>

          <motion.div className="mt-10 flex justify-center sm:justify-start" variants={actionVariants}>
            <motion.div
              className="flex w-full max-w-sm flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-stretch"
              variants={actionVariants}
            >
              <motion.div className="w-full sm:w-auto" variants={itemVariants}>
                <ButtonLink
                  className="flex w-full justify-center sm:w-auto"
                  external
                  to="https://wa.me/524776725136"
                  variant="primary"
                >
                  Agendar valoración
                </ButtonLink>
              </motion.div>
              <motion.div className="w-full sm:w-auto" variants={itemVariants}>
                <ButtonLink
                  className="flex w-full justify-center sm:w-auto"
                  to="/tratamientos"
                  variant="secondary"
                >
                  Conocer tratamientos
                </ButtonLink>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-20 right-10 z-20 hidden max-w-xs rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl transition-all hover:bg-white/15 lg:block"
          variants={itemVariants}
        >
          <p className="eyebrow-label text-[10px] text-accent-200">Fertilidad con criterio</p>
          <p className="mt-2 text-sm leading-7 text-white/80">
            Medicina avanzada, conversaciones claras y una experiencia pensada para sostener decisiones complejas.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
