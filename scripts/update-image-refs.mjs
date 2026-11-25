/**
 * update-image-refs.mjs
 * Replaces all .png / .jpg / .jpeg image path references in .tsx/.ts/.css files
 * with .webp equivalents.
 * Skips og-image references (already .jpg) and favicon/svg paths.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = path.join(__dirname, '..', 'src');
const INDEX_HTML = path.join(__dirname, '..', 'index.html');

const TARGET_EXTS = new Set(['.tsx', '.ts', '.css', '.html']);

function getAllFiles(dir) {
  const results = [];
  for (const f of readdirSync(dir)) {
    const full = path.join(dir, f);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      results.push(...getAllFiles(full));
    } else if (TARGET_EXTS.has(path.extname(f).toLowerCase())) {
      results.push(full);
    }
  }
  return results;
}

const files = [...getAllFiles(SRC_DIR), INDEX_HTML];
let totalFiles = 0;
let totalReplacements = 0;

for (const file of files) {
  let content = readFileSync(file, 'utf8');
  const original = content;

  // Replace /treatment-images/xxx.png → /treatment-images/xxx.webp
  // Replace /logo.png → /logo.webp
  // Replace src/assets imports: dr-tasneem.png → dr-tasneem.webp etc.
  // But skip: og-image (already .jpg → .webp done), favicon.*, placeholder.*

  content = content
    .replace(/\/treatment-images\/([^"'`\s]+)\.(png|jpg|jpeg)/g, '/treatment-images/$1.webp')
    .replace(/"\/logo\.(png|jpg)"/g, '"/logo.webp"')
    .replace(/'\/logo\.(png|jpg)'/g, "'/logo.webp'")
    .replace(/src="\/logo\.(png|jpg)"/g, 'src="/logo.webp"')
    // src/assets imports
    .replace(/(from\s+["'])([^"']+)\.(png|jpg|jpeg)(["'])/g, '$1$2.webp$4')
    // direct import paths in tsx
    .replace(/(import\s+\w+\s+from\s+["'])([^"']+)\.(png|jpg|jpeg)(["'])/g, '$1$2.webp$4');

  // Count replacements
  const count = (original.match(/\.(png|jpg|jpeg)/g) || []).length - 
                (content.match(/\.(png|jpg|jpeg)/g) || []).length;

  if (content !== original) {
    writeFileSync(file, content, 'utf8');
    totalFiles++;
    totalReplacements += count;
    console.log(`✓ ${path.relative(path.join(__dirname, '..'), file)} (${count} replaced)`);
  }
}

console.log(`\nDone: ${totalReplacements} references updated across ${totalFiles} files.`);
