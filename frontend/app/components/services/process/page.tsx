import { FaPhone, FaWhatsapp } from "react-icons/fa";

import { ButtonLink } from "~/components/ui/button-link";

import { ProcessHero } from "./hero";
import { ProcessJourney } from "./journey";
import { ProcessSupportTeam } from "./support-team";

export function ProcessPage() {
  return (
    <>
      <ProcessHero />
      <ProcessJourney />
      <ProcessSupportTeam />
      <section className="mx-auto max-w-[80vw] py-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] bg-brand-950 px-6 py-8 text-white shadow-[0_25px_60px_rgba(11,31,59,0.24)] sm:px-8 sm:py-10 lg:flex lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-3xl">
            <p className="eyebrow-label text-accent-200">Siguiente paso</p>
            <h2 className="display-balance mt-4 font-display text-4xl leading-[0.96] tracking-[-0.045em] sm:text-5xl">
              Un tratamiento claro empieza con una conversación bien guiada.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/78">
              En consulta se explican costos, tiempos, estudios previos y preparación de manera individualizada según el procedimiento.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <ButtonLink className="whitespace-nowrap" external to="https://wa.me/524776725136">
              <span className="inline-flex items-center gap-2 whitespace-nowrap">
                <FaWhatsapp aria-hidden="true" className="h-4 w-4" />
                Hablar por WhatsApp
              </span>
            </ButtonLink>
            <ButtonLink className="whitespace-nowrap" to="/contacto" variant="secondary">
              <span className="inline-flex items-center gap-2 whitespace-nowrap">
                <FaPhone aria-hidden="true" className="h-4 w-4" />
                Ver contacto
              </span>
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
