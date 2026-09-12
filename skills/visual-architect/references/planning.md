# Planning Broad Diagrams

Use this guide when the user asks for an end-to-end system, a complete workflow, a product blueprint, or “all functionality.” The goal is coverage without a crowded canvas.

## Build a coverage inventory

Capture only what is supported by the brief or explicitly labeled as a proposal:

- audience and decision the diagram must support;
- scope boundary, start/end conditions, and neighboring systems;
- actors and ownership handoffs;
- lifecycle stages and primary happy path;
- alternate, failure, cancellation, and recovery paths;
- business capabilities and rules;
- states and state-changing events;
- core data objects and sensitive-data boundaries;
- external integrations and asynchronous callbacks;
- cross-cutting controls such as access, consent, audit, retention, accessibility, localization, security, observability, and reporting.

Treat “all” as a request to demonstrate coverage, not permission to invent product facts. Use `Proposed reference model`, `Assumption`, and `TBD` labels as needed.

## Choose a coherent diagram set

Use the fewest views that answer distinct questions. A strong default for a broad operational product is:

1. **Lifecycle overview** — what happens from start to successful completion?
2. **Swimlane or sequence** — who does what, including exception/recovery paths?
3. **State model** — which statuses exist and what transitions them?
4. **Data or integration view** — what information is stored or exchanged?

Add architecture or deployment only if the reader needs implementation or runtime decisions. Do not include a view merely to fill this template.

## Make completeness reviewable

Pair the diagrams with a compact coverage note:

| Capability | View / element | Status |
|---|---|---|
| Named capability | Stable element ID or view name | Covered / Assumption / TBD / Out of scope |

Keep stable semantic IDs across related views when the same concept appears. Before delivery, check the inventory against the produced artifacts and call out gaps honestly.

For a realistic benchmark, read `../examples/school-erp-student-enrollment.md`.
