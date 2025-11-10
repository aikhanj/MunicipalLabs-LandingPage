'use client';

import { motion } from "framer-motion";
import { SectionHeading } from "@/app/(components)/section-heading";
import { GlassCard } from "@/app/(components)/glass-card";
import { copy } from "@/content/copy";

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
          <GlassCard key={bullet} className="p-6">
            <div className="flex items-start gap-3">
              <motion.span
                custom={index}
                variants={burstVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                className="mt-1 grid h-10 w-10 place-items-center rounded-full bg-green-400/15 text-lg text-green-300 shadow-[0_0_20px_rgba(74,222,128,0.5)]"
              >
                ✓
              </motion.span>
              <p className="text-sm text-muted-foreground">{bullet}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

