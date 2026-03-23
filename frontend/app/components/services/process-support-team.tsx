import { multidisciplinaryTeam } from "~/components/data";
import { SectionHeading } from "~/components/ui/section-heading";

export function ProcessSupportTeam() {
  return (
    <section className="mx-auto max-w-[90vw] py-6 lg:px-8">
      <div className="rounded-[32px] bg-brand-950 p-8 text-white shadow-[0_22px_60px_rgba(11,31,59,0.18)]">
        <SectionHeading
          description="El tratamiento puede involucrar distintas especialidades médicas según las necesidades clínicas de cada paciente."
          eyebrow="Apoyo clínico"
          tone="light"
          title="Especialidades que sostienen el recorrido completo"
          variant="accent"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {multidisciplinaryTeam.map((item) => (
            <div key={item.title} className="rounded-[22px] bg-white/8 px-4 py-4 text-sm text-white/78">
              <p className="font-medium text-white/90">{item.title}</p>
              <p className="mt-1 text-[12px] leading-relaxed text-white/55">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
