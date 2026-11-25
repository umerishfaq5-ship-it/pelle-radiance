import { Link, useParams } from "react-router-dom";
import { MapPin, Clock, Phone, MessageCircle, ArrowRight, Shield, Star, Send, Lock } from "lucide-react";
import { NavLight } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { GeoDataLayer } from "@/components/site/GeoDataLayer";
import { WhatsAppFAB } from "@/components/site/WhatsAppFAB";
import { BackToTopFAB } from "@/components/site/BackToTopFAB";
import { getLocationBySlug, locations } from "@/data/locations";
import { usePageSeo } from "@/hooks/usePageSeo";
import { useEffect, useState } from "react";
import { submitToSheet } from "@/lib/submitToSheet";

const WHATSAPP = "923335100650";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP}`;

const CORE_SERVICES = [
  {
    icon: "✦",
    category: "Cosmetic Surgery",
    tagline: "Rhinoplasty & Facelifts",
    description:
      "Precision surgical refinement performed by Dr. Tasneem Elahi. Rhinoplasty, facelift, blepharoplasty and body contouring — natural results, no overstatement.",
    href: "/category/cosmetic-surgery",
    treatments: ["Rhinoplasty (Nose Job)", "Facelift (Rhytidectomy)", "Blepharoplasty", "Liposuction", "Tummy Tuck"],
  },
  {
    icon: "◈",
    category: "Injectables",
    tagline: "Botox & Fillers",
    description:
      "Medical-grade Botox, dermal fillers, Profhilo, and PRP — administered with clinical precision for results that enhance without altering your natural character.",
    href: "/category/cosmetic-injectables",
    treatments: ["Botox Islamabad", "Dermal Fillers", "Lip Fillers", "Profhilo Skin Booster", "PRP Therapy"],
  },
  {
    icon: "◇",
    category: "Advanced Skin",
    tagline: "PICO Laser & HydraFacials",
    description:
      "State-of-the-art PICO Laser for pigmentation and acne, CO₂ resurfacing, HIFU non-surgical lifting, and HydraFacial — the gold standard in medical skincare.",
    href: "/category/laser-skincare",
    treatments: ["PICO Laser", "Fractional CO₂", "HydraFacial", "HIFU Non-Surgical Lift", "Microneedling PRP"],
  },
];

const TRUST_SIGNALS = [
  { stat: "30+", label: "Years Clinical Experience" },
  { stat: "5,000+", label: "Patients Treated" },
  { stat: "7", label: "Specialty Areas" },
  { stat: "100%", label: "Appointment-Only Privacy" },
];

const Location = () => {
  const { slug = "" } = useParams();
  const location = getLocationBySlug(slug);

  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  usePageSeo(
    location
      ? {
          title: location.metaTitle,
          description: location.metaDescription,
          canonicalPath: `/location/${slug}`,
          keywords: location.keywords,
        }
      : {
          title: "Location | Pelle Aesthetic & Cosmetic Islamabad",
          description: "Premium cosmetic clinic serving Islamabad's elite neighbourhoods. Led by Dr. Tasneem Elahi.",
        }
  );

  // Inject LocalBusiness + BreadcrumbList schema for this location page
  useEffect(() => {
    if (!location) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": ["MedicalClinic", "LocalBusiness"],
      name: "Pelle Aesthetic & Cosmetic",
      url: `https://pelleaesthetic.pk/location/${slug}`,
      telephone: "+92-333-5100650",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot 14, Street 32, I-8/3",
        addressLocality: "Islamabad",
        addressRegion: "Islamabad Capital Territory",
        postalCode: "44000",
        addressCountry: "PK",
      },
      areaServed: {
        "@type": "Place",
        name: location.schema.serviceArea,
      },
      founder: {
        "@type": "Physician",
        name: "Dr. Tasneem Elahi",
        jobTitle: "Cosmetologist & Aesthetic Physician",
        medicalSpecialty: "Cosmetology",
      },
    };

    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://pelleaesthetic.pk/" },
        { "@type": "ListItem", position: 2, name: location.name, item: `https://pelleaesthetic.pk/location/${slug}` },
      ],
    };

    const s1 = document.createElement("script");
    s1.type = "application/ld+json";
    s1.id = "loc-schema-ld";
    s1.text = JSON.stringify(schema);
    document.head.appendChild(s1);

    const s2 = document.createElement("script");
    s2.type = "application/ld+json";
    s2.id = "loc-breadcrumb-ld";
    s2.text = JSON.stringify(breadcrumb);
    document.head.appendChild(s2);

    return () => {
      document.getElementById("loc-schema-ld")?.remove();
      document.getElementById("loc-breadcrumb-ld")?.remove();
    };
  }, [location, slug]);

  if (!location) {
    return (
      <div className="min-h-screen bg-background">
        <NavLight />
        <div className="container-luxe py-40 text-center">
          <h1 className="font-display text-5xl">Location not found</h1>
          <Link to="/" className="link-underline mt-8 inline-block">Return home</Link>
        </div>
      </div>
    );
  }

  const waText = encodeURIComponent(
    `Hi, I'm a resident of ${location.name} and I'd like to book a VIP consultation at Pelle Aesthetic.`
  );

  return (
    <div className="min-h-screen bg-background">
      <NavLight />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-border bg-secondary/30">
        {/* Subtle background texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,var(--border) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,var(--border) 40px)",
          }}
        />

        <div className="container-luxe py-24 md:py-36">
          {/* Breadcrumb */}
          <nav className="mb-10 flex items-center gap-2 font-body text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span className="text-accent">→</span>
            <span className="text-foreground/60">Locations</span>
            <span className="text-accent">→</span>
            <span className="text-accent">{location.name}</span>
          </nav>

          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="eyebrow">Premium Cosmetic Clinic · {location.sector} · Islamabad</div>
              <h1 className="mt-6 font-display text-5xl leading-[1.02] md:text-7xl text-balance">
                {location.h1}
              </h1>
              <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-muted-foreground md:text-lg">
                {location.intro[0]}
              </p>

              {/* Stats row */}
              <div className="mt-12 grid grid-cols-4 gap-px bg-border max-w-lg">
                {TRUST_SIGNALS.map(({ stat, label }) => (
                  <div key={label} className="bg-background p-5 text-center">
                    <div className="font-display text-2xl text-accent">{stat}</div>
                    <div className="mt-1 font-body text-[9px] uppercase tracking-[0.2em] text-muted-foreground leading-tight">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Commute note */}
              <div className="mt-10 flex items-start gap-3 border border-border/50 bg-secondary/40 p-5 max-w-lg">
                <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <div>
                  <div className="font-body text-xs uppercase tracking-[0.2em] text-accent mb-1">Distance from {location.shortName}</div>
                  <p className="font-body text-sm text-foreground/70">{location.commuteNote} to our clinic at Plot 14, Street 32, I-8/3, Islamabad.</p>
                </div>
              </div>
            </div>

            {/* Booking sidebar */}
            <aside className="md:col-span-5">
              <div className="bg-foreground p-8 text-background shadow-elegant md:p-10">
                <div className="eyebrow !text-accent">Book a VIP Consultation</div>
                {done ? (
                  <div className="mt-6 flex flex-col items-center text-center gap-4 py-4">
                    <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-accent text-xl">✓</span>
                    </div>
                    <div>
                      <div className="font-display text-2xl">Request Received!</div>
                      <p className="font-body text-sm text-background/70 mt-2">Dr. Tasneem's team will WhatsApp you within 2 hours.</p>
                    </div>
                    <a
                      href={`${WHATSAPP_HREF}?text=${waText}`}
                      target="_blank" rel="noreferrer"
                      className="flex items-center gap-2 bg-[#25D366] px-6 py-3 font-body text-xs uppercase tracking-[0.2em] text-white"
                    >
                      <MessageCircle className="h-4 w-4" /> Also WhatsApp Us
                    </a>
                  </div>
                ) : (
                  <>
                    <h2 className="mt-4 font-display text-3xl leading-tight">Your private consultation, on the house.</h2>
                    <p className="mt-3 font-body text-sm leading-relaxed text-background/70">
                      Serving {location.audience}. Leave your details and Dr. Tasneem's team will schedule your confidential visit.
                    </p>
                    <form
                      className="mt-8 space-y-4"
                      onSubmit={async (e) => {
                        e.preventDefault();
                        if (!form.name || !form.phone) return;
                        setSending(true);
                        try {
                          await Promise.allSettled([
                            submitToSheet({
                              name: form.name,
                              phone: form.phone,
                              category: `Location — ${location.name}`,
                              message: form.message,
                              source: `Location Page — ${location.name}`,
                            }),
                            fetch("https://formspree.io/f/xanynvjk", {
                              method: "POST",
                              headers: { "Content-Type": "application/json", Accept: "application/json" },
                              body: JSON.stringify({
                                name: form.name,
                                phone: form.phone,
                                category: `Location — ${location.name}`,
                                message: form.message,
                                _subject: `[Location] ${location.name} Consultation — Pelle Aesthetic`,
                              }),
                            }),
                          ]);
                          setDone(true);
                        } catch { /* silent fail */ } finally {
                          setSending(false);
                        }
                      }}
                    >
                      <input
                        required
                        aria-label="Full name"
                        placeholder="Full name"
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className="w-full border border-background/20 bg-transparent px-4 py-3 font-body text-sm text-background placeholder:text-background/50 focus:border-accent focus:outline-none"
                      />
                      <input
                        required
                        type="tel"
                        aria-label="Phone or WhatsApp number"
                        placeholder="Phone / WhatsApp"
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                        className="w-full border border-background/20 bg-transparent px-4 py-3 font-body text-sm text-background placeholder:text-background/50 focus:border-accent focus:outline-none"
                      />
                      <textarea
                        rows={3}
                        aria-label="Treatment interest or message"
                        placeholder="What treatment interests you?"
                        value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        className="w-full resize-none border border-background/20 bg-transparent px-4 py-3 font-body text-sm text-background placeholder:text-background/50 focus:border-accent focus:outline-none"
                      />
                      <button
                        type="submit"
                        disabled={sending}
                        className="w-full flex items-center justify-center gap-2 bg-accent py-4 font-body text-xs uppercase tracking-[0.25em] text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
                      >
                        <Send className="h-4 w-4" />
                        {sending ? "Sending..." : "Request VIP Consultation"}
                      </button>
                      <a
                        href={`${WHATSAPP_HREF}?text=${waText}`}
                        target="_blank" rel="noreferrer"
                        className="flex items-center justify-center gap-2 border border-background/20 py-3.5 font-body text-xs uppercase tracking-[0.22em] text-background hover:bg-background hover:text-foreground transition-colors"
                      >
                        <MessageCircle className="h-4 w-4" /> WhatsApp Us Directly
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
        </div>
      </section>

      {/* ── Extended Intro ───────────────────────────────────────────── */}
      <section className="container-luxe py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="eyebrow">About the Clinic</div>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
              Why {location.shortName} residents choose Pelle.
            </h2>
            <div className="mt-8 space-y-2">
              {[
                `Dr. Tasneem Elahi — 30+ years of clinical practice`,
                `Appointment-only. Fully private. No walk-ins.`,
                `Medical-grade treatments, not beauty salon services`,
                `${location.commuteNote}`,
                `Free initial consultation for all new patients`,
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 py-3 border-b border-border/30">
                  <Star className="h-3.5 w-3.5 text-accent mt-1 shrink-0" />
                  <span className="font-body text-sm text-foreground/80">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="font-body text-base leading-relaxed text-muted-foreground md:text-lg">
              {location.intro[1]}
            </p>

            {/* Why Residents of [Location] Choose Pelle */}
            <div className="mt-12 border border-border/50 bg-secondary/30 p-8">
              <div className="font-body text-[10px] uppercase tracking-[0.28em] text-accent mb-6">
                Why Residents of {location.name} Choose Pelle
              </div>
              <div className="space-y-5">
                {[
                  {
                    title: "Proximity to I-8",
                    body: `From ${location.landmark}, the drive to our clinic at I-8/3 takes under 25 minutes — making routine follow-ups and treatment courses entirely manageable within a professional schedule.`,
                  },
                  {
                    title: "Medical Authority",
                    body: "Dr. Tasneem Elahi is not a beautician. She is a certified cosmetologist with 30+ years of clinical practice — the distinction that patients of the highest standard require before trusting their face and body to any practitioner.",
                  },
                  {
                    title: "Complete Discretion",
                    body: "Every consultation is appointment-only, one-to-one with Dr. Tasneem. No waiting rooms, no shared spaces, no patient lists visible to others. A standard of privacy befitting the " + location.lifestyle + " community.",
                  },
                ].map(({ title, body }) => (
                  <div key={title} className="flex gap-5">
                    <div className="w-px bg-accent/40 shrink-0" />
                    <div>
                      <div className="font-body text-xs uppercase tracking-[0.2em] text-foreground/80 mb-2">{title}</div>
                      <p className="font-body text-sm leading-relaxed text-muted-foreground">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Internal links */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 border border-border px-5 py-3 font-body text-xs uppercase tracking-[0.22em] text-foreground/70 hover:text-primary hover:border-primary transition-colors"
              >
                <ArrowRight className="h-3 w-3" /> About Pelle Aesthetic
              </Link>
              <Link
                to="/category/cosmetic-surgery"
                className="inline-flex items-center gap-2 border border-border px-5 py-3 font-body text-xs uppercase tracking-[0.22em] text-foreground/70 hover:text-primary hover:border-primary transition-colors"
              >
                <ArrowRight className="h-3 w-3" /> Our Cosmetic Surgery Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Services ────────────────────────────────────────────── */}
      <section className="bg-secondary/30 py-24 md:py-32">
        <div className="container-luxe">
          <div className="eyebrow">Our Services in {location.name}</div>
          <h2 className="mt-6 font-display text-4xl leading-tight md:text-6xl max-w-2xl">
            Three pillars of clinical excellence.
          </h2>
          <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-muted-foreground md:text-lg">
            Every treatment at Pelle is performed or personally supervised by Dr. Tasneem Elahi, using medical-grade equipment and internationally sourced materials.
          </p>

          <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
            {CORE_SERVICES.map((svc) => (
              <div key={svc.category} className="bg-background p-8 md:p-10">
                <div className="text-3xl text-accent mb-6">{svc.icon}</div>
                <div className="font-body text-[10px] uppercase tracking-[0.28em] text-muted-foreground mb-2">
                  {svc.tagline}
                </div>
                <h3 className="font-display text-3xl leading-tight mb-4">{svc.category}</h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground mb-6">{svc.description}</p>
                <ul className="space-y-1.5 mb-8">
                  {svc.treatments.map((t) => (
                    <li key={t} className="flex items-center gap-2 font-body text-xs text-foreground/70">
                      <span className="text-accent text-[10px]">→</span> {t}
                    </li>
                  ))}
                </ul>
                <Link
                  to={svc.href}
                  className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.22em] text-accent hover:gap-3 transition-all"
                >
                  Explore {svc.category} <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NAP Section (Local SEO Citation) ─────────────────────────── */}
      <section className="container-luxe py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="eyebrow">Find Us</div>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
              Pelle Aesthetic & Cosmetic — Islamabad
            </h2>
            <p className="mt-6 font-body text-base leading-relaxed text-muted-foreground">
              Our clinic is located in the heart of Sector I-8/3 — a professional medical hub serving Islamabad's most discerning residents, including those from {location.name}.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-px bg-border md:grid-cols-2">
              {[
                {
                  icon: <MapPin className="h-4 w-4 text-accent" />,
                  label: "Address",
                  value: "Plot 14, Street 32, I-8/3, Islamabad, Pakistan",
                },
                {
                  icon: <Phone className="h-4 w-4 text-accent" />,
                  label: "Phone / WhatsApp",
                  value: "+92 333 5100650",
                },
                {
                  icon: <Clock className="h-4 w-4 text-accent" />,
                  label: "Clinic Hours",
                  value: "Monday – Saturday · 3:00 PM – 8:00 PM",
                },
                {
                  icon: <Shield className="h-4 w-4 text-accent" />,
                  label: "Consultation",
                  value: "Appointment-only · 100% Private · One-to-one with Dr. Tasneem",
                },
              ].map(({ icon, label, value }) => (
                <div key={label} className="bg-secondary/30 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {icon}
                    <div className="font-body text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{label}</div>
                  </div>
                  <div className="font-body text-sm text-foreground/80 leading-relaxed">{value}</div>
                </div>
              ))}
            </div>

            {/* Final CTA */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                id={`whatsapp-cta-${slug}`}
                href={`${WHATSAPP_HREF}?text=${waText}`}
                target="_blank" rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] py-4 font-body text-xs uppercase tracking-[0.25em] text-white hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="h-4 w-4" /> Book VIP Consultation via WhatsApp
              </a>
              <a
                href={`tel:+92${WHATSAPP.slice(2)}`}
                className="flex items-center justify-center gap-2 border border-border px-6 py-4 font-body text-xs uppercase tracking-[0.22em] text-foreground/70 hover:text-primary hover:border-primary transition-colors"
              >
                <Phone className="h-4 w-4" /> Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Other Locations ───────────────────────────────────────────── */}
      <section className="bg-secondary/20 py-16">
        <div className="container-luxe">
          <div className="font-body text-[10px] uppercase tracking-[0.28em] text-muted-foreground/60 mb-6">
            Also Serving
          </div>
          <div className="flex flex-wrap gap-3">
            {locations
              .filter((l) => l.slug !== slug)
              .map((l) => (
                <Link
                  key={l.slug}
                  to={`/location/${l.slug}`}
                  className="border border-border/50 px-4 py-2 font-body text-xs uppercase tracking-[0.2em] text-foreground/60 hover:text-primary hover:border-primary transition-colors"
                >
                  {l.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <GeoDataLayer />
      <Footer />
      <WhatsAppFAB />
      <BackToTopFAB />
    </div>
  );
};

export default Location;
