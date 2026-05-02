import type { ReactNode } from "react";
import { FaBaby, FaDna, FaFlask, FaMicroscope } from "react-icons/fa";

const CATEGORIES = [
  {
    icon: <FaMicroscope aria-hidden="true" className="h-6 w-6" />,
    title: "Baja complejidad",
    body: "Inseminación artificial homóloga o de donante.",
    items: ["Inseminación artificial homóloga", "Inseminación artificial de donante"],
  },
  {
    icon: <FaDna aria-hidden="true" className="h-6 w-6" />,
    title: "Alta complejidad",
    body: "Fertilización in vitro e inyección intracitoplasmática de espermatozoides, seleccionadas según diagnóstico y objetivos reproductivos.",
    items: [
      "Fertilización in vitro (FIV)",
      "Inyección intracitoplasmática de espermatozoides (ICSI)",
    ],
  },
  {
    icon: <FaFlask aria-hidden="true" className="h-6 w-6" />,
    title: "Opciones complementarias",
    body: "Ovodonación, diagnóstico genético preimplantacional en todas sus variantes y estudios genéticos preconcepcionales.",
    items: [
      "Ovodonación",
      "Diagnóstico genético preimplantacional en todas sus variantes",
      "Estudios genéticos preconcepcionales",
    ],
  },
  {
    icon: <FaBaby aria-hidden="true" className="h-6 w-6" />,
    title: "Acompañamiento para distintos proyectos de familia",
    body: "Opciones de tratamiento para parejas del mismo sexo y personas que buscan maternidad o paternidad de forma independiente.",
    items: [
      "Parejas del mismo sexo",
      "Maternidad independiente",
      "Paternidad independiente",
    ],
  },
] as const;

export function TreatmentsCategories() {
  return (
    <section className="mx-auto max-w-[80vw] py-16 lg:px-8">
      <div className="grid max-w-5xl gap-6 sm:grid-cols-[auto_1fr] md:gap-10">
        <div className="relative hidden h-full w-1 sm:block">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-brand-950 via-brand-700/60 to-transparent" />
          <div className="absolute -left-[5px] top-0 h-3 w-3 rounded-full bg-brand-950 shadow-[0_0_15px_rgba(0,0,0,0.2)]" />
        </div>
        <div>
          <p className="eyebrow-label mb-4 text-[10px] text-brand-700">Portafolio clínico</p>
          <h2 className="display-balance font-display text-4xl leading-[0.96] tracking-[-0.05em] text-brand-950 sm:text-5xl lg:text-6xl">
            Opciones terapéuticas organizadas con criterio clínico
          </h2>
          <p className="mt-6 max-w-3xl pr-4 text-base leading-8 text-brand-950/74 sm:ml-4 sm:text-lg">
            Tratamientos de baja y alta complejidad, opciones complementarias y acompañamiento para
            distintos proyectos de familia.
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-5">
        {CATEGORIES.map((category) => (
          <TreatmentCard icon={category.icon} key={category.title}>
            <h2 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
              {category.title}
            </h2>
            <p className="mt-4 text-[0.98rem] leading-7 text-brand-950/68">{category.body}</p>
            <div className="mt-6 border-t border-brand-950/8 pt-5">
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li className="flex items-start gap-2.5" key={item}>
                    <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-700/40" />
                    <span className="text-[0.88rem] leading-6 text-brand-950/68">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TreatmentCard>
        ))}
      </div>
    </section>
  );
}

function TreatmentCard({ children, icon }: { children: ReactNode; icon: ReactNode }) {
  return (
    <article className="group flex flex-1 basis-[calc(100%-1.25rem)] flex-col rounded-[30px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(11,31,59,0.11)] lg:basis-[calc(50%-1.25rem)]">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[18px] bg-brand-950/[0.04] text-brand-700 transition-colors group-hover:bg-brand-950/[0.06]">
        {icon}
      </div>
      {children}
    </article>
  );
}
