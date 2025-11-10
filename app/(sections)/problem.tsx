'use client';

import { motion } from "framer-motion";
import { GlassCard } from "@/app/(components)/glass-card";
import { SectionHeading } from "@/app/(components)/section-heading";
import { copy } from "@/content/copy";
import { Reveal } from "@/app/(components)/reveal";

export function Problem() {
  return (
    <section
      id="product"
      className="relative mx-auto mt-32 w-[min(1100px,92vw)]"
      aria-labelledby="problem-heading"
    >
      <SectionHeading
        title={copy.problem.heading}
        description="Queues overflow, inboxes fragment, and staff chase status updates across spreadsheets. Municipal teams deserve better instrumentation."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {copy.problem.bullets.map((bullet, index) => (
          <Reveal key={bullet} delay={index * 0.1}>
            <GlassCard className="p-6 md:p-8">
              <motion.div
                className="flex items-start gap-4"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: 0.12 * index, duration: 0.5 }}
              >
                <span className="mt-1 grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-red-500/20 text-lg text-red-300">
                  !
                </span>
                <p className="text-base text-muted-foreground">{bullet}</p>
              </motion.div>
            </GlassCard>
          </Reveal>
        ))}
        <Reveal delay={0.3}>
          <GlassCard className="col-span-full overflow-hidden p-0">
            <div className="grid gap-4 bg-gradient-to-br from-red-500/15 via-background to-transparent p-8 md:grid-cols-[1.1fr_0.9fr] md:gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.4rem] text-red-200/70">
                  Status quo chaos
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Workstreams split across inboxes, spreadsheets, and post-its.
                </h3>
                <p className="mt-4 text-sm text-muted-foreground/90">
                  Legaside’s classifier learns local policy rules to route
                  workloads instantly, while human review catches outliers
                  before they become headlines.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-red-500/10 blur-2xl" />
                <div className="relative grid gap-3 rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-sm text-muted-foreground">
                  <p className="flex items-center justify-between">
                    <span>Inbox</span>
                    <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs text-red-200">
                      172 unread
                    </span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span>Shared spreadsheet</span>
                    <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs text-yellow-200">
                      19 editors
                    </span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span>Citizen hotline</span>
                    <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs text-orange-200">
                      3 voicemails
                    </span>
                  </p>
                  <p className="rounded-2xl border border-dashed border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.3rem] text-white/70">
                    Manual triage required
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}

