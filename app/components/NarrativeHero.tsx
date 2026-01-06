"use client";

import { motion } from "motion/react";

interface NarrativeHeroProps {
  onIntentSelect: (intent: string) => void;
  selectedIntent: string | null;
}

export function NarrativeHero({
  onIntentSelect,
  selectedIntent,
}: NarrativeHeroProps) {
  const intents = [
    { id: "recruiter", label: "Recruiter" },
    { id: "engineer", label: "Engineer" },
    { id: "founder", label: "Founder" },
    { id: "ai", label: "AI Reviewer" },
  ];

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8 pt-24 md:pt-32 pb-16 md:pb-24">
        <motion.div
          layout
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-[1.75rem] md:text-[2.5rem] leading-[1.2] tracking-tight mb-8 md:mb-12">
            This resume changes depending on who&apos;s reading it.
          </p>

          <motion.div
            className="flex flex-wrap gap-4 md:gap-8"
            layout
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {intents.map((intent, index) => (
              <motion.button
                key={intent.id}
                onClick={() => onIntentSelect(intent.id)}
                className="relative text-lg tracking-tight text-muted-foreground hover:text-foreground transition-colors cursor-pointer border-none bg-transparent p-0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.8 + index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {intent.label}
                {selectedIntent === intent.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent"
                    layoutId="intent-indicator"
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
