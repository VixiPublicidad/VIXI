import type { ReactNode } from "react";
import { useRef } from "react";

import {
  AnimatedChars,
  AnimatedWords,
  createRevealUpVariants,
  createStaggerVariants,
  motion,
  revealViewport,
  useParallax,
  useReducedMotion,
} from "~/components/lib/motion";
import { ButtonLink } from "~/components/ui/button-link";

type HeroAction = {
  label: ReactNode;
  to: string;
  external?: boolean;
};

type HeroStat = {
  value: string;
  label: string;
};

type HeroVariant = "signature" | "editorial" | "gallery" | "process" | "concierge";
type HeroHeight = "screen" | "80vh" | "70vh" | "60vh";

type PageHeroProps = {
  actions?: HeroAction[];
  contentAlignY?: "center" | "end";
  description: string;
  height?: HeroHeight;
  image: {
    alt: string;
    src: string;
    width?: number;
    height?: number;
  };
  imageBadge?: string;
  imageCaption?: string;
  eyebrow: string;
  stats?: HeroStat[];
  subtitle?: string;
  title: string;
  variant?: HeroVariant;
};

type HeroComponentProps = Omit<PageHeroProps, "variant" | "imageBadge" | "imageCaption" | "height"> & {
  badge: string;
  caption: string;
  heightClass: string;
};

const heroVariantCopy: Record<HeroVariant, { badge: string; caption: string }> = {
  signature: {
    badge: "Ciencia, experiencia y cercanía",
    caption: "Fertilidad asistida con tecnología avanzada, trato cálido y acompañamiento personalizado.",
  },
  editorial: {
    badge: "Base médica sólida",
    caption: "Información clara para explicar especialidad, trayectoria y decisiones médicas con confianza.",
  },
  gallery: {
    badge: "Experiencia VIXI",
    caption: "Un entorno moderno, sereno y acogedor para vivir cada etapa con más tranquilidad.",
  },
  process: {
    badge: "Ruta clara",
    caption: "Cada etapa del tratamiento se explica con claridad, contexto clínico y acompañamiento cercano.",
  },
  concierge: {
    badge: "Acompañamiento coordinado",
    caption: "Contacto directo, consulta en línea y orientación cercana para facilitar cada siguiente paso.",
  },
};

const heroVariantHeight: Record<HeroVariant, HeroHeight> = {
  signature: "screen",
  editorial: "70vh",
  gallery: "80vh",
  process: "80vh",
  concierge: "70vh",
};

const heroHeightClass: Record<HeroHeight, string> = {
  screen: "min-h-screen",
  "80vh": "min-h-[80vh]",
  "70vh": "min-h-[70vh]",
  "60vh": "min-h-[60vh]",
};

function useHeroMotion() {
  const reducedMotion = useReducedMotion();

  return {
    actionVariants: createStaggerVariants(reducedMotion, {
      delayChildren: 0.1,
      staggerChildren: 0.08,
    }),
    contentVariants: createStaggerVariants(reducedMotion, {
      delayChildren: 0.08,
      staggerChildren: 0.08,
    }),
    itemVariants: createRevealUpVariants(reducedMotion, {
      distance: 26,
      duration: 0.76,
      scale: 1,
    }),
    reducedMotion,
    rootVariants: createRevealUpVariants(reducedMotion, {
      distance: 46,
      duration: 0.92,
      scale: 1,
    }),
    textVariants: createStaggerVariants(reducedMotion, {
      delayChildren: 0.18,
      staggerChildren: 0.065,
    }),
  };
}

function HeroMedia({
  className,
  image,
  overlay,
  reducedMotion,
  sectionRef,
}: {
  className?: string;
  image: HeroComponentProps["image"];
  overlay: ReactNode;
  reducedMotion: boolean;
  sectionRef: React.RefObject<HTMLElement | null>;
}) {
  const imageY = useParallax(sectionRef, reducedMotion ? 0 : 26);

  return (
    <div className={className}>
      <motion.div className="h-full w-full overflow-hidden [transform:translateZ(0)]" style={{ y: imageY }}>
        <motion.img
          alt={image.alt}
          animate={reducedMotion ? undefined : { scale: [1.03, 1.08, 1.03] }}
          className="h-full w-full object-cover will-change-transform [backface-visibility:hidden] [transform:translateZ(0)]"
          decoding="async"
          fetchPriority="high"
          height={image.height}
          loading="eager"
          src={image.src}
          transition={{ duration: 15, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
          width={image.width}
        />
      </motion.div>
      {overlay}
    </div>
  );
}

function HeroAmbientOrb({
  className,
  reducedMotion,
  variant = "a",
}: {
  className: string;
  reducedMotion: boolean;
  variant?: "a" | "b";
}) {
  const animate =
    reducedMotion
      ? undefined
      : variant === "a"
        ? {
            rotate: [0, -4, 3, 0],
            scale: [1, 1.08, 1],
            x: [0, -18, 8, 0],
            y: [0, 16, -6, 0],
          }
        : {
            rotate: [0, 3, -2, 0],
            scale: [1, 1.05, 1],
            x: [0, 14, -10, 0],
            y: [0, -12, 10, 0],
          };

  return (
    <motion.div
      animate={animate}
      className={className}
      transition={{ duration: variant === "a" ? 18 : 16, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
    />
  );
}

function HeroActions({
  actions,
  variants,
}: {
  actions?: HeroAction[];
  variants: ReturnType<typeof useHeroMotion>;
}) {
  if (!actions?.length) return null;

  return (
    <motion.div
      className="flex w-full max-w-sm flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-stretch"
      variants={variants.actionVariants}
    >
      {actions.map((action, index) => (
        <motion.div key={action.to} className="w-full sm:w-auto" variants={variants.itemVariants}>
          <ButtonLink
            className="flex w-full justify-center sm:w-auto"
            external={action.external}
            to={action.to}
            variant={index === 0 ? "primary" : "secondary"}
          >
            {action.label}
          </ButtonLink>
        </motion.div>
      ))}
    </motion.div>
  );
}

function HeroAnimatedWords({
  className,
  text,
  variants,
}: {
  className: string;
  text: string;
  variants: ReturnType<typeof useHeroMotion>;
}) {
  return (
    <motion.span className="block" variants={variants.textVariants}>
      <AnimatedWords className={className} reducedMotion={variants.reducedMotion} text={text} />
    </motion.span>
  );
}

function HeroStats({
  className,
  stats,
  variants,
  valueClassName,
  labelClassName,
  itemClassName,
  valueTextClassName,
}: {
  className: string;
  stats?: HeroStat[];
  variants: ReturnType<typeof useHeroMotion>;
  valueClassName: string;
  labelClassName: string;
  itemClassName?: string;
  valueTextClassName?: string;
}) {
  if (!stats?.length) return null;

  return (
    <motion.div className={className} variants={variants.contentVariants}>
      {stats.map((stat) => (
        <motion.div key={stat.label} className={itemClassName} variants={variants.itemVariants}>
          <p className={valueClassName}>
            <AnimatedChars
              className={valueTextClassName ?? valueClassName}
              reducedMotion={variants.reducedMotion}
              text={stat.value}
            />
          </p>
          <p className={labelClassName}>{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export function PageHero({
  actions,
  contentAlignY = "end",
  description,
  eyebrow,
  height,
  image,
  imageBadge,
  imageCaption,
  stats,
  subtitle,
  title,
  variant = "signature",
}: PageHeroProps) {
  const heroCopy = heroVariantCopy[variant];
  const badge = imageBadge ?? heroCopy.badge;
  const caption = imageCaption ?? heroCopy.caption;
  const heightClass = heroHeightClass[height ?? heroVariantHeight[variant]];
  const props: HeroComponentProps = { actions, badge, caption, contentAlignY, description, eyebrow, heightClass, image, stats, subtitle, title };

  if (variant === "signature") return <SignatureHero {...props} />;
  if (variant === "editorial") return <EditorialHero {...props} />;
  if (variant === "gallery") return <GalleryHero {...props} />;
  if (variant === "process") return <ProcessHero {...props} />;
  return <ConciergeHero {...props} />;
}

function SignatureHero({ actions, badge, caption, description, eyebrow, heightClass, image, stats, subtitle, title }: HeroComponentProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const variants = useHeroMotion();

  return (
    <motion.section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      initial="hidden"
      variants={variants.rootVariants}
      viewport={revealViewport}
      whileInView="visible"
    >
      <HeroMedia
        className="absolute inset-0 z-0"
        image={image}
        overlay={
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-950/75 via-brand-950/40 to-brand-950/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-brand-950/20" />
          </>
        }
        reducedMotion={variants.reducedMotion}
        sectionRef={sectionRef}
      />

      <HeroAmbientOrb className="pointer-events-none absolute -left-40 top-1/2 -z-0 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-accent-400/10 blur-[120px]" reducedMotion={variants.reducedMotion} />
      <HeroAmbientOrb className="pointer-events-none absolute bottom-0 right-0 -z-0 h-[400px] w-[400px] rounded-full bg-brand-200/10 blur-[100px]" reducedMotion={variants.reducedMotion} variant="b" />

      <motion.div className={`relative z-10 mx-auto flex ${heightClass} max-w-[1440px] flex-col justify-end px-6 pb-16 pt-28 sm:px-10 lg:px-16 lg:pb-20`} variants={variants.contentVariants}>
        <div className="max-w-3xl pb-10">
          <motion.p className="eyebrow-label mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-white backdrop-blur-md" variants={variants.itemVariants}>
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-400" />
            {eyebrow}
          </motion.p>

          <motion.h1 className="display-balance font-display text-[2.7rem] leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl lg:text-[4.9rem]" variants={variants.itemVariants}>
            <HeroAnimatedWords className="text-white" text={title} variants={variants} />
          </motion.h1>

          {subtitle ? (
            <motion.p className="display-balance mt-3 font-display text-[1.4rem] leading-[1.12] tracking-[-0.035em] text-white/85 sm:text-2xl lg:text-[2.2rem] xl:text-[2.6rem]" variants={variants.itemVariants}>
              <HeroAnimatedWords className="text-white/85" text={subtitle} variants={variants} />
            </motion.p>
          ) : null}

          <motion.p className="mt-6 max-w-2xl text-[1.05rem] leading-8 text-white/78 sm:text-[1.15rem]" variants={variants.itemVariants}>
            <HeroAnimatedWords className="text-white/78" text={description} variants={variants} />
          </motion.p>

          <motion.div className="mt-10 flex justify-center sm:justify-start" variants={variants.actionVariants}>
            <HeroActions actions={actions} variants={variants} />
          </motion.div>
        </div>

        <HeroStats
          className="mt-16 grid grid-cols-2 gap-x-10 gap-y-6 border-t border-white/15 pt-8 sm:grid-cols-3 lg:max-w-3xl"
          labelClassName="eyebrow-label mt-2 text-white/50"
          stats={stats}
          valueClassName="font-display text-3xl tracking-[-0.04em] text-white"
          valueTextClassName="text-white"
          variants={variants}
        />

        <motion.div className="absolute bottom-20 right-10 z-20 hidden max-w-xs rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl transition-all hover:bg-white/15 lg:block" variants={variants.itemVariants}>
          <p className="eyebrow-label text-[10px] text-accent-200">{badge}</p>
          <p className="mt-2 text-sm leading-7 text-white/80">{caption}</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

function EditorialHero({ actions, badge, caption, description, eyebrow, heightClass, image, stats, title }: HeroComponentProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const variants = useHeroMotion();

  return (
    <motion.section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      initial="hidden"
      variants={variants.rootVariants}
      viewport={revealViewport}
      whileInView="visible"
    >
      <HeroMedia
        className="absolute inset-0 z-0"
        image={image}
        overlay={<div className="absolute inset-0 bg-gradient-to-r from-[#fafaf9]/98 via-[#fafaf9]/85 to-[#fafaf9]/40" />}
        reducedMotion={variants.reducedMotion}
        sectionRef={sectionRef}
      />

      <div className="absolute bottom-0 left-0 top-0 z-10 w-1 bg-brand-950" />

      <motion.div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16" variants={variants.contentVariants}>
        <div className={`grid ${heightClass} items-end gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28`}>
          <motion.div className="flex flex-col justify-end" variants={variants.contentVariants}>
            <motion.p className="eyebrow-label mb-4 text-brand-950/50" variants={variants.itemVariants}>{eyebrow}</motion.p>
            <motion.h1 className="display-balance font-display text-4xl leading-[0.94] tracking-[-0.05em] text-brand-950 sm:text-5xl lg:text-[4.5rem]" variants={variants.itemVariants}>
              <HeroAnimatedWords className="text-brand-950" text={title} variants={variants} />
            </motion.h1>
            <motion.div className="mt-8 h-px w-24 bg-brand-950/20" variants={variants.itemVariants} />
            <motion.p className="mt-6 max-w-xl text-[1.05rem] leading-8 text-brand-950/72" variants={variants.itemVariants}>
              <HeroAnimatedWords className="text-brand-950/72" text={description} variants={variants} />
            </motion.p>

            <motion.div className="mt-10 flex justify-center sm:justify-start" variants={variants.actionVariants}>
              <HeroActions actions={actions} variants={variants} />
            </motion.div>
          </motion.div>

          <motion.div className="flex flex-col items-start gap-8 lg:items-end lg:text-right" variants={variants.contentVariants}>
            <HeroStats
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1"
              itemClassName="border-l-2 border-brand-950/15 pl-4 lg:border-l-0 lg:border-r-2 lg:pl-0 lg:pr-4"
              labelClassName="eyebrow-label mt-1 text-brand-950/55"
              stats={stats}
              valueClassName="font-display text-2xl tracking-[-0.035em] text-brand-950"
              valueTextClassName="text-brand-950"
              variants={variants}
            />

            <motion.div className="rounded-2xl border border-brand-950/8 bg-white/60 p-5 backdrop-blur-md lg:max-w-xs lg:text-left" variants={variants.itemVariants}>
              <p className="eyebrow-label text-[10px] text-brand-700">{badge}</p>
              <p className="mt-2 text-sm leading-7 text-brand-950/70">{caption}</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

function GalleryHero({ actions, badge, caption, contentAlignY, description, eyebrow, heightClass, image, stats, title }: HeroComponentProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const variants = useHeroMotion();

  return (
    <motion.section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      initial="hidden"
      variants={variants.rootVariants}
      viewport={revealViewport}
      whileInView="visible"
    >
      <HeroMedia
        className="absolute inset-0 z-0"
        image={image}
        overlay={
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-[#faf7f2]/88 via-[#faf7f2]/38 to-brand-950/12" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/30" />
          </>
        }
        reducedMotion={variants.reducedMotion}
        sectionRef={sectionRef}
      />

      <motion.div className={`relative z-10 mx-auto flex ${heightClass} max-w-[1440px] flex-col ${contentAlignY === "center" ? "justify-center" : "justify-end"} px-6 pb-14 pt-28 sm:px-10 lg:px-16 lg:pb-20`} variants={variants.contentVariants}>
        <div className="max-w-3xl">
          <motion.p className="eyebrow-label inline-flex items-center gap-2 rounded-full border border-white/55 bg-white/18 px-4 py-2 text-brand-800 backdrop-blur-md" variants={variants.itemVariants}>
            <span className="h-2 w-2 rounded-full bg-accent-300" />
            {eyebrow}
          </motion.p>

          <motion.h1 className="display-balance mt-6 font-display text-4xl leading-[0.95] tracking-[-0.05em] text-brand-950 sm:text-5xl lg:text-[4.6rem]" variants={variants.itemVariants}>
            <HeroAnimatedWords className="text-brand-950" text={title} variants={variants} />
          </motion.h1>
          <motion.div className="mt-7 h-px w-24 bg-brand-950/16" variants={variants.itemVariants} />
          <motion.p className="mt-7 max-w-2xl text-[1.05rem] leading-8 text-brand-950/66 sm:text-[1.15rem]" variants={variants.itemVariants}>
            <HeroAnimatedWords className="text-brand-950/66" text={description} variants={variants} />
          </motion.p>

          <motion.div className="mt-8 flex justify-center sm:justify-start" variants={variants.actionVariants}>
            <HeroActions actions={actions} variants={variants} />
          </motion.div>
        </div>

        <HeroStats
          className="mt-12 flex flex-wrap gap-4 border-t border-brand-950/10 pt-8 lg:max-w-3xl"
          itemClassName="rounded-xl border border-white/20 bg-white/12 px-5 py-4 backdrop-blur-xl"
          labelClassName="eyebrow-label mt-1.5 text-brand-950/45"
          stats={stats}
          valueClassName="font-display text-[1.7rem] tracking-[-0.04em] text-brand-950"
          valueTextClassName="text-brand-950"
          variants={variants}
        />

        <motion.div className="absolute bottom-20 right-10 z-20 hidden max-w-xs rounded-2xl border border-brand-950/8 bg-white/60 p-5 backdrop-blur-xl lg:block" variants={variants.itemVariants}>
          <p className="eyebrow-label text-[10px] text-brand-700">{badge}</p>
          <p className="mt-2 text-sm leading-7 text-brand-950/62">{caption}</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

function ProcessHero({ actions, badge, caption, contentAlignY, description, eyebrow, heightClass, image, stats, title }: HeroComponentProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const variants = useHeroMotion();

  return (
    <motion.section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      initial="hidden"
      variants={variants.rootVariants}
      viewport={revealViewport}
      whileInView="visible"
    >
      <HeroMedia
        className="absolute inset-0 z-0"
        image={image}
        overlay={
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-950/20 to-brand-950/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-brand-950/30 to-brand-950/50" />
          </>
        }
        reducedMotion={variants.reducedMotion}
        sectionRef={sectionRef}
      />

      <HeroAmbientOrb className="pointer-events-none absolute -left-32 top-1/3 z-[1] h-[500px] w-[500px] rounded-full bg-brand-700/20 blur-[120px]" reducedMotion={variants.reducedMotion} />
      <HeroAmbientOrb className="pointer-events-none absolute -right-20 bottom-0 z-[1] h-[400px] w-[400px] rounded-full bg-accent-400/10 blur-[100px]" reducedMotion={variants.reducedMotion} variant="b" />

      <motion.div className={`relative z-10 mx-auto flex ${heightClass} max-w-[1440px] flex-col ${contentAlignY === "center" ? "justify-center" : "justify-end"} px-6 pb-14 pt-40 sm:px-10 lg:px-16 lg:pb-20`} variants={variants.contentVariants}>
        <motion.p className="eyebrow-label mb-4 text-accent-200/80" variants={variants.itemVariants}>{eyebrow}</motion.p>
        <motion.h1 className="display-balance max-w-3xl font-display text-4xl leading-[0.98] tracking-[-0.05em] text-white [text-shadow:0_2px_30px_rgba(0,0,0,0.4)] sm:text-5xl lg:text-[4.5rem]" variants={variants.itemVariants}>
          <HeroAnimatedWords className="text-white" text={title} variants={variants} />
        </motion.h1>
        <motion.p className="mt-5 max-w-2xl text-[1.05rem] leading-8 text-white/68" variants={variants.itemVariants}>
          <HeroAnimatedWords className="text-white/68" text={description} variants={variants} />
        </motion.p>

        <motion.div className="mt-8 flex justify-center sm:justify-start" variants={variants.actionVariants}>
          <HeroActions actions={actions} variants={variants} />
        </motion.div>

        <HeroStats
          className="mt-12 flex flex-wrap gap-10 border-t border-white/10 pt-7"
          labelClassName="eyebrow-label text-white/40"
          stats={stats}
          valueClassName="font-display text-xl tracking-[-0.03em] text-white"
          valueTextClassName="text-white"
          variants={variants}
        />

        <motion.p className="mt-8 max-w-sm text-xs leading-relaxed text-white/35" variants={variants.itemVariants}>
          <span className="eyebrow-label text-[10px] text-accent-200/60">{badge}</span>
          {" - "}
          {caption}
        </motion.p>
      </motion.div>
    </motion.section>
  );
}

function ConciergeHero({ actions, badge, caption, description, eyebrow, heightClass, image, stats, title }: HeroComponentProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const variants = useHeroMotion();

  return (
    <motion.section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      initial="hidden"
      variants={variants.rootVariants}
      viewport={revealViewport}
      whileInView="visible"
    >
      <HeroMedia
        className="absolute inset-0 z-0"
        image={image}
        overlay={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/50 to-white/20" />
            <div className="absolute inset-0 bg-accent-100/20" />
          </>
        }
        reducedMotion={variants.reducedMotion}
        sectionRef={sectionRef}
      />

      <HeroAmbientOrb className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-accent-200/30 blur-[100px]" reducedMotion={variants.reducedMotion} />

      <motion.div className={`relative z-10 mx-auto flex ${heightClass} max-w-[1440px] flex-col items-center justify-center px-6 py-24 text-center sm:px-10 lg:px-16`} variants={variants.contentVariants}>
        <motion.p className="eyebrow-label mb-6 text-brand-700/70" variants={variants.itemVariants}>{eyebrow}</motion.p>
        <motion.h1 className="display-balance max-w-4xl font-display text-4xl leading-[0.98] tracking-[-0.05em] text-brand-950 sm:text-5xl lg:text-[5rem]" variants={variants.itemVariants}>
          <HeroAnimatedWords className="text-brand-950" text={title} variants={variants} />
        </motion.h1>
        <motion.p className="mx-auto mt-6 max-w-2xl text-[1.05rem] leading-8 text-brand-950/64 sm:text-[1.15rem]" variants={variants.itemVariants}>
          <HeroAnimatedWords className="text-brand-950/64" text={description} variants={variants} />
        </motion.p>

        <motion.div className="mt-10 flex justify-center" variants={variants.actionVariants}>
          <HeroActions actions={actions} variants={variants} />
        </motion.div>

        <HeroStats
          className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-14"
          itemClassName="flex flex-col items-center"
          labelClassName="eyebrow-label mt-2 text-brand-950/45"
          stats={stats}
          valueClassName="font-display text-3xl tracking-[-0.04em] text-brand-950"
          valueTextClassName="text-brand-950"
          variants={variants}
        />

        <motion.div className="mt-12 rounded-2xl border border-brand-950/8 bg-white/60 px-6 py-4 backdrop-blur-xl" variants={variants.itemVariants}>
          <p className="eyebrow-label text-[10px] text-brand-700">{badge}</p>
          <p className="mt-1 text-sm leading-7 text-brand-950/60">{caption}</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
