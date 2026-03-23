import { CTABanner } from "~/components/shared/cta-banner";

import { FAQAccordion } from "~/components/contact/faq-accordion";
import { FAQHero } from "~/components/contact/faq-hero";

export function FAQPage() {
  return (
    <>
      <FAQHero />
      <FAQAccordion />
      <CTABanner
        description="Si tu duda requiere contexto médico, agenda una valoración para recibir una respuesta ajustada a tu caso."
        eyebrow="Resuelve tus dudas"
        title="La mejor respuesta siempre parte de tu diagnóstico."
      />
    </>
  );
}
