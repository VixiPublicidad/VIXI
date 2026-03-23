import { teamProfiles } from "~/components/data";
import { SectionHeading } from "~/components/ui/section-heading";

export function AboutTeam() {
  return (
    <section className="mx-auto max-w-[90vw] py-16 lg:px-8">
      <SectionHeading
        description="El equipo médico combina formación especializada en fertilidad, ginecología y cirugía de mínima invasión."
        eyebrow="Equipo médico"
        title="Perfiles clínicos con credenciales claras y trato humano"
        variant="editorial"
      />
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {teamProfiles.map((doctor) => (
          <article
            key={doctor.name}
            className="group relative overflow-hidden rounded-[2.5rem] border border-brand-950/5 bg-white shadow-[0_12px_45px_rgba(11,31,59,0.06)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_25px_65px_rgba(11,31,59,0.12)]"
          >
            <div className="flex flex-col p-8 sm:p-10">
              <p className="inline-flex max-w-full items-center rounded-full bg-accent-100/60 px-6 py-2 text-[10px] font-bold uppercase leading-relaxed tracking-[0.25em] text-accent-400 whitespace-normal break-words sm:w-max">
                {doctor.role}
              </p>
              <h3 className="mt-4 text-3xl font-display font-medium leading-tight text-brand-950 sm:text-4xl">
                {doctor.name}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-brand-950/70">
                {doctor.summary}
              </p>

              <div className="mt-auto pt-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-950/40">Especialidades</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {doctor.specialties.map((specialty) => (
                    <div key={specialty} className="rounded-full bg-brand-950/[0.03] border border-brand-950/[0.06] px-4 py-1.5 text-xs text-brand-950/80 transition-colors group-hover:bg-brand-950/10">
                      {specialty}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 border-t border-brand-950/5 pt-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-950/40">Formación</p>
                <ul className="mt-3 grid gap-2.5 text-sm leading-relaxed text-brand-950/70">
                  {doctor.education.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
