'use client';

import { motion } from "framer-motion";
import { GlassCard } from "@/app/(components)/glass-card";
import { copy } from "@/content/copy";
import { Reveal } from "@/app/(components)/reveal";

export function Problem() {
  return (
    <section
      id="product"
      className="relative mx-auto mt-32 w-[min(1100px,92vw)]"
      aria-labelledby="problem-heading"
    >
      {/* Section Label */}
      <p className="text-center text-xs uppercase tracking-widest text-slate-500">
        For municipal teams
      </p>

      {/* Headline Block */}
      <div className="mt-4 text-center">
        <h2
          id="problem-heading"
          className="text-4xl font-bold leading-tight text-white md:text-5xl"
        >
          {copy.problem.heading}
        </h2>
        <p className="mt-4 text-xl font-semibold text-slate-400">
          {copy.problem.subheadline}
        </p>
        <p className="mt-2 text-base text-slate-400">
          {copy.problem.description}
        </p>
      </div>

      {/* Left-Right Layout */}
      <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:gap-8">
        {/* Left Side: Problem Cards (40%) */}
        <div className="flex flex-col gap-6 lg:w-[40%]">
          {copy.problem.bullets.map((bullet, index) => {
            // Group bullets in pairs (title + description)
            if (index % 2 === 0) {
              const title = bullet;
              const description = copy.problem.bullets[index + 1] || "";
              const cardIndex = Math.floor(index / 2);
              
              return (
                <Reveal key={title} delay={cardIndex * 0.1}>
                  <GlassCard className="group p-6 hover:scale-[1.02] md:p-8">
                    <motion.div
                      className="flex items-start gap-4"
                      initial={{ scale: 0.95, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ delay: 0.1 * cardIndex, duration: 0.5 }}
                    >
                      <span className="mt-1 grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-red-500/20 text-base text-red-300 shadow-lg shadow-red-500/20">
                        !
                      </span>
                      <div>
                        <p className="text-base font-semibold text-slate-300">
                          {title}
                        </p>
                        <p className="mt-1 text-sm text-slate-300/80">
                          {description}
                        </p>
                      </div>
                    </motion.div>
                  </GlassCard>
                </Reveal>
              );
            }
            return null;
          })}
        </div>

        {/* Vertical Separator */}
        <div className="hidden lg:block lg:w-px">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </div>

        {/* Right Side: Chaos Panel (60%) */}
        <div className="lg:w-[60%]">
          <Reveal delay={0.3}>
            <GlassCard className="group h-full overflow-hidden p-0 transition-all duration-300 hover:scale-[1.01]">
              <div className="relative h-full bg-gradient-to-br from-red-500/15 via-background to-transparent p-8">
                {/* Glow Effect */}
                <div className="absolute inset-0 -z-10 bg-red-500/10 blur-3xl" />
                
                <div className="flex h-full flex-col">
                  <p className="text-xs uppercase tracking-widest text-red-200/70">
                    {copy.problem.chaos.label}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight text-white md:text-3xl">
                    {copy.problem.chaos.title}
                  </h3>
                  
                  {/* Stats Display */}
                  <div className="mt-8 flex-1">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-3xl bg-red-500/10 blur-3xl" />
                      <div className="relative grid gap-4 rounded-3xl border border-white/10 bg-slate-900/60 p-8 text-base">
                        {copy.problem.chaos.stats.map((stat) => (
                          <p key={stat.label} className="flex items-center justify-between">
                            <span className="text-slate-300">{stat.label}</span>
                            <span className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                              stat.color === 'red' 
                                ? 'bg-red-500/20 text-red-100' 
                                : stat.color === 'yellow'
                                ? 'bg-yellow-500/20 text-yellow-100'
                                : 'bg-orange-500/20 text-orange-100'
                            }`}>
                              {stat.value}
                            </span>
                          </p>
                        ))}
                        <p className="mt-2 rounded-2xl border border-dashed border-white/10 bg-white/5 px-4 py-3 text-center text-xs uppercase tracking-widest text-red-100">
                          {copy.problem.chaos.badge}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

