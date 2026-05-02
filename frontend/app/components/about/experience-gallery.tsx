import { ImageCard } from "~/components/ui/image-card";

export function ExperienceGallery() {
  return (
    <section className="mx-auto grid max-w-[80vw] items-center gap-12 py-12 lg:grid-cols-2 lg:px-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <ImageCard
          alt="Manos acompañando a una paciente durante un proceso clínico."
          containerClassName="min-h-[280px] sm:min-h-[340px]"
          src="/gallery/ferti_1.avif"
        />
        <ImageCard
          alt="Equipo médico especializado en reproducción humana."
          containerClassName="min-h-[280px] sm:min-h-[340px]"
          src="/gallery/ferti_2.avif"
        />
        <ImageCard
          alt="Procedimiento médico con alta especialidad."
          containerClassName="min-h-[280px] sm:min-h-[340px]"
          src="/gallery/ferti_3.avif"
        />
        <ImageCard
          alt="Consulta médica enfocada en decisiones clínicas individualizadas."
          containerClassName="min-h-[280px] sm:min-h-[340px]"
          src="/gallery/consultation_empathy.png"
        />
      </div>

      <div className="rounded-[44px] bg-brand-950 p-10 text-white shadow-[0_30px_90px_rgba(11,31,59,0.22)] lg:p-14">
        <div className="relative max-w-4xl">
          <p className="eyebrow-label mb-5 text-white/55">Acompañamiento clínico</p>
          <h2 className="display-balance font-display text-3xl leading-[0.98] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
            Decisiones clínicas con claridad desde la primera valoración
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            Cada etapa del proceso se orienta a entender el caso con precisión, elegir sin prisa y
            actuar de forma individualizada.
          </p>
        </div>
        <div className="mt-8 grid gap-4">
          <div className="rounded-[24px] bg-white/8 p-5">
            <p className="mt-3 font-semibold text-white">Entendemos antes de tratar</p>
            <p className="mt-2 text-sm leading-6 text-white/76">
              La evaluación inicial se enfoca en reunir la información clínica necesaria para definir
              con fundamento el siguiente paso.
            </p>
          </div>
          <div className="rounded-[24px] bg-white/8 p-5">
            <p className="mt-3 font-semibold text-white">Elegimos con precisión y sin prisa</p>
            <p className="mt-2 text-sm leading-6 text-white/76">
              La tecnología disponible y el análisis del caso permiten elegir el tratamiento más
              adecuado con criterio clínico.
            </p>
          </div>
          <div className="rounded-[24px] bg-white/8 p-5">
            <p className="mt-3 font-semibold text-white">Actuamos de forma individualizada</p>
            <p className="mt-2 text-sm leading-6 text-white/76">
              Cada plan se ajusta a los hallazgos diagnósticos, antecedentes y objetivos
              reproductivos de cada paciente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
