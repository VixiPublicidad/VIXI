import { defaultOgImage, siteDescription, siteLanguage, siteLocale, siteName, siteUrl } from "~/components/data";

type BuildMetaOptions = {
  path?: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string[];
  noIndex?: boolean;
  structuredData?: Record<string, unknown>[];
};

function toAbsoluteUrl(path = "/") {
  if (/^https?:\/\//.test(path)) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMeta(
  title: string,
  description = siteDescription,
  options: BuildMetaOptions = {},
) {
  const canonicalUrl = toAbsoluteUrl(options.path ?? "/");
  const imageUrl = toAbsoluteUrl(options.image ?? defaultOgImage);

  return [
    { title: `${title} | ${siteName}` },
    { name: "description", content: description },
    { name: "language", content: siteLanguage },
    { name: "keywords", content: options.keywords?.join(", ") ?? "clínica de fertilidad, reproducción asistida, fertilidad en León, FIV, inseminación intrauterina" },
    { name: "robots", content: options.noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large" },
    { property: "og:type", content: options.type ?? "website" },
    { property: "og:site_name", content: siteName },
    { property: "og:locale", content: siteLocale },
    { property: "og:title", content: `${title} | ${siteName}` },
    { property: "og:description", content: description },
    { property: "og:url", content: canonicalUrl },
    { property: "og:image", content: imageUrl },
    { property: "og:image:secure_url", content: imageUrl },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:alt", content: `${title} | ${siteName}` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: `${title} | ${siteName}` },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
    { tagName: "link", rel: "canonical", href: canonicalUrl },
    ...(options.structuredData ?? []).map((item) => ({ "script:ld+json": item })),
  ];
}
