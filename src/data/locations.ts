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
    metaTitle: "Skin & Aesthetic Clinic near DHA Islamabad | Dr. Tasneem Elahi — Pelle",
    metaDescription:
      "Skin treatments, laser hair removal, HydraFacial, Botox, fillers, hair transplant and cosmetic surgery for DHA Islamabad residents — about 20 minutes from our I-8 clinic. Book on WhatsApp.",
    keywords:
      "cosmetic surgery DHA Islamabad, botox DHA Islamabad, laser treatment DHA, aesthetic clinic DHA, rhinoplasty DHA Islamabad, fillers DHA, dr tasneem elahi DHA",
    h1: "Skin & Aesthetic Clinic near DHA Islamabad",
    intro: [
      "Pelle Aesthetic & Cosmetic sees many patients from DHA Islamabad (Phases 1–5). The most common requests from DHA are pigmentation and melasma treatment, laser hair removal, HydraFacial, anti-ageing injectables and hair transplant. Every treatment is planned by Dr. Tasneem Elahi, a cosmetologist with more than 30 years of experience.",
      "From DHA Phase 2 the drive to our clinic in I-8/3 takes around 18–22 minutes via Islamabad Expressway and Faizabad. Appointments are private and one-to-one, Monday to Saturday from 3:00 PM to 8:00 PM, and you can send questions or photos on WhatsApp before you visit.",
    ],
    lifestyle: "DHA",
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
    metaTitle: "Skin & Aesthetic Clinic near Bahria Town Islamabad | Dr. Tasneem Elahi — Pelle",
    metaDescription:
      "Skin specialist treatments, laser hair removal, HydraFacial, Botox, hair transplant and cosmetic surgery for Bahria Town residents — about 25–30 minutes from our I-8 clinic.",
    keywords:
      "cosmetic surgery Bahria Town Islamabad, botox Bahria Town, laser treatment Bahria Town, aesthetic clinic Bahria Town, fillers Bahria Town Islamabad, hair transplant Bahria Town",
    h1: "Skin & Aesthetic Clinic near Bahria Town Islamabad",
    intro: [
      "Patients from Bahria Town (Phases 1–8) regularly visit Pelle Aesthetic & Cosmetic for acne and acne-scar treatment, skin brightening, laser hair removal, hair transplant and cosmetic surgery such as rhinoplasty and liposuction. Dr. Tasneem Elahi examines every patient personally and explains the options, recovery and expected results honestly.",
      "Our clinic at Plot 14, Street 32, I-8/3 is about 25–30 minutes from Bahria Town via Islamabad Expressway. To save a trip, you can start with a WhatsApp consultation and then book an in-person appointment between 3:00 PM and 8:00 PM, Monday to Saturday.",
    ],
    lifestyle: "Bahria Town",
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
    metaTitle: "Skin & Aesthetic Clinic near F-6 & F-7 Islamabad | Dr. Tasneem Elahi — Pelle",
    metaDescription:
      "Patients from F-6 and F-7 visit Pelle in I-8 for skin treatment, Botox, fillers, laser, HydraFacial and cosmetic surgery with Dr. Tasneem Elahi. Book on WhatsApp.",
    keywords:
      "cosmetic clinic F-6 Islamabad, aesthetic treatment F-7 Islamabad, botox F-6 F-7, facelift Islamabad blue area, cosmetic surgery F-7, laser treatment F-6 Islamabad",
    h1: "Skin & Aesthetic Clinic near F-6 & F-7 Islamabad",
    intro: [
      "F-6 and F-7, including Super Market and Jinnah Super, are among Islamabad's oldest sectors, and many families from here have consulted Dr. Tasneem Elahi for years. Patients from F-6/F-7 most often ask about natural-looking anti-ageing — Botox, fillers, Profhilo and HIFU — along with pigmentation treatment and HydraFacial.",
      "The drive from F-6/F-7 to our clinic in I-8/3 takes about 15–20 minutes via Srinagar Highway (Kashmir Highway). Consultations are by appointment, Monday to Saturday from 3:00 PM to 8:00 PM, and you can message us on WhatsApp in Urdu or English.",
    ],
    lifestyle: "F-6 and F-7",
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
    metaTitle: "Skin & Aesthetic Clinic near E-11 & F-10 Islamabad | Dr. Tasneem Elahi — Pelle",
    metaDescription:
      "Laser hair removal, HydraFacial, acne and pigmentation treatment, Botox, hair transplant and cosmetic surgery for E-11 and F-10 residents. Clinic in I-8, Islamabad.",
    keywords:
      "cosmetic clinic E-11 Islamabad, laser treatment F-10 Islamabad, botox E-11, aesthetic clinic F-10, HIFU Islamabad E-11, PRP treatment F-10, skin care E-11 F-10",
    h1: "Skin & Aesthetic Clinic near E-11 & F-10 Islamabad",
    intro: [
      "Many of our patients from E-11 and F-10 are working professionals and students who come for acne and acne-scar treatment, laser hair removal, HydraFacial and hair-loss treatment, as well as Botox and fillers. Dr. Tasneem Elahi plans each treatment around your skin type and schedule.",
      "From E-11 and F-10 our clinic in I-8/3 is about 15–20 minutes away via Srinagar Highway. Evening appointments (3:00 PM – 8:00 PM, Monday to Saturday) make it easy to visit after work or classes.",
    ],
    lifestyle: "E-11 and F-10",
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
    metaTitle: "Skin & Aesthetic Clinic near Gulberg Greens Islamabad | Dr. Tasneem Elahi — Pelle",
    metaDescription:
      "Skin treatments, laser, HydraFacial, Botox, fillers, hair transplant and cosmetic surgery for Gulberg Greens residents — about 20–25 minutes from our I-8 clinic.",
    keywords:
      "cosmetic surgery Gulberg Greens Islamabad, botox Gulberg Greens, laser treatment Gulberg Islamabad, aesthetic clinic Gulberg, fillers Gulberg Greens, luxury cosmetic clinic Islamabad",
    h1: "Skin & Aesthetic Clinic near Gulberg Greens Islamabad",
    intro: [
      "Residents of Gulberg Greens and Gulberg Residencia visit Pelle Aesthetic & Cosmetic for skin brightening, pigmentation treatment, laser hair removal, anti-ageing injectables and cosmetic surgery. Every consultation is private and one-to-one with Dr. Tasneem Elahi.",
      "The drive from Gulberg Greens to our clinic in I-8/3 normally takes 20–25 minutes via Islamabad Expressway. You can send photos and questions on WhatsApp first, then book an appointment between 3:00 PM and 8:00 PM, Monday to Saturday.",
    ],
    lifestyle: "Gulberg Greens",
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
