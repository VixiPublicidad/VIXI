import { treatmentCategories } from "~/components/data";
import { SectionHeading } from "~/components/ui/section-heading";

export function TreatmentsCategories() {
  return (
    <section className="mx-auto max-w-[90vw] py-16 lg:px-8">
      <SectionHeading
        description="Incluye evaluación y diagnóstico, reproducción asistida, preservación de fertilidad, donación y opciones para distintos modelos de familia."
        eyebrow="Portafolio clínico"
        title="Opciones terapéuticas explicadas de forma simple"
        variant="editorial"
      />
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {treatmentCategories.map((category) => (
          <article
            key={category.title}
            className="rounded-[30px] border border-brand-950/10 bg-white/90 p-7 shadow-[0_18px_50px_rgba(11,31,59,0.08)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">Categoría</p>
            <h2 className="mt-3 text-3xl font-semibold text-brand-950">{category.title}</h2>
            <p className="mt-4 text-sm leading-6 text-brand-950/72">{category.description}</p>
            <ul className="mt-6 grid gap-3">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="rounded-[20px] bg-brand-950/4 px-4 py-3 text-sm text-brand-950/84"
                >
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
