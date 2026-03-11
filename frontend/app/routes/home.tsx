import { HomePage } from "~/components/home/home-page";
import { buildMeta } from "~/components/lib/meta";

export function meta() {
  return buildMeta(
    "Inicio",
    "VIXI es una clínica de fertilidad con enfoque cálido, personalizado y respaldado por tecnología avanzada.",
  );
}

export default function Home() {
  return <HomePage />;
}
