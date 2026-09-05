# Review protocol

## Goal

Make feedback precise, traceable, and cheap to apply.

## Stable identity

Every important semantic element should have a stable `data-va-id`. IDs describe meaning, not coordinates. Good: `service-fees`, `edge-payment-webhook`. Bad: `box-7`, `left-node`.

## Feedback record

A review comment should carry:

- `elementId`
- `elementLabel`
- `comment`
- `createdAt`
- optional `revision`

## Revision handling

Preserve IDs across revisions for unchanged semantic elements. If an element is renamed but remains the same concept, retain its ID. If the concept is replaced, use a new ID.

## Change states

`Requested -> Working -> Ready for Review -> Approved`

## Diff language

Report semantic changes separately from visual-only changes. This prevents a user from mistaking a layout adjustment for an architecture modification.
