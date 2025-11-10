"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TiltCard } from "@/app/(components)/tilt-card";
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
    headline: "AI triage for every channel.",
    body: "Legaside listens across email aliases, 311 portals, and public inboxes. Topics, urgency, and compliance flags auto-annotate within seconds.",
    highlights: ["Municipal tax portal", "Emergency alerts", "311 overflow"]
  },
  {
    value: "summaries",
    label: "Summaries",
    headline: "Briefings ready before stand-up.",
    body: "Summaries distill what is new, what is trending, and what needs a decision. Send to council, share with the mayor’s office, or export to your ticketing system.",
    highlights: ["Policy-ready briefs", "Instant context packs", "One-click exports"]
  },
  {
    value: "analytics",
    label: "Analytics",
    headline: "Evidence for every allocation.",
    body: "Spot service gaps, track SLAs, and show resolution time across agencies. Legaside builds the dashboards leadership needs without analysts on call.",
    highlights: ["Resolution time", "Topic saturation", "Staff load"]
  }
];

function TypingLine({ text }: { text: string }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let frame = 0;
    const interval = window.setInterval(() => {
      frame += 1;
      setDisplay(text.slice(0, frame));
      if (frame >= text.length) {
        window.clearInterval(interval);
      }
    }, 35);
    return () => window.clearInterval(interval);
  }, [text]);

  return (
    <span className="inline-flex items-center text-white">
      {display}
      {display.length < text.length ? (
        <span className="ml-1 h-4 w-[2px] animate-pulse bg-white/70" />
      ) : null}
    </span>
  );
}

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
        <div>
          <Tabs defaultValue="inbox">
            <TabsList>
              {tabConfig.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabConfig.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <TiltCard className="bg-white/5">
                  <div className="relative overflow-hidden rounded-[calc(theme(borderRadius.3xl)-1px)] p-8">
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
                      <ul className="grid gap-3 text-sm text-muted-foreground/80 md:grid-cols-2">
                        {tab.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25rem] text-muted-foreground"
                          >
                            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_rgba(93,214,255,0.8)]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TiltCard>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-8 grid gap-4 text-sm text-muted-foreground">
            {copy.solution.points.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/40 text-accent-foreground">
                  ✓
                </span>
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <TiltCard glare={false}>
            <div className="relative overflow-hidden rounded-[calc(theme(borderRadius.3xl)-1px)] border border-white/5 bg-gradient-to-br from-accent/15 via-transparent to-white/5">
              <div className="flex items-center gap-3 border-b border-white/10 px-6 py-4 text-sm text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
                Drafting reply to resident
              </div>
              <div className="space-y-3 px-6 py-6 text-left text-sm text-muted-foreground">
                <p className="text-xs uppercase tracking-[0.4rem] text-white/70">
                  Suggested response
                </p>
                <TypingLine text="Thanks for reaching out about the streetlight outage on Maple Ave. We've logged the issue with Public Works and expect a crew onsite within 24 hours." />
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.3rem] text-muted-foreground">
                    Applied context
                  </p>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li>• Past 8 messages on the thread</li>
                    <li>• Service tickets from the last 14 days</li>
                    <li>• Resident sentiment trend</li>
                  </ul>
                </div>
              </div>
            </div>
          </TiltCard>

          <TiltCard>
            <div className="rounded-[calc(theme(borderRadius.3xl)-1px)] bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.3rem] text-muted-foreground">
                Weekly analytics
              </p>
              <div className="mt-4">
                <InboxTrendChart />
              </div>
            </div>
          </TiltCard>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-muted-foreground">
              Human-in-the-loop by default. Every draft holds full provenance,
              down to the paragraph. Staff stay accountable while Legaside
              handles the heavy lift.
            </p>
            <div className="mt-4 flex gap-3">
              <MagneticButton href="#contact" className="flex-1 justify-center">
                Start pilot
              </MagneticButton>
              <MagneticButton
                href="#roadmap"
                className="flex-1 justify-center bg-white/5 text-muted-foreground hover:text-white"
              >
                Roadmap
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

