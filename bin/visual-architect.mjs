#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'..');
const skillSrc=path.join(root,'skills','visual-architect');
const pkg=JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8'));
const args=process.argv.slice(2);const cmd=args.shift()||'help';
const out=(s='')=>process.stdout.write(s+'\n');
const fail=(s,code=1)=>{process.stderr.write('✖ '+s+'\n');process.exit(code)};
const arg=name=>{const i=args.indexOf(name);return i>=0?args[i+1]:undefined};
function copyDir(src,dst){fs.mkdirSync(dst,{recursive:true});for(const ent of fs.readdirSync(src,{withFileTypes:true})){const s=path.join(src,ent.name),d=path.join(dst,ent.name);ent.isDirectory()?copyDir(s,d):fs.copyFileSync(s,d)}}
function openLocal(file){const target=path.resolve(file),command=process.platform==='win32'?'explorer.exe':process.platform==='darwin'?'open':'xdg-open';const child=spawn(command,[target],{detached:true,stdio:'ignore'});child.unref()}
function help(){out(`Visual Architect ${pkg.version}\n\nUsage:\n  visual-architect init [--dir .agents/skills]\n  visual-architect validate [path]\n  visual-architect doctor\n  visual-architect demo [--out visual-architect-demo.html]\n  visual-architect enrollment-demo [--out index.html] [--open]\n  visual-architect canvas [--out review-canvas.html]\n  visual-architect path\n  visual-architect --version\n\nSkill install:\n  npx skills add ParthGhusarCoder/visual-architect --skill visual-architect`)}
function validate(dir){
  const skill=path.resolve(dir||skillSrc),file=path.join(skill,'SKILL.md');
  if(!fs.existsSync(file))fail(`SKILL.md not found in ${skill}`);
  const text=fs.readFileSync(file,'utf8'),errs=[];
  if(!text.startsWith('---\n'))errs.push('missing YAML frontmatter');
  for(const key of ['name:','description:'])if(!text.includes(`\n${key}`))errs.push(`missing ${key.slice(0,-1)} frontmatter`);
  if(Buffer.byteLength(text)>6000)errs.push('SKILL.md exceeds 6 KB token-efficiency budget');
  for(const rel of ['references/design-rules.md','references/diagram-types.md','references/planning.md','references/validation.md','references/review-protocol.md','references/review-ui.md','assets/review-canvas.html','examples/school-erp-student-enrollment.md','examples/school-erp-student-enrollment.html'])if(!fs.existsSync(path.join(skill,rel)))errs.push(`missing ${rel}`);
  const canvas=fs.existsSync(path.join(skill,'assets','review-canvas.html'))?fs.readFileSync(path.join(skill,'assets','review-canvas.html'),'utf8'):'';
  for(const marker of ['VA:DIAGRAM_START','VA:DIAGRAM_END','data-va-id','id="va-meta"','id="requestType"','id="finishReview"','visual-architect/review@2'])if(canvas&&!canvas.includes(marker))errs.push(`Review Studio missing ${marker}`);
  if(errs.length)fail(errs.join('\n  - '));
  out(`✓ Valid Visual Architect skill: ${skill}`);out(`✓ Compact SKILL.md: ${Buffer.byteLength(text)} bytes`);
}

switch(cmd){
case '--version':case '-v':case 'version':out(pkg.version);break;
case 'path':out(skillSrc);break;
case 'validate':validate(args[0]);break;
case 'doctor':{
  const major=Number(process.versions.node.split('.')[0]);
  out(`Visual Architect: ${pkg.version}`);out(`Node: ${process.version} ${major>=18?'✓':'✖ requires >=18'}`);out(`Platform: ${process.platform} ${process.arch}`);out(`Skill bundle: ${fs.existsSync(path.join(skillSrc,'SKILL.md'))?'✓':'✖'}`);out(`Review Studio: ${fs.existsSync(path.join(skillSrc,'assets','review-canvas.html'))?'✓':'✖'}`);out(`Fee-payment showcase: ${fs.existsSync(path.join(skillSrc,'examples','school-erp-fee-payment.html'))?'✓':'✖'}`);out(`Enrollment benchmark: ${fs.existsSync(path.join(skillSrc,'examples','school-erp-student-enrollment.html'))?'✓':'✖'}`);if(major<18)process.exitCode=1;break;}
case 'init':{
  const base=path.resolve(arg('--dir')||'.agents/skills'),dst=path.join(base,'visual-architect');
  if(fs.existsSync(dst)&&!args.includes('--force'))fail(`${dst} already exists. Use --force to replace it.`);
  if(fs.existsSync(dst))fs.rmSync(dst,{recursive:true,force:true});copyDir(skillSrc,dst);out(`✓ Installed Visual Architect to ${dst}`);out('  Restart/reload your agent if it does not discover skills dynamically.');break;}
case 'demo':{
  const dest=path.resolve(arg('--out')||'visual-architect-demo.html');fs.copyFileSync(path.join(skillSrc,'examples','school-erp-fee-payment.html'),dest);out(`✓ Wrote polished School ERP demo: ${dest}`);break;}
case 'enrollment-demo':{
  const dest=path.resolve(arg('--out')||'index.html');fs.copyFileSync(path.join(skillSrc,'examples','school-erp-student-enrollment.html'),dest);out(`✓ Wrote School ERP student-enrollment blueprint: ${dest}`);if(args.includes('--open')){openLocal(dest);out('✓ Opened blueprint in the default browser')}break;}
case 'canvas':{
  const dest=path.resolve(arg('--out')||'review-canvas.html');fs.copyFileSync(path.join(skillSrc,'assets','review-canvas.html'),dest);out(`✓ Wrote blankable Review Studio canvas: ${dest}`);break;}
case 'help':case '--help':case '-h':help();break;
default:fail(`Unknown command: ${cmd}. Run visual-architect --help.`)
}
