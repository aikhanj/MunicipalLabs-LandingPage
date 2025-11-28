'use client';

import { motion } from "framer-motion";
import { SectionHeading } from "@/app/(components)/section-heading";
import { Metric } from "@/app/(components)/metric";
import { LogoCloud } from "@/app/(components)/logo-cloud";

const metrics = [
  { value: 72, suffix: "%", label: "Faster first responses in pilot teams" },
  {
    value: 4.7,
    suffix: "x",
    label: "More messages classified per staff hour in pilots",
    decimals: 1
  },
  { value: 98, suffix: "%", label: "Drafts approved without major edits" }
];

const testimonials = [
  {
    quote:
      "Legaside let our constituent services team see issues by neighborhood before they escalated.",
    name: "Chief Innovation Officer",
    org: "Midwest City Hall"
  },
  {
    quote:
      "We cleared a month-long email backlog in three days with full audit trails.",
    name: "Public Engagement Director",
    org: "Capital County"
  },
  {
    quote:
      "Finally a vendor that understands compliance and frontline reality. It's night and day.",
    name: "Deputy CIO",
    org: "State of Cascadia"
  }
];

export function Metrics() {
  return (
    <section
      id="metrics"
      className="mx-auto mt-28 w-[min(1100px,92vw)]"
      aria-labelledby="metrics-heading"
    >
      <SectionHeading
        eyebrow="Proof"
        title="Proven impact in pilots."
        description="Pilot cities are seeing faster replies to residents, cleared-out backlogs, and dashboards leadership can finally trust."
        align="center"
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-8">
          <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 md:grid-cols-3">
            {metrics.map((metric) => (
              <Metric key={metric.label} {...metric} />
            ))}
          </div>
          <LogoCloud className="rounded-3xl border border-white/10 bg-white/5 p-6" />
        </div>
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3rem] text-muted-foreground/70">
            From early pilots (anonymized)
          </p>
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.org}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <span className="text-3xl text-white/70">“</span>
              <p className="mt-3 text-base text-white/90">{testimonial.quote}</p>
              <footer className="mt-4 text-xs uppercase tracking-[0.3rem] text-muted-foreground/70">
                {testimonial.name} — {testimonial.org}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

