import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

import { contactDetails } from "~/components/data";
import { PageHero } from "~/components/ui/page-hero";

export function ProcessHero() {
  return (
    <PageHero
      actions={[
        {
          label: (
            <span className="inline-flex items-center gap-2">
              <FaWhatsapp aria-hidden="true" className="h-4 w-4" />
              Agendar valoración
            </span>
          ),
          to: contactDetails.whatsappHref,
          external: true,
        },
        {
          label: (
            <span className="inline-flex items-center gap-2">
              <FaArrowRight aria-hidden="true" className="h-4 w-4" />
              Ver tratamientos
            </span>
          ),
          to: "/tratamientos",
        },
      ]}
      description="El proceso inicia con una primera consulta, avanza hacia un diagnóstico definitivo y permite definir el tratamiento adecuado para cada caso."
      eyebrow="Cómo funciona tu tratamiento"
      image={{
        alt: "Paciente conversando con su especialista en una consulta privada y serena.",
        src: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1200&q=80",
      }}
      imageBadge="Recorrido clínico"
      imageCaption="Consulta, diagnóstico, definición del factor y propuesta de tratamiento en una ruta clara y acompañada."
      stats={[
        { value: "1", label: "primera consulta estructurada" },
        { value: "6", label: "etapas explicadas con claridad" },
        { value: "100%", label: "preparación individualizada" },
      ]}
      title="Un proceso explicado paso a paso para tomar decisiones con menos incertidumbre."
      variant="process"
      height="screen"
    />
  );
}
