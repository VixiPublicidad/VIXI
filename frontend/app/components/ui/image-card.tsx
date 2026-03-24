import { useRef } from "react";

import {
  createRevealUpVariants,
  createStaggerVariants,
  motion,
  revealViewport,
  useParallax,
  useReducedMotion,
} from "~/components/lib/motion";
import { cn } from "~/components/lib/utils";

type ImageCardProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  imageClassName?: string;
  containerClassName?: string;
};

export function ImageCard({ src, alt, caption, className, imageClassName, containerClassName }: ImageCardProps) {
  const reducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLElement>(null);
  const mediaY = useParallax(cardRef, reducedMotion ? 0 : 18);
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
        "group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-brand-950/5 bg-white shadow-[0_12px_45px_rgba(11,31,59,0.06)] transition-all duration-700 ease-out hover:-translate-y-1.5 hover:shadow-[0_25px_65px_rgba(11,31,59,0.12)]",
        className
      )}
      initial="hidden"
      ref={cardRef}
      variants={cardVariants}
      viewport={revealViewport}
      whileInView="visible"
    >
      <motion.div
        className={cn("relative flex min-h-[200px] w-full flex-1 flex-col overflow-hidden bg-brand-950/5", containerClassName)}
        style={{ y: mediaY }}
        variants={contentVariants}
      >
        <motion.img
          alt={alt}
          animate={reducedMotion ? undefined : { scale: [1.02, 1.06, 1.02] }}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.03]",
            imageClassName
          )}
          loading="lazy"
          src={src}
          decoding="async"
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
          }}
          variants={itemVariants}
        />
        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/10 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          variants={itemVariants}
        />
      </motion.div>
      
      {caption ? (
        <motion.div
          className="relative z-10 shrink-0 bg-white p-6 sm:px-8 sm:py-7"
          variants={contentVariants}
        >
          <motion.p
            className="text-[0.95rem] font-medium leading-[1.6] text-brand-950/80 transition-colors duration-300 group-hover:text-brand-950"
            variants={itemVariants}
          >
            {caption}
          </motion.p>
        </motion.div>
      ) : null}
    </motion.article>
  );
}
