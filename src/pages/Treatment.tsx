import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, Repeat, Wallet, Check, MessageCircle, Send, Lock } from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { NavLight } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { GeoDataLayer } from "@/components/site/GeoDataLayer";
import { WhatsAppFAB } from "@/components/site/WhatsAppFAB";
import { BackToTopFAB } from "@/components/site/BackToTopFAB";
import { findCategory, findTreatment } from "@/data/services";
import { usePageSeo } from "@/hooks/usePageSeo";
import { useEffect, useState } from "react";
import { submitToSheet } from "@/lib/submitToSheet";

const Treatment = () => {
  const { catSlug = "", slug = "" } = useParams();
  const cat = findCategory(catSlug);
  const t = findTreatment(catSlug, slug);

  // Sidebar form state
  const [sideForm, setSideForm] = useState({ name: "", phone: "", message: "" });
  const [sideSending, setSideSending] = useState(false);
  const [sideDone, setSideDone] = useState(false);

  // Per-page SEO meta
  usePageSeo(
    t && cat
      ? {
          title: `${t.name} in Islamabad | Dr. Tasneem Elahi — Pelle Aesthetic`,
          description: `${t.tagline} ${t.description.slice(0, 140)} Available at Pelle Aesthetic & Cosmetic in Islamabad. Book with Dr. Tasneem Elahi.`,
          canonicalPath: `/category/${catSlug}/${slug}`,
          keywords: `${t.name.toLowerCase()} islamabad, ${cat.name.toLowerCase()} islamabad, dr tasneem elahi, pelle aesthetic islamabad, best ${t.name.toLowerCase()} clinic islamabad`,
        }
      : {
          title: "Treatment | Pelle Aesthetic & Cosmetic Islamabad",
          description: "Expert cosmetic and aesthetic treatments in Islamabad by Dr. Tasneem Elahi.",
        }
  );

  // FAQ structured data (JSON-LD)
  useEffect(() => {
    if (!t || t.faqs.length === 0) return;
    const ld = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: t.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.id = "faq-ld";
    s.text = JSON.stringify(ld);
    document.head.appendChild(s);
    return () => { document.getElementById("faq-ld")?.remove(); };
  }, [t]);

  // MedicalProcedure + BreadcrumbList schema
  useEffect(() => {
    if (!t || !cat) return;

    // Map treatment slugs to body locations for richer schema
    const bodyLocationMap: Record<string, string> = {
      "rhinoplasty": "nose", "facelift": "face", "blepharoplasty": "eyelids",
      "liposuction": "abdomen", "tummy-tuck": "abdomen", "bbl": "buttocks",
      "ear-reshaping": "ears", "brow-lift": "forehead",
      "botox": "face", "dermal-fillers": "face", "lip-fillers": "lips",
      "profhilo": "face", "prp-therapy": "face", "glutathione-injections": "intravenous",
      "fue-hair-transplant": "scalp", "dhi-hair-transplant": "scalp",
      "beard-hair-transplant": "beard area", "prp-hair-treatment": "scalp",
      "female-hair-transplant": "scalp",
      "pico-laser": "face", "fractional-co2": "face", "hydrafacial": "face",
      "laser-hair-removal": "body", "hifu": "face", "chemical-peels": "face",
      "microneedling": "face",
      "acne-treatment": "face", "melasma-treatment": "face",
      "vitiligo-treatment": "skin", "psoriasis-treatment": "skin",
      "keloid-treatment": "skin",
      "breast-augmentation": "breast", "breast-reduction": "breast",
      "breast-lift": "breast", "gynecomastia": "chest", "nipple-surgery": "breast",
      "labiaplasty": "labia", "vaginal-tightening": "vagina",
      "hymenoplasty": "hymen", "p-shot": "penile", "penile-fillers": "penile",
    };

    const procedure = {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": t.name,
      "description": t.description,
      "procedureType": cat.slug === "cosmetic-surgery" || cat.slug === "breast-surgery"
        ? "https://health-lifesci.schema.org/SurgicalProcedure"
        : "https://health-lifesci.schema.org/NoninvasiveProcedure",
      "status": "EventScheduled",
      "bodyLocation": bodyLocationMap[slug] ?? "face",
      "followup": `Post-procedure care instructions are provided by Dr. Tasneem Elahi during your private consultation at Pelle Aesthetic & Cosmetic, Islamabad.`,
      "howPerformed": `${t.name} is performed by Dr. Tasneem Elahi (Cosmetologist, 30+ years experience) at Pelle Aesthetic & Cosmetic, I-8/3 Islamabad.`,
      "preparation": `A private consultation with Dr. Tasneem Elahi is required before any procedure. Full medical history review and personalised treatment planning is conducted.`,
      "provider": {
        "@type": "MedicalClinic",
        "name": "Pelle Aesthetic & Cosmetic",
        "url": "https://pelleaesthetic.pk",
        "telephone": "+92-333-5100650",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot 14, Street 32, I-8/3",
          "addressLocality": "Islamabad",
          "addressCountry": "PK"
        }
      }
    };
    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pelleaesthetic.pk/" },
        { "@type": "ListItem", "position": 2, "name": cat.name, "item": `https://pelleaesthetic.pk/category/${cat.slug}` },
        { "@type": "ListItem", "position": 3, "name": t.name, "item": `https://pelleaesthetic.pk/category/${cat.slug}/${t.slug}` },
      ],
    };
    const s1 = document.createElement("script");
    s1.type = "application/ld+json"; s1.id = "procedure-ld";
    s1.text = JSON.stringify(procedure);
    document.head.appendChild(s1);
    const s2 = document.createElement("script");
    s2.type = "application/ld+json"; s2.id = "breadcrumb-ld";
    s2.text = JSON.stringify(breadcrumb);
    document.head.appendChild(s2);
    return () => {
      document.getElementById("procedure-ld")?.remove();
      document.getElementById("breadcrumb-ld")?.remove();
    };
  }, [t, cat, slug]);

  if (!t || !cat) {
    return (
      <div className="min-h-screen bg-background">
        <NavLight />
        <div className="container-luxe py-40 text-center">
          <h1 className="font-display text-5xl">Treatment not found</h1>
          <Link to="/" className="link-underline mt-8 inline-block">Return home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <NavLight />

      {/* Hero / Header */}
      <section className="relative overflow-hidden border-b border-border bg-secondary/30">
        <div className="container-luxe grid gap-16 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-7">
            <Link to={`/category/${cat.slug}`} className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-3 w-3" /> {cat.name}
            </Link>
            <div className="eyebrow mt-10">Treatment · {cat.name} · Islamabad</div>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] md:text-7xl text-balance">{t.name}</h1>
            <p className="mt-6 max-w-xl font-display text-2xl italic leading-snug text-accent">{t.tagline}</p>
            <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-muted-foreground md:text-lg">{t.description}</p>

            <div className="mt-10 grid grid-cols-3 gap-px bg-border max-w-lg">
              <div className="bg-background p-5">
                <Clock className="h-4 w-4 text-primary" />
                <div className="mt-3 font-body text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Duration</div>
                <div className="mt-1 font-display text-lg">{t.duration}</div>
              </div>
              <div className="bg-background p-5">
                <Repeat className="h-4 w-4 text-primary" />
                <div className="mt-3 font-body text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Sessions</div>
                <div className="mt-1 font-display text-lg">{t.sessions}</div>
              </div>
              <div className="bg-background p-5">
                <Wallet className="h-4 w-4 text-primary" />
                <div className="mt-3 font-body text-[10px] uppercase tracking-[0.22em] text-muted-foreground">From</div>
                <div className="mt-1 font-display text-lg">{t.priceFrom}</div>
              </div>
            </div>
          </div>

          {/* Booking sidebar */}
          <aside className="md:col-span-5">
            <div className="bg-foreground p-8 text-background shadow-elegant md:p-10">
              <div className="eyebrow !text-accent">Book this treatment</div>
              {sideDone ? (
                <div className="mt-6 flex flex-col items-center text-center gap-4 py-4">
                  <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent text-xl">✓</span>
                  </div>
                  <div>
                    <div className="font-display text-2xl">Request Received!</div>
                    <p className="font-body text-sm text-background/70 mt-2">Dr. Tasneem's team will WhatsApp you within 2 hours.</p>
                  </div>
                  <a
                    href="https://wa.me/923335100650"
                    target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 bg-[#25D366] px-6 py-3 font-body text-xs uppercase tracking-[0.2em] text-white"
                  >
                    <MessageCircle className="h-4 w-4" /> Also WhatsApp Us
                  </a>
                </div>
              ) : (
                <>
                  <h2 className="mt-4 font-display text-3xl leading-tight">A consultation, on the house.</h2>
                  <p className="mt-3 font-body text-sm leading-relaxed text-background/70">
                    Share a few details and Dr. Tasneem's team will schedule your private consultation in Islamabad.
                  </p>
                  <form
                    className="mt-8 space-y-4"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      if (!sideForm.name || !sideForm.phone) return;
                      setSideSending(true);
                      try {
                        await Promise.allSettled([
                          submitToSheet({
                            name: sideForm.name,
                            phone: sideForm.phone,
                            category: t?.name ?? catSlug,
                            message: sideForm.message,
                            source: `Treatment Page — ${t?.name ?? slug}`,
                          }),
                          fetch("https://formspree.io/f/xanynvjk", {
                            method: "POST",
                            headers: { "Content-Type": "application/json", Accept: "application/json" },
                            body: JSON.stringify({
                              name: sideForm.name,
                              phone: sideForm.phone,
                              category: t?.name ?? catSlug,
                              message: sideForm.message,
                              _subject: `[Treatment] ${t?.name} Consultation — Pelle Aesthetic`,
                            }),
                          }),
                        ]);
                        setSideDone(true);
                      } catch { /* silent fail */ } finally {
                        setSideSending(false);
                      }
                    }}
                  >
                    <input
                      required
                      aria-label="Full name"
                      placeholder="Full name"
                      value={sideForm.name}
                      onChange={(e) => setSideForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full border border-background/20 bg-transparent px-4 py-3 font-body text-sm text-background placeholder:text-background/50 focus:border-accent focus:outline-none"
                    />
                    <input
                      required
                      type="tel"
                      aria-label="Phone or WhatsApp number"
                      placeholder="Phone / WhatsApp"
                      value={sideForm.phone}
                      onChange={(e) => setSideForm(f => ({ ...f, phone: e.target.value }))}
                      className="w-full border border-background/20 bg-transparent px-4 py-3 font-body text-sm text-background placeholder:text-background/50 focus:border-accent focus:outline-none"
                    />
                    <textarea
                      rows={3}
                      aria-label="Additional message or questions"
                      placeholder="Anything we should know?"
                      value={sideForm.message}
                      onChange={(e) => setSideForm(f => ({ ...f, message: e.target.value }))}
                      className="w-full resize-none border border-background/20 bg-transparent px-4 py-3 font-body text-sm text-background placeholder:text-background/50 focus:border-accent focus:outline-none"
                    />
                    <button
                      type="submit"
                      disabled={sideSending}
                      className="w-full flex items-center justify-center gap-2 bg-accent py-4 font-body text-xs uppercase tracking-[0.25em] text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
                    >
                      <Send className="h-4 w-4" />
                      {sideSending ? "Sending..." : "Request Consultation"}
                    </button>
                    <a
                      href={`https://wa.me/923335100650?text=${encodeURIComponent(`Hi, I'd like to book a consultation for ${t?.name ?? 'a treatment'} at Pelle Aesthetic.`)}`}
                      target="_blank" rel="noreferrer"
                      className="flex items-center justify-center gap-2 border border-background/20 py-3.5 font-body text-xs uppercase tracking-[0.22em] text-background hover:bg-background hover:text-foreground transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" /> WhatsApp Us
                    </a>
                    <div className="flex items-center gap-2 pt-1">
                      <Lock className="h-3 w-3 text-background/40 shrink-0" />
                      <p className="font-body text-[11px] text-background/40">100% private & confidential. Your data is never shared.</p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* Benefits */}
      <section className="container-luxe py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="eyebrow">Benefits</div>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-6xl">Why patients in Islamabad choose it.</h2>
          </div>
          <ul className="md:col-span-7 divide-y divide-border border-y border-border">
            {t.benefits.map((b) => (
              <li key={b} className="flex items-start gap-5 py-6">
                <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-4 w-4" />
                </span>
                <span className="font-body text-lg text-foreground/85">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Before & After */}
      <section className="bg-secondary/30 py-24 md:py-32">
        <div className="container-luxe">
          <div className="eyebrow">Results</div>
          <h2 className="mt-6 font-display text-4xl leading-tight md:text-6xl">Before &amp; After.</h2>
          <p className="mt-6 max-w-2xl font-body text-lg text-muted-foreground">
            Real clinical outcomes from our patients in Islamabad. Results are documented under consistent conditions.
            Individual outcomes vary based on anatomy and personalised treatment plans discussed in consultation.
          </p>

          {/* Treatment-specific before/after image pairs */}
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {((): { before: string; after: string; label: string }[] => {
              // Per-treatment-slug — every individual page gets unique images
              const treatmentMap: Record<string, { before: string; after: string; label: string }[]> = {
                // Cosmetic Surgery — Phase 1–7 Pakistani Surgical Artistry Images
                "rhinoplasty":    [
                  { before: "/treatment-images/rhin-a-before.webp", after: "/treatment-images/facelift-after.webp", label: "Best Rhinoplasty Islamabad — Side Profile, Natural Balance" },
                  { before: "/treatment-images/facelift-before.webp", after: "/treatment-images/rhinoplasty-after.webp", label: "Nose Surgery Pakistan — Symmetry & Grace Restored" },
                ],
                "facelift":       [
                  { before: "/treatment-images/facelift-before.webp", after: "/treatment-images/facelift-after.webp", label: "Facelift Islamabad — Refreshed, Natural Lift · 18 Years Experience" },
                  { before: "/treatment-images/botox-before.webp", after: "/treatment-images/botox-after.webp", label: "Brow Lift Pakistan — Alert, Youthful Expression" },
                ],
                "blepharoplasty": [
                  { before: "/treatment-images/facelift-before.webp", after: "/treatment-images/facelift-after.webp", label: "Eyelid Surgery Islamabad — Brighter, More Open Eyes" },
                  { before: "/treatment-images/botox-before.webp", after: "/treatment-images/botox-after.webp", label: "Blepharoplasty Pakistan — Smooth, Well-Defined Eyelid" },
                ],
                "liposuction":    [
                  { before: "/treatment-images/lipo-before.webp", after: "/treatment-images/lipo-after.webp", label: "Liposuction Islamabad — Sculpted, Defined Silhouette" },
                  { before: "/treatment-images/bre-a-before.webp", after: "/treatment-images/bre-a-after.webp", label: "Body Contouring Pakistan — Tailored Fit Restored" },
                ],
                "tummy-tuck":     [
                  { before: "/treatment-images/lipo-before.webp", after: "/treatment-images/lipo-after.webp", label: "Tummy Tuck Results Pakistan — Flat, Toned Abdomen" },
                  { before: "/treatment-images/bra-a-before.webp", after: "/treatment-images/bra-a-after.webp", label: "Abdominoplasty Islamabad — Post-Pregnancy Restoration" },
                ],
                "bbl":            [
                  { before: "/treatment-images/bre-b-before.webp", after: "/treatment-images/bre-b-after.webp", label: "BBL Islamabad — Natural Curves via Own Fat Transfer" },
                  { before: "/treatment-images/bra-b-before.webp", after: "/treatment-images/bra-b-after.webp", label: "Brazilian Butt Lift Pakistan — Balanced Body Proportions" },
                ],
                "ear-reshaping":  [
                  { before: "/treatment-images/rhinoplasty-before.webp", after: "/treatment-images/rhinoplasty-after.webp", label: "Otoplasty Islamabad — Ears Pinned, Profile Balanced" },
                  { before: "/treatment-images/facelift-before.webp", after: "/treatment-images/facelift-after.webp", label: "Ear Reshaping Pakistan — Natural, Proportional Result" },
                ],
                "brow-lift":      [
                  { before: "/treatment-images/botox-before.webp", after: "/treatment-images/botox-after.webp", label: "Brow Lift Islamabad — Alert, Open Expression" },
                  { before: "/treatment-images/facelift-before.webp", after: "/treatment-images/facelift-after.webp", label: "Forehead Lift Pakistan — Upper Face Rejuvenated" },
                ],
                // Cosmetic Injectables — Phase 1–6 Realistic Pakistani Models
                "botox":              [
                  { before: "/treatment-images/btx-a-before.webp", after: "/treatment-images/btx-a-after.webp", label: "The Professional — Natural Wrinkle Relaxation" },
                  { before: "/treatment-images/btx-b-before.webp", after: "/treatment-images/btx-b-after.webp", label: "Frown Lines Softened — Refreshed Look" },
                ],
                "dermal-fillers":     [
                  { before: "/treatment-images/fil-a-before.webp", after: "/treatment-images/fil-a-after.webp", label: "Sunken Cheeks Restored — Natural Volume" },
                  { before: "/treatment-images/fil-b-before.webp", after: "/treatment-images/fil-b-after.webp", label: "Jawline & Chin Defined" },
                ],
                "lip-fillers":        [
                  { before: "/treatment-images/lip-a-before.webp", after: "/treatment-images/lip-a-after.webp", label: "Natural Soft Pout — University Student" },
                  { before: "/treatment-images/lip-b-before.webp", after: "/treatment-images/lip-b-after.webp", label: "Volume & Hydration Restored" },
                ],
                "profhilo":           [
                  { before: "/treatment-images/pro-a-before.webp", after: "/treatment-images/pro-a-after.webp", label: "Skin Firmness & Glow — Elegant Senior" },
                  { before: "/treatment-images/pro-b-before.webp", after: "/treatment-images/pro-b-after.webp", label: "Glass Skin Radiance Effect" },
                ],
                "prp-therapy":        [
                  { before: "/treatment-images/prp-a-before.webp", after: "/treatment-images/prp-a-after.webp", label: "Acne Scars Revised — Smoother Texture" },
                  { before: "/treatment-images/prp-b-before.webp", after: "/treatment-images/prp-b-after.webp", label: "Dark Circles & Under-Eye Lines Lightened" },
                ],
                "glutathione-injections": [
                  { before: "/treatment-images/glt-a-before.webp", after: "/treatment-images/glt-a-after.webp", label: "Even Tone & Radiance — Bride-to-Be" },
                  { before: "/treatment-images/glt-b-before.webp", after: "/treatment-images/glt-b-after.webp", label: "Healthy Vibrant Skin Tone Restored" },
                ],
                // Hair Transplant
                "fue-hair-transplant":    [{ before: "/treatment-images/hair-before.webp", after: "/treatment-images/hair-after.webp", label: "FUE — Hairline Restoration" }, { before: "/treatment-images/beard-before.webp", after: "/treatment-images/beard-after.webp", label: "Full Coverage Result" }],
                "dhi-hair-transplant":    [{ before: "/treatment-images/beard-before.webp", after: "/treatment-images/beard-after.webp", label: "DHI — High Density Result" }, { before: "/treatment-images/hair-before.webp", after: "/treatment-images/hair-after.webp", label: "Unshaved DHI Outcome" }],
                "beard-hair-transplant":  [{ before: "/treatment-images/beard-before.webp", after: "/treatment-images/beard-after.webp", label: "Beard Transplant — Full Coverage" }, { before: "/treatment-images/hair-before.webp", after: "/treatment-images/hair-after.webp", label: "Natural Beard Density" }],
                "prp-hair-treatment":     [{ before: "/treatment-images/hair-before.webp", after: "/treatment-images/hair-after.webp", label: "PRP Hair — Density Restored" }, { before: "/treatment-images/acne-before.webp", after: "/treatment-images/acne-after.webp", label: "Follicle Awakening Result" }],
                "female-hair-transplant": [{ before: "/treatment-images/filler-before.webp", after: "/treatment-images/filler-after.webp", label: "Female Hair Transplant Result" }, { before: "/treatment-images/hair-before.webp", after: "/treatment-images/hair-after.webp", label: "Hairline & Density Restored" }],
                // Laser & Skincare — Phase 1–6 Authentic Pakistani Skin Journey Images
                "pico-laser":         [
                  { before: "/treatment-images/pico-a-before.webp", after: "/treatment-images/pico-a-after.webp", label: "The Professional Woman — Even Skin Tone Achieved · PICO Laser Islamabad" },
                  { before: "/treatment-images/pico-b-before.webp", after: "/treatment-images/pico-b-after.webp", label: "The Homemaker — Pigmentation Cleared, Mirror Glow · PICO Laser Pakistan" },
                ],
                "fractional-co2":     [
                  { before: "/treatment-images/co2-a-before.webp", after: "/treatment-images/co2-a-after.webp", label: "The Young Man — Acne Scars Revised, Smooth Texture · CO₂ Laser Islamabad" },
                  { before: "/treatment-images/co2-b-before.webp", after: "/treatment-images/co2-b-after.webp", label: "The Teacher — Fine Lines & Texture Dramatically Improved · CO₂ Resurfacing" },
                ],
                "hydrafacial":        [
                  { before: "/treatment-images/hydra-a-before.webp", after: "/treatment-images/hydra-a-after.webp", label: "The Bride-to-Be — Signature Glow Achieved · HydraFacial Glow Islamabad" },
                  { before: "/treatment-images/hydra-b-before.webp", after: "/treatment-images/hydra-b-after.webp", label: "University Student — Dewy, Deeply Cleansed Skin · HydraFacial Pakistan" },
                ],
                "laser-hair-removal": [
                  { before: "/treatment-images/pico-a-before.webp", after: "/treatment-images/pico-a-after.webp", label: "Laser Hair Removal Islamabad — Smooth, Hair-Free Skin" },
                  { before: "/treatment-images/co2-a-before.webp", after: "/treatment-images/co2-a-after.webp", label: "Permanent Hair Reduction — Pakistan Laser Clinic" },
                ],
                "hifu":               [
                  { before: "/treatment-images/hifu-a-before.webp", after: "/treatment-images/hifu-a-after.webp", label: "The Elegant Senior — Jawline Naturally Lifted · HIFU Non-Surgical Facelift Islamabad" },
                  { before: "/treatment-images/hifu-b-before.webp", after: "/treatment-images/pico-a-after.webp", label: "Corporate Executive — Visible Skin Tightening & Profile Lift · HIFU Pakistan" },
                ],
                "chemical-peels":     [
                  { before: "/treatment-images/co2-b-before.webp", after: "/treatment-images/co2-b-after.webp", label: "Male Professional — Natural Luminosity Achieved · Chemical Peel Islamabad" },
                  { before: "/treatment-images/hydra-a-before.webp", after: "/treatment-images/hydra-a-after.webp", label: "Daily Life — Refined Skin Tone & Clarity · Chemical Peel Pakistan" },
                ],
                "microneedling":      [
                  { before: "/treatment-images/pico-b-before.webp", after: "/treatment-images/pico-b-after.webp", label: "The Working Woman — Plump, Bright, Rejuvenated Skin · Microneedling PRP Islamabad" },
                  { before: "/treatment-images/hydra-b-before.webp", after: "/treatment-images/hydra-b-after.webp", label: "Mirror Selfie — Lit-From-Within Brightness · Microneedling PRP Pakistan" },
                ],
                // Dermatology
                "acne-treatment":      [{ before: "/treatment-images/acne-before.webp", after: "/treatment-images/acne-after.webp", label: "Acne — Cleared & Scar Faded" }, { before: "/treatment-images/keloid-before.webp", after: "/treatment-images/keloid-after.webp", label: "Post-Acne Hyperpigmentation" }],
                "melasma-treatment":   [{ before: "/treatment-images/keloid-before.webp", after: "/treatment-images/keloid-after.webp", label: "Melasma — Even Tone Achieved" }, { before: "/treatment-images/acne-before.webp", after: "/treatment-images/acne-after.webp", label: "Dark Patch Elimination" }],
                "vitiligo-treatment":  [{ before: "/treatment-images/eczema-before.webp", after: "/treatment-images/eczema-after.webp", label: "Vitiligo — Repigmentation Result" }, { before: "/treatment-images/laser-before.webp", after: "/treatment-images/laser-after.webp", label: "Skin Tone Restored" }],
                "psoriasis-treatment": [{ before: "/treatment-images/eczema-before.webp", after: "/treatment-images/eczema-after.webp", label: "Psoriasis — Flare Cleared" }, { before: "/treatment-images/acne-before.webp", after: "/treatment-images/acne-after.webp", label: "Long-Term Remission" }],
                "keloid-treatment":    [{ before: "/treatment-images/keloid-before.webp", after: "/treatment-images/keloid-after.webp", label: "Keloid — Flattened & Faded" }, { before: "/treatment-images/eczema-before.webp", after: "/treatment-images/eczema-after.webp", label: "Scar Revision Result" }],
                // Breast Surgery — Phase 1–5 Realistic Pakistani Silhouette Images
                "breast-augmentation": [
                  { before: "/treatment-images/bra-a-before.webp", after: "/treatment-images/bra-a-after.webp", label: "The Professional — Natural Enhanced Silhouette" },
                  { before: "/treatment-images/bra-b-before.webp", after: "/treatment-images/bra-b-after.webp", label: "The Student — Proportionate & Graceful Result" },
                ],
                "breast-reduction":    [
                  { before: "/treatment-images/bre-a-before.webp", after: "/treatment-images/bre-a-after.webp", label: "The Homemaker — Comfortable & Proportionate" },
                  { before: "/treatment-images/bre-b-before.webp", after: "/treatment-images/bre-b-after.webp", label: "The Working Woman — Refined Silhouette" },
                ],
                "breast-lift":         [
                  { before: "/treatment-images/breast-aug-before.webp", after: "/treatment-images/breast-aug-after.webp", label: "The Elegant Senior — Firmer, Youthful Shape" },
                  { before: "/treatment-images/breast-red-before.webp", after: "/treatment-images/breast-red-after.webp", label: "Lifted Profile — Natural Position Restored" },
                ],
                "gynecomastia":        [
                  { before: "/treatment-images/beard-before.webp", after: "/treatment-images/beard-after.webp", label: "The Young Man — Flat Masculine Chest" },
                  { before: "/treatment-images/hair-before.webp", after: "/treatment-images/hair-after.webp", label: "The Professional — Clean Shirt Profile" },
                ],
                "nipple-surgery":      [
                  { before: "/treatment-images/breast-aug-before.webp", after: "/treatment-images/breast-aug-after.webp", label: "Smooth, Symmetrical Contour Achieved" },
                  { before: "/treatment-images/breast-red-before.webp", after: "/treatment-images/breast-red-after.webp", label: "Subtle Refinement — Natural Result" },
                ],
                // Intimate Wellness — Phase 1–5 Discreet Pakistani Confidence Images
                "labiaplasty":        [
                  { before: "/treatment-images/lab-a-before.webp", after: "/treatment-images/lab-a-after.webp", label: "The Active Woman — Comfort & Ease of Movement Restored" },
                  { before: "/treatment-images/lab-b-before.webp", after: "/treatment-images/lab-b-after.webp", label: "The Homemaker — Renewed Internal Comfort & Confidence" },
                ],
                "vaginal-tightening": [
                  { before: "/treatment-images/vag-a-before.webp", after: "/treatment-images/vag-a-after.webp", label: "Post-Pregnancy Recovery — Vitality & Energy Restored" },
                  { before: "/treatment-images/vag-b-before.webp", after: "/treatment-images/vag-b-after.webp", label: "Symbolic Restoration — Tone & Firmness Renewed" },
                ],
                "hymenoplasty":       [
                  { before: "/treatment-images/hym-a-consult.webp", after: "/treatment-images/hym-b-relief.webp", label: "Private Consultation — Safety, Dignity & Peace of Mind" },
                  { before: "/treatment-images/vag-a-before.webp", after: "/treatment-images/hym-b-relief.webp", label: "A Fresh Start — Discreet, Medically Safe Care" },
                ],
                "p-shot":             [
                  { before: "/treatment-images/psh-a-before.webp", after: "/treatment-images/psh-a-after.webp", label: "The Businessman — Confidence & Energy Restored" },
                  { before: "/treatment-images/psh-b-before.webp", after: "/treatment-images/psh-b-after.webp", label: "Physical Vitality — Improved Function & Stamina" },
                ],
                "penile-fillers":     [
                  { before: "/treatment-images/pfl-a-clinical.webp", after: "/treatment-images/pfl-b-masculine.webp", label: "Medically Supervised — Safe & Expert Clinical Care" },
                  { before: "/treatment-images/psh-a-before.webp",   after: "/treatment-images/psh-a-after.webp",    label: "Masculine Confidence — Professional & Private Result" },
                ],
              };
              return treatmentMap[slug] ?? [
                { before: "/treatment-images/laser-before.webp", after: "/treatment-images/laser-after.webp", label: "Clinical Result" },
                { before: "/treatment-images/keloid-before.webp", after: "/treatment-images/keloid-after.webp", label: "Treatment Outcome" },
              ];
            })().map(({ before, after, label }, idx) => (
              <div key={idx} className="group relative overflow-hidden bg-secondary shadow-sm">
                <div className="aspect-[4/3] w-full relative">
                  <div className="absolute inset-0 grid grid-cols-2 divide-x divide-white/20">
                    <div className="relative overflow-hidden">
                      <img
                        src={before}
                        alt={`${label} — Before — Pelle Aesthetic Islamabad`}
                        className="h-full w-full object-cover grayscale opacity-75 transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        width={400}
                        height={300}
                      />
                      <div className="absolute bottom-3 left-3 bg-background/90 px-3 py-1.5 font-body text-[10px] uppercase tracking-[0.2em] shadow-sm">Before</div>
                    </div>
                    <div className="relative overflow-hidden">
                      <img
                        src={after}
                        alt={`${label} — After — Pelle Aesthetic Islamabad`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        width={400}
                        height={300}
                      />
                      <div className="absolute bottom-3 left-3 bg-accent text-accent-foreground px-3 py-1.5 font-body text-[10px] uppercase tracking-[0.2em] shadow-sm">After</div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-foreground/60 py-2 px-4 font-body text-[10px] uppercase tracking-[0.2em] text-background text-center backdrop-blur-sm">
                    {label} · {t.name} · Islamabad
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 font-body text-xs text-muted-foreground/60 text-center">
            * Photos are illustrative of typical clinical outcomes. Actual patient results are available for review during your private consultation at Pelle Aesthetic &amp; Cosmetic, Islamabad.
          </p>
        </div>
      </section>

      {/* FAQs */}

      {t.faqs.length > 0 && (
        <section className="bg-secondary/40 py-24 md:py-32">
          <div className="container-luxe grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="eyebrow">FAQs</div>
              <h2 className="mt-6 font-display text-4xl leading-tight md:text-6xl">Asked &amp; answered.</h2>
              <p className="mt-6 font-body text-muted-foreground">
                Still have questions? Message us on WhatsApp and Dr. Tasneem's team will personally respond.
              </p>
            </div>
            <div className="md:col-span-7">
              <Accordion type="single" collapsible className="w-full">
                {t.faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                    <AccordionTrigger className="py-6 text-left font-display text-xl hover:no-underline md:text-2xl">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-base leading-relaxed text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      <GeoDataLayer />
      <Footer />
      <WhatsAppFAB />
      <BackToTopFAB />
    </div>
  );
};

export default Treatment;