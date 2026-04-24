import { type ReactNode, useRef } from "react";
import { FaFlask, FaHandHoldingHeart, FaUserMd } from "react-icons/fa";

import {
  createRevealUpVariants,
  createStaggerVariants,
  motion,
  revealViewport,
  useParallax,
  useReducedMotion,
} from "~/components/lib/motion";

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
      className="mx-auto grid max-w-[80vw] gap-8 py-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"
      initial="hidden"
      variants={sectionVariants}
      viewport={revealViewport}
      whileInView="visible"
    >
      <motion.div className="rounded-[32px] bg-brand-950 p-8 text-white shadow-[0_22px_60px_rgba(11,31,59,0.18)]" variants={cardVariants}>
        <h2 className="display-balance mt-4 font-display text-4xl leading-[0.96] tracking-[-0.045em]">
          Ciencia, experiencia y cercanía en equilibrio.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-8 text-white/76">
          Estos pilares definen la atención de VIXI: rigor médico, experiencia clínica y un trato humano y cercano en cada etapa.
        </p>
        <motion.div className="mt-8 grid gap-4" variants={sectionVariants}>
          <motion.div className="group flex flex-col rounded-[28px] border border-white/12 bg-white/6 p-6 backdrop-blur-sm transition-all hover:bg-white/10" variants={cardVariants}>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-100/10 text-accent-200 transition-colors group-hover:bg-accent-100/20">
                <FaFlask aria-hidden="true" className="h-5 w-5" />
              </div>
              <p className="font-display text-[1.45rem] font-medium leading-[1.02] tracking-[-0.03em] text-white">
                Ciencia
              </p>
            </div>
            <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-white/78">
              Diagnóstico preciso, protocolos individualizados y respaldo hospitalario.
            </p>
          </motion.div>
          <motion.div className="group flex flex-col rounded-[28px] border border-white/12 bg-white/6 p-6 backdrop-blur-sm transition-all hover:bg-white/10" variants={cardVariants}>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-100/10 text-accent-200 transition-colors group-hover:bg-accent-100/20">
                <FaUserMd aria-hidden="true" className="h-5 w-5" />
              </div>
              <p className="font-display text-[1.45rem] font-medium leading-[1.02] tracking-[-0.03em] text-white">
                Experiencia
              </p>
            </div>
            <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-white/78">
              Equipo con formación en biología de la reproducción humana y cirugía de mínima invasión.
            </p>
          </motion.div>
          <motion.div className="group flex flex-col rounded-[28px] border border-white/12 bg-white/6 p-6 backdrop-blur-sm transition-all hover:bg-white/10" variants={cardVariants}>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-100/10 text-accent-200 transition-colors group-hover:bg-accent-100/20">
                <FaHandHoldingHeart aria-hidden="true" className="h-5 w-5" />
              </div>
              <p className="font-display text-[1.45rem] font-medium leading-[1.02] tracking-[-0.03em] text-white">
                Cercanía
              </p>
            </div>
            <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-white/78">
              Un proceso emocionalmente acompañado, claro y respetuoso en cada etapa.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="grid gap-5" variants={sectionVariants}>
        <motion.article className="flex flex-col rounded-[32px] border border-brand-950/8 bg-white/84 p-8 shadow-[0_18px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm" variants={cardVariants}>
          <p className="eyebrow-label text-brand-700">Diferenciador</p>
          <h3 className="display-balance mt-3 font-display text-[2.2rem] font-medium leading-[0.98] tracking-[-0.04em] text-brand-950">
            Atención especializada dentro de un hospital.
          </h3>
          <p className="mt-5 max-w-3xl flex-1 text-[1.05rem] leading-8 text-brand-950/78">
            VIXI es el único centro de fertilización asistida de la región ubicado dentro de un hospital de prestigio.
          </p>
        </motion.article>

        <PillarImageCard
          className="min-h-[320px]"
          imageAlt="Atención médica especializada con respaldo clínico y trato cercano"
          imageSrc="/pillars/ciencia.avif"
          reducedMotion={reducedMotion}
          variants={cardVariants}
        >
          <h3 className="display-balance mt-3 font-display text-[1.9rem] font-medium leading-[0.98] tracking-[-0.03em] text-white">
            Un modelo de atención que integra laboratorio, consulta y acompañamiento.
          </h3>
          <p className="mt-4 max-w-2xl text-[1rem] leading-7 text-white/84">
            Cada caso se atiende con continuidad entre diagnóstico, decisión médica y seguimiento, para que el proceso sea más claro, coordinado y confiable.
          </p>
        </PillarImageCard>
      </motion.div>
    </motion.section>
  );
}

function PillarImageCard({
  className,
  children,
  imageAlt,
  imageSrc,
  reducedMotion,
  variants,
}: {
  className?: string;
  children: ReactNode;
  imageAlt: string;
  imageSrc: string;
  reducedMotion: boolean;
  variants: ReturnType<typeof createRevealUpVariants>;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const imageY = useParallax(cardRef, reducedMotion ? 0 : 16);

  return (
    <motion.article
      className={`group relative flex min-h-[260px] flex-col justify-end overflow-hidden rounded-[2rem] shadow-[0_18px_50px_rgba(11,31,59,0.12)] transition-all duration-700 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(11,31,59,0.18)] ${className ?? ""}`}
      ref={cardRef}
      variants={variants}
    >
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <motion.img alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" src={imageSrc} />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/40 to-brand-950/10" />
      </motion.div>
      <div className="relative z-10 flex flex-col justify-end p-6 sm:p-7">
        {children}
      </div>
    </motion.article>
  );
}
