import { FaWhatsapp } from "react-icons/fa";

import {
  createRevealUpVariants,
  createStaggerVariants,
  motion,
  revealViewport,
  useReducedMotion,
} from "~/components/lib/motion";
import { ButtonLink } from "~/components/ui/button-link";

const whatsappHref = "https://wa.me/524776725136";

export function SecondOpinionCTA() {
  const reducedMotion = useReducedMotion();
  const sectionVariants = createRevealUpVariants(reducedMotion, {
    distance: 40,
    duration: 0.9,
  });
  const contentVariants = createStaggerVariants(reducedMotion, {
    delayChildren: 0.08,
    staggerChildren: 0.1,
  });
  const itemVariants = createRevealUpVariants(reducedMotion, {
    distance: 22,
    duration: 0.75,
    scale: 1,
  });

  return (
    <motion.section
      className="mx-auto max-w-[80vw] py-6 lg:px-8"
      initial="hidden"
      variants={sectionVariants}
      viewport={revealViewport}
      whileInView="visible"
    >
      <motion.div
        className="relative overflow-hidden rounded-[32px] bg-brand-50 px-8 py-10 shadow-[0_20px_60px_rgba(11,31,59,0.14)] sm:px-12 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-12"
        variants={contentVariants}
      >
        {/* Decorative circle */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-300/25"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-brand-200/40"
        />

        <motion.div className="relative max-w-2xl" variants={contentVariants}>
          <motion.p
            className="eyebrow-label text-accent-600"
            variants={itemVariants}
          >
            Segunda opinión
          </motion.p>
          <motion.h2
            className="mt-3 font-display text-3xl font-medium leading-tight tracking-[-0.035em] text-brand-950 sm:text-4xl"
            variants={itemVariants}
          >
            ¿Buscas una segunda opinión?{" "}
            <span className="text-accent-500">La consulta va por nuestra cuenta.</span>
          </motion.h2>
          <motion.p
            className="mt-4 max-w-xl text-[0.97rem] leading-7 text-brand-700"
            variants={itemVariants}
          >
            Si ya recibiste un diagnóstico y quieres confirmarlo o simplemente explorar otras
            opciones, nuestro equipo médico te da una valoración sin costo. Sin compromiso, con
            toda la información.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative mt-8 flex-shrink-0 lg:mt-0"
          variants={itemVariants}
        >
          <ButtonLink external to={whatsappHref}>
            <span className="inline-flex items-center gap-2">
              <FaWhatsapp aria-hidden="true" className="h-4 w-4" />
              Solicitar consulta
            </span>
          </ButtonLink>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
