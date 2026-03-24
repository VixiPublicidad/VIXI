import { cn } from "~/components/lib/utils";
import {
  createRevealUpVariants,
  createStaggerVariants,
  motion,
  revealViewport,
  useReducedMotion,
} from "~/components/lib/motion";

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
  const reducedMotion = useReducedMotion();
  const cardVariants = createRevealUpVariants(reducedMotion);
  const contentVariants = createStaggerVariants(reducedMotion, {
    delayChildren: 0.08,
    staggerChildren: 0.08,
  });
  const itemVariants = createRevealUpVariants(reducedMotion, {
    distance: 24,
    duration: 0.72,
    scale: 1,
  });

  return (
    <motion.article
      className={cn(
        "flex h-full flex-col rounded-[30px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm",
        className,
      )}
      initial="hidden"
      variants={cardVariants}
      viewport={revealViewport}
      whileInView="visible"
    >
      <motion.div variants={contentVariants}>
        {icon ? (
          <motion.div
            animate={
              reducedMotion
                ? undefined
                : {
                    rotate: [0, -2, 2, 0],
                    y: [0, -6, 0],
                  }
            }
            className="mb-5 text-accent-400"
            transition={{
              duration: 5.2,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
            }}
            variants={itemVariants}
          >
            {icon}
          </motion.div>
        ) : null}
      {eyebrow ? (
        <motion.p className="eyebrow-label mb-4 text-brand-700/62" variants={itemVariants}>
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h3
        className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950"
        variants={itemVariants}
      >
        {title}
      </motion.h3>
      <motion.p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68" variants={itemVariants}>
        {description}
      </motion.p>
      </motion.div>
    </motion.article>
  );
}
