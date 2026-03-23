import { CTABanner } from "~/components/shared/cta-banner";

import { HomeAudiences } from "~/components/home/home-audiences";
import { HomeExperience } from "~/components/home/home-experience";
import { HomeFaqContact } from "~/components/home/home-faq-contact";
import { HomeHero } from "~/components/home/home-hero";
import { HomePillars } from "~/components/home/home-pillars";
import { HomeTreatmentsPreview } from "~/components/home/home-treatments-preview";
import { HomeValueProposition } from "~/components/home/home-value-proposition";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeValueProposition />
      <HomePillars />
      <HomeTreatmentsPreview />
      <HomeExperience />
      <HomeAudiences />
      <HomeFaqContact />
      <CTABanner
        description="Agenda una valoración para revisar tu caso con un equipo que entiende la fertilidad desde la medicina, la experiencia y la cercanía."
        eyebrow="Siguiente paso"
        title="Tratamientos de alta y baja complejidad con acompañamiento real."
      />
    </>
  );
}
