# Visual Architect

**Design diagrams like an architect. Review them like a product.**

Visual Architect is a portable Agent Skill plus a small npm CLI for creating high-quality technical diagrams with AI. It adds semantic modeling, automatic diagram selection, strict visual quality checks, stable element identity, precise human review, revision diffs, and code-to-diagram consistency guidance.

## Why it feels different

Most diagram prompts jump directly from words to boxes. Visual Architect first models the system, separates facts from assumptions, chooses the right visual grammar, controls complexity, then validates the output before review.

The included **Review Canvas** makes generated HTML diagrams clickable. Reviewers can select a node or connector, attach feedback to its stable ID, and export structured JSON back to an AI agent. No server and no runtime dependency are required.

## Install the npm CLI

```bash
npm install -g visual-architect-skill
visual-architect init
```

Or run it without a global install:

```bash
npx visual-architect-skill init
```

This installs the bundled skill to `.agents/skills/visual-architect` by default.

## Install from skills.sh / GitHub

After publishing this repository to GitHub, users can install the skill directly with:

```bash
npx skills add <your-github-owner>/<your-repo> --skill visual-architect
```

The repository keeps the skill at `skills/visual-architect/`, which matches the common multi-skill repository structure.

## CLI

```bash
visual-architect init                 # install skill into .agents/skills
visual-architect init --dir <folder>  # install to another skills root
visual-architect validate             # validate bundled skill
visual-architect validate <path>      # validate a local copy
visual-architect doctor               # environment sanity check
visual-architect demo                 # write the interactive Review Canvas demo
visual-architect path                 # print bundled skill path
```

`init` refuses to overwrite an existing installation unless `--force` is provided.

## Example prompts

```text
Use Visual Architect to create a current-state architecture diagram of this repository. Inspect the code first, distinguish observed relationships from assumptions, and make the output reviewable.
```

```text
Create a School ERP fee-payment sequence diagram covering Parent App, ERP API, payment gateway, webhook handling, database update, receipt generation, and notification. Mark anything not confirmed as an assumption.
```

```text
Compare our current and proposed Azure architecture. Make an overview first; create a detailed data-flow diagram only if needed.
```

## Review Canvas contract

Important diagram elements receive:

```html
<g data-va-id="service-fees" data-va-label="Fees Service">...</g>
```

The stable ID survives layout changes and lets review feedback point to the same semantic element across revisions.

Feedback exports as structured JSON using the schema identifier `visual-architect/review@1`.

## Publishing checklist

1. Pick your GitHub owner/repository and update `repository`, `bugs`, and `homepage` fields in `package.json`.
2. Verify the npm package name is still available, or change `name` to your preferred scoped package such as `@your-org/visual-architect`.
3. Run `npm run check`.
4. Run `npm pack --dry-run` and inspect the file list.
5. Commit and push the repository to GitHub.
6. Sign in with `npm login` and publish with `npm publish --access public`.
7. Test from a clean folder using both the npm CLI and `npx skills add ...`.
8. Add screenshots/GIFs of the Review Canvas to the README before launch.

## Security & privacy

Visual Architect has no production dependencies, does not send telemetry, and the Review Canvas runs locally. Generated artifacts should not include secrets, credentials, private keys, or sensitive source data unless the user explicitly understands the implications.

## License

MIT
