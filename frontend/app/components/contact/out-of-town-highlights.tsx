export function OutOfTownHighlightsSection() {
  return (
    <section className="mx-auto max-w-[80vw] py-16 lg:px-8">
      <div className="relative max-w-4xl">
        <p className="eyebrow-label mb-5 text-brand-950/50">Acompañamiento</p>
        <h2 className="display-balance bg-gradient-to-br from-brand-950 via-[#183457] to-[#3a5d8c] bg-clip-text font-display text-3xl leading-[0.98] tracking-[-0.045em] text-transparent sm:text-4xl lg:text-5xl">
          Puedes atenderte en VIXI sin complicaciones, sin importar de dónde vengas
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-brand-950/66 sm:text-lg">
          Coordinamos consulta, estudios y seguimiento con un proceso claro, cercano y fácil de
          organizar.
        </p>
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <article className="rounded-[28px] border border-brand-950/10 bg-white/90 p-6 shadow-[0_18px_50px_rgba(11,31,59,0.08)]">
          <h2 className="text-2xl font-semibold text-brand-950">Primera consulta coordinada</h2>
          <p className="mt-4 text-sm leading-6 text-brand-950/72">
            Revisamos tu caso y definimos qué necesitas antes de viajar.
          </p>
        </article>
        <article className="rounded-[28px] border border-brand-950/10 bg-white/90 p-6 shadow-[0_18px_50px_rgba(11,31,59,0.08)]">
          <h2 className="text-2xl font-semibold text-brand-950">Estudios y tiempos claros</h2>
          <p className="mt-4 text-sm leading-6 text-brand-950/72">
            Organizamos los pasos del proceso para que sepas qué sigue y cuándo hacerlo.
          </p>
        </article>
        <article className="rounded-[28px] border border-brand-950/10 bg-white/90 p-6 shadow-[0_18px_50px_rgba(11,31,59,0.08)]">
          <h2 className="text-2xl font-semibold text-brand-950">Seguimiento continuo</h2>
          <p className="mt-4 text-sm leading-6 text-brand-950/72">
            Te acompañamos antes, durante y después de tu visita para que todo avance con
            confianza.
          </p>
        </article>
      </div>
    </section>
  );
}
