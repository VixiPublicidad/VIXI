import { FaFlask, FaHandHoldingHeart, FaUserMd } from "react-icons/fa";

import { brandPillars, differentiator } from "~/components/data";

const PILLAR_ICONS = [FaFlask, FaUserMd, FaHandHoldingHeart];

export function HomePillars() {
  return (
    <section className="mx-auto grid max-w-[80vw] gap-8 py-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <div className="rounded-[32px] bg-brand-950 p-8 text-white shadow-[0_22px_60px_rgba(11,31,59,0.18)]" data-card data-reveal-item>
        <h2 className="display-balance mt-4 font-display text-4xl leading-[0.96] tracking-[-0.045em]">
          {"Ciencia, experiencia y cercanía en equilibrio."}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-8 text-white/76">
          {"Estos pilares definen la atención de VIXI: rigor médico, experiencia clínica y un trato humano y cercano en cada etapa."}
        </p>
        <div className="mt-8 grid gap-4">
          {brandPillars.map((pillar, index) => {
            const Icon = PILLAR_ICONS[index];
            return (
              <div
                data-card
                key={pillar.title}
                data-reveal-item
                className="group flex flex-col rounded-[28px] border border-white/12 bg-white/6 p-6 backdrop-blur-sm transition-all hover:bg-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-100/10 text-accent-200 transition-colors group-hover:bg-accent-100/20" data-card-float>
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <p className="font-display text-[1.45rem] font-medium leading-[1.02] tracking-[-0.03em] text-white">
                    {pillar.title}
                  </p>
                </div>
                <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-white/78">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <article className="flex flex-col rounded-[32px] border border-brand-950/8 bg-white/84 p-8 shadow-[0_18px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm md:col-span-3" data-card data-reveal-item>
          <p className="eyebrow-label text-brand-700">Diferenciador</p>
          <h3 className="display-balance mt-3 font-display text-[2.2rem] font-medium leading-[0.98] tracking-[-0.04em] text-brand-950">
            {"Atención especializada dentro de un hospital."}
          </h3>
          <p className="mt-5 max-w-3xl flex-1 text-[1.05rem] leading-8 text-brand-950/78">{differentiator}</p>
        </article>

        {brandPillars.map((pillar) => (
          <article
            data-card
            data-reveal-item
            key={pillar.title}
            className="group relative flex min-h-[260px] flex-col justify-end overflow-hidden rounded-[2rem] shadow-[0_18px_50px_rgba(11,31,59,0.12)] transition-all duration-700 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(11,31,59,0.18)]"
          >
            <div className="absolute inset-0" data-card-media data-parallax="0.2">
              <img
                alt={pillar.image?.alt ?? ""}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105"
                loading="lazy"
                src={pillar.image?.src ?? ""}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/40 to-brand-950/10" />
            </div>
            <div className="relative z-10 flex flex-col justify-end p-6 sm:p-7">
              <p className="eyebrow-label text-[10px] text-accent-200">Pilares</p>
              <h3 className="display-balance mt-3 font-display text-[1.65rem] font-medium leading-[0.98] tracking-[-0.03em] text-white">
                {pillar.title}
              </h3>
              <p className="mt-4 text-[0.98rem] leading-7 text-white/84">{pillar.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
