import { FaCalendarAlt, FaUserFriends, FaUsers } from "react-icons/fa";

import { audienceCards } from "~/components/data";
import { FeatureCard } from "~/components/ui/feature-card";
import { SectionHeading } from "~/components/ui/section-heading";

const AUDIENCE_ICONS = [FaUserFriends, FaUsers, FaCalendarAlt];

export function HomeAudiences() {
  return (
    <section className="mx-auto max-w-[80vw] py-16 lg:px-8">
      <SectionHeading
        align="center"
        description="VIXI acompaña a parejas con dificultades para lograr embarazo, familias que desean crecer y pacientes que buscan opciones reproductivas después de los 45."
        eyebrow="Audiencias principales"
        title="Un sitio que habla con distintos momentos de vida"
        variant="highlight"
      />
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {audienceCards.map((audience, index) => {
          const Icon = AUDIENCE_ICONS[index];
          return (
            <FeatureCard
              key={audience.title}
              description={audience.description}
              eyebrow="Perfil de paciente"
              icon={
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-100/30 text-accent-400">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </div>
              }
              title={audience.title}
            />
          );
        })}
      </div>
    </section>
  );
}
