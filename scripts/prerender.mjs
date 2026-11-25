/**
 * Pelle Aesthetic & Cosmetic — Static Prerender Script
 * Uses Playwright to crawl every route after `vite build`,
 * saves fully-rendered HTML to dist/ so Ctrl+U shows real content.
 *
 * Usage:  npm run build:prerender
 * (Runs: vite build && node scripts/prerender.mjs)
 */

import { chromium } from "playwright-chromium";
import { createServer as httpCreateServer } from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const PORT = 4173;

// ── All static routes to prerender ────────────────────────────────────────────
const STATIC_ROUTES = ["/", "/welfare", "/sitemap"];

const CATEGORY_SLUGS = [
  "cosmetic-surgery",
  "cosmetic-injectables",
  "hair-transplant",
  "laser-skincare",
  "dermatology",
  "breast-surgery",
  "intimate-wellness",
];

const TREATMENT_SLUGS = {
  "cosmetic-surgery": [
    "rhinoplasty", "facelift", "blepharoplasty", "liposuction",
    "tummy-tuck", "bbl", "ear-reshaping", "brow-lift",
  ],
  "cosmetic-injectables": [
    "botox", "dermal-fillers", "lip-fillers", "profhilo",
    "prp-therapy", "glutathione-injections",
  ],
  "hair-transplant": [
    "fue-hair-transplant", "dhi-hair-transplant", "beard-hair-transplant",
    "prp-hair-treatment", "female-hair-transplant",
  ],
  "laser-skincare": [
    "pico-laser", "fractional-co2", "hydrafacial", "laser-hair-removal",
    "hifu", "chemical-peels", "microneedling",
  ],
  dermatology: [
    "acne-treatment", "melasma-treatment", "vitiligo-treatment",
    "psoriasis-treatment", "keloid-treatment",
  ],
  "breast-surgery": [
    "breast-augmentation", "breast-reduction", "breast-lift",
    "gynecomastia", "nipple-surgery",
  ],
  "intimate-wellness": [
    "labiaplasty", "vaginal-tightening", "hymenoplasty", "p-shot", "penile-fillers",
  ],
};

function getAllRoutes() {
  const routes = [...STATIC_ROUTES];
  CATEGORY_SLUGS.forEach((cat) => {
    routes.push(`/category/${cat}`);
    (TREATMENT_SLUGS[cat] || []).forEach((t) => {
      routes.push(`/category/${cat}/${t}`);
    });
  });
  return routes;
}

function routeToFilePath(route) {
  if (route === "/") return path.join(DIST, "index.html");
  const cleaned = route.replace(/^\//, "").replace(/\/$/, "");
  const dir = path.join(DIST, cleaned);
  fs.mkdirSync(dir, { recursive: true });
  return path.join(dir, "index.html");
}

// Simple static file server for dist/
function startServer() {
  const mimeTypes = {
    ".html": "text/html; charset=utf-8",
    ".js": "application/javascript",
    ".mjs": "application/javascript",
    ".css": "text/css",
    ".webp": "image/webp",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".json": "application/json",
    ".xml": "application/xml",
    ".txt": "text/plain",
    ".woff2": "font/woff2",
    ".woff": "font/woff",
  };

  const server = httpCreateServer((req, res) => {
    // Decode URL and strip query strings
    let urlPath = decodeURIComponent(req.url.split("?")[0]);

    // Try the exact path first
    let filePath = path.join(DIST, urlPath);

    // If path has no extension, try index.html inside it (SPA routing)
    if (!path.extname(filePath)) {
      const asDir = path.join(filePath, "index.html");
      if (fs.existsSync(asDir)) {
        filePath = asDir;
      } else {
        // SPA fallback — serve root index.html
        filePath = path.join(DIST, "index.html");
      }
    }

    if (!fs.existsSync(filePath)) {
      filePath = path.join(DIST, "index.html");
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || "application/octet-stream";
    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "no-cache");
    fs.createReadStream(filePath).pipe(res);
  });

  return new Promise((resolve) => {
    server.listen(PORT, () => {
      console.log(`📡 Serving dist/ at http://localhost:${PORT}\n`);
      resolve(server);
    });
  });
}

async function prerender() {
  console.log("=".repeat(65));
  console.log(" Pelle Aesthetic — Static Prerender");
  console.log("=".repeat(65));

  if (!fs.existsSync(DIST)) {
    console.error("❌ dist/ not found. Run `npm run build` first.");
    process.exit(1);
  }

  const server = await startServer();
  const browser = await chromium.launch({ args: ["--no-sandbox"] });
  const routes = getAllRoutes();
  let done = 0;
  let failed = 0;

  for (const route of routes) {
    try {
      const page = await browser.newPage();

      // Block images/fonts to speed up rendering (we only need the HTML)
      await page.route(/\.(webp|png|jpg|jpeg|gif|woff2?|ttf)$/, (r) => r.abort());

      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: "networkidle",
        timeout: 20000,
      });

      // Wait for React to render meaningful content
      await page.waitForFunction(
        () => {
          const root = document.getElementById("root");
          return root && root.childElementCount > 0 && document.querySelector("h1");
        },
        { timeout: 12000 }
      ).catch(() => {});

      // Short extra pause for animations/lazy hydration
      await page.waitForTimeout(300);

      const html = await page.content();
      const filePath = routeToFilePath(route);
      fs.writeFileSync(filePath, html, "utf-8");
      done++;
      console.log(`  ✅ [${done}/${routes.length}] ${route}`);
      await page.close();
    } catch (err) {
      failed++;
      console.warn(`  ⚠️  [FAILED] ${route} — ${err.message?.slice(0, 80)}`);
    }
  }

  await browser.close();
  server.close();

  console.log("\n" + "=".repeat(65));
  console.log(` 🎉 Prerender complete!`);
  console.log(`    ✅ Success: ${done}  ❌ Failed: ${failed}`);
  console.log(`    Output: ./dist/`);
  console.log("=".repeat(65));

  if (failed > 0) process.exit(1);
}

prerender().catch((e) => {
  console.error("❌ Fatal prerender error:", e);
  process.exit(1);
});
