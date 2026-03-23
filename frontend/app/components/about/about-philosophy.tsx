import { heroImage } from "~/components/data";
import { ImageCard } from "~/components/ui/image-card";
import { SectionHeading } from "~/components/ui/section-heading";

const values = ["Confiable", "Segura", "Vanguardista", "Inclusiva", "Cálida"];

export function AboutPhilosophy() {
  return (
    <section className="mx-auto grid max-w-[90vw] gap-8 py-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
      <div>
        <SectionHeading
          description="Cada caso se atiende con un enfoque personalizado, cálido y humano, entendiendo que la fertilidad es una decisión emocional y médica."
          eyebrow="Filosofía de atención"
          title="Tratamientos personalizados para una decisión profundamente humana"
          variant="accent"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {values.map((value) => (
            <div
              key={value}
              className="rounded-[24px] border border-brand-950/10 bg-white/88 px-5 py-5 text-lg font-medium text-brand-950 shadow-[0_18px_44px_rgba(11,31,59,0.06)]"
            >
              {value}
            </div>
          ))}
        </div>
      </div>

      <ImageCard
        src={heroImage.src}
        alt={heroImage.alt}
        className="rounded-[36px]"
        containerClassName="min-h-[420px]"
      />
    </section>
  );
}
