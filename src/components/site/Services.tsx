import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/services";
import { CategoryImage } from "@/components/site/CategoryImage";

export const Services = () => (
  <section id="services" className="bg-background py-24 md:py-36">
    <div className="container-luxe">
      {/* Section header */}
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="eyebrow">The Practice</div>
          <h2 className="mt-5 font-display text-5xl leading-[1.03] md:text-7xl text-balance">
            7 Specialties,{" "}
            <em className="text-accent">one clinic.</em>
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7 md:pt-4">
          <p className="font-body text-base leading-relaxed text-muted-foreground md:text-lg">
            From precision cosmetic surgery to advanced laser skincare, from hair transplant to
            injectable rejuvenation — every service at Pelle is led by Dr. Tasneem Elahi with
            medical-grade safety and a refined aesthetic sensibility.
          </p>
          <a
            href="https://wa.me/923335100650?text=Hi%2C%20I%20want%20to%20know%20more%20about%20treatments%20at%20Pelle."
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-body text-sm uppercase tracking-[0.2em] text-primary hover:text-accent transition-colors"
          >
            Ask About Pricing →
          </a>
        </div>
      </div>

      {/* 3-col grid on desktop, 2-col on tablet, 1-col mobile */}
      <div className="mt-16 grid grid-cols-1 gap-px bg-border sm:grid-cols-2 xl:grid-cols-3">
        {categories.map((c) => (
          <Link
            key={c.slug}
            to={`/category/${c.slug}`}
            className="group relative flex flex-col bg-background p-7 hover-rise md:p-9 transition-colors hover:bg-secondary/20"
          >
            {/* Category number */}
            <div className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">{c.number}</div>

            {/* Image */}
            <div className="aspect-[5/3] w-full overflow-hidden bg-secondary">
              <CategoryImage
                image={c.image}
                alt={`Best ${c.name} in Islamabad — Dr. Tasneem Elahi · Pelle Aesthetic & Cosmetic`}
                className="transition-transform duration-[1000ms] group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="mt-6 flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-accent text-lg">{c.icon}</span>
                  <h3 className="font-display text-2xl leading-tight md:text-3xl">{c.name}</h3>
                </div>
                <p className="font-body text-sm italic text-muted-foreground">{c.short}</p>
              </div>
              <ArrowUpRight className="mt-1.5 h-5 w-5 shrink-0 text-foreground/40 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
            </div>

            <p className="mt-3 font-body text-sm leading-relaxed text-foreground/65">{c.description}</p>

            {/* Treatment count badge */}
            <div className="mt-5 flex items-center justify-between">
              <span className="font-body text-[10px] uppercase tracking-[0.22em] text-primary">
                {c.treatments.length > 0 ? `${c.treatments.length} Treatments Available` : "Consultation Available"}
              </span>
              <span className="font-body text-xs uppercase tracking-[0.18em] text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                Explore →
              </span>
            </div>

            {/* Popular treatments preview (hover reveal) */}
            {c.treatments.length > 0 && (
              <div className="mt-4 pt-4 border-t border-border/60 space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {c.treatments.slice(0, 3).map((t) => (
                  <div key={t.slug} className="font-body text-xs text-foreground/60 flex items-center gap-1.5">
                    <span className="text-accent">·</span> {t.name}
                  </div>
                ))}
                {c.treatments.length > 3 && (
                  <div className="font-body text-xs text-muted-foreground italic">
                    + {c.treatments.length - 3} more treatments
                  </div>
                )}
              </div>
            )}
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 flex flex-col items-center gap-4 text-center md:flex-row md:justify-center">
        <a
          href="#appointment"
          className="inline-flex items-center gap-3 bg-foreground px-9 py-4 text-xs uppercase tracking-[0.22em] text-background transition-all hover:-translate-y-0.5 hover:opacity-90"
        >
          Book Your Consultation
        </a>
        <span className="font-body text-sm text-muted-foreground">or call · +92 333 5100650</span>
      </div>
    </div>
  </section>
);