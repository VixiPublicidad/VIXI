import { useRef } from "react";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

import {
  createRevealUpVariants,
  createStaggerVariants,
  motion,
  revealViewport,
  useParallax,
  useReducedMotion,
} from "~/components/lib/motion";
import { ButtonLink } from "~/components/ui/button-link";

export function ExperienceHero() {
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
          <motion.img
            alt="Centro de reproducción VIXI."
            className="h-full w-full object-cover will-change-transform [backface-visibility:hidden] [transform:translateZ(0)]"
            decoding="async"
            fetchPriority="high"
            loading="eager"
            src="/heroes/experience-hero-bg.avif"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/20 to-brand-950/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-brand-950/30 to-brand-950/50" />
      </div>

      <motion.div
        animate={reducedMotion ? undefined : { rotate: [0, -4, 3, 0], scale: [1, 1.08, 1], x: [0, -18, 8, 0], y: [0, 16, -6, 0] }}
        className="pointer-events-none absolute -left-32 top-1/3 z-[1] h-[500px] w-[500px] rounded-full bg-brand-700/20 blur-[120px]"
        transition={{ duration: 18, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        animate={reducedMotion ? undefined : { rotate: [0, 3, -2, 0], scale: [1, 1.05, 1], x: [0, 14, -10, 0], y: [0, -12, 10, 0] }}
        className="pointer-events-none absolute -right-20 bottom-0 z-[1] h-[400px] w-[400px] rounded-full bg-accent-400/10 blur-[100px]"
        transition={{ duration: 16, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />

      <motion.div
        className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col justify-center px-6 pb-14 pt-40 sm:px-10 lg:px-16 lg:pb-20"
        variants={contentVariants}
      >
        <div className="w-full max-w-4xl">
          <motion.p className="eyebrow-label mb-4 text-accent-200/80" variants={itemVariants}>
            Nuestra experiencia
          </motion.p>
          <motion.h1
            className="display-balance max-w-4xl font-display text-[2.7rem] leading-[0.98] tracking-[-0.05em] text-white [text-shadow:0_2px_30px_rgba(0,0,0,0.4)] sm:text-6xl lg:text-[4.2rem]"
            variants={itemVariants}
          >
            Tecnología de vanguardia con atención profundamente humana
          </motion.h1>
          <motion.p className="mt-5 max-w-2xl text-[1.05rem] leading-8 text-white/68" variants={itemVariants}>
            La experiencia en VIXI integra infraestructura clínica, evaluación precisa y una
            atención individualizada para acompañarte con claridad en cada decisión.
          </motion.p>

          <motion.div className="mt-8 flex justify-center sm:justify-start" variants={actionVariants}>
            <motion.div
              className="flex w-full max-w-sm flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-stretch"
              variants={actionVariants}
            >
              <motion.div className="w-full sm:w-auto" variants={itemVariants}>
                <ButtonLink className="flex w-full justify-center sm:w-auto" external to="https://wa.me/524776725136" variant="primary">
                  <span className="inline-flex items-center gap-2">
                    <FaWhatsapp aria-hidden="true" className="h-4 w-4" />
                    Agendar valoración
                  </span>
                </ButtonLink>
              </motion.div>
              <motion.div className="w-full sm:w-auto" variants={itemVariants}>
                <ButtonLink className="flex w-full justify-center sm:w-auto" to="/tratamientos" variant="secondary">
                  <span className="inline-flex items-center gap-2">
                    <FaArrowRight aria-hidden="true" className="h-4 w-4" />
                    Ver tratamientos
                  </span>
                </ButtonLink>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.p className="mt-8 max-w-sm text-xs leading-relaxed text-white/35" variants={itemVariants}>       
          Tecnología, infraestructura y acompañamiento para tomar mejores decisiones desde la
          primera visita.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
