export function AboutTeam() {
  return (
    <section className="mx-auto max-w-[80vw] py-16 lg:px-8">
      <div className="grid max-w-5xl gap-6 sm:grid-cols-[auto_1fr] md:gap-10">
        <div className="relative hidden h-full w-1 sm:block">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-accent-400/70 via-brand-700/60 to-transparent" />
          <div className="absolute -left-[5px] top-0 h-3 w-3 rounded-full bg-accent-400 shadow-[0_0_15px_rgba(244,166,183,0.28)]" />
        </div>
        <div>
          <p className="eyebrow-label mb-4 text-[10px] text-brand-700">Equipo médico</p>
          <h2 className="display-balance font-display text-4xl leading-[0.96] tracking-[-0.05em] text-brand-950 sm:text-5xl lg:text-6xl">
            Especialistas con formación de alto nivel y un trato cercano en cada consulta.
          </h2>
          <p className="mt-6 max-w-3xl pr-4 text-base leading-8 text-brand-950/74 sm:ml-4 sm:text-lg">
            Cada especialista de VIXI tiene años de formación en reproducción humana y entiende que
            cada paciente vive este proceso de forma distinta. Por eso, la atención es cercana,
            clara y pensada para ti.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="group relative flex flex-col overflow-hidden rounded-[30px] border border-accent-300/40 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,214,222,0.18))] shadow-[0_20px_50px_rgba(244,166,183,0.08)] backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_25px_65px_rgba(244,166,183,0.14)]">
          <div className="flex flex-1 flex-col p-8 sm:p-10">
            <p className="eyebrow-label text-accent-400">
              Ginecología, obstetricia y biología de la reproducción humana
            </p>
            <h3 className="mt-4 font-display text-[2.2rem] font-medium leading-[1.05] tracking-[-0.035em] text-brand-950 sm:text-[2.4rem]">
              Dra. Liliana Elizabeth Hernández Lara
            </h3>
            <p className="mt-4 flex-1 text-[1.05rem] leading-8 text-brand-950/70">
              Enfoca cada tratamiento desde una perspectiva médica rigurosa con una atención clara,
              cercana y adaptada al contexto de cada paciente.
            </p>

            <div className="mt-auto border-t border-brand-950/8 pt-8">
              <p className="eyebrow-label mb-4 text-brand-950/50">Especialidades</p>
              <div className="flex flex-wrap gap-2">
                <div className="rounded-[14px] bg-accent-200/70 px-4 py-2 text-[0.85rem] font-medium text-brand-950/80">
                  Ginecología y obstetricia
                </div>
                <div className="rounded-[14px] bg-accent-200/70 px-4 py-2 text-[0.85rem] font-medium text-brand-950/80">
                  Biología de la reproducción humana
                </div>
                <div className="rounded-[14px] bg-accent-200/70 px-4 py-2 text-[0.85rem] font-medium text-brand-950/80">
                  Cirugía de mínima invasión
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-brand-950/8 pt-6">
              <p className="eyebrow-label mb-4 text-brand-950/50">Formación</p>
              <ul className="grid gap-3 text-[0.98rem] leading-7 text-brand-950/78">
                <li className="flex items-start gap-4">
                  <span className="mt-3 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                  <span>Medicina - Universidad de San Luis Potosí</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-3 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                  <span>Ginecología y obstetricia - Universidad de Guanajuato</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-3 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                  <span>Biología de la reproducción humana - Universidad de Valencia</span>
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article className="group relative flex flex-col overflow-hidden rounded-[30px] border border-accent-300/40 bg-[linear-gradient(180deg,rgba(247,214,222,0.18),rgba(255,255,255,0.92))] shadow-[0_20px_50px_rgba(244,166,183,0.08)] backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_25px_65px_rgba(244,166,183,0.14)]">
          <div className="flex flex-1 flex-col p-8 sm:p-10">
            <p className="eyebrow-label text-accent-400">
              Ginecología, reproducción humana y endoscopia ginecológica
            </p>
            <h3 className="mt-4 font-display text-[2.2rem] font-medium leading-[1.05] tracking-[-0.035em] text-brand-950 sm:text-[2.4rem]">
              Dr. Francisco Ulises Estrada Ontiveros
            </h3>
            <p className="mt-4 flex-1 text-[1.05rem] leading-8 text-brand-950/70">
              Integra experiencia quirúrgica y fertilidad avanzada para construir estrategias
              individualizadas, realistas y bien sustentadas clínicamente.
            </p>

            <div className="mt-auto border-t border-brand-950/8 pt-8">
              <p className="eyebrow-label mb-4 text-brand-950/50">Especialidades</p>
              <div className="flex flex-wrap gap-2">
                <div className="rounded-[14px] bg-accent-200/70 px-4 py-2 text-[0.85rem] font-medium text-brand-950/80">
                  Ginecología y obstetricia
                </div>
                <div className="rounded-[14px] bg-accent-200/70 px-4 py-2 text-[0.85rem] font-medium text-brand-950/80">
                  Biología de la reproducción humana
                </div>
                <div className="rounded-[14px] bg-accent-200/70 px-4 py-2 text-[0.85rem] font-medium text-brand-950/80">
                  Cirugía de mínima invasión
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-brand-950/8 pt-6">
              <p className="eyebrow-label mb-4 text-brand-950/50">Formación</p>
              <ul className="grid gap-3 text-[0.98rem] leading-7 text-brand-950/78">
                <li className="flex items-start gap-4">
                  <span className="mt-3 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                  <span>Medicina y ginecología - Universidad de Guanajuato</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-3 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                  <span>Biología de la reproducción humana - Universidad de Valencia</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-3 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                  <span>Endoscopia ginecológica - Universidad Católica de Valencia</span>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
