'use client';

import { motion } from "framer-motion";
import { SectionHeading } from "@/app/(components)/section-heading";
import { GlassCard } from "@/app/(components)/glass-card";
import { ScrambleText } from "@/app/(components)/scramble-text";

const stack = [
  { label: "Next.js 15 + TypeScript" },
  { label: "Vercel Edge Functions" },
  { label: "Supabase (Postgres + pgvector)" },
  { label: "Row-Level Security (RLS)" },
  { label: "LangChain (RAG orchestration)" },
  { label: "GPT-4-Turbo (generation)" },
  { label: "text-embedding-3-large (embeddings)" },
  { label: "Fine-tuned classifiers (intent)" }
];

const highlights = [
  {
    title: "Architecture",
    body:
      "RAG pipeline over office correspondence with embeddings stored in pgvector. Query routing and retrieval via LangChain, generation with GPT-4-Turbo."
  },
  {
    title: "Security model",
    body:
      "Tenant isolation enforced with Postgres RLS. OAuth scopes stay least-privilege; data encrypted in transit and at rest."
  },
  {
    title: "Dev workflow",
    body:
      "Cursor + Claude Code accelerate iteration; preview deployments on Vercel for rapid feedback."
  }
];

export function Tech() {
  return (
    <section
      id="tech"
      className="mx-auto mt-28 w-[min(1100px,92vw)]"
      aria-labelledby="tech-heading"
    >
      <SectionHeading
        eyebrow="Stack"
        title="Built for reliable, compliant AI in government."
        description="Modern web stack with a retrieval-first AI layer, secure by default."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <GlassCard className="p-6 md:p-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Core stack</h3>
            <ul className="grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
              {stack.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                >
                  <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_rgba(93,214,255,0.8)]" />
                  {item.label.includes("Postgres") || item.label.includes("Row-Level Security") ? (
                    <ScrambleText text={item.label} durationMs={900} />
                  ) : (
                    item.label
                  )}
                </li>
              ))}
            </ul>
          </div>
        </GlassCard>

        <div className="grid gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <h4 className="text-base font-semibold text-white">{h.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{h.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


