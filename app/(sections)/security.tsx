'use client';

import { motion } from "framer-motion";
import { SectionHeading } from "@/app/(components)/section-heading";
import { GlassCard } from "@/app/(components)/glass-card";
import { copy } from "@/content/copy";
import Image from "next/image";
import { ScrambleText } from "@/app/(components)/scramble-text";

const burstVariants = {
  hidden: { scale: 0.5, opacity: 0, rotate: -10 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      delay: 0.1 * i,
      type: "spring",
      stiffness: 240,
      damping: 18
    }
  })
};

const visuals: { src: string; alt: string }[] = [
  { src: "/security/rls.svg", alt: "Row-Level Security icon" },
  { src: "/security/oauth.svg", alt: "Least-privilege OAuth icon" },
  { src: "/security/encryption.svg", alt: "Encryption icon" },
  { src: "/security/audit.svg", alt: "Audit trails icon" }
];

export function Security() {
  return (
    <section
      id="security"
      className="mx-auto mt-32 w-[min(1100px,92vw)]"
      aria-labelledby="security-heading"
    >
      <SectionHeading
        eyebrow="Security & Compliance"
        title={copy.security.heading}
        description="Legaside is architected for regulated teams. Data residency, encryption, and access controls are first-class citizens."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {copy.security.bullets.map((bullet, index) => (
          <GlassCard key={bullet} className="group relative overflow-hidden p-6">
            <div className="flex items-start gap-3">
              <motion.span
                custom={index}
                variants={burstVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                className="mt-1 grid h-10 w-10 place-items-center rounded-full bg-green-400/10 shadow-[0_0_28px_rgba(74,222,128,0.35)] ring-1 ring-inset ring-green-400/30"
              >
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{ rotate: -6, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 220, damping: 16 }}
                  className="relative h-7 w-7"
                >
                  <Image
                    src={visuals[index % visuals.length].src}
                    alt={visuals[index % visuals.length].alt}
                    fill
                    priority={false}
                    sizes="28px"
                  />
                </motion.div>
              </motion.span>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">
                  <ScrambleText
                    text={bullet}
                    durationMs={950}
                    delayMs={index * 90}
                    charset="@#$%&*+=-_\\/[]{}"
                    className="font-mono text-green-300"
                  />
                </p>
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "100%", opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: 0.15, duration: 0.6 }}
                  className="mt-2 h-px bg-gradient-to-r from-green-400/40 via-green-400/20 to-transparent"
                />
              </div>
            </div>
            <motion.div
              aria-hidden
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="pointer-events-none absolute -inset-24 -z-10 rounded-[28px] bg-[radial-gradient(60px_60px_at_var(--x)_var(--y),rgba(74,222,128,0.12),transparent)]"
            />
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

