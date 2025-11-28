'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "@/app/(components)/magnetic-button";
import { Particles } from "@/app/(components)/particles";
import { Parallax } from "@/app/(components)/parallax";
import { copy } from "@/content/copy";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { ScrambleText } from "@/app/(components)/scramble-text";

export function Hero() {
  const Glow = ({
    children,
    delay = 0
  }: {
    children: React.ReactNode;
    delay?: number;
  }) => (
    <motion.span
      className="text-accent"
      // keep a soft base glow so it never snaps to zero
      initial={{ textShadow: "0 0 8px rgba(93,214,255,0.25)" }}
      animate={{
        textShadow: [
          "0 0 8px rgba(93,214,255,0.25)",
          "0 0 22px rgba(93,214,255,0.9)",
          "0 0 8px rgba(93,214,255,0.25)"
        ],
        // very subtle opacity breathe to smooth the crest/trough
        opacity: [1, 0.98, 1]
      }}
      transition={{
        duration: 3.0,
        times: [0, 0.5, 1],
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0.15,
        ease: "easeInOut",
        delay
      }}
    >
      {children}
    </motion.span>
  );

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
      <Particles quantity={16} className="opacity-60" />
      <motion.div
        className="pointer-events-none absolute inset-x-0 -top-32 h-[360px] bg-gradient-to-b from-accent/25 via-accent/8 to-transparent blur-2xl"
        aria-hidden="true"
        style={{ opacity: prefersReducedMotion ? 0.2 : logoOpacity }}
      />
      <div className="mx-auto flex w-[min(1100px,92vw)] flex-col items-center gap-10 text-center">
        <motion.div
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-xs font-medium uppercase tracking-[0.3rem] text-white/70"
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
            href="#contact"
            className="bg-white text-background hover:bg-slate-100/95 hover:text-background"
          >
            {copy.hero.ctaPrimary}
          </MagneticButton>
          <MagneticButton
            href="https://legaside-v0-frontend.vercel.app/"
            className="border border-white/20 bg-transparent text-white hover:bg-white/10"
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
          <div id="problem" className="relative grid gap-10">
            <div className="space-y-6 text-left">
              <p className="text-sm uppercase tracking-[0.4rem] text-accent">
                Problem
              </p>
              <div className="space-y-4 text-pretty text-lg text-muted-foreground md:text-xl">
                <p>
                  Across local governments, constituent communication is still{" "}
                  <Glow>fragmented, reactive, and manual</Glow>.
                </p>
                <p>
                  Staff juggle shared inboxes, 311 portals, and spreadsheets with
                  limited visibility into{" "}
                  <Glow delay={0.2}>trends, sentiment, and workload</Glow>.
                </p>
                <p>
                  Council and constituent services teams spend hours triaging
                  messages and drafting repetitive replies instead of focusing on{" "}
                  <Glow delay={0.4}>resident outcomes and accountability</Glow>.
                </p>
                <p>
                  <Glow delay={0.6}>MunicipalLabs</Glow> is building the
                  infrastructure layer that lets offices see what matters most and
                  respond faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

