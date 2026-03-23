import { SectionHeading } from "~/components/ui/section-heading";

const supportMoments = [
  "Orientación previa sobre estudios, tiempos y preparación.",
  "Planeación de visitas para pacientes de otros estados o países.",
  "Seguimiento remoto para resolver dudas entre citas.",
];

export function OutOfTownSupport() {
  return (
    <section className="mx-auto grid max-w-[90vw] gap-8 py-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <div className="rounded-[32px] bg-accent-100 p-8 shadow-[0_20px_50px_rgba(244,166,183,0.22)]">
        <SectionHeading
          description="Consulta previa, planeación de visitas y seguimiento remoto ayudan a que el tratamiento sea más ordenado para quienes viajan."
          eyebrow="Lo que resolvemos"
          title="Menos fricción logística, más foco en tu tratamiento"
          variant="highlight"
        />
      </div>

      <div className="grid gap-4">
        {supportMoments.map((item, index) => (
          <div
            key={item}
            className="rounded-[26px] border border-brand-950/10 bg-white/90 p-6 shadow-[0_18px_44px_rgba(11,31,59,0.08)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
              Momento {index + 1}
            </p>
            <p className="mt-3 text-base leading-7 text-brand-950/74">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
