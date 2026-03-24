import { experienceHighlights, experienceImages } from "~/components/data";
import { FeatureCard } from "~/components/ui/feature-card";
import { ImageCard } from "~/components/ui/image-card";
import { SectionHeading } from "~/components/ui/section-heading";

export function HomeExperience() {
  return (
    <section className="mx-auto grid max-w-[80vw] gap-8 py-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
      <div>
        <SectionHeading
          description="Atención integral, ambiente moderno y tranquilo, y acompañamiento personalizado para que cada paciente se sienta en buenas manos."
          eyebrow="Experiencia VIXI"
          title="Cada detalle está pensado para que la medicina avanzada también se sienta acompañada"
          variant="accent"
        />
        <div className="mt-8 grid gap-4">
          {experienceHighlights.map((item, index) => (
            <FeatureCard
              key={item.title}
              description={item.description}
              eyebrow={`0${index + 1}`}
              title={item.title}
            />
          ))}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {experienceImages.map((image, index) => (
          <ImageCard
            key={image.src}
            src={image.src}
            alt={image.alt}
            className={index === 2 ? "sm:col-span-2" : ""}
            containerClassName={index === 2 ? "min-h-[280px] sm:min-h-[400px]" : "min-h-[280px] sm:min-h-[340px]"}
          />
        ))}
      </div>
    </section>
  );
}
