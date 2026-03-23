import { FaPhone, FaWhatsapp } from "react-icons/fa";

import { contactDetails } from "~/components/data";
import { PageHero } from "~/components/ui/page-hero";

export function ContactHero() {
  return (
    <PageHero
      actions={[
        {
          label: (
            <span className="inline-flex items-center gap-2">
              <FaWhatsapp aria-hidden="true" className="h-4 w-4" />
              Enviar WhatsApp
            </span>
          ),
          to: contactDetails.whatsappHref,
          external: true,
        },
        {
          label: (
            <span className="inline-flex items-center gap-2">
              <FaPhone aria-hidden="true" className="h-4 w-4" />
              Llamar ahora
            </span>
          ),
          to: contactDetails.phoneHref,
          external: true,
        },
      ]}
      description="Encuentra aquí dirección, horario, teléfono, WhatsApp, correo y la opción de consulta en línea para iniciar tu atención en VIXI."
      eyebrow="Contacto"
      image={{
        alt: "Fachada contemporánea de un hospital con luz cálida.",
        src: "/heroes/contact-hero-bg.avif",
      }}
      imageBadge="Canales directos"
      imageCaption="WhatsApp, llamada, correo y ubicación clara para facilitar tu primer contacto con la clínica."
      stats={[
        { value: "León, Gto.", label: "ubicación de la clínica" },
        { value: "8:30 a 18:00 h", label: "horario de atención" },
        { value: "Consulta en línea", label: "disponible" },
      ]}
      title="Tu viaje a la fertilidad comienza con nosotros."
      variant="concierge"
    />
  );
}
