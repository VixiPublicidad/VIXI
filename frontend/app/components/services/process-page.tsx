import { CTABanner } from "~/components/shared/cta-banner";

import { ProcessHero } from "~/components/services/process-hero";
import { ProcessJourney } from "~/components/services/process-journey";
import { ProcessSupportTeam } from "~/components/services/process-support-team";

export function ProcessPage() {
  return (
    <>
      <ProcessHero />
      <ProcessJourney />
      <ProcessSupportTeam />
      <CTABanner
        description="En consulta se explican costos, tiempos, estudios previos y preparación de manera individualizada según el procedimiento."
        eyebrow="Siguiente paso"
        title="Un tratamiento claro empieza con una conversación bien guiada."
      />
    </>
  );
}
