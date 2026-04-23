import { FaCheckCircle, FaHeart, FaLightbulb, FaLock, FaUsers } from "react-icons/fa";

import { ImageCard } from "~/components/ui/image-card";

const heroImage = {
  src: "/heroes/home-hero-bg.avif",
  alt: "Especialista en consulta de fertilidad atendiendo a una paciente en un entorno clínico elegante.",
};

export function AboutPhilosophy() {
  return (
    <section className="mx-auto grid max-w-[80vw] gap-8 py-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
      <div>
        <div className="relative max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-brand-950/10 bg-white/60 px-4 py-1.5 text-brand-950 shadow-[0_4px_24px_-4px_rgba(11,31,59,0.08)] backdrop-blur-md">
            <svg className="h-3.5 w-3.5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="eyebrow-label pt-[1px] text-[10px]">Filosofía de atención</span>
          </div>
          <h2 className="display-balance bg-gradient-to-br from-brand-950 via-[#183457] to-[#3a5d8c] bg-clip-text font-display text-3xl leading-[0.98] tracking-[-0.045em] text-transparent sm:text-4xl lg:text-5xl">
            Tratamientos personalizados para una decisión profundamente humana
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-brand-950/66 sm:text-lg">
            Cada caso se atiende con un enfoque personalizado, cálido y humano, entendiendo que la fertilidad es una decisión emocional y médica.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <div className="group flex flex-1 basis-[calc(50%-1rem)] flex-col items-center justify-center rounded-[24px] border border-brand-950/10 bg-white/88 px-5 py-6 text-center shadow-[0_18px_44px_rgba(11,31,59,0.06)] transition-all hover:-translate-y-1 hover:bg-white md:basis-[calc(33.33%-1rem)]">
            <FaCheckCircle aria-hidden="true" className="mb-3 h-7 w-7 text-accent-400 transition-colors group-hover:text-brand-700" />
            <span className="text-lg font-medium text-brand-950">Confiable</span>
          </div>
          <div className="group flex flex-1 basis-[calc(50%-1rem)] flex-col items-center justify-center rounded-[24px] border border-brand-950/10 bg-white/88 px-5 py-6 text-center shadow-[0_18px_44px_rgba(11,31,59,0.06)] transition-all hover:-translate-y-1 hover:bg-white md:basis-[calc(33.33%-1rem)]">
            <FaLock aria-hidden="true" className="mb-3 h-7 w-7 text-accent-400 transition-colors group-hover:text-brand-700" />
            <span className="text-lg font-medium text-brand-950">Segura</span>
          </div>
          <div className="group flex flex-1 basis-[calc(50%-1rem)] flex-col items-center justify-center rounded-[24px] border border-brand-950/10 bg-white/88 px-5 py-6 text-center shadow-[0_18px_44px_rgba(11,31,59,0.06)] transition-all hover:-translate-y-1 hover:bg-white md:basis-[calc(33.33%-1rem)]">
            <FaLightbulb aria-hidden="true" className="mb-3 h-7 w-7 text-accent-400 transition-colors group-hover:text-brand-700" />
            <span className="text-lg font-medium text-brand-950">Vanguardista</span>
          </div>
          <div className="group flex flex-1 basis-[calc(50%-1rem)] flex-col items-center justify-center rounded-[24px] border border-brand-950/10 bg-white/88 px-5 py-6 text-center shadow-[0_18px_44px_rgba(11,31,59,0.06)] transition-all hover:-translate-y-1 hover:bg-white md:basis-[calc(33.33%-1rem)]">
            <FaUsers aria-hidden="true" className="mb-3 h-7 w-7 text-accent-400 transition-colors group-hover:text-brand-700" />
            <span className="text-lg font-medium text-brand-950">Inclusiva</span>
          </div>
          <div className="group flex flex-1 basis-[calc(50%-1rem)] flex-col items-center justify-center rounded-[24px] border border-brand-950/10 bg-white/88 px-5 py-6 text-center shadow-[0_18px_44px_rgba(11,31,59,0.06)] transition-all hover:-translate-y-1 hover:bg-white md:basis-[calc(33.33%-1rem)]">
            <FaHeart aria-hidden="true" className="mb-3 h-7 w-7 text-accent-400 transition-colors group-hover:text-brand-700" />
            <span className="text-lg font-medium text-brand-950">Cálida</span>
          </div>
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
