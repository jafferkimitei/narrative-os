"use client";

import { motion, AnimatePresence } from "motion/react";
import { narrative, ContentBlock } from "../data/narrative";
import { ArrowUpRight } from "lucide-react";

interface NarrativeContentProps {
  intent: string | null;
  evidenceOnly: boolean;
}

function ContentBlockItem({
  block,
  intent,
  evidenceOnly,
  index,
}: {
  block: ContentBlock;
  intent: string;
  evidenceOnly: boolean;
  index: number;
}) {
  const weight = block.weight[intent as keyof typeof block.weight];
  const content = block.content[intent as keyof typeof block.content];

  // Calculate opacity and scale based on weight
  const opacity = evidenceOnly ? 1 : Math.max(0.3, weight / 10);
  const scale = evidenceOnly ? 1 : 0.95 + (weight / 10) * 0.05;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity,
        scale,
        y: 0,
      }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="mb-12 md:mb-16"
    >
      <div className="mb-4 md:mb-6">
        <motion.h3
          layout
          className="text-[1.25rem] md:text-[1.5rem] tracking-tight mb-1"
        >
          {block.title}
        </motion.h3>
        {block.subtitle && (
          <motion.p layout className="text-muted-foreground">
            {block.subtitle}
          </motion.p>
        )}
      </div>

      <AnimatePresence mode="wait">
        {!evidenceOnly && content && (
          <motion.p
            key={`content-${intent}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-foreground/90 leading-relaxed mb-8 max-w-3xl"
          >
            {content}
          </motion.p>
        )}
      </AnimatePresence>

      {block.evidence && block.evidence.length > 0 && (
        <motion.div layout className="flex flex-wrap gap-4">
          {block.evidence.map((evidence, i) => (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: evidenceOnly ? i * 0.05 : 0.4 + i * 0.05,
              }}
              className="group"
            >
              {evidence.url ? (
                <a
                  href={evidence.url}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border hover:border-accent transition-colors rounded-sm"
                >
                  <span className="text-sm text-muted-foreground">
                    {evidence.label}
                  </span>
                  <span className="text-sm">{evidence.value}</span>
                  <ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover:text-accent transition-colors" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-sm">
                  <span className="text-sm text-muted-foreground">
                    {evidence.label}
                  </span>
                  <span className="text-sm">{evidence.value}</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      )}

      {block.metadata && evidenceOnly && (
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mt-4 flex flex-wrap gap-2"
        >
          {block.metadata.timeline && (
            <span className="text-xs text-muted-foreground px-3 py-1 bg-background border border-border rounded-sm">
              {block.metadata.timeline}
            </span>
          )}
          {block.metadata.stack?.map((tech, i) => (
            <span
              key={i}
              className="text-xs text-muted-foreground px-3 py-1 bg-background border border-border rounded-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

export function NarrativeContent({
  intent,
  evidenceOnly,
}: NarrativeContentProps) {
  if (!intent) {
    return (
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-muted-foreground"
        >
          Select an intent above to begin.
        </motion.p>
      </div>
    );
  }

  // Sort blocks by weight for the current intent
  const sortedBlocks = [...narrative].sort((a, b) => {
    const weightA = a.weight[intent as keyof typeof a.weight];
    const weightB = b.weight[intent as keyof typeof b.weight];
    return weightB - weightA;
  });

  return (
    <motion.div
      layout
      className="max-w-5xl mx-auto px-6 md:px-8 py-8 md:py-12 pb-24 md:pb-32"
    >
      <AnimatePresence mode="wait">
        {sortedBlocks.map((block, index) => (
          <ContentBlockItem
            key={block.id}
            block={block}
            intent={intent}
            evidenceOnly={evidenceOnly}
            index={index}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
