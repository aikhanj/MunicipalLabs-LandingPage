import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  className?: string;
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

export function GlassCard({
  className,
  children,
  as: Component = "div"
}: GlassCardProps) {
  return (
    <Component
      className={cn(
        "glass relative overflow-hidden transition-all duration-300 ease-spring-snappy will-change-transform hover:shadow-2xl hover:shadow-red-500/10",
        className
      )}
    >
      {children}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/5 [mask-image:radial-gradient(circle_at_top,rgba(255,255,255,0.4),transparent_65%)]" />
    </Component>
  );
}

