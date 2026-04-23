export function AboutClinicalProfile() {
  return (
    <section className="mx-auto max-w-[80vw] space-y-8 py-16 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-brand-950/10 bg-white/90 p-8 shadow-[0_18px_50px_rgba(11,31,59,0.08)]">
          <div className="grid max-w-5xl gap-6 sm:grid-cols-[auto_1fr] md:gap-10">
            <div className="relative hidden h-full w-1 sm:block">
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-brand-950 via-brand-700/60 to-transparent" />
              <div className="absolute -left-[5px] top-0 h-3 w-3 rounded-full bg-brand-950 shadow-[0_0_15px_rgba(0,0,0,0.2)]" />
            </div>
            <div>
              <p className="eyebrow-label mb-4 text-[10px] text-brand-700">Perfil clínico</p>
              <h2 className="display-balance font-display text-4xl leading-[0.96] tracking-[-0.05em] text-brand-950 sm:text-5xl lg:text-6xl">
                Biología de la reproducción humana con visión integral
              </h2>
              <p className="mt-6 max-w-3xl pr-4 text-base leading-8 text-brand-950/74 sm:ml-4 sm:text-lg">
                Clínica de fertilidad con especialidad en biología de la reproducción humana y subespecialidades que fortalecen el abordaje integral.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex-1 basis-[calc(50%-1rem)] whitespace-nowrap rounded-[24px] bg-brand-950/4 px-6 py-5 text-center text-[1.05rem] font-medium text-brand-950">
              Cirugía de mínima invasión
            </div>
            <div className="flex-1 basis-[calc(50%-1rem)] whitespace-nowrap rounded-[24px] bg-brand-950/4 px-6 py-5 text-center text-[1.05rem] font-medium text-brand-950">
              Endocrinología
            </div>
            <div className="flex-1 basis-[calc(50%-1rem)] whitespace-nowrap rounded-[24px] bg-brand-950/4 px-6 py-5 text-center text-[1.05rem] font-medium text-brand-950">
              Andrología
            </div>
          </div>
        </div>

        <div className="grid content-start gap-5">
          <article className="flex h-full flex-col rounded-[30px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm">
            <p className="eyebrow-label mb-4 text-brand-700/62">Base de marca</p>
            <h3 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
              Ciencia
            </h3>
            <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">
              Diagnóstico preciso, protocolos individualizados y respaldo hospitalario.
            </p>
          </article>
          <article className="flex h-full flex-col rounded-[30px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm">
            <p className="eyebrow-label mb-4 text-brand-700/62">Base de marca</p>
            <h3 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
              Experiencia
            </h3>
            <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">
              Equipo con formación en biología de la reproducción humana y cirugía de mínima invasión.
            </p>
          </article>
          <article className="flex h-full flex-col rounded-[30px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm">
            <p className="eyebrow-label mb-4 text-brand-700/62">Base de marca</p>
            <h3 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
              Cercanía
            </h3>
            <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">
              Un proceso emocionalmente acompañado, claro y respetuoso en cada etapa.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
