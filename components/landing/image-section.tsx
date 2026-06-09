"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function ImageSection() {
  return (
    <section className="px-6 pb-32">
      <div className="glass-panel relative mx-auto aspect-[16/10] max-w-7xl overflow-hidden rounded-[2rem] p-0">
        <Image
          src="/crowd.jpg"
          alt="A lone figure emerges from a blurred crowd"
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
        <div className="absolute bottom-10 left-10 max-w-3xl md:bottom-20 md:left-20">
          <motion.h2
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl font-semibold leading-[1.02] tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            The market is learning.
            <br />
            <span className="font-light italic text-white/60">
              Whether you mean
              <br />
              it to or not.
            </span>
          </motion.h2>
        </div>
      </div>
    </section>
  );
}