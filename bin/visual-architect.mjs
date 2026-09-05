#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'..');
const skillSrc=path.join(root,'skills','visual-architect');
const pkg=JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8'));
const args=process.argv.slice(2); const cmd=args.shift()||'help';

function out(s=''){process.stdout.write(s+'\n')}
function fail(s,code=1){process.stderr.write('✖ '+s+'\n');process.exit(code)}
function copyDir(src,dst){fs.mkdirSync(dst,{recursive:true});for(const ent of fs.readdirSync(src,{withFileTypes:true})){const s=path.join(src,ent.name),d=path.join(dst,ent.name);ent.isDirectory()?copyDir(s,d):fs.copyFileSync(s,d)}}
function arg(name){const i=args.indexOf(name);return i>=0?args[i+1]:undefined}
function help(){out(`Visual Architect ${pkg.version}\n\nUsage:\n  visual-architect init [--dir .agents/skills]\n  visual-architect validate [path]\n  visual-architect doctor\n  visual-architect demo [--out visual-architect-demo.html]\n  visual-architect path\n  visual-architect --version\n\nRecommended public skill install after you publish GitHub:\n  npx skills add <owner>/<repo> --skill visual-architect`)}
function validate(dir){const skill=path.resolve(dir||skillSrc),f=path.join(skill,'SKILL.md');if(!fs.existsSync(f))fail(`SKILL.md not found in ${skill}`);const text=fs.readFileSync(f,'utf8');const errs=[];if(!text.startsWith('---\n'))errs.push('missing YAML frontmatter');for(const key of ['name:','description:'])if(!text.includes(`\n${key}`))errs.push(`missing ${key.slice(0,-1)} frontmatter`);for(const rel of ['references/design-rules.md','references/diagram-types.md','references/validation.md','assets/review-canvas.html'])if(!fs.existsSync(path.join(skill,rel)))errs.push(`missing ${rel}`);if(!text.includes('data-va-id'))errs.push('review identity contract is missing');if(errs.length)fail(errs.join('\n  - '));out(`✓ Valid Visual Architect skill: ${skill}`)}

switch(cmd){
case '--version':case '-v':case 'version':out(pkg.version);break;
case 'path':out(skillSrc);break;
case 'validate':validate(args[0]);break;
case 'doctor':{
  const major=Number(process.versions.node.split('.')[0]);out(`Node: ${process.version} ${major>=18?'✓':'✖ requires >=18'}`);out(`Platform: ${process.platform} ${process.arch}`);out(`Skill bundle: ${fs.existsSync(path.join(skillSrc,'SKILL.md'))?'✓':'✖'}`);out(`Review Canvas: ${fs.existsSync(path.join(skillSrc,'assets','review-canvas.html'))?'✓':'✖'}`);if(major<18)process.exitCode=1;break;}
case 'init':{
  const base=path.resolve(arg('--dir')||'.agents/skills');const dst=path.join(base,'visual-architect');if(fs.existsSync(dst)&&!args.includes('--force'))fail(`${dst} already exists. Use --force to replace it.`);if(fs.existsSync(dst))fs.rmSync(dst,{recursive:true,force:true});copyDir(skillSrc,dst);out(`✓ Installed Visual Architect to ${dst}`);out('  Restart/reload your agent if it does not discover skills dynamically.');break;}
case 'demo':{
  const dest=path.resolve(arg('--out')||'visual-architect-demo.html');fs.copyFileSync(path.join(skillSrc,'assets','review-canvas.html'),dest);out(`✓ Wrote interactive demo: ${dest}`);break;}
case 'help':case '--help':case '-h':help();break;
default:fail(`Unknown command: ${cmd}. Run visual-architect --help.`)
}
