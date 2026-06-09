"use client";

import { motion } from "motion/react";
import { WaitlistForm } from "@/components/ui/waitlist-form";

export function CTASection() {
  return (
    <section id="access" className="relative px-6 py-40">
      <div className="silver-sphere size-[700px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-gradient text-5xl font-semibold leading-[0.98] md:text-7xl lg:text-8xl"
        >
          Get Your Founder
          <br />
          <span style={{ color: "#8a8e94" }} className="font-light italic">Positioning Audit</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-10 max-w-xl text-[17px] leading-relaxed text-muted-foreground md:text-lg"
        >
          Discover what the market is learning about you — and whether that
          perception is helping your business grow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14"
        >
          <WaitlistForm source="lp3-perception" />
        </motion.div>
      </div>
    </section>
  );
}