import { FaCheckCircle, FaHeart, FaLightbulb, FaLock, FaUsers } from "react-icons/fa";

import { heroImage } from "~/components/data";
import { ImageCard } from "~/components/ui/image-card";
import { SectionHeading } from "~/components/ui/section-heading";

const values = ["Confiable", "Segura", "Vanguardista", "Inclusiva", "C\u00e1lida"];
const VALUE_ICONS = [FaCheckCircle, FaLock, FaLightbulb, FaUsers, FaHeart];

export function AboutPhilosophy() {
  return (
    <section className="mx-auto grid max-w-[80vw] gap-8 py-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
      <div>
        <SectionHeading
          description="Cada caso se atiende con un enfoque personalizado, c\u00e1lido y humano, entendiendo que la fertilidad es una decisi\u00f3n emocional y m\u00e9dica."
          eyebrow="Filosof\u00eda de atenci\u00f3n"
          title="Tratamientos personalizados para una decisi\u00f3n profundamente humana"
          variant="accent"
        />
        <div className="mt-10 flex flex-wrap gap-4">
          {values.map((value, index) => {
            const Icon = VALUE_ICONS[index];
            return (
              <div
                key={value}
                className="group flex flex-1 basis-[calc(50%-1rem)] flex-col items-center justify-center rounded-[24px] border border-brand-950/10 bg-white/88 px-5 py-6 text-center shadow-[0_18px_44px_rgba(11,31,59,0.06)] transition-all hover:-translate-y-1 hover:bg-white md:basis-[calc(33.33%-1rem)]"
              >
                <Icon aria-hidden="true" className="mb-3 h-7 w-7 text-accent-400 transition-colors group-hover:text-brand-700" />
                <span className="text-lg font-medium text-brand-950">{value}</span>
              </div>
            );
          })}
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
