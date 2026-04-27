import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/services";

export const Services = () => (
  <section id="services" className="bg-background py-28 md:py-40">
    <div className="container-luxe">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="eyebrow">The Practice</div>
          <h2 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl text-balance">
            Treatments, <em className="text-accent">curated.</em>
          </h2>
        </div>
        <p className="md:col-span-6 md:col-start-7 md:pt-6 font-body text-lg leading-relaxed text-muted-foreground">
          From precision laser to surgical artistry, every service at Pelle is
          performed with medical-grade safety and a refined aesthetic sensibility.
        </p>
      </div>

      <div className="mt-20 grid gap-px bg-border md:grid-cols-3">
        {categories.map((c) => (
          <Link
            key={c.slug}
            to={`/category/${c.slug}`}
            className="group relative flex flex-col bg-background p-8 hover-rise md:p-10"
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-secondary">
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
            </div>
            <div className="mt-8 flex items-start justify-between gap-6">
              <div>
                <div className="font-body text-[11px] uppercase tracking-[0.25em] text-primary">{c.number}</div>
                <h3 className="mt-3 font-display text-3xl leading-tight md:text-4xl">{c.name}</h3>
                <p className="mt-3 font-body text-sm italic text-muted-foreground">{c.short}</p>
              </div>
              <ArrowUpRight className="mt-2 h-6 w-6 shrink-0 text-foreground/60 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
            </div>
            <p className="mt-5 font-body text-sm leading-relaxed text-foreground/70">{c.description}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);