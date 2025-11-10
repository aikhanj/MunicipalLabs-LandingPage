'use client';

import { motion } from "framer-motion";
import { SectionHeading } from "@/app/(components)/section-heading";

const values = [
  {
    title: "Ship with the public sector",
    description:
      "We co-design with city staff so AI reinforces trust instead of eroding it."
  },
  {
    title: "Transparency over black boxes",
    description:
      "Every suggestion is explainable with provenance and risk notes."
  },
  {
    title: "Accessibility as a baseline",
    description:
      "Interfaces and workflows meet residents where they are, on any device."
  }
];

export function About() {
  return (
    <section
      id="about"
      className="mx-auto mt-28 w-[min(1100px,92vw)]"
      aria-labelledby="about-heading"
    >
      <SectionHeading
        eyebrow="About"
        title="Meet the team behind MunicipalLabs."
        description="We’ve shipped AI infrastructure at top-tier startups and scaled civic tech inside city hall. MunicipalLabs exists to give public servants software they’re proud to use."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-white">
            MunicipalLabs’ mission
          </h3>
          <p className="text-sm text-muted-foreground">
            Bring modern AI workflows to every municipality, starting with the
            inbox. We believe responsive government is the foundation of a
            healthy community, and that frontline staff deserve tools built for
            their reality.
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.3rem] text-muted-foreground">
              Founder note
            </p>
            <p className="mt-3 text-sm text-muted-foreground/90">
              “After helping a major city recover from a records backlog, we
              realized the gap wasn’t talent—it was tooling. MunicipalLabs
              exists so public servants can lead with data, empathy, and speed.”
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.3rem] text-white/70">
              Maya Chen · CEO, MunicipalLabs
            </p>
          </div>
        </motion.div>
        <div className="grid gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h4 className="text-lg font-semibold text-white">
                {value.title}
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

