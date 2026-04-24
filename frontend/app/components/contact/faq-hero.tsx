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

export function FAQHero() {
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
            alt="Recepción clínica con paciente resolviendo dudas antes de consulta."
            className="h-full w-full object-cover will-change-transform [backface-visibility:hidden] [transform:translateZ(0)]"
            decoding="async"
            fetchPriority="high"
            loading="eager"
            src="https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=1200&q=80"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#fafaf9]/98 via-[#fafaf9]/85 to-[#fafaf9]/40" />
      </div>

      <div className="absolute bottom-0 left-0 top-0 z-10 w-1 bg-brand-950" />

      <motion.div
        className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16"
        variants={contentVariants}
      >
        <div className="grid min-h-[70vh] items-center gap-12 py-20 lg:grid-cols-[minmax(0,56rem)_minmax(0,20rem)] lg:justify-between lg:py-28">
          <motion.div className="flex w-full max-w-4xl flex-col justify-center" variants={contentVariants}>
            <motion.p className="eyebrow-label mb-4 text-brand-950/50" variants={itemVariants}>
              Preguntas frecuentes
            </motion.p>
            <motion.h1
              className="display-balance max-w-4xl font-display text-[2.7rem] leading-[0.98] tracking-[-0.05em] text-brand-950 sm:text-6xl lg:text-[4.2rem]"
              variants={itemVariants}
            >
              Respuestas claras para las dudas más comunes antes de empezar.
            </motion.h1>
            <motion.div className="mt-8 h-px w-24 bg-brand-950/20" variants={itemVariants} />
            <motion.p className="mt-6 max-w-xl text-[1.05rem] leading-8 text-brand-950/72" variants={itemVariants}>
              Las preguntas frecuentes concentran inquietudes previas a la valoración: costos, tiempos,
              probabilidad de éxito y acompañamiento remoto.
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
                      Resolver por WhatsApp
                    </span>
                  </ButtonLink>
                </motion.div>
                <motion.div className="w-full sm:w-auto" variants={itemVariants}>
                  <ButtonLink className="flex w-full justify-center sm:w-auto" to="/contacto" variant="secondary">
                    <span className="inline-flex items-center gap-2">
                      <FaArrowRight aria-hidden="true" className="h-4 w-4" />
                      Ir a contacto
                    </span>
                  </ButtonLink>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="flex flex-col items-start gap-8 lg:items-end lg:justify-center lg:text-right" variants={contentVariants}>
            <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1" variants={contentVariants}>
              <motion.div className="border-l-2 border-brand-950/15 pl-4 lg:border-l-0 lg:border-r-2 lg:pl-0 lg:pr-4" variants={itemVariants}>
                <p className="font-display text-2xl tracking-[-0.035em] text-brand-950">Costos</p>
                <p className="eyebrow-label mt-1 text-brand-950/55">explicados por etapa</p>
              </motion.div>
              <motion.div className="border-l-2 border-brand-950/15 pl-4 lg:border-l-0 lg:border-r-2 lg:pl-0 lg:pr-4" variants={itemVariants}>
                <p className="font-display text-2xl tracking-[-0.035em] text-brand-950">Tiempos</p>
                <p className="eyebrow-label mt-1 text-brand-950/55">según cada procedimiento</p>
              </motion.div>
              <motion.div className="border-l-2 border-brand-950/15 pl-4 lg:border-l-0 lg:border-r-2 lg:pl-0 lg:pr-4" variants={itemVariants}>
                <p className="font-display text-2xl tracking-[-0.035em] text-brand-950">Expectativas</p>
                <p className="eyebrow-label mt-1 text-brand-950/55">desde criterios médicos responsables</p>
              </motion.div>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-brand-950/8 bg-white/60 p-5 backdrop-blur-md lg:max-w-xs lg:text-left"
              variants={itemVariants}
            >
              <p className="eyebrow-label text-[10px] text-brand-700">Información esencial</p>
              <p className="mt-2 text-sm leading-7 text-brand-950/70">
                Respuestas claras para entender costos, tiempos, probabilidades y opciones de atención.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
