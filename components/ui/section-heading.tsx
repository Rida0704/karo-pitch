import { cn } from "@/components/ui/cn";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: Props) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <div className="mb-4 inline-flex rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-gold">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="font-heading text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-white md:text-6xl">
        {title}
      </h2>
      {description ? <p className="mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg">{description}</p> : null}
    </div>
  );
}
