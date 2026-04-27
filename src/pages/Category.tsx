import { Link, useParams } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { NavLight } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { findCategory } from "@/data/services";

const Category = () => {
  const { slug = "" } = useParams();
  const cat = findCategory(slug);

  if (!cat) {
    return (
      <div className="min-h-screen bg-background">
        <NavLight />
        <div className="container-luxe py-40 text-center">
          <h1 className="font-display text-5xl">Category not found</h1>
          <Link to="/" className="link-underline mt-8 inline-block">Return home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <NavLight />

      <section className="relative overflow-hidden border-b border-border bg-secondary/30">
        <div className="container-luxe grid gap-12 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-7">
            <Link to="/" className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-3 w-3" /> All Treatments
            </Link>
            <div className="eyebrow mt-10">{cat.number} · Category</div>
            <h1 className="mt-6 font-display text-6xl leading-[1.02] md:text-8xl text-balance">
              {cat.name.split(" ")[0]} <em className="text-accent">{cat.name.split(" ").slice(1).join(" ")}</em>
            </h1>
            <p className="mt-8 max-w-xl font-body text-lg leading-relaxed text-muted-foreground">{cat.description}</p>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[4/5] w-full overflow-hidden bg-cream-deep shadow-elegant">
              <img src={cat.image} alt={cat.name} loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-luxe py-24 md:py-32">
        <div className="eyebrow">Sub-Treatments</div>
        <h2 className="mt-6 font-display text-4xl md:text-6xl">Explore the menu.</h2>

        <div className="mt-16 divide-y divide-border border-y border-border">
          {cat.treatments.length === 0 && (
            <div className="py-16 text-center font-body text-muted-foreground">
              Treatment details coming soon — please contact us for a personal consultation.
            </div>
          )}
          {cat.treatments.map((t, i) => (
            <Link
              key={t.slug}
              to={`/category/${cat.slug}/${t.slug}`}
              className="group grid grid-cols-12 items-center gap-6 py-10 transition-colors hover:bg-secondary/40"
            >
              <div className="col-span-1 font-display text-2xl text-primary md:text-3xl">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="col-span-11 md:col-span-7">
                <h3 className="font-display text-3xl leading-tight md:text-4xl">{t.name}</h3>
                <p className="mt-2 font-body text-sm italic text-muted-foreground">{t.tagline}</p>
              </div>
              <div className="hidden font-body text-sm text-muted-foreground md:col-span-2 md:block">{t.duration}</div>
              <div className="hidden items-center justify-end gap-3 md:col-span-2 md:flex">
                <span className="font-body text-xs uppercase tracking-[0.22em] text-foreground">Read more</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Category;