'use client';

import { motion } from "framer-motion";
import { SectionHeading } from "@/app/(components)/section-heading";

const principles = [
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

const founders = [
  {
    name: "Mason Menin",
    role: "CEO",
    blurb:
      "Grew up around city government; Mom is an NYC council member. Brings deep domain insight and relationships with local officials.",
  },
  {
    name: "Aikhan Jumashukurov",
    role: "CTO",
    blurb:
      "AI engineer recognized by Kyrgyz government for NLP education work. Builds the product end‑to‑end; writes the code and owns technical workflows.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/aikhanj" },
      { label: "Website", href: "https://aikhanjumashukurov.com/" },
      { label: "GitHub", href: "https://github.com/Lutashi/" },
      { label: "Twitter", href: "https://x.com/jumashukurov" }
    ]
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
        title="Meet the founders of MunicipalLabs."
        description="We're building practical AI for government teams. Our approach combines deep government domain expertise with advanced technical capabilities."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-white">Our story</h3>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              Mason grew up watching his mother—a New York City Council Member—navigate the daily
              reality of constituent services: staff drowning in unstructured emails, requests falling
              through the cracks, and no clear way to understand what residents actually needed.
            </p>
            <p>
              When we met at Princeton, we realized this wasn't just a problem for one office—it was
              systemic across local government. Aikhan brought technical expertise in NLP and AI systems,
              recognized by the Kyrgyz government for his work in education technology. Mason brought
              deep relationships with city officials and firsthand understanding of how council offices
              actually work.
            </p>
            <p>
              We started by shadowing constituent services teams in multiple cities. The same patterns
              emerged everywhere: fragmented tools, manual triage, and talented staff spending their
              time on repetitive tasks instead of solving real problems for residents.
            </p>
            <p>
              We built MunicipalLabs to fix this. Not with another black-box AI tool, but with
              infrastructure that respects how government actually operates—transparent, auditable,
              and built for public accountability.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {founders.map((f) => (
              <div
                key={f.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h4 className="text-base font-semibold text-white">
                  {f.name} · {f.role}
                </h4>
                <p className="mt-2 text-sm text-muted-foreground">{f.blurb}</p>
                {f.links ? (
                  <div className="mt-3 flex flex-wrap gap-3 text-xs uppercase tracking-[0.25rem] text-muted-foreground">
                    {f.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 transition hover:text-white"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.3rem] text-muted-foreground">
              Who builds the product?
            </p>
            <p className="mt-3 text-sm text-muted-foreground/90">
              Aikhan writes the code and handles all technical workflows for the product.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.3rem] text-muted-foreground">
              Where we’re based
            </p>
            <p className="mt-3 text-sm text-muted-foreground/90">
              We currently live in Princeton (as students). After YC, we’d like to base the
              company in San Francisco for proximity to forward‑thinking governments and AI talent.
            </p>
          </div>
        </motion.div>
        <div className="grid gap-6">
          {principles.map((value, index) => (
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

