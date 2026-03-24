import { teamProfiles } from "~/components/data";
import { SectionHeading } from "~/components/ui/section-heading";

export function AboutTeam() {
  return (
    <section className="mx-auto max-w-[80vw] py-16 lg:px-8">
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
            className="group relative flex flex-col overflow-hidden rounded-[30px] border border-brand-950/8 bg-white/82 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_25px_65px_rgba(11,31,59,0.12)]"
          >
            <div className="flex flex-1 flex-col p-8 sm:p-10">
              <p className="eyebrow-label text-accent-400">
                {doctor.role}
              </p>
              <h3 className="mt-4 font-display text-[2.2rem] font-medium leading-[1.05] tracking-[-0.035em] text-brand-950 sm:text-[2.4rem]">
                {doctor.name}
              </h3>
              <p className="mt-4 flex-1 text-[1.05rem] leading-8 text-brand-950/70">
                {doctor.summary}
              </p>

              <div className="mt-auto border-t border-brand-950/8 pt-8">
                <p className="eyebrow-label mb-4 text-brand-950/50">Especialidades</p>
                <div className="flex flex-wrap gap-2">
                  {doctor.specialties.map((specialty) => (
                    <div key={specialty} className="rounded-[14px] bg-brand-950/[0.04] px-4 py-2 text-[0.85rem] font-medium text-brand-950/80">
                      {specialty}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-brand-950/8 pt-6">
                <p className="eyebrow-label mb-4 text-brand-950/50">Formación</p>
                <ul className="grid gap-3 text-[0.98rem] leading-7 text-brand-950/78">
                  {doctor.education.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="mt-3 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-300" />
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
