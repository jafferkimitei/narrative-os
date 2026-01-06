"use client";

import { motion } from "motion/react";
import { Eye, EyeOff } from "lucide-react";

interface EvidenceToggleProps {
  evidenceOnly: boolean;
  onToggle: () => void;
}

export function EvidenceToggle({
  evidenceOnly,
  onToggle,
}: EvidenceToggleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 1.2 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40"
    >
      <motion.button
        onClick={onToggle}
        className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 bg-card border border-border hover:border-accent rounded-sm shadow-lg transition-colors cursor-pointer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {evidenceOnly ? (
          <Eye className="w-4 h-4 text-accent" />
        ) : (
          <EyeOff className="w-4 h-4 text-muted-foreground" />
        )}
        <span className="text-sm">
          {evidenceOnly ? "Show narrative" : "Evidence only"}
        </span>
      </motion.button>

      {evidenceOnly && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="hidden md:block absolute bottom-full right-0 mb-3 px-4 py-2 bg-card border border-accent rounded-sm shadow-lg max-w-xs"
        >
          <p className="text-xs text-muted-foreground">
            Viewing evidence-only mode. All narrative removed.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
