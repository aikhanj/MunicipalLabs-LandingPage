'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/app/(components)/section-heading";
import { copy } from "@/content/copy";

export function Roadmap() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"]
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      id="roadmap"
      className="mx-auto mt-28 w-[min(1100px,92vw)]"
      aria-labelledby="roadmap-heading"
    >
      <SectionHeading
        eyebrow="Roadmap"
        title={copy.roadmap.heading}
        description="We ship quickly with municipal partners. Every quarter adds capabilities that make AI easier to trust in government."
      />

      <div className="relative mt-12 grid gap-10 md:grid-cols-3">
        <motion.span
          aria-hidden="true"
          className="absolute left-[calc(16.66%-2px)] top-6 hidden h-[calc(100%-3rem)] w-1 rounded-full bg-gradient-to-b from-accent via-white/40 to-transparent md:block"
          style={{ scaleY: lineScale, transformOrigin: "top" }}
        />
        {copy.roadmap.items.map((item, index) => (
          <motion.div
            key={item.q}
            className="relative rounded-3xl border border-white/10 bg-white/5 p-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-accent text-background shadow-[0_0_20px_rgba(93,214,255,0.6)]">
                {item.q}
              </span>
              <p className="text-sm text-muted-foreground">{item.t}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

