import { brandPillars } from "~/components/data";
import { FeatureCard } from "~/components/ui/feature-card";
import { SectionHeading } from "~/components/ui/section-heading";

const subSpecialties = ["Cirugía de mínima invasión", "Endocrinología", "Andrología"];

export function AboutClinicalProfile() {
  return (
    <section className="mx-auto max-w-[80vw] space-y-8 py-16 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-brand-950/10 bg-white/90 p-8 shadow-[0_18px_50px_rgba(11,31,59,0.08)]">
          <SectionHeading
            description="Clínica de fertilidad con especialidad en biología de la reproducción humana y subespecialidades que fortalecen el abordaje integral."
            eyebrow="Perfil clínico"
            title="Biología de la reproducción humana con visión integral"
            variant="editorial"
          />
          <div className="mt-8 flex flex-wrap gap-4">
            {subSpecialties.map((item) => (
              <div key={item} className="flex-1 basis-[calc(50%-1rem)] whitespace-nowrap rounded-[24px] bg-brand-950/4 px-6 py-5 text-center text-[1.05rem] font-medium text-brand-950">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid content-start gap-5">
          {brandPillars.map((pillar) => (
            <FeatureCard
              key={pillar.title}
              description={pillar.description}
              eyebrow="Base de marca"
              title={pillar.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
