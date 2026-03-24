import { FaBaby, FaDna, FaHandshake, FaMicroscope, FaSnowflake } from "react-icons/fa";

import { treatmentCategories } from "~/components/data";
import { SectionHeading } from "~/components/ui/section-heading";

const TREATMENT_ICONS = [FaMicroscope, FaDna, FaSnowflake, FaHandshake, FaBaby];

export function TreatmentsCategories() {
  return (
    <section className="mx-auto max-w-[80vw] py-16 lg:px-8">
      <SectionHeading
        description="Incluye evaluación y diagnóstico, reproducción asistida, preservación de fertilidad, donación y opciones para distintos modelos de familia."
        eyebrow="Portafolio clínico"
        title="Opciones terapéuticas explicadas de forma simple"
        variant="editorial"
      />
      <div className="mt-10 flex flex-wrap justify-center gap-5">
        {treatmentCategories.map((category, index) => {
          const Icon = TREATMENT_ICONS[index];

          return (
            <article
              key={category.title}
              className="group flex flex-1 basis-[calc(100%-1.25rem)] flex-col rounded-[30px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(11,31,59,0.11)] lg:basis-[calc(50%-1.25rem)]"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[18px] bg-brand-950/[0.04] text-brand-700 transition-colors group-hover:bg-brand-950/[0.06]">
                <Icon aria-hidden="true" className="h-6 w-6" />
              </div>
              <h2 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
                {category.title}
              </h2>
              <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">{category.description}</p>
              <div className="mt-6 border-t border-brand-950/8 pt-5">
                <p className="text-sm leading-7 text-brand-950/78">{category.items.join(" · ")}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
