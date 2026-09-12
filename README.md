# Visual Architect

**Technical diagrams that are easier to understand, cheaper for agents to generate, and actually pleasant to review.**

Visual Architect is an Agent Skill + zero-dependency npm CLI. It models the system before drawing, automatically selects the right diagram grammar, keeps assumptions explicit, validates clarity, and can wrap diagrams in a polished interactive **Review Studio**.

## What changed in 1.1

- **~54% smaller `SKILL.md`** (9.1 KB → ~4.2 KB) with progressive-disclosure references.
- Review UI is **opt-in**, so simple diagram requests do not pay for interaction they do not need.
- Agents copy the Review Studio shell and replace only metadata + SVG instead of regenerating UI boilerplate.
- New dark/light responsive Review Studio with pan/zoom/fit, stable element selection, quick review chips, open/resolved feedback, local persistence, JSON export, and mobile bottom-sheet behavior.
- Reusable SVG classes reduce repeated styling in generated artifacts.
- Validator now enforces a 6 KB `SKILL.md` budget to prevent future token bloat.
- A real School ERP online-fee-payment showcase is included and used by `visual-architect demo`.
- A premium School ERP student-enrollment benchmark tests broad-scope planning, plain-language comprehension, exceptions, data, integrations, governance, and traceable coverage. Its multi-view experience includes stage drill-down, keyboard navigation, capability search, persistent themes, restrained motion, and responsive guidance.

## Install

### Agent Skill

```bash
npx skills add ParthGhusarCoder/visual-architect --skill visual-architect
```

### npm CLI

```bash
npm install -g visual-architect-skill
visual-architect init
```

or:

```bash
npx visual-architect-skill init
```

## Run without installing

The package exposes both `visual-architect-skill` and `visual-architect` as CLI aliases, so these work directly:

```bash
npx visual-architect-skill doctor
npx visual-architect-skill demo
npx visual-architect-skill enrollment-demo
npx visual-architect-skill canvas
npx visual-architect-skill init
```

After a global install, use the shorter command:

```bash
visual-architect demo
```

## CLI

```bash
visual-architect init                 # install skill into .agents/skills
visual-architect validate             # validate skill + token budget
visual-architect doctor               # environment sanity check
visual-architect demo                 # write polished School ERP demo
visual-architect enrollment-demo      # write end-to-end enrollment blueprint as index.html
visual-architect enrollment-demo --open # write and open it in the default browser
visual-architect canvas               # write reusable Review Studio shell
visual-architect path                 # print bundled skill path
```

## Example

Prompt:

```text
Create a School ERP online fee-payment diagram. Show Parent App → ERP API → Fees Service → payment gateway, the webhook back to Fees Service, database update, receipt generation and notification. Do not invent the gateway vendor. Make it reviewable.
```

Visual Architect chooses a data-flow/architecture view, keeps the unknown gateway generic, and generates an interactive artifact where every meaningful node and edge can receive targeted feedback.

Run the bundled showcase:

```bash
npx visual-architect-skill demo
```

Open `visual-architect-demo.html` in a browser.

For the broader planning benchmark:

```bash
npx visual-architect-skill enrollment-demo
```

Open `index.html` to switch between the journey, ownership and exceptions, states, data and integrations, and the 18-area coverage map. Add `--open` to launch it immediately after generation.

### Collaborative review

Select a stage, capability, owner lane, state group, or data zone and open **Review blueprint**. Requests can be classified as **Comment/change**, **Add**, or **Discard**. Open requests persist locally and discarded concepts are visibly marked without destroying the source.

**Finish review** copies a grouped agent brief, exposes JSON/Markdown downloads, and emits `visual-architect:review-ready` for an integrating host to forward to its agent. A standalone HTML file cannot prove direct agent delivery, so the copied brief remains the reliable fallback.

## Review Studio contract

For interactive diagrams the agent copies `skills/visual-architect/assets/review-canvas.html`, updates `#va-meta`, and replaces only the SVG between:

```html
<!-- VA:DIAGRAM_START -->
...
<!-- VA:DIAGRAM_END -->
```

Reviewable semantic elements use stable IDs:

```html
<g data-va-id="service-fees" data-va-label="Fees Service" data-va-kind="service">...</g>
```

This keeps feedback traceable across revisions while avoiding regeneration of the UI shell.

## Development

```bash
npm run check
npm pack --dry-run
```

The project intentionally has **zero production dependencies**.

## Release 1.2.0

If you already published `1.0.0`:

```bash
npm run check
npm publish --access public
```

The package version in this source is `1.2.0`.

## Security & privacy

Review Studio runs locally and sends no telemetry. Never place secrets, credentials, private keys, or sensitive source data into public diagram artifacts.

## License

MIT
