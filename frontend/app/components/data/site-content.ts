export type NavItem = {
  label: string;
  to: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type Action = {
  label: string;
  to: string;
  external?: boolean;
};

export type Stat = {
  value: string;
  label: string;
};

export type DoctorProfile = {
  name: string;
  role: string;
  specialties: string[];
  education: string[];
  summary: string;
  image: ImageAsset;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type TreatmentCategory = {
  title: string;
  description: string;
  items: string[];
};

export const siteName = "VIXI";
export const siteTagline = "Ciencia y experiencia dando vida.";
const configuredSiteUrl =
  typeof process !== "undefined" && process.env?.SITE_URL
    ? process.env.SITE_URL
    : undefined;

export const siteUrl = configuredSiteUrl?.replace(/\/+$/, "") ?? "https://vixireproduccion.mx";
export const defaultOgImage = "/og/og-1.png";
export const siteLocale = "es_MX";
export const siteLanguage = "es-MX";
export const siteDescription =
  "Clínica de fertilidad con un enfoque cálido, personalizado y respaldado por tecnología avanzada dentro de un hospital de prestigio.";
export const organizationName = "VIXI Reproducción";

export const siteNavigation: NavItem[] = [
  { label: "Inicio", to: "/" },
  { label: "Quiénes somos", to: "/quienes-somos" },
  { label: "Experiencia", to: "/nuestra-experiencia" },
  { label: "Tratamientos", to: "/tratamientos" },
  { label: "Proceso", to: "/como-funciona-tu-tratamiento" },
  { label: "Foráneos", to: "/pacientes-foraneos" },
  { label: "FAQ", to: "/preguntas-frecuentes" },
  { label: "Contacto", to: "/contacto" },
];

export const contactDetails = {
  phoneDisplay: "477 672 5136",
  phoneHref: "tel:+524776725136",
  whatsappDisplay: "WhatsApp 477 672 5136",
  whatsappHref: "https://wa.me/524776725136",
  email: "pacientes.vixi@gmail.com",
  emailHref: "mailto:pacientes.vixi@gmail.com",
  hours: "Lunes a viernes · 8:30 a 18:00 h",
  address: "Av. Cerro Gordo, Lomas del Campestre, 37150 León de los Aldama, Guanajuato",
  streetAddress: "Av. Cerro Gordo, Lomas del Campestre",
  postalCode: "37150",
  locality: "León de los Aldama",
  region: "Guanajuato",
  countryCode: "MX",
  latitude: 21.1574,
  longitude: -101.6942,
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:30",
    closes: "18:00",
  },
};

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
    alt: "Doctor operando",
  },
  {
    src: "/gallery/consultation_empathy.png",
    alt: "Consulta médica cálida y profesional enfocada en el trato humano.",
  }
];

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
    image: { src: "/pillars/ciencia.avif", alt: "Laboratorio médico moderno y análisis clínico" }
  },
  {
    title: "Experiencia",
    description: "Equipo con formación en biología de la reproducción humana y cirugía de mínima invasión.",
    image: { src: "/pillars/experiencia.avif", alt: "Equipo de especialistas médicos profesionales y experimentados" }
  },
  {
    title: "Cercanía",
    description: "Un proceso emocionalmente acompañado, claro y respetuoso en cada etapa.",
    image: { src: "/pillars/cercania.avif", alt: "Consulta médica cálida, empática y de confianza" }
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

export const multidisciplinaryTeam = [
  {
    title: "Ginecología",
    description: "Valoración y manejo del sistema reproductivo femenino como base del proceso clínico.",
  },
  {
    title: "Biología de la reproducción",
    description: "Especialidad central de VIXI, enfocada en el diagnóstico y tratamiento del factor infértil.",
  },
  {
    title: "Endocrinología",
    description: "Regulación hormonal que impacta directamente en la ovulación y la respuesta al tratamiento.",
  },
  {
    title: "Andrología",
    description: "Estudio y tratamiento del factor masculino, incluyendo calidad y función del esperma.",
  },
  {
    title: "Medicina materno-fetal",
    description: "Seguimiento especializado de embarazos de alto riesgo surgidos tras tratamiento de fertilidad.",
  },
  {
    title: "Genética",
    description: "Detección de alteraciones cromosómicas que pueden afectar la viabilidad del embrión.",
  },
  {
    title: "Cirugía de mínima invasión",
    description: "Procedimientos laparoscópicos e histeroscópicos con menor recuperación y mayor precisión.",
  },
];

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

export const faqItems: FAQItem[] = [
  {
    question: "¿Cuánto cuesta un tratamiento de fertilidad?",
    answer:
      "No existe un costo único. El presupuesto depende del diagnóstico, estudios necesarios, medicamentos y procedimiento indicado. En consulta se explica con claridad qué incluye cada etapa.",
  },
  {
    question: "¿Cuánto dura cada proceso?",
    answer:
      "El tiempo cambia según el tipo de tratamiento. Algunas valoraciones se resuelven en pocas semanas y otros protocolos requieren varias fases. El plan se agenda con tiempos realistas desde el inicio.",
  },
  {
    question: "¿Qué probabilidad de éxito tiene mi caso?",
    answer:
      "La probabilidad depende de factores como edad, reserva ovárica, diagnóstico y antecedentes. En VIXI se revisa cada caso de manera individual para hablar con expectativas médicas responsables.",
  },
  {
    question: "¿Atienden pacientes de otros estados o países?",
    answer:
      "Sí. VIXI contempla atención para pacientes foráneos con orientación previa, coordinación de visitas y seguimiento remoto cuando es pertinente.",
  },
  {
    question: "¿Puedo iniciar con consulta en línea?",
    answer:
      "Sí. La consulta en línea puede servir para una valoración inicial, revisión de estudios previos y planeación del siguiente paso clínico.",
  },
  {
    question: "¿Atienden distintos modelos de familia?",
    answer:
      "Sí. VIXI acompaña de forma inclusiva a parejas y pacientes que buscan maternidad o paternidad desde contextos y necesidades diferentes.",
  },
];

export const footerLinks = [
  {
    title: "Explora",
    links: [
      { label: "Inicio", to: "/" },
      { label: "Quiénes somos", to: "/quienes-somos" },
      { label: "Experiencia", to: "/nuestra-experiencia" },
      { label: "Tratamientos", to: "/tratamientos" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Proceso", to: "/como-funciona-tu-tratamiento" },
      { label: "Foráneos", to: "/pacientes-foraneos" },
      { label: "FAQ", to: "/preguntas-frecuentes" },
      { label: "Contacto", to: "/contacto" },
    ],
  },
];
