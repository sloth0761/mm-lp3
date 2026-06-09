"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import posthog from "posthog-js";

const diagnosis = [
  "I don't know what people remember me for",
  "My audience engages but rarely mentions my expertise",
  "I post consistently but don't know what perception I'm creating",
  "Different people describe my brand differently",
  "I'm not intentionally shaping my reputation",
];

export function Diagnosis() {
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);

      if (!prev.has(i)) {
        posthog.capture("diagnosis_item_selected", {
          item: diagnosis[i],
          total: next.size,
          source: "lp3-perception",
        });
        if (next.size === 3) posthog.capture("diagnosis_revealed", { source: "lp3-perception" });
      }

      return next;
    });
  };

  const revealed = selected.size >= 3;

  return (
    <section className="relative px-6 py-32">
      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-8 text-center text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
            Self-Diagnosis
          </p>
          <h2 className="text-gradient mb-14 text-center text-4xl font-semibold leading-[1.05] md:text-5xl">
            Does any of this feel familiar?
          </h2>
        </motion.div>

        <div className="space-y-3">
          {diagnosis.map((q, i) => {
            const isSel = selected.has(i);
            return (
              <motion.button
                key={i}
                onClick={() => toggle(i)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full flex items-center gap-5 rounded-2xl px-7 py-5 text-left transition-all duration-500 ${
                  isSel
                    ? "border border-foreground bg-foreground text-background shadow-[0_20px_60px_-20px_rgba(0,0,0,0.3)]"
                    : "glass-panel hover:bg-white/80"
                }`}
              >
                <span className={`flex size-5 flex-shrink-0 items-center justify-center rounded-md transition ${isSel ? "bg-background" : "border border-muted-foreground/40"}`}>
                  {isSel && <span className="text-xs text-foreground">✓</span>}
                </span>
                <span className="text-[15px] tracking-tight md:text-lg">{q}</span>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel mt-12 rounded-3xl px-10 py-12 text-center"
            >
              <p className="text-gradient text-2xl font-medium leading-snug md:text-3xl">
                You may not have an attention problem.
              </p>
              <p className="text-silver-gradient mt-2 text-2xl font-light italic leading-snug md:text-3xl">
                You may have a perception problem.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}