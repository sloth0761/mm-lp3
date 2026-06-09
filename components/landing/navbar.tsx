"use client";

import Link from "next/link";
import { motion } from "motion/react";

const links = [
  { l: "Thesis", h: "#thesis" },
  { l: "How it works", h: "#how-it-works" },
  { l: "Access", h: "#access" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-5 z-50 px-4"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="glass-panel flex items-center gap-2.5 rounded-full py-2.5 pl-4 pr-5">
          <span className="size-1.5 rounded-full bg-foreground" />
          <span className="text-[15px] font-medium tracking-tight">Narron</span>
        </div>

        <nav className="hidden glass-panel rounded-full px-2 py-2 md:flex">
          {links.map((i) => (
            <Link
              key={i.l}
              href={i.h}
              className="px-5 py-1.5 text-[14px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {i.l}
            </Link>
          ))}
        </nav>

        <Link
          href="#access"
          className="glass-panel rounded-full px-5 py-2.5 text-[14px] font-medium transition-colors hover:bg-white/80"
        >
          Get Early Access
        </Link>
      </div>
    </motion.header>
  );
}