import { contactDetails } from "~/components/data";
import { CTABanner } from "~/components/shared/cta-banner";

import { ContactChannels } from "~/components/contact/contact-channels";
import { ContactFormSection, type ContactFormState } from "~/components/contact/contact-form-section";
import { ContactHero } from "~/components/contact/contact-hero";

export function ContactPage({ formState }: { formState?: ContactFormState }) {
  return (
    <>
      <ContactHero />
      <ContactChannels />
      <ContactFormSection formState={formState} />
      <CTABanner
        description="El equipo de VIXI puede orientarte por teléfono, correo o WhatsApp para programar tu primera consulta."
        eyebrow="Agenda hoy"
        secondaryAction={{ label: "Llamar ahora", to: contactDetails.phoneHref, external: true }}
        title="La conversación inicial puede empezar ahora."
      />
    </>
  );
}
