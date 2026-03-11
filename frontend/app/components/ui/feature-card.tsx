import { cn } from "~/components/lib/utils";

type FeatureCardProps = {
  className?: string;
  description: string;
  eyebrow?: string;
  title: string;
};

export function FeatureCard({
  className,
  description,
  eyebrow,
  title,
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        "rounded-[28px] border border-brand-950/10 bg-white/86 p-6 shadow-[0_18px_50px_rgba(11,31,59,0.08)] backdrop-blur-sm",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="text-xl font-semibold text-brand-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-brand-950/72">{description}</p>
    </article>
  );
}
