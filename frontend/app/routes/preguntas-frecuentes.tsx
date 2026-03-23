import { faqItems } from "~/components/data";
import { FAQPage } from "~/components/contact/faq-page";
import { buildMeta } from "~/components/lib/meta";

export function meta() {
  return buildMeta(
    "Preguntas frecuentes sobre fertilidad",
    "Resuelve dudas frecuentes sobre costos, tiempos, expectativas clínicas y consulta en línea en VIXI.",
    {
      path: "/preguntas-frecuentes",
      image: "/og/og-2.png",
      keywords: ["preguntas frecuentes fertilidad", "costos fertilidad", "consulta fertilidad"],
      structuredData: [
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage: "es-MX",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        },
      ],
    },
  );
}

export default function PreguntasFrecuentesRoute() {
  return <FAQPage />;
}
