import { Link } from "react-router";

import { contactDetails, footerLinks, siteName, siteTagline } from "~/components/data/site-content";

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-brand-950 text-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div className="max-w-xl">
          <img
            alt={siteName}
            className="h-14 w-auto"
            src="/logos/vixi_logo_white.webp"
          />
          <p className="mt-4 text-sm uppercase tracking-[0.24em] text-accent-200">{siteTagline}</p>
          <p className="mt-6 text-base leading-7 text-white/74">
            La fertilidad es más que un tratamiento. Es una decisión emocional, médica y profundamente humana.
          </p>
        </div>

        {footerLinks.map((group) => (
          <div key={group.title}>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-200">{group.title}</p>
            <div className="mt-5 grid gap-3">
              {group.links.map((link) => (
                <Link key={link.to} className="text-white/76 transition hover:text-white" to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 py-6 text-sm text-white/66 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>{contactDetails.address}</p>
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-5">
            <a href={contactDetails.phoneHref}>{contactDetails.phoneDisplay}</a>
            <a href={contactDetails.emailHref}>{contactDetails.email}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
