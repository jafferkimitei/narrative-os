# NarrativeOS — Resume Reimagined


## Concept

NarrativeOS transforms a traditional resume from a static document into an adaptive storytelling system that reconfigures itself based on viewer intent.

## Core Features

### 1. Intent-Based Adaptation
Four persona modes that fundamentally change how content is presented:

- **Recruiter Mode**: Clarity & signal. High-level outcomes, scannable timelines, minimal jargon
- **Engineer Mode**: Depth & systems. Architecture, tradeoffs, technical decisions, code-level thinking
- **Founder Mode**: Leverage & vision. Business impact, velocity, ownership signals
- **AI Reviewer Mode**: Machine-readable identity. Structured data, explicit metrics, verifiable links
![Recruiter Mode](./public/Screen1.jpg)
![Engineer Mode](./public/Screen2.jpg)
### 2. Dynamic Content Weighting
Each content block has a weight (1-10) for each persona mode. The system:
- Reorders content based on relevance
- Adjusts visual emphasis (opacity, scale)
- Changes narrative density
- Reveals different evidence

### 3. Evidence-First Presentation
No claims without proof. Each achievement includes:
- Metrics
- Demos
- Links to artifacts
- Code samples
- Before/after comparisons

### 4. Evidence-Only Mode
Bold toggle that strips all narrative, leaving only:
- Verifiable metrics
- Links
- Demos
- Timeline data
- Tech stack

This mode demonstrates extreme confidence and transparency.

### 5. Command Palette
Easter egg activated by typing `/ask` or pressing `⌘K`:
- Natural language queries about the work
- Suggested explorations
- Context-aware responses
- Feels like conversing with the resume

## Motion Philosophy

Motion communicates context switching, not decoration:
- No bounce or elastic easing
- Custom cubic-bezier curves
- Fast feedback (<100ms)
- Calm transitions (300-600ms)
- Predictive, not reactive


## Technical Architecture

### Components
- `SystemHeader` - Fixed navigation with OS aesthetic
- `NarrativeHero` - Intent selection interface
- `ModeIndicator` - Active mode description
- `NarrativeContent` - Adaptive content blocks
- `EvidenceToggle` - Evidence-only mode switcher
- `CommandPalette` - /ask easter egg
- `AmbientBackground` - Subtle animated atmosphere
- `IntroSequence` - Initial load animation

### Data Structure
Content blocks are defined in `narrative.ts` with:
```typescript
{
  id: string
  type: "experience" | "project" | "insight" | "evidence"
  title: string
  content: { recruiter, engineer, founder, ai }
  weight: { recruiter, engineer, founder, ai }
  evidence: Array<{ type, label, value, url }>
  metadata: { timeline, role, impact, stack }
}
```

## Interaction Patterns

1. **Select Intent** → System morphs (no reload, smooth reflow)
2. **Toggle Evidence** → Narrative strips away
3. **Type /ask** → Command palette opens
4. **Press ⌘K** → Alternative command palette trigger
5. **Hover Evidence** → Subtle accent highlight

## Customization

To adapt this for your own work:

1. Update `narrative.ts` with your experience
2. Adjust weights for each persona mode
3. Add your evidence (links, metrics, demos)
4. Customize the visual theme in `theme.css`
5. Modify persona descriptions in `ModeIndicator.tsx`

## Easter Eggs

- Type `/ask` anywhere to open command palette
- Press `⌘K` for quick command access
- Evidence-only mode shows raw confidence
- Animated loading sequence on first visit
- Subtle background animations respond to time

---

# narrative-os
