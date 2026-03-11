import { contactDetails } from "~/components/data/site-content";
import { ButtonLink } from "~/components/ui/button-link";

type CTABannerProps = {
  description: string;
  eyebrow: string;
  title: string;
};

export function CTABanner({ description, eyebrow, title }: CTABannerProps) {
  return (
    <section className="mx-auto max-w-[90vw] px-4 py-6 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[32px] bg-brand-950 px-6 py-8 text-white shadow-[0_25px_60px_rgba(11,31,59,0.24)] sm:px-8 sm:py-10 lg:flex lg:items-end lg:justify-between lg:gap-10">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-200">{eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl leading-none sm:text-5xl">{title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/78">{description}</p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
          <ButtonLink external to={contactDetails.whatsappHref}>
            Hablar por WhatsApp
          </ButtonLink>
          <ButtonLink to="/contacto" variant="secondary">
            Ver contacto
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
