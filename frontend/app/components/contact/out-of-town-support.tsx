import { outOfTownHighlights } from "~/components/data";
import { SectionHeading } from "~/components/ui/section-heading";

export function OutOfTownSupport() {
  return (
    <section className="mx-auto grid max-w-[80vw] gap-8 py-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <div className="rounded-[32px] bg-accent-100 p-8 shadow-[0_20px_50px_rgba(244,166,183,0.22)]">
        <SectionHeading
          description="Consulta previa, planeación de visitas y seguimiento remoto ayudan a que el tratamiento sea más ordenado para quienes viajan."
          eyebrow="Lo que resolvemos"
          title="Menos fricción logística, más foco en tu tratamiento"
          variant="highlight"
        />
      </div>

      <div className="grid gap-4">
        {outOfTownHighlights.map((item, index) => (
          <div
            key={item.title}
            className="group relative flex flex-col justify-center rounded-[28px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm transition-all hover:bg-white"
          >
            <div className="flex items-start gap-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-950/[0.04] text-[11px] font-bold tracking-widest text-brand-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-[1.25rem] font-medium leading-[1.1] text-brand-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.98rem] leading-7 text-brand-950/74">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
