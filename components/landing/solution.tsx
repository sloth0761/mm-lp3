"use client";

import { motion } from "motion/react";

const solutions = [
  { n: "1", t: "What people actually associate you with" },
  { n: "2", t: "How your audience sees your expertise" },
  { n: "3", t: "Which narratives you're reinforcing" },
  { n: "4", t: "How to build authority intentionally" },
];

export function Solution() {
  return (
    <section id="how-it-works" className="relative px-6 py-32">
      <div className="silver-sphere size-[500px] absolute bottom-[-100px] left-[-150px] opacity-40" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-10 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
            The Solution
          </p>
          <h2 className="text-gradient mb-20 max-w-4xl text-5xl font-semibold leading-[1] md:text-6xl lg:text-7xl">
            Narron helps founders understand perception.
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {solutions.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel flex min-h-[240px] flex-col justify-between rounded-3xl p-10 transition duration-500 hover:bg-white/80"
            >
              <span className="text-silver-gradient text-6xl font-light">{s.n}</span>
              <span className="text-2xl font-medium leading-snug tracking-tight">{s.t}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}