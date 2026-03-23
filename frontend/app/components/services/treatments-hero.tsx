import { PageHero } from "~/components/ui/page-hero";

export function TreatmentsHero() {
  return (
    <PageHero
      description="VIXI ofrece tratamientos de alta y baja complejidad para ayudar a lograr el embarazo con un plan individualizado y tecnología avanzada."
      eyebrow="Tratamientos"
      image={{
        alt: "Embrióloga trabajando con instrumental especializado en un laboratorio.",
        src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80",
      }}
      imageBadge="Portafolio clínico"
      imageCaption="Opciones terapéuticas explicadas con claridad para entender qué camino puede ajustarse mejor a tu caso."
      stats={[
      ]}
      title="Tratamientos de fertilidad organizados con claridad, sensibilidad y criterio médico."
      variant="editorial"
      height="60vh"
    />
  );
}
