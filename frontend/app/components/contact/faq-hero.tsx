import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

import { contactDetails } from "~/components/data";
import { PageHero } from "~/components/ui/page-hero";

export function FAQHero() {
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
              <FaArrowRight aria-hidden="true" className="h-4 w-4" />
              Ir a contacto
            </span>
          ),
          to: "/contacto",
        },
      ]}
      description="Las preguntas frecuentes concentran inquietudes previas a la valoración: costos, tiempos, probabilidad de éxito y acompañamiento remoto."
      eyebrow="Preguntas frecuentes"
      image={{
        alt: "Recepción clínica con paciente resolviendo dudas antes de consulta.",
        src: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=1200&q=80",
      }}
      imageBadge="Información esencial"
      imageCaption="Respuestas claras para entender costos, tiempos, probabilidades y opciones de atención."
      stats={[
        { value: "Costos", label: "explicados por etapa" },
        { value: "Tiempos", label: "según cada procedimiento" },
        { value: "Expectativas", label: "desde criterios médicos responsables" },
      ]}
      title="Respuestas claras para las dudas más comunes antes de empezar."
      variant="editorial"
    />
  );
}
