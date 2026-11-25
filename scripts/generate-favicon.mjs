/**
 * Generates branded Pelle Aesthetic favicon files:
 *  - public/favicon-32.png  (32×32)
 *  - public/favicon-16.png  (16×16)
 *  - public/apple-touch-icon.png (180×180)
 * Run: node scripts/generate-favicon.mjs
 */
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// SVG source — dark bg #120e07, gold accent #c9a96e, italic P
const makeSvg = (size) => {
  const fontSize = Math.round(size * 0.80);
  const textX = Math.round(size * 0.10);
  const textY = Math.round(size * 0.86);
  const radius = Math.round(size * 0.16);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
  <rect width="${size}" height="${size}" fill="#2B2D8E" rx="${radius}"/>
  <text x="${textX}" y="${textY}" font-family="Georgia, serif" font-size="${fontSize}"
        font-weight="700" font-style="italic" fill="#F5C518">P</text>
</svg>`;
};

const sizes = [
  { name: "favicon-32.png",       size: 32  },
  { name: "favicon-16.png",       size: 16  },
  { name: "apple-touch-icon.png", size: 180 },
];

for (const { name, size } of sizes) {
  const svg = Buffer.from(makeSvg(size));
  const out = path.join(__dirname, "../public", name);
  await sharp(svg).png().toFile(out);
  console.log(`✅  ${name}  (${size}×${size})`);
}

console.log("Done — all favicon assets generated.");
