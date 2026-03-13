import { ExperiencePage } from "~/components/about/experience-page";
import { buildMeta } from "~/components/lib/meta";

export function meta() {
  return buildMeta(
    "Experiencia clínica y atención personalizada",
    "Descubre la experiencia clínica de VIXI: atención cercana, instalaciones modernas y acompañamiento personalizado para pacientes de fertilidad.",
    {
      path: "/nuestra-experiencia",
      image: "/og/og-3.png",
      keywords: ["experiencia clinica fertilidad", "clinica de fertilidad moderna", "atencion personalizada fertilidad"],
    },
  );
}

export default function NuestraExperienciaRoute() {
  return <ExperiencePage />;
}
