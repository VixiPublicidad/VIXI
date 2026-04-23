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

export function TreatmentsHero() {
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
            alt="Embrióloga trabajando con instrumental especializado en un laboratorio."
            animate={reducedMotion ? undefined : { scale: [1.03, 1.08, 1.03] }}
            className="h-full w-full object-cover will-change-transform [backface-visibility:hidden] [transform:translateZ(0)]"
            decoding="async"
            fetchPriority="high"
            loading="eager"
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80"
            transition={{ duration: 15, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#fafaf9]/98 via-[#fafaf9]/85 to-[#fafaf9]/40" />
      </div>

      <div className="absolute bottom-0 left-0 top-0 z-10 w-1 bg-brand-950" />

      <motion.div
        className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16"
        variants={contentVariants}
      >
        <div className="grid min-h-[60vh] items-end gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <motion.div className="flex flex-col justify-end" variants={contentVariants}>
            <motion.p className="eyebrow-label mb-4 text-brand-950/50" variants={itemVariants}>
              Tratamientos
            </motion.p>
            <motion.h1
              className="display-balance font-display text-4xl leading-[0.94] tracking-[-0.05em] text-brand-950 sm:text-5xl lg:text-[4.5rem]"
              variants={itemVariants}
            >
              Tratamientos de fertilidad organizados con claridad, sensibilidad y criterio médico.
            </motion.h1>
            <motion.div className="mt-8 h-px w-24 bg-brand-950/20" variants={itemVariants} />
            <motion.p className="mt-6 max-w-xl text-[1.05rem] leading-8 text-brand-950/72" variants={itemVariants}>
              VIXI ofrece tratamientos de alta y baja complejidad para ayudar a lograr el embarazo con un
              plan individualizado y tecnología avanzada.
            </motion.p>

            <motion.div className="mt-10 flex justify-center sm:justify-start" variants={actionVariants}>
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
                  <ButtonLink className="flex w-full justify-center sm:w-auto" to="/como-funciona-tu-tratamiento" variant="secondary">
                    <span className="inline-flex items-center gap-2">
                      <FaArrowRight aria-hidden="true" className="h-4 w-4" />
                      Ver proceso
                    </span>
                  </ButtonLink>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="flex flex-col items-start gap-8 lg:items-end lg:text-right" variants={contentVariants}>
            <motion.div
              className="rounded-2xl border border-brand-950/8 bg-white/60 p-5 backdrop-blur-md lg:max-w-xs lg:text-left"
              variants={itemVariants}
            >
              <p className="eyebrow-label text-[10px] text-brand-700">Portafolio clínico</p>
              <p className="mt-2 text-sm leading-7 text-brand-950/70">
                Opciones terapéuticas explicadas con claridad para entender qué camino puede ajustarse mejor a tu caso.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
