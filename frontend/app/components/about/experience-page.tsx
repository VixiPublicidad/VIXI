import { CTABanner } from "~/components/shared/cta-banner";

import { ExperienceGallery } from "~/components/about/experience-gallery";
import { ExperienceHero } from "~/components/about/experience-hero";
import { ExperiencePrinciples } from "~/components/about/experience-principles";

export function ExperiencePage() {
  return (
    <>
      <ExperienceHero />
      <ExperiencePrinciples />
      <ExperienceGallery />
      <CTABanner
        description="La experiencia empieza desde la primera conversación. Agenda una valoración para conocer el proceso completo en VIXI."
        eyebrow="Primera consulta"
        title="Un espacio moderno y sereno para tomar decisiones con claridad."
      />
    </>
  );
}
