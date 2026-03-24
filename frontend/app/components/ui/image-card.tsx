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
  return (
    <article
      data-card
      data-reveal-item
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-brand-950/5 bg-white shadow-[0_12px_45px_rgba(11,31,59,0.06)] transition-all duration-700 ease-out hover:-translate-y-1.5 hover:shadow-[0_25px_65px_rgba(11,31,59,0.12)]",
        className
      )}
    >
      <div className={cn("relative flex-1 flex w-full flex-col overflow-hidden bg-brand-950/5 min-h-[200px]", containerClassName)} data-card-media data-parallax="0.18">
        <img
          alt={alt}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.03]",
            imageClassName
          )}
          loading="lazy"
          src={src}
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/10 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      </div>
      
      {caption ? (
        <div className="relative z-10 shrink-0 bg-white p-6 sm:px-8 sm:py-7" data-card-float>
          <p className="text-[0.95rem] font-medium leading-[1.6] text-brand-950/80 transition-colors duration-300 group-hover:text-brand-950">
            {caption}
          </p>
        </div>
      ) : null}
    </article>
  );
}
