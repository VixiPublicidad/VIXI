import {
  createRevealUpVariants,
  createStaggerVariants,
  motion,
  revealViewport,
  useReducedMotion,
} from "~/components/lib/motion";

const PILLARS = [
  {
    index: "01",
    title: "Ciencia e innovación aplicada a la vida",
    body: [
      "Tratamientos de reproducción asistida sustentados en tecnología de última generación y medicina basada en evidencia.",
      "Precisión diagnóstica, optimización de protocolos y mejores probabilidades de éxito.",
    ],
  },
  {
    index: "02",
    title: "Experiencia que respalda cada decisión",
    body: [
      "Ofrecemos atención médica respaldada por más de 12 años de experiencia conjunta en reproducción humana y cirugía mínimamente invasiva.",
      "Cada caso es analizado con criterio clínico avanzado, rigor científico y enfoque multidisciplinario, garantizando decisiones informadas y seguras.",
    ],
  },
  {
    index: "03",
    title: "Cercanía que transforma la experiencia del paciente",
    body: [
      "Acompañar a cada pareja con un enfoque humano, empático y personalizado, construyendo una relación de confianza donde el paciente se siente escuchado, comprendido y guiado en cada etapa de su proceso.",
    ],
  },
] as const;

export function HomeSciencePillars() {
  const reducedMotion = useReducedMotion();
  const sectionVariants = createStaggerVariants(reducedMotion, {
    delayChildren: 0.06,
    staggerChildren: 0.1,
  });
  const itemVariants = createRevealUpVariants(reducedMotion, {
    distance: 36,
    duration: 0.88,
  });

  return (
    <motion.section
      className="mx-auto max-w-[80vw] py-16 lg:px-8"
      initial="hidden"
      variants={sectionVariants}
      viewport={revealViewport}
      whileInView="visible"
    >
      <motion.div className="relative max-w-5xl" variants={itemVariants}>
        <p className="eyebrow-label mb-5 text-brand-950/50">Nuestra esencia</p>
        <h2 className="display-balance bg-gradient-to-br from-brand-950 via-[#183457] to-[#3a5d8c] bg-clip-text font-display text-3xl leading-[0.98] tracking-[-0.045em] text-transparent sm:text-4xl lg:text-5xl">
          Ciencia, experiencia y cercanía
        </h2>
        <p className="mt-5 max-w-4xl text-base leading-8 text-brand-950/70 sm:text-lg">
          Somos un centro de reproducción asistida referente en el bajío que combina ciencia de
          vanguardia, experiencia médica sólida y un modelo de atención centrado en cada paciente,
          no en diagnósticos. Aspiramos a transformar la forma en que se vive la medicina
          reproductiva, integrando innovación tecnológica con un acompañamiento humano cercano,
          ético y altamente especializado.
        </p>
      </motion.div>

      <motion.div className="mt-10 grid gap-5 lg:grid-cols-3" variants={sectionVariants}>
        {PILLARS.map((pillar) => (
          <motion.article
            className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm"
            key={pillar.index}
            variants={itemVariants}
          >
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand-950/0 via-brand-800/30 to-brand-950/0 transition-all duration-500 group-hover:via-brand-800/60" />

            <span className="mb-4 font-display text-[2.8rem] font-medium leading-none tracking-[-0.04em] text-brand-950/8 select-none">
              {pillar.index}
            </span>

            <h3 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
              {pillar.title}
            </h3>

            <div className="mt-3 flex flex-1 flex-col gap-3">
              {pillar.body.map((paragraph) => (
                <p className="text-[0.98rem] leading-7 text-brand-950/68" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}
