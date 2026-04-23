export function OutOfTownHighlightsSection() {
  return (
    <section className="mx-auto max-w-[80vw] py-16 lg:px-8">
      <div className="relative max-w-4xl">
        <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-brand-950/10 bg-white/60 px-4 py-1.5 text-brand-950 shadow-[0_4px_24px_-4px_rgba(11,31,59,0.08)] backdrop-blur-md">
          <svg className="h-3.5 w-3.5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="eyebrow-label pt-[1px] text-[10px]">Acompañamiento</span>
        </div>
        <h2 className="display-balance bg-gradient-to-br from-brand-950 via-[#183457] to-[#3a5d8c] bg-clip-text font-display text-3xl leading-[0.98] tracking-[-0.045em] text-transparent sm:text-4xl lg:text-5xl">
          Un proceso pensado para pacientes que no viven cerca
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-brand-950/66 sm:text-lg">
          La atención para pacientes foráneos busca dar claridad antes del viaje y acompañamiento durante cada etapa del tratamiento.
        </p>
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <article className="rounded-[28px] border border-brand-950/10 bg-white/90 p-6 shadow-[0_18px_50px_rgba(11,31,59,0.08)]">
          <h2 className="text-2xl font-semibold text-brand-950">Valoración inicial en línea</h2>
          <p className="mt-4 text-sm leading-6 text-brand-950/72">
            La consulta virtual permite revisar antecedentes y preparar estudios antes de tu visita presencial.
          </p>
        </article>
        <article className="rounded-[28px] border border-brand-950/10 bg-white/90 p-6 shadow-[0_18px_50px_rgba(11,31,59,0.08)]">
          <h2 className="text-2xl font-semibold text-brand-950">Planeación de tiempos</h2>
          <p className="mt-4 text-sm leading-6 text-brand-950/72">
            Organizamos el calendario clínico para concentrar valoraciones y procedimientos cuando el caso lo permite.
          </p>
        </article>
        <article className="rounded-[28px] border border-brand-950/10 bg-white/90 p-6 shadow-[0_18px_50px_rgba(11,31,59,0.08)]">
          <h2 className="text-2xl font-semibold text-brand-950">Seguimiento a distancia</h2>
          <p className="mt-4 text-sm leading-6 text-brand-950/72">
            El acompañamiento continúa por canales remotos para dar claridad entre citas y resolver dudas puntuales.
          </p>
        </article>
      </div>
    </section>
  );
}
