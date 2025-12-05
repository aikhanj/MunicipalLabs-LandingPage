"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TypingDemo } from "@/app/(components)/typing-demo";
import { SectionHeading } from "@/app/(components)/section-heading";
import { copy } from "@/content/copy";
import { MagneticButton } from "@/app/(components)/magnetic-button";
import { motion } from "framer-motion";

const InboxTrendChart = dynamic(
  () =>
    import("@/app/(components)/charts/inbox-trend").then(
      (mod) => mod.InboxTrendChart
    ),
  {
    ssr: false,
    loading: () => (
      <div className="grid h-[220px] place-items-center rounded-2xl border border-white/10 bg-white/5 text-sm text-muted-foreground">
        Loading analytics…
      </div>
    )
  }
);

const tabConfig = [
  {
    value: "inbox",
    label: "Inbox",
    headline: "Software triage for every channel.",
    body: "Legaside listens across email aliases, 311 portals, and public inboxes. Topics, urgency, and compliance flags are auto-annotated within seconds so staff see what needs attention first.",
    highlights: ["Municipal tax portal", "Emergency alerts", "311 overflow"]
  },
  {
    value: "summaries",
    label: "Summaries",
    headline: "Software briefings ready before stand-up.",
    body: "Summaries distill what is new, what is trending, and what needs a decision. Share with council, the mayor’s office, or export into your existing ticketing and reporting tools.",
    highlights: ["Policy-ready briefs", "Instant context packs", "One-click exports"]
  },
  {
    value: "analytics",
    label: "Analytics",
    headline: "Evidence for every allocation.",
    body: "Spot service gaps, SLA risk, and resolution time across teams. Legaside builds the dashboards leadership needs without asking analysts for one-off reports.",
    highlights: ["Resolution time", "Topic saturation", "Staff load"]
  }
];

// TypingLine replaced by TypingDemo for a richer looping animation

export function Solution() {
  return (
    <section
      className="mx-auto mt-28 w-[min(1100px,92vw)]"
      id="solution"
      aria-labelledby="solution-heading"
    >
      <SectionHeading
        title={copy.solution.heading}
        description={copy.solution.sub}
      />

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="lg:order-2 grid h-full grid-rows-[1fr_auto]">
          <Tabs defaultValue="inbox" >
            <TabsList>
              {tabConfig.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabConfig.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-[1px]">
                  <div className="glass relative h-full overflow-hidden rounded-[calc(theme(borderRadius.3xl)-1px)] p-8">
                    <div className="space-y-5 text-left">
                      <motion.h3
                        className="text-2xl font-semibold text-white"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                      >
                        {tab.headline}
                      </motion.h3>
                      <motion.p
                        className="text-sm text-muted-foreground"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        {tab.body}
                      </motion.p>
                      {/* Highlights pills removed */}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-8 grid gap-4 text-sm text-muted-foreground">
            {copy.solution.points.map((point, idx) => (
              <motion.div
                key={point}
                className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-3"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20% 0px -10% 0px" }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -1, scale: 1.01 }}
                whileTap={{ scale: 0.995 }}
              >
                {/* hover shimmer sweep */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-transform duration-700 ease-out will-change-transform group-hover:translate-x-full group-hover:opacity-100" />
                <motion.span
                  className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/40 text-accent-foreground"
                  // soft pulsing glow for the checkmark badge
                  animate={{
                    filter: [
                      "drop-shadow(0 0 0 rgba(93,214,255,0))",
                      "drop-shadow(0 0 8px rgba(93,214,255,0.75))",
                      "drop-shadow(0 0 0 rgba(93,214,255,0))"
                    ]
                  }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  ✓
                </motion.span>
                {point}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-6 lg:order-1 h-full">
          <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-[1px]">
            <div className="glass relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.3xl)-1px)] border border-white/5 bg-gradient-to-br from-accent/10 via-transparent to-white/5 p-4 md:p-6">
              <div className="mb-3 flex items-center gap-3 border-b border-white/10 pb-3 text-sm text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                Composing outreach note
              </div>
              <TypingDemo
                className="h-full"
                title="Auto-drafted note"
                contextHeading="Data Utilized"
                messages={[
                  "Thanks for flagging the pothole on 5th and Pine. The street team has your report and is scheduling a repair window for Wednesday morning.",
                  "We're checking on your question about bus route 18. Transit provided new headway data; we'll post an update after the schedule change this weekend.",
                  "Appreciate your suggestion for a community garden. We've shared it with Parks & Rec and will follow up about grant eligibility."
                ]}
                statusLabels={[
                  "Analyzing thread",
                  "Checking SLA + records",
                  "Consulting 311 + open data",
                  "Preparing brief"
                ]}
                contextItems={[
                  "Thread summary (last 6 emails)",
                  "311 cases within 0.5 mi",
                  "Department SLA + current backlog",
                  "Resident sentiment trend (last 30 days)",
                  "Recent council notes on topic",
                  "Open work orders linked to address",
                  "Community board or neighborhood association involvement",
                  "Social media sentiment for that address/topic",
                  "Demographics of nearby residents (aggregate only)"
                ]}
              />
            </div>
          </div>
          {/* Removed CTA card with paragraph and buttons per request */}
        </div>
      </div>

      {/* Full-width analytics at the bottom */}
      <div className="mt-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-[1px]">
          <div className="glass rounded-[calc(theme(borderRadius.3xl)-1px)] bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.3rem] text-muted-foreground">
              Weekly analytics
            </p>
            <div className="mt-4">
              <InboxTrendChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

