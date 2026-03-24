import { treatmentJourney } from "~/components/data";
import {
  createRevealUpVariants,
  createStaggerVariants,
  motion,
  revealViewport,
  useReducedMotion,
} from "~/components/lib/motion";
import { SectionHeading } from "~/components/ui/section-heading";

export function ProcessJourney() {
  const reducedMotion = useReducedMotion();
  const listVariants = createStaggerVariants(reducedMotion, {
    delayChildren: 0.1,
    staggerChildren: 0.14,
  });
  const cardVariants = createRevealUpVariants(reducedMotion, {
    distance: 52,
    duration: 0.88,
  });
  const badgeVariants = createRevealUpVariants(reducedMotion, {
    distance: 20,
    duration: 0.62,
    scale: 1,
  });

  return (
    <section className="mx-auto max-w-[80vw] py-16 lg:px-8">
      <SectionHeading
        description="Cada etapa ayuda a entender qué estudios se requieren, cuál es el factor que impide el embarazo y qué sigue después."
        eyebrow="Ruta clínica"
        title="Del diagnóstico al procedimiento, sin zonas grises"
        variant="editorial"
      />
      <motion.div
        className="mt-8 grid gap-5"
        initial="hidden"
        variants={listVariants}
        viewport={revealViewport}
        whileInView="visible"
      >
        {treatmentJourney.map((item) => (
          <motion.article
            key={item.step}
            className="grid gap-5 rounded-[30px] border border-brand-950/10 bg-white/90 p-6 shadow-[0_18px_50px_rgba(11,31,59,0.08)] md:grid-cols-[140px_1fr]"
            variants={cardVariants}
          >
            <motion.div className="rounded-[24px] bg-accent-100 px-5 py-5 text-brand-950" variants={badgeVariants}>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">Etapa</p>
              <p className="mt-2 font-display text-5xl leading-none">{item.step}</p>
            </motion.div>
            <motion.div variants={listVariants}>
              <h2 className="text-2xl font-semibold text-brand-950">{item.title}</h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-brand-950/72">{item.description}</p>
            </motion.div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
