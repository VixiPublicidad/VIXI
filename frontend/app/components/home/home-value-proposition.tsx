import { galleryImages, valueProposition } from "~/components/data";
import { SectionHeading } from "~/components/ui/section-heading";

export function HomeValueProposition() {
  return (
    <section className="mx-auto max-w-[80vw] py-16 sm:px-6 lg:px-8">
      <SectionHeading
        description="Fertilización asistida, enfoque personalizado, tecnología avanzada y tratamientos de alta y baja complejidad."
        eyebrow="Propuesta de valor"
        title="Tres razones por las que VIXI se siente distinta desde la primera consulta"
        variant="accent"
      />
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {valueProposition.map((item, index) => (
          <article
            key={item.title}
            className="group relative flex min-h-[500px] flex-col justify-end overflow-hidden rounded-[2rem] shadow-[0_18px_50px_rgba(11,31,59,0.12)] transition-all duration-700 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(11,31,59,0.18)]"
          >
            <img
              alt={galleryImages[index]?.alt ?? ""}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105"
              loading="lazy"
              src={galleryImages[index]?.src ?? ""}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/40 to-brand-950/10" />
            <div className="relative z-10 p-7 sm:p-8">
              <p className="eyebrow-label text-accent-200">VIXI</p>
              <h3 className="mt-3 font-display text-[1.65rem] font-medium leading-tight text-white sm:text-[1.8rem]">
                {item.title}
              </h3>
              <p className="mt-4 max-w-md text-[0.98rem] leading-7 text-white/80">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
