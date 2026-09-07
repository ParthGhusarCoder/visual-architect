# Review Studio contract

Use only for interactive/reviewable HTML.

## Fast path

1. Copy `assets/review-canvas.html` without rewriting it.
2. Replace the JSON inside `#va-meta` (`title`, `type`, `revision`, `status`).
3. Replace only the SVG between `VA:DIAGRAM_START` and `VA:DIAGRAM_END`.

## Reusable SVG classes

- `va-svg`, `va-title`, `va-subtitle`
- `zone`, `zone-label`
- node group: `node` plus one of `client`, `service`, `store`, `external`; its main `<rect>` uses `surface`
- node text: `node-title`, `node-sub`, `node-badge`
- edge group: `edge-group`; path uses `edge`, optionally `dashed`
- edge labels: `edge-label`
- numbered flow: `edge-step`, `edge-step-text`
- assumption callout: `note`, `note-text`

Important nodes/edges need `data-va-id`, `data-va-label`, and preferably `data-va-kind`.

Keep the default `1200×760` viewBox when practical. The shell handles dark/light themes, zoom, pan, fit, selection, mobile review sheet, feedback status, persistence, copy/download JSON, and keyboard shortcuts.
