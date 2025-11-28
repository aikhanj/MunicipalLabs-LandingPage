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
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mt-4",
        isCenter ? "mx-auto max-w-2xl text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg font-semibold text-slate-300 md:text-xl">
          {description}
        </p>
      ) : null}
    </div>
  );
}

