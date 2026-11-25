/**
 * convert-to-webp.mjs
 * Converts all PNG/JPG images in /public to WebP, removes originals,
 * and also converts src/assets images.
 * Skips: favicon.ico, favicon.svg, placeholder.svg, sitemap.xml, robots.txt
 * Logo.png is converted but kept as logo.webp (nav references updated separately).
 */
import sharp from "sharp";
import { readFileSync, writeFileSync, unlinkSync, readdirSync, statSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const QUALITY = 82; // WebP quality (82 = great quality, ~70% smaller than PNG)
const DIRS = [
  path.join(ROOT, "public"),
  path.join(ROOT, "public", "treatment-images"),
  path.join(ROOT, "src", "assets"),
];

// Files to skip (non-image or system files)
const SKIP_EXTS = new Set([".ico", ".svg", ".xml", ".txt", ".webp", ".mjs", ".js", ".json"]);
const SKIP_FILES = new Set(["placeholder.svg", "favicon.svg"]);

let totalOriginalBytes = 0;
let totalWebpBytes = 0;
let converted = 0;
let skipped = 0;

async function convertDir(dir) {
  let files;
  try {
    files = readdirSync(dir);
  } catch {
    return;
  }

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) continue;

    const ext = path.extname(file).toLowerCase();
    if (SKIP_EXTS.has(ext) || SKIP_FILES.has(file)) {
      skipped++;
      continue;
    }

    if (![".png", ".jpg", ".jpeg", ".gif"].includes(ext)) {
      skipped++;
      continue;
    }

    const webpName = path.basename(file, ext) + ".webp";
    const webpPath = path.join(dir, webpName);
    const originalSize = stat.size;

    try {
      await sharp(fullPath)
        .webp({ quality: QUALITY, effort: 5 })
        .toFile(webpPath);

      const webpSize = statSync(webpPath).size;
      const saving = Math.round((1 - webpSize / originalSize) * 100);

      totalOriginalBytes += originalSize;
      totalWebpBytes += webpSize;
      converted++;

      console.log(
        `✓ ${file.padEnd(40)} ${(originalSize / 1024).toFixed(0).padStart(5)}KB → ${(webpSize / 1024).toFixed(0).padStart(5)}KB  (-${saving}%)`
      );

      // Delete the original after successful conversion
      unlinkSync(fullPath);
    } catch (err) {
      console.error(`✗ FAILED: ${file} — ${err.message}`);
    }
  }
}

console.log("=".repeat(70));
console.log(" Pelle Aesthetic — WebP Image Conversion");
console.log("=".repeat(70));
console.log(`Quality: ${QUALITY}  |  Processing ${DIRS.length} directories\n`);

for (const dir of DIRS) {
  console.log(`\n📁 ${path.relative(ROOT, dir)}`);
  console.log("-".repeat(70));
  await convertDir(dir);
}

const savedMB = ((totalOriginalBytes - totalWebpBytes) / 1024 / 1024).toFixed(1);
const savedPct = Math.round((1 - totalWebpBytes / totalOriginalBytes) * 100);

console.log("\n" + "=".repeat(70));
console.log(` ✅ Converted: ${converted} files  |  Skipped: ${skipped} files`);
console.log(` Before: ${(totalOriginalBytes / 1024 / 1024).toFixed(1)} MB`);
console.log(` After:  ${(totalWebpBytes / 1024 / 1024).toFixed(1)} MB`);
console.log(` Saved:  ${savedMB} MB  (${savedPct}% reduction)`);
console.log("=".repeat(70));
