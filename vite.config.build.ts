import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// @ts-ignore — vite-plugin-prerender has no TS types
import { PrerenderSPAPlugin } from "vite-plugin-prerender";
// @ts-ignore
import PuppeteerRenderer from "vite-plugin-prerender/dist/renderers/puppeteer";

// All routes to pre-render at build time for full static HTML indexing by Googlebot
const ROUTES_TO_PRERENDER = [
  // Core pages
  "/",
  "/sitemap",
  "/welfare",
  "/insights",

  // Category pages
  "/category/cosmetic-surgery",
  "/category/cosmetic-injectables",
  "/category/breast-surgery",
  "/category/dermatology",
  "/category/hair-transplant",
  "/category/intimate-wellness",
  "/category/laser-skincare",

  // Cosmetic Surgery treatments
  "/category/cosmetic-surgery/rhinoplasty",
  "/category/cosmetic-surgery/facelift",
  "/category/cosmetic-surgery/blepharoplasty",
  "/category/cosmetic-surgery/liposuction",
  "/category/cosmetic-surgery/tummy-tuck",
  "/category/cosmetic-surgery/bbl",
  "/category/cosmetic-surgery/ear-reshaping",
  "/category/cosmetic-surgery/brow-lift",

  // Cosmetic Injectables
  "/category/cosmetic-injectables/botox",
  "/category/cosmetic-injectables/dermal-fillers",
  "/category/cosmetic-injectables/lip-fillers",
  "/category/cosmetic-injectables/profhilo",
  "/category/cosmetic-injectables/prp-therapy",
  "/category/cosmetic-injectables/glutathione-injections",

  // Breast Surgery
  "/category/breast-surgery/breast-augmentation",
  "/category/breast-surgery/breast-reduction",
  "/category/breast-surgery/breast-lift",
  "/category/breast-surgery/gynecomastia",
  "/category/breast-surgery/nipple-surgery",

  // Dermatology
  "/category/dermatology/acne-treatment",
  "/category/dermatology/melasma-treatment",
  "/category/dermatology/vitiligo-treatment",
  "/category/dermatology/psoriasis-treatment",
  "/category/dermatology/keloid-treatment",

  // Hair Transplant
  "/category/hair-transplant/fue-hair-transplant",
  "/category/hair-transplant/dhi-hair-transplant",
  "/category/hair-transplant/beard-hair-transplant",
  "/category/hair-transplant/prp-hair-treatment",
  "/category/hair-transplant/female-hair-transplant",

  // Intimate Wellness
  "/category/intimate-wellness/labiaplasty",
  "/category/intimate-wellness/vaginal-tightening",
  "/category/intimate-wellness/hymenoplasty",
  "/category/intimate-wellness/p-shot",
  "/category/intimate-wellness/penile-fillers",

  // Laser & Skincare
  "/category/laser-skincare/pico-laser",
  "/category/laser-skincare/fractional-co2",
  "/category/laser-skincare/hydrafacial",
  "/category/laser-skincare/laser-hair-removal",
  "/category/laser-skincare/hifu",
  "/category/laser-skincare/chemical-peels",
  "/category/laser-skincare/microneedling",

  // Location landing pages
  "/location/dha-islamabad",
  "/location/bahria-town-islamabad",
  "/location/f6-f7-islamabad",
  "/location/e11-f10-islamabad",
  "/location/gulberg-greens-islamabad",

  // Blog posts
  "/insights/islamabad-air-pollution-skin-aging-melasma-laser",
  "/insights/2026-cosmetic-surgery-prices-pakistan-vs-global",
  "/insights/natural-botox-replacing-heavy-fillers-islamabad",
];

// Used only for production SSG. Run with: vite build --config vite.config.build.ts
export default defineConfig({
  plugins: [
    react(),
    PrerenderSPAPlugin({
      staticDir: path.resolve(__dirname, "dist"),
      routes: ROUTES_TO_PRERENDER,
      renderer: new PuppeteerRenderer({
        renderAfterTime: 2000,
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      }),
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
});
