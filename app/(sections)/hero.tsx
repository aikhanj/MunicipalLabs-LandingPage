'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "@/app/(components)/magnetic-button";
import { Particles } from "@/app/(components)/particles";
import { Parallax } from "@/app/(components)/parallax";
import { copy } from "@/content/copy";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

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
      className="relative isolate flex min-h-[90vh] flex-col justify-center overflow-hidden bg-aurora pt-28"
    >
      <Parallax
        layers={[
          {
            depth: -0.2,
            className:
              "bg-[radial-gradient(circle_at_10%_20%,rgba(93,214,255,0.35),transparent_58%)]"
          },
          {
            depth: -0.4,
            className:
              "bg-[radial-gradient(circle_at_80%_0%,rgba(149,128,255,0.3),transparent_55%)]"
          },
          {
            depth: -0.6,
            className:
              "bg-[linear-gradient(140deg,rgba(93,214,255,0.12),rgba(11,14,24,0)_65%)]"
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
          MunicipalLabs
          <span className="inline-flex h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(93,214,255,0.95)]" />
          Legaside Alpha
        </motion.div>

        <motion.h1
          className="max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl"
          style={{ y: headlineY }}
        >
          {copy.hero.title}
        </motion.h1>

        <motion.p
          className="max-w-2xl text-pretty text-base text-muted-foreground md:text-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {copy.hero.subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <MagneticButton href="#contact">
            {copy.hero.ctaPrimary}
          </MagneticButton>
          <a
            href="#product"
            className={cn(
              "btn-focus inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-3 text-sm font-semibold text-muted-foreground hover:text-white"
            )}
          >
            {copy.hero.ctaSecondary}
          </a>
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
          <div className="relative grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 text-left">
              <p className="text-sm uppercase tracking-[0.4rem] text-accent">
                Why now
              </p>
              <p className="text-pretty text-lg text-muted-foreground md:text-xl">
                Legaside clears thousands of resident messages with assistive AI
                that justifies every action. Teams triage faster, craft
                responses in context, and unlock analytics that finally show
                what the city is hearing.
              </p>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3rem] text-muted-foreground">
                <span className="rounded-full border border-white/10 px-3 py-1">
                  Inbox AI
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1">
                  Compliance-first
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1">
                  Human in loop
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-transparent blur-3xl" />
              <motion.div
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-green-400/80" />
                    Inbox Health
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-muted-foreground">
                    Live
                  </span>
                </div>
                <div className="space-y-6 px-6 py-8 text-left">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3rem] text-muted-foreground">
                      Today&apos;s queue
                    </p>
                    <p className="mt-2 text-3xl font-semibold text-white">
                      482 messages
                    </p>
                  </div>
                  <div className="grid gap-3">
                    {[
                      { label: "Auto routed", value: "73%" },
                      { label: "Ready to send", value: "124" },
                      { label: "Needs review", value: "14" }
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 text-sm text-muted-foreground"
                      >
                        <span>{item.label}</span>
                        <span className="font-semibold text-white">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

