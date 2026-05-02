import {
  createRevealUpVariants,
  motion,
  revealViewport,
  useReducedMotion,
} from "~/components/lib/motion";

export function HomeValueProposition() {
  const reducedMotion = useReducedMotion();
  const cardVariants = createRevealUpVariants(reducedMotion, {
    distance: 46,
    duration: 0.9,
  });

  return (
    <section className="mx-auto max-w-[80vw] py-16 lg:px-8">
      <motion.div
        className="overflow-hidden rounded-[32px] bg-brand-950 px-8 py-10 text-white shadow-[0_24px_60px_rgba(11,31,59,0.18)] sm:px-10 sm:py-12"
        initial="hidden"
        variants={cardVariants}
        viewport={revealViewport}
        whileInView="visible"
      >
        <motion.h2
          className="display-balance max-w-4xl font-display text-3xl leading-[0.98] tracking-[-0.045em] sm:text-4xl lg:text-5xl"
          variants={cardVariants}
        >
          Tu camino hacia formar una familia comienza aquí.
        </motion.h2>
        <motion.p className="mt-5 max-w-3xl text-base leading-8 text-white/78 sm:text-lg" variants={cardVariants}>
          Confía en un equipo que combina experiencia, tecnología y un enfoque humano para
          acompañarte en uno de los procesos más importantes de tu vida.
        </motion.p>
      </motion.div>
    </section>
  );
}
