'use client';

import { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

interface Particle {
  left: string;
  top: string;
  size: string;
  duration: number;
  delay: number;
}

interface ParticlesProps {
  quantity?: number;
  className?: string;
}

export function Particles({ quantity = 20, className }: ParticlesProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const particles = useMemo<Particle[]>(() => {
    const random = (seed: number) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };

    const toPercent = (value: number) => `${value.toFixed(3)}%`;
    const toPixels = (value: number) => `${value.toFixed(4)}px`;

    return Array.from({ length: quantity }).map((_, index) => {
      const seed = index + quantity * 97;
      const size = random(seed) * 10 + 6;
      return {
        left: toPercent(random(seed + 1) * 100),
        top: toPercent(random(seed + 2) * 100),
        size: toPixels(size),
        duration: 6 + random(seed + 3) * 8,
        delay: index * 0.2
      };
    });
  }, [quantity]);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-white/25 shadow-[0_0_25px_rgba(93,214,255,0.45)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            opacity: prefersReducedMotion ? 0.2 : 0.4
          }}
          animate={{
            y: ["-12%", "12%", "-12%"],
            x: ["-6%", "6%", "-6%"],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

