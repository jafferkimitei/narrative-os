"use client";

import { motion } from "motion/react";
import { Terminal } from "lucide-react";

export function SystemHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-4 md:py-6 bg-background/80 backdrop-blur-sm border-b border-border"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          <Terminal className="w-4 h-4 md:w-5 md:h-5 text-accent" />
          <span className="tracking-tight text-sm md:text-base">
            NarrativeOS
          </span>
        </div>
        <div className="text-[10px] md:text-xs text-muted-foreground tracking-wide">
          Resume, but Adaptive
        </div>
      </div>
    </motion.header>
  );
}
