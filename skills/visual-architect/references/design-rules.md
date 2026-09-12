# Design Rules

## Composition
- Establish one dominant reading direction.
- Use whitespace as structure.
- Align related nodes to a consistent grid.
- Group by meaning, not simply to fill empty space.
- Keep repeated components visually consistent.

## Typography
- Title: largest.
- Node names: clearly readable.
- Metadata: smaller but never microscopic.
- Prefer short labels; move explanations to captions/notes.

## Color
- Use semantic roles: background, text, muted, accent, warning, boundary.
- Reserve accent for focal information.
- Do not use many unrelated colors merely to distinguish boxes.
- Ensure important meaning remains understandable without color.

## Shapes
- Same semantic type -> same shape treatment.
- Different shapes must mean something.
- Avoid excessive rounded cards and UI-dashboard styling for technical diagrams.

## Edges
- Use orthogonal or clean curved routing consistently.
- Minimize crossings and backward edges.
- Put labels near the edge they describe without collision.
- Show protocol/data labels only when they help the audience.

## Detail by audience
- Executive: business/system names and major flows.
- Mixed: components plus important implementation concepts.
- Engineer: protocols, stores, queues, interfaces, boundaries, keys, or other requested technical detail.

## Premium finish (when requested)
- Treat “premium,” “polished,” or “lavish” as a request for confident hierarchy and thoughtful interaction, not more decoration.
- Establish one signature visual motif, a restrained semantic palette, consistent spacing, and layered depth. Avoid generic glass cards everywhere, excessive gradients, or competing accents.
- Give the artifact a narrative entry point: a concise promise, the reader question, and an obvious first focal element.
- Use progressive disclosure for detail. Selection, tabs, filters, or drill-down panels must help a real review task rather than merely demonstrate interactivity.
- Add short, audience-aware microcopy that explains why a view matters and what action or decision follows.
- Animate only relationships, transitions, or state changes that benefit from motion. Keep motion subtle and honor `prefers-reduced-motion`.
- Design keyboard focus, hover, active, empty, error, and narrow-screen behavior as first-class states.
- Finish with desktop and narrow-screen visual QA; verify that premium styling did not reduce contrast, legibility, or semantic accuracy.
