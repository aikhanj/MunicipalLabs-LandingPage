import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-5",
        align === "center" ? "mx-auto max-w-2xl text-center" : "",
        className
      )}
    >
      {eyebrow ? (
        <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3rem] text-muted-foreground">
          <span className="h-px w-6 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          {eyebrow}
          <span className="h-px w-6 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

