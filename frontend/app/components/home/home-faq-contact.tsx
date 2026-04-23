import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";

export function HomeFaqContact() {
  return (
    <section className="mx-auto grid max-w-[80vw] gap-8 py-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
      <div className="rounded-[32px] border border-brand-950/8 bg-white/84 p-8 shadow-[0_18px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-[1px] w-8 bg-brand-950/20" />
            <p className="eyebrow-label text-[9px] text-brand-950/40">FAQ destacadas</p>
          </div>
          <h2 className="display-balance font-display text-2xl font-medium leading-[1.02] tracking-[-0.035em] text-brand-950 sm:text-3xl lg:text-4xl">
            Claridad antes de empezar
          </h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-brand-950/56">
            Respondemos dudas frecuentes sobre costos, tiempos de proceso y probabilidad de éxito desde una perspectiva médica responsable.
          </p>
        </div>
        <div className="mt-8 grid gap-4">
          <article className="rounded-[28px] bg-brand-950/[0.045] p-6">
            <h3 className="font-display text-[1.45rem] font-medium leading-[1.05] tracking-[-0.03em] text-brand-950">
              ¿Cuánto cuesta un tratamiento de fertilidad?
            </h3>
            <p className="mt-4 text-[0.98rem] leading-7 text-brand-950/78">
              No existe un costo único. El presupuesto depende del diagnóstico, estudios necesarios, medicamentos y procedimiento indicado. En consulta se explica con claridad qué incluye cada etapa.
            </p>
          </article>
          <article className="rounded-[28px] bg-brand-950/[0.045] p-6">
            <h3 className="font-display text-[1.45rem] font-medium leading-[1.05] tracking-[-0.03em] text-brand-950">
              ¿Cuánto dura cada proceso?
            </h3>
            <p className="mt-4 text-[0.98rem] leading-7 text-brand-950/78">
              El tiempo cambia según el tipo de tratamiento. Algunas valoraciones se resuelven en pocas semanas y otros protocolos requieren varias fases. El plan se agenda con tiempos realistas desde el inicio.
            </p>
          </article>
          <article className="rounded-[28px] bg-brand-950/[0.045] p-6">
            <h3 className="font-display text-[1.45rem] font-medium leading-[1.05] tracking-[-0.03em] text-brand-950">
              ¿Qué probabilidad de éxito tiene mi caso?
            </h3>
            <p className="mt-4 text-[0.98rem] leading-7 text-brand-950/78">
              La probabilidad depende de factores como edad, reserva ovárica, diagnóstico y antecedentes. En VIXI se revisa cada caso de manera individual para hablar con expectativas médicas responsables.
            </p>
          </article>
        </div>
      </div>

      <div className="rounded-[32px] bg-accent-100 p-8 text-brand-950 shadow-[0_20px_50px_rgba(244,166,183,0.18)]">
        <p className="eyebrow-label text-brand-700">Contacto rápido</p>
        <h2 className="display-balance mt-4 font-display text-4xl leading-[0.96] tracking-[-0.045em]">
          Agenda tu primera conversación con el equipo.
        </h2>
        <div className="mt-8 grid gap-4 text-sm leading-6 sm:grid-cols-2">
          <a className="flex h-full flex-col items-center justify-center gap-3 rounded-[28px] bg-white/72 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white" href="tel:+524776725136">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-200/50">
              <FaPhone aria-hidden="true" className="h-5 w-5 text-brand-700" />
            </span>
            <span className="mt-1 font-medium text-brand-950/80">477 672 5136</span>
          </a>
          <a
            className="flex h-full flex-col items-center justify-center gap-3 rounded-[28px] bg-white/72 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            href="https://wa.me/524776725136"
            rel="noreferrer"
            target="_blank"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-200/50">
              <FaWhatsapp aria-hidden="true" className="h-6 w-6 text-brand-700" />
            </span>
            <span className="mt-1 font-medium text-brand-950/80">WhatsApp 477 672 5136</span>
          </a>
          <a className="flex h-full flex-col items-center justify-center gap-3 rounded-[28px] bg-white/72 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white" href="mailto:pacientes.vixi@gmail.com">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-200/50">
              <FaEnvelope aria-hidden="true" className="h-5 w-5 text-brand-700" />
            </span>
            <span className="mt-1 break-all font-medium text-brand-950/80">pacientes.vixi@gmail.com</span>
          </a>
          <a
            className="flex h-full flex-col items-center justify-center gap-3 rounded-[28px] bg-white/72 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            href="https://maps.google.com/?q=Av.%20Cerro%20Gordo%2C%20Lomas%20del%20Campestre%2C%2037150%20Le%C3%B3n%20de%20los%20Aldama%2C%20Guanajuato"
            rel="noreferrer"
            target="_blank"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-200/50">
              <FaMapMarkerAlt aria-hidden="true" className="h-5 w-5 text-brand-700" />
            </span>
            <span className="mt-1 font-medium text-brand-950/80">
              Av. Cerro Gordo, Lomas del Campestre, 37150 León de los Aldama, Guanajuato
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
