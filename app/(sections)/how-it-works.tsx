'use client';

import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { GlassCard } from "@/app/(components)/glass-card";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { MagneticButton } from "@/app/(components)/magnetic-button";

type StepPreviewType = "sources" | "labels" | "workflow";

type StepConfig = {
  step: string;
  label: string;
  title: string;
  description: string;
  accentBorder: string;
  accentRail: string;
  accentChip: string;
  metricLabel: string;
  metricValue: string;
  before: string;
  after: string;
  previewType: StepPreviewType;
};

const steps: StepConfig[] = [
  {
    step: "01",
    label: "Connect systems",
    title: "Integrate",
    description:
      "Connect inboxes, CRMs, and knowledge bases with guided setup. OAuth scopes stay least-privilege by default so IT and records staff stay comfortable.",
    accentBorder: "group-hover:border-sky-400/80",
    accentRail: "from-sky-400/70 to-cyan-400/70",
    accentChip: "bg-sky-500/15 text-sky-50",
    metricLabel: "Inbox and portal sources unified",
    metricValue: "3+ sources",
    before: "Messages scattered across tools",
    after: "One AI-ready feed",
    previewType: "sources"
  },
  {
    step: "02",
    label: "Make sense of volume",
    title: "Understand",
    description:
      "Legaside classifies, summarizes, and flags sensitive content with explainable AI tuned for public records and constituent communication.",
    accentBorder: "group-hover:border-amber-400/80",
    accentRail: "from-amber-400/80 to-orange-400/80",
    accentChip: "bg-amber-500/15 text-amber-50",
    metricLabel: "Messages auto-labeled on arrival",
    metricValue: "90%+",
    before: "Walls of unread text",
    after: "Themes and risks at a glance",
    previewType: "labels"
  },
  {
    step: "03",
    label: "Close the loop",
    title: "Act",
    description:
      "Approve drafts, trigger workflows, and sync analytics to leadership dashboards. Every action remains auditable and traceable.",
    accentBorder: "group-hover:border-emerald-400/80",
    accentRail: "from-emerald-400/80 to-teal-400/80",
    accentChip: "bg-emerald-500/15 text-emerald-50",
    metricLabel: "Requests closed with full audit trail",
    metricValue: "< 24h avg",
    before: "Manual follow-up in inboxes",
    after: "Tracked workflows city-wide",
    previewType: "workflow"
  }
];

function StepPreview({ type }: { type: StepPreviewType }) {
  if (type === "sources") {
    return (
      <div className="mt-5 flex items-center gap-2 rounded-xl bg-black/40 p-3 text-[11px] text-muted-foreground/80">
        <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
          Inbox
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
          Portal
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Spreadsheet
        </span>
        <span className="ml-auto rounded-full bg-accent/10 px-2 py-1 text-[10px] text-accent">
          Unified feed
        </span>
      </div>
    );
  }

  if (type === "labels") {
    return (
      <div className="mt-5 space-y-1.5 rounded-xl bg-black/40 p-3 text-[11px]">
        {[
          { subject: "Noise complaint – Elm St", tag: "High priority" },
          { subject: "Public records request", tag: "Records" },
          { subject: "Pothole on 9th Ave", tag: "Service request" }
        ].map((row) => (
          <div
            key={row.subject}
            className="flex items-center justify-between rounded-lg bg-white/5 px-2 py-1.5 text-muted-foreground/85"
          >
            <span className="truncate">{row.subject}</span>
            <span className="ml-2 shrink-0 rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] text-amber-200">
              {row.tag}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-5 space-y-1.5 rounded-xl bg-black/40 p-3 text-[11px] text-muted-foreground/85">
      {[
        { label: "Draft response approved", done: true },
        { label: "Workflow triggered", done: true },
        { label: "Synced to dashboard", done: false }
      ].map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-2 rounded-lg bg-white/5 px-2 py-1.5"
        >
          <span
            className={
              "flex h-4 w-4 items-center justify-center rounded-full border " +
              (item.done
                ? "border-emerald-400 bg-emerald-500/20 text-emerald-100"
                : "border-white/20 text-white/40")
            }
          >
            {item.done ? "✓" : ""}
          </span>
          <span className="text-[11px]">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function StepCard({
  step,
  index,
  active,
  setActive
}: {
  step: StepConfig;
  index: number;
  active: number;
  setActive: (index: number | null) => void;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 26, mass: 1 });
  const springY = useSpring(y, { stiffness: 220, damping: 26, mass: 1 });

  const handlePointerMove: React.PointerEventHandler<HTMLDivElement> = (
    event
  ) => {
    if (prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    const rotateX = (offsetY / rect.height) * -14;
    const rotateY = (offsetX / rect.width) * 14;
    x.set(rotateX);
    y.set(rotateY);
  };

  const resetTilt = () => {
    x.set(0);
    y.set(0);
  };

  const isActive = active === index;

  const handleActivate = () => {
    setActive(index);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleActivate();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 32, x: index === 0 ? -12 : index === 2 ? 12 : 0 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay: index * 0.12, duration: 0.55, ease: "easeOut" }}
      whileHover={prefersReducedMotion ? undefined : { y: -8 }}
      className="group h-full"
      style={
        prefersReducedMotion
          ? undefined
          : {
              rotateX: springX,
              rotateY: springY,
              transformStyle: "preserve-3d"
            }
      }
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setActive(index)}
      onPointerLeave={resetTilt}
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
    >
      <GlassCard
        className={`flex h-full flex-col rounded-2xl bg-white/5 px-7 py-7 ${
          isActive ? step.accentBorder : ""
        } ${isActive ? "ring-1 ring-accent/70" : "opacity-80 hover:opacity-100"}`}
      >
        <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-semibold ${
              isActive ? step.accentChip : "bg-white/10 text-white/80"
            }`}
          >
            {step.step}
          </span>
          <span>{step.label}</span>
        </div>

        <h3 className="mt-6 text-xl font-semibold text-white">
          {step.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {step.description}
        </p>

        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] text-muted-foreground/90">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="font-medium text-white/90">{step.metricValue}</span>
          <span className="text-muted-foreground/80">{step.metricLabel}</span>
        </div>

        <StepPreview type={step.previewType} />

        <div className="mt-5 flex items-center gap-2 border-t border-white/5 pt-3 text-[11px] text-muted-foreground/80">
          <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
            Before
          </span>
          <span className="truncate">{step.before}</span>
        </div>
        <div className="mt-1 flex items-center gap-2 text-[11px] text-muted-foreground/80">
          <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-accent">
            After
          </span>
          <span className="truncate">{step.after}</span>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const effectiveIndex = activeIndex ?? 0;

  const scenarioStages = [
    {
      title: "Noise complaint arrives",
      body: "A resident emails your office about loud construction every night on Elm St.",
      detail: "Legaside pulls the message in from your shared inbox and links it with portal submissions."
    },
    {
      title: "Legaside understands context",
      body: "The message is labeled as a noise complaint, tagged to the right department, and flagged as after-hours.",
      detail: "Similar complaints in the last 7 days are surfaced so staff see the pattern by neighborhood."
    },
    {
      title: "Staff approve and close the loop",
      body: "Legaside drafts a response that cites the city’s quiet-hours policy and routes the issue to enforcement.",
      detail: "The final reply, assignment, and outcome are logged so leadership can see response times."
    }
  ] as const;

  const goToNext = () => {
    setActiveIndex((prev) => {
      const current = prev ?? 0;
      if (current >= steps.length - 1) return 0;
      return current + 1;
    });
  };

  return (
    <section
      id="how-it-works"
      className="mx-auto mt-28 w-[min(1100px,92vw)]"
      aria-labelledby="how-heading"
    >
      <div className="mt-2 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
          Human in the loop
        </p>
        <h2
          id="how-heading"
          className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl"
        >
          How Legaside keeps cities responsive.
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg font-semibold text-slate-300 md:text-xl">
          We deliver fast automation without sacrificing oversight. Staff stay in
          control while Legaside handles the repetitive lift.
        </p>
      </div>

      <div className="relative mt-14">
        <div className="relative grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <StepCard
              key={step.title}
              step={step}
              index={index}
              active={effectiveIndex}
              setActive={setActiveIndex}
            />
          ))}
        </div>
      </div>

      <section
        aria-label="Noise complaint journey through Legaside"
        className="mt-12 rounded-3xl border border-white/10 bg-black/40 p-[1px]"
      >
        <GlassCard className="flex flex-col gap-6 rounded-[calc(theme(borderRadius.3xl)-1px)] bg-gradient-to-br from-white/5 via-transparent to-white/5 px-6 py-6 md:flex-row md:items-stretch md:px-8 md:py-7">
          <div className="flex-1 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              See a request move through Legaside
            </p>
            <h3 className="text-lg font-semibold text-white">
              {scenarioStages[effectiveIndex].title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {scenarioStages[effectiveIndex].body}
            </p>
            <p className="text-xs text-muted-foreground/90">
              {scenarioStages[effectiveIndex].detail}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <MagneticButton
                className="px-5 py-2 text-xs md:text-sm"
                onClick={goToNext}
              >
                {effectiveIndex === steps.length - 1 ? "Restart flow" : "Next step"}
              </MagneticButton>
              <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                {steps.map((step, index) => (
                  <button
                    key={step.step}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`flex h-5 w-5 items-center justify-center rounded-full border text-[10px] transition ${
                      effectiveIndex === index
                        ? "border-accent bg-accent/20 text-white"
                        : "border-white/20 text-muted-foreground hover:border-accent/60"
                    }`}
                    aria-label={`Go to step ${step.step}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 flex-1 md:mt-0">
            <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-4 text-xs text-muted-foreground">
              {effectiveIndex === 0 && (
                <div className="space-y-3">
                  <div className="rounded-xl bg-white/5 p-3">
                    <div className="flex items-center justify-between text-[11px] text-muted-foreground/80">
                      <span>Inbox · Constituent</span>
                      <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] text-amber-200">
                        New
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-white">
                      “Hi, we’ve had construction noise on Elm St past midnight all week…”
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="rounded-full bg-white/5 px-2 py-0.5">
                      Source: Shared inbox
                    </span>
                    <span className="rounded-full bg-white/5 px-2 py-0.5">
                      Linked: 2 portal reports
                    </span>
                  </div>
                </div>
              )}
              {effectiveIndex === 1 && (
                <div className="space-y-2">
                  <div className="space-y-1.5">
                    {[
                      "Noise complaint – Elm St (after hours)",
                      "Noise complaint – Oak Ave",
                      "Noise complaint – Pine St"
                    ].map((subject, i) => (
                      <div
                        key={subject}
                        className="flex items-center justify-between rounded-lg bg-white/5 px-2 py-1.5"
                      >
                        <span className="truncate text-[11px] text-muted-foreground/90">
                          {subject}
                        </span>
                        <span
                          className={`ml-2 shrink-0 rounded-full px-2 py-0.5 text-[10px] ${
                            i === 0
                              ? "bg-amber-500/20 text-amber-100"
                              : "bg-sky-500/15 text-sky-100"
                          }`}
                        >
                          {i === 0 ? "High priority" : "Noise · Ward 4"}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-2 text-[11px] text-muted-foreground/80">
                    Legaside clusters similar complaints and shows the pattern over the last 7
                    days.
                  </p>
                </div>
              )}
              {effectiveIndex === 2 && (
                <div className="space-y-3">
                  <div className="rounded-xl bg-white/5 p-3">
                    <p className="text-[11px] text-muted-foreground/80">
                      Draft to resident
                    </p>
                    <p className="mt-2 text-sm text-white">
                      “Thanks for flagging the late-night construction on Elm St. City code
                      limits work after 10pm. We’ve routed this to Enforcement, who will…”
                    </p>
                  </div>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>Staff approved draft and sent reply</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>Case opened in enforcement workflow</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                      <span>Outcome will appear in service dashboard</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </GlassCard>
      </section>
    </section>
  );
}

