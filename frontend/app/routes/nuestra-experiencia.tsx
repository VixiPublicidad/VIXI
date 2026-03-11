import { ExperiencePage } from "~/components/about/experience-page";
import { buildMeta } from "~/components/lib/meta";

export function meta() {
  return buildMeta(
    "Nuestra experiencia",
    "Una experiencia clínica moderna, tranquila y cercana para pacientes de fertilidad.",
  );
}

export default function NuestraExperienciaRoute() {
  return <ExperiencePage />;
}
