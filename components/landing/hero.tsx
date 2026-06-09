"use client";

import { motion } from "motion/react";
import posthog from "posthog-js";
import { useEffect } from "react";

export function AnalyticsEvents() {
  useEffect(() => {
    posthog.capture("landing_view", { source: "lp3-perception" });
  }, []);
  return null;
}

export function Hero() {
  return (
    <section className="relative px-6 pb-32 pt-44">
      <AnalyticsEvents />

      <div className="silver-sphere size-[520px] absolute top-[-120px] left-[-120px] animate-float-slow" />
      <div
        className="silver-sphere size-[480px] absolute top-[60px] right-[-160px] animate-float-slow"
        style={{ animationDelay: "-9s" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative mx-auto max-w-6xl text-center"
      >
        <p className="mb-12 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
          Founder Positioning Intelligence
        </p>

        <h1 className="text-gradient text-[clamp(2.75rem,8.5vw,8rem)] font-semibold leading-[0.92]">
          The Internet Is Already
          <br />
          <span style={{ color: "#8a8e94" }} className="font-light italic">Learning</span>
          <br />
          Who You Are.
        </h1>

        <div className="mx-auto mt-12 max-w-2xl space-y-1.5 text-[17px] leading-relaxed text-muted-foreground md:text-xl">
          <p>Every post teaches.</p>
          <p>Every opinion positions.</p>
          <p>Every interaction shapes perception.</p>
          <p className="pt-5 text-foreground/85">
            The question isn&rsquo;t whether you&rsquo;re building a personal brand.
          </p>
          <p className="text-foreground/85">It&rsquo;s whether it&rsquo;s helping your business.</p>
        </div>

        <div className="mt-14 flex items-center justify-center gap-8">
          <a href="#access" className="btn-primary">Get Early Access</a>
          <a
            href="#thesis"
            className="text-[15px] font-medium text-foreground transition hover:opacity-60"
          >
            Read the thesis →
          </a>
        </div>
      </motion.div>
    </section>
  );
}