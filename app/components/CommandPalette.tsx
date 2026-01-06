"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Sparkles } from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onCommand: (command: string) => void;
}

const suggestions = [
  "Show leadership moments",
  "Highlight UX decisions",
  "Explain tradeoffs",
  "Focus on performance work",
  "Display architecture decisions",
  "Show business impact",
];

export function CommandPalette({
  isOpen,
  onClose,
  onCommand,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onCommand(query);
      setQuery("");
      onClose();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    onCommand(suggestion);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-20 md:top-32 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4"
          >
            <div className="bg-card border border-border rounded-sm shadow-2xl overflow-hidden">
              <form onSubmit={handleSubmit}>
                <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
                  <Search className="w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ask about the work..."
                    className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
                    autoFocus
                  />
                  <Sparkles className="w-4 h-4 text-accent" />
                </div>
              </form>

              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-3 px-2">
                  Suggestions
                </p>
                <div className="space-y-1">
                  {suggestions.map((suggestion, i) => (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: i * 0.03 }}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full text-left px-4 py-3 rounded-sm hover:bg-accent/10 transition-colors text-sm text-foreground/80 hover:text-foreground border-none cursor-pointer"
                    >
                      {suggestion}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="px-6 py-3 bg-muted/5 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Press{" "}
                  <kbd className="px-2 py-0.5 bg-background border border-border rounded text-xs">
                    Esc
                  </kbd>{" "}
                  to close
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
