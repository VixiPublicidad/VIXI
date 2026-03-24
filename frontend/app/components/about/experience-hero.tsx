import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

import { contactDetails } from "~/components/data";
import { PageHero } from "~/components/ui/page-hero";

export function ExperienceHero() {
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
      description="La experiencia en VIXI combina tecnología avanzada con una sensación acogedora y relajante, para acompañarte con claridad en cada etapa."
      eyebrow="Nuestra experiencia"
      image={{
        alt: "Clínica de fertilidad VIXI.",
        src: "/heroes/experience-hero-bg.avif",
      }}
      imageBadge="Experiencia sensorial"
      imageCaption="Un ambiente moderno, tranquilo y humano que acompaña decisiones médicas importantes."
      stats={[
        { value: "Integral", label: "desde diagnóstico hasta seguimiento" },
        { value: "Serena", label: "tecnología avanzada con calma" },
        { value: "Personal", label: "acompañamiento en cada etapa" },
      ]}
      title="Tecnología avanzada con una sensación acogedora y relajante."
      contentAlignY="center"
      variant="process"
      height="screen"
    />
  );
}
