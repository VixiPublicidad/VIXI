import { FaPhone, FaWhatsapp } from "react-icons/fa";

import { contactDetails } from "~/components/data";
import { PageHero } from "~/components/ui/page-hero";

export function OutOfTownHero() {
  return (
    <PageHero
      actions={[
        {
          label: (
            <span className="inline-flex items-center gap-2">
              <FaWhatsapp aria-hidden="true" className="h-4 w-4" />
              Resolver por WhatsApp
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
      description="VIXI atiende pacientes de otros estados y países, con orientación previa, consulta en línea y seguimiento a distancia cuando es posible."
      eyebrow="Pacientes foráneos"
      image={{
        alt: "Paciente revisando agenda de viaje y consulta médica.",
        src: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80",
      }}
      imageBadge="Logística cuidada"
      imageCaption="Acompañamiento claro para organizar consultas, estudios y tiempos de viaje con mayor tranquilidad."
      stats={[
      ]}
      title="Cuando viajas para atender tu fertilidad, la claridad logística también importa."
      contentAlignY="center"
      variant="gallery"
      height="screen"
    />
  );
}
