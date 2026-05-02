import { FaPhone, FaWhatsapp } from "react-icons/fa";

import { HomeAudiences } from "~/components/home/home-audiences";
import { HomeExperience } from "~/components/home/home-experience";
import { HomeFaqContact } from "~/components/home/home-faq-contact";
import { HomeHero } from "~/components/home/home-hero";
import { SecondOpinionCTA } from "~/components/home/second-opinion-cta";
import { HomePillars } from "~/components/home/home-pillars";
import { HomeSciencePillars } from "~/components/home/home-science-pillars";
import { HomeTreatmentsPreview } from "~/components/home/home-treatments-preview";
import { HomeValueProposition } from "~/components/home/home-value-proposition";
import {
  createRevealUpVariants,
  createStaggerVariants,
  motion,
  revealViewport,
  useReducedMotion,
} from "~/components/lib/motion";
import { ButtonLink } from "~/components/ui/button-link";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeValueProposition />
      <HomePillars />
      <HomeSciencePillars />
      <HomeTreatmentsPreview />
      <HomeExperience />
      <HomeAudiences />
      <SecondOpinionCTA />
      <HomeFaqContact />
      <HomeFinalCta />
    </>
  );
}

function HomeFinalCta() {
  const reducedMotion = useReducedMotion();
  const sectionVariants = createRevealUpVariants(reducedMotion, {
    distance: 42,
    duration: 0.9,
  });
  const contentVariants = createStaggerVariants(reducedMotion, {
    delayChildren: 0.08,
    staggerChildren: 0.08,
  });
  const itemVariants = createRevealUpVariants(reducedMotion, {
    distance: 24,
    duration: 0.72,
    scale: 1,
  });

  return (
    <motion.section
      className="mx-auto max-w-[80vw] py-6 lg:px-8"
      initial="hidden"
      variants={sectionVariants}
      viewport={revealViewport}
      whileInView="visible"
    >
      <motion.div
        className="overflow-hidden rounded-[32px] bg-brand-950 px-6 py-8 text-white shadow-[0_25px_60px_rgba(11,31,59,0.24)] sm:px-8 sm:py-10 lg:flex lg:items-end lg:justify-between lg:gap-10"
        variants={contentVariants}
      >
        <motion.div className="max-w-3xl" variants={contentVariants}>
          <motion.p className="eyebrow-label text-accent-200" variants={itemVariants}>
            Siguiente paso
          </motion.p>
          <motion.h2 className="display-balance mt-4 font-display text-4xl leading-[0.96] tracking-[-0.045em] sm:text-5xl" variants={contentVariants}>
            Tratamientos de alta y baja complejidad con acompañamiento real.
          </motion.h2>
          <motion.p className="mt-5 max-w-2xl text-base leading-8 text-white/78" variants={contentVariants}>
            Agenda una valoración para revisar tu caso con nuestro equipo de expertos.
          </motion.p>
        </motion.div>
        <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0" variants={contentVariants}>
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
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
