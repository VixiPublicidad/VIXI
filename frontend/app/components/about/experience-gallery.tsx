import { empathyGalleryImages, experienceHighlights } from "~/components/data";
import { ImageCard } from "~/components/ui/image-card";
import { SectionHeading } from "~/components/ui/section-heading";

export function ExperienceGallery() {
  return (
    <section className="mx-auto grid max-w-[90vw] items-center gap-12 py-12 lg:grid-cols-2 lg:px-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {empathyGalleryImages.map((image) => (
          <ImageCard
            key={image.src}
            src={image.src}
            alt={image.alt}
            containerClassName="min-h-[280px] sm:min-h-[340px]"
          />
        ))}
      </div>

      <div className="rounded-[44px] bg-brand-950 p-10 text-white shadow-[0_30px_90px_rgba(11,31,59,0.22)] lg:p-14">
        <SectionHeading
          description="Cada paciente merece sentir que su tratamiento es único, personalizado y acompañado con cercanía."
          eyebrow="Acompañamiento"
          tone="light"
          title="Fertilización empática, no comunicación fría"
          variant="accent"
        />
        <div className="mt-8 grid gap-4">
          {experienceHighlights.map((item, index) => (
            <div key={item.title} className="rounded-[24px] bg-white/8 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-200">
                Paso {index + 1}
              </p>
              <p className="mt-3 font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm leading-6 text-white/76">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
