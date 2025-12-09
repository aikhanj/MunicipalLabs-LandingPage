'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "@/app/(components)/magnetic-button";
import { copy } from "@/content/copy";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end center"]
  });
  const prefersReducedMotion = usePrefersReducedMotion();

  const headlineY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -30]
  );

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative isolate flex min-h-[90vh] flex-col justify-center overflow-visible pt-24"
    >
      <div className="mx-auto flex w-[min(1100px,92vw)] flex-col items-center gap-10 text-center">
        <motion.h1
          className="max-w-4xl font-serif text-balance text-5xl font-bold tracking-tight text-foreground md:text-7xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: headlineY }}
        >
          {copy.hero.title}
        </motion.h1>

        <motion.p
          className="max-w-2xl text-pretty text-base text-muted-foreground md:text-lg"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {copy.hero.subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <MagneticButton
            href="#contact"
            className="bg-accent text-foreground hover:bg-accent/90"
          >
            {copy.hero.ctaPrimary}
          </MagneticButton>
          <MagneticButton
            href="https://legaside-v0-frontend.vercel.app/"
            className="border border-border bg-card text-foreground hover:bg-muted"
          >
            {copy.hero.ctaSecondary}
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}

