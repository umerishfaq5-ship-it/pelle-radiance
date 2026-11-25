import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/services";
import { CategoryImage } from "@/components/site/CategoryImage";

export const Services = () => {
  const [active, setActive] = useState(0);
  const c = categories[active];

  return (
    <section id="services" className="bg-gradient-brand py-20 md:py-28">
      <div className="container-luxe">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="font-body text-xs uppercase tracking-[0.28em] text-accent">The Practice</div>
          <h2 className="mt-4 font-display text-5xl leading-[1.03] text-background md:text-6xl text-balance">
            7 Specialties, <em className="text-accent">one clinic.</em>
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-background/80">
            From precision cosmetic surgery to advanced laser skincare, from hair transplant to
            injectable rejuvenation — every service at Pelle is led by Dr. Tasneem Elahi with
            medical-grade safety and a refined aesthetic sensibility.
          </p>
        </div>

        {/* Category tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5" role="tablist">
          {categories.map((cat, idx) => (
            <button
              key={cat.slug}
              role="tab"
              aria-selected={idx === active}
              onClick={() => setActive(idx)}
              className={`rounded-full px-5 py-2.5 font-body text-sm transition-colors ${
                idx === active ? "bg-background text-primary" : "bg-background/15 text-background hover:bg-background/25"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Active category card */}
        <div key={c.slug} className="mx-auto mt-8 grid max-w-6xl animate-fade-in items-center gap-8 rounded-3xl bg-card p-6 md:grid-cols-2 md:p-10">
          <div>
            <div className="font-body text-xs uppercase tracking-[0.25em] text-primary">
              {c.icon} {c.number} · {c.short}
            </div>
            <h3 className="mt-3 font-display text-4xl md:text-5xl">{c.name}</h3>
            <p className="mt-5 font-body text-base leading-relaxed text-foreground/75">{c.description}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#appointment"
                className="rounded-full bg-primary px-7 py-3 font-body text-sm font-medium text-primary-foreground transition-colors hover:bg-foreground"
              >
                Book Appointment
              </a>
              <Link
                to={`/category/${c.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 font-body text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {c.treatments.length > 0 ? `View ${c.treatments.length} Treatments` : "Learn More"} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {c.treatments.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-2">
                {c.treatments.map((t) => (
                  <Link
                    key={t.slug}
                    to={`/category/${c.slug}/${t.slug}`}
                    className="rounded-full bg-secondary px-4 py-2 font-body text-sm text-foreground/75 transition-colors hover:bg-muted hover:text-primary"
                  >
                    {t.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to={`/category/${c.slug}`} className="block aspect-[4/3] overflow-hidden rounded-2xl bg-secondary">
            <CategoryImage
              image={c.image}
              alt={`Best ${c.name} in Islamabad — Dr. Tasneem Elahi · Pelle Aesthetic & Cosmetic`}
            />
          </Link>
        </div>

        {/* Crawlable links to every category (keeps all categories linked from the home page) */}
        <nav aria-label="All specialties" className="sr-only">
          {categories.map((cat) => (
            <Link key={cat.slug} to={`/category/${cat.slug}`}>{cat.name}</Link>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-center gap-3 text-center md:flex-row md:justify-center md:gap-5">
          <a
            href="https://wa.me/923335100650?text=Hi%2C%20I%20want%20to%20know%20more%20about%20treatments%20at%20Pelle."
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent px-8 py-3.5 font-body text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Ask About Pricing
          </a>
          <span className="font-body text-sm text-background/75">or call · +92 333 5100650</span>
        </div>
      </div>
    </section>
  );
};
