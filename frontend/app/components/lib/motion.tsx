import { Fragment, type ReactNode, type RefObject } from "react";

import {
  AnimatePresence,
  LazyMotion,
  MotionConfig,
  domAnimation,
  stagger,
  useReducedMotion as useMotionReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import * as motion from "motion/react-m";

import { cn } from "~/components/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const EMPTY_VARIANTS: Variants = {
  hidden: {},
  visible: {},
};

type MotionProviderProps = {
  children: ReactNode;
};

type RevealOptions = {
  delay?: number;
  distance?: number;
  duration?: number;
  scale?: number;
};

type StaggerOptions = {
  delayChildren?: number;
  staggerChildren?: number;
};

export const revealViewport = {
  amount: 0.24,
  once: true,
} as const;

export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}

export function createRevealUpVariants(
  reducedMotion: boolean,
  {
    delay = 0,
    distance = 36,
    duration = 0.82,
    scale = 0.985,
  }: RevealOptions = {},
): Variants {
  if (reducedMotion) return EMPTY_VARIANTS;

  return {
    hidden: {
      opacity: 0,
      scale,
      y: distance,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay,
        duration,
        ease: EASE,
      },
      y: 0,
    },
  };
}

export function createStaggerVariants(
  reducedMotion: boolean,
  { delayChildren = 0, staggerChildren = 0.08 }: StaggerOptions = {},
): Variants {
  if (reducedMotion) return EMPTY_VARIANTS;

  return {
    hidden: {},
    visible: {
      transition: {
        delayChildren: stagger(staggerChildren, { startDelay: delayChildren }),
        when: "beforeChildren",
      },
    },
  };
}

export function AnimatedWords({
  className,
  reducedMotion,
  text,
}: {
  className?: string;
  reducedMotion: boolean;
  text: string;
}) {
  const words = text.trim().split(/\s+/);
  const wordVariants = createRevealUpVariants(reducedMotion, {
    distance: 28,
    duration: 0.7,
    scale: 1,
  });

  return (
    <>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span className="inline-block overflow-hidden px-[0.08em] py-[0.12em] [margin-block:-0.12em] [margin-inline:-0.08em] align-baseline">
            <motion.span
              className={cn("inline-block leading-[inherit] will-change-transform [color:inherit]", className)}
              variants={wordVariants}
            >
              {word}
            </motion.span>
          </span>
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}

export function AnimatedChars({
  className,
  reducedMotion,
  text,
}: {
  className?: string;
  reducedMotion: boolean;
  text: string;
}) {
  const chars = Array.from(text);
  const charVariants = createRevealUpVariants(reducedMotion, {
    distance: 20,
    duration: 0.54,
    scale: 1,
  });

  return (
    <>
      {chars.map((character, index) => {
        if (character === " ") {
          return <span key={`space-${index}`}> </span>;
        }

        return (
          <span
            key={`${character}-${index}`}
            className="inline-block overflow-hidden px-[0.08em] py-[0.12em] [margin-block:-0.12em] [margin-inline:-0.08em] align-baseline"
          >
            <motion.span
              className={cn("inline-block leading-[inherit] will-change-transform [color:inherit]", className)}
              variants={charVariants}
            >
              {character}
            </motion.span>
          </span>
        );
      })}
    </>
  );
}

export function useParallax(
  ref: RefObject<HTMLElement | null>,
  distance = 28,
) {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: ref,
  });

  return useTransform(scrollYProgress, [0, 1], [-distance, distance]);
}

export function useReducedMotion() {
  return !!useMotionReducedMotion();
}

export {
  AnimatePresence,
  motion,
};
