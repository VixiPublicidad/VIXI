import { multidisciplinaryTeam, treatmentJourney } from "~/components/data/site-content";
import { CTABanner } from "~/components/shared/cta-banner";
import { PageHero } from "~/components/ui/page-hero";
import { SectionHeading } from "~/components/ui/section-heading";

export function ProcessPage() {
  return (
    <>
      <PageHero
        description="El proceso inicia con una primera consulta, avanza hacia un diagnóstico definitivo y permite definir el tratamiento adecuado para cada caso."
        eyebrow="Cómo funciona tu tratamiento"
        image={{
          alt: "Paciente conversando con su especialista en una consulta privada y serena.",
          src: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1200&q=80",
        }}
        imageBadge="Recorrido clínico"
        imageCaption="Consulta, diagnóstico, definición del factor y propuesta de tratamiento en una ruta clara y acompañada."
        stats={[
          { value: "1", label: "primera consulta estructurada" },
          { value: "6", label: "etapas explicadas con claridad" },
          { value: "100%", label: "preparación individualizada" },
        ]}
        variant="process"
        title="Un proceso explicado paso a paso para tomar decisiones con menos incertidumbre."
        height="screen"
      />

      <section className="mx-auto max-w-[90vw] py-16 lg:px-8">
        <SectionHeading
          description="Cada etapa ayuda a entender qué estudios se requieren, cuál es el factor que impide el embarazo y qué sigue después."
          eyebrow="Ruta clínica"
          title="Del diagnóstico al procedimiento, sin zonas grises"
          variant="editorial"
        />
        <div className="mt-8 grid gap-5">
          {treatmentJourney.map((item) => (
            <article
              key={item.step}
              className="grid gap-5 rounded-[30px] border border-brand-950/10 bg-white/90 p-6 shadow-[0_18px_50px_rgba(11,31,59,0.08)] md:grid-cols-[140px_1fr]"
            >
              <div className="rounded-[24px] bg-accent-100 px-5 py-5 text-brand-950">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">Etapa</p>
                <p className="mt-2 font-display text-5xl leading-none">{item.step}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-brand-950">{item.title}</h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-brand-950/72">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[90vw] py-6 lg:px-8">
        <div className="rounded-[32px] bg-brand-950 p-8 text-white shadow-[0_22px_60px_rgba(11,31,59,0.18)]">
          <SectionHeading
            description="El tratamiento puede involucrar distintas especialidades médicas según las necesidades clínicas de cada paciente."
            eyebrow="Apoyo clínico"
            tone="light"
            title="Especialidades que sostienen el recorrido completo"
            variant="accent"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {multidisciplinaryTeam.map((item) => (
              <div key={item.title} className="rounded-[22px] bg-white/8 px-4 py-4 text-sm text-white/78">
                <p className="font-medium text-white/90">{item.title}</p>
                <p className="mt-1 text-[12px] leading-relaxed text-white/55">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        description="En consulta se explican costos, tiempos, estudios previos y preparación de manera individualizada según el procedimiento."
        eyebrow="Siguiente paso"
        title="Un tratamiento claro empieza con una conversación bien guiada."
      />
    </>
  );
}
