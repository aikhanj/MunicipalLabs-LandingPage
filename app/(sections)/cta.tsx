"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { requestAccessAction, type ActionState } from "@/app/(actions)/request-access";
import { SectionHeading } from "@/app/(components)/section-heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { copy } from "@/content/copy";
import { useAudio } from "@/app/(components)/audio-provider";

const initialActionState: ActionState = {
  status: "idle",
  message: ""
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="h-12 w-full rounded-full bg-white text-background font-semibold shadow-[0_24px_40px_rgba(93,214,255,0.35)] transition hover:bg-slate-100/90"
      disabled={pending}
    >
      {pending ? "Submitting…" : copy.cta.button}
    </Button>
  );
}

export function CTA() {
  const [state, formAction] = useActionState(
    requestAccessAction,
    initialActionState
  );
  const { play } = useAudio();

  useEffect(() => {
    if (state.status === "success") {
      play("success");
      const timer = window.setTimeout(() => {
        const form = document.getElementById("cta-form") as HTMLFormElement;
        form?.reset();
      }, 1800);
      return () => window.clearTimeout(timer);
    }
  }, [play, state.status]);

  return (
    <section
      id="contact"
      className="relative mx-auto mt-28 w-[min(1100px,92vw)] overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-center"
      aria-labelledby="cta-heading"
    >
      <motion.div
        aria-hidden="true"
        className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.2 }}
      />
      <div className="relative">
        <SectionHeading
          title={copy.cta.heading}
          description={copy.cta.sub}
          align="center"
        />
        <p className="mt-3 text-sm text-muted-foreground">
          We work with public-sector teams only. There is a short intake first, then we’ll follow up with your staff before scheduling anything.
        </p>

        <form
          id="cta-form"
          action={formAction}
          className="mx-auto mt-10 grid max-w-2xl gap-4 text-left"
        >
          <div className="grid gap-2">
            <Label htmlFor="email">Work email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@city.gov"
              required
              autoComplete="email"
            />
          </div>
          <SubmitButton />
        </form>

        <AnimatePresence mode="wait">
          {state.status !== "idle" ? (
            <motion.p
              key={state.status}
              className={`mt-4 text-sm ${
                state.status === "error"
                  ? "text-red-300"
                  : "text-green-300"
              }`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
            >
              {state.message}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}

