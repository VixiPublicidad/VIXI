import { HomePage } from "~/components/home/home-page";
import { buildMeta } from "~/components/lib/meta";

export function meta() {
  return buildMeta(
    "Clínica de fertilidad en León, Guanajuato",
    "VIXI es una clínica de fertilidad en León, Guanajuato, con enfoque cálido, personalizado y respaldado por tecnología avanzada.",
    {
      path: "/",
      image: "/og/og-1.png",
      keywords: ["clinica de fertilidad en leon", "fertilidad en guanajuato", "reproduccion asistida", "fiv", "vixi"],
    },
  );
}

export default function Home() {
  return <HomePage />;
}
