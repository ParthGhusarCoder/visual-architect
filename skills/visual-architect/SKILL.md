---
name: visual-architect
description: Create clear technical diagrams as self-contained HTML/SVG. Use for architecture, flowcharts, sequences, ER/schema, deployment, data flow, swimlanes, state, dependency, journey, hierarchy, and timelines. Select the diagram type automatically, mark assumptions, validate clarity, and optionally add precise visual review feedback.
license: MIT
compatibility: Requires file-writing. Browser recommended for HTML review.
---

# Visual Architect

Create diagrams that are **semantically true, immediately readable, and cheap to revise**.

## Default workflow

`MODEL -> SELECT -> SIMPLIFY -> DRAW -> CHECK -> DELIVER`

1. **MODEL** — identify audience, reader question, nodes, groups, edges, direction/time, boundaries, and facts vs assumptions. Never invent missing architecture. Mark uncertainty as `Assumption`, `Proposed`, `Example`, or `TBD`. If the request says “all,” “complete,” or “end-to-end,” read `references/planning.md` and build a coverage inventory before drawing.
2. **SELECT** — choose the diagram grammar yourself. Read `references/diagram-types.md` only if selection is unclear.
3. **SIMPLIFY** — default overview target is 5–12 primary nodes. Group or split before shrinking text. Simplicity must not silently remove requested scope; keep omitted detail traceable in a companion view or coverage note.
4. **DRAW** — use strong hierarchy, short labels, clean routing, and one dominant reading direction. For substantial diagrams, read `references/design-rules.md`.
5. **CHECK** — verify semantics, overlaps, crossings, readability, and state/assumption labels. Read `references/validation.md` when the diagram is non-trivial or source-derived.
6. **DELIVER** — default to a self-contained `index.html` with editable inline SVG/CSS. Use other formats only when requested. If the user asks for a preview, open the validated file after writing it.

## Broad systems and planning

For a broad product, workflow, or “cover everything” request, produce a small diagram set instead of one overloaded canvas:

1. an overview answering the main business question;
2. focused views for materially different concerns such as ownership, states, data, integrations, or deployment;
3. a concise coverage note mapping requested capabilities to a view or marking them `Out of scope` / `TBD`.

Default to a mixed audience when none is named: plain-language labels first, technical detail second. Expand uncommon acronyms, include a legend when encodings are not obvious, and make exception paths visible when they change the outcome. Never claim “complete” from an incomplete brief; call it a `Proposed reference model` and list assumptions.

## Token-efficient behavior

Use progressive disclosure:

- Do **not** read every reference file.
- Do **not** restate this workflow in the answer.
- Do **not** generate review UI unless the user asks for interactive review/annotation or it clearly adds value.
- For interactive review, **copy** `assets/review-canvas.html` and replace only its metadata + diagram region. Do not rewrite the UI shell from scratch.
- Prefer concise SVG using the template's reusable classes instead of repeated inline styling.
- Keep node labels short; put secondary explanation in notes/callouts.
- Reuse the user’s domain language; do not rename familiar roles or stages merely to sound technical.

## Diagram selection shorthand

- components/connections -> **architecture**
- branching decisions -> **flowchart**
- calls over time -> **sequence**
- entities/relationships -> **ER/data model**
- physical tables/PK/FK -> **database schema**
- where software runs -> **deployment**
- information movement/transformation -> **data flow**
- cross-role process -> **swimlane**
- states/transitions -> **state machine**
- prerequisites/fan-in/out -> **dependency graph**
- stages/touchpoints -> **user journey**
- calendar/time plan -> **timeline/Gantt**
- hierarchy -> **tree/layer/nested**

If one canvas mixes incompatible questions, create an overview plus focused detail diagrams.

## Interactive review (only when useful)

Copy `assets/review-canvas.html`. Preserve its UI/JS and replace content between the `VA:DIAGRAM_START` / `VA:DIAGRAM_END` markers plus the `va-meta` JSON.

Support `Comment/change`, `Add`, and `Discard`. “Finish review” exports `review@2` JSON plus an agent brief. Standalone files copy/download it; hosted views emit the event in `references/review-protocol.md`. Never claim receipt without host acknowledgement.

Important semantic elements must have stable identity:

```html
<g data-va-id="service-fees" data-va-label="Fees Service" data-va-kind="service">...</g>
```

IDs describe meaning, not coordinates. Preserve IDs across revisions when the concept is unchanged. Read `references/review-protocol.md` only when handling review feedback or revisions.

After revisions, report only meaningful changes: **Added, Removed, Renamed, Moved, Relationship changed, Visual-only, Assumption resolved**.

## Current vs proposed

Never silently mix them. Use separate diagrams or unmistakable text labels.

## Source-derived diagrams

When the user asks for an as-is view and code/config is available, inspect evidence first. Distinguish observed relationships from inference. For mismatch reporting use:

`Diagram says -> Implementation shows -> Recommended resolution`

Do not mutate code or diagram to force consistency unless asked.

## Quality bar

Before delivery, a reader should answer without the chat:

1. What is this?
2. What is the main flow/structure?
3. What matters most?
4. What is fact vs assumption/proposal?

If not, simplify or redesign.
