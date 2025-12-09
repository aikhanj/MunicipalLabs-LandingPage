'use client';

import { motion } from "framer-motion";
import { SectionHeading } from "@/app/(components)/section-heading";
import { GlassCard } from "@/app/(components)/glass-card";
import { Particles } from "@/app/(components)/particles";
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
      className="mx-auto mt-28 w-[min(1100px,92vw)]"
      aria-labelledby="security-heading"
    >
      <SectionHeading
        eyebrow="Security & Compliance"
        title={copy.security.heading}
        description="We handle constituent data like sensitive public records: encrypted in transit and at rest, isolated per tenant, and fully auditable for staff access."
      />

      <div className="mt-4 flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground">
        {copy.security.status ? (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-300"
          >
            <span className="relative h-2 w-2 rounded-full bg-emerald-400">
              <span className="absolute inset-0 rounded-full bg-emerald-400/40 blur-sm" />
            </span>
            <span>{copy.security.status}</span>
          </motion.div>
        ) : null}

        <div className="inline-flex max-w-full items-center gap-3 rounded-full bg-emerald-500/5 px-4 py-1.5 font-mono text-emerald-300 ring-1 ring-emerald-400/40">
          <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 shadow-[0_0_14px_rgba(16,185,129,0.7)]" />
          <ScrambleText
            text="access: encrypted • isolation: per-tenant • logs: on"
            durationMs={1100}
            delayMs={140}
            charset="@#$%&*+=-_\\/[]{}"
            className="truncate text-[10px] sm:text-[11px]"
          />
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-border bg-muted dark:bg-muted/50 p-[1px]">
        <GlassCard className="relative overflow-hidden rounded-[calc(theme(borderRadius.3xl)-1px)] bg-gradient-to-br from-emerald-500/10 via-transparent to-white/5 px-5 py-7 md:px-8 md:py-8">
          {/* Subtle security atmosphere */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <Particles quantity={20} className="opacity-25 mix-blend-screen" />
            <motion.div
              initial={{ y: "-10%" }}
              animate={{ y: "10%" }}
              transition={{
                duration: 16,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="absolute inset-x-[-10%] top-[-50%] h-[200%] bg-[linear-gradient(to_bottom,rgba(148,163,184,0.12)_0,transparent_40%,transparent_60%,rgba(148,163,184,0.12)_100%)]"
            />
          </div>

          <div className="relative z-10">
            <div className="grid gap-6 md:grid-cols-2">
              {copy.security.bullets.map((bullet, index) => (
                <motion.div
                  key={bullet.title}
                  initial={{ opacity: 0, y: 16, x: index % 2 === 0 ? -8 : 8 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, amount: 0.55 }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="group h-full"
                >
                  <GlassCard className="flex h-full flex-col rounded-2xl border border-border bg-card dark:bg-slate-900/90 backdrop-blur-sm px-6 py-6">
                    <div className="flex items-start gap-4">
                      <motion.span
                        custom={index}
                        variants={burstVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.6 }}
                        className="mt-1 grid h-11 w-11 flex-shrink-0 place-items-center rounded-full bg-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.55)] ring-1 ring-inset ring-emerald-400/50 group-hover:bg-emerald-500/30 group-hover:ring-emerald-300/80"
                      >
                        <motion.div
                          initial={{ scale: 0.85, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          whileHover={{ rotate: -6, scale: 1.05 }}
                          transition={{
                            type: "spring",
                            stiffness: 230,
                            damping: 18
                          }}
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
                        <h3 className="font-mono text-sm font-medium text-emerald-300">
                          {bullet.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {bullet.body}
                        </p>
                        <motion.div
                          initial={{ width: 0, opacity: 0 }}
                          whileInView={{ width: "100%", opacity: 1 }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ delay: 0.15, duration: 0.6 }}
                          className="mt-4 h-px bg-gradient-to-r from-emerald-400/0 via-emerald-400/80 to-transparent"
                        />
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

