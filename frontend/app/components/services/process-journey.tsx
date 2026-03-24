import { treatmentJourney } from "~/components/data";
import { SectionHeading } from "~/components/ui/section-heading";

export function ProcessJourney() {
  return (
    <section className="mx-auto max-w-[80vw] py-16 lg:px-8">
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
  );
}
