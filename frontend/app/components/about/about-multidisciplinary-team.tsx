import { multidisciplinaryTeam } from "~/components/data";
import { SectionHeading } from "~/components/ui/section-heading";

export function AboutMultidisciplinaryTeam() {
  return (
    <section className="mx-auto max-w-[80vw] py-16 lg:px-8">
      <SectionHeading
        description="Cada caso puede apoyarse en distintas especialidades para construir un tratamiento más preciso y completo."
        eyebrow="Equipo multidisciplinario"
        title="Especialidades que trabajan en conjunto, no en silos"
        variant="minimal"
      />
      <div className="mt-10 flex flex-wrap justify-center gap-5">
        {multidisciplinaryTeam.map((item, index) => (
          <article
            key={item.title}
            className="group relative flex flex-1 basis-[calc(100%-1.25rem)] flex-col gap-3 overflow-hidden rounded-[28px] border border-brand-950/8 bg-white/82 px-7 py-8 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(11,31,59,0.11)] sm:basis-[calc(50%-1.25rem)] lg:basis-[calc(33.3%-1.25rem)] xl:basis-[calc(25%-1.25rem)]"
          >
            <div
              className="absolute left-0 top-0 h-[4px] w-full rounded-t-full bg-gradient-to-r from-brand-700/70 via-accent-300/60 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100"
            />
            <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-950/[0.05] text-[10px] font-bold tracking-widest text-brand-700">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-[1.25rem] font-medium leading-tight text-brand-950">
              {item.title}
            </h3>
            <p className="mt-2 flex-1 text-[0.98rem] leading-7 text-brand-950/68">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
