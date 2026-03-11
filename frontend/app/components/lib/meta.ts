import { siteDescription, siteName } from "~/components/data/site-content";

export function buildMeta(title: string, description = siteDescription) {
  return [
    { title: `${title} | ${siteName}` },
    { name: "description", content: description },
  ];
}
