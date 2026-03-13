import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const routesPath = path.join(projectRoot, "app", "routes.ts");
const publicDir = path.join(projectRoot, "public");
const sitemapPath = path.join(publicDir, "sitemap.xml");
const siteUrl = (process.env.SITE_URL ?? "https://vixireproduccion.mx").replace(/\/+$/, "");

const routesSource = await readFile(routesPath, "utf8");
const staticRoutes = new Set(["/"]);

for (const match of routesSource.matchAll(/route\("([^"]+)"/g)) {
  staticRoutes.add(`/${match[1]}`);
}

const urls = [...staticRoutes]
  .sort((a, b) => a.localeCompare(b))
  .map((pathname) => `  <url>\n    <loc>${siteUrl}${pathname}</loc>\n  </url>`)
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

await mkdir(publicDir, { recursive: true });
await writeFile(sitemapPath, xml, "utf8");
console.log(`Sitemap generado en ${sitemapPath}`);
