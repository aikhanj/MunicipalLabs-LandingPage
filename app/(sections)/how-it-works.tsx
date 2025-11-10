'use client';

import { motion } from "framer-motion";
import { TiltCard } from "@/app/(components)/tilt-card";
import { SectionHeading } from "@/app/(components)/section-heading";

const steps = [
  {
    title: "Integrate",
    description:
      "Connect inboxes, CRMs, and knowledge bases with guided setup. OAuth scopes stay least-privilege by default.",
    icon: "🛠️"
  },
  {
    title: "Understand",
    description:
      "Legaside classifies, summarizes, and flags sensitive content with explainable AI tuned for public records.",
    icon: "🧠"
  },
  {
    title: "Act",
    description:
      "Approve drafts, trigger workflows, and sync analytics to leadership dashboards. Every action remains auditable.",
    icon: "⚡"
  }
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto mt-28 w-[min(1100px,92vw)]"
      aria-labelledby="how-heading"
    >
      <SectionHeading
        eyebrow="Human in the loop"
        title="How Legaside keeps cities responsive."
        description="We deliver fast automation without sacrificing oversight. Staff stay in control while Legaside handles the repetitive lift."
        align="center"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <TiltCard key={step.title}>
            <motion.div
              className="relative h-full rounded-[calc(theme(borderRadius.3xl)-1px)] border border-white/10 bg-white/5 p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl">
                {step.icon}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                {step.description}
              </p>
              <motion.span
                className="absolute inset-x-1 bottom-2 h-[2px] rounded-full bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}

