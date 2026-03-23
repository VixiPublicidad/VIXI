import { multidisciplinaryTeam } from "~/components/data";
import { SectionHeading } from "~/components/ui/section-heading";

export function AboutMultidisciplinaryTeam() {
  return (
    <section className="mx-auto max-w-[90vw] py-16 lg:px-8">
      <SectionHeading
        description="Cada caso puede apoyarse en distintas especialidades para construir un tratamiento más preciso y completo."
        eyebrow="Equipo multidisciplinario"
        title="Especialidades que trabajan en conjunto, no en silos"
        variant="minimal"
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {multidisciplinaryTeam.map((item, index) => (
          <div
            key={item.title}
            className="group relative flex flex-col gap-3 overflow-hidden rounded-[1.75rem] border border-brand-950/[0.07] bg-white px-6 py-7 shadow-[0_8px_32px_rgba(11,31,59,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(11,31,59,0.11)]"
          >
            <div
              className="absolute left-0 top-0 h-[3px] w-full rounded-t-[1.75rem] bg-gradient-to-r from-brand-700/70 via-accent-300/60 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100"
            />
            <span className="mb-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-950/[0.05] text-[10px] font-bold tracking-widest text-brand-700">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-base font-medium leading-snug text-brand-950">
              {item.title}
            </h3>
            <p className="text-[13px] leading-relaxed text-brand-950/55">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
