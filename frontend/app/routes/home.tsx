import { HomePage } from "~/components/home/home-page";
import { buildMeta } from "~/components/lib/meta";

export function meta() {
  return buildMeta(
    "Centro de reproducción en León, Guanajuato",
    "VIXI es una Centro de reproducción en León, Guanajuato, con enfoque cálido, personalizado y respaldado por tecnología avanzada.",
    {
      path: "/",
      image: "/og/og-1.png",
      keywords: ["Centro de reproducción en León", "fertilidad en Guanajuato", "reproducción asistida", "fiv", "vixi"],
    },
  );
}

export default function Home() {
  return <HomePage />;
}
