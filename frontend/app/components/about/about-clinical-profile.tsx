export function AboutClinicalProfile() {
  return (
    <section className="mx-auto max-w-[80vw] space-y-8 py-16 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-accent-300/40 bg-[linear-gradient(135deg,rgba(249,231,236,0.92),rgba(255,255,255,0.94))] p-8 shadow-[0_18px_50px_rgba(244,166,183,0.12)]">
          <div className="grid max-w-5xl gap-6 sm:grid-cols-[auto_1fr] md:gap-10">
            <div className="relative hidden h-full w-1 sm:block">
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-accent-400/70 via-brand-700/60 to-transparent" />
              <div className="absolute -left-[5px] top-0 h-3 w-3 rounded-full bg-accent-400 shadow-[0_0_15px_rgba(244,166,183,0.28)]" />
            </div>
            <div>
              <h2 className="display-balance font-display text-4xl leading-[0.96] tracking-[-0.05em] text-brand-950 sm:text-5xl lg:text-6xl">
                Biología de la reproducción humana con visión integral
              </h2>
              <p className="mt-6 max-w-3xl pr-4 text-base leading-8 text-brand-950/74 sm:ml-4 sm:text-lg">
                Centro de reproducción con especialidad en biología de la reproducción humana y un
                abordaje integral respaldado por subespecialidades que fortalecen cada decisión
                clínica.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex-1 basis-[calc(50%-1rem)] rounded-[24px] bg-white/78 px-6 py-5 text-center text-[1.05rem] font-medium text-brand-950 shadow-[0_12px_32px_rgba(244,166,183,0.08)]">
              Cirugía de mínima invasión
            </div>
            <div className="flex-1 basis-[calc(50%-1rem)] rounded-[24px] bg-white/78 px-6 py-5 text-center text-[1.05rem] font-medium text-brand-950 shadow-[0_12px_32px_rgba(244,166,183,0.08)]">
              Endocrinología
            </div>
            <div className="flex-1 basis-[calc(50%-1rem)] rounded-[24px] bg-white/78 px-6 py-5 text-center text-[1.05rem] font-medium text-brand-950 shadow-[0_12px_32px_rgba(244,166,183,0.08)]">
              Andrología
            </div>
          </div>
        </div>

        <div className="grid content-start gap-5">
          <article className="flex h-full flex-col rounded-[30px] border border-accent-300/35 bg-[linear-gradient(180deg,rgba(249,231,236,0.75),rgba(255,255,255,0.88))] p-7 shadow-[0_20px_50px_rgba(244,166,183,0.08)] backdrop-blur-sm">
            <h3 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
              Respaldo clínico completo
            </h3>
            <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">
              Un modelo de atención que integra consulta, evaluación diagnóstica y procedimientos
              especializados con criterio médico.
            </p>
          </article>
          <article className="flex h-full flex-col rounded-[30px] border border-accent-300/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,214,222,0.22))] p-7 shadow-[0_20px_50px_rgba(244,166,183,0.08)] backdrop-blur-sm">
            <h3 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
              Atención coordinada
            </h3>
            <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">
              Distintas especialidades médicas participan cuando el caso lo requiere para construir
              un tratamiento preciso, seguro y bien sustentado.
            </p>
          </article>
          <article className="flex h-full flex-col rounded-[30px] border border-accent-300/35 bg-[linear-gradient(180deg,rgba(247,214,222,0.2),rgba(255,255,255,0.92))] p-7 shadow-[0_20px_50px_rgba(244,166,183,0.08)] backdrop-blur-sm">
            <h3 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
              Trato claro y cercano
            </h3>
            <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">
              La experiencia del paciente se acompaña con explicaciones claras y seguimiento cercano
              en cada etapa del proceso.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
