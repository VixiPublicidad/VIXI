import { FAQPage } from "~/components/contact/faq-page";
import { buildMeta } from "~/components/lib/meta";

export function meta() {
  return buildMeta(
    "Preguntas frecuentes sobre fertilidad",
    "Resuelve dudas frecuentes sobre costos, tiempos, expectativas clinicas y consulta en linea en VIXI.",
    {
      path: "/preguntas-frecuentes",
      image: "/og/og-2.png",
      keywords: ["preguntas frecuentes fertilidad", "costos fertilidad", "consulta fertilidad"],
      structuredData: [
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage: "es-MX",
          mainEntity: [
            {
              "@type": "Question",
              name: "Cuanto cuesta un tratamiento de fertilidad?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No existe un costo unico. El presupuesto depende del diagnostico, estudios necesarios, medicamentos y procedimiento indicado. En consulta se explica con claridad que incluye cada etapa.",
              },
            },
            {
              "@type": "Question",
              name: "Cuanto dura cada proceso?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "El tiempo cambia segun el tipo de tratamiento. Algunas valoraciones se resuelven en pocas semanas y otros protocolos requieren varias fases. El plan se agenda con tiempos realistas desde el inicio.",
              },
            },
            {
              "@type": "Question",
              name: "Que probabilidad de exito tiene mi caso?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "La probabilidad depende de factores como edad, reserva ovarica, diagnostico y antecedentes. En VIXI se revisa cada caso de manera individual para hablar con expectativas medicas responsables.",
              },
            },
            {
              "@type": "Question",
              name: "Atienden pacientes de otros estados o paises?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Si. VIXI contempla atencion para pacientes foraneos con orientacion previa, coordinacion de visitas y seguimiento remoto cuando es pertinente.",
              },
            },
            {
              "@type": "Question",
              name: "Puedo iniciar con consulta en linea?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Si. La consulta en linea puede servir para una valoracion inicial, revision de estudios previos y planeacion del siguiente paso clinico.",
              },
            },
            {
              "@type": "Question",
              name: "Atienden distintos modelos de familia?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Si. VIXI acompana de forma inclusiva a parejas y pacientes que buscan maternidad o paternidad desde contextos y necesidades diferentes.",
              },
            },
          ],
        },
      ],
    },
  );
}

export default function PreguntasFrecuentesRoute() {
  return <FAQPage />;
}
