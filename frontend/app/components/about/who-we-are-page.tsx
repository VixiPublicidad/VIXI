import { CTABanner } from "~/components/shared/cta-banner";

import { AboutClinicalProfile } from "~/components/about/about-clinical-profile";
import { AboutHero } from "~/components/about/about-hero";
import { AboutMultidisciplinaryTeam } from "~/components/about/about-multidisciplinary-team";
import { AboutPhilosophy } from "~/components/about/about-philosophy";
import { AboutTeam } from "~/components/about/about-team";

export function WhoWeArePage() {
  return (
    <>
      <AboutHero />
      <AboutClinicalProfile />
      <AboutPhilosophy />
      <AboutTeam />
      <AboutMultidisciplinaryTeam />
      <CTABanner
        description="Si quieres conocer el enfoque completo de VIXI, agenda una consulta y revisa con el equipo cuál es el mejor siguiente paso para tu caso."
        eyebrow="Conoce VIXI"
        title="Una clínica especializada, cálida y preparada para acompañarte."
      />
    </>
  );
}
