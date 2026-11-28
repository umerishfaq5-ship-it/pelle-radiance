import type { LocationData } from "./locations";

/**
 * Islamabad sector pages (/location/<slug>).
 *
 * Each sector has its own landmarks, route to the clinic in I-8/3 and
 * neighbouring sectors, so every page carries information specific to it
 * rather than a copy of the same text with a new name.
 * Drive times are approximate, normal-traffic estimates.
 */
type SectorSeed = {
  slug: string;
  name: string; // "G-9 Islamabad"
  shortName: string; // "G-9"
  sector: string; // "Sector G-9 (G-9/1 – G-9/4)"
  landmarks: string; // well-known places residents recognise
  route: string; // how to reach I-8/3
  minutes: string; // "8–12"
  about: string; // one sentence that is only true of this area
  nearby: string[]; // slugs of neighbouring location pages
};

const seeds: SectorSeed[] = [
  {
    slug: "i8-islamabad",
    name: "I-8 Islamabad",
    shortName: "I-8",
    sector: "Sector I-8 (I-8/1 – I-8/4)",
    landmarks: "I-8 Markaz",
    route: "The clinic is inside I-8 itself, at Plot 14, Street 32, I-8/3 — a short drive or walk from anywhere in the sector",
    minutes: "2–5",
    about:
      "I-8 is our home sector: residents of I-8/1, I-8/2, I-8/3 and I-8/4 can reach the clinic within minutes, which makes multi-session treatments such as laser, PRP and peels especially convenient.",
    nearby: ["i9-islamabad", "i10-islamabad", "h8-islamabad", "h9-islamabad"],
  },
  {
    slug: "i9-islamabad",
    name: "I-9 Islamabad",
    shortName: "I-9",
    sector: "Sector I-9 (I-9/1 – I-9/4)",
    landmarks: "I-9 Markaz and the I-9 Industrial Area",
    route: "From I-9, head east towards I-8 — the clinic in I-8/3 is in the neighbouring sector",
    minutes: "5–10",
    about:
      "Many of our I-9 patients are working professionals from the Industrial Area who book evening appointments between 3 PM and 8 PM, after office hours.",
    nearby: ["i8-islamabad", "i10-islamabad", "h9-islamabad", "g9-islamabad"],
  },
  {
    slug: "i10-islamabad",
    name: "I-10 Islamabad",
    shortName: "I-10",
    sector: "Sector I-10 (I-10/1 – I-10/4)",
    landmarks: "I-10 Markaz",
    route: "From I-10, drive east past I-9 to reach I-8/3",
    minutes: "8–12",
    about:
      "I-10 is a dense family sector, and many of our patients from I-10 come for skin concerns such as acne, melasma and pigmentation as well as hair-loss treatment.",
    nearby: ["i9-islamabad", "i11-islamabad", "i8-islamabad", "g10-islamabad"],
  },
  {
    slug: "i11-islamabad",
    name: "I-11 Islamabad",
    shortName: "I-11",
    sector: "Sector I-11 (I-11/1 – I-11/4)",
    landmarks: "the I-11 fruit and vegetable market (Sabzi Mandi)",
    route: "From I-11, travel east through I-10 and I-9 to I-8/3",
    minutes: "12–18",
    about:
      "Patients from I-11 often combine a consultation with a follow-up visit on the same trip, so we schedule assessments and treatments back-to-back where it is medically appropriate.",
    nearby: ["i10-islamabad", "i9-islamabad", "g11-islamabad", "h11-islamabad"],
  },
  {
    slug: "h8-islamabad",
    name: "H-8 Islamabad",
    shortName: "H-8",
    sector: "Sector H-8 (H-8/1 – H-8/4)",
    landmarks: "Shifa International Hospital (H-8/4)",
    route: "From H-8, cross towards I-8 — the clinic in I-8/3 sits just south of the sector",
    minutes: "5–10",
    about:
      "H-8 is home to some of Islamabad's major hospitals and educational institutions, and many of our H-8 patients are healthcare and university staff who value a private, appointment-only clinic.",
    nearby: ["i8-islamabad", "h9-islamabad", "g8-islamabad", "g7-islamabad"],
  },
  {
    slug: "h9-islamabad",
    name: "H-9 Islamabad",
    shortName: "H-9",
    sector: "Sector H-9 (H-9/1 – H-9/4)",
    landmarks: "NUML and the H-9 Sunday Bazaar",
    route: "From H-9, head south-east to I-8/3",
    minutes: "6–10",
    about:
      "Students and young professionals from H-9 commonly visit us for acne scar treatment, laser hair removal and HydraFacial.",
    nearby: ["i8-islamabad", "i9-islamabad", "h8-islamabad", "g9-islamabad"],
  },
  {
    slug: "h11-islamabad",
    name: "H-11 Islamabad",
    shortName: "H-11",
    sector: "Sector H-11",
    landmarks: "the H-11 university and institutional area",
    route: "From H-11, travel east along Srinagar Highway and turn towards I-8",
    minutes: "12–18",
    about:
      "H-11 and the surrounding institutional area are home to many students and faculty, who often come to us for skin and hair treatments that fit around a study or teaching schedule.",
    nearby: ["h9-islamabad", "i11-islamabad", "g11-islamabad", "g13-islamabad"],
  },
  {
    slug: "g6-islamabad",
    name: "G-6 Islamabad",
    shortName: "G-6",
    sector: "Sector G-6 (G-6/1 – G-6/4)",
    landmarks: "Aabpara Market and Melody Market",
    route: "From G-6, drive south via Srinagar Highway (Kashmir Highway) towards I-8",
    minutes: "12–18",
    about:
      "G-6 is one of Islamabad's oldest sectors, and many of our patients from G-6 are long-time Islamabad families who have trusted Dr. Tasneem Elahi for years.",
    nearby: ["g7-islamabad", "f6-f7-islamabad", "blue-area-islamabad", "g8-islamabad"],
  },
  {
    slug: "g7-islamabad",
    name: "G-7 Islamabad",
    shortName: "G-7",
    sector: "Sector G-7 (G-7/1 – G-7/4)",
    landmarks: "Sitara Market",
    route: "From G-7, head south across Srinagar Highway towards H-8 and I-8",
    minutes: "10–15",
    about:
      "Residents of G-7 often visit us for non-surgical options first — Botox, fillers and skin boosters — before deciding whether a surgical procedure is right for them.",
    nearby: ["g6-islamabad", "g8-islamabad", "h8-islamabad", "f6-f7-islamabad"],
  },
  {
    slug: "g8-islamabad",
    name: "G-8 Islamabad",
    shortName: "G-8",
    sector: "Sector G-8 (G-8/1 – G-8/4)",
    landmarks: "PIMS Hospital and G-8 Markaz",
    route: "From G-8, cross Srinagar Highway and continue south through H-8 to I-8/3",
    minutes: "8–12",
    about:
      "Because G-8 is close to I-8, patients from G-8 find it easy to attend follow-up visits after procedures such as rhinoplasty, liposuction or hair transplant.",
    nearby: ["g7-islamabad", "g9-islamabad", "h8-islamabad", "f8-islamabad"],
  },
  {
    slug: "g9-islamabad",
    name: "G-9 Islamabad",
    shortName: "G-9",
    sector: "Sector G-9 (G-9/1 – G-9/4)",
    landmarks: "Karachi Company (G-9 Markaz)",
    route: "From G-9, cross Srinagar Highway into H-9 and continue to I-8/3",
    minutes: "8–12",
    about:
      "G-9 is one of Islamabad's busiest residential and shopping sectors, and many of our G-9 patients come for pigmentation, melasma and laser treatments.",
    nearby: ["g8-islamabad", "g10-islamabad", "h9-islamabad", "i9-islamabad"],
  },
  {
    slug: "g10-islamabad",
    name: "G-10 Islamabad",
    shortName: "G-10",
    sector: "Sector G-10 (G-10/1 – G-10/4)",
    landmarks: "G-10 Markaz",
    route: "From G-10, take Srinagar Highway east and turn south towards I-8",
    minutes: "10–15",
    about:
      "Families in G-10 visit us for a wide range of care — from dermatology for teenagers to anti-ageing treatments and cosmetic surgery for adults.",
    nearby: ["g9-islamabad", "g11-islamabad", "i10-islamabad", "e11-f10-islamabad"],
  },
  {
    slug: "g11-islamabad",
    name: "G-11 Islamabad",
    shortName: "G-11",
    sector: "Sector G-11 (G-11/1 – G-11/4)",
    landmarks: "G-11 Markaz",
    route: "From G-11, take Srinagar Highway east towards H-8/I-8",
    minutes: "12–18",
    about:
      "G-11 is a popular sector with young families and professionals, many of whom come to us for hair transplant, PRP hair therapy and laser hair removal.",
    nearby: ["g10-islamabad", "g13-islamabad", "f11-islamabad", "i11-islamabad"],
  },
  {
    slug: "g13-islamabad",
    name: "G-13 Islamabad",
    shortName: "G-13",
    sector: "Sector G-13 (G-13/1 – G-13/4)",
    landmarks: "G-13 Markaz",
    route: "From G-13, travel east on Srinagar Highway towards the I-8 interchange",
    minutes: "15–22",
    about:
      "G-13 has grown quickly into one of Islamabad's largest residential sectors, and many of our G-13 patients plan their treatment courses around fewer, longer visits.",
    nearby: ["g11-islamabad", "g14-islamabad", "h11-islamabad", "e11-f10-islamabad"],
  },
  {
    slug: "g14-islamabad",
    name: "G-14 Islamabad",
    shortName: "G-14",
    sector: "Sector G-14",
    landmarks: "Srinagar Highway",
    route: "From G-14, take Srinagar Highway east all the way to the I-8 area",
    minutes: "18–25",
    about:
      "G-14 is one of Islamabad's newer sectors; with a direct Srinagar Highway route, our clinic is a straightforward drive for G-14 residents.",
    nearby: ["g13-islamabad", "g15-islamabad", "b17-islamabad", "g11-islamabad"],
  },
  {
    slug: "g15-islamabad",
    name: "G-15 Islamabad",
    shortName: "G-15",
    sector: "Sector G-15",
    landmarks: "Srinagar Highway",
    route: "From G-15, take Srinagar Highway east towards I-8",
    minutes: "20–28",
    about:
      "For patients in G-15, we can arrange an initial WhatsApp consultation so that the first in-person visit is used as efficiently as possible.",
    nearby: ["g14-islamabad", "g13-islamabad", "b17-islamabad", "d12-islamabad"],
  },
  {
    slug: "f8-islamabad",
    name: "F-8 Islamabad",
    shortName: "F-8",
    sector: "Sector F-8 (F-8/1 – F-8/4)",
    landmarks: "F-8 Markaz and the Islamabad District Courts",
    route: "From F-8, drive south through G-8 and H-8 to I-8/3",
    minutes: "12–18",
    about:
      "Many of our F-8 patients are lawyers, executives and business owners who prefer discreet, appointment-only treatment with minimal downtime.",
    nearby: ["f6-f7-islamabad", "g8-islamabad", "blue-area-islamabad", "e11-f10-islamabad"],
  },
  {
    slug: "f11-islamabad",
    name: "F-11 Islamabad",
    shortName: "F-11",
    sector: "Sector F-11 (F-11/1 – F-11/4)",
    landmarks: "F-11 Markaz",
    route: "From F-11, travel south through G-11 to Srinagar Highway and on to I-8",
    minutes: "15–22",
    about:
      "F-11 is one of Islamabad's most sought-after sectors, and our F-11 patients most often ask about natural-looking facial rejuvenation and body contouring.",
    nearby: ["e11-f10-islamabad", "g11-islamabad", "g13-islamabad", "d12-islamabad"],
  },
  {
    slug: "e7-islamabad",
    name: "E-7 Islamabad",
    shortName: "E-7",
    sector: "Sector E-7",
    landmarks: "the Margalla Hills foothills",
    route: "From E-7, drive south through the F and G sectors to I-8",
    minutes: "18–25",
    about:
      "E-7 sits at the foot of the Margalla Hills; patients from E-7 value our completely private, one-to-one consultations with Dr. Tasneem Elahi.",
    nearby: ["f6-f7-islamabad", "f8-islamabad", "blue-area-islamabad", "g6-islamabad"],
  },
  {
    slug: "d12-islamabad",
    name: "D-12 Islamabad",
    shortName: "D-12",
    sector: "Sector D-12",
    landmarks: "D-12 Markaz and the Margalla foothills",
    route: "From D-12, head south through E-11/F-11 and G-11 to Srinagar Highway, then on to I-8",
    minutes: "20–28",
    about:
      "D-12 is a quieter, newer sector near the hills; many D-12 patients plan a single longer visit for consultation and treatment together.",
    nearby: ["e11-f10-islamabad", "f11-islamabad", "g13-islamabad", "g15-islamabad"],
  },
  {
    slug: "b17-islamabad",
    name: "B-17 Islamabad",
    shortName: "B-17",
    sector: "Sector B-17 (Multi Gardens)",
    landmarks: "Multi Gardens B-17",
    route: "From B-17, join Srinagar Highway towards Islamabad and continue east to I-8",
    minutes: "25–35",
    about:
      "For B-17 (Multi Gardens) residents we offer a free WhatsApp pre-consultation, so you only travel once your treatment plan is clear.",
    nearby: ["g14-islamabad", "g15-islamabad", "g13-islamabad", "d12-islamabad"],
  },
  {
    slug: "blue-area-islamabad",
    name: "Blue Area Islamabad",
    shortName: "Blue Area",
    sector: "Blue Area (Jinnah Avenue)",
    landmarks: "Jinnah Avenue",
    route: "From Blue Area, drive south via Srinagar Highway towards I-8",
    minutes: "12–18",
    about:
      "Blue Area is Islamabad's main business district, and our evening hours (3 PM – 8 PM) let people who work there book an appointment straight after the office.",
    nearby: ["f6-f7-islamabad", "g6-islamabad", "f8-islamabad", "g7-islamabad"],
  },
  {
    slug: "pwd-police-foundation-islamabad",
    name: "PWD & Police Foundation Islamabad",
    shortName: "PWD",
    sector: "PWD Housing Scheme & Police Foundation",
    landmarks: "Islamabad Expressway near Koral",
    route: "From PWD, take Islamabad Expressway north towards Faizabad and turn into I-8",
    minutes: "15–20",
    about:
      "PWD and Police Foundation are directly on Islamabad Expressway, which gives residents a simple, direct route to our clinic in I-8.",
    nearby: ["dha-islamabad", "bahria-town-islamabad", "bani-gala-islamabad", "i8-islamabad"],
  },
  {
    slug: "bani-gala-islamabad",
    name: "Bani Gala Islamabad",
    shortName: "Bani Gala",
    sector: "Bani Gala",
    landmarks: "Rawal Lake",
    route: "From Bani Gala, drive towards Islamabad Expressway and continue north to Faizabad and I-8",
    minutes: "20–30",
    about:
      "Bani Gala residents near Rawal Lake value privacy, and every appointment at Pelle is private and one-to-one, with no shared waiting room.",
    nearby: ["pwd-police-foundation-islamabad", "dha-islamabad", "f6-f7-islamabad", "i8-islamabad"],
  },
];

const toLocation = (s: SectorSeed): LocationData => ({
  slug: s.slug,
  name: s.name,
  shortName: s.shortName,
  sector: s.sector,
  metaTitle: `Aesthetic & Cosmetic Clinic near ${s.shortName} Islamabad | Dr. Tasneem Elahi`,
  metaDescription: `Cosmetic surgery, Botox, fillers, laser and hair transplant for ${s.shortName} residents — about ${s.minutes} minutes from our I-8/3 clinic. Dr. Tasneem Elahi, 30+ years. Book on WhatsApp.`,
  keywords: [
    `cosmetic clinic ${s.shortName} Islamabad`,
    `skin clinic ${s.shortName}`,
    `botox ${s.shortName} Islamabad`,
    `laser treatment ${s.shortName}`,
    `hair transplant ${s.shortName} Islamabad`,
    `dermatologist near ${s.shortName}`,
    `aesthetic clinic near ${s.landmarks}`,
  ].join(", "),
  h1: `Aesthetic & Cosmetic Clinic near ${s.name}`,
  intro: [
    `Pelle Aesthetic & Cosmetic welcomes patients from ${s.sector}, including the area around ${s.landmarks}. ${s.about} Every treatment — from cosmetic surgery to injectables, laser skincare, hair transplant and dermatology — is planned and supervised by Dr. Tasneem Elahi, a cosmetologist with more than 30 years of experience.`,
    `${s.route}; the drive normally takes about ${s.minutes} minutes. The clinic is open Monday to Saturday, 3:00 PM – 8:00 PM, by appointment only, and you can send your questions on WhatsApp before you visit.`,
  ],
  lifestyle: `${s.shortName}`,
  landmark: s.landmarks,
  commuteNote: `About ${s.minutes} minutes by car from ${s.shortName} in normal traffic`,
  audience: `patients from ${s.name}`,
  schema: {
    serviceArea: s.name,
    addressLocality: "Islamabad",
  },
  nearby: s.nearby,
  faqs: [
    {
      q: `How far is Pelle Aesthetic & Cosmetic from ${s.shortName}?`,
      a: `Our clinic is at Plot 14, Street 32, I-8/3, Islamabad. ${s.route}; the drive usually takes about ${s.minutes} minutes in normal traffic.`,
    },
    {
      q: `Which treatments do patients from ${s.shortName} usually choose?`,
      a: `${s.about} We also offer cosmetic surgery, breast surgery, intimate wellness and a full range of dermatology treatments.`,
    },
    {
      q: `Can I consult before travelling from ${s.shortName}?`,
      a: "Yes. You can send photos and questions on WhatsApp (+92 333 5100650) for an initial opinion, and then book an in-person consultation with Dr. Tasneem Elahi.",
    },
    {
      q: "What are the clinic timings?",
      a: "Monday to Saturday, 3:00 PM – 8:00 PM, by appointment only. Every consultation is private and one-to-one.",
    },
  ],
});

export const sectorLocations: LocationData[] = seeds.map(toLocation);
