'use client';

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useCallback } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glare?: boolean;
}

export function TiltCard({ children, className, glare = true }: TiltCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 30 });

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (prefersReducedMotion) return;

      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const percentX = (x - centerX) / centerX;
      const percentY = (y - centerY) / centerY;

      rotateX.set(percentY * -10);
      rotateY.set(percentX * 12);
    },
    [prefersReducedMotion, rotateX, rotateY]
  );

  const handlePointerLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  const glareOpacity = useTransform(
    [springRotateX, springRotateY],
    (values: number[]) =>
      (Math.abs(values[0] ?? 0) + Math.abs(values[1] ?? 0)) / 24
  );

  return (
    <motion.div
      className={cn(
        "group relative h-full w-full rounded-3xl border border-white/10 bg-white/5 p-[1px] will-change-transform",
        className
      )}
      style={
        prefersReducedMotion
          ? undefined
          : {
              perspective: 1000,
              rotateX: springRotateX,
              rotateY: springRotateY
            }
      }
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="glass relative h-full w-full rounded-[calc(theme(borderRadius.3xl)-1px)]">
        {children}
        {glare ? (
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-tr from-white/40 via-transparent to-transparent opacity-0"
            style={{
              opacity: prefersReducedMotion ? 0.1 : glareOpacity
            }}
          />
        ) : null}
      </div>
    </motion.div>
  );
}

