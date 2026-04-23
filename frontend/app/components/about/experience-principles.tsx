export function ExperiencePrinciples() {
  return (
    <section className="mx-auto max-w-[80vw] py-16 lg:px-8">
      <div className="relative mx-auto flex flex-col items-center overflow-hidden rounded-[3rem] border border-white/60 bg-white/70 px-8 py-12 text-center shadow-[0_20px_80px_-15px_rgba(11,31,59,0.08)] ring-1 ring-brand-950/5 backdrop-blur-3xl sm:px-14 sm:py-16">
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent-100/50 mix-blend-multiply blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-brand-200/50 mix-blend-multiply blur-[100px]" />
        <div className="relative z-10 w-full">
          <p className="eyebrow-label mb-4 text-brand-700">Lo que se siente</p>
          <h2 className="display-balance font-display text-3xl leading-[0.98] tracking-[-0.045em] text-brand-950 sm:text-4xl lg:text-5xl">
            Una clínica minimalista con un toque cálido y profundamente humano
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-brand-950/68 sm:text-lg">
            Atención integral, trato cercano y una sensación de calma que ayuda a vivir el proceso con mayor confianza.
          </p>
        </div>
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <article className="flex h-full flex-col rounded-[30px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm">
          <p className="eyebrow-label mb-4 text-brand-700/62">Experiencia</p>
          <h3 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
            Atención integral
          </h3>
          <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">
            Desde el diagnóstico hasta el embarazo y más allá, el acompañamiento se mantiene durante todo el proceso.
          </p>
        </article>
        <article className="flex h-full flex-col rounded-[30px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm">
          <p className="eyebrow-label mb-4 text-brand-700/62">Experiencia</p>
          <h3 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
            Ambiente moderno y tranquilo
          </h3>
          <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">
            VIXI se vive como un espacio sereno, moderno y acogedor que transmite confianza desde la llegada.
          </p>
        </article>
        <article className="flex h-full flex-col rounded-[30px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm">
          <p className="eyebrow-label mb-4 text-brand-700/62">Experiencia</p>
          <h3 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
            Enfoque personalizado
          </h3>
          <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">
            Cada paciente debe sentir que su tratamiento es único y diseñado para su historia clínica y emocional.
          </p>
        </article>
      </div>
    </section>
  );
}
