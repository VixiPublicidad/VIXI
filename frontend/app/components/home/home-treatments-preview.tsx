import { treatmentCategories } from "~/components/data";
import { SectionHeading } from "~/components/ui/section-heading";

export function HomeTreatmentsPreview() {
  return (
    <section className="mx-auto max-w-[90vw] py-16 lg:px-8">
      <SectionHeading
        description="Desde evaluación y diagnóstico hasta reproducción asistida, preservación de fertilidad y donación."
        eyebrow="Tratamientos"
        title="Un portafolio clínico pensado para decisiones bien informadas"
        variant="editorial"
      />
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {treatmentCategories.slice(0, 3).map((category) => (
          <article
            key={category.title}
            className="rounded-[28px] border border-brand-950/10 bg-white/88 p-6 shadow-[0_18px_50px_rgba(11,31,59,0.08)]"
          >
            <h3 className="text-xl font-semibold text-brand-950">{category.title}</h3>
            <p className="mt-3 text-sm leading-6 text-brand-950/72">{category.description}</p>
            <ul className="mt-5 grid gap-2 text-sm text-brand-950/80">
              {category.items.map((item) => (
                <li key={item} className="rounded-full bg-brand-950/5 px-4 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
