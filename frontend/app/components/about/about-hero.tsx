import { galleryImages, homeActions } from "~/components/data";
import { PageHero } from "~/components/ui/page-hero";

export function AboutHero() {
  return (
    <PageHero
      actions={homeActions}
      description="VIXI es una clínica de fertilidad especializada en biología de la reproducción humana, con un enfoque cálido, personalizado y respaldado por tecnología avanzada."
      eyebrow="Quiénes somos"
      image={galleryImages[1]}
      imageBadge="Base institucional"
      imageCaption="Especialidad médica, experiencia clínica y un entorno hospitalario confiable para acompañar cada decisión."
      stats={[
      ]}
      title="Una clínica que combina rigor médico, sensibilidad humana y tecnología avanzada."
      variant="editorial"
      height="screen"
    />
  );
}
