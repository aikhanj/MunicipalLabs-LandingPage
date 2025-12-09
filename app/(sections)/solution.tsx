"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";
import { MagneticButton } from "@/app/(components)/magnetic-button";

export function Solution() {
  return (
    <section
      className="mx-auto mt-32 w-[min(1100px,92vw)]"
      id="solution"
      aria-labelledby="solution-heading"
    >
      <div className="text-center">
        <h2
          id="solution-heading"
          className="text-4xl font-bold leading-tight text-white md:text-5xl"
        >
          {copy.solution.heading}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {copy.solution.sub}
        </p>
      </div>

      <motion.div
        className="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="space-y-6">
          {copy.solution.points.map((point, idx) => (
            <motion.div
              key={point}
              className="flex items-start gap-4 transition-all duration-300"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/30 text-sm text-accent">
                ✓
              </div>
              <p className="text-base text-muted-foreground">{point}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <MagneticButton
            href={copy.solution.learnMoreUrl}
            className="bg-white text-background hover:bg-slate-100/95"
          >
            Learn More
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}

