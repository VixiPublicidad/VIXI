import { useRef } from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

import {
  createRevealUpVariants,
  createStaggerVariants,
  motion,
  revealViewport,
  useParallax,
  useReducedMotion,
} from "~/components/lib/motion";
import { ButtonLink } from "~/components/ui/button-link";

export function ContactHero() {
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
            alt="Fachada contemporánea de un hospital con luz cálida."
            className="h-full w-full object-cover will-change-transform [backface-visibility:hidden] [transform:translateZ(0)]"
            decoding="async"
            fetchPriority="high"
            loading="eager"
            src="/heroes/contact-hero-bg.avif"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/50 to-white/20" />
        <div className="absolute inset-0 bg-accent-100/20" />
      </div>

      <motion.div
        animate={reducedMotion ? undefined : { rotate: [0, -4, 3, 0], scale: [1, 1.08, 1], x: [0, -18, 8, 0], y: [0, 16, -6, 0] }}
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-accent-200/30 blur-[100px]"
        transition={{ duration: 18, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />

      <motion.div
        className="relative z-10 mx-auto flex min-h-[70vh] max-w-[1440px] flex-col items-center justify-center px-6 py-24 text-center sm:px-10 lg:px-16"
        variants={contentVariants}
      >
        <motion.p className="eyebrow-label mb-6 text-brand-700/70" variants={itemVariants}>
          Contacto
        </motion.p>
        <motion.h1
          className="display-balance max-w-4xl font-display text-4xl leading-[0.98] tracking-[-0.05em] text-brand-950 sm:text-5xl lg:text-[5rem]"
          variants={itemVariants}
        >
          Tu viaje a la fertilidad comienza con nosotros.
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-[1.05rem] leading-8 text-brand-950/64 sm:text-[1.15rem]"
          variants={itemVariants}
        >
          Encuentra aquí dirección, horario, teléfono, WhatsApp, correo y la opción de consulta en línea
          para iniciar tu atención en VIXI.
        </motion.p>

        <motion.div className="mt-10 flex justify-center" variants={actionVariants}>
          <motion.div
            className="flex w-full max-w-sm flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-stretch"
            variants={actionVariants}
          >
            <motion.div className="w-full sm:w-auto" variants={itemVariants}>
              <ButtonLink className="flex w-full justify-center sm:w-auto" external to="https://wa.me/524776725136" variant="primary">
                <span className="inline-flex items-center gap-2">
                  <FaWhatsapp aria-hidden="true" className="h-4 w-4" />
                  Enviar WhatsApp
                </span>
              </ButtonLink>
            </motion.div>
            <motion.div className="w-full sm:w-auto" variants={itemVariants}>
              <ButtonLink className="flex w-full justify-center sm:w-auto" external to="tel:+524776725136" variant="secondary">
                <span className="inline-flex items-center gap-2">
                  <FaPhone aria-hidden="true" className="h-4 w-4" />
                  Llamar ahora
                </span>
              </ButtonLink>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-14"
          variants={contentVariants}
        >
          <motion.div className="flex flex-col items-center" variants={itemVariants}>
            <p className="font-display text-3xl tracking-[-0.04em] text-brand-950">León, Gto.</p>
            <p className="eyebrow-label mt-2 text-brand-950/45">ubicación de la clínica</p>
          </motion.div>
          <motion.div className="flex flex-col items-center" variants={itemVariants}>
            <p className="font-display text-3xl tracking-[-0.04em] text-brand-950">8:30 a 18:00 h</p>
            <p className="eyebrow-label mt-2 text-brand-950/45">horario de atención</p>
          </motion.div>
          <motion.div className="flex flex-col items-center" variants={itemVariants}>
            <p className="font-display text-3xl tracking-[-0.04em] text-brand-950">Consulta en línea</p>
            <p className="eyebrow-label mt-2 text-brand-950/45">disponible</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 rounded-2xl border border-brand-950/8 bg-white/60 px-6 py-4 backdrop-blur-xl"
          variants={itemVariants}
        >
          <p className="eyebrow-label text-[10px] text-brand-700">Canales directos</p>
          <p className="mt-1 text-sm leading-7 text-brand-950/60">
            WhatsApp, llamada, correo y ubicación clara para facilitar tu primer contacto con la clínica.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
