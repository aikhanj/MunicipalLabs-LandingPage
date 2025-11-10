'use client';

import { motion } from "framer-motion";
import { SectionHeading } from "@/app/(components)/section-heading";

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "Are you looking for a cofounder?",
    a: "No."
  },
  {
    q: "Who writes code and handles technical work?",
    a: "Aikhan writes the code and manages all technical workflows."
  },
  {
    q: "Have the founders met in person? How did you meet?",
    a: "Yes. We met at the start of the semester at Princeton after Mason sent an email to find startup collaborators. We started prototyping together and have been working in person since."
  },
  {
    q: "How far along are you? Are people using it?",
    a: "Pre-launch with a working prototype and early customer validation. No active users yet."
  },
  {
    q: "When will a version be ready?",
    a: "Pilot-ready in about a week for our first municipal office."
  },
  {
    q: "Do you have revenue?",
    a: "No."
  },
  {
    q: "Where are you based?",
    a: "We’re in Princeton now; after YC we plan to base the company in San Francisco for proximity to talent and early government adopters."
  },
  {
    q: "Is there a public demo or product link?",
    a: "We can share a secure pilot environment. We’re cautious about exposing inbox scopes publicly; request access and we’ll coordinate a safe demo."
  }
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="mx-auto mt-28 w-[min(1100px,92vw)]"
      aria-labelledby="faq-heading"
    >
      <SectionHeading
        eyebrow="FAQ"
        title="Answers for teams considering a pilot."
        description="If you have more questions, reach out and we’ll get back within a day."
        align="center"
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {faqs.map((item, index) => (
          <motion.div
            key={item.q}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
          >
            <h3 className="text-base font-semibold text-white">{item.q}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.a}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


