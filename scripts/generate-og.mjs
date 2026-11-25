/**
 * Generates /public/og-image.jpg (1200x630) for Pelle Aesthetic & Cosmetic
 * Run: node scripts/generate-og.mjs
 * Requires: npm install --save-dev sharp (one-time)
 */
import sharp from "sharp";
import { writeFileSync, mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "../public/og-image.jpg");

// 1200 x 630 SVG — brand colours: dark bg #120e07, gold accent #c9a96e, cream text #f5efe6
const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#120e07"/>
      <stop offset="100%" stop-color="#1e1509"/>
    </linearGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#d4af70"/>
      <stop offset="100%" stop-color="#a07840"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Right decorative panel -->
  <rect x="820" y="0" width="380" height="630" fill="#1a1208" opacity="0.6"/>

  <!-- Gold vertical accent line -->
  <rect x="88" y="60" width="3" height="510" fill="url(#gold)" rx="1"/>

  <!-- Top eyebrow label -->
  <text x="110" y="108" font-family="Georgia, serif" font-size="15"
        fill="#c9a96e" letter-spacing="6" font-weight="400">PELLE AESTHETIC &amp; COSMETIC</text>

  <!-- Main headline -->
  <text x="108" y="210" font-family="Georgia, serif" font-size="86"
        fill="#f5efe6" font-weight="700" font-style="italic">Pelle</text>
  <text x="108" y="305" font-family="Georgia, serif" font-size="86"
        fill="#c9a96e" font-weight="700" font-style="italic">Aesthetic</text>
  <text x="108" y="395" font-family="Georgia, serif" font-size="52"
        fill="#f5efe6" font-weight="400">&amp; Cosmetic</text>

  <!-- Divider rule -->
  <rect x="108" y="425" width="560" height="1" fill="#c9a96e" opacity="0.4"/>

  <!-- Subtext -->
  <text x="108" y="462" font-family="Arial, sans-serif" font-size="20"
        fill="#c9a96e" letter-spacing="2">Dr. Tasneem Elahi · Cosmetologist</text>
  <text x="108" y="494" font-family="Arial, sans-serif" font-size="18"
        fill="#f5efe6" opacity="0.7" letter-spacing="1">30+ Years Experience · Islamabad, Pakistan</text>

  <!-- Trust pills -->
  <rect x="108" y="532" width="185" height="36" rx="2" fill="#c9a96e" opacity="0.12"/>
  <text x="200" y="556" font-family="Arial, sans-serif" font-size="13" fill="#c9a96e"
        text-anchor="middle" letter-spacing="1">COSMETOLOGIST</text>

  <rect x="304" y="532" width="185" height="36" rx="2" fill="#c9a96e" opacity="0.12"/>
  <text x="396" y="556" font-family="Arial, sans-serif" font-size="13" fill="#c9a96e"
        text-anchor="middle" letter-spacing="1">5,000+ PATIENTS</text>

  <rect x="500" y="532" width="185" height="36" rx="2" fill="#c9a96e" opacity="0.12"/>
  <text x="592" y="556" font-family="Arial, sans-serif" font-size="13" fill="#c9a96e"
        text-anchor="middle" letter-spacing="1">100% PRIVATE</text>

  <!-- Right panel content -->
  <text x="910" y="200" font-family="Georgia, serif" font-size="14"
        fill="#c9a96e" letter-spacing="4" text-anchor="middle">TREATMENTS</text>
  <rect x="840" y="215" width="140" height="1" fill="#c9a96e" opacity="0.3"/>

  <text x="910" y="265" font-family="Arial, sans-serif" font-size="17"
        fill="#f5efe6" opacity="0.85" text-anchor="middle">Cosmetic Surgery</text>
  <text x="910" y="300" font-family="Arial, sans-serif" font-size="17"
        fill="#f5efe6" opacity="0.85" text-anchor="middle">Hair Transplant</text>
  <text x="910" y="335" font-family="Arial, sans-serif" font-size="17"
        fill="#f5efe6" opacity="0.85" text-anchor="middle">Laser Skincare</text>
  <text x="910" y="370" font-family="Arial, sans-serif" font-size="17"
        fill="#f5efe6" opacity="0.85" text-anchor="middle">Injectables</text>
  <text x="910" y="405" font-family="Arial, sans-serif" font-size="17"
        fill="#f5efe6" opacity="0.85" text-anchor="middle">Dermatology</text>
  <text x="910" y="440" font-family="Arial, sans-serif" font-size="17"
        fill="#f5efe6" opacity="0.85" text-anchor="middle">Breast Surgery</text>

  <rect x="840" y="465" width="140" height="1" fill="#c9a96e" opacity="0.3"/>
  <text x="910" y="495" font-family="Arial, sans-serif" font-size="14"
        fill="#c9a96e" text-anchor="middle" letter-spacing="1">pelleaesthetic.pk</text>
  <text x="910" y="520" font-family="Arial, sans-serif" font-size="13"
        fill="#f5efe6" opacity="0.5" text-anchor="middle">I-8, Islamabad · Mon–Sat 3–8 PM</text>
</svg>
`;

const svgBuffer = Buffer.from(svg);

sharp(svgBuffer)
  .jpeg({ quality: 92 })
  .toFile(outPath)
  .then(() => console.log(`✅ OG image saved → ${outPath}`))
  .catch((err) => {
    console.error("❌ Error generating OG image:", err.message);
    process.exit(1);
  });
