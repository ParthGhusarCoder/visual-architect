# Review protocol

## Goal

Make feedback precise, traceable, and cheap to apply.

## Stable identity

Every important semantic element should have a stable `data-va-id`. IDs describe meaning, not coordinates. Good: `service-fees`, `edge-payment-webhook`. Bad: `box-7`, `left-node`.

## Review request

A request should carry:

- `requestType`: `comment`, `add`, or `discard`
- `elementId`
- `elementLabel`
- `comment`
- `status`: `open` or `resolved`
- `createdAt`
- optional `revision`

`Discard` means remove the selected semantic concept or relationship, not delete the saved review record. `Add` may target the whole artifact or a selected group. Preserve open and resolved requests separately so an agent does not accidentally reapply completed work.

## Revision handling

Preserve IDs across revisions for unchanged semantic elements. If an element is renamed but remains the same concept, retain its ID. If the concept is replaced, use a new ID.

## Change states

`Requested -> Working -> Ready for Review -> Approved`

## Diff language

Report semantic changes separately from visual-only changes. This prevents a user from mistaking a layout adjustment for an architecture modification.

## Agent handoff

“Finish review” produces both:

- a structured `visual-architect/review@2` JSON payload containing artifact metadata, summary counts, and all requests;
- a concise agent brief grouped into `Discard`, `Add`, and `Comment/change`, using stable element IDs.

Standalone HTML must offer copy/download because it cannot directly invoke an agent. An integrated host may listen for:

```js
window.addEventListener('message', event => {
  if (event.data?.type === 'visual-architect:review-ready') {
    // Pass event.data.agentBrief and event.data.payload to the agent.
  }
});
```

The artifact should also dispatch a same-window `visual-architect:review-ready` custom event. Emitting either event is a handoff request, not proof of agent receipt; the host is responsible for acknowledgement.
