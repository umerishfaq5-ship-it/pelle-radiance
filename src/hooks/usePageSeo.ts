import { useEffect } from "react";

interface PageSeoOptions {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  /** Override og:image and twitter:image for this specific page */
  ogImage?: string;
  /** Alt text for the og:image */
  ogImageAlt?: string;
  /** Set to true to add noindex,nofollow robots meta for this page */
  noIndex?: boolean;
}

const BASE_DOMAIN = "https://drtasneemshakir.com";
const DEFAULT_OG_IMAGE = "https://drtasneemshakir.com/og-image.webp";
const DEFAULT_OG_IMAGE_ALT = "Pelle Aesthetic & Cosmetic — Dr. Tasneem Elahi, Islamabad";

// The host serves every prerendered page as a folder and 301-redirects
// "/path" to "/path/", so canonicals must use the trailing-slash form.
const withSlash = (p: string) => (p.endsWith("/") ? p : `${p}/`);

export function usePageSeo({
  title,
  description,
  canonicalPath: rawCanonicalPath,
  keywords,
  ogImage,
  ogImageAlt,
  noIndex = false,
}: PageSeoOptions) {
  const canonicalPath = rawCanonicalPath ? withSlash(rawCanonicalPath) : undefined;
  useEffect(() => {
    // --- Title ---
    const prevTitle = document.title;
    document.title = title;

    // --- Meta description ---
    let descEl = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    const prevDesc = descEl?.content ?? "";
    if (!descEl) {
      descEl = document.createElement("meta");
      descEl.name = "description";
      document.head.appendChild(descEl);
    }
    descEl.content = description;

    // --- Meta keywords ---
    let kwEl = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null;
    const prevKw = kwEl?.content ?? "";
    if (keywords) {
      if (!kwEl) {
        kwEl = document.createElement("meta");
        kwEl.name = "keywords";
        document.head.appendChild(kwEl);
      }
      kwEl.content = keywords;
    }

    // --- Robots (noindex support) ---
    let robotsEl = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    const prevRobots = robotsEl?.content ?? "";
    if (!robotsEl) {
      robotsEl = document.createElement("meta");
      robotsEl.name = "robots";
      document.head.appendChild(robotsEl);
    }
    robotsEl.content = noIndex ? "noindex, nofollow" : "index, follow";

    // --- Canonical ---
    let canonEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const prevCanon = canonEl?.href ?? "";
    if (canonicalPath) {
      if (!canonEl) {
        canonEl = document.createElement("link");
        canonEl.rel = "canonical";
        document.head.appendChild(canonEl);
      }
      canonEl.href = `${BASE_DOMAIN}${canonicalPath}`;
    }

    // --- OG tags — create if missing, then update ---
    const getOrCreate = (selector: string, attrPair: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        const [attrName, attrVal] = attrPair.split("=");
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      return el;
    };

    const resolvedImage    = ogImage    ? `${BASE_DOMAIN}${ogImage}`  : DEFAULT_OG_IMAGE;
    const resolvedImageAlt = ogImageAlt ?? DEFAULT_OG_IMAGE_ALT;

    const ogTitle    = getOrCreate('meta[property="og:title"]',       'property=og:title');
    const ogDesc     = getOrCreate('meta[property="og:description"]', 'property=og:description');
    const ogUrl      = getOrCreate('meta[property="og:url"]',         'property=og:url');
    const ogImg      = getOrCreate('meta[property="og:image"]',       'property=og:image');
    const ogImgAlt   = getOrCreate('meta[property="og:image:alt"]',   'property=og:image:alt');

    const prevOgTitle  = ogTitle.content;
    const prevOgDesc   = ogDesc.content;
    const prevOgUrl    = ogUrl.content;
    const prevOgImg    = ogImg.content;
    const prevOgImgAlt = ogImgAlt.content;

    ogTitle.content  = title;
    ogDesc.content   = description;
    if (canonicalPath) ogUrl.content = `${BASE_DOMAIN}${canonicalPath}`;
    ogImg.content    = resolvedImage;
    ogImgAlt.content = resolvedImageAlt;

    // --- Twitter Card tags ---
    const twTitle    = getOrCreate('meta[name="twitter:title"]',       'name=twitter:title');
    const twDesc     = getOrCreate('meta[name="twitter:description"]', 'name=twitter:description');
    const twImg      = getOrCreate('meta[name="twitter:image"]',       'name=twitter:image');
    const twImgAlt   = getOrCreate('meta[name="twitter:image:alt"]',   'name=twitter:image:alt');

    const prevTwTitle  = twTitle.content;
    const prevTwDesc   = twDesc.content;
    const prevTwImg    = twImg.content;
    const prevTwImgAlt = twImgAlt.content;

    twTitle.content  = title;
    twDesc.content   = description;
    twImg.content    = resolvedImage;
    twImgAlt.content = resolvedImageAlt;

    // Cleanup — restore homepage defaults on unmount
    return () => {
      document.title = prevTitle;
      if (descEl)              descEl.content    = prevDesc;
      if (kwEl && prevKw)      kwEl.content      = prevKw;
      if (robotsEl && prevRobots) robotsEl.content = prevRobots;
      if (canonEl)             canonEl.href      = prevCanon;
      if (ogTitle)             ogTitle.content   = prevOgTitle;
      if (ogDesc)              ogDesc.content    = prevOgDesc;
      if (ogUrl)               ogUrl.content     = prevOgUrl;
      if (ogImg)               ogImg.content     = prevOgImg;
      if (ogImgAlt)            ogImgAlt.content  = prevOgImgAlt;
      if (twTitle)             twTitle.content   = prevTwTitle;
      if (twDesc)              twDesc.content    = prevTwDesc;
      if (twImg)               twImg.content     = prevTwImg;
      if (twImgAlt)            twImgAlt.content  = prevTwImgAlt;
    };
  }, [title, description, canonicalPath, keywords, ogImage, ogImageAlt, noIndex]);
}
