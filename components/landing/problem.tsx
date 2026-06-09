"use client";

import { motion } from "motion/react";

const problems = [
  { n: "01", t: "They become known for opinions" },
  { n: "02", t: "They become known for consistency" },
  { n: "03", t: "They never become known for expertise" },
];

export function Problem() {
  return (
    <section id="thesis" className="relative px-6 py-32">
      <div className="silver-sphere size-[420px] absolute top-[20%] right-[-150px] opacity-40" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-20 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-10 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
            The Problem
          </p>
          <h2 className="text-gradient text-5xl font-semibold leading-[1] md:text-6xl lg:text-7xl">
            Most founders never choose what they&rsquo;re known for.
          </h2>
          <p className="mt-10 max-w-md text-[17px] leading-relaxed text-muted-foreground">
            The market slowly creates a story about them.
            <br />
            Most discover that story years later.
          </p>
        </motion.div>

        <div className="space-y-4">
          {problems.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel flex items-center gap-10 rounded-2xl px-8 py-7 transition-transform duration-500 hover:translate-x-1"
            >
              <span className="tabular-nums text-[13px] tracking-widest text-muted-foreground">
                {p.n}
              </span>
              <span className="text-lg font-medium tracking-tight md:text-xl">{p.t}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}