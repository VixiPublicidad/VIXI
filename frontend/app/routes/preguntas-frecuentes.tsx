import { FAQPage } from "~/components/contact/faq-page";
import { buildMeta } from "~/components/lib/meta";

export function meta() {
  return buildMeta(
    "Preguntas frecuentes",
    "Resuelve dudas sobre costos, tiempos, expectativas clínicas y consulta en línea.",
  );
}

export default function PreguntasFrecuentesRoute() {
  return <FAQPage />;
}
