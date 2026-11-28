﻿// Category hero images — locally generated, Pakistani patients, Islamabad-localised
const surgery    = "/treatment-images/cat-cosmetic-surgery.webp";  // Best Cosmetic Surgery in Islamabad - Dr. Tasneem Elahi
const injectables = "/treatment-images/cat-injectables.webp";        // Best Cosmetic Injectables in Islamabad - Dr. Tasneem Elahi
const breastImg  = "/treatment-images/cat-breast-surgery.webp";     // Best Breast Surgery in Islamabad - Dr. Tasneem Elahi
const laser      = "/treatment-images/cat-laser-skincare.webp";      // Best Laser Skincare in Islamabad - Dr. Tasneem Elahi
const hair       = [
  "/treatment-images/ht-frame1.webp",
  "/treatment-images/ht-frame2.webp",
  "/treatment-images/cat-hair-transplant.webp"
];     // Best Hair Transplant in Islamabad - Dr. Tasneem Elahi
const weight     = "/treatment-images/cat-dermatology.webp";         // Best Dermatology in Islamabad - Dr. Tasneem Elahi
const intimate   = "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&q=80&w=1200";   // Best Intimate Wellness Clinic in Islamabad - Dr. Tasneem Elahi


export type Treatment = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  sessions: string;
  priceFrom: string;
  image?: string;
  benefits: string[];
  faqs: { q: string; a: string }[];
};

export type Category = {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string | string[];
  number: string;
  icon: string;
  treatments: Treatment[];
};

export const categories: Category[] = [
  {
    slug: "cosmetic-surgery",
    number: "01",
    name: "Cosmetic Surgery",
    short: "Nose, face and body surgery.",
    icon: "✦",
    description:
      "Cosmetic surgery in Islamabad for the nose, face and body — including rhinoplasty (nose job), facelift, eyelid surgery, liposuction, tummy tuck and BBL. Every patient has a detailed consultation with Dr. Tasneem Elahi first, so you understand the procedure, the recovery time and the realistic result before you decide. Procedures are planned for natural-looking results that suit your face and body.",
    image: surgery,
    treatments: [
      {
        slug: "rhinoplasty",
        name: "Rhinoplasty (Nose Surgery)",
        tagline: "Reshape your nose to balance your face perfectly.",
        description:
          "Rhinoplasty at Pelle is a highly personalised surgical procedure designed to refine the shape, size and proportion of your nose — enhancing facial harmony while preserving your natural identity. Performed at our state-of-the-art clinic in I-8, Islamabad, both open and closed rhinoplasty techniques are available. Dr. Tasneem Elahi applies a deep understanding of South Asian nasal anatomy to deliver results that look completely natural and perfectly balanced for your facial structure. As one of Islamabad's most trusted nose surgeons, his approach prioritises breathing function alongside aesthetics.",
        duration: "2–3 hours",
        sessions: "Single procedure",
        priceFrom: "Consultation required",
        benefits: [
          "Corrects hump, tip asymmetry or width",
          "Improves breathing function",
          "Natural-looking, permanent results",
          "Tailored to South Asian facial proportions",
        ],
        faqs: [
          { q: "How long is recovery?", a: "Most patients return to light activity within 10–14 days. Swelling resolves over 3–6 months." },
          { q: "Will there be visible scarring?", a: "Closed rhinoplasty leaves no external scars. Open technique has a tiny scar under the nose that fades completely." },
          { q: "Is it painful?", a: "General anaesthesia ensures you feel nothing. Post-op discomfort is well managed with prescribed medication." },
        ],
      },
      {
        slug: "facelift",
        name: "Facelift (Rhytidectomy)",
        tagline: "Turn back the clock with a natural, refreshed look.",
        description:
          "A surgical facelift at Pelle Aesthetic addresses sagging skin, deep nasolabial folds and jowls to restore a youthful, lifted facial contour — without the overdone 'pulled' look. Dr. Tasneem uses advanced SMAS-based facelift techniques that reposition the underlying facial structures for natural, long-lasting results. As one of Islamabad's most experienced cosmetic surgeons, he has helped hundreds of patients in Islamabad and Rawalpindi regain confidence with results that look 7–10 years younger.",
        duration: "3–4 hours",
        sessions: "Single procedure",
        priceFrom: "Consultation required",
        benefits: ["Removes excess skin and tightens muscles", "Long-lasting 7–10 year results", "Can combine with neck lift for complete rejuvenation"],
        faqs: [
          { q: "What is recovery like?", a: "Initial swelling subsides in 2–3 weeks. Most patients return to social life within 3–4 weeks." },
          { q: "Who is a good candidate?", a: "Patients 40–70 with visible sagging and good overall health are ideal candidates." },
        ],
      },
      {
        slug: "blepharoplasty",
        name: "Eyelid Surgery (Blepharoplasty)",
        tagline: "Brighter, more youthful eyes — without looking overdone.",
        description:
          "Upper and lower eyelid surgery (blepharoplasty) performed in Islamabad at Pelle Aesthetic removes excess skin, under-eye puffiness and drooping upper lids to create a refreshed, wide-awake appearance. This is one of the most popular procedures among our Pakistani patients aged 35 and above, delivering subtle but dramatic rejuvenation. Dr. Tasneem places incisions within the natural eyelid creases so that scarring is virtually undetectable, even without makeup.",
        duration: "1–2 hours",
        sessions: "Single procedure",
        priceFrom: "Consultation required",
        benefits: ["Removes drooping upper lid skin", "Reduces under-eye bags", "Can improve peripheral vision", "Minimal scarring in natural lid creases"],
        faqs: [
          { q: "Is it combined with other procedures?", a: "Often combined with brow lift or facelift for comprehensive facial rejuvenation." },
        ],
      },
      {
        slug: "liposuction",
        name: "Liposuction & Body Contouring",
        tagline: "Sculpt and define your body with precision.",
        description:
          "Advanced liposuction techniques — including Vaser 4D, BodyJet and High-Definition Liposculpture — available at our clinic in I-8, Islamabad to permanently remove stubborn fat deposits and sculpt your ideal silhouette. Whether targeting the abdomen, flanks, thighs, arms or double chin, Dr. Tasneem combines artistic precision with the latest technology to deliver a toned, contoured body that feels natural. This is the most sought-after body procedure for our patients across Islamabad and Rawalpindi.",
        duration: "1–3 hours",
        sessions: "Single procedure",
        priceFrom: "Consultation required",
        benefits: [
          "Permanent fat removal from targeted areas",
          "Ideal for abdomen, thighs, arms and double chin",
          "High-definition options for athletic definition",
          "Minimal downtime with modern techniques",
        ],
        faqs: [
          { q: "Is liposuction a weight-loss procedure?", a: "Liposuction is a contouring procedure, not a weight-loss solution. Best for patients near their ideal weight with stubborn fat areas." },
          { q: "How long until I see results?", a: "Initial results visible in 4–6 weeks as swelling reduces. Final results at 3–6 months." },
        ],
      },
      {
        slug: "tummy-tuck",
        name: "Tummy Tuck (Abdominoplasty)",
        tagline: "Restore a flat, toned abdomen after weight loss or pregnancy.",
        description:
          "Abdominoplasty removes excess abdominal skin and tightens the underlying muscles — ideal for post-pregnancy or post-weight-loss patients seeking a flat, firm midsection.",
        duration: "2–4 hours",
        sessions: "Single procedure",
        priceFrom: "Consultation required",
        benefits: ["Removes excess skin and stretch marks", "Repairs separated abdominal muscles", "Creates a smooth, flat belly"],
        faqs: [
          { q: "Can it be combined with liposuction?", a: "Yes — lipo-abdominoplasty combining both procedures gives the most comprehensive result." },
        ],
      },
      {
        slug: "bbl",
        name: "Brazilian Butt Lift (BBL)",
        tagline: "Natural curves — using your own fat.",
        description:
          "BBL transfers fat from areas like the abdomen or thighs to the buttocks, creating natural-looking volume and a shapelier silhouette — no implants required.",
        duration: "2–4 hours",
        sessions: "Single procedure",
        priceFrom: "Consultation required",
        benefits: ["Uses your own fat (no implants)", "Simultaneous body contouring via liposuction", "Natural feel and long-lasting results"],
        faqs: [
          { q: "How do I sit after BBL?", a: "A special BBL pillow is provided. Direct sitting on the buttocks is avoided for 6–8 weeks to preserve fat grafts." },
        ],
      },
      {
        slug: "ear-reshaping",
        name: "Ear Reshaping (Otoplasty)",
        tagline: "Pin back prominent ears for a balanced profile.",
        description:
          "Otoplasty corrects prominent or misshapen ears — a very common procedure for both children and adults seeking a more proportional appearance.",
        duration: "1–2 hours",
        sessions: "Single procedure",
        priceFrom: "Consultation required",
        benefits: ["Permanent correction", "Minimal visible scarring behind the ear", "Suitable for ages 5 and above"],
        faqs: [
          { q: "At what age can otoplasty be performed?", a: "From age 5 onwards, once ear cartilage has developed sufficiently." },
        ],
      },
      {
        slug: "brow-lift",
        name: "Brow Lift",
        tagline: "Lift a heavy brow for a more youthful, alert expression.",
        description:
          "A brow lift (forehead lift) elevates drooping brows and smooths forehead lines — creating a more rested, open and youthful expression.",
        duration: "1–2 hours",
        sessions: "Single procedure",
        priceFrom: "Consultation required",
        benefits: ["Elevates sagging brow position", "Reduces forehead lines", "Often combined with eyelid surgery"],
        faqs: [],
      },
    ],
  },
  {
    slug: "cosmetic-injectables",
    number: "02",
    name: "Cosmetic Injectables",
    short: "Botox, fillers and skin boosters.",
    icon: "◈",
    description:
      "Non-surgical injectable treatments in Islamabad — Botox for forehead lines and crow's feet, dermal and lip fillers, Profhilo skin boosters, PRP and glutathione skin-brightening injections. Most treatments take under an hour with little or no downtime. Dr. Tasneem Elahi uses conservative amounts so that you look fresher, not 'done'.",
    image: injectables,
    treatments: [
      {
        slug: "botox",
        name: "Botox Injections",
        tagline: "Smooth wrinkles and fine lines — naturally, not frozen.",
        image: "/treatment-images/inj-botox.webp",
        description:
          "Medical-grade botulinum toxin (Botox) injections at Pelle Aesthetic Islamabad are precisely administered by Dr. Tasneem Elahi to relax overactive facial muscles causing frown lines, forehead wrinkles and crow's feet. Unlike the frozen results seen elsewhere, our patients in Islamabad consistently report that their outcomes look refreshed and natural — no one can tell they've had treatment, only that they look well-rested. As Islamabad's leading Botox specialist, Dr. Tasneem also treats hyperhidrosis (excessive sweating) and jaw slimming with exceptional results.",
        duration: "20–30 minutes",
        sessions: "Every 4–6 months",
        priceFrom: "PKR 15,000 / area",
        benefits: [
          "Smooths forehead lines, crow's feet and frown lines",
          "No surgery, no downtime",
          "Results last 4–6 months",
          "Also treats hyperhidrosis (excessive sweating)",
        ],
        faqs: [
          { q: "How quickly does Botox work?", a: "Results begin appearing within 3–5 days and fully peak at 2 weeks. You will notice a gradual, natural softening — not an overnight change." },
          { q: "Will I look frozen or unnatural?", a: "Never. Dr. Tasneem uses precision micro-dosing and anatomical placement techniques specifically calibrated to preserve your natural facial movement and expression. The goal is always 'refreshed', never 'done'." },
          { q: "Does the injection hurt?", a: "The needles used are ultra-fine (30–31 gauge). Most patients describe it as a tiny pinch lasting 1–2 seconds per injection. Numbing cream is always available on request." },
          { q: "How long do Botox results last?", a: "Typically 4–6 months per treatment area. With regular treatments over time, many patients find results lasting longer as the targeted muscles gradually weaken. First-time patients may notice results fading slightly faster." },
          { q: "What areas can be treated with Botox at Pelle?", a: "We treat: forehead lines, frown lines (glabella '11 lines'), crow's feet, brow lift, bunny lines, lip lines, chin dimpling, jawline slimming (masseter), neck bands (platysma), and hyperhidrosis (underarm/palm sweating)." },
        ],
      },
      {
        slug: "dermal-fillers",
        name: "Dermal Fillers",
        tagline: "Restore volume and sculpt facial contours.",
        image: "/treatment-images/inj-filler.webp",
        description:
          "Premium hyaluronic acid fillers (Juvederm, Voluma, Volift) are used at Pelle Aesthetic in Islamabad to restore lost facial volume, sculpt cheekbones, define jawlines and plump lips with natural-looking results. Dr. Tasneem employs advanced micro-cannula injection techniques that minimise bruising and discomfort, specifically calibrating product choice and placement for South Asian facial anatomy. Each syringe is placed with artistic precision to ensure results that enhance your natural beauty rather than alter it.",
        duration: "30–60 minutes",
        sessions: "Lasts 12–18 months",
        priceFrom: "PKR 25,000 / syringe",
        benefits: [
          "Cheek, jawline and chin contouring",
          "Natural lip enhancement",
          "Tear trough (under eye) correction",
          "Immediate results, reversible with hyaluronidase",
        ],
        faqs: [
          { q: "Are dermal fillers safe?", a: "Yes — when administered by a trained medical professional. Dr. Tasneem uses only premium FDA-approved hyaluronic acid brands (Juvederm, Voluma, Restylane). Every treatment includes an emergency reversal agent (hyaluronidase) on standby." },
          { q: "How long do fillers last?", a: "Cheek and jawline fillers typically last 12–18 months. Lip fillers last 9–12 months. Tear trough fillers can last 12–24 months. Results vary based on product, area, and individual metabolism." },
          { q: "Will I bruise or swell after fillers?", a: "Minor swelling and occasional bruising (1–5 days) is normal, especially around the lips and tear trough. Dr. Tasneem uses blunt micro-cannulas where possible, which significantly reduce bruising compared to needles." },
          { q: "Can fillers be reversed if I don't like the result?", a: "Yes — hyaluronic acid fillers are 100% reversible using hyaluronidase enzyme, which dissolves the filler within 24–48 hours. This is one of the major safety advantages of HA fillers over permanent options." },
          { q: "How many syringes will I need?", a: "This varies per individual and area. Cheek enhancement typically requires 1–2 syringes per side. Lip augmentation uses 0.5–1 syringe. A full facial rejuvenation may use 3–6 syringes total. Dr. Tasneem always recommends starting conservatively and building gradually." },
        ],
      },
      {
        slug: "lip-fillers",
        name: "Lip Fillers",
        tagline: "Fuller, shapelier lips — with a natural pout.",
        image: "/treatment-images/inj-lip.webp",
        description:
          "Lip augmentation using premium hyaluronic acid fillers to add volume, define the cupid's bow and achieve a natural-looking enhancement that flatters South Asian facial proportions. Both Russian Lip and Classic techniques are available, as well as targeted treatments for lip asymmetry, thin borders and flat Cupid's bows. At Pelle Aesthetic Islamabad, over-filled 'duck lips' are never the goal — the focus is always on a balanced, natural pout that enhances your unique features.",
        duration: "30 minutes",
        sessions: "Every 9–12 months",
        priceFrom: "PKR 18,000 / session",
        benefits: ["Adds volume and definition", "Corrects asymmetry", "Russian Lip technique for a non-duck appearance", "Completely reversible"],
        faqs: [
          { q: "Will my lips look natural and proportional?", a: "Absolutely — this is Dr. Tasneem's primary goal. He specialises in the Russian Lip technique and precise micro-injection methods specifically suited to South Asian lip anatomy, always ensuring the result looks like an enhanced version of you, not an overdone Hollywood look." },
          { q: "How much filler is used in lips?", a: "Typically 0.5–1ml for a first-time patient. This is a conservative amount that achieves subtle, beautiful definition. We never 'overfill' in one session — a gradual approach gives the most natural outcome." },
          { q: "How long do lip fillers last?", a: "Lip fillers typically last 9–12 months. The lips metabolise filler faster than other facial areas due to greater movement. Maintenance treatments every 9–12 months keep the result consistent." },
          { q: "Does it hurt?", a: "We apply a strong topical numbing cream for 20 minutes before the procedure. Many lip filler products also contain lidocaine (a local anaesthetic) built in. Most patients rate the discomfort as 2–3 out of 10." },
          { q: "Can I eat and drink normally after lip fillers?", a: "Yes — but avoid very hot foods/drinks and extreme facial movements for 24 hours. Avoid wearing lip makeup for 24 hours post-treatment. Mild swelling peaks at 24–48 hours and fully settles within 5–7 days." },
        ],
      },
      {
        slug: "profhilo",
        name: "Profhilo Skin Booster",
        tagline: "The ultimate skin remodelling injection — deep hydration and lift.",
        image: "/treatment-images/inj-profhilo.webp",
        description:
          "Profhilo is a revolutionary BDDE-free hyaluronic acid skin remodelling treatment — not a filler, but a bio-stimulator that spreads through the skin to deeply hydrate, tighten laxity and stimulate your own collagen and elastin production from within. At Pelle Aesthetic Islamabad, Profhilo is administered using the BAP (Bio Aesthetic Points) technique — 5 specific injection points per side — for maximum distribution with minimal discomfort. Two sessions, one month apart, deliver results that continue improving for months.",
        duration: "30 minutes",
        sessions: "2 sessions (1 month apart)",
        priceFrom: "PKR 35,000 / session",
        benefits: ["Dramatic skin hydration improvement", "Tightens lax skin", "Stimulates collagen and elastin", "Suitable for face, neck and hands"],
        faqs: [
          { q: "How is Profhilo different from regular dermal fillers?", a: "Profhilo contains no cross-linking agents (BDDE-free), so it spreads through the skin rather than staying in one area. It bio-remodels the entire skin quality — hydration, elasticity and texture — whereas fillers add targeted volume. Think of Profhilo as skin health, and fillers as facial architecture." },
          { q: "When will I see results from Profhilo?", a: "An initial glow and hydration improvement is noticeable within 2–4 weeks after the first session. Full results — including collagen and elastin stimulation — appear 4–8 weeks after the second session and continue improving for up to 6 months." },
          { q: "How many sessions of Profhilo do I need?", a: "The standard protocol is 2 sessions, 4 weeks apart. Many patients choose a maintenance session every 6–12 months to sustain the collagen-stimulating effect." },
          { q: "Is Profhilo suitable for Pakistani skin tones?", a: "Yes — Profhilo is completely safe and highly effective for South Asian skin. It works entirely within the skin structure and has no risk of skin tone changes or laser-related concerns." },
          { q: "Can Profhilo be combined with other treatments?", a: "Absolutely. Profhilo pairs beautifully with HIFU (for structural lift), Botox (for expression lines), and PRP (for regeneration). Dr. Tasneem frequently combines these for a comprehensive anti-aging plan customised for your skin." },
        ],
      },
      {
        slug: "prp-therapy",
        name: "PRP Therapy (Vampire Facial)",
        tagline: "Your own growth factors — activated for regeneration.",
        image: "/treatment-images/inj-prp.webp",
        description:
          "Platelet-Rich Plasma (PRP) therapy at Pelle Aesthetic Islamabad uses your own blood's concentrated growth factors — re-injected or microneedled into the skin — to trigger natural cellular regeneration. A small blood sample is drawn, centrifuged to isolate platelet-rich plasma, then applied via microneedling or injection. The result: improved skin texture, reduced acne scarring, enhanced radiance and accelerated healing. Because it uses your own biology, there is zero risk of allergic reaction.",
        duration: "45–60 minutes",
        sessions: "3–4 sessions",
        priceFrom: "PKR 20,000 / session",
        benefits: ["100% natural, no synthetic chemicals", "Skin rejuvenation and hair restoration", "Combined with microneedling for enhanced results"],
        faqs: [
          { q: "Is PRP therapy safe?", a: "PRP is one of the safest aesthetic treatments available because it uses your own blood plasma — there is no foreign substance involved. The only risk is minor bruising or redness at injection sites, which resolves within 24–48 hours." },
          { q: "How many PRP sessions will I need?", a: "We recommend an initial course of 3–4 sessions, spaced 4 weeks apart. Skin texture and acne scar improvement is cumulative — results build progressively with each session. A maintenance session every 6–12 months is recommended." },
          { q: "What skin concerns does PRP treat?", a: "PRP is excellent for: acne scars, enlarged pores, uneven skin texture, dull complexion, early skin laxity, under-eye dark circles and hollowness, and post-laser healing acceleration. It is also used extensively for hair loss treatment." },
          { q: "What is the downtime after a Vampire Facial?", a: "Expect redness and mild swelling for 24–48 hours. The skin may look flushed (like a mild sunburn). Most patients return to social activities within 2–3 days. SPF50 sunscreen must be used for 2 weeks post-treatment." },
          { q: "How is PRP different from fillers and Botox?", a: "Botox and fillers deliver immediate cosmetic changes — PRP works by activating your skin's own regenerative biology. It improves overall skin health and quality from within. PRP and fillers/Botox are highly complementary and are frequently combined for comprehensive facial rejuvenation." },
        ],
      },
      {
        slug: "glutathione-injections",
        name: "Glutathione Skin Whitening IV",
        tagline: "Brighter, more radiant skin from within.",
        image: "/treatment-images/inj-glutathione.webp",
        description:
          "Intravenous Glutathione therapy at Pelle Aesthetic Islamabad delivers pharmaceutical-grade glutathione directly into the bloodstream for maximum bioavailability — significantly more effective than oral supplements. Glutathione is the body's master antioxidant, naturally present in every cell. IV administration reduces melanin production, neutralises free radicals, detoxifies the liver and produces a whole-body brightening effect. Results are progressive and cumulative across a series of sessions.",
        duration: "30 minutes",
        sessions: "6–10 sessions weekly",
        priceFrom: "PKR 8,000 / session",
        benefits: ["Visible skin brightening", "Reduces dark spots and pigmentation", "Full body effect", "Antioxidant anti-aging benefits"],
        faqs: [
          { q: "Is IV Glutathione safe?", a: "Yes — when administered by a qualified medical doctor using pharmaceutical-grade Glutathione at clinically appropriate doses. At Pelle, every IV session is supervised by Dr. Tasneem. We do not offer unsupervised or salon-administered Glutathione." },
          { q: "How many sessions will I need to see results?", a: "Most patients notice a visible improvement in skin radiance and evenness after 4–6 sessions. Significant brightening of dark patches and overall tone improvement is typically observed after 8–10 sessions. Skin tone results are maintained with monthly top-up sessions." },
          { q: "Is Glutathione IV better than oral supplements?", a: "Significantly more effective. Oral glutathione has very poor gut absorption (typically 1–2% bioavailability). IV administration delivers 100% directly into the bloodstream, bypassing digestion entirely. The difference in efficacy is dramatic." },
          { q: "Will my skin tone change permanently?", a: "Glutathione achieves progressive, gradual brightening over the course of treatment. The effect is maintained with regular monthly top-up sessions. If treatment is stopped entirely, skin tone gradually returns toward baseline over several months. Most patients choose ongoing maintenance." },
          { q: "Can Glutathione be combined with other skin brightening treatments?", a: "Yes — and this is how maximum results are achieved. At Pelle, we frequently combine IV Glutathione with PICO Laser (for targeted pigmentation), chemical peels (for surface brightness) and topical vitamin C serums for a comprehensive, rapid brightening protocol." },
        ],
      },
    ],
  },
  {
    slug: "breast-surgery",
    number: "03",
    name: "Breast Surgery",
    short: "Breast and chest surgery.",
    icon: "✿",
    description:
      "Breast surgery in Islamabad including breast augmentation, breast reduction, breast lift and gynecomastia (male chest reduction). Consultations are private and one-to-one, and we explain the options, recovery and expected results clearly so that you can make an informed decision.",
    image: breastImg,
    treatments: [
      {
        slug: "breast-augmentation",
        name: "Breast Augmentation",
        tagline: "Enhance your curves with natural-looking implants.",
        description:
          "Breast augmentation at Pelle Aesthetic Islamabad uses premium silicone or saline implants — or natural fat transfer (AFT) — to increase breast size and improve shape and proportion. Dr. Tasneem Elahi (Cosmetologist, 30+ years surgical experience) tailors every augmentation plan individually, selecting the optimal implant type, profile, size and pocket placement to match your body frame and personal aesthetic goals. Our completely private, appointment-only clinic in I-8, Islamabad ensures total discretion throughout your consultation and recovery journey.",
        duration: "1–2 hours",
        sessions: "Single procedure",
        priceFrom: "Consultation required",
        benefits: [
          "Choice of implant type, profile and size",
          "Natural-looking, long-lasting results",
          "AFT option uses your own fat (no implants)",
          "Minimal scarring in natural crease",
        ],
        faqs: [
          { q: "How long is recovery after breast augmentation?", a: "Most patients return to light daily activity within 2 weeks. You can resume office work at 10–14 days. Heavy exercise and lifting should be avoided for 6 weeks. Full healing and final results are visible at 3–6 months." },
          { q: "Are breast implants safe long-term?", a: "Yes — Dr. Tasneem uses only premium FDA-approved implants (Motiva, Mentor). Modern implants have an excellent 20+ year safety record. All implants come with a manufacturer lifetime warranty against rupture." },
          { q: "What size implants should I choose?", a: "This is determined collaboratively during your consultation. Dr. Tasneem uses 3D sizers and considers your existing tissue, chest width, height and lifestyle goals to recommend the most natural and proportionate size for your frame. We never recommend sizes that look unnatural." },
          { q: "Will there be visible scars?", a: "Incisions are placed in the natural inframammary crease (under the breast) or around the areola, making scars virtually invisible in clothing and bras. Scars fade to thin lines within 12–18 months. Dr. Tasneem is highly experienced in minimal-scar techniques." },
          { q: "Is this procedure suitable for women in Pakistan culturally?", a: "Absolutely. Breast augmentation is one of the most requested procedures at Pelle Aesthetic Islamabad, especially among women who feel their proportions don't match their frame or women who have experienced volume loss after pregnancy and breastfeeding. Every consultation is fully private and completely confidential." },
        ],
      },
      {
        slug: "breast-reduction",
        name: "Breast Reduction",
        tagline: "Relief from discomfort — with a lifted, proportionate shape.",
        description:
          "Reduction mammoplasty at Pelle Aesthetic Islamabad addresses overly large, heavy breasts that cause chronic back pain, neck pain, shoulder grooving, skin rashes and postural problems. Dr. Tasneem Elahi performs breast reduction using the most advanced vertical or Wise-pattern techniques to achieve a beautifully proportionate, uplifted result while minimising scarring. Many patients report immediate relief from physical discomfort and a dramatic improvement in how their clothes fit following surgery. Consultations are completely private at our I-8, Islamabad clinic.",
        duration: "2–4 hours",
        sessions: "Single procedure",
        priceFrom: "Consultation required",
        benefits: ["Relieves back, neck and shoulder pain", "Improves posture", "Lifts and reshapes the breast simultaneously", "Clothes fit better immediately"],
        faqs: [
          { q: "How much can be reduced in one procedure?", a: "Typically 200–1,000+ grams per side depending on your anatomy and goals. The amount is determined in your consultation based on your height, weight, shoulder width and desired final size. Dr. Tasneem always prioritises a natural, proportionate result." },
          { q: "Will breast reduction affect breastfeeding?", a: "In some cases, milk duct disruption can affect breastfeeding capacity. Dr. Tasneem uses nerve and duct-preserving techniques wherever possible to minimise this risk. This is discussed in detail during consultation, especially for patients who may wish to breastfeed in the future." },
          { q: "What are the scars like after breast reduction?", a: "Scars follow the natural breast anatomy (around the areola, vertical, and sometimes horizontal crease). They are pink initially but fade to thin silver lines within 12–18 months. In most cases, scars are not visible in swimwear. Dr. Tasneem uses scar-minimising suture techniques." },
          { q: "How long before I feel back to normal?", a: "Most patients feel dramatically better within the first 2 weeks. Light walking is encouraged from day 3. Office work can resume at 2 weeks. Heavy lifting and exercise at 6 weeks. Most patients say the recovery is far easier than they expected." },
          { q: "Does it hurt much after surgery?", a: "Discomfort (not severe pain) is managed with oral pain medications for the first 3–5 days. Most patients are surprised at how manageable the recovery is. Dr. Tasneem uses long-acting local anaesthetic injections at the end of surgery to minimize early post-operative discomfort." },
        ],
      },
      {
        slug: "breast-lift",
        name: "Breast Lift (Mastopexy)",
        tagline: "Restore a youthful, perky breast position.",
        description:
          "A breast lift (mastopexy) at Pelle Aesthetic Islamabad corrects drooping or ptosis of the breasts caused by pregnancy, breastfeeding, significant weight loss or natural ageing. Dr. Tasneem removes excess skin and reshapes the breast tissue to restore a naturally elevated, youthful breast position — without necessarily adding volume. For patients who desire both lift and fuller size, mastopexy can be combined with implants (augmentation-mastopexy) in a single procedure. Results are long-lasting when maintained with a stable weight.",
        duration: "2–3 hours",
        sessions: "Single procedure",
        priceFrom: "Consultation required",
        benefits: ["Raises nipple and areola to natural position", "Removes excess skin", "Can be combined with implants", "Long-lasting results with stable weight"],
        faqs: [
          { q: "What causes breasts to sag and can it be prevented?", a: "Breast ptosis (drooping) is caused by pregnancy, breastfeeding, weight fluctuation, gravity and ageing. Genetics also play a significant role. A well-fitted supportive bra slows progression but surgery is the only way to permanently restore position." },
          { q: "Can I combine a breast lift with augmentation?", a: "Yes — this is a very commonly requested combination. An augmentation-mastopexy adds volume while simultaneously lifting the position. Dr. Tasneem evaluates whether a single-stage or two-stage approach is safest based on your tissue characteristics." },
          { q: "How long do mastopexy results last?", a: "Results typically last 10–15+ years. Maintaining a stable weight and wearing good-quality supportive bras extends the longevity of results. Future pregnancy or significant weight changes can affect the long-term result." },
          { q: "What is the recovery timeline?", a: "Return to light activity in 1–2 weeks. A surgical bra must be worn for 6 weeks. Full return to exercise at 6–8 weeks. Scars mature over 12–18 months." },
          { q: "Are the scars very visible?", a: "Scars follow the lollipop pattern (around areola + vertical) or anchor pattern. They are positioned so they are hidden in all clothing including swimwear. Dr. Tasneem uses advanced suturing to minimise scar width and achieve the best possible cosmetic outcome." },
        ],
      },
      {
        slug: "gynecomastia",
        name: "Gynecomastia (Male Breast Reduction)",
        tagline: "A flat, masculine chest — restored with confidence.",
        description:
          "Gynecomastia — enlarged male breast tissue — is one of the most common and emotionally distressing conditions affecting men in Pakistan and worldwide, yet it remains significantly under-discussed. Dr. Tasneem Elahi at Pelle Aesthetic Islamabad has treated hundreds of gynecomastia cases using minimally invasive liposuction combined with targeted glandular excision through a small periareolar incision. Results are permanent, scars are invisible and the transformation in body confidence is immediate and profound. Clinic hours: Monday–Saturday, 3:00 PM – 8:00 PM.",
        duration: "1–2 hours",
        sessions: "Single procedure",
        priceFrom: "Consultation required",
        benefits: ["Flat, toned male chest contour", "Minimal scars concealed at areola edge", "Immediate confidence improvement", "Permanent result"],
        faqs: [
          { q: "Is gynecomastia common?", a: "Yes — up to 50% of men experience some degree of gynecomastia at some point in their lives. It is a hormonal, not a lifestyle condition. Many men in Pakistan suffer in silence due to stigma. At Pelle, we treat this with complete medical professionalism and privacy." },
          { q: "What causes gynecomastia?", a: "The most common causes are hormonal imbalance during puberty (which sometimes doesn't resolve), certain medications (steroids, anti-androgens), obesity, and rarely tumours. Dr. Tasneem investigates the cause before recommending surgery." },
          { q: "Will the chest look flat and natural after surgery?", a: "Yes — the goal is a completely flat, masculine chest contour with no visible feminisation. Dr. Tasneem uses a combination of liposuction (for fatty tissue) and direct glandular excision (for firm glandular tissue) to achieve a completely flat, natural-looking result." },
          { q: "What is the downtime?", a: "You will wear a compression vest for 4–6 weeks. Return to desk work in 5–7 days. Light gym (lower body only) at 3 weeks. Full chest training at 6 weeks. Most patients feel very comfortable within the first week." },
          { q: "Can it come back after surgery?", a: "The glandular tissue removed surgically will not regenerate. However, if the underlying hormonal cause is not addressed, new tissue could theoretically develop. Significant weight gain can also cause fat to return. Dr. Tasneem investigates and addresses the root cause during your consultation." },
        ],
      },
      {
        slug: "nipple-surgery",
        name: "Nipple & Areola Surgery",
        tagline: "Subtle refinements — significant confidence.",
        description:
          "Nipple and areola surgery at Pelle Aesthetic Islamabad addresses inverted nipples, oversized areolae, asymmetrical nipple position, and post-augmentation nipple refinements. These precise outpatient procedures are performed under local anaesthesia and take 30–60 minutes with minimal recovery. Dr. Tasneem Elahi understands the deeply personal nature of these concerns and ensures every consultation is conducted with the utmost dignity and medical professionalism in our completely private I-8, Islamabad clinic.",
        duration: "30–60 minutes",
        sessions: "Single procedure",
        priceFrom: "Consultation required",
        benefits: ["Corrects inverted nipples permanently", "Reduces oversized areola", "Local anaesthesia, minimal recovery", "Day procedure — go home same day"],
        faqs: [
          { q: "Is inverted nipple correction permanent?", a: "Yes — surgical correction divides the tight ducts tethering the nipple, allowing it to project naturally. The correction is permanent in the vast majority of cases. Non-surgical suction devices are temporary; surgery is the definitive solution." },
          { q: "Will I lose nipple sensation?", a: "Sensation is preserved in most cases. Dr. Tasneem uses careful, nerve-sparing technique. A small proportion of patients (less than 10%) may notice temporary or, rarely, permanent change in sensation. This is discussed fully in your consultation." },
          { q: "Can I breastfeed after inverted nipple surgery?", a: "This depends on the technique used. Dr. Tasneem offers both duct-preserving techniques (which may maintain breastfeeding ability) and complete duct-dividing techniques (which are more reliable but affect breastfeeding). Your preference and plans are discussed to choose the appropriate approach." },
          { q: "How long is recovery?", a: "Recovery is very quick — you can return to normal daily activities within 24–48 hours. The surgical site is tender for 1–2 weeks. Driving and desk work are typically resumed within 2 days. Exercise at 2–3 weeks." },
        ],
      },
    ],
  },

  {
    slug: "dermatology",
    number: "04",
    name: "Dermatology",
    short: "Acne, pigmentation and skin conditions.",
    icon: "⬡",
    description:
      "Skin treatment in Islamabad for acne and acne scars, melasma, pigmentation and dark spots, as well as vitiligo, psoriasis and keloids. Dr. Tasneem Elahi examines your skin, explains the cause and builds a treatment plan that can combine medical treatment, peels and laser — suited to Pakistani skin types and Islamabad's climate.",
    image: laser,
    treatments: [
      {
        slug: "acne-treatment",
        name: "Acne & Acne Scar Treatment",
        tagline: "Clear skin — from active breakouts to deep scars.",
        description:
          "A comprehensive acne management programme combining medical-grade topicals, chemical peels, laser and microneedling with PRP — targeting both active acne and post-acne scarring.",
        duration: "30–60 minutes",
        sessions: "3–8 sessions",
        priceFrom: "PKR 8,000 / session",
        benefits: ["Clears active acne", "Treats blackheads and cysts", "Reduces post-acne hyperpigmentation", "Fades deep acne scars"],
        faqs: [
          { q: "How long until I see clear skin?", a: "Significant improvement in 6–8 weeks with the right protocol. Scarring takes 3–6 months to visibly improve." },
        ],
      },
      {
        slug: "melasma-treatment",
        name: "Melasma & Pigmentation Treatment",
        tagline: "Even skin tone — goodbye dark patches.",
        description:
          "Targeting the toughest pigmentation condition in South Asian skin — melasma — with a combination of peels, PICO laser, oral medications and prescription topicals.",
        duration: "30–45 minutes",
        sessions: "6–12 sessions",
        priceFrom: "PKR 10,000 / session",
        benefits: ["Reduces stubborn dark patches", "Prevents recurrence with maintenance", "Safe for all South Asian skin tones"],
        faqs: [],
      },
      {
        slug: "vitiligo-treatment",
        name: "Vitiligo Treatment",
        tagline: "Restore pigment and confidence.",
        description:
          "Comprehensive vitiligo management using NB-UVB phototherapy, topical immunomodulators, excimer laser and surgical options for stable vitiligo.",
        duration: "Varies",
        sessions: "Ongoing maintenance",
        priceFrom: "Consultation required",
        benefits: ["Slows vitiligo progression", "Repigmentation therapy", "Surgical options for stable cases"],
        faqs: [],
      },
      {
        slug: "psoriasis-treatment",
        name: "Psoriasis Treatment",
        tagline: "Control psoriasis flares — long-term relief.",
        description:
          "Personalised psoriasis management combining topicals, phototherapy (NB-UVB), oral systemic treatments and biologic options for severe cases.",
        duration: "Varies",
        sessions: "Ongoing",
        priceFrom: "Consultation required",
        benefits: ["Rapid flare control", "Long-term remission", "Biologics available for difficult cases"],
        faqs: [],
      },
      {
        slug: "keloid-treatment",
        name: "Keloid & Scar Treatment",
        tagline: "Flatten and fade raised scars permanently.",
        description:
          "Keloid and hypertrophic scar treatment using intralesional steroid injections, laser resurfacing and surgical revision — with careful long-term follow-up.",
        duration: "30–60 minutes",
        sessions: "3–6 sessions",
        priceFrom: "PKR 8,000 / session",
        benefits: ["Flattens raised keloid scars", "Reduces redness", "Prevents recurrence"],
        faqs: [],
      },
    ],
  },
  {
    slug: "hair-transplant",
    number: "05",
    name: "Hair Transplant",
    short: "FUE, DHI and hair-loss treatment.",
    icon: "⟡",
    description:
      "Hair transplant in Islamabad using FUE and DHI techniques, in partnership with hair transplant specialist Dr. Mazhar Hussain. We also offer beard transplant, female hair transplant and PRP hair treatment for thinning hair. Send photos on WhatsApp for an estimate of the grafts you need before your visit.",
    image: hair,
    treatments: [
      {
        slug: "fue-hair-transplant",
        name: "FUE Hair Transplant",
        tagline: "The gold standard in permanent hair restoration.",
        description:
          "Follicular Unit Extraction (FUE) hair transplant at Pelle Aesthetic in I-8 Islamabad harvests individual hair follicles from your donor area and precisely implants them into thinning or bald zones — creating a completely natural, undetectable hairline. Dr. Tasneem meticulously angles every graft to match your native hair growth pattern. With over 500 successful hair transplant procedures performed in Islamabad and for patients travelling from across Pakistan, Pelle is the capital's most trusted name in permanent hair restoration.",
        duration: "6–8 hours",
        sessions: "Single procedure",
        priceFrom: "PKR 70,000+",
        benefits: [
          "No linear scar on the donor area",
          "Natural hairline design",
          "Permanent, lifelong results",
          "Can be combined with PRP for faster growth",
        ],
        faqs: [
          { q: "How many grafts will I need?", a: "Typically 1,500–3,500 grafts depending on your degree of hair loss. A consultation determines this exactly." },
          { q: "When does hair grow after transplant?", a: "Transplanted hair sheds at 2–4 weeks, then regrows permanently from month 3. Full result visible at 12 months." },
        ],
      },
      {
        slug: "dhi-hair-transplant",
        name: "DHI (Direct Hair Implantation)",
        tagline: "Maximum density — minimum downtime.",
        description:
          "DHI uses a specialised Choi Implanter Pen to simultaneously extract and implant follicles — allowing higher density, no shaving required in many cases, and faster healing.",
        duration: "8–10 hours",
        sessions: "Single procedure",
        priceFrom: "PKR 90,000+",
        benefits: [
          "No shaving required (unshaved DHI option)",
          "Higher graft density per session",
          "Faster healing — return to work in 3–5 days",
        ],
        faqs: [],
      },
      {
        slug: "beard-hair-transplant",
        name: "Beard & Moustache Transplant",
        tagline: "A full, dense beard — naturally grown.",
        description:
          "For men with patchy beards, scars or naturally thin facial hair — FUE beard transplant harvests follicles from the scalp and places them precisely in the beard area.",
        duration: "4–6 hours",
        sessions: "Single procedure",
        priceFrom: "PKR 60,000+",
        benefits: ["Full beard coverage in patches", "Natural growth direction", "Permanent results"],
        faqs: [],
      },
      {
        slug: "prp-hair-treatment",
        name: "PRP Hair Treatment",
        tagline: "Awaken dormant follicles with growth factors.",
        description:
          "Platelet-Rich Plasma injected into the scalp activates dormant hair follicles, slows hair loss and promotes thicker, denser regrowth — ideal for early-stage hair loss or as a post-transplant booster.",
        duration: "45–60 minutes",
        sessions: "6–8 sessions",
        priceFrom: "PKR 15,000 / session",
        benefits: ["Slows progressive hair loss", "Thickens existing hair", "100% natural — your own blood", "No downtime"],
        faqs: [],
      },
      {
        slug: "female-hair-transplant",
        name: "Female Hair Transplant",
        tagline: "Restore your hairline and density — discreetly.",
        description:
          "Female pattern hair loss and hairline recession can be corrected with FUE or DHI transplant — specifically designed for women's hairline anatomy and density requirements.",
        duration: "4–8 hours",
        sessions: "Single procedure",
        priceFrom: "Consultation required",
        benefits: ["Addresses female-pattern thinning", "Hairline lowering and density restoration", "Minimal visible scarring"],
        faqs: [],
      },
    ],
  },
  {
    slug: "intimate-wellness",
    number: "06",
    name: "Intimate Wellness",
    short: "Confidential intimate care.",
    icon: "◇",
    description:
      "Confidential intimate wellness treatments in Islamabad, led by Dr. Tasneem Elahi (Cosmetologist, 30+ years experience) — including labiaplasty, vaginal tightening, hymenoplasty and treatments for men. Every consultation is private and by appointment only, and your details are never shared.",
    image: intimate,
    treatments: [
      {
        slug: "labiaplasty",
        name: "Labiaplasty Surgery",
        tagline: "Private, comfortable care — personalised for you.",
        description:
          "Safe Labiaplasty Surgery in Islamabad at Pelle Aesthetic & Cosmetic — the most discreet and trusted intimate wellness clinic in Pakistan. Labiaplasty involves surgical reshaping of the labia minora or majora to relieve physical discomfort, correct asymmetry, or address self-consciousness that affects daily activity or clothing choices. Performed under local or general anaesthesia by Dr. Tasneem Elahi (Cosmetologist, 30+ years surgical experience) in a completely private, appointment-only setting at our I-8, Islamabad clinic. Many patients report immediate relief from discomfort during exercise, cycling, and everyday movement — with renewed confidence in fitted clothing within 3–4 weeks. Your privacy is absolutely protected at every stage.",
        duration: "1–2 hours",
        sessions: "Single procedure",
        priceFrom: "Consultation required",
        benefits: [
          "Relieves physical discomfort during activity and exercise",
          "Corrects labial asymmetry and size concerns",
          "Improves comfort in fitted clothing and during daily life",
          "Completely private and confidential consultation",
          "Minimal recovery — return to light activity in 2–4 weeks",
        ],
        faqs: [
          { q: "Is labiaplasty painful?", a: "No — the procedure is performed under local or general anaesthesia, so you feel nothing during surgery. Post-operative discomfort is mild and well managed with prescribed oral pain medication for 3–5 days. Most patients are surprised at how comfortable the recovery is. Dr. Tasneem uses long-acting local anaesthetic at the end of surgery to minimise early post-op discomfort." },
          { q: "How long is the recovery after labiaplasty?", a: "Most patients return to light daily activity (desk work, walking) within 5–7 days. You should avoid strenuous exercise, swimming, and tight clothing for 3–4 weeks. Full healing takes 6–8 weeks. Dr. Tasneem provides a detailed, personalised recovery plan at your consultation so you know exactly what to expect at every stage." },
          { q: "Is my information completely confidential?", a: "Yes — 100% confidential, always. At Pelle Aesthetic Islamabad, all intimate procedures are appointment-only with completely private waiting areas. Your medical records, consultation details, and procedure information are never shared with any third party under any circumstances. Data is stored with full medical privacy compliance. Many of our patients appreciate that even our front-of-house staff are not made aware of the specific procedure — only Dr. Tasneem." },
          { q: "Who is a good candidate for labiaplasty?", a: "Good candidates are women who experience physical discomfort during exercise, cycling, or sexual activity due to labial size, women who have labial asymmetry causing self-consciousness, or women who feel discomfort in swimwear or fitted clothing. There is no 'ideal' shape — the goal is entirely personal comfort and confidence. Dr. Tasneem will assess your specific anatomy and discuss your goals in a completely private, non-judgmental consultation." },
          { q: "Will the results look natural?", a: "Yes — the goal of labiaplasty at Pelle is always a natural, comfortable, functional result — not an artificial-looking outcome. Dr. Tasneem uses conservative, precise surgical techniques to create a smooth, symmetrical result that looks and feels completely natural. Scarring is placed in natural anatomical folds and fades to a thin, barely visible line within 6–12 months." },
        ],
      },
      {
        slug: "vaginal-tightening",
        name: "Vaginal Tightening",
        tagline: "Restore tone and confidence — non-surgically or surgically.",
        description:
          "Vaginal Tightening at Pelle Aesthetic Islamabad — offering both non-surgical laser rejuvenation and surgical vaginoplasty to restore vaginal tone and vitality following childbirth or natural ageing. Dr. Tasneem Elahi (Cosmetologist, 30+ years experience) at our I-8, Islamabad clinic uses state-of-the-art fractional laser technology for the non-surgical option — requiring no anaesthesia, no downtime, and delivering progressive improvement over 3 sessions. Surgical vaginoplasty is available for patients seeking a more definitive correction. Many of our patients across Islamabad and Rawalpindi report significant improvements in confidence and intimate wellbeing following treatment. All consultations are completely private at our appointment-only clinic.",
        duration: "30–90 minutes",
        sessions: "1–3 sessions (laser) or single (surgical)",
        priceFrom: "Consultation required",
        benefits: [
          "Non-surgical laser option — zero downtime",
          "Restores vaginal tone and tightness after childbirth",
          "Improves intimate sensation and confidence",
          "Surgical option for comprehensive correction",
          "Completely private and confidential at every stage",
        ],
        faqs: [
          { q: "Is vaginal tightening painful?", a: "The non-surgical laser option causes minimal discomfort — most patients describe a warm sensation during the 20–30 minute treatment. No anaesthesia is required. The surgical vaginoplasty is performed under general anaesthesia with no intraoperative pain. Post-operative discomfort after surgery is managed with oral medication for 3–5 days. Dr. Tasneem tailors the approach to your comfort level." },
          { q: "How long is recovery?", a: "The laser (non-surgical) option has zero downtime — you can resume normal activities immediately. Avoid swimming and strenuous exercise for 48–72 hours. Surgical vaginoplasty requires 4–6 weeks of recovery before return to exercise and intimate activity. Most patients take 1 week off work after surgery. Dr. Tasneem provides a full recovery plan at your consultation." },
          { q: "Is this procedure completely confidential?", a: "Absolutely. Pelle Aesthetic Islamabad is an appointment-only, fully private clinic. Vaginal tightening consultations are conducted one-to-one with Dr. Tasneem in a completely private consultation room. No information is ever shared with a third party. Your procedure records are handled with strict medical confidentiality — the same standard applied by any major private hospital." },
          { q: "How many sessions are needed?", a: "The laser vaginal tightening protocol requires 3 sessions spaced 4–6 weeks apart for optimal results. Many patients notice improvement after the first session. A single surgical vaginoplasty delivers immediate, definitive correction. Dr. Tasneem will recommend the appropriate option based on your anatomy, age, and degree of laxity during a private consultation." },
          { q: "Who is the right candidate for this procedure?", a: "Women who have experienced vaginal laxity following one or more vaginal deliveries, or women who notice changes in tone due to ageing, are ideal candidates. If you notice reduced sensation during intimate activity, discomfort with tampons, or reduced confidence, this treatment can significantly help. Both the laser and surgical options are safe for women across a wide age range. Dr. Tasneem will conduct a thorough private assessment to recommend the most appropriate approach." },
        ],
      },
      {
        slug: "hymenoplasty",
        name: "Hymenoplasty (Hymen Repair)",
        tagline: "A private, sensitive procedure — handled with complete care.",
        description:
          "Hymenoplasty at Pelle Aesthetic Islamabad is performed with the utmost sensitivity, dignity, and complete confidentiality. Dr. Tasneem Elahi (Cosmetologist, 30+ years experience) offers hymen repair surgery in a completely private, non-judgmental clinical environment at our I-8, Islamabad clinic. The procedure is performed under local anaesthesia and takes 30–60 minutes. Recovery is quick — most patients resume normal activity within 24–48 hours. We understand the deeply personal and cultural significance of this procedure for many women in Pakistan, and we are committed to providing a completely safe, discreet, and medically professional experience. No information about this procedure is ever shared with any party. You are seen by Dr. Tasneem only — your privacy is our absolute priority.",
        duration: "30–60 minutes",
        sessions: "Single procedure",
        priceFrom: "Consultation required",
        benefits: [
          "Complete confidentiality guaranteed — records never shared",
          "Performed under local or general anaesthesia",
          "Quick recovery — normal activity in 24–48 hours",
          "Non-judgmental, dignified medical environment",
          "Appointment-only — fully private consultation",
        ],
        faqs: [
          { q: "Is this procedure completely confidential?", a: "Yes — this is one of our most private procedures. At Pelle Aesthetic Islamabad, hymenoplasty is conducted with complete discretion. Only Dr. Tasneem is involved in your consultation and procedure. No information is shared with any third party — including family members — under any circumstances. Records are stored with the strictest medical privacy compliance. We have helped hundreds of women in Pakistan access this care safely and privately." },
          { q: "Is the procedure painful?", a: "No — hymenoplasty is performed under local anaesthesia. You feel no pain during the procedure. Mild soreness for 2–3 days post-procedure is normal and managed with mild oral pain relief. Most patients are surprised at how comfortable and straightforward the process is. The procedure itself takes 30–60 minutes and you are able to leave the clinic shortly after." },
          { q: "How long is recovery after hymenoplasty?", a: "Recovery is very quick. Most patients resume normal daily activities (desk work, light walking) within 24–48 hours. You should avoid strenuous exercise and swimming for 2 weeks. Full tissue healing takes 4–6 weeks. Dr. Tasneem provides clear, private written aftercare instructions so you know exactly what to do at home during recovery." },
          { q: "How do I book a consultation privately?", a: "The most discreet way is via WhatsApp at +92 333 5100650 — simply message us and our team will arrange a completely private appointment at a time that suits you. Alternatively, you can submit a confidential appointment request through our website. All communication is handled with complete discretion. There is no obligation at the consultation — Dr. Tasneem will explain the procedure fully before any decision is made." },
          { q: "Is hymenoplasty medically safe?", a: "Yes — when performed by a qualified, experienced surgeon in a proper clinical environment. Dr. Tasneem Elahi has 30+ years of surgical experience and has performed this procedure for many patients across Pakistan. The procedure is a straightforward outpatient surgery with an excellent safety record. As with any surgical procedure, Dr. Tasneem will conduct a thorough medical assessment to ensure you are an appropriate candidate before proceeding." },
        ],
      },
      {
        slug: "p-shot",
        name: "P-Shot (Priapus Shot)",
        tagline: "Improved function and confidence — naturally.",
        description:
          "The P-Shot (Priapus Shot) at Pelle Aesthetic Islamabad uses your own platelet-rich plasma (PRP) growth factors — injected into specific penile tissue — to improve erectile function, sensitivity, and overall performance. A completely non-surgical, medically supervised procedure performed by Dr. Tasneem Elahi (Cosmetologist, 30+ years experience) in a completely private, appointment-only clinical environment at our I-8, Islamabad clinic. Because the P-Shot uses your own blood's growth factors, there is zero risk of allergic reaction and no foreign substance is introduced. Erectile dysfunction affects up to 40% of men over 40 in Pakistan — yet remains deeply under-discussed due to social stigma. At Pelle, we treat this with complete medical professionalism, dignity, and privacy. Results include improved erectile quality, enhanced sensation, and renewed confidence — typically lasting 12–18 months per treatment course.",
        duration: "45 minutes",
        sessions: "1–3 sessions",
        priceFrom: "Consultation required",
        benefits: [
          "Improves erectile function naturally — using your own PRP",
          "Enhanced sensitivity and performance",
          "100% natural — no synthetic chemicals or implants",
          "No downtime — return to normal activity same day",
          "Completely confidential — appointment-only private clinic",
        ],
        faqs: [
          { q: "Is the P-Shot painful?", a: "Minimal discomfort. A strong topical numbing cream is applied for 20–30 minutes before the procedure. The injections use very fine needles and most patients rate the discomfort as 2–3 out of 10. The entire treatment takes 45 minutes and you are able to resume normal activities immediately afterward. There is no downtime." },
          { q: "How long do P-Shot results last?", a: "Most patients notice improvements within 3–4 weeks, with full results appearing at 3 months. Results typically last 12–18 months. A maintenance course of 1–2 sessions annually sustains the improvement. Dr. Tasneem recommends combining the P-Shot with lifestyle optimisation (testosterone check, sleep, exercise) for maximum and lasting benefit." },
          { q: "Is my consultation completely private?", a: "Yes — 100%. At Pelle Aesthetic Islamabad, men's intimate health consultations are conducted in a completely private setting, appointment-only, with no other patients present. Your records are never shared with any third party. Dr. Tasneem treats erectile dysfunction with the same clinical professionalism as any other medical condition — without judgment. Many of our patients are senior professionals, businessmen, and married men seeking to restore confidence discreetly." },
          { q: "Who is a suitable candidate for the P-Shot?", a: "Men experiencing reduced erectile quality, decreased sensitivity, or reduced sexual confidence — whether due to age, stress, post-prostate issues, or diabetes — are suitable candidates. Men in their 30s, 40s, and 50s benefit most. Dr. Tasneem conducts a confidential health assessment to understand the root cause before recommending the P-Shot, ensuring it is the right solution for your specific situation." },
          { q: "Is the P-Shot medically safe?", a: "Yes — the P-Shot is one of the safest medical procedures available because it uses your own blood plasma (PRP). There is no foreign substance, no implant, and no surgery involved. The only risks are minor bruising or swelling at the injection site, which resolves within 24–48 hours. The procedure is performed exclusively by Dr. Tasneem Elahi — a medically qualified surgeon with 30+ years of clinical experience — ensuring the highest standard of safety and care." },
        ],
      },
      {
        slug: "penile-fillers",
        name: "Penile Fillers & Enhancement",
        tagline: "Safe, medically supervised enhancement.",
        description:
          "Penile girth enhancement using premium hyaluronic acid fillers at Pelle Aesthetic Islamabad — a non-surgical, medically supervised procedure performed by Dr. Tasneem Elahi (Cosmetologist, 30+ years experience) in a completely private, appointment-only clinical environment at our I-8, Islamabad clinic. Hyaluronic acid filler is injected precisely to enhance penile girth with immediate visible results — fully reversible with hyaluronidase enzyme at any time. Surgical phalloplasty (permanent enhancement) is also available for patients seeking definitive results. All consultations are conducted with absolute privacy and medical professionalism. Dr. Tasneem is one of Islamabad's most experienced practitioners in male intimate enhancement, having treated patients from across Pakistan, the UAE, and Saudi Arabia who require discreet, expert care.",
        duration: "45–60 minutes",
        sessions: "1 session (fillers) or single procedure (surgical)",
        priceFrom: "Consultation required",
        benefits: [
          "Immediate visible girth enhancement",
          "Fully reversible with hyaluronidase — zero permanent commitment",
          "Medically supervised by Dr. Tasneem Elahi — 18 years experience",
          "No surgery, no downtime (filler option)",
          "Completely private, appointment-only clinical setting",
        ],
        faqs: [
          { q: "Is penile filler enhancement painful?", a: "No — a strong topical numbing cream is applied before the procedure. The injections are administered with very fine needles and most patients rate the discomfort as 2–3 out of 10. The entire treatment takes 45–60 minutes. Mild swelling for 24–48 hours is normal. You can return to normal non-strenuous activity the same day." },
          { q: "How long do the results last?", a: "Hyaluronic acid filler results typically last 12–18 months. The filler gradually absorbs naturally over this period. Maintenance treatments are recommended at 12–18 months to sustain the result. If at any point you are not satisfied, the filler can be completely dissolved with a hyaluronidase injection within 24–48 hours. Surgical phalloplasty offers permanent results for those who prefer a definitive outcome." },
          { q: "Is this procedure completely private and confidential?", a: "Absolutely. Pelle Aesthetic Islamabad operates as an appointment-only, fully private clinic. Male intimate enhancement consultations are one-to-one with Dr. Tasneem in a completely sealed, private consultation suite. No staff member other than Dr. Tasneem is involved. Your records are protected by strict medical privacy compliance and never shared with any third party under any circumstances." },
          { q: "Is penile filler medically safe?", a: "Yes — when administered by a qualified, experienced medical professional using pharmaceutical-grade hyaluronic acid fillers. At Pelle Aesthetic Islamabad, only premium FDA-approved HA filler products are used. The procedure is performed exclusively by Dr. Tasneem Elahi (Cosmetologist, 30+ years experience) in a fully sterile clinical environment. A reversal agent (hyaluronidase) is always on hand. Dr. Tasneem conducts a full medical assessment before proceeding to confirm suitability." },
          { q: "What is the difference between filler enhancement and surgical phalloplasty?", a: "Penile filler enhancement is non-surgical, immediate, reversible, and has no downtime — results last 12–18 months. It is ideal for patients who want to try enhancement before committing to permanent results. Surgical phalloplasty is a surgical procedure that delivers permanent girth and/or length enhancement. Dr. Tasneem will discuss both options in a private consultation, explain the risks and benefits of each, and recommend the most appropriate approach based on your goals, anatomy, and lifestyle." },
        ],
      },
    ],
  },
  {
    slug: "laser-skincare",
    number: "07",
    name: "Laser & Skincare",
    short: "Laser hair removal, HydraFacial and more.",
    icon: "✳",
    description:
      "Laser and skin treatments in Islamabad — laser hair removal, HydraFacial, PICO laser for pigmentation, fractional CO₂ for acne scars, HIFU skin tightening, chemical peels and microneedling. Laser settings are adjusted for Pakistani skin tones, and most treatments need little or no downtime.",
    image: laser,
    treatments: [
      {
        slug: "pico-laser",
        name: "PICO Laser Treatment",
        tagline: "Pigment, freckles & dull skin — corrected at the source.",
        description:
          "PICO Laser Treatment in Islamabad at Pelle Aesthetic & Cosmetic — led by Dr. Tasneem Elahi (Cosmetologist, 30+ years experience). Ultra-short picosecond laser pulses shatter melanin deposits — melasma patches, sun spots, freckles and uneven tone — with virtually no downtime. Calibrated for South Asian skin at our I-8, Islamabad clinic, PICO Laser delivers a luminous, glass-skin complexion that Islamabad's working professionals trust for zero-disruption treatment.",
        duration: "30–45 minutes",
        sessions: "3–6 sessions",
        priceFrom: "PKR 18,000 / session",
        benefits: [
          "Targets melasma, freckles & sun damage at source",
          "Refines pores and improves overall texture",
          "No downtime — return to routine same day",
          "Safe and calibrated for South Asian skin tones",
          "Glass-skin glow from session 1",
        ],
        faqs: [
          { q: "Is PICO Laser painful?", a: "Most patients describe a mild snapping sensation — comparable to a rubber band flick. Dr. Tasneem applies a topical numbing cream 20 minutes before to maximise comfort. The 30–45 minute treatment is well tolerated with no anaesthesia required." },
          { q: "How many PICO Laser sessions will I need?", a: "Typically 3–6 sessions spaced 3–4 weeks apart. Superficial freckles may clear in 2–3 sessions. Deeper melasma or sun damage requires 5–6 sessions. Dr. Tasneem assesses pigmentation depth at consultation to give you a personalised session plan." },
          { q: "When will I see results from PICO Laser?", a: "A radiance improvement is visible within 3–5 days of the first session. Pigment spots darken briefly then flake off within 7–10 days, revealing clearer skin beneath. Progressive improvement continues over 4–8 weeks per session as the body clears shattered pigment particles." },
          { q: "Is PICO Laser safe for Pakistani skin tones?", a: "Yes — PICO Laser is one of the safest pigmentation lasers for South Asian skin because its picosecond pulse speed targets only the pigment particles without heating the surrounding skin. Dr. Tasneem has extensive experience calibrating energy settings specifically for Fitzpatrick Type IV–V skin tones common in Pakistan." },
          { q: "What is the downtime after PICO Laser?", a: "Minimal. Mild redness resolves within 2–4 hours. Pigment spots may temporarily darken and flake over 7–10 days — this is the normal healing process. SPF50 sunscreen must be applied daily for 4 weeks post-treatment. Most patients return to work the same day." },
        ],
      },
      {
        slug: "fractional-co2",
        name: "Fractional COâ‚‚ Laser",
        tagline: "Resurface scars, lines and texture in a single session.",
        description:
          "Fractional COâ‚‚ Laser Resurfacing in Islamabad at Pelle Aesthetic — performed by Dr. Tasneem Elahi (Cosmetologist, 30+ years experience). Ablative fractional laser energy creates thousands of microscopic treatment zones, removing damaged skin and triggering powerful collagen remodelling. A single session visibly improves acne scars, pore size, fine lines and skin texture — with results that continue developing over 3–6 months as new collagen forms. Pakistan's most effective treatment for deep acne scarring and skin texture refinement, calibrated at our I-8, Islamabad clinic for South Asian skin.",
        duration: "60 minutes",
        sessions: "1–3 sessions",
        priceFrom: "PKR 35,000 / session",
        benefits: [
          "Deep acne scar revision — visible improvement from session 1",
          "Smoother skin texture & refined pores",
          "Long-term collagen remodelling for 3–6 months post-treatment",
          "Reduces fine lines and skin laxity",
          "Calibrated safely for South Asian skin tones",
        ],
        faqs: [
          { q: "What is the downtime after Fractional COâ‚‚ Laser?", a: "Expect 5–7 days of redness, swelling and skin peeling — similar in appearance to mild sunburn. The skin will feel tight and may peel in sheets from day 3–5. Most patients return to social activities and light work after 7 days with mineral makeup. Full skin normalisation takes 2–3 weeks." },
          { q: "Is Fractional COâ‚‚ Laser safe for darker Pakistani skin?", a: "Yes — with correct technique and strict protocols. Dr. Tasneem uses conservative energy settings, mandatory pre-treatment skin prep (4 weeks of tretinoin and hydroquinone), and post-laser SPF50 protection to ensure the safest possible outcome for Fitzpatrick Type IV–V skin. We do not rush the process." },
          { q: "How many sessions will I need for acne scars?", a: "Most patients achieve significant improvement with 2–3 sessions spaced 6–8 weeks apart. Mild rolling scars may clear in 1–2 sessions. Deep boxcar or ice-pick scars may require 3 sessions combined with subcision or microneedling. Dr. Tasneem gives a realistic assessment at consultation." },
          { q: "Is the procedure painful?", a: "A topical numbing cream is applied for 45–60 minutes before the procedure. Most patients feel warmth and mild discomfort during treatment. A cooling fan is used throughout. Post-procedure, the skin feels like a sunburn for 24–48 hours, managed with prescribed soothing cream and oral pain relief if needed." },
          { q: "When do I see final results?", a: "Initial skin smoothness is visible once peeling resolves at 2–3 weeks. Collagen continues to remodel for 3–6 months post-treatment — results improve progressively over this period. Final scar revision results are typically fully visible at 6 months after the last session." },
        ],
      },
      {
        slug: "hydrafacial",
        name: "HydraFacial",
        tagline: "Cleanse, extract, hydrate — the signature glow.",
        description:
          "A multi-step medical facial that cleanses, exfoliates and infuses skin with custom serums for an immediate, lit-from-within glow. No downtime, suitable for all skin types.",
        duration: "45 minutes",
        sessions: "Monthly",
        priceFrom: "PKR 12,000 / session",
        benefits: ["Instant radiance", "Deep pore cleansing", "Hydration boost", "Zero downtime"],
        faqs: [{ q: "How often should I get HydraFacial?", a: "Once a month for ongoing radiance and skin health maintenance." }],
      },
      {
        slug: "laser-hair-removal",
        name: "Laser Hair Removal",
        tagline: "Permanent freedom from unwanted hair — safely.",
        description:
          "Medical-grade diode laser hair removal at Pelle Aesthetic Islamabad permanently reduces unwanted facial and body hair with 80–95% long-term reduction. Our laser system is specifically equipped with wavelengths calibrated for safe and effective treatment on South Asian and Pakistani skin tones, which have higher melanin concentrations. This is Islamabad's most popular laser procedure — with patients travelling from Rawalpindi, Lahore and beyond for our proven results and expert care.",
        duration: "15–60 minutes",
        sessions: "6–8 sessions",
        priceFrom: "PKR 5,000 / area",
        benefits: [
          "Permanent 80–95% reduction",
          "Safe for face, arms, legs, underarms and bikini area",
          "No ingrown hairs",
          "Calibrated for darker South Asian skin tones",
        ],
        faqs: [
          { q: "How many sessions are needed?", a: "6–8 sessions spaced 4–6 weeks apart for best results." },
          { q: "Is it safe for darker skin?", a: "Yes — our diode laser with specific wavelengths is designed to be safe on all skin tones." },
        ],
      },
      {
        slug: "hifu",
        name: "HIFU Non-Surgical Facelift",
        tagline: "Lift and tighten skin — without surgery.",
        description:
          "High-Intensity Focused Ultrasound (HIFU) non-surgical facelift at Pelle Aesthetic in Islamabad delivers focused ultrasound energy deep into the SMAS layer — the same layer addressed in a surgical facelift — stimulating powerful collagen remodelling for a visible lift and skin tightening with absolutely zero downtime. A single annual session produces results that continue to develop over 3–6 months, making HIFU the treatment of choice for professionals in Islamabad who cannot afford surgical recovery time.",
        duration: "60–90 minutes",
        sessions: "1 session (annual)",
        priceFrom: "PKR 50,000 / session",
        benefits: [
          "Non-surgical alternative to facelift",
          "Lifts brows, jowls and neck",
          "Results develop over 3–6 months",
          "Single session lasts 12–18 months",
        ],
        faqs: [
          { q: "Is HIFU painful?", a: "Some patients feel warmth and tingling. We adjust energy levels for your comfort." },
          { q: "When do results appear?", a: "Initial tightening is visible immediately. Full collagen response develops over 3–6 months." },
        ],
      },
      {
        slug: "chemical-peels",
        name: "Chemical Peels",
        tagline: "Refined exfoliation for tone, clarity and luminosity.",
        description:
          "Medical-grade peels tailored to your concerns — from gentle brightening (Glycolic, Lactic) to advanced resurfacing (TCA, Cosmelan) — for acne, pigmentation and anti-aging.",
        duration: "30 minutes",
        sessions: "3–6 sessions",
        priceFrom: "PKR 8,000 / session",
        benefits: ["Brightens skin tone", "Reduces active acne", "Smooths texture", "Cosmelan for severe melasma"],
        faqs: [{ q: "Will my skin peel?", a: "Light flaking is normal for 3–5 days, depending on peel strength selected." }],
      },
      {
        slug: "microneedling",
        name: "Microneedling with PRP",
        tagline: "Collagen induction for smoother, brighter skin.",
        description:
          "Dermapen microneedling creates micro-channels in the skin to stimulate collagen — combined with PRP for accelerated healing and dramatically enhanced results on scars, pores and texture.",
        duration: "60 minutes",
        sessions: "3–6 sessions",
        priceFrom: "PKR 12,000 / session",
        benefits: ["Reduces acne scars and pores", "Improves skin texture and laxity", "PRP accelerates results", "Minimal 24-hr downtime"],
        faqs: [],
      },
    ],
  },
];


export const findCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const findTreatment = (catSlug: string, slug: string) =>
  findCategory(catSlug)?.treatments.find((t) => t.slug === slug);
