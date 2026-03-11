import { WhoWeArePage } from "~/components/about/who-we-are-page";
import { buildMeta } from "~/components/lib/meta";

export function meta() {
  return buildMeta("Quiénes somos", "Conoce la filosofía, valores y base médica de la clínica VIXI.");
}

export default function QuienesSomosRoute() {
  return <WhoWeArePage />;
}
