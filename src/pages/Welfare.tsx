import { NavLight } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFAB } from "@/components/site/WhatsAppFAB";
import { GeoDataLayer } from "@/components/site/GeoDataLayer";
import { usePageSeo } from "@/hooks/usePageSeo";
import { useEffect } from "react";
import { Heart, Users, HandHeart, Flame, MessageCircle } from "lucide-react";

const Welfare = () => {
  usePageSeo({
    title: "Pelle Care Initiative — Welfare & Charity | Dr. Tasneem Elahi Islamabad",
    description:
      "Pelle Care Initiative is Dr. Tasneem Elahi's charitable program providing free cosmetic and reconstructive treatment to burn victims and underprivileged patients in Islamabad and across Pakistan. Learn about our partnership with Dr. Mazhar Hussain.",
    canonicalPath: "/welfare",
    keywords:
      "free burn victim treatment islamabad, charity cosmetic surgery pakistan, pelle care initiative, dr tasneem elahi welfare, free medical treatment islamabad",
  });

  useEffect(() => {
    const ld = {
      "@context": "https://schema.org",
      "@type": "NGO",
      "name": "Pelle Care Initiative",
      "description": "Free and subsidised cosmetic and reconstructive treatment for burn victims and underprivileged patients across Pakistan.",
      "foundingDate": "2020",
      "founder": { "@type": "Person", "name": "Dr. Tasneem Elahi" },
      "location": {
        "@type": "PostalAddress",
        "addressLocality": "Islamabad",
        "addressCountry": "PK"
      },
      "url": "https://pelleaesthetic.pk/welfare",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+92-333-5100650",
        "contactType": "Welfare Enquiries",
        "availableLanguage": ["English", "Urdu"]
      }
    };
    const s = document.createElement("script");
    s.type = "application/ld+json"; s.id = "welfare-ld";
    s.text = JSON.stringify(ld);
    document.head.appendChild(s);
    return () => { document.getElementById("welfare-ld")?.remove(); };
  }, []);

  return (
    <>
      <NavLight />
      <main>
        {/* Hero */}
        <section className="bg-foreground text-background pt-32 pb-24 md:pt-44 md:pb-36">
          <div className="container-luxe grid gap-16 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="font-body text-[10px] uppercase tracking-[0.3em] text-accent mb-5">
                Pelle Care Initiative
              </div>
              <h1 className="font-display text-5xl leading-[1.03] md:text-7xl text-balance">
                Healthcare for All.{" "}
                <em className="text-accent">Our commitment to Pakistan.</em>
              </h1>
              <p className="mt-8 font-body text-base leading-relaxed text-background/70 md:text-lg max-w-2xl">
                Beyond the clinic walls, Dr. Tasneem Elahi and the Pelle Care Initiative are
                dedicated to making a meaningful difference in the lives of burn victims and
                underprivileged patients across Islamabad and Pakistan — providing free treatment,
                reconstructive care, and renewed hope to those who need it most.
              </p>
              <a
                href="https://wa.me/923335100650?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20the%20Pelle%20Care%20welfare%20programme."
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-accent px-8 py-4 text-xs uppercase tracking-[0.22em] text-accent-foreground transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Contact About Welfare Programme
              </a>
            </div>
            <div className="md:col-span-5 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-px bg-background/10 w-full">
                {[
                  { icon: <Flame className="h-8 w-8" />, label: "Burn Victim Care", desc: "Free reconstructive & cosmetic treatment for burn survivors" },
                  { icon: <HandHeart className="h-8 w-8" />, label: "Welfare Cases", desc: "Subsidised & free treatments for underprivileged patients" },
                  { icon: <Users className="h-8 w-8" />, label: "Community Outreach", desc: "Awareness campaigns across Islamabad and Pakistan" },
                  { icon: <Heart className="h-8 w-8" />, label: "Medical Partnership", desc: "Collaboration with Dr. Mazhar Hussain for hair restoration welfare" },
                ].map((item, i) => (
                  <div key={i} className="bg-foreground p-7 flex flex-col gap-4">
                    <div className="text-accent">{item.icon}</div>
                    <div className="font-display text-lg text-background">{item.label}</div>
                    <div className="font-body text-sm text-background/60">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Burn Victim Awareness */}
        <section className="bg-background py-24 md:py-36">
          <div className="container-luxe grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="eyebrow">Burn Case Awareness</div>
              <h2 className="mt-5 font-display text-5xl leading-[1.03] md:text-6xl text-balance">
                Healing burns.{" "}
                <em className="text-accent">Restoring lives.</em>
              </h2>
              <p className="mt-8 font-body text-base leading-relaxed text-muted-foreground">
                Burns are among the most devastating injuries — causing physical pain, permanent
                scarring, and deep psychological trauma. In Pakistan, thousands of burn victims
                lack access to the reconstructive care they urgently need.
              </p>
              <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
                Through the <strong>Pelle Care Initiative</strong>, Dr. Tasneem Elahi provides
                free and subsidised reconstructive cosmetic treatment to burn survivors —
                performing scar revision, skin grafting support and aesthetic restoration to help
                patients regain their confidence and quality of life.
              </p>
              <a
                href="https://wa.me/923335100650?text=Hi%2C%20I%20am%20a%20burn%20victim%20seeking%20welfare%20treatment."
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-foreground px-7 py-4 text-xs uppercase tracking-[0.22em] text-background transition-all hover:-translate-y-0.5"
              >
                <Flame className="h-4 w-4" />
                Apply for Burn Care Welfare
              </a>
            </div>
            <div className="md:col-span-7 grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
                  alt: "Medical team providing burn care treatment — Pelle Care Initiative Islamabad",
                  label: "Reconstructive Care",
                },
                {
                  img: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=80&w=800",
                  alt: "Surgical procedure for burn victim recovery — Pelle Aesthetic Islamabad",
                  label: "Surgical Restoration",
                },
              ].map(({ img, alt, label }, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <img src={img} alt={alt} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute bottom-0 left-0 right-0 bg-foreground/70 py-2 px-4 font-body text-[10px] uppercase tracking-[0.2em] text-background">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dr. Mazhar Hussain Partnership */}
        <section className="bg-secondary/40 py-24 md:py-32">
          <div className="container-luxe grid gap-16 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="eyebrow">Medical Partnership</div>
              <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
                In collaboration with{" "}
                <em className="text-accent">Dr. Mazhar Hussain</em>
              </h2>
              <p className="mt-8 font-body text-base leading-relaxed text-muted-foreground">
                Pelle Aesthetic &amp; Cosmetic is proud to collaborate with renowned hair transplant
                specialist <strong>Dr. Mazhar Hussain</strong> to extend our welfare mission into
                hair restoration.
              </p>
              <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
                Through this partnership, welfare and subsidised hair transplant procedures are made
                available to burn survivors and underprivileged patients who have experienced hair
                loss due to scarring, trauma, or medical conditions — restoring not just hair, but
                dignity and self-confidence.
              </p>
              <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
                Together, Dr. Tasneem Elahi and Dr. Mazhar Hussain share a common belief: that
                quality cosmetic and reconstructive care should not be a luxury reserved for the few,
                but a right accessible to all who need it in Pakistan.
              </p>
            </div>
            <div className="md:col-span-5 flex items-start">
              <div className="w-full border border-border p-10 bg-background">
                <div className="font-body text-[10px] uppercase tracking-[0.3em] text-accent mb-4">Partnership Details</div>
                {[
                  ["Specialist", "Dr. Mazhar Hussain — Hair Transplant Specialist"],
                  ["Host Clinic", "Pelle Aesthetic & Cosmetic, Islamabad"],
                  ["Focus", "Hair Restoration for Burn & Welfare Cases"],
                  ["Techniques", "FUE & DHI Hair Transplant"],
                  ["Availability", "By appointment — Welfare cases prioritised"],
                  ["Contact", "+92 333 5100650 (WhatsApp)"],
                ].map(([k, v]) => (
                  <div key={k} className="flex flex-col gap-0.5 py-4 border-b border-border last:border-0">
                    <div className="font-body text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{k}</div>
                    <div className="font-body text-sm text-foreground">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="bg-background py-24 md:py-32">
          <div className="container-luxe text-center">
            <div className="eyebrow">Apply for Welfare Treatment</div>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
              How to access <em className="text-accent">free treatment</em>
            </h2>
            <p className="mt-6 max-w-2xl mx-auto font-body text-base leading-relaxed text-muted-foreground">
              If you or someone you know is a burn victim or in financial need of cosmetic or
              reconstructive care, please reach out via WhatsApp. Dr. Tasneem personally reviews
              all welfare applications and responds within 48 hours.
            </p>
            <div className="mt-12 grid gap-px bg-border md:grid-cols-3 text-left">
              {[
                { step: "01", title: "Contact Us", desc: "Message us on WhatsApp with a brief description of the patient's condition and financial situation." },
                { step: "02", title: "Assessment", desc: "Dr. Tasneem will personally review the case. A consultation is arranged — in-person or via WhatsApp video." },
                { step: "03", title: "Treatment", desc: "Approved welfare cases receive free or heavily subsidised treatment at our Islamabad clinic." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="bg-background p-10">
                  <div className="font-body text-[10px] uppercase tracking-[0.3em] text-accent mb-4">{step}</div>
                  <h3 className="font-display text-2xl mb-3">{title}</h3>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/923335100650?text=Hi%2C%20I%20am%20applying%20for%20welfare%20treatment%20at%20Pelle%20Aesthetic."
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 bg-accent px-10 py-4 text-xs uppercase tracking-[0.25em] text-accent-foreground transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Apply on WhatsApp
            </a>
          </div>
        </section>

        <GeoDataLayer />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
};

export default Welfare;
