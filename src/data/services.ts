import laser from "@/assets/service-laser.jpg";
import surgery from "@/assets/service-surgery.jpg";
import hair from "@/assets/service-hair.jpg";
import dental from "@/assets/service-dental.jpg";
import weight from "@/assets/service-weight.jpg";
import intimate from "@/assets/service-intimate.jpg";

export type Treatment = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  sessions: string;
  priceFrom: string;
  benefits: string[];
  faqs: { q: string; a: string }[];
};

export type Category = {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string;
  number: string;
  treatments: Treatment[];
};

export const categories: Category[] = [
  {
    slug: "laser-skincare",
    number: "01",
    name: "Laser & Skincare",
    short: "Radiance, refined.",
    description:
      "Precision laser therapies and bespoke facials designed to restore a luminous, even complexion.",
    image: laser,
    treatments: [
      {
        slug: "pico-laser",
        name: "PICO Laser",
        tagline: "Pigment, freckles & dull skin — corrected at the source.",
        description:
          "PICO Laser delivers ultra-short pulses to gently shatter pigment without damaging surrounding skin. Ideal for melasma, sun spots, freckles and overall radiance — with virtually no downtime.",
        duration: "30–45 minutes",
        sessions: "3–6 sessions",
        priceFrom: "PKR 18,000 / session",
        benefits: [
          "Targets melasma, freckles & sun damage",
          "Refines pores and improves texture",
          "No downtime — return to routine same day",
          "Safe for South Asian skin tones",
        ],
        faqs: [
          { q: "Is PICO Laser painful?", a: "Most patients describe a mild snapping sensation. We apply a numbing cream beforehand for full comfort." },
          { q: "How many sessions will I need?", a: "Typically 3–6 sessions spaced 3–4 weeks apart, depending on the depth and area of pigmentation." },
          { q: "When will I see results?", a: "Subtle radiance appears within a week. Pigment correction continues over the following 4–8 weeks." },
          { q: "Are there any side effects?", a: "Temporary redness or warmth that settles within hours. Sun protection is essential post-treatment." },
        ],
      },
      {
        slug: "fractional-co2",
        name: "Fractional CO₂",
        tagline: "Resurface scars, lines and texture in a single session.",
        description:
          "Fractional CO₂ resurfaces the upper layers of the skin to dramatically improve acne scars, fine lines and pore size while stimulating long-term collagen renewal.",
        duration: "60 minutes",
        sessions: "1–3 sessions",
        priceFrom: "PKR 35,000 / session",
        benefits: ["Acne scar revision", "Smoother texture & tone", "Long-term collagen remodelling", "Visible lift after one session"],
        faqs: [
          { q: "What is the downtime?", a: "Expect 5–7 days of redness and peeling. Most patients return to social activities after a week." },
          { q: "Is it safe for darker skin?", a: "Yes — settings are personalised for your skin tone with strict pre & post protocols." },
        ],
      },
      {
        slug: "hydrafacial",
        name: "HydraFacial",
        tagline: "Cleanse, extract, hydrate — the signature glow.",
        description: "A multi-step facial that cleanses, exfoliates and infuses skin with serums for an immediate, lit-from-within glow.",
        duration: "45 minutes",
        sessions: "Monthly",
        priceFrom: "PKR 12,000 / session",
        benefits: ["Instant radiance", "Deep pore cleansing", "Hydration boost", "Zero downtime"],
        faqs: [{ q: "How often?", a: "Once a month for ongoing radiance." }],
      },
      {
        slug: "chemical-peels",
        name: "Chemical Peels",
        tagline: "Refined exfoliation for tone, clarity and luminosity.",
        description: "Medical-grade peels tailored to your concerns — from gentle brightening to advanced resurfacing.",
        duration: "30 minutes",
        sessions: "3–6 sessions",
        priceFrom: "PKR 8,000 / session",
        benefits: ["Brightens tone", "Reduces acne", "Smooths texture"],
        faqs: [{ q: "Will my skin peel?", a: "Light flaking is normal for 3–5 days, depending on peel strength." }],
      },
    ],
  },
  {
    slug: "cosmetic-surgery",
    number: "02",
    name: "Cosmetic Surgery",
    short: "Refined surgical artistry.",
    description: "Personalised surgical procedures performed with precision and discretion.",
    image: surgery,
    treatments: [],
  },
  {
    slug: "hair-transplant",
    number: "03",
    name: "Hair Transplant",
    short: "Restore a natural, lasting hairline.",
    description: "FUE & DHI techniques delivering undetectable, lifelong results.",
    image: hair,
    treatments: [],
  },
  {
    slug: "intimate-surgery",
    number: "04",
    name: "Intimate Wellness",
    short: "Discreet, female-led care.",
    description: "Private consultations and treatments for intimate health and confidence.",
    image: intimate,
    treatments: [],
  },
  {
    slug: "dentistry",
    number: "05",
    name: "Aesthetic Dentistry",
    short: "Smiles, perfectly composed.",
    description: "Veneers, whitening and full smile design with a luxurious clinical experience.",
    image: dental,
    treatments: [],
  },
  {
    slug: "weight-loss",
    number: "06",
    name: "Weight & Body",
    short: "Sculpt with science.",
    description: "Medical weight management and non-invasive body contouring tailored to you.",
    image: weight,
    treatments: [],
  },
];

export const findCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const findTreatment = (catSlug: string, slug: string) =>
  findCategory(catSlug)?.treatments.find((t) => t.slug === slug);