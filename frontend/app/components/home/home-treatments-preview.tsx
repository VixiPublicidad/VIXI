import { FaDna, FaMicroscope, FaSnowflake } from "react-icons/fa";

const TREATMENTS = [
  {
    icon: FaMicroscope,
    title: "Evaluación y diagnóstico integral",
    body: "El proceso inicia con una valoración clínica completa y estructurada, orientada a identificar con precisión el origen de la infertilidad en ambos miembros de la pareja.",
    tags: [
      "Estudios hormonales",
      "Evaluación de reserva ovárica",
      "Análisis seminal avanzado",
      "Imagenología especializada",
    ],
  },
  {
    icon: FaDna,
    title: "Reproducción asistida",
    body: "Ofrecemos un portafolio completo de técnicas de reproducción asistida, seleccionadas de forma individualizada según el diagnóstico y objetivos de cada pareja.",
    tags: [
      "Inseminación intrauterina homóloga y de donante",
      "Fecundación in vitro",
      "Inyección intracitoplasmática de espermatozoides",
      "Donación de óvulos y semen",
      "Diagnóstico genético preimplantacional",
      "Laparoscopia e histeroscopia",
    ],
  },
  {
    icon: FaSnowflake,
    title: "Preservación de la fertilidad",
    body: "Desarrollamos protocolos para la preservación de óvulos, espermatozoides y embriones, tanto para planificar el futuro reproductivo como para actuar antes de tratamientos médicos inmediatos.",
    tags: [
      "Preservación de óvulos",
      "Espermatozoides",
      "Embriones",
      "Enfoque oportuno en pacientes oncológicos",
    ],
  },
] as const;

export function HomeTreatmentsPreview() {
  return (
    <section className="mx-auto max-w-[80vw] py-16 lg:px-8">
      <div className="grid max-w-5xl gap-6 sm:grid-cols-[auto_1fr] md:gap-10">
        <div className="relative hidden h-full w-1 sm:block">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-brand-950 via-brand-700/60 to-transparent" />
          <div className="absolute -left-[5px] top-0 h-3 w-3 rounded-full bg-brand-950 shadow-[0_0_15px_rgba(0,0,0,0.2)]" />
        </div>
        <div>
          <h2 className="display-balance font-display text-4xl leading-[0.96] tracking-[-0.05em] text-brand-950 sm:text-5xl lg:text-6xl">
            Un portafolio clínico integral para decisiones verdaderamente informadas
          </h2>
          <p className="mt-6 max-w-3xl pr-4 text-base leading-8 text-brand-950/74 sm:ml-4 sm:text-lg">
            Desde diagnóstico avanzado hasta tratamientos de alta complejidad, preservación de
            fertilidad y cirugía especializada.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {TREATMENTS.map((treatment) => {
          const Icon = treatment.icon;
          return (
            <article
              className="group flex flex-col rounded-[30px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(11,31,59,0.11)]"
              key={treatment.title}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[18px] bg-brand-950/[0.04] text-brand-700 transition-colors group-hover:bg-brand-950/[0.06]">
                <Icon aria-hidden="true" className="h-6 w-6" />
              </div>
              <h3 className="font-display text-[1.65rem] leading-[1.02] tracking-[-0.035em] text-brand-950">
                {treatment.title}
              </h3>
              <p className="mt-4 text-[0.98rem] leading-7 text-brand-950/68">
                {treatment.body}
              </p>
              <div className="mt-6 border-t border-brand-950/8 pt-5">
                <ul className="space-y-2">
                  {treatment.tags.map((tag) => (
                    <li className="flex items-start gap-2.5" key={tag}>
                      <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-700/40" />
                      <span className="text-[0.88rem] leading-6 text-brand-950/68">{tag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
