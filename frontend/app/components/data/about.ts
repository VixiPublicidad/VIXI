import type { DoctorProfile, ImageAsset } from "~/components/data/types";

export const empathyGalleryImages: ImageAsset[] = [
  {
    src: "/gallery/ferti_1.avif",
    alt: "Manos agarradas de familiares en señal de apoyo.",
  },
  {
    src: "/gallery/ferti_2.avif",
    alt: "Equipo médico moderno y profesional.",
  },
  {
    src: "/gallery/ferti_3.avif",
    alt: "Doctor operando de manera profesional y empática.",
  },
  {
    src: "/gallery/consultation_empathy.png",
    alt: "Consulta médica cálida y profesional enfocada en el trato humano.",
  },
];

export const experienceHighlights = [
  {
    title: "Atención integral",
    description: "Atención integral desde el diagnóstico hasta el embarazo y el seguimiento.",
  },
  {
    title: "Ambiente moderno",
    description: "Ambiente moderno, minimalista y tranquilo con calidez humana.",
  },
  {
    title: "Acompañamiento personalizado",
    description: "Acompañamiento personalizado en cada decisión clínica y emocional.",
  },
];

export const teamProfiles: DoctorProfile[] = [
  {
    name: "Dra. Liliana Elizabeth Hernández Lara",
    role: "Ginecología, obstetricia y biología de la reproducción humana",
    specialties: [
      "Ginecología y obstetricia",
      "Biología de la reproducción humana",
      "Cirugía de mínima invasión",
    ],
    education: [
      "Medicina · Universidad de San Luis Potosí",
      "Ginecología y obstetricia · Universidad de Guanajuato",
      "Biología de la reproducción humana · Universidad de Valencia",
    ],
    summary:
      "Enfoca cada tratamiento desde una perspectiva médica rigurosa con sensibilidad por el contexto emocional de cada paciente.",
    image: {
      src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80",
      alt: "Médica especialista sonriendo en un consultorio contemporáneo.",
    },
  },
  {
    name: "Dr. Francisco Ulises Estrada Ontiveros",
    role: "Ginecología, reproducción humana y endoscopia ginecológica",
    specialties: [
      "Ginecología y obstetricia",
      "Biología de la reproducción humana",
      "Cirugía de mínima invasión",
    ],
    education: [
      "Medicina y ginecología · Universidad de Guanajuato",
      "Biología de la reproducción humana · Universidad de Valencia",
      "Endoscopia ginecológica · Universidad Católica de Valencia",
    ],
    summary:
      "Integra experiencia quirúrgica y fertilidad avanzada para construir estrategias individualizadas y realistas.",
    image: {
      src: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=900&q=80",
      alt: "Especialista médico en un pasillo clínico con luz natural.",
    },
  },
];
