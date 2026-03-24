import { cn } from "~/components/lib/utils";

type FeatureCardProps = {
  className?: string;
  description: string;
  eyebrow?: string;
  icon?: React.ReactNode;
  title: string;
};

export function FeatureCard({
  className,
  description,
  eyebrow,
  icon,
  title,
}: FeatureCardProps) {
  return (
    <article
      data-card
      data-reveal-item
      className={cn(
        "flex h-full flex-col rounded-[30px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm",
        className,
      )}
    >
      {icon ? <div className="mb-5 text-accent-400" data-card-float>{icon}</div> : null}
      {eyebrow ? (
        <p className="eyebrow-label mb-4 text-brand-700/62">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
        {title}
      </h3>
      <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">{description}</p>
    </article>
  );
}
