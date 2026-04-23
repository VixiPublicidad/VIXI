import { FaPhone, FaWhatsapp } from "react-icons/fa";

import { AboutClinicalProfile } from "~/components/about/about-clinical-profile";
import { AboutHero } from "~/components/about/about-hero";
import { AboutMultidisciplinaryTeam } from "~/components/about/about-multidisciplinary-team";
import { AboutPhilosophy } from "~/components/about/about-philosophy";
import { AboutTeam } from "~/components/about/about-team";
import { ButtonLink } from "~/components/ui/button-link";

export function WhoWeArePage() {
  return (
    <>
      <AboutHero />
      <AboutClinicalProfile />
      <AboutPhilosophy />
      <AboutTeam />
      <AboutMultidisciplinaryTeam />
      <section className="mx-auto max-w-[80vw] py-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] bg-brand-950 px-6 py-8 text-white shadow-[0_25px_60px_rgba(11,31,59,0.24)] sm:px-8 sm:py-10 lg:flex lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-3xl">
            <p className="eyebrow-label text-accent-200">Conoce VIXI</p>
            <h2 className="display-balance mt-4 font-display text-4xl leading-[0.96] tracking-[-0.045em] sm:text-5xl">
              Una clínica especializada, cálida y preparada para acompañarte.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/78">
              Si quieres conocer el enfoque completo de VIXI, agenda una consulta y revisa con el equipo cuál es el mejor siguiente paso para tu caso.
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
