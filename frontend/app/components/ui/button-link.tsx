import type { ReactNode } from "react";
import { Link } from "react-router";

import { cn } from "~/components/lib/utils";

type ButtonLinkProps = {
  className?: string;
  external?: boolean;
  to: string;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
};

const variantClasses: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "bg-accent-400 text-brand-950 shadow-[0_18px_40px_rgba(244,166,183,0.28)] hover:bg-accent-300",
  secondary:
    "border border-brand-950/12 bg-white/78 text-brand-950 hover:border-brand-950/22 hover:bg-white",
  ghost: "text-brand-950 hover:bg-brand-950/6",
};

const baseClassName =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-[0.95rem] font-medium tracking-[0.01em] transition duration-300";

export function ButtonLink({
  children,
  className,
  external,
  to,
  variant = "primary",
}: ButtonLinkProps) {
  if (external) {
    const isHttpLink = to.startsWith("http");

    return (
      <a
        className={cn(baseClassName, variantClasses[variant], className)}
        href={to}
        rel={isHttpLink ? "noreferrer" : undefined}
        target={isHttpLink ? "_blank" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={cn(baseClassName, variantClasses[variant], className)} to={to}>
      {children}
    </Link>
  );
}
