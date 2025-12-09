'use client';

import { motion } from "framer-motion";
import { copy } from "@/content/copy";

export function Approach() {
  return (
    <section
      id="approach"
      className="relative mx-auto mt-32 w-[min(1100px,92vw)]"
      aria-labelledby="approach-heading"
    >
      <div className="text-center">
        <h2
          id="approach-heading"
          className="text-4xl font-bold leading-tight text-white md:text-5xl"
        >
          {copy.approach.heading}
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {copy.approach.cards.map((card, index) => (
          <motion.div
            key={card.title}
            className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-xl font-semibold text-white">
              {card.title}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
