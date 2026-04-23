export function OutOfTownSupport() {
  return (
    <section className="mx-auto grid max-w-[80vw] gap-8 py-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <div className="rounded-[32px] bg-accent-100 p-8 shadow-[0_20px_50px_rgba(244,166,183,0.22)]">
        <div className="relative mx-auto flex flex-col items-center overflow-hidden rounded-[3rem] border border-white/60 bg-white/70 px-8 py-12 text-center shadow-[0_20px_80px_-15px_rgba(11,31,59,0.08)] ring-1 ring-brand-950/5 backdrop-blur-3xl sm:px-14 sm:py-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent-100/50 mix-blend-multiply blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-brand-200/50 mix-blend-multiply blur-[100px]" />
          <div className="relative z-10 w-full">
            <p className="eyebrow-label mb-4 text-brand-700">Lo que resolvemos</p>
            <h2 className="display-balance font-display text-3xl leading-[0.98] tracking-[-0.045em] text-brand-950 sm:text-4xl lg:text-5xl">
              Menos fricción logística, más foco en tu tratamiento
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-brand-950/68 sm:text-lg">
              Consulta previa, planeación de visitas y seguimiento remoto ayudan a que el tratamiento sea más ordenado para quienes viajan.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        <div className="group relative flex flex-col justify-center rounded-[28px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm transition-all hover:bg-white">
          <div className="flex items-start gap-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-950/[0.04] text-[11px] font-bold tracking-widest text-brand-700">01</span>
            <div>
              <h3 className="font-display text-[1.25rem] font-medium leading-[1.1] text-brand-950">
                Valoración inicial en línea
              </h3>
              <p className="mt-2 text-[0.98rem] leading-7 text-brand-950/74">
                La consulta virtual permite revisar antecedentes y preparar estudios antes de tu visita presencial.
              </p>
            </div>
          </div>
        </div>
        <div className="group relative flex flex-col justify-center rounded-[28px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm transition-all hover:bg-white">
          <div className="flex items-start gap-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-950/[0.04] text-[11px] font-bold tracking-widest text-brand-700">02</span>
            <div>
              <h3 className="font-display text-[1.25rem] font-medium leading-[1.1] text-brand-950">
                Planeación de tiempos
              </h3>
              <p className="mt-2 text-[0.98rem] leading-7 text-brand-950/74">
                Organizamos el calendario clínico para concentrar valoraciones y procedimientos cuando el caso lo permite.
              </p>
            </div>
          </div>
        </div>
        <div className="group relative flex flex-col justify-center rounded-[28px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm transition-all hover:bg-white">
          <div className="flex items-start gap-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-950/[0.04] text-[11px] font-bold tracking-widest text-brand-700">03</span>
            <div>
              <h3 className="font-display text-[1.25rem] font-medium leading-[1.1] text-brand-950">
                Seguimiento a distancia
              </h3>
              <p className="mt-2 text-[0.98rem] leading-7 text-brand-950/74">
                El acompañamiento continúa por canales remotos para dar claridad entre citas y resolver dudas puntuales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
