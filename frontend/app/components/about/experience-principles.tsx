import { FeatureCard } from "~/components/ui/feature-card";
import { SectionHeading } from "~/components/ui/section-heading";

const principles = [
  {
    title: "Atención integral",
    description: "Desde el diagnóstico hasta el embarazo y más allá, el acompañamiento se mantiene durante todo el proceso.",
  },
  {
    title: "Ambiente moderno y tranquilo",
    description: "VIXI se vive como un espacio sereno, moderno y acogedor que transmite confianza desde la llegada.",
  },
  {
    title: "Enfoque personalizado",
    description: "Cada paciente debe sentir que su tratamiento es único y diseñado para su historia clínica y emocional.",
  },
];

export function ExperiencePrinciples() {
  return (
    <section className="mx-auto max-w-[80vw] py-16 lg:px-8">
      <SectionHeading
        align="center"
        description="Atención integral, trato cercano y una sensación de calma que ayuda a vivir el proceso con mayor confianza."
        eyebrow="Lo que se siente"
        title="Una clínica minimalista con un toque cálido y profundamente humano"
        variant="highlight"
      />
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {principles.map((item) => (
          <FeatureCard
            key={item.title}
            description={item.description}
            eyebrow="Experiencia"
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
}
