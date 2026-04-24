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

const aboutHeroImage = {
  src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
  alt: "Equipo médico moderno y profesional.",
  width: 1000,
  height: 667,
};

export function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const imageY = useParallax(sectionRef, reducedMotion ? 0 : 26);

  const rootVariants = createRevealUpVariants(reducedMotion, { distance: 46, duration: 0.92, scale: 1 });
  const contentVariants = createStaggerVariants(reducedMotion, { delayChildren: 0.08, staggerChildren: 0.08 });
  const actionVariants = createStaggerVariants(reducedMotion, { delayChildren: 0.1, staggerChildren: 0.08 });
  const itemVariants = createRevealUpVariants(reducedMotion, { distance: 26, duration: 0.76, scale: 1 });

  const image = aboutHeroImage;

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
            alt={image.alt}
            className="h-full w-full object-cover will-change-transform [backface-visibility:hidden] [transform:translateZ(0)]"
            decoding="async"
            fetchPriority="high"
            height={image.height}
            loading="eager"
            src={image.src}
            width={image.width}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#fafaf9]/98 via-[#fafaf9]/85 to-[#fafaf9]/40" />
      </div>

      <div className="absolute bottom-0 left-0 top-0 z-10 w-1 bg-brand-950" />

      <motion.div
        className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col justify-center px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
        variants={contentVariants}
      >
        <motion.div className="w-full max-w-4xl" variants={contentVariants}>
            <motion.p className="eyebrow-label mb-4 text-brand-950/50" variants={itemVariants}>
              Quiénes somos
            </motion.p>
            <motion.h1
              className="display-balance max-w-4xl font-display text-[2.7rem] leading-[0.98] tracking-[-0.05em] text-brand-950 sm:text-6xl lg:text-[4.2rem]"
              variants={itemVariants}
            >
              Una clínica que combina rigor médico, sensibilidad humana y tecnología avanzada.
            </motion.h1>
            <motion.div className="mt-8 h-px w-24 bg-brand-950/20" variants={itemVariants} />
            <motion.p className="mt-6 max-w-xl text-[1.05rem] leading-8 text-brand-950/72" variants={itemVariants}>
              VIXI es una clínica de fertilidad especializada en biología de la reproducción humana,
              con un enfoque cálido, personalizado y respaldado por tecnología avanzada.
            </motion.p>

            <motion.div className="mt-10 flex justify-center sm:justify-start" variants={actionVariants}>
              <motion.div
                className="flex w-full max-w-sm flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-stretch"
                variants={actionVariants}
              >
                <motion.div className="w-full sm:w-auto" variants={itemVariants}>
                  <ButtonLink className="flex w-full justify-center sm:w-auto" external to="https://wa.me/524776725136" variant="primary">
                    Agendar valoración
                  </ButtonLink>
                </motion.div>
                <motion.div className="w-full sm:w-auto" variants={itemVariants}>
                  <ButtonLink className="flex w-full justify-center sm:w-auto" to="/tratamientos" variant="secondary">
                    Conocer tratamientos
                  </ButtonLink>
                </motion.div>
              </motion.div>
            </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
