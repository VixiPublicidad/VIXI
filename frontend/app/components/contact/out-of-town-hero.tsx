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

export function OutOfTownHero() {
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
            alt="Paciente revisando agenda de viaje y consulta médica."
            animate={reducedMotion ? undefined : { scale: [1.03, 1.08, 1.03] }}
            className="h-full w-full object-cover will-change-transform [backface-visibility:hidden] [transform:translateZ(0)]"
            decoding="async"
            fetchPriority="high"
            loading="eager"
            src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80"
            transition={{ duration: 15, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf7f2]/88 via-[#faf7f2]/38 to-brand-950/12" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/30" />
      </div>

      <motion.div
        className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col justify-center px-6 pb-14 pt-28 sm:px-10 lg:px-16 lg:pb-20"
        variants={contentVariants}
      >
        <div className="max-w-3xl">
          <motion.p
            className="eyebrow-label inline-flex items-center gap-2 rounded-full border border-white/55 bg-white/18 px-4 py-2 text-brand-800 backdrop-blur-md"
            variants={itemVariants}
          >
            <span className="h-2 w-2 rounded-full bg-accent-300" />
            Pacientes foráneos
          </motion.p>

          <motion.h1
            className="display-balance mt-6 font-display text-4xl leading-[0.95] tracking-[-0.05em] text-brand-950 sm:text-5xl lg:text-[4.6rem]"
            variants={itemVariants}
          >
            Cuando viajas para atender tu fertilidad, la claridad logística también importa.
          </motion.h1>
          <motion.div className="mt-7 h-px w-24 bg-brand-950/16" variants={itemVariants} />
          <motion.p
            className="mt-7 max-w-2xl text-[1.05rem] leading-8 text-brand-950/66 sm:text-[1.15rem]"
            variants={itemVariants}
          >
            VIXI atiende pacientes de otros estados y países, con orientación previa, consulta en línea
            y seguimiento a distancia cuando es posible.
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
                    Resolver por WhatsApp
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
        </div>

        <motion.div
          className="absolute bottom-20 right-10 z-20 hidden max-w-xs rounded-2xl border border-brand-950/8 bg-white/60 p-5 backdrop-blur-xl lg:block"
          variants={itemVariants}
        >
          <p className="eyebrow-label text-[10px] text-brand-700">Logística cuidada</p>
          <p className="mt-2 text-sm leading-7 text-brand-950/62">
            Acompañamiento claro para organizar consultas, estudios y tiempos de viaje con mayor tranquilidad.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
