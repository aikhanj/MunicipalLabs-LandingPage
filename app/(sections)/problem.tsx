'use client';

import { motion } from "framer-motion";
import { copy } from "@/content/copy";

export function Problem() {
  return (
    <section
      id="problem"
      className="relative mx-auto mt-32 w-[min(1100px,92vw)]"
      aria-labelledby="problem-heading"
    >
      <div className="text-center">
        <h2
          id="problem-heading"
          className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl"
        >
          {copy.problem.heading}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {copy.problem.subheadline}
        </p>
        <p className="mt-2 text-base text-muted-foreground">
          {copy.problem.description}
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {copy.problem.bullets.map((bullet, index) => {
          // Group bullets in pairs (title + description)
          if (index % 2 === 0) {
            const title = bullet;
            const description = copy.problem.bullets[index + 1] || "";
            const cardIndex = Math.floor(index / 2);

            return (
              <motion.div
                key={title}
                className={`rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-md ${
                  cardIndex === 2 ? "md:col-span-2 md:max-w-md md:mx-auto" : ""
                }`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: cardIndex * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-accent">
                    →
                  </div>
                  <div>
                    <p className="text-base font-semibold text-foreground">
                      {title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          }
          return null;
        })}
      </div>
    </section>
  );
}

