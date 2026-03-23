import { heroImage, homeActions, homeStats } from "~/components/data";
import { PageHero } from "~/components/ui/page-hero";

export function HomeHero() {
  return (
    <PageHero
      actions={homeActions}
      description="VIXI es una clínica especializada en fertilización asistida que combina tecnología avanzada, trato cercano y decisiones clínicas individualizadas dentro de un entorno hospitalario de prestigio."
      eyebrow="Clínica de fertilidad"
      image={heroImage}
      imageBadge="Fertilidad con criterio"
      imageCaption="Medicina avanzada, conversaciones claras y una experiencia pensada para sostener decisiones complejas."
      stats={homeStats}
      subtitle="Es una decisión emocional, médica y profundamente humana."
      title="La fertilidad es más que un tratamiento."
      variant="signature"
      height="screen"
    />
  );
}
