import type { TreatmentCategory } from "~/components/data/types";

export const treatmentCategories: TreatmentCategory[] = [
  {
    title: "Evaluación y diagnóstico",
    description:
      "El proceso inicia con valoración clínica completa para entender el origen del factor que dificulta el embarazo.",
    items: [
      "Consulta de fertilidad",
      "Estudios hormonales",
      "Estudios de fertilidad femenina",
      "Estudios de fertilidad masculina",
    ],
  },
  {
    title: "Reproducción asistida",
    description:
      "Opciones de baja y alta complejidad seleccionadas según diagnóstico, edad reproductiva y objetivos del tratamiento.",
    items: [
      "Inseminación intrauterina (IIU)",
      "Fertilización in vitro (FIV)",
      "ICSI",
    ],
  },
  {
    title: "Preservación de fertilidad",
    description:
      "Protocolos para preservar óvulos, esperma o embriones cuando el tiempo reproductivo requiere planeación.",
    items: ["Preservación de fertilidad (óvulos, esperma y embriones)"],
  },
  {
    title: "Donación",
    description:
      "Alternativas clínicas para casos que requieren apoyo reproductivo complementario bajo valoración médica.",
    items: ["Donación de óvulos", "Donación de esperma"],
  },
  {
    title: "Modelos de familia",
    description:
      "Acompañamiento respetuoso para pacientes y parejas que buscan construir familia desde distintos contextos.",
    items: [
      "Tratamientos para parejas del mismo sexo",
      "Tratamientos para maternidad o paternidad independiente",
    ],
  },
];

export const treatmentJourney = [
  {
    step: "01",
    title: "Primera consulta",
    description:
      "La valoración inicia como una consulta clínica completa con tu especialista tratante.",
  },
  {
    step: "02",
    title: "Diagnóstico definitivo",
    description:
      "Se integran antecedentes, estudios y hallazgos para entender con precisión el caso.",
  },
  {
    step: "03",
    title: "Definición del factor",
    description:
      "Identificamos qué elemento está interfiriendo con el embarazo para tomar decisiones con fundamento.",
  },
  {
    step: "04",
    title: "Propuesta de tratamiento",
    description:
      "El plan se individualiza según edad, diagnóstico, antecedentes y objetivos reproductivos.",
  },
  {
    step: "05",
    title: "Procedimiento en VIXI",
    description:
      "El tratamiento se realiza dentro de las instalaciones de VIXI en la torre del hospital.",
  },
  {
    step: "06",
    title: "Preparación y seguimiento",
    description:
      "Costos, tiempos y preparación se explican de forma personalizada según el procedimiento elegido.",
  },
];

export const outOfTownHighlights = [
  {
    title: "Valoración inicial en línea",
    description:
      "La consulta virtual permite revisar antecedentes y preparar estudios antes de tu visita presencial.",
  },
  {
    title: "Planeación de tiempos",
    description:
      "Organizamos el calendario clínico para concentrar valoraciones y procedimientos cuando el caso lo permite.",
  },
  {
    title: "Seguimiento a distancia",
    description:
      "El acompañamiento continúa por canales remotos para dar claridad entre citas y resolver dudas puntuales.",
  },
];
