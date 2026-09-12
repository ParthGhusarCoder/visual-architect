# Validation Checklist

Perform two passes: semantic and visual.

## Semantic validation
- Does every primary node have a reason to exist?
- Are required actors/systems/entities represented?
- For broad requests, can every requested capability be traced to a view, coverage note, `Out of scope`, or `TBD`?
- Are relationships directionally correct?
- Are labels unambiguous?
- Are current, proposed, external, and assumed elements clearly identified when relevant?
- Does the diagram contradict provided source material?
- Are disconnected nodes intentional?
- For sequence diagrams, is message order coherent?
- For ER/schema diagrams, are relationship cardinalities/keys shown only when known?
- For deployment diagrams, are runtime/deployment boundaries distinct from logical components?
- Are outcome-changing exception paths represented, not hidden behind the happy path?

## Comprehension validation
- Can a first-time reader explain the diagram’s purpose and main path in under a minute?
- Are domain terms familiar to the intended audience, with uncommon acronyms expanded?
- Is ownership clear where handoffs matter?
- Is detail progressively disclosed rather than crowded onto the overview?
- Can a reader distinguish confirmed facts, proposals, assumptions, and unresolved items without relying on color?

## Visual validation
- No overlapping text.
- No node overlaps.
- No connector through unrelated nodes or labels.
- Minimal connector crossings.
- Readable at intended output size.
- Consistent spacing and alignment.
- Clear start/focal point.
- Legend exists if visual encodings are not self-evident.
- Contrast is sufficient.
- Keyboard focus and text alternatives are present when the HTML is interactive.

## Complexity validation
If the diagram feels crowded, simplify in this order:
1. remove decoration
2. shorten labels
3. collapse repeated leaf nodes
4. group related components
5. move secondary metadata to notes
6. split into overview + detail

Never solve complexity primarily by shrinking the font.
