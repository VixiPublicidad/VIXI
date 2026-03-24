import { useRef } from "react";

import { galleryImages, valueProposition } from "~/components/data";
import {
  createRevealUpVariants,
  createStaggerVariants,
  motion,
  revealViewport,
  useParallax,
  useReducedMotion,
} from "~/components/lib/motion";
import { SectionHeading } from "~/components/ui/section-heading";

export function HomeValueProposition() {
  const reducedMotion = useReducedMotion();
  const gridVariants = createStaggerVariants(reducedMotion, {
    delayChildren: 0.08,
    staggerChildren: 0.1,
  });
  const cardVariants = createRevealUpVariants(reducedMotion, {
    distance: 46,
    duration: 0.9,
  });

  return (
    <section className="mx-auto max-w-[80vw] py-16 sm:px-6 lg:px-8">
      <SectionHeading
        description="Fertilización asistida, enfoque personalizado, tecnología avanzada y tratamientos de alta y baja complejidad."
        eyebrow="Propuesta de valor"
        title="Tres razones por las que VIXI se siente distinta desde la primera consulta"
        variant="accent"
      />
      <motion.div
        className="mt-8 grid gap-5 lg:grid-cols-3"
        initial="hidden"
        variants={gridVariants}
        viewport={revealViewport}
        whileInView="visible"
      >
        {valueProposition.map((item, index) => (
          <ValueCard
            key={item.title}
            description={item.description}
            imageAlt={galleryImages[index]?.alt ?? ""}
            imageSrc={galleryImages[index]?.src ?? ""}
            reducedMotion={reducedMotion}
            title={item.title}
            variants={cardVariants}
          />
        ))}
      </motion.div>
    </section>
  );
}

function ValueCard({
  description,
  imageAlt,
  imageSrc,
  reducedMotion,
  title,
  variants,
}: {
  description: string;
  imageAlt: string;
  imageSrc: string;
  reducedMotion: boolean;
  title: string;
  variants: ReturnType<typeof createRevealUpVariants>;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const imageY = useParallax(cardRef, reducedMotion ? 0 : 20);

  return (
    <motion.article
      className="group relative flex min-h-[500px] flex-col justify-end overflow-hidden rounded-[2rem] shadow-[0_18px_50px_rgba(11,31,59,0.12)] transition-all duration-700 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(11,31,59,0.18)]"
      ref={cardRef}
      variants={variants}
    >
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <motion.img
          alt={imageAlt}
          animate={reducedMotion ? undefined : { scale: [1.02, 1.06, 1.02] }}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105"
          loading="lazy"
          src={imageSrc}
          transition={{ duration: 12, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/40 to-brand-950/10" />
      </motion.div>
      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                rotate: [0, -1.4, 1.2, 0],
                y: [0, -6, 0],
              }
        }
        className="relative z-10 p-7 sm:p-8"
        transition={{ duration: 7, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      >
        <p className="eyebrow-label text-accent-200">VIXI</p>
        <h3 className="mt-3 font-display text-[1.65rem] font-medium leading-tight text-white sm:text-[1.8rem]">
          {title}
        </h3>
        <p className="mt-4 max-w-md text-[0.98rem] leading-7 text-white/80">
          {description}
        </p>
      </motion.div>
    </motion.article>
  );
}
