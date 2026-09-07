# Visual Architect 1.1.0 release steps

This source is ready to replace the current 1.0.0 repository.

```powershell
npm run check
npm publish --access public
```

Before publishing, commit/push the updated source to GitHub so npm and GitHub/skills.sh describe the same version.

Recommended Git commands:

```powershell
git add .
git commit -m "Release Visual Architect 1.1.0"
git push origin main
```

Then publish and verify:

```powershell
npm publish --access public
npm view visual-architect-skill version
```

Expected version: `1.1.0`.

Smoke test from an empty folder:

```powershell
npx visual-architect-skill@1.1.0 doctor
npx visual-architect-skill@1.1.0 demo
```
