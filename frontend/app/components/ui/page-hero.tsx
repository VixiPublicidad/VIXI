import type { ReactNode } from "react";

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
  description: string;
  height?: HeroHeight;
  image: {
    alt: string;
    src: string;
  };
  imageBadge?: string;
  imageCaption?: string;
  eyebrow: string;
  stats?: HeroStat[];
  subtitle?: string;
  title: string;
  variant?: HeroVariant;
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

export function PageHero({
  actions,
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

  const props: HeroComponentProps = { actions, badge, caption, description, eyebrow, heightClass, image, stats, subtitle, title };

  if (variant === "signature") return <SignatureHero {...props} />;
  if (variant === "editorial") return <EditorialHero {...props} />;
  if (variant === "gallery") return <GalleryHero {...props} />;
  if (variant === "process") return <ProcessHero {...props} />;
  return <ConciergeHero {...props} />;
}

type HeroComponentProps = Omit<PageHeroProps, "variant" | "imageBadge" | "imageCaption" | "height"> & {
  badge: string;
  caption: string;
  heightClass: string;
};

function SignatureHero({ actions, badge, caption, description, eyebrow, heightClass, image, stats, subtitle, title }: HeroComponentProps) {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img alt={image.alt} className="h-full w-full object-cover" src={image.src} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/75 via-brand-950/40 to-brand-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-brand-950/20" />
      </div>

      <div className="pointer-events-none absolute -left-40 top-1/2 -z-0 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-accent-400/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-0 h-[400px] w-[400px] rounded-full bg-brand-200/10 blur-[100px]" />

      <div className={`relative z-10 mx-auto flex ${heightClass} max-w-[1440px] flex-col justify-end px-6 pb-16 pt-28 sm:px-10 lg:px-16 lg:pb-20`}>
        <div className="max-w-3xl pb-10">
          <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-400" />
            {eyebrow}
          </p>

          <h1 className="font-display text-[2.6rem] leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[4.8rem]">
            {title}
          </h1>

          {subtitle ? (
            <p className="mt-3 font-display text-[1.4rem] leading-[1.2] tracking-tight text-white/85 sm:text-2xl lg:text-[2.2rem] xl:text-[2.6rem]">
              {subtitle}
            </p>
          ) : null}

          <p className="mt-6 max-w-xl text-lg leading-[1.75] text-white/75 sm:text-xl">{description}</p>

          {actions?.length ? (
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {actions.map((action, i) => (
                <ButtonLink key={action.to} external={action.external} to={action.to} variant={i === 0 ? "primary" : "secondary"}>{action.label}</ButtonLink>
              ))}
            </div>
          ) : null}
        </div>

        {stats?.length ? (
          <div className="mt-16 grid grid-cols-2 gap-x-10 gap-y-6 border-t border-white/15 pt-8 sm:grid-cols-3 lg:max-w-3xl">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-light text-white">{stat.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="absolute bottom-20 right-10 z-20 hidden max-w-xs rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl transition-all hover:bg-white/15 lg:block">
          <p className="text-[10px] font-bold uppercase tracking-widest text-accent-200">{badge}</p>
          <p className="mt-2 text-sm leading-relaxed text-white/80">{caption}</p>
        </div>
      </div>
    </section>
  );
}

function EditorialHero({ actions, badge, caption, description, eyebrow, heightClass, image, stats, title }: HeroComponentProps) {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img alt={image.alt} className="h-full w-full object-cover grayscale-[30%]" src={image.src} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fafaf9]/98 via-[#fafaf9]/85 to-[#fafaf9]/40" />
      </div>

      <div className="absolute bottom-0 left-0 top-0 z-10 w-1 bg-brand-950" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className={`grid ${heightClass} items-end gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28`}>
          <div className="flex flex-col justify-end">
            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-brand-950/50">{eyebrow}</p>
            <h1 className="font-display text-4xl leading-[0.95] tracking-tight text-brand-950 sm:text-5xl lg:text-[4.5rem]">{title}</h1>
            <div className="mt-8 h-px w-24 bg-brand-950/20" />
            <p className="mt-6 max-w-lg text-lg font-light leading-relaxed text-brand-950/75">{description}</p>

            {actions?.length ? (
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                {actions.map((action, i) => (
                  <ButtonLink key={action.to} external={action.external} to={action.to} variant={i === 0 ? "primary" : "secondary"}>{action.label}</ButtonLink>
                ))}
              </div>
            ) : null}
          </div>

          <div className="flex flex-col items-start gap-8 lg:items-end lg:text-right">
            {stats?.length ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-l-2 border-brand-950/15 pl-4 lg:border-l-0 lg:border-r-2 lg:pl-0 lg:pr-4">
                    <p className="text-2xl font-medium text-brand-950">{stat.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-brand-950/55">{stat.label}</p>
                  </div>
                ))}
              </div>
            ) : null}

            <div className="rounded-2xl border border-brand-950/8 bg-white/60 p-5 backdrop-blur-md lg:max-w-xs lg:text-left">
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-700">{badge}</p>
              <p className="mt-2 text-sm leading-relaxed text-brand-950/70">{caption}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryHero({ actions, badge, caption, description, eyebrow, heightClass, image, stats, title }: HeroComponentProps) {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img alt={image.alt} className="h-full w-full object-cover" src={image.src} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf7f2]/88 via-[#faf7f2]/38 to-brand-950/12" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/30" />
      </div>

      <div className={`relative z-10 mx-auto flex ${heightClass} max-w-[1440px] flex-col justify-end px-6 pb-14 pt-28 sm:px-10 lg:px-16 lg:pb-20`}>
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/55 bg-white/18 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-brand-800 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-accent-300" />
            {eyebrow}
          </p>

          <h1 className="mt-6 font-display text-4xl leading-[0.98] tracking-tight text-brand-950 sm:text-5xl lg:text-[4.6rem]">
            {title}
          </h1>
          <div className="mt-7 h-px w-24 bg-brand-950/16" />
          <p className="mt-7 max-w-xl text-lg leading-8 text-brand-950/68">{description}</p>

          {actions?.length ? (
            <div className="mt-8 flex flex-wrap gap-4">
              {actions.map((action, i) => (
                <ButtonLink key={action.to} external={action.external} to={action.to} variant={i === 0 ? "primary" : "secondary"}>{action.label}</ButtonLink>
              ))}
            </div>
          ) : null}
        </div>

        {stats?.length ? (
          <div className="mt-12 flex flex-wrap gap-4 border-t border-brand-950/10 pt-8 lg:max-w-3xl">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/20 bg-white/12 px-5 py-4 backdrop-blur-xl"
              >
                <p className="text-[1.6rem] font-light tracking-tight text-brand-950">{stat.value}</p>
                <p className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.24em] text-brand-950/45">{stat.label}</p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="absolute bottom-20 right-10 z-20 hidden max-w-xs rounded-2xl border border-brand-950/8 bg-white/60 p-5 backdrop-blur-xl lg:block">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand-700">{badge}</p>
          <p className="mt-2 text-sm leading-relaxed text-brand-950/62">{caption}</p>
        </div>
      </div>
    </section>
  );
}

function ProcessHero({ actions, badge, caption, description, eyebrow, heightClass, image, stats, title }: HeroComponentProps) {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img alt={image.alt} className="h-full w-full object-cover" src={image.src} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/20 to-brand-950/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-brand-950/30 to-brand-950/50" />
      </div>

      <div className="pointer-events-none absolute -left-32 top-1/3 z-[1] h-[500px] w-[500px] rounded-full bg-brand-700/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 z-[1] h-[400px] w-[400px] rounded-full bg-accent-400/10 blur-[100px]" />

      <div className={`relative z-10 mx-auto flex ${heightClass} max-w-[1440px] flex-col justify-end px-6 pb-14 pt-40 sm:px-10 lg:px-16 lg:pb-20`}>
        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-accent-200/80">{eyebrow}</p>
        <h1 className="max-w-3xl font-display text-4xl leading-[1.1] text-white sm:text-5xl lg:text-[4.5rem] [text-shadow:0_2px_30px_rgba(0,0,0,0.4)]">{title}</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/60">{description}</p>

        {actions?.length ? (
          <div className="mt-8 flex flex-wrap gap-4">
            {actions.map((action, i) => (
              <ButtonLink key={action.to} external={action.external} to={action.to} variant={i === 0 ? "primary" : "secondary"}>{action.label}</ButtonLink>
            ))}
          </div>
        ) : null}

        {stats?.length ? (
          <div className="mt-12 flex flex-wrap gap-10 border-t border-white/10 pt-7">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-xl font-bold text-white">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-wider text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        ) : null}

        <p className="mt-8 max-w-sm text-xs leading-relaxed text-white/35">
          <span className="font-bold uppercase tracking-widest text-accent-200/60">{badge}</span>
          {" - "}
          {caption}
        </p>
      </div>
    </section>
  );
}

function ConciergeHero({ actions, badge, caption, description, eyebrow, heightClass, image, stats, title }: HeroComponentProps) {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img alt={image.alt} className="h-full w-full object-cover" src={image.src} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/50 to-white/20" />
        <div className="absolute inset-0 bg-accent-100/20" />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-accent-200/30 blur-[100px]" />

      <div className={`relative z-10 mx-auto flex ${heightClass} max-w-[1440px] flex-col items-center justify-center px-6 py-24 text-center sm:px-10 lg:px-16`}>
        <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-700/70">{eyebrow}</p>
        <h1 className="max-w-4xl font-display text-4xl leading-[1.08] text-brand-950 sm:text-5xl lg:text-[5rem]">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-brand-950/65">{description}</p>

        {actions?.length ? (
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {actions.map((action, i) => (
              <ButtonLink key={action.to} external={action.external} to={action.to} variant={i === 0 ? "primary" : "secondary"}>{action.label}</ButtonLink>
            ))}
          </div>
        ) : null}

        {stats?.length ? (
          <div className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-14">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <p className="text-3xl font-light text-brand-950">{stat.value}</p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-brand-950/45">{stat.label}</p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-12 rounded-2xl border border-brand-950/8 bg-white/60 px-6 py-4 backdrop-blur-xl">
          <p className="text-[10px] font-bold uppercase tracking-widest text-brand-700">{badge}</p>
          <p className="mt-1 text-sm text-brand-950/60">{caption}</p>
        </div>
      </div>
    </section>
  );
}
