"use client";

import { useState, useEffect } from "react";
import { SystemHeader } from "./components/SystemHeader";
import { NarrativeHero } from "./components/NarrativeHero";
import { NarrativeContent } from "./components/NarrativeContent";
import { CommandPalette } from "./components/CommandPalette";
import { EvidenceToggle } from "./components/EvidenceToggle";
import { AmbientBackground } from "./components/AmbientBackground";
import { ModeIndicator } from "./components/ModeIndicator";
import { IntroSequence } from "./components/IntroSequence";
import { toast } from "sonner";
import { Toaster } from "../components/ui/sonner";

export default function App() {
  const [selectedIntent, setSelectedIntent] = useState<string | null>(null);
  const [evidenceOnly, setEvidenceOnly] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    let buffer = "";
    const handleKeyPress = (e: KeyboardEvent) => {
      // Check for cmd/ctrl + k to open command palette
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandPaletteOpen(true);
        buffer = "";
        return;
      }

      // Build up buffer for /ask
      if (e.key === "/" || buffer.length > 0) {
        if (e.key === "Backspace") {
          buffer = buffer.slice(0, -1);
        } else if (e.key.length === 1) {
          buffer += e.key;
        }

        if (buffer === "/ask") {
          e.preventDefault();
          setCommandPaletteOpen(true);
          buffer = "";
        }

        // Reset buffer if it doesn't match
        if (!"/ask".startsWith(buffer) && buffer.length > 0) {
          buffer = "";
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const handleCommand = (command: string) => {
    toast.success("Command received", {
      description: `Processing: "${command}"`,
      duration: 2000,
    });

    console.log("Command:", command);
  };

  const handleIntentSelect = (intent: string) => {
    setSelectedIntent(intent);
    setEvidenceOnly(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {showIntro && <IntroSequence onComplete={() => setShowIntro(false)} />}

      <AmbientBackground />
      <SystemHeader />

      <main className="pt-20">
        <NarrativeHero
          onIntentSelect={handleIntentSelect}
          selectedIntent={selectedIntent}
        />

        <ModeIndicator intent={selectedIntent} />

        <NarrativeContent intent={selectedIntent} evidenceOnly={evidenceOnly} />
      </main>

      {selectedIntent && (
        <EvidenceToggle
          evidenceOnly={evidenceOnly}
          onToggle={() => setEvidenceOnly(!evidenceOnly)}
        />
      )}

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onCommand={handleCommand}
      />

      <Toaster />

      {/* System Status Footer */}
      <footer className="hidden md:block fixed bottom-8 left-8 z-40">
        <div className="text-xs text-muted-foreground space-y-1">
          {selectedIntent && (
            <p>
              Active mode: <span className="text-accent">{selectedIntent}</span>
            </p>
          )}
          <p className="opacity-50">
            Type <span className="text-foreground">/ask</span> or press{" "}
            <kbd className="px-1.5 py-0.5 bg-background border border-border rounded text-[10px]">
              ⌘K
            </kbd>
          </p>
        </div>
      </footer>
    </div>
  );
}
