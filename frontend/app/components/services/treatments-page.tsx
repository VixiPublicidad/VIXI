import { CTABanner } from "~/components/shared/cta-banner";

import { TreatmentsCategories } from "~/components/services/treatments-categories";
import { TreatmentsHero } from "~/components/services/treatments-hero";

export function TreatmentsPage() {
  return (
    <>
      <TreatmentsHero />
      <TreatmentsCategories />
      <CTABanner
        description="La valoración inicial permite entender qué estudios y qué tratamiento tienen sentido para tu caso, sin rutas genéricas."
        eyebrow="Tratamiento individualizado"
        title="Cada procedimiento empieza con un diagnóstico bien hecho."
      />
    </>
  );
}
