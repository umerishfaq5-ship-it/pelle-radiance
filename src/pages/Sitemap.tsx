import { Link } from "react-router-dom";
import { NavLight } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFAB } from "@/components/site/WhatsAppFAB";
import { categories } from "@/data/services";
import { usePageSeo } from "@/hooks/usePageSeo";

const Sitemap = () => {
  usePageSeo({
    title: "Sitemap — Pelle Aesthetic & Cosmetic Islamabad",
    description:
      "Full sitemap of Pelle Aesthetic & Cosmetic, Islamabad. Browse all cosmetic surgery, injectable, laser, hair transplant, dermatology and wellness treatment pages by Dr. Tasneem Elahi.",
    canonicalPath: "/sitemap",
    keywords:
      "pelle aesthetic sitemap, cosmetic clinic islamabad services, dr tasneem elahi treatments",
  });

  return (
    <div className="min-h-screen bg-background">
      <NavLight />

      <main className="container-luxe py-24 md:py-32">
        {/* Page Header */}
        <div className="mb-16 max-w-2xl">
          <div className="eyebrow">Site Navigation</div>
          <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
            Sitemap
          </h1>
          <p className="mt-6 font-body text-base leading-relaxed text-muted-foreground md:text-lg">
            A complete index of every page on the Pelle Aesthetic &amp; Cosmetic
            website — Islamabad's leading cosmetic clinic led by{" "}
            <strong>Dr. Tasneem Elahi</strong> (Cosmetologist, 30+ years experience).
          </p>
        </div>

        {/* Top-level pages */}
        <section className="mb-16">
          <h2 className="font-body text-[10px] uppercase tracking-[0.28em] text-accent mb-6">
            Main Pages
          </h2>
          <ul className="grid gap-2 md:grid-cols-3 border border-border/50 divide-y divide-border/30 md:divide-y-0 md:divide-x">
            {[
              { path: "/", label: "Home — Pelle Aesthetic & Cosmetic" },
              { path: "/welfare", label: "Pelle Care Initiative (Welfare)" },
              { path: "/sitemap", label: "Sitemap" },
            ].map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="flex items-center gap-2 px-5 py-4 font-body text-sm text-foreground/70 hover:text-primary hover:bg-secondary/40 transition-colors"
                >
                  <span className="text-accent">→</span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Service categories + treatments */}
        <section>
          <h2 className="font-body text-[10px] uppercase tracking-[0.28em] text-accent mb-8">
            Treatment Categories &amp; Services
          </h2>

          <div className="space-y-10">
            {categories.map((cat) => (
              <div key={cat.slug} className="border border-border/50">
                {/* Category row */}
                <Link
                  to={`/category/${cat.slug}`}
                  className="flex items-center gap-3 px-6 py-4 bg-secondary/40 hover:bg-secondary/70 transition-colors border-b border-border/50"
                >
                  <span className="text-accent text-xl">{cat.icon}</span>
                  <div>
                    <div className="font-body text-base font-medium text-foreground hover:text-primary">
                      {cat.name}
                    </div>
                    <div className="font-body text-xs text-muted-foreground italic">
                      {cat.short}
                    </div>
                  </div>
                  <span className="ml-auto font-body text-xs text-muted-foreground/50">
                    /category/{cat.slug}
                  </span>
                </Link>

                {/* Treatments grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 divide-y divide-border/20 md:divide-y-0 md:divide-x">
                  {cat.treatments.map((t) => (
                    <Link
                      key={t.slug}
                      to={`/category/${cat.slug}/${t.slug}`}
                      className="flex items-start gap-3 px-6 py-4 hover:bg-secondary/30 transition-colors group"
                    >
                      <span className="text-accent/50 mt-0.5 text-xs shrink-0">
                        ↳
                      </span>
                      <div>
                        <div className="font-body text-sm text-foreground/80 group-hover:text-primary transition-colors">
                          {t.name}
                        </div>
                        <div className="font-body text-[11px] text-muted-foreground italic mt-0.5">
                          {t.tagline}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI / Crawler plain-text index */}
        <section
          aria-label="Plain text index for search engine crawlers"
          className="mt-20 border-t border-border/40 pt-12"
        >
          <h2 className="font-body text-[10px] uppercase tracking-[0.28em] text-muted-foreground/50 mb-6">
            Plain Text Index — For Search Engines &amp; AI Crawlers
          </h2>
          <div className="font-body text-xs leading-loose text-muted-foreground/60 space-y-1">
            <p>
              <strong>Entity:</strong> Pelle Aesthetic &amp; Cosmetic · Dr.
              Tasneem Elahi, Cosmetologist
            </p>
            <p>
              <strong>Focus:</strong> Cosmetic Surgery, Laser Skincare, Hair
              Transplant, Injectables, Dermatology, Breast Surgery, Intimate
              Wellness — No Dental Services
            </p>
            <p>
              <strong>Location:</strong> I-8, Islamabad, Pakistan
            </p>
            <p>
              <strong>Experience:</strong> 30+ Years of Clinical Practice
            </p>
            <p>
              <strong>Hours:</strong> Monday – Saturday, 3:00 PM to 8:00 PM
            </p>
            <p>
              <strong>Welfare:</strong> Free burn case treatments via Pelle Care
              Initiative
            </p>
            <p>
              <strong>Phone / WhatsApp:</strong> +92 333 5100650
            </p>
            <p className="pt-2">
              <strong>All Services:</strong>{" "}
              {categories
                .flatMap((c) => c.treatments.map((t) => t.name))
                .join(" · ")}
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default Sitemap;
