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

type HeadingComponentProps = Omit<SectionHeadingProps, "variant">;

/* ─────────────────────────────────────────────────────
   1. Classic — Deeply elevated typography, clean borders
   ───────────────────────────────────────────────────── */
function ClassicHeading({ align, description, eyebrow, tone, title }: HeadingComponentProps) {
  const isCenter = align === "center";
  return (
    <div className={cn("max-w-[850px] relative", isCenter && "mx-auto text-center flex flex-col items-center")}>
      <div className={cn("absolute -left-4 top-2 h-16 w-[2px] rounded-full hidden sm:block",
        isCenter ? "hidden" : "block",
        tone === "light" ? "bg-gradient-to-b from-white to-transparent opacity-30" : "bg-gradient-to-b from-brand-950 to-transparent opacity-10"
      )}
      />
      {eyebrow ? (
        <p
          className={cn(
            "eyebrow-label mb-3 text-brand-700/80",
            tone === "light" ? "text-accent-200/90" : "text-brand-700/80",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "display-balance font-display text-3xl leading-[0.98] tracking-[-0.045em] sm:text-4xl lg:text-5xl",
          tone === "light" ? "text-white" : "text-brand-950",
        )}
      >
        {title}
      </h2>
      {description ? (
        <div className={cn("mt-6", isCenter && "flex justify-center")}>
          <p
            className={cn(
              "text-base leading-8 sm:text-lg",
              isCenter && "max-w-2xl",
              tone === "light" ? "text-white/78" : "text-brand-950/68",
            )}
          >
            {description}
          </p>
        </div>
      ) : null}
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   2. Accent — Gorgeous gradient text and glowing pill
   ───────────────────────────────────────────────────── */
function AccentHeading({ align, description, eyebrow, tone, title }: HeadingComponentProps) {
  const isCenter = align === "center";
  return (
    <div className={cn("max-w-4xl relative", isCenter && "mx-auto text-center flex flex-col items-center")}>
      {eyebrow ? (
        <div
          className={cn(
            "mb-5 inline-flex items-center gap-3 rounded-full px-4 py-1.5 shadow-sm border",
            tone === "light"
              ? "border-white/20 bg-white/10 text-white backdrop-blur-xl"
              : "border-brand-950/10 bg-white/60 text-brand-950 backdrop-blur-md shadow-[0_4px_24px_-4px_rgba(11,31,59,0.08)]",
          )}
        >
          <svg className={cn("h-3.5 w-3.5", tone === "light" ? "text-accent-100" : "text-accent-400")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="eyebrow-label pt-[1px] text-[10px]">{eyebrow}</span>
        </div>
      ) : null}

      <h2
        className={cn(
          "display-balance font-display text-3xl leading-[0.98] tracking-[-0.045em] sm:text-4xl lg:text-5xl",
          tone === "light" ? "text-white" : "bg-clip-text text-transparent bg-gradient-to-br from-brand-950 via-[#183457] to-[#3a5d8c]",
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-8 sm:text-lg",
            isCenter && "mx-auto",
            tone === "light" ? "text-white/72" : "text-brand-950/66",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   3. Editorial — Avant-garde layout, stunning contrast
   ───────────────────────────────────────────────────── */
function EditorialHeading({ align, description, eyebrow, tone, title }: HeadingComponentProps) {
  const isCenter = align === "center";
  return (
    <div className={cn("max-w-5xl", isCenter && "mx-auto text-center")}>
      <div
        className={cn(
          "grid gap-6 sm:grid-cols-[auto_1fr] md:gap-10",
          isCenter && "sm:grid-cols-1 justify-items-center"
        )}
      >
        {/* The towering stripe */}
        {!isCenter ? (
          <div className="relative hidden w-1 sm:block h-full">
            <div className={cn(
              "absolute inset-0 rounded-full",
              tone === "light"
                ? "bg-gradient-to-b from-accent-400/80 via-white/50 to-transparent"
                : "bg-gradient-to-b from-brand-950 via-brand-700/60 to-transparent"
            )} />
            <div className={cn(
              "absolute -left-[5px] top-0 h-3 w-3 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.2)]",
              tone === "light" ? "bg-white" : "bg-brand-950"
            )} />
          </div>
        ) : null}

        <div className={cn(isCenter && "flex flex-col items-center")}>
          {eyebrow ? (
            <p
              className={cn(
                "eyebrow-label mb-4 text-[10px]",
                tone === "light" ? "text-accent-200" : "text-brand-700",
              )}
            >
              {eyebrow}
            </p>
          ) : null}

          <h2
            className={cn(
              "display-balance font-display text-4xl leading-[0.96] tracking-[-0.05em] sm:text-5xl lg:text-6xl",
              tone === "light" ? "text-white" : "text-brand-950",
            )}
            style={{ textShadow: tone === "light" ? "0 4px 40px rgba(0,0,0,0.15)" : "none" }}
          >
            {title}
          </h2>

          {isCenter ? (
            <div className={cn(
              "mx-auto mt-8 h-px w-24 rounded-full",
              tone === "light" ? "bg-white/20" : "bg-brand-950/15"
            )} />
          ) : null}

          {description ? (
            <p
              className={cn(
                "mt-6 text-base leading-8 sm:text-lg",
                isCenter ? "mx-auto max-w-2xl" : "max-w-3xl pr-4 sm:ml-4",
                tone === "light" ? "text-white/82" : "text-brand-950/74",
              )}
            >
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   4. Highlight — Glassmorphic 3D Card
   ───────────────────────────────────────────────────── */
function HighlightHeading({ align, description, eyebrow, tone, title }: HeadingComponentProps) {
  const isCenter = align === "center";
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[3rem] px-8 py-12 sm:px-14 sm:py-16 transition-all duration-700 ease-out hover:shadow-[0_40px_100px_-20px_rgba(11,31,59,0.15)]",
        isCenter && "mx-auto text-center flex flex-col items-center",
        tone === "light"
          ? "border border-white/20 bg-white/5 backdrop-blur-2xl ring-1 ring-white/10"
          : "border border-white/60 bg-white/70 backdrop-blur-3xl shadow-[0_20px_80px_-15px_rgba(11,31,59,0.08)] ring-1 ring-brand-950/5",
      )}
    >
      {/* Interactive/Animated Orbs - using simple CSS animations since no framer-motion */}
      <div className={cn(
        "pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full mix-blend-multiply blur-[80px]",
        tone === "light" ? "bg-accent-200/10" : "bg-accent-100/50"
      )} />
      <div className={cn(
        "pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full mix-blend-multiply blur-[100px]",
        tone === "light" ? "bg-accent-300/15" : "bg-brand-200/50"
      )} />

      {/* Grid Pattern Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTEsMzEsNTksMC4wMykiLz48L3N2Zz4=')] opacity-50" />

      <div className="relative z-10 w-full">
        {eyebrow ? (
          <p
            className={cn(
              "eyebrow-label mb-4",
              tone === "light" ? "text-accent-200 shadow-sm" : "text-brand-700",
            )}
          >
            {eyebrow}
          </p>
        ) : null}

        <h2
          className={cn(
            "display-balance font-display text-3xl leading-[0.98] tracking-[-0.045em] sm:text-4xl lg:text-5xl",
            tone === "light" ? "text-white" : "text-brand-950",
          )}
          style={{ textShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
        >
          {title}
        </h2>

        {description ? (
          <p
            className={cn(
              "mt-5 text-base leading-8 sm:text-lg",
              isCenter && "mx-auto max-w-2xl",
              tone === "light" ? "text-white/78" : "text-brand-950/68",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   5. Minimal — Whisper-quiet, deeply elegant
   ───────────────────────────────────────────────────── */
function MinimalHeading({ align, description, eyebrow, tone, title }: HeadingComponentProps) {
  const isCenter = align === "center";
  return (
    <div className={cn("max-w-3xl", isCenter && "mx-auto text-center")}>
      {eyebrow ? (
        <div className={cn("mb-6 flex items-center gap-4", isCenter && "justify-center")}>
          <div className={cn("h-[1px] w-8", tone === "light" ? "bg-white/30" : "bg-brand-950/20")} />
          <p
            className={cn(
              "eyebrow-label text-[9px]",
              tone === "light" ? "text-white/50" : "text-brand-950/40",
            )}
          >
            {eyebrow}
          </p>
          {isCenter && <div className={cn("h-[1px] w-8", tone === "light" ? "bg-white/30" : "bg-brand-950/20")} />}
        </div>
      ) : null}

      <h2
        className={cn(
          "display-balance font-display text-2xl font-medium leading-[1.02] tracking-[-0.035em] sm:text-3xl lg:text-4xl",
          tone === "light" ? "text-white" : "text-brand-950",
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-4 max-w-xl text-base leading-8",
            isCenter && "mx-auto",
            tone === "light" ? "text-white/56" : "text-brand-950/56",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
