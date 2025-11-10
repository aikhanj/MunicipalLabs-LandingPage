'use client';

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type StatusStep = {
  id: string;
  label: string;
  durationMs: number;
};

const STATUS_STEPS: StatusStep[] = [
  { id: "thinking", label: "Thinking", durationMs: 1200 },
  { id: "drafting", label: "Drafting response", durationMs: 1600 },
  { id: "considering", label: "Considering constituent priorities and political context", durationMs: 1600 },
  { id: "jargon", label: "Coordinating interdepartmental stakeholders and governance frameworks", durationMs: 1600 }
];

const MESSAGES = [
  "Thanks for reaching out about the streetlight outage on Maple Ave. We've logged the issue with Public Works and expect a crew onsite within 24 hours.",
  "Appreciate your note about traffic calming on Cedar Blvd. We’re reviewing data from DOT and will follow up after the safety audit next week.",
  "We received your concern about recycling pickup delays. Sanitation has added a temporary route and service should be normalized by Thursday."
];

type Phase = "status" | "typing" | "erasing";

export function TypingDemo({
  className,
  messages,
  statusLabels,
  title = "Suggested response",
  contextHeading = "Applied context",
  contextItems
}: {
  className?: string;
  messages?: string[];
  statusLabels?: string[];
  title?: string;
  contextHeading?: string;
  contextItems?: string[];
}) {
  const [phase, setPhase] = useState<Phase>("status");
  const [stepIndex, setStepIndex] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [chars, setChars] = useState(0);

  const effectiveMessages = messages && messages.length > 0 ? messages : MESSAGES;
  const effectiveSteps: StatusStep[] = useMemo(() => {
    if (!statusLabels || statusLabels.length === 0) return STATUS_STEPS;
    return statusLabels.map((label, idx) => ({
      id: `custom-${idx}`,
      label,
      durationMs: 1400
    }));
  }, [statusLabels]);

  const currentMessage = useMemo(() => effectiveMessages[messageIndex % effectiveMessages.length], [messageIndex, effectiveMessages]);
  const currentStep = useMemo(() => effectiveSteps[Math.min(stepIndex, effectiveSteps.length - 1)], [stepIndex, effectiveSteps]);

  // Run status sequence before each typing cycle
  useEffect(() => {
    if (phase !== "status") return;
    if (stepIndex >= effectiveSteps.length) {
      setPhase("typing");
      return;
    }
    const timeout = setTimeout(() => {
      setStepIndex((i) => i + 1);
    }, currentStep.durationMs);
    return () => clearTimeout(timeout);
  }, [phase, stepIndex, currentStep, effectiveSteps.length]);

  // Typing animation
  useEffect(() => {
    if (phase !== "typing") return;
    setChars(0);
    const interval = setInterval(() => {
      setChars((c) => {
        if (c >= currentMessage.length) {
          clearInterval(interval);
          // short pause at full message, then start erasing
          setTimeout(() => setPhase("erasing"), 850);
          return c;
        }
        return c + 1;
      });
    }, 1000 / 28);
    return () => clearInterval(interval);
  }, [phase, currentMessage]);

  // Erasing animation
  useEffect(() => {
    if (phase !== "erasing") return;
    const interval = setInterval(() => {
      setChars((c) => {
        if (c <= 0) {
          clearInterval(interval);
          // move to next message and restart the status sequence
          setMessageIndex((i) => (i + 1) % MESSAGES.length);
          setStepIndex(0);
          setPhase("status");
          return 0;
        }
        return c - 1;
      });
    }, 1000 / 40);
    return () => clearInterval(interval);
  }, [phase]);

  const typed = currentMessage.slice(0, chars);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6",
        className
      )}
    >
      <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
        <span className="relative inline-flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <AnimatePresence mode="popLayout">
          <motion.span
            key={phase === "status" ? currentStep.id : phase}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
            className="uppercase tracking-[0.2rem]"
          >
            {phase === "status" ? currentStep.label : phase === "erasing" ? "Clearing draft" : "Drafting response"}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="rounded-xl bg-black/30 p-4">
        <p className="mb-2 text-[10px] uppercase tracking-[0.25rem] text-white/60">
          {title}
        </p>
        <p className="min-h-[92px] text-sm leading-6 text-white/90 md:text-base">
          {typed}
        </p>
      </div>

      <div className="mt-4 rounded-xl bg-black/20 p-3">
        <p className="text-[11px] uppercase tracking-[0.25rem] text-white/60">
          {contextHeading}
        </p>
        <ul className="mt-2 list-none space-y-1 text-xs italic text-white/90">
          {(contextItems && contextItems.length > 0
            ? contextItems
            : ["Past 8 messages on the thread", "Service tickets from the last 14 days", "Resident sentiment trend"]
          ).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}


