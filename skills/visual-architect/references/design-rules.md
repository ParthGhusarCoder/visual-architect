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
