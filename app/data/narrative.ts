export interface ContentBlock {
  id: string;
  type: "experience" | "project" | "insight" | "evidence";
  title: string;
  subtitle?: string;
  content: {
    recruiter?: string;
    engineer?: string;
    founder?: string;
    ai?: string;
  };
  weight: {
    recruiter: number;
    engineer: number;
    founder: number;
    ai: number;
  };
  evidence?: {
    type: "metric" | "link" | "demo" | "artifact";
    label: string;
    value: string;
    url?: string;
  }[];
  metadata?: {
    timeline?: string;
    role?: string;
    impact?: string;
    stack?: string[];
  };
}

export const narrative: ContentBlock[] = [
  {
    id: "lead-product",
    type: "experience",
    title: "Lead Product Engineer",
    subtitle: "Adaptive Systems Co.",
    content: {
      recruiter:
        "Led cross-functional team to rebuild core platform, reducing load time by 67% and increasing conversion by 34%.",
      engineer:
        "Architected event-driven microservices migration from Rails monolith. Implemented Redis caching layer and optimized Postgres queries, achieving p99 latency under 200ms at 10k req/s.",
      founder:
        "Drove platform rebuild that unlocked $2.4M in annual revenue. Shipped in 4 months with 3 engineers, no downtime migration.",
      ai: "Technical leadership role. Rebuilt platform architecture. Performance: 67% load time reduction, 34% conversion increase. Stack: React, Node.js, Redis, PostgreSQL.",
    },
    weight: { recruiter: 10, engineer: 9, founder: 10, ai: 10 },
    evidence: [
      { type: "metric", label: "Performance gain", value: "67% faster" },
      { type: "metric", label: "Conversion lift", value: "+34%" },
      { type: "metric", label: "Revenue impact", value: "$2.4M ARR" },
      {
        type: "artifact",
        label: "Architecture doc",
        value: "View migration plan",
        url: "#",
      },
    ],
    metadata: {
      timeline: "2023 - 2025",
      role: "Lead Engineer",
      impact: "$2.4M ARR unlock",
      stack: ["React", "Node.js", "Redis", "PostgreSQL", "AWS"],
    },
  },
  {
    id: "design-system",
    type: "project",
    title: "Context-Aware Design System",
    subtitle: "Internal tooling",
    content: {
      recruiter:
        "Built comprehensive design system adopted across 6 product teams, reducing design-to-dev time by 40%.",
      engineer:
        "Created adaptive component library with automatic theme switching, accessibility-first patterns, and full TypeScript coverage. Built custom Babel plugin for automatic prop documentation.",
      founder:
        "Shipped design system that reduced dev cycle time by 40% and enabled 3x faster feature velocity across engineering.",
      ai: "Design system project. Adoption: 6 teams. Efficiency: 40% faster design-to-dev. Tech: React, TypeScript, Storybook, custom Babel tooling.",
    },
    weight: { recruiter: 7, engineer: 10, founder: 8, ai: 8 },
    evidence: [
      { type: "metric", label: "Team adoption", value: "6 teams" },
      { type: "metric", label: "Time saved", value: "40%" },
      {
        type: "demo",
        label: "Component library",
        value: "Explore Storybook",
        url: "#",
      },
      { type: "link", label: "Source code", value: "GitHub", url: "#" },
    ],
    metadata: {
      timeline: "2024",
      impact: "40% efficiency gain",
      stack: ["React", "TypeScript", "Tailwind", "Storybook", "Babel"],
    },
  },
  {
    id: "performance-optimization",
    type: "insight",
    title: "The Performance-UX Tradeoff",
    subtitle: "Technical decision case study",
    content: {
      recruiter:
        "Balanced real-time features with performance constraints, delivering rich experience within strict budget limits.",
      engineer:
        "Faced choice between WebSocket real-time updates and optimistic UI. Built hybrid: local-first state with background sync, achieving <50ms perceived latency while staying under 100kb JS budget. Required custom operational transform resolver for conflict handling.",
      founder:
        "Chose local-first architecture over server-round-trips. Users felt instant response while we maintained data consistency. Critical for user retention.",
      ai: "Technical decision: local-first architecture with background sync. Outcome: <50ms perceived latency, <100kb JS bundle. Implementation: custom operational transform for conflict resolution.",
    },
    weight: { recruiter: 5, engineer: 10, founder: 9, ai: 7 },
    evidence: [
      { type: "metric", label: "Perceived latency", value: "<50ms" },
      { type: "metric", label: "Bundle size", value: "94kb" },
      {
        type: "artifact",
        label: "Technical writeup",
        value: "Read full analysis",
        url: "#",
      },
    ],
    metadata: {
      timeline: "2024",
      stack: ["IndexedDB", "WebSocket", "CRDT"],
    },
  },
  {
    id: "ai-integration",
    type: "project",
    title: "Intelligent Command Interface",
    subtitle: "Natural language product control",
    content: {
      recruiter:
        "Implemented AI-powered command system that improved user task completion by 56% and became most-used feature.",
      engineer:
        "Built semantic search over product actions using embeddings. Implemented intent classification with GPT-4 and custom fine-tuned model for domain commands. Deployed edge functions for <100ms response time.",
      founder:
        "Shipped AI feature that drove 56% improvement in task completion. Became viral product differentiator, featured in customer testimonials.",
      ai: "AI integration project. Natural language command interface. Performance: <100ms response, 56% task completion improvement. Tech: GPT-4, embeddings, edge functions, custom fine-tuning.",
    },
    weight: { recruiter: 9, engineer: 8, founder: 10, ai: 10 },
    evidence: [
      { type: "metric", label: "Task completion", value: "+56%" },
      { type: "metric", label: "Response time", value: "<100ms" },
      { type: "demo", label: "Live demo", value: "Try it", url: "#" },
      { type: "link", label: "Case study", value: "Read more", url: "#" },
    ],
    metadata: {
      timeline: "2024 - 2025",
      impact: "Viral product feature",
      stack: ["GPT-4", "Embeddings", "Edge Functions", "Vector DB"],
    },
  },
  {
    id: "open-source",
    type: "project",
    title: "React Adaptive Grid",
    subtitle: "Open source contribution",
    content: {
      recruiter:
        "Maintained popular open-source library with 12k+ GitHub stars and 500k weekly npm downloads.",
      engineer:
        "Built performant grid system with virtual scrolling, dynamic cell sizing, and <16ms render budget for 60fps. Optimized reconciliation algorithm reduced re-renders by 85%. Full test coverage with Playwright.",
      founder:
        "Created widely-adopted OSS tool that solved real problem. Built community of 50+ contributors. Demonstrates technical leadership and judgment.",
      ai: "Open source project. Metrics: 12k GitHub stars, 500k weekly downloads. Tech: React, virtual scrolling, performance optimization, 85% render reduction.",
    },
    weight: { recruiter: 6, engineer: 9, founder: 7, ai: 9 },
    evidence: [
      { type: "metric", label: "GitHub stars", value: "12k+" },
      { type: "metric", label: "Weekly downloads", value: "500k" },
      { type: "link", label: "Repository", value: "View on GitHub", url: "#" },
      { type: "link", label: "Documentation", value: "Docs site", url: "#" },
    ],
    metadata: {
      timeline: "2022 - Present",
      stack: ["React", "TypeScript", "Playwright", "Rollup"],
    },
  },
];
