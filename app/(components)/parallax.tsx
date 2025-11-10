'use client';

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type ParallaxLayer = {
  depth: number;
  className?: string;
  children?: ReactNode;
};

interface ParallaxProps {
  className?: string;
  layers: ParallaxLayer[];
}

export function Parallax({ className, layers }: ParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {layers.map(({ depth, className: layerClass, children }, index) => (
        <ParallaxLayer
          key={index}
          depth={depth}
          className={layerClass}
          prefersReducedMotion={prefersReducedMotion}
          scrollYProgress={scrollYProgress}
        >
          {children}
        </ParallaxLayer>
      ))}
    </div>
  );
}

interface ParallaxLayerProps extends ParallaxLayer {
  scrollYProgress: MotionValue<number>;
  prefersReducedMotion: boolean;
}

function ParallaxLayer({
  depth,
  className,
  children,
  scrollYProgress,
  prefersReducedMotion
}: ParallaxLayerProps) {
  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, depth * 120]
  );

  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 will-change-transform",
        className
      )}
      style={{ translateY }}
    >
      {children}
    </motion.div>
  );
}

