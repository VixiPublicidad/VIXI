import { CTABanner } from "~/components/shared/cta-banner";

import { OutOfTownHero } from "~/components/contact/out-of-town-hero";
import { OutOfTownHighlightsSection } from "~/components/contact/out-of-town-highlights";
import { OutOfTownSupport } from "~/components/contact/out-of-town-support";

export function OutOfTownPage() {
  return (
    <>
      <OutOfTownHero />
      <OutOfTownHighlightsSection />
      <OutOfTownSupport />
      <CTABanner
        description="Si vienes de otra ciudad, podemos ayudarte a organizar el siguiente paso clínico con la mayor claridad posible desde el inicio."
        eyebrow="Consulta previa"
        title="Viajar para tu tratamiento no debería sentirse desordenado."
      />
    </>
  );
}
