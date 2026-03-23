import type { Action, ImageAsset, Stat } from "~/components/data/types";

import { contactDetails } from "~/components/data/contact";

export const heroImage: ImageAsset = {
  src: "/heroes/home-hero-bg.avif",
  alt: "Especialista en consulta de fertilidad atendiendo a una paciente en un entorno clínico elegante.",
  width: 1536,
  height: 1024,
};

export const galleryImages: ImageAsset[] = [
  {
    src: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1000&q=80",
    alt: "Manos agarradas de familiares en señal de apoyo.",
  },
  {
    src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
    alt: "Equipo médico moderno y profesional.",
  },
  {
    src: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=80",
    alt: "Doctor operando.",
  },
  {
    src: "/gallery/consultation_empathy.png",
    alt: "Consulta médica cálida y profesional enfocada en el trato humano.",
  },
];

export const experienceImages: ImageAsset[] = [
  {
    src: "/gallery/experiencia_1.avif",
    alt: "Sala de espera en clínica moderna de fertilidad, diseño sereno y relajante.",
  },
  {
    src: "/gallery/experiencia_2.avif",
    alt: "Médico tomando la mano de un paciente en un gesto de consuelo, clínica moderna.",
  },
  {
    src: "/gallery/experiencia_3.avif",
    alt: "Sala de consulta médica de alta tecnología pero cálida y acogedora.",
  },
];

export const homeStats: Stat[] = [
  { value: "12 años", label: "de experiencia clínica" },
  { value: "1 equipo", label: "multidisciplinario para cada caso" },
  { value: "Hospital", label: "de prestigio como respaldo" },
];

export const homeActions: Action[] = [
  { label: "Agendar valoración", to: contactDetails.whatsappHref, external: true },
  { label: "Conocer tratamientos", to: "/tratamientos" },
];

export const valueProposition = [
  {
    title: "Fertilidad asistida con criterio médico",
    description:
      "Valoramos cada historia con un plan clínico claro, humano y diseñado para la etapa reproductiva de cada paciente.",
  },
  {
    title: "Tecnología avanzada con acompañamiento cercano",
    description:
      "La experiencia de VIXI combina diagnóstico, procedimientos y seguimiento en un ambiente sereno y altamente profesional.",
  },
  {
    title: "Atención para distintos modelos de familia",
    description:
      "Atendemos parejas, maternidad o paternidad independiente y tratamientos que requieren decisiones personalizadas.",
  },
];

export const brandPillars = [
  {
    title: "Ciencia",
    description: "Diagnóstico preciso, protocolos individualizados y respaldo hospitalario.",
    image: {
      src: "/pillars/ciencia.avif",
      alt: "Laboratorio médico moderno y análisis clínico",
    },
  },
  {
    title: "Experiencia",
    description: "Equipo con formación en biología de la reproducción humana y cirugía de mínima invasión.",
    image: {
      src: "/pillars/experiencia.avif",
      alt: "Equipo de especialistas médicos profesionales y experimentados",
    },
  },
  {
    title: "Cercanía",
    description: "Un proceso emocionalmente acompañado, claro y respetuoso en cada etapa.",
    image: {
      src: "/pillars/cercania.avif",
      alt: "Consulta médica cálida, empática y de confianza",
    },
  },
];

export const differentiator =
  "VIXI es el único centro de fertilización asistida de la región ubicado dentro de un hospital de prestigio.";

export const audienceCards = [
  {
    title: "Parejas que llevan tiempo buscando embarazo",
    description:
      "Procesos clínicos claros para quienes necesitan una solución segura, moderna y cercana.",
  },
  {
    title: "Familias con hijos que desean crecer",
    description:
      "Acompañamiento cálido para pacientes que quieren tener un hijo más sin perder confianza en el proceso.",
  },
  {
    title: "Pacientes de +45 años",
    description:
      "Alternativas personalizadas para quienes buscan opciones reproductivas en etapas más avanzadas.",
  },
];
