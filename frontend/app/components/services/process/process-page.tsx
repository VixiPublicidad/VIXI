import { ProcessHero } from "./hero";
import { ProcessJourney } from "./journey";
import { ProcessNextStep } from "./process-next-step";
import { ProcessSupportTeam } from "./support-team";

export function ProcessPage() {
  return (
    <>
      <ProcessHero />
      <ProcessJourney />
      <ProcessSupportTeam />
      <ProcessNextStep />
    </>
  );
}
