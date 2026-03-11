export type NavItem = {
  label: string;
  to: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
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
export const siteDescription =
  "Clinica de fertilidad con un enfoque calido, personalizado y respaldado por tecnologia avanzada dentro de un hospital de prestigio.";

export const siteNavigation: NavItem[] = [
  { label: "Inicio", to: "/" },
  { label: "Quienes somos", to: "/quienes-somos" },
  { label: "Experiencia", to: "/nuestra-experiencia" },
  { label: "Tratamientos", to: "/tratamientos" },
  { label: "Proceso", to: "/como-funciona-tu-tratamiento" },
  { label: "Foraneos", to: "/pacientes-foraneos" },
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
  address: "Av. Cerro Gordo, Lomas del Campestre, 37150 Leon de los Aldama, Guanajuato",
};

export const heroImage: ImageAsset = {
  src: "/heroes/home-hero-bg.avif",
  alt: "Especialista en consulta de fertilidad atendiendo a una paciente en un entorno clinico elegante.",
};

export const galleryImages: ImageAsset[] = [
  {
    src: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1000&q=80",
    alt: "Manos agarradas de familiares en señal de apoyo.",
  },
  {
    src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
    alt: "Equipo medico moderno y profesional.",
  },
  {
    src: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=80",
    alt: "Doctor operando",
  },
  {
    src: "/gallery/consultation_empathy.png",
    alt: "Consulta medica calida y profesional enfocada en el trato humano.",
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
  { value: "12 anos", label: "de experiencia clinica" },
  { value: "1 equipo", label: "multidisciplinario para cada caso" },
  { value: "Hospital", label: "de prestigio como respaldo" },
];

export const homeActions: Action[] = [
  { label: "Agendar valoracion", to: contactDetails.whatsappHref, external: true },
  { label: "Conocer tratamientos", to: "/tratamientos" },
];

export const valueProposition = [
  {
    title: "Fertilidad asistida con criterio medico",
    description:
      "Valoramos cada historia con un plan clinico claro, humano y disenado para la etapa reproductiva de cada paciente.",
  },
  {
    title: "Tecnologia avanzada con acompanamiento cercano",
    description:
      "La experiencia de VIXI combina diagnostico, procedimientos y seguimiento en un ambiente sereno y altamente profesional.",
  },
  {
    title: "Atencion para distintos modelos de familia",
    description:
      "Atendemos parejas, maternidad o paternidad independiente y tratamientos que requieren decisiones personalizadas.",
  },
];

export const brandPillars = [
  {
    title: "Ciencia",
    description: "Diagnostico preciso, protocolos individualizados y respaldo hospitalario.",
    image: { src: "/pillars/ciencia.avif", alt: "Laboratorio medico moderno y analisis clinico" }
  },
  {
    title: "Experiencia",
    description: "Equipo con formacion en biologia de la reproduccion humana y cirugia de minima invasion.",
    image: { src: "/pillars/experiencia.avif", alt: "Equipo de especialistas medicos profesionales y experimentados" }
  },
  {
    title: "Cercania",
    description: "Un proceso emocionalmente acompanado, claro y respetuoso en cada etapa.",
    image: { src: "/pillars/cercania.avif", alt: "Consulta medica calida, empatica y de confianza" }
  },
];

export const differentiator =
  "VIXI es el unico centro de fertilizacion asistida de la region ubicado dentro de un hospital de prestigio.";

export const audienceCards = [
  {
    title: "Parejas que llevan tiempo buscando embarazo",
    description:
      "Procesos clinicos claros para quienes necesitan una solucion segura, moderna y cercana.",
  },
  {
    title: "Familias con hijos que desean crecer",
    description:
      "Acompanamiento calido para pacientes que quieren tener un hijo mas sin perder confianza en el proceso.",
  },
  {
    title: "Pacientes de +45 anos",
    description:
      "Alternativas personalizadas para quienes buscan opciones reproductivas en etapas mas avanzadas.",
  },
];

export const experienceHighlights = [
  {
    title: "Atencion integral",
    description: "Atencion integral desde el diagnostico hasta el embarazo y el seguimiento.",
  },
  {
    title: "Ambiente moderno",
    description: "Ambiente moderno, minimalista y tranquilo con calidez humana.",
  },
  {
    title: "Acompanamiento personalizado",
    description: "Acompanamiento personalizado en cada decision clinica y emocional.",
  },
];

export const teamProfiles: DoctorProfile[] = [
  {
    name: "Dra. Liliana Elizabeth Hernandez Lara",
    role: "Ginecologia, obstetricia y biologia de la reproduccion humana",
    specialties: [
      "Ginecologia y obstetricia",
      "Biologia de la reproduccion humana",
      "Cirugia de minima invasion",
    ],
    education: [
      "Medicina · Universidad de San Luis Potosi",
      "Ginecologia y obstetricia · Universidad de Guanajuato",
      "Biologia de la reproduccion humana · Universidad de Valencia",
    ],
    summary:
      "Enfoca cada tratamiento desde una perspectiva medica rigurosa con sensibilidad por el contexto emocional de cada paciente.",
    image: {
      src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80",
      alt: "Medica especialista sonriendo en un consultorio contemporaneo.",
    },
  },
  {
    name: "Dr. Francisco Ulises Estrada Ontiveros",
    role: "Ginecologia, reproduccion humana y endoscopia ginecologica",
    specialties: [
      "Ginecologia y obstetricia",
      "Biologia de la reproduccion humana",
      "Cirugia de minima invasion",
    ],
    education: [
      "Medicina y ginecologia · Universidad de Guanajuato",
      "Biologia de la reproduccion humana · Universidad de Valencia",
      "Endoscopia ginecologica · Universidad Catolica de Valencia",
    ],
    summary:
      "Integra experiencia quirurgica y fertilidad avanzada para construir estrategias individualizadas y realistas.",
    image: {
      src: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=900&q=80",
      alt: "Especialista medico en un pasillo clinico con luz natural.",
    },
  },
];

export const multidisciplinaryTeam = [
  {
    title: "Ginecologia",
    description: "Valoracion y manejo del sistema reproductivo femenino como base del proceso clinico.",
  },
  {
    title: "Biologia de la reproduccion",
    description: "Especialidad central de VIXI, enfocada en el diagnostico y tratamiento del factor infertil.",
  },
  {
    title: "Endocrinologia",
    description: "Regulacion hormonal que impacta directamente en la ovulacion y la respuesta al tratamiento.",
  },
  {
    title: "Andrologia",
    description: "Estudio y tratamiento del factor masculino, incluyendo calidad y funcion del esperma.",
  },
  {
    title: "Medicina materno fetal",
    description: "Seguimiento especializado de embarazos de alto riesgo surgidos tras tratamiento de fertilidad.",
  },
  {
    title: "Genetica",
    description: "Deteccion de alteraciones cromosomicas que pueden afectar la viabilidad del embrion.",
  },
  {
    title: "Cirugia de minima invasion",
    description: "Procedimientos laparoscopicos e histeroscopicos con menor recuperacion y mayor precision.",
  },
];

export const treatmentCategories: TreatmentCategory[] = [
  {
    title: "Evaluacion y diagnostico",
    description:
      "El proceso inicia con valoracion clinica completa para entender el origen del factor que dificulta el embarazo.",
    items: [
      "Consulta de fertilidad",
      "Estudios hormonales",
      "Estudios de fertilidad femenina",
      "Estudios de fertilidad masculina",
    ],
  },
  {
    title: "Reproduccion asistida",
    description:
      "Opciones de baja y alta complejidad seleccionadas segun diagnostico, edad reproductiva y objetivos del tratamiento.",
    items: [
      "Inseminacion intrauterina (IIU)",
      "Fertilizacion in vitro (FIV)",
      "ICSI",
    ],
  },
  {
    title: "Preservacion de fertilidad",
    description:
      "Protocolos para preservar ovulos, esperma o embriones cuando el tiempo reproductivo requiere planeacion.",
    items: ["Preservacion de fertilidad (ovulos, esperma y embriones)"],
  },
  {
    title: "Donacion",
    description:
      "Alternativas clinicas para casos que requieren apoyo reproductivo complementario bajo valoracion medica.",
    items: ["Donacion de ovulos", "Donacion de esperma"],
  },
  {
    title: "Modelos de familia",
    description:
      "Acompanamiento respetuoso para pacientes y parejas que buscan construir familia desde distintos contextos.",
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
      "La valoracion inicia como una consulta clinica completa con tu especialista tratante.",
  },
  {
    step: "02",
    title: "Diagnostico definitivo",
    description:
      "Se integran antecedentes, estudios y hallazgos para entender con precision el caso.",
  },
  {
    step: "03",
    title: "Definicion del factor",
    description:
      "Identificamos que elemento esta interfiriendo con el embarazo para tomar decisiones con fundamento.",
  },
  {
    step: "04",
    title: "Propuesta de tratamiento",
    description:
      "El plan se individualiza segun edad, diagnostico, antecedentes y objetivos reproductivos.",
  },
  {
    step: "05",
    title: "Procedimiento en VIXI",
    description:
      "El tratamiento se realiza dentro de las instalaciones de VIXI en la torre del hospital.",
  },
  {
    step: "06",
    title: "Preparacion y seguimiento",
    description:
      "Costos, tiempos y preparacion se explican de forma personalizada segun el procedimiento elegido.",
  },
];

export const outOfTownHighlights = [
  {
    title: "Valoracion inicial en linea",
    description:
      "La consulta virtual permite revisar antecedentes y preparar estudios antes de tu visita presencial.",
  },
  {
    title: "Planeacion de tiempos",
    description:
      "Organizamos el calendario clinico para concentrar valoraciones y procedimientos cuando el caso lo permite.",
  },
  {
    title: "Seguimiento a distancia",
    description:
      "El acompanamiento continua por canales remotos para dar claridad entre citas y resolver dudas puntuales.",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "Cuanto cuesta un tratamiento de fertilidad?",
    answer:
      "No existe un costo unico. El presupuesto depende del diagnostico, estudios necesarios, medicamentos y procedimiento indicado. En consulta se explica con claridad que incluye cada etapa.",
  },
  {
    question: "Cuanto dura cada proceso?",
    answer:
      "El tiempo cambia segun el tipo de tratamiento. Algunas valoraciones se resuelven en pocas semanas y otros protocolos requieren varias fases. El plan se agenda con tiempos realistas desde el inicio.",
  },
  {
    question: "Que probabilidad de exito tiene mi caso?",
    answer:
      "La probabilidad depende de factores como edad, reserva ovarica, diagnostico y antecedentes. En VIXI se revisa cada caso de manera individual para hablar con expectativas medicas responsables.",
  },
  {
    question: "Atienden pacientes de otros estados o paises?",
    answer:
      "Si. VIXI contempla atencion para pacientes foraneos con orientacion previa, coordinacion de visitas y seguimiento remoto cuando es pertinente.",
  },
  {
    question: "Puedo iniciar con consulta en linea?",
    answer:
      "Si. La consulta en linea puede servir para una valoracion inicial, revision de estudios previos y planeacion del siguiente paso clinico.",
  },
  {
    question: "Atienden distintos modelos de familia?",
    answer:
      "Si. VIXI acompana de forma inclusiva a parejas y pacientes que buscan maternidad o paternidad desde contextos y necesidades diferentes.",
  },
];

export const footerLinks = [
  {
    title: "Explora",
    links: [
      { label: "Inicio", to: "/" },
      { label: "Quienes somos", to: "/quienes-somos" },
      { label: "Experiencia", to: "/nuestra-experiencia" },
      { label: "Tratamientos", to: "/tratamientos" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Proceso", to: "/como-funciona-tu-tratamiento" },
      { label: "Foraneos", to: "/pacientes-foraneos" },
      { label: "FAQ", to: "/preguntas-frecuentes" },
      { label: "Contacto", to: "/contacto" },
    ],
  },
];

