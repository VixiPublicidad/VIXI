import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

export function ContactChannels() {
  return (
    <section className="mx-auto max-w-[80vw] py-16 lg:px-8">
      <div className="relative max-w-4xl">
        <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-brand-950/10 bg-white/60 px-4 py-1.5 text-brand-950 shadow-[0_4px_24px_-4px_rgba(11,31,59,0.08)] backdrop-blur-md">
          <svg className="h-3.5 w-3.5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="eyebrow-label pt-[1px] text-[10px]">Datos generales</span>
        </div>
        <h2 className="display-balance bg-gradient-to-br from-brand-950 via-[#183457] to-[#3a5d8c] bg-clip-text font-display text-3xl leading-[0.98] tracking-[-0.045em] text-transparent sm:text-4xl lg:text-5xl">
          Canales rápidos para iniciar tu valoración
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-brand-950/66 sm:text-lg">
          Toda la información esencial para comunicarte con VIXI y programar tu primera valoración.
        </p>
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <a className="rounded-[28px] border border-brand-950/10 bg-white/90 p-6 shadow-[0_18px_50px_rgba(11,31,59,0.08)] transition hover:-translate-y-1" href="tel:+524776725136">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
            <FaPhone aria-hidden="true" className="h-4 w-4" />
            Teléfono
          </p>
          <p className="mt-4 text-xl font-semibold text-brand-950">477 672 5136</p>
        </a>
        <a className="rounded-[28px] border border-brand-950/10 bg-white/90 p-6 shadow-[0_18px_50px_rgba(11,31,59,0.08)] transition hover:-translate-y-1" href="https://wa.me/524776725136" rel="noreferrer" target="_blank">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
            <FaWhatsapp aria-hidden="true" className="h-4 w-4" />
            WhatsApp
          </p>
          <p className="mt-4 text-xl font-semibold text-brand-950">WhatsApp 477 672 5136</p>
        </a>
        <a className="rounded-[28px] border border-brand-950/10 bg-white/90 p-6 shadow-[0_18px_50px_rgba(11,31,59,0.08)] transition hover:-translate-y-1" href="mailto:pacientes.vixi@gmail.com">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
            <FaEnvelope aria-hidden="true" className="h-4 w-4" />
            Correo
          </p>
          <p className="mt-4 text-xl font-semibold text-brand-950">pacientes.vixi@gmail.com</p>
        </a>
      </div>
    </section>
  );
}
