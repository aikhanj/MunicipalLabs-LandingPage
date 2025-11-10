'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "@/app/(components)/magnetic-button";
import { Particles } from "@/app/(components)/particles";
import { Parallax } from "@/app/(components)/parallax";
import { copy } from "@/content/copy";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { TypingDemo } from "@/app/(components)/typing-demo";
import { ScrambleText } from "@/app/(components)/scramble-text";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end center"]
  });
  const prefersReducedMotion = usePrefersReducedMotion();

  const logoScale = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [1, 1] : [1, 0.85]
  );
  const logoOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [1, 1] : [1, 0.4]
  );
  const headlineY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -60]
  );

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative isolate flex min-h-[90vh] flex-col justify-center overflow-visible pt-24"
    >
      <Parallax
        layers={[
          {
            depth: -0.2,
            className:
              "bg-[radial-gradient(circle_at_10%_20%,rgba(0, 167, 217, 0.15),transparent_58%)]"
          },
          {
            depth: -0.4,
            className:
              "bg-[radial-gradient(circle_at_80%_0%,rgba(0, 176, 229, 0.12),transparent_55%)]"
          },
          {
            depth: -0.6,
            className:
              "bg-[linear-gradient(140deg,rgba(0, 167, 217, 0.08),rgba(11,14,24,0)_65%)]"
          }
        ]}
        className="absolute inset-0"
      />
      <Particles quantity={26} className="opacity-80" />
      <motion.div
        className="pointer-events-none absolute inset-x-0 -top-32 h-[420px] bg-gradient-to-b from-accent/40 via-accent/10 to-transparent blur-3xl"
        aria-hidden="true"
        style={{ opacity: prefersReducedMotion ? 0.2 : logoOpacity }}
      />
      <div className="mx-auto flex w-[min(1100px,92vw)] flex-col items-center gap-10 text-center">
        <motion.div
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-xs font-medium uppercase tracking-[0.3rem] text-white/70 shadow-[0_0_40px_rgba(93,214,255,0.35)]"
          style={{ scale: logoScale, opacity: logoOpacity }}
        >
          Municipal Labs
        </motion.div>

        <motion.h1
          className="max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl"
          style={{ y: headlineY }}
        >
          <ScrambleText
            text={copy.hero.title}
            className="inline-block font-mono"
            durationMs={1200}
            charset="@#$%&*+=-_"
            delayMs={120}
          />
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
            href="https://legaside-v0-frontend.vercel.app/"
            className="hover:shadow-[0_0_30px_rgba(93,214,255,0.6)] hover:border-accent"
          >
            {copy.hero.ctaSecondary}
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        className="mx-auto mt-16 w-[min(1100px,92vw)]"
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-12">
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(93,214,255,0.18),transparent_55%)]"
            animate={
              prefersReducedMotion
                ? undefined
                : { backgroundPosition: ["0% 0%", "20% 30%", "0% 0%"] }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : { repeat: Infinity, duration: 30, ease: "linear" }
            }
          />
          <div className="relative grid gap-10 md:grid-cols-2">
            <div className="space-y-6 text-left">
              <p className="text-sm uppercase tracking-[0.4rem] text-accent">
                Why now
              </p>
              <p className="text-pretty text-lg text-muted-foreground md:text-xl">
                Mason grew up around politics, with his mom serving as a New
                York City council member, and saw firsthand how outdated
                government technology is. From constituent emails to 311
                systems, everything relies on archaic tools. With Aikhan’s
                experience building government-recognized AI tools and Mason’s
                domain expertise, they set out to change that. After weeks of
                interviews, one theme became clear: officials have no simple way
                to manage or analyze constituent communication. Existing CRMs
                like Caucus are clunky and lack real insights. That frustration
                drives what they’re building now.
              </p>
            </div>
            <div className="max-w-xl justify-self-center md:justify-self-end md:self-center">
              <TypingDemo />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

