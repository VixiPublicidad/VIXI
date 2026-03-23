import { brandPillars, differentiator } from "~/components/data";

export function HomePillars() {
  return (
    <section className="mx-auto grid max-w-[90vw] gap-8 py-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <div className="rounded-[32px] bg-brand-950 p-8 text-white shadow-[0_22px_60px_rgba(11,31,59,0.18)]">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-200">Pilares de marca</p>
        <h2 className="mt-4 font-display text-4xl leading-none">Ciencia, experiencia y cercanía en equilibrio.</h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-white/76">
          Estos pilares definen la atención de VIXI: rigor médico, experiencia clínica y un trato humano y cercano en cada etapa.
        </p>
        <div className="mt-8 grid gap-4">
          {brandPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-[24px] border border-white/12 bg-white/6 p-5"
            >
              <p className="text-lg font-semibold text-white">{pillar.title}</p>
              <p className="mt-2 text-sm leading-6 text-white/70">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <article className="rounded-[32px] border border-brand-950/10 bg-white/90 p-7 shadow-[0_18px_50px_rgba(11,31,59,0.08)] md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">Diferenciador</p>
          <h3 className="mt-3 text-3xl font-semibold text-brand-950">
            Atención especializada dentro de un hospital.
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-7 text-brand-950/74">{differentiator}</p>
        </article>

        {brandPillars.map((pillar) => (
          <article
            key={pillar.title}
            className="group relative flex min-h-[260px] flex-col justify-end overflow-hidden rounded-[2rem] shadow-[0_18px_50px_rgba(11,31,59,0.12)] transition-all duration-700 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(11,31,59,0.18)]"
          >
            <img
              alt={pillar.image?.alt ?? ""}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105"
              loading="lazy"
              src={pillar.image?.src ?? ""}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/40 to-brand-950/10" />
            <div className="relative z-10 p-6 sm:p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-accent-200">Pilares de marca</p>
              <h3 className="mt-2 font-display text-xl font-semibold leading-tight text-white sm:text-2xl">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/78">
                {pillar.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
