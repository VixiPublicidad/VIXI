import {
  AnimatedWords,
  createRevealUpVariants,
  createStaggerVariants,
  motion,
  revealViewport,
  useReducedMotion,
} from "~/components/lib/motion";
import { cn } from "~/components/lib/utils";

type SectionHeadingVariant = "classic" | "accent" | "editorial" | "highlight" | "minimal";

type SectionHeadingProps = {
  align?: "left" | "center";
  description?: string;
  eyebrow?: string;
  tone?: "default" | "light";
  title: string;
  variant?: SectionHeadingVariant;
};

type HeadingComponentProps = Omit<SectionHeadingProps, "variant">;

function useHeadingMotion() {
  const reducedMotion = useReducedMotion();

  return {
    contentVariants: createStaggerVariants(reducedMotion, {
      delayChildren: 0.08,
      staggerChildren: 0.08,
    }),
    itemVariants: createRevealUpVariants(reducedMotion, {
      distance: 24,
      duration: 0.72,
      scale: 1,
    }),
    reducedMotion,
    rootVariants: createRevealUpVariants(reducedMotion, {
      distance: 40,
      duration: 0.86,
    }),
    textVariants: createStaggerVariants(reducedMotion, {
      delayChildren: 0.12,
      staggerChildren: 0.035,
    }),
  };
}

export function SectionHeading({
  align = "left",
  description,
  eyebrow,
  tone = "default",
  title,
  variant = "classic",
}: SectionHeadingProps) {
  const props: HeadingComponentProps = { align, description, eyebrow, tone, title };

  if (variant === "classic") return <ClassicHeading {...props} />;
  if (variant === "accent") return <AccentHeading {...props} />;
  if (variant === "editorial") return <EditorialHeading {...props} />;
  if (variant === "highlight") return <HighlightHeading {...props} />;
  return <MinimalHeading {...props} />;
}

function ClassicHeading({ align, description, eyebrow, tone, title }: HeadingComponentProps) {
  const isCenter = align === "center";
  const { contentVariants, itemVariants, reducedMotion, rootVariants, textVariants } = useHeadingMotion();
  const titleClassName = tone === "light" ? "text-white" : "text-brand-950";
  const descriptionClassName = tone === "light" ? "text-white/78" : "text-brand-950/68";

  return (
    <motion.div
      className={cn("relative max-w-[850px]", isCenter && "mx-auto flex flex-col items-center text-center")}
      initial="hidden"
      variants={rootVariants}
      viewport={revealViewport}
      whileInView="visible"
    >
      <motion.div variants={contentVariants}>
        <div
          className={cn(
            "absolute -left-4 top-2 hidden h-16 w-[2px] rounded-full sm:block",
            isCenter ? "hidden" : "block",
            tone === "light" ? "bg-gradient-to-b from-white to-transparent opacity-30" : "bg-gradient-to-b from-brand-950 to-transparent opacity-10",
          )}
        />
        {eyebrow ? (
          <motion.p
            className={cn(
              "eyebrow-label mb-3 text-brand-700/80",
              tone === "light" ? "text-accent-200/90" : "text-brand-700/80",
            )}
            variants={itemVariants}
          >
            {eyebrow}
          </motion.p>
        ) : null}
        <motion.h2
          className={cn(
            "display-balance font-display text-3xl leading-[0.98] tracking-[-0.045em] sm:text-4xl lg:text-5xl",
            titleClassName,
          )}
          variants={textVariants}
        >
          <AnimatedWords className={titleClassName} reducedMotion={reducedMotion} text={title} />
        </motion.h2>
        {description ? (
          <div className={cn("mt-6", isCenter && "flex justify-center")}>
            <motion.p
              className={cn(
                "text-base leading-8 sm:text-lg",
                isCenter && "max-w-2xl",
                descriptionClassName,
              )}
              variants={textVariants}
            >
              <AnimatedWords className={descriptionClassName} reducedMotion={reducedMotion} text={description} />
            </motion.p>
          </div>
        ) : null}
      </motion.div>
    </motion.div>
  );
}

function AccentHeading({ align, description, eyebrow, tone, title }: HeadingComponentProps) {
  const isCenter = align === "center";
  const { contentVariants, itemVariants, reducedMotion, rootVariants, textVariants } = useHeadingMotion();
  const titleClassName =
    tone === "light"
      ? "text-white"
      : "bg-gradient-to-br from-brand-950 via-[#183457] to-[#3a5d8c] bg-clip-text text-transparent";
  const descriptionClassName = tone === "light" ? "text-white/72" : "text-brand-950/66";

  return (
    <motion.div
      className={cn("relative max-w-4xl", isCenter && "mx-auto flex flex-col items-center text-center")}
      initial="hidden"
      variants={rootVariants}
      viewport={revealViewport}
      whileInView="visible"
    >
      <motion.div variants={contentVariants}>
        {eyebrow ? (
          <motion.div
            className={cn(
              "mb-5 inline-flex items-center gap-3 rounded-full border px-4 py-1.5 shadow-sm",
              tone === "light"
                ? "border-white/20 bg-white/10 text-white backdrop-blur-xl"
                : "border-brand-950/10 bg-white/60 text-brand-950 shadow-[0_4px_24px_-4px_rgba(11,31,59,0.08)] backdrop-blur-md",
            )}
            variants={itemVariants}
          >
            <svg className={cn("h-3.5 w-3.5", tone === "light" ? "text-accent-100" : "text-accent-400")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="eyebrow-label pt-[1px] text-[10px]">{eyebrow}</span>
          </motion.div>
        ) : null}

        <motion.h2
          className="display-balance font-display text-3xl leading-[0.98] tracking-[-0.045em] sm:text-4xl lg:text-5xl"
          variants={textVariants}
        >
          <AnimatedWords className={titleClassName} reducedMotion={reducedMotion} text={title} />
        </motion.h2>

        {description ? (
          <motion.p
            className={cn(
              "mt-5 max-w-2xl text-base leading-8 sm:text-lg",
              isCenter && "mx-auto",
              descriptionClassName,
            )}
            variants={textVariants}
          >
            <AnimatedWords className={descriptionClassName} reducedMotion={reducedMotion} text={description} />
          </motion.p>
        ) : null}
      </motion.div>
    </motion.div>
  );
}

function EditorialHeading({ align, description, eyebrow, tone, title }: HeadingComponentProps) {
  const isCenter = align === "center";
  const { contentVariants, itemVariants, reducedMotion, rootVariants, textVariants } = useHeadingMotion();
  const titleClassName = tone === "light" ? "text-white" : "text-brand-950";
  const descriptionClassName = tone === "light" ? "text-white/82" : "text-brand-950/74";

  return (
    <motion.div
      className={cn("max-w-5xl", isCenter && "mx-auto text-center")}
      initial="hidden"
      variants={rootVariants}
      viewport={revealViewport}
      whileInView="visible"
    >
      <motion.div
        className={cn(
          "grid gap-6 sm:grid-cols-[auto_1fr] md:gap-10",
          isCenter && "justify-items-center sm:grid-cols-1",
        )}
        variants={contentVariants}
      >
        {!isCenter ? (
          <motion.div className="relative hidden h-full w-1 sm:block" variants={itemVariants}>
            <div
              className={cn(
                "absolute inset-0 rounded-full",
                tone === "light"
                  ? "bg-gradient-to-b from-accent-400/80 via-white/50 to-transparent"
                  : "bg-gradient-to-b from-brand-950 via-brand-700/60 to-transparent",
              )}
            />
            <div
              className={cn(
                "absolute -left-[5px] top-0 h-3 w-3 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.2)]",
                tone === "light" ? "bg-white" : "bg-brand-950",
              )}
            />
          </motion.div>
        ) : null}

        <motion.div className={cn(isCenter && "flex flex-col items-center")} variants={contentVariants}>
          {eyebrow ? (
            <motion.p
              className={cn(
                "eyebrow-label mb-4 text-[10px]",
                tone === "light" ? "text-accent-200" : "text-brand-700",
              )}
              variants={itemVariants}
            >
              {eyebrow}
            </motion.p>
          ) : null}

          <motion.h2
            className={cn(
              "display-balance font-display text-4xl leading-[0.96] tracking-[-0.05em] sm:text-5xl lg:text-6xl",
              titleClassName,
            )}
            style={{ textShadow: tone === "light" ? "0 4px 40px rgba(0,0,0,0.15)" : "none" }}
            variants={textVariants}
          >
            <AnimatedWords className={titleClassName} reducedMotion={reducedMotion} text={title} />
          </motion.h2>

          {isCenter ? (
            <motion.div
              className={cn(
                "mx-auto mt-8 h-px w-24 rounded-full",
                tone === "light" ? "bg-white/20" : "bg-brand-950/15",
              )}
              variants={itemVariants}
            />
          ) : null}

          {description ? (
            <motion.p
              className={cn(
                "mt-6 text-base leading-8 sm:text-lg",
                isCenter ? "mx-auto max-w-2xl" : "max-w-3xl pr-4 sm:ml-4",
                descriptionClassName,
              )}
              variants={textVariants}
            >
              <AnimatedWords className={descriptionClassName} reducedMotion={reducedMotion} text={description} />
            </motion.p>
          ) : null}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function HighlightHeading({ align, description, eyebrow, tone, title }: HeadingComponentProps) {
  const isCenter = align === "center";
  const { contentVariants, itemVariants, reducedMotion, rootVariants, textVariants } = useHeadingMotion();
  const titleClassName = tone === "light" ? "text-white" : "text-brand-950";
  const descriptionClassName = tone === "light" ? "text-white/78" : "text-brand-950/68";

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-[3rem] px-8 py-12 transition-all duration-700 ease-out hover:shadow-[0_40px_100px_-20px_rgba(11,31,59,0.15)] sm:px-14 sm:py-16",
        isCenter && "mx-auto flex flex-col items-center text-center",
        tone === "light"
          ? "border border-white/20 bg-white/5 backdrop-blur-2xl ring-1 ring-white/10"
          : "border border-white/60 bg-white/70 shadow-[0_20px_80px_-15px_rgba(11,31,59,0.08)] ring-1 ring-brand-950/5 backdrop-blur-3xl",
      )}
      initial="hidden"
      variants={rootVariants}
      viewport={revealViewport}
      whileInView="visible"
    >
      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                rotate: [0, -4, 2, 0],
                scale: [1, 1.05, 1],
                x: [0, -12, 4, 0],
                y: [0, 10, -4, 0],
              }
        }
        className={cn(
          "pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full mix-blend-multiply blur-[80px]",
          tone === "light" ? "bg-accent-200/10" : "bg-accent-100/50",
        )}
        transition={{ duration: 14, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                rotate: [0, 3, -2, 0],
                scale: [1, 1.04, 1],
                x: [0, 10, -6, 0],
                y: [0, -8, 6, 0],
              }
        }
        className={cn(
          "pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full mix-blend-multiply blur-[100px]",
          tone === "light" ? "bg-accent-300/15" : "bg-brand-200/50",
        )}
        transition={{ duration: 16, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTEsMzEsNTksMC4wMykiLz48L3N2Zz4=')] opacity-50" />

      <motion.div className="relative z-10 w-full" variants={contentVariants}>
        {eyebrow ? (
          <motion.p
            className={cn(
              "eyebrow-label mb-4",
              tone === "light" ? "text-accent-200 shadow-sm" : "text-brand-700",
            )}
            variants={itemVariants}
          >
            {eyebrow}
          </motion.p>
        ) : null}

        <motion.h2
          className={cn(
            "display-balance font-display text-3xl leading-[0.98] tracking-[-0.045em] sm:text-4xl lg:text-5xl",
            titleClassName,
          )}
          style={{ textShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
          variants={textVariants}
        >
          <AnimatedWords className={titleClassName} reducedMotion={reducedMotion} text={title} />
        </motion.h2>

        {description ? (
          <motion.p
              className={cn(
                "mt-5 text-base leading-8 sm:text-lg",
                isCenter && "mx-auto max-w-2xl",
                descriptionClassName,
              )}
              variants={textVariants}
            >
              <AnimatedWords className={descriptionClassName} reducedMotion={reducedMotion} text={description} />
            </motion.p>
          ) : null}
      </motion.div>
    </motion.div>
  );
}

function MinimalHeading({ align, description, eyebrow, tone, title }: HeadingComponentProps) {
  const isCenter = align === "center";
  const { contentVariants, itemVariants, reducedMotion, rootVariants, textVariants } = useHeadingMotion();
  const titleClassName = tone === "light" ? "text-white" : "text-brand-950";
  const descriptionClassName = tone === "light" ? "text-white/56" : "text-brand-950/56";

  return (
    <motion.div
      className={cn("max-w-3xl", isCenter && "mx-auto text-center")}
      initial="hidden"
      variants={rootVariants}
      viewport={revealViewport}
      whileInView="visible"
    >
      <motion.div variants={contentVariants}>
        {eyebrow ? (
          <motion.div className={cn("mb-6 flex items-center gap-4", isCenter && "justify-center")} variants={itemVariants}>
            <div className={cn("h-[1px] w-8", tone === "light" ? "bg-white/30" : "bg-brand-950/20")} />
            <p
              className={cn(
                "eyebrow-label text-[9px]",
                tone === "light" ? "text-white/50" : "text-brand-950/40",
              )}
            >
              {eyebrow}
            </p>
            {isCenter ? <div className={cn("h-[1px] w-8", tone === "light" ? "bg-white/30" : "bg-brand-950/20")} /> : null}
          </motion.div>
        ) : null}

        <motion.h2
          className={cn(
            "display-balance font-display text-2xl font-medium leading-[1.02] tracking-[-0.035em] sm:text-3xl lg:text-4xl",
            titleClassName,
          )}
          variants={textVariants}
        >
          <AnimatedWords className={titleClassName} reducedMotion={reducedMotion} text={title} />
        </motion.h2>

        {description ? (
          <motion.p
              className={cn(
                "mt-4 max-w-xl text-base leading-8",
                isCenter && "mx-auto",
                descriptionClassName,
              )}
              variants={textVariants}
            >
              <AnimatedWords className={descriptionClassName} reducedMotion={reducedMotion} text={description} />
            </motion.p>
          ) : null}
      </motion.div>
    </motion.div>
  );
}
