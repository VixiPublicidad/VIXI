import { useRef } from "react";

import {
  createRevealUpVariants,
  createStaggerVariants,
  motion,
  revealViewport,
  useParallax,
  useReducedMotion,
} from "~/components/lib/motion";

const PILLARS = [
  {
    alt: "Microscopio clínico de laboratorio de reproducción asistida.",
    imageSrc: "/pillars/microscopio.png",
    title: "Tecnología de vanguardia que mejora tus probabilidades",
    body: [
      "Integramos herramientas y técnicas de última generación en cada etapa del tratamiento, desde el diagnóstico hasta los procedimientos más avanzados de reproducción asistida.",
      "Esto nos permite ofrecerte mayor precisión, mejores tasas de éxito y un control clínico superior, brindándote la tranquilidad de estar en manos de un centro que trabaja con estándares internacionales.",
    ],
  },
  {
    alt: "Blastos observados en laboratorio especializado.",
    imageSrc: "/pillars/blastos.png",
    title: "Tratamientos diseñados exclusivamente para ti",
    body: [
      "Sabemos que cada pareja tiene una historia y un diagnóstico diferente. Por eso, desarrollamos protocolos completamente personalizados, basados en una evaluación integral de ambos.",
      "Nuestro enfoque va más allá de lo convencional: analizamos cada detalle para ofrecerte la estrategia más adecuada, eficiente y segura, evitando tratamientos innecesarios y optimizando resultados.",
    ],
  },
  {
    alt: "Área hospitalaria preparada para atención médica especializada.",
    imageSrc: "/pillars/hospital.jpg",
    title: "Seguridad hospitalaria que marca la diferencia",
    body: [
      "Somos el único centro de reproducción asistida ubicado dentro de un hospital, lo que nos permite ofrecerte un nivel de seguridad y respaldo que pocos pueden igualar.",
      "Contamos con acceso inmediato a quirófanos, banco de sangre y todas las especialidades médicas, garantizando una atención integral en un entorno seguro, regulado y preparado para cualquier situación.",
    ],
  },
] as const;

export function HomePillars() {
  const reducedMotion = useReducedMotion();
  const sectionVariants = createStaggerVariants(reducedMotion, {
    delayChildren: 0.06,
    staggerChildren: 0.1,
  });
  const cardVariants = createRevealUpVariants(reducedMotion, {
    distance: 44,
    duration: 0.9,
  });

  return (
    <motion.section
      className="mx-auto max-w-[80vw] py-16 lg:px-8"
      initial="hidden"
      variants={sectionVariants}
      viewport={revealViewport}
      whileInView="visible"
    >
      <motion.div className="max-w-4xl" variants={cardVariants}>
        <h2 className="display-balance font-display text-4xl leading-[0.96] tracking-[-0.045em] text-brand-950 sm:text-5xl">
          ¿Por qué somos diferentes?
        </h2>
      </motion.div>

      <motion.div className="mt-8 grid gap-6" variants={sectionVariants}>
        {PILLARS.map((pillar) => (
          <PillarCard
            body={pillar.body}
            imageAlt={pillar.alt}
            imageSrc={pillar.imageSrc}
            key={pillar.title}
            reducedMotion={reducedMotion}
            title={pillar.title}
            variants={cardVariants}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}

function PillarCard({
  body,
  imageAlt,
  imageSrc,
  reducedMotion,
  title,
  variants,
}: {
  body: readonly string[];
  imageAlt: string;
  imageSrc: string;
  reducedMotion: boolean;
  title: string;
  variants: ReturnType<typeof createRevealUpVariants>;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const imageY = useParallax(cardRef, reducedMotion ? 0 : 14);

  return (
    <motion.article
      className="overflow-hidden rounded-[32px] border border-brand-950/8 bg-white/88 shadow-[0_18px_50px_rgba(11,31,59,0.08)] backdrop-blur-sm"
      ref={cardRef}
      variants={variants}
    >
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-center p-7 sm:p-8 lg:p-10">
          <h3 className="display-balance font-display text-[1.9rem] font-medium leading-[0.98] tracking-[-0.035em] text-brand-950 sm:text-[2.2rem]">
            {title}
          </h3>
          {body.map((paragraph) => (
            <p className="mt-4 text-[0.99rem] leading-7 text-brand-950/72" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
        <motion.div className="relative min-h-[280px] overflow-hidden bg-brand-950/5" style={{ y: imageY }}>
          <img alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" src={imageSrc} />
        </motion.div>
      </div>
    </motion.article>
  );
}
