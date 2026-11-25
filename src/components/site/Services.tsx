import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/services";
import { whatsappLink } from "@/data/site";

export const Services = () => {
  const [active, setActive] = useState(0);
  const c = categories[active];

  return (
    <section id="services" className="bg-gradient-to-br from-[hsl(25_32%_30%)] to-[hsl(25_32%_42%)] py-24 md:py-28">
      <div className="container-luxe">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-5xl leading-[1.05] text-background md:text-6xl text-balance">
            What Treatments <em className="text-accent">Do We Offer</em>
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-background/80">
            From precision laser to surgical artistry, every service at Pelle is performed with medical-grade safety and a refined aesthetic eye.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat, idx) => (
            <button
              key={cat.slug}
              onClick={() => setActive(idx)}
              className={`rounded-full px-6 py-2.5 font-body text-sm transition-colors ${
                idx === active ? "bg-background text-primary" : "bg-background/15 text-background hover:bg-background/25"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div key={c.slug} className="mx-auto mt-10 grid max-w-6xl animate-fade-in items-center gap-8 rounded-3xl bg-card p-6 md:grid-cols-2 md:p-10">
          <div>
            <div className="font-body text-xs uppercase tracking-[0.25em] text-primary">{c.number} · {c.short}</div>
            <h3 className="mt-3 font-display text-4xl md:text-5xl">{c.name}</h3>
            <p className="mt-5 font-body text-base leading-relaxed text-foreground/75">{c.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink(`Hello, I would like to book a consultation for ${c.name}.`)}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary px-7 py-3 font-body text-sm font-medium text-primary-foreground transition-colors hover:bg-foreground"
              >
                Book Appointment
              </a>
              <Link
                to={`/category/${c.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 font-body text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            {c.treatments.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2.5">
                {c.treatments.map((t) => (
                  <Link
                    key={t.slug}
                    to={`/category/${c.slug}/${t.slug}`}
                    className="rounded-full bg-secondary/70 px-4 py-2 font-body text-sm text-foreground/75 transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {t.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-secondary">
            <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
