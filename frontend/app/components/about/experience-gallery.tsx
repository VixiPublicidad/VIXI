import { ImageCard } from "~/components/ui/image-card";

export function ExperienceGallery() {
  return (
    <section className="mx-auto grid max-w-[80vw] items-center gap-12 py-12 lg:grid-cols-2 lg:px-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <ImageCard
          alt="Manos agarradas de familiares en senal de apoyo."
          containerClassName="min-h-[280px] sm:min-h-[340px]"
          src="/gallery/ferti_1.avif"
        />
        <ImageCard
          alt="Equipo medico moderno y profesional."
          containerClassName="min-h-[280px] sm:min-h-[340px]"
          src="/gallery/ferti_2.avif"
        />
        <ImageCard
          alt="Doctor operando de manera profesional y empatica."
          containerClassName="min-h-[280px] sm:min-h-[340px]"
          src="/gallery/ferti_3.avif"
        />
        <ImageCard
          alt="Consulta medica calida y profesional enfocada en el trato humano."
          containerClassName="min-h-[280px] sm:min-h-[340px]"
          src="/gallery/consultation_empathy.png"
        />
      </div>

      <div className="rounded-[44px] bg-brand-950 p-10 text-white shadow-[0_30px_90px_rgba(11,31,59,0.22)] lg:p-14">
        <div className="relative max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-white shadow-sm backdrop-blur-xl">
            <svg className="h-3.5 w-3.5 text-accent-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="eyebrow-label pt-[1px] text-[10px]">Acompanamiento</span>
          </div>
          <h2 className="display-balance font-display text-3xl leading-[0.98] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
            Fertilizacion empatica, no comunicacion fria
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            Cada paciente merece sentir que su tratamiento es unico, personalizado y acompanado con cercania.
          </p>
        </div>
        <div className="mt-8 grid gap-4">
          <div className="rounded-[24px] bg-white/8 p-5">
            <p className="mt-3 font-semibold text-white">Atencion integral</p>
            <p className="mt-2 text-sm leading-6 text-white/76">
            Atención integral desde el diagnóstico hasta el nacimiento.
            </p>
          </div>
          <div className="rounded-[24px] bg-white/8 p-5">
            <p className="mt-3 font-semibold text-white">Ambiente moderno</p>
            <p className="mt-2 text-sm leading-6 text-white/76">
              Ambiente moderno, minimalista y tranquilo con calidez humana.
            </p>
          </div>
          <div className="rounded-[24px] bg-white/8 p-5">
            <p className="mt-3 font-semibold text-white">Acompanamiento personalizado</p>
            <p className="mt-2 text-sm leading-6 text-white/76">
              Acompanamiento personalizado en cada decision clinica y emocional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
