import type { ReactNode } from "react";
import { FaBaby, FaDna, FaHandshake, FaMicroscope, FaSnowflake } from "react-icons/fa";

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
            Opciones terapéuticas explicadas de forma simple
          </h2>
          <p className="mt-6 max-w-3xl pr-4 text-base leading-8 text-brand-950/74 sm:ml-4 sm:text-lg">
            Incluye evaluación y diagnóstico, reproducción asistida, preservación de fertilidad, donación y opciones para distintos modelos de familia.
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-5">
        <TreatmentCard icon={<FaMicroscope aria-hidden="true" className="h-6 w-6" />}>
          <h2 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
            Evaluación y diagnóstico
          </h2>
          <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">
            El proceso inicia con valoración clínica completa para entender el origen del factor que dificulta el embarazo.
          </p>
          <div className="mt-6 border-t border-brand-950/8 pt-5">
            <p className="text-sm leading-7 text-brand-950/78">
              Consulta de fertilidad · Estudios hormonales · Estudios de fertilidad femenina · Estudios de fertilidad masculina
            </p>
          </div>
        </TreatmentCard>
        <TreatmentCard icon={<FaDna aria-hidden="true" className="h-6 w-6" />}>
          <h2 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
            Reproducción asistida
          </h2>
          <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">
            Opciones de baja y alta complejidad seleccionadas según diagnóstico, edad reproductiva y objetivos del tratamiento.
          </p>
          <div className="mt-6 border-t border-brand-950/8 pt-5">
            <p className="text-sm leading-7 text-brand-950/78">
              Inseminación intrauterina (IIU) · Fertilización in vitro (FIV) · ICSI
            </p>
          </div>
        </TreatmentCard>
        <TreatmentCard icon={<FaSnowflake aria-hidden="true" className="h-6 w-6" />}>
          <h2 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
            Preservación de fertilidad
          </h2>
          <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">
            Protocolos para preservar óvulos, esperma o embriones cuando el tiempo reproductivo requiere planeación.
          </p>
          <div className="mt-6 border-t border-brand-950/8 pt-5">
            <p className="text-sm leading-7 text-brand-950/78">
              Preservación de fertilidad (óvulos, esperma y embriones)
            </p>
          </div>
        </TreatmentCard>
        <TreatmentCard icon={<FaHandshake aria-hidden="true" className="h-6 w-6" />}>
          <h2 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
            Donación
          </h2>
          <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">
            Alternativas clínicas para casos que requieren apoyo reproductivo complementario bajo valoración médica.
          </p>
          <div className="mt-6 border-t border-brand-950/8 pt-5">
            <p className="text-sm leading-7 text-brand-950/78">Donación de óvulos · Donación de esperma</p>
          </div>
        </TreatmentCard>
        <TreatmentCard icon={<FaBaby aria-hidden="true" className="h-6 w-6" />}>
          <h2 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
            Modelos de familia
          </h2>
          <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">
            Acompañamiento respetuoso para pacientes y parejas que buscan construir familia desde distintos contextos.
          </p>
          <div className="mt-6 border-t border-brand-950/8 pt-5">
            <p className="text-sm leading-7 text-brand-950/78">
              Tratamientos para parejas del mismo sexo · Tratamientos para maternidad o paternidad independiente
            </p>
          </div>
        </TreatmentCard>
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
