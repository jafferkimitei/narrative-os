"use client";

import { motion } from "motion/react";

interface ModeIndicatorProps {
  intent: string | null;
}

const modeDescriptions = {
  recruiter: "Optimized for quick comprehension and outcome clarity",
  engineer: "Deep technical context and architectural decisions",
  founder: "Business impact, velocity, and strategic thinking",
  ai: "Structured data for machine parsing and verification",
};

export function ModeIndicator({ intent }: ModeIndicatorProps) {
  if (!intent) return null;

  const description = modeDescriptions[intent as keyof typeof modeDescriptions];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="max-w-5xl mx-auto px-6 md:px-8 pb-6 md:pb-8"
    >
      <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/5 border border-accent/20 rounded-sm">
        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}
