import { sectorLocations } from "./sectors";

export interface LocationData {
  slug: string;
  name: string; // e.g. "DHA Islamabad"
  shortName: string; // e.g. "DHA"
  sector: string; // e.g. "DHA Phases 2 & 5"
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  h1: string;
  intro: string[];
  lifestyle: string;
  landmark: string;
  commuteNote: string;
  audience: string;
  schema: {
    serviceArea: string;
    addressLocality: string;
  };
  /** Slugs of neighbouring areas, linked from the page */
  nearby?: string[];
  /** Area-specific questions, rendered and emitted as FAQPage schema */
  faqs?: { q: string; a: string }[];
}

const featuredLocations: LocationData[] = [
  {
    slug: "dha-islamabad",
    name: "DHA Islamabad",
    shortName: "DHA",
    sector: "DHA Phases 2 & 5",
    metaTitle: "Cosmetic Surgery & Aesthetics in DHA Islamabad | Dr. Tasneem Elahi — Pelle Aesthetic",
    metaDescription:
      "Premium cosmetic surgery, Botox, fillers, and laser skincare for DHA Islamabad residents. Led by Dr. Tasneem Elahi (Cosmetologist, 30+ years). Book a VIP consultation via WhatsApp.",
    keywords:
      "cosmetic surgery DHA Islamabad, botox DHA Islamabad, laser treatment DHA, aesthetic clinic DHA, rhinoplasty DHA Islamabad, fillers DHA, dr tasneem elahi DHA",
    h1: "Elite Cosmetic Surgery & Aesthetics in DHA Islamabad",
    intro: [
      "DHA Islamabad — spanning Phases 2 through 5 — is home to a discerning community that expects the very highest standard in every facet of life. The carefully curated villas, manicured boulevards, and private club culture of this gated enclave reflect a lifestyle built on understatement and quality. At Pelle Aesthetic & Cosmetic, we understand that true refinement is never loud. Our treatments are designed to enhance what is already there — producing results so natural that only the mirror knows.",
      "For DHA residents seeking cosmetic surgery, advanced injectables, or medical-grade laser skincare, the journey to Sector I-8 is a brief, straight drive along the Islamabad Expressway — typically under 20 minutes from Phase 2. Every appointment at Pelle is private, appointment-only, and conducted one-to-one with Dr. Tasneem Elahi, ensuring the complete discretion that our DHA clientele rightfully demand.",
    ],
    lifestyle: "gated-community privacy, villa-district living, club culture",
    landmark: "DHA Club & Golf Course",
    commuteNote: "Approximately 18–22 minutes via Islamabad Expressway from DHA Phase 2",
    audience: "DHA Islamabad residents in Phases 2 & 5",
    schema: {
      serviceArea: "DHA Islamabad, Phases 2 & 5",
      addressLocality: "DHA Islamabad",
    },
  },
  {
    slug: "bahria-town-islamabad",
    name: "Bahria Town Islamabad",
    shortName: "Bahria Town",
    sector: "Bahria Town Phases 7 & 8",
    metaTitle: "Cosmetic Surgery & Aesthetics in Bahria Town Islamabad | Dr. Tasneem Elahi — Pelle Aesthetic",
    metaDescription:
      "Premium cosmetic clinic serving Bahria Town Islamabad (Phases 7 & 8). Expert cosmetic surgery, Botox, PICO Laser & hair transplant with Dr. Tasneem Elahi. VIP consultation available.",
    keywords:
      "cosmetic surgery Bahria Town Islamabad, botox Bahria Town, laser treatment Bahria Town, aesthetic clinic Bahria Town, fillers Bahria Town Islamabad, hair transplant Bahria Town",
    h1: "Luxury Cosmetic Surgery & Skin Treatments in Bahria Town Islamabad",
    intro: [
      "Bahria Town Islamabad — with its iconic landmarks, elite schooling, and secure, self-contained community infrastructure — has become one of Pakistan's most aspirational addresses. Residents of Phases 7 and 8 are accustomed to international-standard services, whether in dining, fitness, or professional healthcare. At Pelle Aesthetic & Cosmetic, we bring that same world-class standard to cosmetic medicine: evidence-based treatments, premium-grade products, and the exacting attention to detail that Bahria Town residents expect.",
      "Our clinic at Plot 14, Street 32, Sector I-8/3 is accessible from Bahria Town in approximately 25–30 minutes via the main expressway. The journey is straightforward, and the experience that awaits — private, unhurried, and conducted personally by Dr. Tasneem Elahi — makes every visit an investment in lasting confidence rather than a clinical transaction.",
    ],
    lifestyle: "landmark-rich gated community, international lifestyle standards",
    landmark: "Bahria Grand Mosque & Eiffel Tower Replica",
    commuteNote: "Approximately 25–30 minutes via main Islamabad expressway from Phase 7",
    audience: "Bahria Town Islamabad residents in Phases 7 & 8",
    schema: {
      serviceArea: "Bahria Town Islamabad, Phases 7 & 8",
      addressLocality: "Bahria Town Islamabad",
    },
  },
  {
    slug: "f6-f7-islamabad",
    name: "F-6 & F-7 Islamabad",
    shortName: "F-6/F-7",
    sector: "Sectors F-6 & F-7",
    metaTitle: "Cosmetic Clinic for F-6 & F-7 Islamabad | Dr. Tasneem Elahi — Pelle Aesthetic",
    metaDescription:
      "Islamabad's old-money and diplomatic enclave clientele trust Pelle Aesthetic for cosmetic surgery, Botox, and laser treatments. Led by Dr. Tasneem Elahi. Book a private consultation.",
    keywords:
      "cosmetic clinic F-6 Islamabad, aesthetic treatment F-7 Islamabad, botox F-6 F-7, facelift Islamabad blue area, cosmetic surgery F-7, laser treatment F-6 Islamabad",
    h1: "Refined Cosmetic Surgery & Aesthetics for F-6 & F-7 Islamabad",
    intro: [
      "Sectors F-6 and F-7 occupy a unique place in Islamabad's social fabric — the preferred address of senior diplomats, established business families, and old-money professionals who have shaped Pakistan's capital for generations. In this world, image is cultivated quietly, and the most trusted services are recommended only by word of mouth. Pelle Aesthetic & Cosmetic has been that trusted recommendation for decades, offering treatments that are measured, medically sound, and entirely free from the overstatement that characterises lesser clinics.",
      "From the tree-lined streets of F-7/2 to the consular residences of F-6, our clinic in Sector I-8/3 is a short 10–12 minute drive — through the city's most familiar boulevards. Our consultations are private, appointment-only, and conducted personally by Dr. Tasneem Elahi, whose 30+ years of practice has made Pelle the clinic of quiet confidence for Islamabad's most established families.",
    ],
    lifestyle: "diplomatic enclave, old-money professionals, established Islamabad families",
    landmark: "Margalla Hills view from F-7 Markaz",
    commuteNote: "10–12 minutes via Khayaban-e-Iqbal from F-7 Markaz",
    audience: "Residents of F-6 and F-7 Islamabad",
    schema: {
      serviceArea: "F-6 & F-7 Islamabad",
      addressLocality: "Islamabad",
    },
  },
  {
    slug: "e11-f10-islamabad",
    name: "E-11 & F-10 Islamabad",
    shortName: "E-11/F-10",
    sector: "Sectors E-11 & F-10",
    metaTitle: "Cosmetic Surgery & Laser Treatments in E-11 & F-10 Islamabad | Pelle Aesthetic",
    metaDescription:
      "Serving modern professionals in E-11 and F-10 Islamabad. Advanced cosmetic surgery, Botox, HIFU, and PICO Laser at Pelle Aesthetic. Dr. Tasneem Elahi, 30+ years experience. Book via WhatsApp.",
    keywords:
      "cosmetic clinic E-11 Islamabad, laser treatment F-10 Islamabad, botox E-11, aesthetic clinic F-10, HIFU Islamabad E-11, PRP treatment F-10, skin care E-11 F-10",
    h1: "Advanced Cosmetic Surgery & Skin Treatments for E-11 & F-10 Islamabad",
    intro: [
      "Sectors E-11 and F-10 represent modern, professional Islamabad — a community of tech executives, surgeons, architects, and high-achieving families who understand the value of science-backed results. This demographic doesn't want cosmetic enhancements that are visible; they want precise, technically excellent outcomes that look entirely natural. That exacting standard is exactly what Dr. Tasneem Elahi and the team at Pelle Aesthetic & Cosmetic have delivered for over three decades.",
      "Whether you are considering a rhinoplasty to refine a long-discussed feature, a PICO laser course to address pigmentation, or a Profhilo skin booster to maintain your skin's luminosity through a demanding schedule, our clinic is a straightforward 12–15 minute drive from E-11 via Srinagar Highway. Every aspect of your visit — from booking to aftercare — is handled with absolute discretion and clinical precision.",
    ],
    lifestyle: "modern professionals, tech executives, science-backed wellness culture",
    landmark: "E-11 Supercorridor & F-10 Markaz",
    commuteNote: "12–15 minutes via Srinagar Highway from E-11",
    audience: "Professionals and families in E-11 and F-10 Islamabad",
    schema: {
      serviceArea: "E-11 & F-10 Islamabad",
      addressLocality: "Islamabad",
    },
  },
  {
    slug: "gulberg-greens-islamabad",
    name: "Gulberg Greens Islamabad",
    shortName: "Gulberg Greens",
    sector: "Gulberg Greens",
    metaTitle: "Cosmetic Surgery & Aesthetics for Gulberg Greens Islamabad | Pelle Aesthetic",
    metaDescription:
      "Premium cosmetic treatments for Gulberg Greens Islamabad's villa and farmhouse elite. Cosmetic surgery, Botox, fillers & laser by Dr. Tasneem Elahi. Private appointments only.",
    keywords:
      "cosmetic surgery Gulberg Greens Islamabad, botox Gulberg Greens, laser treatment Gulberg Islamabad, aesthetic clinic Gulberg, fillers Gulberg Greens, luxury cosmetic clinic Islamabad",
    h1: "Exclusive Cosmetic Surgery & Aesthetic Treatments in Gulberg Greens Islamabad",
    intro: [
      "Gulberg Greens represents Islamabad's new frontier of luxury living — sprawling farmhouses, private estates, and an emerging community of ultra-high-net-worth families who value both privacy and the finest quality in everything. It is a world apart from the city's bustle, and those who call it home expect their trusted specialists to match that level of exclusivity. At Pelle Aesthetic & Cosmetic, we are proud to be the clinic of choice for Gulberg Greens residents seeking cosmetic surgery, advanced injectables, and medical-grade skin treatments that are worthy of their lifestyle.",
      "The drive from Gulberg Greens to our clinic at I-8/3 typically takes 20–25 minutes along the Islamabad Expressway — a straightforward route that belies the transformative experience that awaits. Dr. Tasneem Elahi conducts all consultations and procedures personally, in a fully private, appointment-only clinical environment where your comfort, dignity, and results are the only priorities.",
    ],
    lifestyle: "farmhouse estates, villa living, ultra-high-net-worth privacy",
    landmark: "Gulberg Greens Main Boulevard & Farmhouse District",
    commuteNote: "20–25 minutes via Islamabad Expressway",
    audience: "Gulberg Greens Islamabad villa and farmhouse residents",
    schema: {
      serviceArea: "Gulberg Greens Islamabad",
      addressLocality: "Gulberg Greens, Islamabad",
    },
  },
];

export const locations: LocationData[] = [...featuredLocations, ...sectorLocations];

export const getLocationBySlug = (slug: string): LocationData | undefined =>
  locations.find((l) => l.slug === slug);
