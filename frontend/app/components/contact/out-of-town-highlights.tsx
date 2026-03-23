import { outOfTownHighlights } from "~/components/data";
import { SectionHeading } from "~/components/ui/section-heading";

export function OutOfTownHighlightsSection() {
  return (
    <section className="mx-auto max-w-[90vw] py-16 lg:px-8">
      <SectionHeading
        description="La atención para pacientes foráneos busca dar claridad antes del viaje y acompañamiento durante cada etapa del tratamiento."
        eyebrow="Acompañamiento"
        title="Un proceso pensado para pacientes que no viven cerca"
        variant="accent"
      />
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {outOfTownHighlights.map((item) => (
          <article
            key={item.title}
            className="rounded-[28px] border border-brand-950/10 bg-white/90 p-6 shadow-[0_18px_50px_rgba(11,31,59,0.08)]"
          >
            <h2 className="text-2xl font-semibold text-brand-950">{item.title}</h2>
            <p className="mt-4 text-sm leading-6 text-brand-950/72">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
