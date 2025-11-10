'use client';

import { cn } from "@/lib/utils";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform
} from "framer-motion";
import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

interface MetricProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  className?: string;
  decimals?: number;
}

export function Metric({
  value,
  suffix = "",
  prefix = "",
  label,
  className,
  decimals = 0
}: MetricProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40% 0px" });
  const prefersReducedMotion = usePrefersReducedMotion();
  const motionValue = useMotionValue(prefersReducedMotion ? value : 0);
  const springValue = useSpring(motionValue, {
    stiffness: 100,
    damping: 20
  });
  const rounded = useTransform(springValue, (latest) =>
    latest.toFixed(decimals)
  );

  useEffect(() => {
    if (!inView || prefersReducedMotion) {
      motionValue.set(value);
      return;
    }
    const animation = springValue.animation;
    motionValue.set(0);
    springValue.set(value);
    return () => animation?.stop();
  }, [inView, motionValue, prefersReducedMotion, springValue, value]);

  return (
    <div ref={ref} className={cn("space-y-2 text-center", className)}>
      <div className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
        <motion.span>
          {prefix}
          <motion.span>{rounded}</motion.span>
          {suffix}
        </motion.span>
      </div>
      <p className="text-sm text-muted-foreground/80">{label}</p>
    </div>
  );
}

