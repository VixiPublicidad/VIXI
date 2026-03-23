import { audienceCards } from "~/components/data";
import { FeatureCard } from "~/components/ui/feature-card";
import { SectionHeading } from "~/components/ui/section-heading";

export function HomeAudiences() {
  return (
    <section className="mx-auto max-w-[90vw] py-16 lg:px-8">
      <SectionHeading
        align="center"
        description="VIXI acompaña a parejas con dificultades para lograr embarazo, familias que desean crecer y pacientes que buscan opciones reproductivas después de los 45."
        eyebrow="Audiencias principales"
        title="Un sitio que habla con distintos momentos de vida"
        variant="highlight"
      />
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {audienceCards.map((audience) => (
          <FeatureCard
            key={audience.title}
            description={audience.description}
            eyebrow="Perfil de paciente"
            title={audience.title}
          />
        ))}
      </div>
    </section>
  );
}
