"use client";

import { motion } from "motion/react";

const metrics = [
  { label: "Category Clarity", value: "LOW", level: 25 },
  { label: "Authority Signals", value: "MODERATE", level: 55 },
  { label: "Narrative Consistency", value: "WEAK", level: 30 },
  { label: "Market Recall", value: "UNCLEAR", level: 40 },
];

export function ScoreCard() {
  return (
    <section className="relative px-6 py-32">
      <div className="silver-sphere size-[600px] absolute left-1/2 top-[10%] -translate-x-1/2 opacity-30" />

      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel rounded-[2rem] p-10 md:p-14"
        >
          <div className="mb-8 flex items-center justify-between">
            <p className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
              Market Perception Score
            </p>
            <span className="text-[11px] tracking-widest text-muted-foreground">v.01</span>
          </div>

          <div className="mb-12 flex items-baseline gap-3">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-gradient tabular-nums text-7xl font-semibold tracking-tighter md:text-9xl"
            >
              61
            </motion.span>
            <span className="text-2xl text-muted-foreground">/ 100</span>
          </div>

          <div className="space-y-6">
            {metrics.map((m, i) => (
              <div key={m.label}>
                <div className="mb-2.5 flex justify-between text-[13px]">
                  <span className="text-foreground/80">{m.label}</span>
                  <span className="tracking-[0.2em] text-muted-foreground">{m.value}</span>
                </div>
                <div className="h-[3px] overflow-hidden rounded-full bg-[var(--silver-soft)]">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-foreground to-[#4A4A4A]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${m.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <p className="text-gradient text-xl font-medium leading-snug md:text-2xl">
              Your audience remembers your opinions.
            </p>
            <p className="text-silver-gradient mt-1 text-xl font-light italic md:text-2xl">
              Not your expertise.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}