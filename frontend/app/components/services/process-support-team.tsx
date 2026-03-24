import { multidisciplinaryTeam } from "~/components/data";
import { SectionHeading } from "~/components/ui/section-heading";

export function ProcessSupportTeam() {
  return (
    <section className="mx-auto max-w-[80vw] py-6 lg:px-8">
      <div className="rounded-[32px] bg-brand-950 p-8 text-white shadow-[0_22px_60px_rgba(11,31,59,0.18)]">
        <SectionHeading
          description="El tratamiento puede involucrar distintas especialidades médicas según las necesidades clínicas de cada paciente."
          eyebrow="Apoyo clínico"
          tone="light"
          title="Especialidades que sostienen el recorrido completo"
          variant="accent"
        />
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {multidisciplinaryTeam.map((item) => (
            <div key={item.title} className="flex flex-1 basis-[calc(100%-1rem)] flex-col rounded-[22px] bg-white/8 p-5 sm:basis-[calc(50%-1rem)] lg:basis-[calc(25%-1rem)]">
              <p className="font-medium text-white/90">{item.title}</p>
              <p className="mt-2 flex-1 text-[13px] leading-relaxed text-white/60">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
